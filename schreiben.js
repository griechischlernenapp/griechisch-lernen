// ============================================================
//  schreiben.js  –  Griechische Buchstaben mit dem Finger nachfahren
//
//  Die App lässt das Kind hören, lesen, wählen und tippen – aber
//  nirgends schreiben. Hier fährt es den Buchstaben nach: die graue
//  Form steht da, die Spur wird grün, wo sie im Buchstaben liegt,
//  und blass rot daneben. Ist die Form voll, wird der Name gesprochen.
//
//  Es wird nichts Eigenes mitgebracht:
//    * die Formen sind ALPHA_UMRISSE aus alphabet.js – dieselben,
//      aus denen das Ausmalblatt gedruckt wird, schon aufgeblasen,
//      damit innen Platz zum Nachfahren ist
//    * der Name kommt über tonDatei() aus ton/
//
//  Alles steckt in einer Kapsel; nach außen geht nur
//  startSchreiben(), das showScreen() ruft, und schreibeBuchstabe(),
//  mit dem die Alphabet-Ansicht später direkt auf einen Buchstaben
//  springen kann.
// ============================================================

(function () {
  "use strict";

  var HOCH = 881, TIEF = -234;   // Ober- und Unterlänge im Zeichensatz
  var RAND = 26;                 // Luft ringsum
  var RASTER = 9;                // Abstand der Messpunkte
  var RADIUS = 26;               // wie weit die Spur einen Punkt erwischt
  var STRICH = 34;               // Breite der Spur
  var ZIEL = 0.85;               // ab hier gilt der Buchstabe als geschrieben
  var SAUBER = 0.66;             // so viel der Spur muss innen liegen

  // Sechs Stifte zur Auswahl. Jede Farbe muss auf dem grauen Buchstaben
  // stehen können, deshalb keine hellen Töne. Der erste ist das Grün der App.
  var STIFTE = [
    {n: "Grün",    f: "#0F6E56"},
    {n: "Blau",    f: "#2E7DD1"},
    {n: "Orange",  f: "#E2710F"},
    {n: "Rot",     f: "#C63A28"},
    {n: "Lila",    f: "#7B4EA8"},
    {n: "Pink",    f: "#D9558B"}
  ];

  var stelle = 0, grossModus = true, fertigListe = {}, gebaut = false, stift = 0, tonAn = true;
  try {
    var g = localStorage.getItem("schr_stelle"); if (g !== null) stelle = +g;
    var k = localStorage.getItem("schr_gross"); if (k !== null) grossModus = (k === "1");
    fertigListe = JSON.parse(localStorage.getItem("schr_fertig") || "{}");
    var f = localStorage.getItem("schr_stift");
    if (f !== null && STIFTE[+f]) stift = +f;
    var s = localStorage.getItem("schr_ton"); if (s !== null) tonAn = (s === "1");
  } catch (e) {}

  var el = {}, ctx = null;
  var pfad = null;         // Path2D in Bildschirmkoordinaten
  var schaerfe = 1;        // Gerätepunkte je CSS-Punkt (Handy: 2 oder 3)
  var punkte = [], getroffen = [];
  var innen = 0, aussen = 0;
  var malt = false, letzter = null, gelobt = false, spur = [];

  // ACHTUNG: isPointInPath rechnet in GERAETEPUNKTEN, unabhängig von der
  // Verkleinerung, die setTransform gesetzt hat. Alles andere hier rechnet
  // in CSS-Punkten. Ohne diese Umrechnung stimmt es nur auf einem Bildschirm
  // mit einfacher Auflösung – auf dem Handy läge der geprüfte Punkt bei der
  // Hälfte oder einem Drittel, und die ganze Spur gälte als daneben.
  function imBuchstaben(x, y) {
    return ctx.isPointInPath(pfad, x * schaerfe, y * schaerfe);
  }

  function buchstabe() { return alphabet[stelle]; }

  function zeichenJetzt() {
    var a = buchstabe();
    return grossModus ? a.gross : a.klein.split("/")[0];   // Sigma: die gewöhnliche Form
  }

  // ── Den Schirm bauen ──────────────────────────────────────
  function bauen() {
    var wo = document.getElementById("schr-area");
    if (!wo) return false;
    var h = '';
    h += '<p class="schr-hin">Fahr den Buchstaben mit dem Finger nach. Bleib dabei in der '
      +  'grauen Form – was daneben geht, zählt nicht mit.</p>';
    h += '<div class="schr-reihe" id="schr-reihe" role="group" aria-label="Buchstabe"></div>';
    h += '<div class="schr-leiste">'
      +  '<button type="button" class="cat-btn" id="schr-gross">Α&nbsp; groß</button>'
      +  '<button type="button" class="cat-btn" id="schr-klein">α&nbsp; klein</button>'
      +  '<button type="button" class="cat-btn" id="schr-hoeren">🔊 Name hören</button>'
      +  '<button type="button" class="cat-btn" id="schr-ton"></button>'
      +  '<button type="button" class="cat-btn" id="schr-nochmal">Nochmal</button>'
      +  '<button type="button" class="cat-btn schr-stark" id="schr-weiter">Nächster</button>'
      +  '</div>';
    h += '<div class="schr-stifte" id="schr-stifte" role="group" aria-label="Stiftfarbe"></div>';
    h += '<p class="schr-name" id="schr-name"></p>';
    h += '<div class="schr-blatt"><canvas id="schr-blatt"></canvas></div>';
    h += '<div class="schr-balken"><div id="schr-fuell"></div></div>';
    h += '<p class="schr-stand" id="schr-stand"></p>';
    wo.innerHTML = h;

    el.reihe = document.getElementById("schr-reihe");
    el.name = document.getElementById("schr-name");
    el.blatt = document.getElementById("schr-blatt");
    el.fuell = document.getElementById("schr-fuell");
    el.stand = document.getElementById("schr-stand");
    el.gross = document.getElementById("schr-gross");
    el.klein = document.getElementById("schr-klein");
    el.stifte = document.getElementById("schr-stifte");
    el.ton = document.getElementById("schr-ton");
    ctx = el.blatt.getContext("2d");

    el.gross.addEventListener("click", function () { grossModus = true; merke(); neu(); });
    el.klein.addEventListener("click", function () { grossModus = false; merke(); neu(); });
    document.getElementById("schr-nochmal").addEventListener("click", blattBauen);
    document.getElementById("schr-hoeren").addEventListener("click", function () { spielName(0, true); });
    el.ton.addEventListener("click", function () {
      tonAn = !tonAn; merke(); tonKnopfAn();
      if (!tonAn) { brummen(false); if (laeuft) { try { laeuft.pause(); } catch (e) {} } }
    });
    document.getElementById("schr-weiter").addEventListener("click", function () {
      if (grossModus) { grossModus = false; }
      else { grossModus = true; stelle = (stelle + 1) % alphabet.length; }
      merke(); neu();
    });

    el.blatt.addEventListener("mousedown", anfangen);
    el.blatt.addEventListener("mousemove", ziehen);
    window.addEventListener("mouseup", aufhoeren);
    el.blatt.addEventListener("touchstart", anfangen, {passive: false});
    el.blatt.addEventListener("touchmove", ziehen, {passive: false});
    el.blatt.addEventListener("touchend", aufhoeren);

    var messung = null;
    window.addEventListener("resize", function () {
      if (!document.getElementById("schreiben").classList.contains("active")) return;
      clearTimeout(messung);
      messung = setTimeout(blattBauen, 150);
    });

    gebaut = true;
    tonKnopfAn();
    return true;
  }

  // ── Das Blatt ─────────────────────────────────────────────
  function blattBauen() {
    var u = ALPHA_UMRISSE[zeichenJetzt()];
    if (!u) return;

    var breitCss = el.blatt.parentNode.clientWidth - 20;
    if (breitCss < 240) breitCss = 240;
    schaerfe = window.devicePixelRatio || 1;

    var hoehePx = Math.min(430, Math.max(260, Math.round(breitCss)));
    var s = Math.min((hoehePx - 2 * RAND) / (HOCH - TIEF), (breitCss - 2 * RAND) / u.w);

    el.blatt.style.width = breitCss + "px";
    el.blatt.style.height = hoehePx + "px";
    el.blatt.width = Math.round(breitCss * schaerfe);
    el.blatt.height = Math.round(hoehePx * schaerfe);
    ctx.setTransform(schaerfe, 0, 0, schaerfe, 0, 0);

    var offX = Math.round((breitCss - u.w * s) / 2);
    var offY = Math.round((hoehePx - (HOCH - TIEF) * s) / 2 + HOCH * s);

    // Der Zeichensatz zeigt nach oben, der Bildschirm nach unten.
    pfad = new Path2D();
    pfad.addPath(new Path2D(u.d), new DOMMatrix([s, 0, 0, -s, offX, offY]));

    punkte = [];
    for (var x = 0; x < breitCss; x += RASTER) {
      for (var y = 0; y < hoehePx; y += RASTER) {
        if (imBuchstaben(x, y)) punkte.push([x, y]);
      }
    }
    getroffen = punkte.map(function () { return false; });
    innen = 0; aussen = 0; spur = []; gelobt = false;
    malt = false; brummen(false);
    malen(); standAn();
  }

  function farbe(name, ersatz) {
    try {
      var w = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
      if (w) return w;
    } catch (e) {}
    return ersatz;
  }

  function malen() {
    var b = el.blatt.width / schaerfe, h = el.blatt.height / schaerfe;
    ctx.clearRect(0, 0, b, h);

    ctx.fillStyle = farbe("--schr-form", "#dcd8ce");
    ctx.fill(pfad, "nonzero");
    ctx.lineWidth = 2;
    ctx.strokeStyle = farbe("--schr-kante", "#cfcabd");
    ctx.stroke(pfad);

    // Jedes Stück der Spur einzeln einfärben: grün zählt, blass rot nicht.
    ctx.lineCap = "round"; ctx.lineJoin = "round";
    ctx.lineWidth = STRICH;
    for (var i = 0; i < spur.length; i++) {
      var pt = spur[i].p;
      if (!pt.length) continue;
      if (pt.length === 1) { stueck([pt[0], pt[0]], pt[0][2]); continue; }
      var anfang = 0;
      for (var j = 1; j <= pt.length; j++) {
        if (j === pt.length || pt[j][2] !== pt[anfang][2]) {
          stueck(pt.slice(anfang, Math.min(j + 1, pt.length)), pt[anfang][2]);
          anfang = j;
        }
      }
    }

    // Beides wird im gewählten Stift gezeichnet: das Kind soll seine Farbe
    // sehen, nicht meine. Ob ein Strich zählt, sagt die Deckkraft - voll
    // heißt im Buchstaben, blass heißt daneben.
    function stueck(pt, drin) {
      if (pt.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(pt[0][0], pt[0][1]);
      for (var k = 1; k < pt.length; k++) ctx.lineTo(pt[k][0], pt[k][1]);
      ctx.strokeStyle = STIFTE[stift].f;
      ctx.lineWidth = drin ? STRICH : STRICH * 0.6;
      ctx.globalAlpha = drin ? 0.92 : 0.2;
      ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.lineWidth = STRICH;
    }
  }

  // ── Malen ─────────────────────────────────────────────────
  function ortVon(e) {
    var r = el.blatt.getBoundingClientRect();
    var p = (e.touches && e.touches[0]) ? e.touches[0] : e;
    return [p.clientX - r.left, p.clientY - r.top];
  }

  function anfangen(e) {
    e.preventDefault();
    tonBereit();            // der Fingerdruck ist die Geste, die der Browser verlangt
    malt = true;
    letzter = ortVon(e);
    letzter[2] = imBuchstaben(letzter[0], letzter[1]);
    spur.push({p: [letzter]});
    pruefen(letzter);
    brummen(!letzter[2]);
    malen(); standAn();
  }

  function ziehen(e) {
    if (!malt) return;
    e.preventDefault();
    var jetzt = ortVon(e);
    // Zwischenpunkte setzen, sonst springt eine schnelle Bewegung über Messpunkte hinweg.
    var dx = jetzt[0] - letzter[0], dy = jetzt[1] - letzter[1];
    var schritte = Math.max(1, Math.round(Math.sqrt(dx * dx + dy * dy) / 4));
    var st = spur[spur.length - 1];
    for (var i = 1; i <= schritte; i++) {
      var p = [letzter[0] + dx * i / schritte, letzter[1] + dy * i / schritte];
      p[2] = imBuchstaben(p[0], p[1]);
      st.p.push(p);
      pruefen(p);
      brummen(!p[2]);
    }
    letzter = jetzt;
    malen(); standAn();
  }

  function aufhoeren() {
    if (!malt) return;
    malt = false;
    brummen(false);       // beim Absetzen ist immer Ruhe
    standAn();
  }

  function pruefen(p) {
    var drin = (p.length > 2) ? p[2] : imBuchstaben(p[0], p[1]);
    if (drin) innen++; else { aussen++; return; }
    var r2 = RADIUS * RADIUS;
    for (var i = 0; i < punkte.length; i++) {
      if (getroffen[i]) continue;
      var dx = punkte[i][0] - p[0], dy = punkte[i][1] - p[1];
      if (dx * dx + dy * dy <= r2) getroffen[i] = true;
    }
  }

  function anteil() {
    var n = 0;
    for (var i = 0; i < getroffen.length; i++) if (getroffen[i]) n++;
    return punkte.length ? n / punkte.length : 0;
  }

  function sauberkeit() {
    var ges = innen + aussen;
    return ges ? innen / ges : 1;
  }

  function standAn() {
    var a = anteil(), s = sauberkeit();
    el.fuell.style.width = Math.round(a * 100) + "%";
    if (a >= ZIEL && s >= SAUBER) { if (!gelobt) fertigMelden(); return; }
    var warnen = (s < SAUBER && innen + aussen > 40);
    el.stand.className = "schr-stand" + (warnen ? " warn" : "");
    if (warnen) {
      el.stand.innerHTML = "<b>Bleib im Buchstaben</b> – was daneben liegt, zählt nicht mit.";
    } else if (a > 0.05) {
      el.stand.innerHTML = "<b>" + Math.round(a * 100) + " %</b> nachgefahren";
    } else {
      el.stand.textContent = "Setz den Finger auf den Buchstaben.";
    }
  }

  function fertigMelden() {
    gelobt = true;
    brummen(false);
    var a = buchstabe();
    fertigListe[a.name + (grossModus ? "-gross" : "-klein")] = true;
    merke(); reiheAn(); klang(); spielName(420);
    el.stand.className = "schr-stand";
    el.stand.innerHTML = "<b>Μπράβο!</b> " + a.nameGr + " steht.";
  }

  // ── Ton ───────────────────────────────────────────────────
  var hall = null, laeuft = null;

  // Der "heiße Draht": solange der Finger neben dem Buchstaben malt,
  // brummt es leise. Kein Schimpfen, kein Piepsen – ein tiefer, ruhiger
  // Ton, der aufhört, sobald die Spur wieder im Buchstaben liegt. So
  // hört das Kind seinen Fehler, während es ihn macht, und muss nicht
  // auf den Balken schauen.
  var brummOsz = null, brummGain = null, brummLaeuft = false;

  // Ein Browser lässt Ton erst zu, nachdem jemand etwas angefasst hat.
  // Deshalb wird der Tonweg beim Aufsetzen des Fingers geöffnet, nicht
  // erst, wenn er gebraucht wird.
  function tonBereit() {
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      if (!hall) hall = new AC();
      if (hall.state === "suspended") hall.resume();
      return hall;
    } catch (e) { return null; }
  }

  function brummen(an) {
    if (!tonAn) an = false;
    if (an === brummLaeuft) return;
    try {
      if (!tonBereit()) return;
      if (!brummOsz) {
        brummOsz = hall.createOscillator();
        brummGain = hall.createGain();
        // 196 Hz als reiner Sinus war auf Handy- und Notebooklautsprechern
        // praktisch nicht zu hören: so tief geben kleine Lautsprecher kaum
        // etwas her, und ein Sinus hat keine Obertöne, die durchkommen.
        // Ein Dreieck bei 330 Hz trägt, ohne schrill zu sein.
        brummOsz.type = "triangle";
        brummOsz.frequency.value = 330;
        brummGain.gain.value = 0.0001;
        brummOsz.connect(brummGain);
        brummGain.connect(hall.destination);
        brummOsz.start();
      }
      var t = hall.currentTime;
      brummGain.gain.cancelScheduledValues(t);
      brummGain.gain.setValueAtTime(Math.max(brummGain.gain.value, 0.0001), t);
      brummGain.gain.exponentialRampToValueAtTime(an ? 0.10 : 0.0001, t + 0.05);
      brummLaeuft = an;
    } catch (e) {}
  }

  function klang() {
    if (!tonAn) return;
    try {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!hall) hall = new AC();
      if (hall.state === "suspended") hall.resume();
      var t0 = hall.currentTime;
      [[659, 0], [988, 0.10]].forEach(function (n) {
        var o = hall.createOscillator(), gn = hall.createGain(), t = t0 + n[1];
        o.type = "triangle"; o.frequency.value = n[0];
        gn.gain.setValueAtTime(0.0001, t);
        gn.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
        gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        o.connect(gn); gn.connect(hall.destination);
        o.start(t); o.stop(t + 0.24);
      });
    } catch (e) {}
  }

  // Der Name kommt aus ton/, über dasselbe tonDatei() wie überall.
  // "erzwingen" ist der Knopf "Name hören": eine ausdrückliche Handlung
  // des Kindes. Die darf auch bei Ton aus sprechen, sonst wäre der Knopf
  // stumm und niemand wüsste warum. Der Schalter gilt für alles, was von
  // selbst kommt - Brummton, Klang, der Name nach dem Fertigwerden.
  function spielName(warte, erzwingen) {
    if (!tonAn && !erzwingen) return;
    var pfadMp3 = null;
    try { if (typeof tonDatei === "function") pfadMp3 = tonDatei(buchstabe().nameGr); } catch (e) {}
    if (!pfadMp3) return;
    if (laeuft) { try { laeuft.pause(); } catch (e) {} }
    var a = new Audio(pfadMp3);
    laeuft = a;
    setTimeout(function () { try { a.play(); } catch (e) {} }, warte || 0);
  }

  // ── Bedienung ─────────────────────────────────────────────
  function reiheAn() {
    var h = "", i;
    for (i = 0; i < alphabet.length; i++) {
      var a = alphabet[i];
      var voll = fertigListe[a.name + "-gross"] && fertigListe[a.name + "-klein"];
      h += '<button type="button" data-i="' + i + '" class="' + (voll ? "voll" : "") + '"'
        + ' aria-pressed="' + (i === stelle ? "true" : "false") + '" title="' + a.nameGr + '">'
        + a.gross + "</button>";
    }
    el.reihe.innerHTML = h;
    var kn = el.reihe.getElementsByTagName("button");
    for (i = 0; i < kn.length; i++) {
      kn[i].addEventListener("click", function () {
        stelle = +this.getAttribute("data-i"); merke(); neu();
      });
    }
    var aktiv = el.reihe.querySelector('[aria-pressed="true"]');
    if (aktiv && aktiv.scrollIntoView) aktiv.scrollIntoView({block: "nearest", inline: "center"});
  }

  function tonKnopfAn() {
    el.ton.textContent = tonAn ? "🔊 Ton an" : "🔇 Ton aus";
    el.ton.setAttribute("aria-pressed", tonAn ? "true" : "false");
  }

  function stifteAn() {
    var h = "", i;
    for (i = 0; i < STIFTE.length; i++) {
      h += '<button type="button" data-s="' + i + '" title="' + STIFTE[i].n + '"'
        + ' aria-label="' + STIFTE[i].n + '" aria-pressed="' + (i === stift ? "true" : "false")
        + '" style="background:' + STIFTE[i].f + '"></button>';
    }
    el.stifte.innerHTML = h;
    var kn = el.stifte.getElementsByTagName("button");
    for (i = 0; i < kn.length; i++) {
      kn[i].addEventListener("click", function () {
        stift = +this.getAttribute("data-s");
        merke(); stifteAn(); malen();
      });
    }
  }

  function nameAn() {
    var a = buchstabe();
    el.name.innerHTML = '<span class="gr">' + a.gross + " " + a.klein + "</span>"
      + '<span class="gr">' + a.nameGr + "</span>"
      + '<span class="de">' + a.name + "</span>"
      + '<span class="pr">klingt wie ' + a.aussprache + "</span>";
    el.gross.className = "cat-btn" + (grossModus ? " active" : "");
    el.klein.className = "cat-btn" + (grossModus ? "" : " active");
  }

  function merke() {
    try {
      localStorage.setItem("schr_stelle", stelle);
      localStorage.setItem("schr_gross", grossModus ? "1" : "0");
      localStorage.setItem("schr_fertig", JSON.stringify(fertigListe));
    localStorage.setItem("schr_stift", stift);
    localStorage.setItem("schr_ton", tonAn ? "1" : "0");
    } catch (e) {}
  }

  function neu() { reiheAn(); stifteAn(); nameAn(); blattBauen(); }

  // ── Die Eingänge ──────────────────────────────────────────
  window.startSchreiben = function () {
    if (!gebaut && !bauen()) return;
    neu();
  };

  // Für einen späteren Knopf in der Alphabet-Ansicht: direkt zu
  // diesem Buchstaben springen.
  window.schreibeBuchstabe = function (name) {
    for (var i = 0; i < alphabet.length; i++) {
      if (alphabet[i].name === name || alphabet[i].nameGr === name) { stelle = i; break; }
    }
    grossModus = true; merke();
    showScreen("schreiben");
  };
})();
