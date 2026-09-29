// ============================================================
//  wortspiele.js  –  sieben Spiele aus dem vorhandenen Wortschatz
//
//    Το άρθρο    ο, η oder το?        (Artikel)
//    Τι ακούω;   hören und zeigen     (nur Ohr, keine Schrift)
//    Συλλαβές    Silben ordnen        (Lesen in Häppchen)
//    Ο τόνος      wo liegt die Betonung?
//    Ένα ή πολλά; einer oder viele?
//    Στη σειρά    den Satz in Ordnung bringen
//    Πού πάει;    wohin gehört das Wort?
//
//  Alles Material ist schon da: vocab[] aus vokabeln.js mit Artikel,
//  Lautschrift, Emoji und Bild, dazu die Aufnahmen in ton/ über
//  tonDatei(). Es wird nichts erzeugt und nichts nachgeladen.
//
//  Nach außen gehen nur die sieben start...()-Aufrufe, die
//  showScreen() macht.
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

  // ── Zahlen haben kein Bild, sondern eine Ziffer ───────────
  // Für δεκαέξι gibt es keine Zeichnung, und das allgemeine 🔢 sagt
  // gar nichts: zehn Zahlen sähen gleich aus. Statt eines Bildes steht
  // hier die Ziffer selbst - groß, im selben Rahmen. Die Zuordnung
  // steht schon in index.html, in den drei Zahlentafeln.
  var ZIFFER = null;
  function ziffer(gr) {
    if (!ZIFFER) {
      ZIFFER = {};
      ["zahlenGrund", "zahlenZehner", "zahlenGross"].forEach(function (name) {
        var liste;
        try { liste = window[name]; } catch (e) { return; }
        if (!liste || !liste.length) return;
        for (var i = 0; i < liste.length; i++) {
          if (liste[i] && liste[i].gr && liste[i].z) ZIFFER[liste[i].gr] = liste[i].z;
        }
      });
    }
    return ZIFFER[gr] || null;
  }

  // Bild wie überall in der App: bilder/<deutsches Wort>.png, sonst
  // Emoji - bei einer Zahl aber die Ziffer.
  function bild(w, klasse) {
    var z = ziffer(w.gr);
    if (z) return '<span class="' + (klasse || "ws-bild") + ' ws-ziffer">' + z + '</span>';
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
         + '<button type="button" class="cat-btn ws-stark ws-nochmal">'
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
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startArtikel);
      return;
    }
    var w = artRunde[artStelle];
    var h = '<p class="ws-hin">Welcher Artikel gehört dazu? '
          + '<b>ο</b> männlich, <b>η</b> weiblich, <b>το</b> sächlich.</p>'
          + balken(artStelle, artRunde.length)
          + '<div class="card ws-karte">' + bild(w)
          + '<p class="ws-wort"><span class="ws-art">&nbsp;</span>'
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
        var feld = wo.querySelector(".ws-art");
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
  // abstrakt (ein schwarzes Feld, ein Smiley), und auf den Bildern der
  // Wochentage steht das griechische Wort - das wäre verraten.
  // Zahlen sind dabei: sie zeigen ihre Ziffer.
  var HOER_AUS_KAT = { farben: 1, gefuehle: 1, wochentage: 1 };
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
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startHoeren);
      return;
    }
    var w = hoerRunde[hoerStelle];

    // Drei andere Bilder dazu - gemischt, damit nicht immer dieselben
    // kommen, und ohne Dublette zum gesuchten Wort.
    // Fehlt einmal ein Bild, springt die App auf das Emoji um. Zwei
    // Kacheln mit demselben Emoji waeren nicht zu unterscheiden -
    // deshalb kommt jedes Ersatzzeichen hier nur einmal vor. Zahlen
    // zaehlen ueber ihre Ziffer, die ist ohnehin verschieden.
    // Ist die gesuchte eine Zahl, sind es alle vier: sonst faende das
    // Kind die Ziffer zwischen drei Bildern auf den ersten Blick.
    var suchZahl = !!ziffer(w.gr);
    function merkmal(x) { var z = ziffer(x.gr); return z ? "#" + z : (x.emoji || "?"); }
    var alle = mischen(hoerWoerter().slice()), andere = [], zeichen = {};
    zeichen[merkmal(w)] = 1;
    for (var i = 0; i < alle.length && andere.length < 3; i++) {
      var a = alle[i], m = merkmal(a);
      if (a.gr === w.gr || a.de === w.de || zeichen[m]) continue;
      if (!!ziffer(a.gr) !== suchZahl) continue;
      zeichen[m] = 1; andere.push(a);
    }
    var wahl = mischen(andere.concat([w]));

    var h = '<p class="ws-hin">Hör zu und tippe das richtige Bild an. '
          + 'Das Wort steht nirgends - nur im Ohr.</p>'
          + balken(hoerStelle, hoerRunde.length)
          + '<div class="ws-hoerzeile">'
          + '<button type="button" class="ws-hoeren">'
          + '🔊 Nochmal hören</button></div>'
          + '<div class="ws-bilder">';
    for (var j = 0; j < wahl.length; j++) {
      h += '<button type="button" class="ws-bildwahl" data-gr="' + wahl[j].gr + '">'
         + bild(wahl[j], "ws-bild gross")
         + '<span class="ws-name" data-nam="' + (wahl[j].art ? wahl[j].art + " " : "")
         + wahl[j].gr + '" data-de="' + wahl[j].de + '"></span></button>';
    }
    h += '</div><p class="ws-stand">' + (hoerStelle + 1) + ' von '
       + hoerRunde.length + '</p>';
    wo.innerHTML = h;

    var gesagt = mitArtikel(w);
    wo.querySelector(".ws-hoeren").addEventListener("click", function () {
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
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startSilben);
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
          + '<div class="ws-bau">&nbsp;</div></div>'
          + '<div class="ws-wahl">';
    for (var i = 0; i < gemischt.length; i++) {
      h += '<button type="button" class="ws-silbe">' + gemischt[i] + '</button>';
    }
    h += '</div><p class="ws-stand">' + (silStelle + 1) + ' von ' + silRunde.length + '</p>';
    wo.innerHTML = h;

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-silbe");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        var knopf = this, silbe = knopf.textContent, bau = wo.querySelector(".ws-bau");
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

  // ══ Ο τόνος - wo liegt die Betonung? ══════════════════════
  // Die Betonung ist das Einzige, was ein deutsches Kind im
  // Griechischen zuverlässig falsch macht. Deshalb stehen die Silben
  // hier OHNE ihr Akzentzeichen da - sonst könnte man die Lösung
  // ablesen, statt sie zu hören. Erst wenn es sitzt, erscheint das
  // Wort so, wie es geschrieben wird.
  var GROSS_OHNE = {"Ά":"Α","Έ":"Ε","Ή":"Η",
    "Ί":"Ι","Ό":"Ο","Ύ":"Υ","Ώ":"Ω"};

  function ohneAkzent(text) {
    var aus = "", i, z;
    for (i = 0; i < text.length; i++) {
      z = text.charAt(i);
      aus += OHNE[z] || GROSS_OHNE[z] || z;
    }
    return aus;
  }

  function hatAkzent(text) {
    for (var i = 0; i < text.length; i++) {
      var z = text.charAt(i);
      if (BETONT.indexOf(z) >= 0 || GROSS_OHNE[z]) return true;
    }
    return false;
  }

  var tonRunde = [], tonStelle = 0, tonRichtig = 0;
  var TON_PRO_RUNDE = 10;

  function tonWoerter() {
    var aus = [];
    var vorrat = silWoerter();              // Regel und Lautschrift einig
    for (var i = 0; i < vorrat.length; i++) {
      var teile = silben(vorrat[i].gr), wieviele = 0;
      for (var j = 0; j < teile.length; j++) if (hatAkzent(teile[j])) wieviele++;
      if (teile.length >= 2 && wieviele === 1) aus.push(vorrat[i]);
    }
    return aus;
  }

  window.startTonos = function () {
    tonRunde = mischen(tonWoerter()).slice(0, TON_PRO_RUNDE);
    tonStelle = 0; tonRichtig = 0;
    tonZeigen(true);
  };

  function tonZeigen(ersteRunde) {
    var wo = document.getElementById("tonos-area");
    if (!wo) return;
    if (!tonRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Hier fehlen noch die Wörter.</p>';
      return;
    }
    if (tonStelle >= tonRunde.length) {
      wo.innerHTML = fertigKarte(tonRichtig, tonRunde.length);
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startTonos);
      return;
    }
    var w = tonRunde[tonStelle];
    var teile = silben(w.gr), richtig = -1;
    for (var t = 0; t < teile.length; t++) if (hatAkzent(teile[t])) richtig = t;

    var h = '<p class="ws-hin">Hör zu: welche Silbe wird <b>lauter und länger</b> '
          + 'gesprochen? Tippe sie an.</p>'
          + balken(tonStelle, tonRunde.length)
          + '<div class="card ws-karte">' + bild(w)
          + '<p class="ws-de">' + w.de + '</p>'
          + '<div class="ws-bau">&nbsp;</div></div>'
          + '<div class="ws-hoerzeile">'
          + '<button type="button" class="ws-hoeren">'
          + '🔊 Nochmal hören</button></div>'
          + '<div class="ws-wahl">';
    for (var i = 0; i < teile.length; i++) {
      h += '<button type="button" class="ws-silbe" data-i="' + i + '">'
         + ohneAkzent(teile[i]) + '</button>';
    }
    h += '</div><p class="ws-stand">' + (tonStelle + 1) + ' von ' + tonRunde.length + '</p>';
    wo.innerHTML = h;

    wo.querySelector(".ws-hoeren").addEventListener("click", function () {
      sprich(w.gr);
    });
    if (ersteRunde) sprich(w.gr);
    else setTimeout(function () { sprich(w.gr); }, 300);

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-silbe");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        if (+this.getAttribute("data-i") !== richtig) {
          frisch = false;
          this.className += " ws-falsch";
          this.disabled = true;
          return;
        }
        this.className += " ws-richtig";
        if (frisch) tonRichtig++;
        for (var m = 0; m < kn.length; m++) {
          kn[m].disabled = true;
          kn[m].textContent = teile[m];        // jetzt mit Akzent
        }
        var bau = wo.querySelector(".ws-bau");
        if (bau) { bau.className = "ws-bau voll"; bau.textContent = w.gr; }
        sprich(w.gr, function () { tonStelle++; tonZeigen(false); });
      });
    }
  }

  // ══ Ένα ή πολλά; - einer oder viele? ═══════════════
  // Die Tafel dafür steht schon in index.html: nomen[] mit Artikel,
  // Mehrzahl und Lautschrift, bisher nur für die Grammatikseite.
  // Das Bild für "viele" ist dasselbe Bild, dreimal klein - so braucht
  // kein einziges neues gezeichnet zu werden.
  var mzRunde = [], mzStelle = 0, mzRichtig = 0;
  var MZ_PRO_RUNDE = 10;

  function mzWoerter() {
    var aus = [];
    try {
      if (typeof nomen === "undefined" || !nomen) return aus;
      for (var i = 0; i < nomen.length; i++) {
        var n = nomen[i];
        if (!n || !n.gr || !n.grPl || !n.artGr || !n.artGrPl) continue;
        // Die Farben stehen ohne Artikel in der Tafel, und μπλε heisst
        // in der Mehrzahl genauso - da gäbe es nichts zu entscheiden.
        if (n.gr === n.grPl) continue;
        if (pfadVon(n.gr) && pfadVon(n.grPl)) aus.push(n);
      }
    } catch (e) {}
    return aus;
  }

  function mzSatz(n, viele) {
    var kurz = viele ? n.grPl : n.gr;
    var ganz = (viele ? n.artGrPl : n.artGr) + " " + kurz;
    return pfadVon(ganz) ? ganz : kurz;
  }

  window.startMehrzahl = function () {
    mzRunde = mischen(mzWoerter()).slice(0, MZ_PRO_RUNDE);
    mzStelle = 0; mzRichtig = 0;
    mzZeigen(true);
  };

  function mzZeigen(ersteRunde) {
    var wo = document.getElementById("mehrzahl-area");
    if (!wo) return;
    if (!mzRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Für dieses Spiel fehlen noch die Aufnahmen.</p>';
      return;
    }
    if (mzStelle >= mzRunde.length) {
      wo.innerHTML = fertigKarte(mzRichtig, mzRunde.length);
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startMehrzahl);
      return;
    }
    var n = mzRunde[mzStelle];
    var viele = Math.random() < 0.5;
    var gesagt = mzSatz(n, viele);
    var eins = bild(n, "ws-bild gross");

    var h = '<p class="ws-hin">Hör zu: ist es <b>eines</b> oder sind es <b>viele</b>?</p>'
          + balken(mzStelle, mzRunde.length)
          + '<div class="ws-hoerzeile">'
          + '<button type="button" class="ws-hoeren">'
          + '🔊 Nochmal hören</button></div>'
          + '<div class="ws-bilder">'
          + '<button type="button" class="ws-bildwahl" data-v="0">' + eins
          + '<span class="ws-name"></span></button>'
          + '<button type="button" class="ws-bildwahl" data-v="1">'
          + '<span class="ws-menge">' + eins + eins + eins + '</span>'
          + '<span class="ws-name"></span></button>'
          + '</div><p class="ws-stand">' + (mzStelle + 1) + ' von ' + mzRunde.length + '</p>';
    wo.innerHTML = h;

    wo.querySelector(".ws-hoeren").addEventListener("click", function () {
      sprich(gesagt);
    });
    if (ersteRunde) sprich(gesagt);
    else setTimeout(function () { sprich(gesagt); }, 300);

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-bildwahl");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        if ((this.getAttribute("data-v") === "1") !== viele) {
          frisch = false;
          this.className += " ws-falsch";
          this.disabled = true;
          return;
        }
        this.className += " ws-richtig";
        if (frisch) mzRichtig++;
        for (var m = 0; m < kn.length; m++) kn[m].disabled = true;
        // Beide Formen nebeneinander - da sieht man die Endung
        var fe = wo.querySelectorAll(".ws-name"), f0 = fe[0], f1 = fe[1];
        if (f0) f0.innerHTML = '<b>' + n.artGr + " " + n.gr + '</b><i>' + n.de + '</i>';
        if (f1) f1.innerHTML = '<b>' + n.artGrPl + " " + n.grPl + '</b><i>' + n.dePl + '</i>';
        sprich(gesagt, function () { mzStelle++; mzZeigen(false); });
      });
    }
  }

  // ══ Στη σειρά - der Satz in Ordnung ═══════════════════
  // Eine Stufe über den Silben: jetzt sind es ganze Wörter. Die Sätze
  // und ihre Aufnahmen liegen schon in der App - die Lückensätze aus
  // geschichten.js und die Zeilen der Gespräche.
  var szRunde = [], szStelle = 0, szRichtig = 0, szGebaut = [];
  var SZ_PRO_RUNDE = 8;

  // Die Lückensätze sind fürs Lückenspiel gebaut: setzt man das Wort
  // in seiner Grundform ein, steht da "Das Zug" oder "mit meinen Auge".
  // Hier soll der Satz aber ganz und richtig dastehen, deshalb stehen
  // die neun schiefen Fälle hier ausgeschrieben. Geschlüsselt über den
  // griechischen Satz - der ändert sich nicht.
  var SATZ_DE = {
    "\u039f \u03bf\u03c5\u03c1\u03b1\u03bd\u03cc\u03c2 \u03b5\u03af\u03bd\u03b1\u03b9 \u03bc\u03c0\u03bb\u03b5.":
      "Der Himmel ist blau.",
    "\u0397 \u03c6\u03c9\u03c4\u03b9\u03ac \u03b5\u03af\u03bd\u03b1\u03b9 \u03ba\u03cc\u03ba\u03ba\u03b9\u03bd\u03b7.":
      "Das Feuer ist rot.",
    "\u0388\u03c7\u03c9 \u03c0\u03ad\u03bd\u03c4\u03b5 \u03b4\u03ac\u03c7\u03c4\u03c5\u03bb\u03b1 \u03c3\u03b5 \u03ba\u03ac\u03b8\u03b5 \u03c7\u03ad\u03c1\u03b9.":
      "Ich habe f\u00fcnf Finger an jeder Hand.",
    "\u03a0\u03bb\u03ad\u03bd\u03c9 \u03c4\u03b1 \u03c7\u03ad\u03c1\u03b9\u03b1 \u03bc\u03bf\u03c5 \u03c0\u03c1\u03b9\u03bd \u03c4\u03bf \u03c6\u03b1\u03b3\u03b7\u03c4\u03cc.":
      "Ich wasche meine H\u00e4nde vor dem Essen.",
    "\u0392\u03bb\u03ad\u03c0\u03c9 \u03bc\u03b5 \u03c4\u03b1 \u03bc\u03ac\u03c4\u03b9\u03b1 \u03bc\u03bf\u03c5.":
      "Ich sehe mit meinen Augen.",
    "\u03a4\u03bf \u03c6\u03b8\u03b9\u03bd\u03cc\u03c0\u03c9\u03c1\u03bf \u03c4\u03b1 \u03c6\u03cd\u03bb\u03bb\u03b1 \u03c0\u03ad\u03c6\u03c4\u03bf\u03c5\u03bd \u03b1\u03c0\u03cc \u03c4\u03bf \u03b4\u03ad\u03bd\u03c4\u03c1\u03bf.":
      "Im Herbst f\u00e4llt das Laub vom Baum.",
    "\u03a4\u03bf \u03c4\u03c1\u03ad\u03bd\u03bf \u03c0\u03b7\u03b3\u03b1\u03af\u03bd\u03b5\u03b9 \u03c0\u03ac\u03bd\u03c9 \u03c3\u03b5 \u03c1\u03ac\u03b3\u03b5\u03c2.":
      "Der Zug f\u00e4hrt auf Schienen.",
    "\u0395\u03af\u03bc\u03b1\u03b9 \u03c0\u03bf\u03bb\u03cd \u03c0\u03b5\u03b9\u03bd\u03b1\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2.":
      "Ich bin sehr hungrig.",
    "\u03a4\u03bf\u03bd \u03c7\u03b5\u03b9\u03bc\u03ce\u03bd\u03b1 \u03c0\u03ad\u03c6\u03c4\u03b5\u03b9 \u03ac\u03c3\u03c0\u03c1\u03bf \u03c7\u03b9\u03cc\u03bd\u03b9.":
      "Im Winter f\u00e4llt wei\u00dfer Schnee."
  };

  function deutsch(s) {
    var fertig = SATZ_DE[String(s.grSatz).trim()];
    if (fertig) return fertig;
    return String(s.de || "").replace(/_+/, s.answer || "");
  }

  function szVorrat() {
    var aus = [];
    function nimm(gr, de, bildwort) {
      if (!gr || !pfadVon(gr)) return;
      var n = String(gr).trim().split(/\s+/).length;
      if (n < 3 || n > 7) return;
      aus.push({ gr: String(gr).trim(), de: de || "", bildwort: bildwort || null });
    }
    try {
      if (typeof lueckeSentences !== "undefined" && lueckeSentences) {
        for (var i = 0; i < lueckeSentences.length; i++) {
          var s = lueckeSentences[i];
          nimm(s.grSatz, deutsch(s), s.answer);
        }
      }
    } catch (e) {}
    try {
      if (typeof convos !== "undefined" && convos) {
        for (var c = 0; c < convos.length; c++) {
          var m = convos[c].messages || [];
          for (var j = 0; j < m.length; j++) {
            if ((String(m[j].gr).match(/[.!;]/g) || []).length > 1) continue;
            nimm(m[j].gr, m[j].de, null);
          }
        }
      }
    } catch (e) {}
    return aus;
  }

  window.startSatzbau = function () {
    szRunde = mischen(szVorrat()).slice(0, SZ_PRO_RUNDE);
    szStelle = 0; szRichtig = 0;
    szZeigen();
  };

  function szZeigen() {
    var wo = document.getElementById("satzbau-area");
    if (!wo) return;
    if (!szRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Für dieses Spiel fehlen noch die Aufnahmen.</p>';
      return;
    }
    if (szStelle >= szRunde.length) {
      wo.innerHTML = fertigKarte(szRichtig, szRunde.length);
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startSatzbau);
      return;
    }
    var s = szRunde[szStelle];
    var woerter = s.gr.split(/\s+/);
    // Das Satzzeichen am Ende bleibt liegen, bis der Satz steht -
    // sonst waere am Punkt zu sehen, welches Wort das letzte ist.
    var letzte = woerter[woerter.length - 1], schluss = "";
    var tr = letzte.match(/[.!;·]+$/);
    if (tr) { schluss = tr[0]; woerter[woerter.length - 1] = letzte.slice(0, -schluss.length); }

    szGebaut = [];
    var gemischt = mischen(woerter.map(function (x, i) { return { w: x, i: i }; }));
    if (gemischt[0].i === 0 && woerter.length > 1) {
      var t = gemischt[0]; gemischt[0] = gemischt[1]; gemischt[1] = t;
    }

    var h = '<p class="ws-hin">Hör den Satz und leg ihn Wort für Wort zusammen.</p>'
          + balken(szStelle, szRunde.length)
          + '<div class="card ws-karte">'
          + (s.bildwort ? bild({ de: s.bildwort, emoji: "📖" }) : "")
          + '<p class="ws-de">' + s.de + '</p>'
          + '<div class="ws-bau ws-satz">&nbsp;</div></div>'
          + '<div class="ws-hoerzeile">'
          + '<button type="button" class="ws-hoeren">'
          + '🔊 Nochmal hören</button></div>'
          + '<div class="ws-wahl">';
    for (var i = 0; i < gemischt.length; i++) {
      h += '<button type="button" class="ws-wort-knopf" data-i="' + gemischt[i].i + '">'
         + gemischt[i].w + '</button>';
    }
    h += '</div><p class="ws-stand">' + (szStelle + 1) + ' von ' + szRunde.length + '</p>';
    wo.innerHTML = h;

    wo.querySelector(".ws-hoeren").addEventListener("click", function () {
      sprich(s.gr);
    });
    setTimeout(function () { sprich(s.gr); }, 250);

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-wort-knopf");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        var knopf = this, bau = wo.querySelector(".ws-bau");
        if (+knopf.getAttribute("data-i") !== szGebaut.length) {
          frisch = false;
          knopf.className += " ws-falsch";
          setTimeout(function () {
            knopf.className = knopf.className.replace(" ws-falsch", "");
          }, 350);
          return;
        }
        szGebaut.push(woerter[szGebaut.length]);
        knopf.disabled = true;
        knopf.className += " ws-gesetzt";
        bau.textContent = szGebaut.join(" ");
        if (szGebaut.length !== woerter.length) return;
        if (frisch) szRichtig++;
        bau.className = "ws-bau ws-satz voll";
        bau.textContent = s.gr;
        sprich(s.gr, function () { szStelle++; szZeigen(); });
      });
    }
  }

  // ══ Πού πάει; - wohin gehört das? ═════════════════════
  // Sortieren ist das, was Wortschatz wirklich festigt: es setzt die
  // Wörter zueinander in Beziehung, statt sie einzeln abzufragen. Die
  // Körbe sind die Kategorien aus vokabeln.js, dieselben wie auf der
  // Wörterseite. "Alltag" bleibt draussen - das ist eine Sammelkiste,
  // da gehört vieles genauso gut woanders hin.
  var soRunde = [], soStelle = 0, soRichtig = 0, soKoerbe = null;
  var SO_PRO_RUNDE = 10;
  var SO_AUS = { alltag: 1 };

  function koerbe() {
    if (soKoerbe) return soKoerbe;
    soKoerbe = [];
    try {
      for (var i = 0; i < categories.length; i++) {
        if (!SO_AUS[categories[i].id]) soKoerbe.push(categories[i]);
      }
    } catch (e) {}
    return soKoerbe;
  }

  function korbName(id) {
    var k = koerbe();
    for (var i = 0; i < k.length; i++) if (k[i].id === id) return k[i].label;
    return id;
  }

  function soWoerter() {
    var aus = [], erlaubt = {}, k = koerbe();
    for (var i = 0; i < k.length; i++) erlaubt[k[i].id] = 1;
    for (var j = 0; j < vocab.length; j++) if (erlaubt[vocab[j].cat]) aus.push(vocab[j]);
    return aus;
  }

  window.startSortieren = function () {
    soKoerbe = null;
    soRunde = mischen(soWoerter()).slice(0, SO_PRO_RUNDE);
    soStelle = 0; soRichtig = 0;
    soZeigen();
  };

  function soZeigen() {
    var wo = document.getElementById("sortieren-area");
    if (!wo) return;
    if (!soRunde.length) {
      wo.innerHTML = '<p class="ws-hin">Hier fehlen noch die Wörter.</p>';
      return;
    }
    if (soStelle >= soRunde.length) {
      wo.innerHTML = fertigKarte(soRichtig, soRunde.length);
      wo.querySelector(".ws-nochmal").addEventListener("click", window.startSortieren);
      return;
    }
    var w = soRunde[soStelle];
    var andere = mischen(koerbe().slice()), wahl = [w.cat];
    for (var i = 0; i < andere.length && wahl.length < 4; i++) {
      if (andere[i].id !== w.cat) wahl.push(andere[i].id);
    }
    wahl = mischen(wahl);

    var h = '<p class="ws-hin">In welchen Korb gehört das Wort?</p>'
          + balken(soStelle, soRunde.length)
          + '<div class="card ws-karte">' + bild(w)
          + '<p class="ws-wort"><span class="ws-gr">' + w.gr + '</span>' + knopfTon(w) + '</p>'
          + '<p class="ws-de">' + w.de + '</p></div>'
          + '<div class="ws-koerbe">';
    for (var j = 0; j < wahl.length; j++) {
      h += '<button type="button" class="ws-korb" data-k="' + wahl[j] + '">'
         + korbName(wahl[j]) + '</button>';
    }
    h += '</div><p class="ws-stand">' + (soStelle + 1) + ' von ' + soRunde.length + '</p>';
    wo.innerHTML = h;

    var frisch = true;
    var kn = wo.querySelectorAll(".ws-korb");
    for (var k = 0; k < kn.length; k++) {
      kn[k].addEventListener("click", function () {
        if (this.getAttribute("data-k") !== w.cat) {
          frisch = false;
          this.className += " ws-falsch";
          this.disabled = true;
          return;
        }
        this.className += " ws-richtig";
        if (frisch) soRichtig++;
        for (var m = 0; m < kn.length; m++) kn[m].disabled = true;
        sprich(w.art ? (pfadVon(w.art + " " + w.gr) ? w.art + " " + w.gr : w.gr) : w.gr,
               function () { soStelle++; soZeigen(); });
      });
    }
  }
})();
