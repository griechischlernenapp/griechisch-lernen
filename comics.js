// ============================================================
//  comics.js  –  Bildgeschichten mit Sprechblasen
//  Hier kannst du neue Bildgeschichten hinzufügen!
//
//  Aufbau einer Sprechblase:
//    x, y   Position in Prozent der Bildbreite/-höhe (linke obere Ecke)
//    w      Breite der Blase in Prozent der Bildbreite
//    tail   Position des Zipfels am unteren Rand, in Prozent der Blasenbreite
//    wer    Name der sprechenden Person (steht klein über der Blase)
//    vor / loesung / nach   Satz mit einer Lücke; loesung ist das fehlende Wort
//    de     deutsche Übersetzung des ganzen Satzes
//
//  Wichtig: Die Bilder dürfen KEINE eingezeichneten Sprechblasen und
//  keinen Text enthalten – die Blasen zeichnet die App darüber.
//  Das Lösungswort sollte in vocab[] stehen, dann passt es zum Wortschatz.
// ============================================================

var comics = [
  {
    id: "reise",
    titel: "Eine Reise nach Griechenland", titelGr: "Ένα ταξίδι στην Ελλάδα", emoji: "🚗",
    szenen: [
      {
        img: "story-a_happy_family_arrived_in_a_silver_car",
        ort: "Am Meer", ortGr: "Στη θάλασσα",
        blasen: [
          {x:2,  y:3, w:37, tail:88, wer:"Άννα",
           vor:"Κοίτα! Η ", loesung:"θάλασσα", nach:" είναι μπλε!",
           de:"Schau! Das Meer ist blau!"},
          {x:59, y:2, w:39, tail:15, wer:"Η μαμά",
           vor:"Ναι! Και ο ", loesung:"ήλιος", nach:" λάμπει.",
           de:"Ja! Und die Sonne scheint."}
        ]
      },
      {
        img: "story-a_happy_family_sitting_together_at_a_greek_restaurant",
        ort: "Im Restaurant", ortGr: "Στο εστιατόριο",
        blasen: [
          {x:2,  y:2, w:36, tail:78, wer:"Η μαμά",
           vor:"Σήμερα έχουμε φρέσκο ", loesung:"ψάρι", nach:".",
           de:"Heute haben wir frischen Fisch."},
          {x:61, y:2, w:37, tail:22, wer:"Άννα",
           vor:"Εγώ θέλω ", loesung:"παγωτό", nach:", παρακαλώ!",
           de:"Ich möchte ein Eis, bitte!"}
        ]
      },
      {
        img: "story-children_playing_with_a_cat_in_greece",
        ort: "In der Gasse", ortGr: "Στο σοκάκι",
        blasen: [
          {x:2,  y:2, w:35, tail:80, wer:"Άννα",
           vor:"Έλα εδώ, μικρή ", loesung:"γάτα", nach:"!",
           de:"Komm her, kleine Katze!"},
          {x:61, y:2, w:37, tail:20, wer:"Νίκος",
           vor:"Θέλει ", loesung:"γάλα", nach:" και ψωμί.",
           de:"Sie möchte Milch und Brot."}
        ]
      }
    ]
  },
  {
    id: "chorio",
    titel: "Ein Tag im Dorf", titelGr: "Μια μέρα στο χωριό", emoji: "🐑",
    szenen: [
      {
        img: "story-greek_shepherd_with_his_sheeps_grazin",
        ort: "Auf der Wiese", ortGr: "Στο λιβάδι",
        blasen: [
          {x:2,  y:3, w:36, tail:92, wer:"Ο βοσκός",
           vor:"Κοίτα! Το ", loesung:"πρόβατο", nach:" είναι άσπρο.",
           de:"Schau! Das Schaf ist weiß."},
          {x:59, y:3, w:39, tail:70, wer:"Ο βοσκός",
           vor:"Ζω εδώ, κοντά στο ", loesung:"βουνό", nach:".",
           de:"Ich lebe hier, nah am Berg."}
        ]
      },
      {
        img: "story-greek_fishermen_with_his_boat_fishing_net",
        ort: "Am Hafen", ortGr: "Στο λιμάνι",
        blasen: [
          {x:2,  y:3, w:36, tail:80, wer:"Ο ψαράς",
           vor:"Κοίτα! Ένα μεγάλο ", loesung:"ψάρι", nach:"!",
           de:"Schau! Ein großer Fisch!"},
          {x:60, y:3, w:38, tail:6, wer:"Ο ψαράς",
           vor:"Το ", loesung:"πλοίο", nach:" μου είναι μπλε και άσπρο.",
           de:"Mein Schiff ist blau und weiß."}
        ]
      },
      {
        img: "story-old_greek_grandmother_cooking_greek_trachanas",
        ort: "In der Küche", ortGr: "Στην κουζίνα",
        blasen: [
          {x:2,  y:2, w:36, tail:95, wer:"Η γιαγιά",
           vor:"Θέλεις λίγο ", loesung:"ψωμί", nach:";",
           de:"Möchtest du etwas Brot?"},
          {x:61, y:2, w:37, tail:30, wer:"Άννα",
           vor:"Ναι! Και ", loesung:"νερό", nach:", παρακαλώ.",
           de:"Ja! Und Wasser, bitte."}
        ]
      }
    ]
  }
];
