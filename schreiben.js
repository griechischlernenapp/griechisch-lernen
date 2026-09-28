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
  var ZIEL = 0.70;               // ab hier gilt der Buchstabe als geschrieben
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
    document.getElementById("schr-weiter").addEventListener("click", naechster);

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
    clearTimeout(weiterUhr);
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

  var weiterUhr = null;

  function fertigMelden() {
    gelobt = true;
    brummen(false);
    ruettle([45, 70, 45]);
    // Von selbst weiter: erst das Lob hören lassen, dann der nächste.
    // Wer in der Zwischenzeit selbst etwas antippt, hält es an.
    clearTimeout(weiterUhr);
    weiterUhr = setTimeout(naechster, 1800);
    var a = buchstabe();
    fertigListe[a.name + (grossModus ? "-gross" : "-klein")] = true;
    merke(); reiheAn(); klang(); spielName(420);
    el.stand.className = "schr-stand";
    el.stand.innerHTML = "<b>Μπράβο!</b> " + a.nameGr + " steht.";
  }

  // ── Ton ───────────────────────────────────────────────────
  // ABGESPIELT, NICHT ERZEUGT. Erst war beides mit dem Web-Audio-Baustein
  // gebaut; auf dem Handy blieb es still. Grund: ein iPhone schaltet mit
  // dem Stummschalter an der Seite allen ERZEUGTEN Ton ab, abgespielte
  // Dateien dagegen nicht - deshalb war der gesprochene Buchstabenname zu
  // hören, das Brummen aber nicht. Beides sind jetzt winzige WAV-Dateien
  // im Skript: der Brummton eine nahtlose Schleife von 0,35 Sekunden.
  var BRUMM_TON = "data:audio/wav;base64,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";
  var FERTIG_TON = "data:audio/wav;base64,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";

  var laeuft = null, brummAudio = null, brummLaeuft = false, blende = null;
  // "draussen" merkt sich die Lage unabhaengig vom Ton. Ohne das rüttelte
  // es bei ausgeschaltetem Ton bei jedem einzelnen Punkt, weil brummLaeuft
  // dann nie umsprang.
  var draussen = false;


  // Kurzes Rütteln, wo das Gerät es kann. Das ist die stille Rückmeldung:
  // beim Verlassen der Form ein Tippen, beim Fertigwerden zwei kurze.
  // Absichtlich NICHT an den Tonschalter gebunden - wer den Ton ausmacht,
  // will oft gerade das Rütteln behalten.
  // navigator.vibrate gibt es auf Android; Safari auf dem iPhone kennt es
  // nicht, dort passiert hier schlicht nichts.
  function ruettle(muster) {
    try { if (navigator.vibrate) navigator.vibrate(muster); } catch (e) {}
  }

  function brummen(an) {
    if (an !== draussen) {                   // der Übertritt, auch bei Ton aus
      draussen = an;
      if (an) ruettle(30);
    }
    if (!tonAn) an = false;
    if (an === brummLaeuft) return;
    brummLaeuft = an;
    try {
      if (!brummAudio) {
        brummAudio = new Audio(BRUMM_TON);
        brummAudio.loop = true;
        brummAudio.volume = 0;
      }
      clearInterval(blende);
      if (an) {
        var pr = brummAudio.play();
        if (pr && pr["catch"]) pr["catch"](function () {});
      }
      // In vier Schritten auf- oder abblenden, sonst knackt es.
      var ziel = an ? 0.55 : 0;
      blende = setInterval(function () {
        try {
          var v = brummAudio.volume;
          var s = (ziel > v) ? Math.min(ziel, v + 0.18) : Math.max(ziel, v - 0.18);
          brummAudio.volume = s;
          if (s === ziel) {
            clearInterval(blende);
            if (!an) brummAudio.pause();
          }
        } catch (e) { clearInterval(blende); }
      }, 18);
    } catch (e) {}
  }

  function klang() {
    if (!tonAn) return;
    try {
      var a = new Audio(FERTIG_TON);
      a.volume = 0.7;
      var pr = a.play();
      if (pr && pr["catch"]) pr["catch"](function () {});
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
        // Wer selbst einen Buchstaben wählt, fängt beim großen an.
        stelle = +this.getAttribute("data-i"); grossModus = true; merke(); neu();
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

  // Erst der Kleinbuchstabe zum selben Zeichen, dann das nächste Zeichen.
  function naechster() {
    if (grossModus) { grossModus = false; }
    else { grossModus = true; stelle = (stelle + 1) % alphabet.length; }
    merke(); neu();
  }

  function neu() { clearTimeout(weiterUhr); reiheAn(); stifteAn(); nameAn(); blattBauen(); }

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
