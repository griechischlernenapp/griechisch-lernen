// ============================================================
//  wortspiele.js  –  drei Spiele aus dem vorhandenen Wortschatz
//
//    Το άρθρο    ο, η oder το?        (Artikel)
//    Τι ακούω;   hören und zeigen     (nur Ohr, keine Schrift)
//    Συλλαβές    Silben ordnen        (Lesen in Häppchen)
//
//  Alles Material ist schon da: vocab[] aus vokabeln.js mit Artikel,
//  Lautschrift, Emoji und Bild, dazu die Aufnahmen in ton/ über
//  tonDatei(). Es wird nichts erzeugt und nichts nachgeladen.
//
//  Nach außen gehen nur startArtikel(), startHoeren() und startSilben(),
//  die showScreen() ruft.
// ============================================================

(function () {
  "use strict";

  // ── Silbentrennung ────────────────────────────────────────
  // Regeln aus der griechischen Schule:
  //  1. Ein Mitlaut zwischen zwei Vokalen geht nach vorn: γά-τα.
  //  2. Zwei Mitlaute, die ein Wort beginnen können, gehen beide mit
  //     (α-στέ-ρι); sonst wird getrennt (άν-θρω-πος).
  //  3. Doppelte Mitlaute werden getrennt: θά-λασ-σα, άγ-γε-λος.
  //  4. Vokalpaare (αι ει οι υι ου αυ ευ) sind EIN Kern, solange der
  //     erste unbetont ist - deshalb ρο-λό-ι, aber σκού-φος.
  //  5. Ein ι vor einem anderen Vokal bleibt ein eigener Kern
  //     (ή-λι-ος), genau wie in der Lautschrift der App.
  //
  //  Das Spiel nimmt nur Wörter, bei denen diese Regeln und das Feld pr
  //  auf dieselbe Silbenzahl kommen - 144 der 152 Vokabeln. Die acht
  //  übrigen (ελιά, φωτιά ...) zieht das Griechische zusammen; sie
  //  bleiben draußen, damit Spiel und Vokabelkarte nie widersprechen.
  var VOKALE = "αεηιουωάέήίόύώϊϋΐΰ";
  var BETONT = "άέήίόύώΐΰ";
  var OHNE = {"ά":"α","έ":"ε","ή":"η","ί":"ι","ό":"ο","ύ":"υ","ώ":"ω","ΐ":"ι","ΰ":"υ"};
  var PAARE = ["αι", "ει", "οι", "υι", "ου", "αυ", "ευ", "ηυ"];
  var ANLAUT = ["μπ","ντ","γκ","τσ","τζ","βγ","βδ","βλ","βρ","γδ","γλ","γν",
    "γρ","δρ","θλ","θν","θρ","κλ","κν","κρ","κτ","μν","πλ","πν","πρ","πτ",
    "σβ","σγ","σθ","σκ","σλ","σμ","σν","σπ","στ","σφ","σχ","τλ","τμ","τρ",
    "φθ","φλ","φρ","φτ","φχ","χλ","χν","χρ","χτ"];

  function istVokal(z) { return VOKALE.indexOf(z) >= 0; }
  function schlicht(z) { return OHNE[z] || z; }

  function silben(wort) {
    var ganz = String(wort || "").trim();
    if (!ganz) return [];
    if (ganz.indexOf(" ") >= 0) {
      var aus = [];
      ganz.split(/\s+/).forEach(function (w, i) {
        if (i) aus.push(" ");
        aus = aus.concat(silben(w));
      });
      return aus;
    }
    var w = ganz, teile = [], i = 0;
    while (i < w.length) {
      var silbe = "";
      while (i < w.length && !istVokal(w.charAt(i))) { silbe += w.charAt(i); i++; }
      if (i >= w.length) {
        if (teile.length) teile[teile.length - 1] += silbe; else teile.push(silbe);
        break;
      }
      silbe += w.charAt(i); i++;
      if (i < w.length && BETONT.indexOf(w.charAt(i - 1)) < 0 &&
          PAARE.indexOf((schlicht(w.charAt(i - 1)) + schlicht(w.charAt(i))).toLowerCase()) >= 0) {
        silbe += w.charAt(i); i++;
      }
      var j = i, gruppe = "";
      while (j < w.length && !istVokal(w.charAt(j))) { gruppe += w.charAt(j); j++; }
      if (j >= w.length) { silbe += gruppe; teile.push(silbe); break; }
      var bleibt;
      if (gruppe.length <= 1) bleibt = 0;
      else {
        var zwei = gruppe.substr(0, 2).toLowerCase();
        if (zwei.charAt(0) === zwei.charAt(1)) bleibt = 1;
        else if (ANLAUT.indexOf(zwei) >= 0) bleibt = 0;
        else bleibt = gruppe.length >= 3 ? gruppe.length - 2 : 1;
      }
      silbe += gruppe.substr(0, bleibt);
      i = i + bleibt;
      teile.push(silbe);
    }
    return teile;
  }

  // ── Gemeinsames ───────────────────────────────────────────
  function mischen(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pfadVon(text) {
    try { if (typeof tonDatei === "function") return tonDatei(text); } catch (e) {}
    return null;
  }

  function hatTon(w) { return !!pfadVon(w.gr); }

  // Ein einziges Abspielgeraet fuer alle drei Spiele. Auf dem iPhone
  // wird ein Audio-Element beim ersten Antippen freigeschaltet und
  // bleibt es danach; ein jedes Mal neu erzeugtes bliebe stumm.
  // "danach" laeuft, wenn die Aufnahme zu Ende ist - so wartet das
  // Spiel genau so lange, wie gesprochen wird, statt nach einer festen
  // Zeit weiterzuspringen. Fehlt der Ton, geht es kurz darauf weiter.
  var spieler = null;
  function sprich(text, danach) {
    var pfad = pfadVon(text);
    if (!pfad) { if (danach) setTimeout(danach, 700); return; }
    try {
      if (!spieler) spieler = new Audio();
      spieler.pause();
      spieler.onended = null;
      spieler.src = pfad;
      if (danach) {
        var ab = false;
        var weiter = function () { if (ab) return; ab = true; danach(); };
        spieler.onended = function () { setTimeout(weiter, 450); };
        setTimeout(weiter, 4000);            // Notbremse
      }
      var pr = spieler.play();
      if (pr && pr["catch"]) pr["catch"](function () {});
    } catch (e) { if (danach) setTimeout(danach, 700); }
  }

  // Bild wie überall in der App: bilder/<deutsches Wort>.png, sonst Emoji.
  function bild(w, klasse) {
    var datei = String(w.de).toLowerCase()
      .replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(/ß/g, "ss");
    return '<img src="bilder/' + datei + '.png" class="' + (klasse || "ws-bild") + '"'
         + ' alt="" data-emoji="' + (w.emoji || "🖼️") + '" onerror="bildErsatz(this)">';
  }

  // Der Lautsprecher der App - gleiche Form, gleiche Farbe wie auf den
  // Vokabelkarten, und er haengt am selben Klick-Fänger in index.html.
  function knopfTon(w) {
    try { return typeof tonKnopf === "function" ? tonKnopf(w.gr, true) : ""; }
    catch (e) { return ""; }
  }

  // Nach dem Aufloesen spricht derselbe Lautsprecher die ganze
  // Wortgruppe - vorher waere "ο ιππότης" die Antwort gewesen.
  function nachlegen(wo, text) {
    var b = wo.querySelector(".ton-btn"), pfad = pfadVon(text);
    if (!b || !pfad) return;
    b.setAttribute("data-ton", pfad.replace(/^ton\//, "").replace(/\.mp3$/, ""));
  }

  function balken(steht, ganz) {
    return '<div class="ws-balken"><div style="width:'
         + Math.round(100 * steht / ganz) + '%"></div></div>';
  }

  function fertigKarte(richtig, ganz) {
    var lob = richtig === ganz ? "Όλα σωστά!" : "Μπράβο!";
    return '<div class="ws-fertig"><b>' + lob + '</b> ' + richtig + ' von ' + ganz
         + ' auf Anhieb richtig.<br>'
         + '<button type="button" class="cat-btn ws-stark" id="ws-nochmal">'
         + 'Noch eine Runde</button></div>';
  }

  // ── Το άρθρο - ο, η oder το? ──────────────────────────────
  var ARTIKEL = ["ο", "η", "το"];
  var artRunde = [], artStelle = 0, artRichtig = 0;
  var ART_PRO_RUNDE = 10;

  function artWoerter() {
    var aus = [];
    for (var i = 0; i < vocab.length; i++) {
      var v = vocab[i];
      if (v.art && ARTIKEL.indexOf(v.art) >= 0) aus.push(v);
    }
    return aus;
  }

  window.startArtikel = function () {
    artRunde = mischen(artWoerter()).slice(0, ART_PRO_RUNDE);
    artStelle = 0; artRichtig = 0;
    artZeigen();
  };

  function artZeigen() {
    var wo = document.getElementById("artikel-area");
    if (!wo) return;
    if (!artRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Hier fehlen noch die Wörter.</p>';
      return;
    }
    if (artStelle >= artRunde.length) {
      wo.innerHTML = fertigKarte(artRichtig, artRunde.length);
      document.getElementById("ws-nochmal").addEventListener("click", window.startArtikel);
      return;
    }
    var w = artRunde[artStelle];
    var h = '<p class="ws-hin">Welcher Artikel gehört dazu? '
          + '<b>ο</b> männlich, <b>η</b> weiblich, <b>το</b> sächlich.</p>'
          + balken(artStelle, artRunde.length)
          + '<div class="card ws-karte">' + bild(w)
          + '<p class="ws-wort"><span class="ws-art" id="ws-art">&nbsp;</span>'
          + '<span class="ws-gr">' + w.gr + '</span>' + knopfTon(w) + '</p>'
          + '<p class="ws-de">' + w.de + '</p></div>'
          + '<div class="ws-wahl">';
    for (var i = 0; i < ARTIKEL.length; i++) {
      h += '<button type="button" class="ws-gross" data-a="' + ARTIKEL[i] + '">'
         + ARTIKEL[i] + '</button>';
    }
    h += '</div><p class="ws-stand">' + (artStelle + 1) + ' von ' + artRunde.length + '</p>';
    wo.innerHTML = h;

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-gross");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        if (this.getAttribute("data-a") !== w.art) {
          frisch = false;
          this.className += " ws-falsch";
          this.disabled = true;
          return;
        }
        this.className += " ws-richtig";
        if (frisch) artRichtig++;
        var feld = document.getElementById("ws-art");
        if (feld) feld.textContent = w.art + " ";
        for (var m = 0; m < kn.length; m++) kn[m].disabled = true;
        // "ο ιππότης" ist EINE Aufnahme. Zwei Dateien hintereinander
        // klaengen zusammengesetzt, und genau darum geht es hier: das
        // Kind soll die Wortgruppe hoeren, wie sie gesprochen wird.
        // Solange die Aufnahme fehlt, bleibt es beim blossen Wort.
        var ganz = pfadVon(w.art + " " + w.gr) ? w.art + " " + w.gr : w.gr;
        nachlegen(wo, ganz);
        sprich(ganz, function () { artStelle++; artZeigen(); });
      });
    }
  }

  // ── Τι ακούω; - hören und zeigen ──────────────────────────
  var hoerRunde = [], hoerStelle = 0, hoerRichtig = 0, hoerVorrat = null;
  var HOER_PRO_RUNDE = 10;

  // Hier zeigt das Kind auf ein Bild, ohne ein Wort zu lesen. Dafür
  // taugt nur, was man wirklich malen kann. Farben und Gefühle sind zu
  // abstrakt (ein schwarzes Feld, ein Smiley), auf den Bildern der
  // Wochentage steht das griechische Wort - das wäre verraten - und die
  // Zahlen haben ab der Elf gar kein Bild: dort stünde überall dasselbe
  // 🔢 und die Kacheln wären nicht zu unterscheiden. Zahlen haben mit
  // den Zahlenkreisen ihr eigenes Spiel.
  var HOER_AUS_KAT = { farben: 1, gefuehle: 1, wochentage: 1, zahlen: 1 };
  var HOER_AUS_WORT = { "Uhrzeit": 1, "Klasse": 1, "Familie": 1 };

  // Gesprochen wird die ganze Wortgruppe - "το κοχύλι", nicht "κοχύλι".
  // So hört das Kind den Artikel immer mit, wie im echten Satz. Fehlt
  // die Aufnahme der Wortgruppe noch, bleibt es beim blossen Wort.
  function mitArtikel(w) {
    if (!w.art) return w.gr;
    var ganz = w.art + " " + w.gr;
    return pfadVon(ganz) ? ganz : w.gr;
  }

  function hoerWoerter() {
    if (hoerVorrat) return hoerVorrat;
    var aus = [];
    for (var i = 0; i < vocab.length; i++) {
      var v = vocab[i];
      if (HOER_AUS_KAT[v.cat] || HOER_AUS_WORT[v.de]) continue;
      if (hatTon(v)) aus.push(v);
    }
    hoerVorrat = aus;
    return aus;
  }

  window.startHoeren = function () {
    hoerVorrat = null;                       // ton/index.json kann spaeter da sein
    hoerRunde = mischen(hoerWoerter().slice()).slice(0, HOER_PRO_RUNDE);
    hoerStelle = 0; hoerRichtig = 0;
    hoerZeigen(true);
  };

  function hoerZeigen(ersteRunde) {
    var wo = document.getElementById("hoeren-area");
    if (!wo) return;
    if (!hoerRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Für dieses Spiel fehlen noch die Aufnahmen.</p>';
      return;
    }
    if (hoerStelle >= hoerRunde.length) {
      wo.innerHTML = fertigKarte(hoerRichtig, hoerRunde.length);
      document.getElementById("ws-nochmal").addEventListener("click", window.startHoeren);
      return;
    }
    var w = hoerRunde[hoerStelle];

    // Drei andere Bilder dazu - gemischt, damit nicht immer dieselben
    // kommen, und ohne Dublette zum gesuchten Wort.
    // Fehlt einmal ein Bild, springt die App auf das Emoji um. Zwei
    // Kacheln mit demselben Emoji waeren nicht zu unterscheiden -
    // deshalb kommt jedes Ersatzzeichen hier nur einmal vor.
    var alle = mischen(hoerWoerter().slice()), andere = [], zeichen = {};
    zeichen[w.emoji || "?"] = 1;
    for (var i = 0; i < alle.length && andere.length < 3; i++) {
      var a = alle[i], z = a.emoji || "?";
      if (a.gr === w.gr || a.de === w.de || zeichen[z]) continue;
      zeichen[z] = 1; andere.push(a);
    }
    var wahl = mischen(andere.concat([w]));

    var h = '<p class="ws-hin">Hör zu und tippe das richtige Bild an. '
          + 'Das Wort steht nirgends - nur im Ohr.</p>'
          + balken(hoerStelle, hoerRunde.length)
          + '<div class="ws-hoerzeile">'
          + '<button type="button" class="ws-hoeren" id="ws-hoeren">'
          + '🔊 Nochmal hören</button></div>'
          + '<div class="ws-bilder">';
    for (var j = 0; j < wahl.length; j++) {
      h += '<button type="button" class="ws-bildwahl" data-gr="' + wahl[j].gr + '">'
         + bild(wahl[j], "ws-bild gross")
         + '<span class="ws-name" data-nam="' + (wahl[j].art ? wahl[j].art + " " : "")
         + wahl[j].gr + '" data-de="' + wahl[j].de + '"></span></button>';
    }
    h += '</div><p class="ws-stand" id="ws-stand">' + (hoerStelle + 1) + ' von '
       + hoerRunde.length + '</p>';
    wo.innerHTML = h;

    var gesagt = mitArtikel(w);
    document.getElementById("ws-hoeren").addEventListener("click", function () {
      sprich(gesagt);
    });
    // Die erste Runde kommt unmittelbar aus dem Antippen der Kachel -
    // nur dann laesst ein iPhone den Ton von selbst zu. Spaeter ist das
    // Geraet freigeschaltet und eine kleine Pause stoert nicht.
    if (ersteRunde) sprich(gesagt);
    else setTimeout(function () { sprich(gesagt); }, 300);

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-bildwahl");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        if (this.getAttribute("data-gr") !== w.gr) {
          frisch = false;
          this.className += " ws-falsch";
          this.disabled = true;
          return;
        }
        this.className += " ws-richtig";
        if (frisch) hoerRichtig++;
        for (var m = 0; m < kn.length; m++) kn[m].disabled = true;
        // Jetzt bekommen ALLE vier Bilder ihren Namen. Das Kind hat
        // eines gesucht und lernt die anderen drei gleich mit.
        var nam = wo.querySelectorAll(".ws-name");
        for (var n = 0; n < nam.length; n++) {
          nam[n].innerHTML = '<b>' + nam[n].getAttribute("data-nam") + '</b>'
                           + '<i>' + nam[n].getAttribute("data-de") + '</i>';
        }
        sprich(gesagt);
        setTimeout(function () { hoerStelle++; hoerZeigen(false); }, 2600);
      });
    }
  }

  // ── Συλλαβές - Silben ordnen ──────────────────────────────
  var silRunde = [], silStelle = 0, silRichtig = 0, silGebaut = [];
  var SIL_PRO_RUNDE = 8;

  // Nur Wörter, bei denen Regel und Lautschrift auf dieselbe Zahl kommen.
  function silWoerter() {
    var aus = [];
    for (var i = 0; i < vocab.length; i++) {
      var v = vocab[i];
      if (!v.pr || v.gr.indexOf(" ") >= 0) continue;
      var teile = silben(v.gr);
      var soll = v.pr.split("-").length;
      if (teile.length === soll && teile.length >= 2 && teile.length <= 4) aus.push(v);
    }
    return aus;
  }

  window.startSilben = function () {
    silRunde = mischen(silWoerter()).slice(0, SIL_PRO_RUNDE);
    silStelle = 0; silRichtig = 0;
    silZeigen();
  };

  function silZeigen() {
    var wo = document.getElementById("silben-area");
    if (!wo) return;
    if (!silRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Hier fehlen noch die Wörter.</p>';
      return;
    }
    if (silStelle >= silRunde.length) {
      wo.innerHTML = fertigKarte(silRichtig, silRunde.length);
      document.getElementById("ws-nochmal").addEventListener("click", window.startSilben);
      return;
    }
    var w = silRunde[silStelle];
    var teile = silben(w.gr);
    silGebaut = [];
    var gemischt = mischen(teile.slice());
    // Der Zufall darf nicht die fertige Reihenfolge auswerfen
    if (gemischt.join("\u0000") === teile.join("\u0000") && teile.length > 1) {
      var t = gemischt[0]; gemischt[0] = gemischt[1]; gemischt[1] = t;
    }

    var h = '<p class="ws-hin">Welches Wort ist das? Tippe die Silben '
          + 'in der richtigen Reihenfolge an.</p>'
          + balken(silStelle, silRunde.length)
          + '<div class="card ws-karte">' + bild(w)
          + '<p class="ws-wort"><span class="ws-de">' + w.de + '</span>'
          + knopfTon(w) + '</p>'
          + '<div class="ws-bau" id="ws-bau">&nbsp;</div></div>'
          + '<div class="ws-wahl" id="ws-silben">';
    for (var i = 0; i < gemischt.length; i++) {
      h += '<button type="button" class="ws-silbe">' + gemischt[i] + '</button>';
    }
    h += '</div><p class="ws-stand">' + (silStelle + 1) + ' von ' + silRunde.length + '</p>';
    wo.innerHTML = h;

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-silbe");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        var knopf = this, silbe = knopf.textContent, bau = document.getElementById("ws-bau");
        if (silbe !== teile[silGebaut.length]) {
          frisch = false;
          knopf.className += " ws-falsch";
          setTimeout(function () {
            knopf.className = knopf.className.replace(" ws-falsch", "");
          }, 350);
          return;
        }
        silGebaut.push(silbe);
        knopf.disabled = true;
        knopf.className += " ws-gesetzt";
        bau.textContent = silGebaut.join("·");
        if (silGebaut.length !== teile.length) return;
        if (frisch) silRichtig++;
        bau.className = "ws-bau voll";
        bau.textContent = w.gr;
        sprich(w.gr, function () { silStelle++; silZeigen(); });
      });
    }
  }
})();
