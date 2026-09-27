// ============================================================
//  zahlenkreise.js  –  Rechenspiel mit griechischen Zahlwörtern
//
//  Ein Gitter aus Kreisen, in dem Zahlen fehlen. Das Kind rechnet
//  einen Kreis aus und wählt die Antwort als griechisches Wort.
//  Gerechnet wird, damit ein Zahlwort gebraucht wird – nicht
//  umgekehrt.
//
//  Vier Stufen nach den Klassen der Grundschule. Jedes Rätsel hat
//  genau eine Lösung; siehe die Erklärung bei baue().
//
//  Vorgelesen wird aus den eigenen Aufnahmen in ton/: der Satz
//  wird aus Einzeldateien zusammengespielt. Keine Computerstimme.
//  Fehlt ein Baustein, bleibt an seiner Stelle eine kurze Pause.
//
//  Alles steckt in einer Kapsel; nach außen geht nur
//  startZahlenkreise(), das showScreen() aufruft.
// ============================================================

(function () {
  "use strict";

  // ── Die Zahlwörter ────────────────────────────────────────
  // Dieselben Formen wie in zahlenGrund/zahlenZehner der App:
  // επτά und οκτώ, nicht εφτά und οχτώ.
  var GRUND = ["μηδέν", "ένα", "δύο", "τρία", "τέσσερα", "πέντε", "έξι", "επτά",
    "οκτώ", "εννιά", "δέκα", "έντεκα", "δώδεκα", "δεκατρία", "δεκατέσσερα",
    "δεκαπέντε", "δεκαέξι", "δεκαεπτά", "δεκαοκτώ", "δεκαεννιά", "είκοσι"];

  var ZEHNER = {30: "τριάντα", 40: "σαράντα", 50: "πενήντα", 60: "εξήντα",
    70: "εβδομήντα", 80: "ογδόντα", 90: "ενενήντα", 100: "εκατό"};

  // Die Hunderter braucht nur das Vorlesen. Auf den Antwortknöpfen
  // stehen Zahlwörter nur bis 100 – so weit lehrt die App sie.
  var HUNDERTER = {200: "διακόσια", 300: "τριακόσια", 400: "τετρακόσια",
    500: "πεντακόσια", 600: "εξακόσια", 700: "επτακόσια", 800: "οκτακόσια",
    900: "εννιακόσια"};

  var RECHENWORT = {"+": "συν", "-": "μείον", "×": "επί", "÷": "διά"};

  function grWort(n) {
    if (n <= 20) return GRUND[n];
    if (n === 1000) return "χίλια";
    if (n > 100) {
      var h = Math.floor(n / 100) * 100, r = n % 100;
      var hw = (h === 100 ? "εκατόν" : HUNDERTER[h]);
      return r === 0 ? (h === 100 ? "εκατό" : hw) : hw + " " + grWort(r);
    }
    if (n === 100) return ZEHNER[100];
    var z = Math.floor(n / 10) * 10, e = n % 10;
    var zw = (z === 20 ? "είκοσι" : ZEHNER[z]);
    return e === 0 ? zw : zw + " " + GRUND[e];
  }

  // "δώδεκα συν πέντε κάνει δεκαεπτά"
  function satzVon(eq, werte) {
    return grWort(werte[schluessel(eq.a)]) + " " + RECHENWORT[eq.op] + " " +
           grWort(werte[schluessel(eq.b)]) + " κάνει " + grWort(werte[schluessel(eq.c)]);
  }

  // Alle Bausteine, die das Vorlesen je braucht – für den Hinweis,
  // was noch nicht aufgenommen ist.
  function alleBausteine() {
    var aus = [], i, h;
    for (i = 0; i <= 20; i++) aus.push(grWort(i));
    for (i = 30; i <= 100; i += 10) aus.push(grWort(i));
    aus.push("εκατόν", "χίλια");
    for (h = 200; h <= 900; h += 100) aus.push(grWort(h));
    aus.push("συν", "μείον", "επί", "διά", "κάνει", "Μπράβο! Όλα σωστά.");
    return aus;
  }

  // ── Die Gitterformen ──────────────────────────────────────
  // Jede Rechnung ist a op b = c, angegeben als Zellen [zeile,spalte].
  // dir sagt, ob sie waagerecht oder senkrecht steht.
  var FORMEN = {
    ring: {zeilen: 3, spalten: 3, eqs: [
      {a: [0, 0], b: [0, 1], c: [0, 2], dir: "h"},
      {a: [0, 0], b: [1, 0], c: [2, 0], dir: "v"},
      {a: [2, 0], b: [2, 1], c: [2, 2], dir: "h"},
      {a: [0, 2], b: [1, 2], c: [2, 2], dir: "v"}]},
    zickzack: {zeilen: 5, spalten: 3, eqs: [
      {a: [0, 0], b: [0, 1], c: [0, 2], dir: "h"},
      {a: [0, 2], b: [1, 2], c: [2, 2], dir: "v"},
      {a: [2, 0], b: [2, 1], c: [2, 2], dir: "h"},
      {a: [2, 0], b: [3, 0], c: [4, 0], dir: "v"},
      {a: [4, 0], b: [4, 1], c: [4, 2], dir: "h"}]},
    gitter: {zeilen: 5, spalten: 4, eqs: [
      {a: [0, 0], b: [0, 1], c: [0, 2], dir: "h"},
      {a: [0, 0], b: [1, 0], c: [2, 0], dir: "v"},
      {a: [2, 0], b: [2, 1], c: [2, 2], dir: "h"},
      {a: [0, 2], b: [1, 2], c: [2, 2], dir: "v"},
      {a: [2, 2], b: [3, 2], c: [4, 2], dir: "v"},
      {a: [4, 1], b: [4, 2], c: [4, 3], dir: "h"}]}
  };

  // ── Die vier Stufen ───────────────────────────────────────
  // Die Knopfbeschriftung nennt die Klasse, damit eindeutig ist,
  // welches Niveau man wählt.
  var STUFEN = {
    1: {knopf: "Klasse 1", name: "Plus und Minus im Zahlenraum bis 20",
        ops: ["+", "-"], max: 20, klein: 10, anteil: 0.42, formen: ["ring"]},
    2: {knopf: "Klasse 2", name: "Bis 100, dazu das kleine Einmaleins",
        ops: ["+", "-", "×", "÷"], max: 100, klein: 10, anteil: 0.45,
        formen: ["ring", "zickzack"]},
    3: {knopf: "Klasse 3", name: "Alle vier Rechenarten bis 1000",
        ops: ["+", "-", "×", "÷"], max: 1000, klein: 10, anteil: 0.48,
        formen: ["zickzack", "gitter"]},
    4: {knopf: "Klasse 4", name: "Bis 1000, größeres Gitter, mehr Lücken",
        ops: ["+", "-", "×", "÷"], max: 1000, klein: 20, anteil: 0.58,
        formen: ["gitter"]}
  };

  // ── Rechnen und Würfeln ───────────────────────────────────
  function zuf(n) { return Math.floor(Math.random() * n); }
  function wuerfel(a, b) { return a + zuf(b - a + 1); }
  function schluessel(p) { return p[0] + ":" + p[1]; }

  function rechne(a, op, b) {
    if (op === "+") return a + b;
    if (op === "-") return a - b;
    if (op === "×") return a * b;
    return b === 0 ? null : (a % b === 0 ? a / b : null);
  }

  // Füllt eine Rechnung so, dass sie aufgeht. Zellen, die schon
  // einen Wert haben, bleiben stehen – so passen benachbarte
  // Rechnungen zusammen.
  function fuelleGleichung(eq, werte, st) {
    var op = eq.op, max = st.max;
    var klein = (op === "×" || op === "÷") ? st.klein : max;
    var ka = schluessel(eq.a), kb = schluessel(eq.b), kc = schluessel(eq.c);
    var a = werte[ka], b = werte[kb], c = werte[kc];
    var i;

    // gar nichts steht fest
    if (a === undefined && b === undefined && c === undefined) {
      for (i = 0; i < 60; i++) {
        if (op === "+") { a = wuerfel(1, max - 2); b = wuerfel(1, max - a); }
        else if (op === "-") { a = wuerfel(2, max); b = wuerfel(1, a - 1); }
        else if (op === "×") { a = wuerfel(2, klein); b = wuerfel(2, Math.min(klein, Math.floor(max / a))); }
        else { b = wuerfel(2, klein); c = wuerfel(2, klein); a = b * c; }
        c = rechne(a, op, b);
        if (c !== null && c >= 0 && c <= max && a <= max && b <= max) break;
        a = b = c = undefined;
      }
      if (c === undefined || c === null) return false;
      werte[ka] = a; werte[kb] = b; werte[kc] = c;
      return true;
    }

    // a steht fest
    if (a !== undefined && b === undefined && c === undefined) {
      for (i = 0; i < 60; i++) {
        if (op === "+") { b = wuerfel(1, Math.max(1, max - a)); }
        else if (op === "-") { if (a < 2) return false; b = wuerfel(1, a - 1); }
        else if (op === "×") { if (a > klein) return false; b = wuerfel(2, Math.max(2, Math.floor(max / a))); }
        else { b = wuerfel(2, klein); if (a % b !== 0) return false; }
        c = rechne(a, op, b);
        if (c !== null && c >= 0 && c <= max && b <= max) break;
        b = c = undefined;
      }
      if (c === undefined || c === null) return false;
      werte[kb] = b; werte[kc] = c;
      return true;
    }

    // b steht fest
    if (a === undefined && b !== undefined && c === undefined) {
      for (i = 0; i < 60; i++) {
        if (op === "+") { a = wuerfel(1, Math.max(1, max - b)); }
        else if (op === "-") { a = wuerfel(b + 1, max); }
        else if (op === "×") { if (b > klein) return false; a = wuerfel(2, Math.max(2, Math.floor(max / b))); }
        else { a = b * wuerfel(2, klein); }
        c = rechne(a, op, b);
        if (c !== null && c >= 0 && c <= max && a <= max) break;
        a = c = undefined;
      }
      if (c === undefined || c === null) return false;
      werte[ka] = a; werte[kc] = c;
      return true;
    }

    // c steht fest
    if (a === undefined && b === undefined && c !== undefined) {
      for (i = 0; i < 60; i++) {
        if (op === "+") { if (c < 2) return false; a = wuerfel(1, c - 1); b = c - a; }
        else if (op === "-") { b = wuerfel(1, Math.max(1, Math.min(klein, max - c))); a = c + b; }
        else if (op === "×") {
          var t = [];
          for (var j = 2; j <= klein; j++) { if (c % j === 0 && c / j <= klein) t.push(j); }
          if (!t.length) return false;
          b = t[zuf(t.length)]; a = c / b;
        } else { if (c > klein) return false; b = wuerfel(2, klein); a = c * b; }
        if (a >= 0 && a <= max && b >= 0 && b <= max && rechne(a, op, b) === c) break;
        a = b = undefined;
      }
      if (a === undefined || b === undefined) return false;
      werte[ka] = a; werte[kb] = b;
      return true;
    }

    // zwei oder drei stehen fest: nur noch prüfen bzw. den Rest ausrechnen
    if (a !== undefined && b !== undefined) {
      var soll = rechne(a, op, b);
      if (soll === null || soll < 0 || soll > max) return false;
      if (c !== undefined) return c === soll;
      werte[kc] = soll;
      return true;
    }
    if (a !== undefined && c !== undefined) {
      for (i = 2; i <= max; i++) { if (rechne(a, op, i) === c) { werte[kb] = i; return true; } }
      return false;
    }
    if (b !== undefined && c !== undefined) {
      for (i = 0; i <= max; i++) { if (rechne(i, op, b) === c) { werte[ka] = i; return true; } }
      return false;
    }
    return false;
  }

  // Warum jedes Rätsel genau eine Lösung hat:
  // Erst werden ALLE Zahlen gewürfelt, so dass jede Rechnung stimmt.
  // Dann werden nur solche Kreise geleert, in deren Rechnung keine
  // zweite Lücke steht. Damit ist jede Lücke aus ihrer eigenen
  // Rechnung eindeutig ausrechenbar – ohne Löser, ohne Prüfung.
  function baue(stufe) {
    var st = STUFEN[stufe];
    for (var versuch = 0; versuch < 400; versuch++) {
      var formName = st.formen[zuf(st.formen.length)];
      var form = FORMEN[formName];
      var eqs = form.eqs.map(function (e) {
        return {a: e.a, b: e.b, c: e.c, dir: e.dir, op: st.ops[zuf(st.ops.length)]};
      });
      var werte = {}, ok = true;
      for (var i = 0; i < eqs.length; i++) {
        if (!fuelleGleichung(eqs[i], werte, st)) { ok = false; break; }
      }
      if (!ok) continue;

      var zellen = Object.keys(werte);
      for (var m = zellen.length - 1; m > 0; m--) {
        var n = zuf(m + 1), t = zellen[m]; zellen[m] = zellen[n]; zellen[n] = t;
      }
      var luecken = {}, ziel = Math.max(3, Math.round(zellen.length * st.anteil));
      zellen.forEach(function (k) {
        if (Object.keys(luecken).length >= ziel) return;
        var frei = eqs.every(function (e) {
          var ks = [schluessel(e.a), schluessel(e.b), schluessel(e.c)];
          if (ks.indexOf(k) < 0) return true;
          return !ks.some(function (x) { return luecken[x]; });
        });
        if (frei) luecken[k] = true;
      });
      if (Object.keys(luecken).length < 3) continue;
      return {form: form, eqs: eqs, werte: werte, luecken: luecken};
    }
    return null;
  }

  // ── Zustand ───────────────────────────────────────────────
  var stufe = 1, tonAn = true, raetsel = null, gefuellt = {}, dran = null,
      gelobt = false, letzterSatz = "", gebaut = false;
  var el = {};

  try {
    var g = localStorage.getItem("zk_stufe"); if (g) stufe = +g;
    var h = localStorage.getItem("zk_ton"); if (h !== null) tonAn = (h === "1");
  } catch (e) {}

  function merke() {
    try {
      localStorage.setItem("zk_stufe", stufe);
      localStorage.setItem("zk_ton", tonAn ? "1" : "0");
    } catch (e) {}
  }

  // ── Ton ───────────────────────────────────────────────────
  // Zwei kurze Klänge für richtig und daneben, vier für das
  // gelöste Rätsel. Gerechnet, nicht geladen – das spart Dateien.
  var hall = null, laufNr = 0, laeuft = null;

  function klang(art) {
    if (!tonAn) return;
    try {
      if (!hall) {
        var AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return;
        hall = new AC();
      }
      if (hall.state === "suspended") hall.resume();
      var t0 = hall.currentTime;
      var noten = (art === "gut") ? [[659, 0], [988, 0.10]]
                : (art === "fertig") ? [[659, 0], [784, 0.12], [988, 0.24], [1319, 0.36]]
                : [[311, 0], [233, 0.13]];
      var laut = (art === "daneben") ? 0.13 : 0.16;
      noten.forEach(function (nt) {
        var o = hall.createOscillator(), gn = hall.createGain(), t = t0 + nt[1];
        o.type = "triangle"; o.frequency.value = nt[0];
        gn.gain.setValueAtTime(0.0001, t);
        gn.gain.exponentialRampToValueAtTime(laut, t + 0.02);
        gn.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);
        o.connect(gn); gn.connect(hall.destination);
        o.start(t); o.stop(t + 0.24);
      });
    } catch (e) {}
  }

  // Der Satz wird aus den Einzelaufnahmen zusammengespielt.
  // tonDatei() steht in index.html und liest ton/index.json.
  function tonPfad(wort) {
    try { if (typeof tonDatei === "function") return tonDatei(wort); } catch (e) {}
    return null;
  }

  function nichtMehrSprechen() {
    laufNr++;
    if (laeuft) { try { laeuft.pause(); } catch (e) {} laeuft = null; }
  }

  function spielFolge(teile, warte) {
    nichtMehrSprechen();
    if (!tonAn || !teile || !teile.length) return;
    var meine = laufNr, i = 0;
    function weiter() {
      if (meine !== laufNr) return;
      if (i >= teile.length) { laeuft = null; return; }
      var pfad = tonPfad(teile[i++]);
      if (!pfad) { setTimeout(weiter, 260); return; }   // fehlt noch: Pause
      var a = new Audio(pfad);
      laeuft = a;
      a.addEventListener("ended", function () { setTimeout(weiter, 70); });
      a.addEventListener("error", function () { setTimeout(weiter, 140); });
      try {
        var pr = a.play();
        if (pr && pr["catch"]) pr["catch"](function () { setTimeout(weiter, 140); });
      } catch (e) { setTimeout(weiter, 140); }
    }
    setTimeout(weiter, warte || 0);
  }

  // ── Den Schirm bauen ──────────────────────────────────────
  function bauen() {
    var wo = document.getElementById("zk-area");
    if (!wo) return false;
    var h = '';
    h += '<p class="zk-hin">Rechne die leeren Kreise aus und wähle die Antwort als '
      +  'griechisches Zahlwort. Stimmt sie, wird die ganze Rechnung vorgelesen.</p>';
    h += '<div class="zk-leiste"><div class="zk-stufen" role="group" aria-label="Stufe">';
    for (var s = 1; s <= 4; s++) {
      h += '<button type="button" class="cat-btn" id="zk-s' + s + '">'
        +  STUFEN[s].knopf + '</button>';
    }
    h += '</div>'
      +  '<button type="button" class="cat-btn" id="zk-ton">🔊 Ton an</button>'
      +  '<button type="button" class="cat-btn zk-stark" id="zk-neu">Neues Rätsel</button>'
      +  '</div>';
    h += '<div class="zk-brett"><div class="zk-gitter" id="zk-gitter"></div></div>';
    h += '<div class="zk-wahl" id="zk-wahl"></div>';
    h += '<p class="zk-satz" id="zk-satz" aria-live="polite"></p>';
    h += '<p class="zk-fehlt" id="zk-fehlt"></p>';
    h += '<div class="zk-fuss"><span id="zk-stand"></span><span id="zk-stufentext"></span></div>';
    wo.innerHTML = h;

    el.gitter = document.getElementById("zk-gitter");
    el.wahl = document.getElementById("zk-wahl");
    el.satz = document.getElementById("zk-satz");
    el.fehlt = document.getElementById("zk-fehlt");
    el.stand = document.getElementById("zk-stand");
    el.stufentext = document.getElementById("zk-stufentext");
    el.ton = document.getElementById("zk-ton");

    for (var n = 1; n <= 4; n++) {
      (function (nr) {
        document.getElementById("zk-s" + nr).addEventListener("click", function () {
          stufe = nr; merke(); stufenAn(); neuesRaetsel();
        });
      })(n);
    }
    el.ton.addEventListener("click", function () {
      tonAn = !tonAn; merke(); tonKnopfAn();
      if (tonAn) klang("gut"); else nichtMehrSprechen();
    });
    document.getElementById("zk-neu").addEventListener("click", neuesRaetsel);

    gebaut = true;
    stufenAn(); tonKnopfAn();
    return true;
  }

  function stufenAn() {
    for (var n = 1; n <= 4; n++) {
      var b = document.getElementById("zk-s" + n);
      if (!b) continue;
      b.className = "cat-btn" + (n === stufe ? " active" : "");
      b.setAttribute("aria-pressed", n === stufe ? "true" : "false");
    }
  }

  function tonKnopfAn() {
    el.ton.textContent = tonAn ? "🔊 Ton an" : "🔇 Ton aus";
    el.ton.setAttribute("aria-pressed", tonAn ? "true" : "false");
  }

  // ── Ein Rätsel ────────────────────────────────────────────
  function neuesRaetsel() {
    raetsel = baue(stufe); gefuellt = {}; dran = null; gelobt = false;
    nichtMehrSprechen(); satzZeigen("");
    if (!raetsel) { el.gitter.textContent = "Kein Rätsel gefunden – noch einmal versuchen."; return; }
    zeichne(); zeigeWahl(); fehlendeZeigen();
  }

  function zeichne() {
    var f = raetsel.form;
    el.gitter.innerHTML = "";
    el.gitter.style.gridTemplateColumns = "repeat(" + (f.spalten * 2 - 1) + ",auto)";
    var belegt = {};
    raetsel.eqs.forEach(function (e) {
      var p = [e.a, e.b, e.c];
      for (var i = 0; i < 2; i++) {
        var von = p[i], bis = p[i + 1];
        belegt[(von[0] + bis[0]) + ":" + (von[1] + bis[1])] =
          {typ: "op", txt: (i === 0 ? e.op : "=")};
      }
    });
    for (var r = 0; r < f.zeilen * 2 - 1; r++) {
      for (var c = 0; c < f.spalten * 2 - 1; c++) {
        var d = document.createElement("div");
        d.className = "zk-zelle";
        if (r % 2 === 0 && c % 2 === 0) {
          var k = (r / 2) + ":" + (c / 2);
          if (raetsel.werte[k] !== undefined) d.appendChild(kreis(k));
        } else {
          var b = belegt[r + ":" + c];
          if (b) { d.className += " zk-op"; d.textContent = b.txt; }
        }
        el.gitter.appendChild(d);
      }
    }
    standAn();
  }

  function kreis(k) {
    var luecke = !!raetsel.luecken[k];
    var b = document.createElement("button");
    b.type = "button";
    b.className = "zk-kreis" + (luecke ? " zk-luecke" : " zk-fest");
    b.setAttribute("data-k", k);
    if (!luecke) { b.textContent = raetsel.werte[k]; b.disabled = true; }
    else if (gefuellt[k] !== undefined) { b.textContent = gefuellt[k]; b.className += " zk-voll"; }
    else { b.textContent = "?"; }
    if (luecke && k === dran) b.className += " zk-dran";
    if (luecke) {
      b.addEventListener("click", function () {
        dran = (dran === k ? null : k); zeichne(); zeigeWahl();
      });
    }
    return b;
  }

  function fertig() {
    return Object.keys(raetsel.luecken).every(function (k) { return gefuellt[k] !== undefined; });
  }

  function standAn() {
    var alle = Object.keys(raetsel.luecken).length, voll = Object.keys(gefuellt).length;
    el.stand.innerHTML = "<b>" + voll + "</b> von <b>" + alle + "</b> Kreisen gefüllt";
    el.stufentext.textContent = STUFEN[stufe].knopf + " · " + STUFEN[stufe].name;
  }

  function zeigeWahl() {
    el.wahl.innerHTML = "";
    if (fertig()) {
      var f = document.createElement("div");
      f.className = "zk-fertig";
      f.innerHTML = "<b>Μπράβο! Όλα σωστά.</b> Alle Kreise stimmen.";
      if (!gelobt) { gelobt = true; klang("fertig"); spielFolge(["Μπράβο! Όλα σωστά."], 700); }
      el.wahl.appendChild(f);
      var nb = document.createElement("button");
      nb.type = "button"; nb.className = "cat-btn zk-stark";
      nb.textContent = "Noch eins";
      nb.addEventListener("click", neuesRaetsel);
      el.wahl.appendChild(nb);
      return;
    }
    if (dran === null || gefuellt[dran] !== undefined) {
      var s = document.createElement("span");
      s.className = "zk-tipp";
      s.textContent = "Tippe einen gestrichelten Kreis an.";
      el.wahl.appendChild(s);
      return;
    }
    var richtig = raetsel.werte[dran];
    // Ist die richtige Zahl unter 100, bleiben auch die Ablenker
    // darunter – dann kann die Frage mit Zahlwörtern gestellt werden.
    // Der Zahlenraum der Klasse gilt dabei weiter: in Klasse 1 darf
    // keine 21 zur Wahl stehen.
    var obergrenze = STUFEN[stufe].max;
    var grenze = (richtig <= 100) ? Math.min(100, obergrenze) : obergrenze;
    var kandidaten = [richtig], schutz = 0;
    while (kandidaten.length < 4 && schutz++ < 300) {
      var d = richtig + (zuf(2) ? 1 : -1) * wuerfel(1, Math.max(2, Math.round(richtig * 0.4)));
      if (d > 0 && d <= grenze && kandidaten.indexOf(d) < 0) kandidaten.push(d);
    }
    // Bei kleinen Zahlen - die 1 etwa - gibt der Zufall oben nicht genug
    // verschiedene Nachbarn her. Dann wird von innen nach aussen aufgefuellt,
    // damit immer vier Knoepfe dastehen.
    for (var w = 1; kandidaten.length < 4 && w < 400; w++) {
      var hoch = richtig + w, runter = richtig - w;
      if (hoch <= grenze && kandidaten.indexOf(hoch) < 0) kandidaten.push(hoch);
      if (kandidaten.length < 4 && runter >= 0 && kandidaten.indexOf(runter) < 0) {
        kandidaten.push(runter);
      }
    }
    for (var m = kandidaten.length - 1; m > 0; m--) {
      var n = zuf(m + 1), t = kandidaten[m]; kandidaten[m] = kandidaten[n]; kandidaten[n] = t;
    }
    var wortModus = kandidaten.every(function (z) { return z <= 100; });
    kandidaten.forEach(function (z) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "zk-antwort" + (wortModus ? "" : " zk-ziffer");
      b.textContent = wortModus ? grWort(z) : String(z);
      b.addEventListener("click", function () { antwort(z, b); });
      el.wahl.appendChild(b);
    });
    if (!wortModus) {
      var hw = document.createElement("span");
      hw.className = "zk-tipp";
      hw.textContent = "über 100 als Ziffern";
      el.wahl.appendChild(hw);
    }
  }

  function antwort(z, knopf) {
    if (z === raetsel.werte[dran]) {
      var s = satzZu(dran);
      gefuellt[dran] = z; dran = null;
      klang("gut");
      satzZeigen(s);
      if (s) spielFolge(s.split(" "), 420);   // erst der Klang, dann der Satz
      zeichne(); zeigeWahl();
    } else {
      knopf.disabled = true; knopf.style.opacity = .45;
      klang("daneben");
      var k = el.gitter.querySelector('.zk-kreis[data-k="' + dran + '"]');
      if (k) {
        k.className += " zk-falsch";
        setTimeout(function () { k.className = k.className.replace(" zk-falsch", ""); }, 320);
      }
    }
  }

  // Die erste Rechnung, in der diese Zelle vorkommt. Sie stimmt
  // immer, denn alle Zahlen stehen von Anfang an fest.
  function satzZu(k) {
    for (var i = 0; i < raetsel.eqs.length; i++) {
      var e = raetsel.eqs[i];
      if ([schluessel(e.a), schluessel(e.b), schluessel(e.c)].indexOf(k) >= 0) {
        return satzVon(e, raetsel.werte);
      }
    }
    return null;
  }

  function satzZeigen(s) {
    letzterSatz = s || "";
    el.satz.innerHTML = "";
    if (!letzterSatz) return;
    var w = document.createElement("span");
    w.textContent = letzterSatz;
    el.satz.appendChild(w);
    var k = document.createElement("button");
    k.type = "button"; k.className = "zk-nochmal";
    k.textContent = "🔊";
    k.title = "noch einmal hören";
    k.addEventListener("click", function () { spielFolge(letzterSatz.split(" ")); });
    el.satz.appendChild(k);
  }

  // Welche Bausteine sind noch nicht aufgenommen? Ohne Ton-Ordner
  // bleibt der Hinweis weg – dann fehlt nicht ein einzelner Clip,
  // sondern die App läuft schlicht ohne Ton.
  function fehlendeZeigen() {
    if (!el.fehlt) return;
    if (typeof tonDatei !== "function" || typeof tonIndex === "undefined" || !tonIndex) {
      el.fehlt.textContent = ""; return;
    }
    var fehlt = alleBausteine().filter(function (w) { return !tonPfad(w); });
    el.fehlt.innerHTML = fehlt.length
      ? "Noch nicht aufgenommen: " + fehlt.length + " Bausteine (" +
        fehlt.slice(0, 5).join(", ") + (fehlt.length > 5 ? " …" : "") +
        "). An ihrer Stelle bleibt im Satz eine kurze Pause."
      : "";
  }

  // ── Der Eingang, den showScreen() ruft ────────────────────
  window.startZahlenkreise = function () {
    if (!gebaut && !bauen()) return;
    neuesRaetsel();
  };
})();
