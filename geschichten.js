// ============================================================
//  geschichten.js  –  Geschichten, Gespräche & Lückentexte
//  Hier kannst du neue Inhalte hinzufügen!
// ============================================================

var stories = [
  {
    title: "Die Katze und das Meer",
    emoji: "🐱",
    img: "katze",
    text: [
      {de:"Eine kleine "},{de:"Katze",gr:"γάτα",pr:"gha-ta",mark:true},
      {de:" wohnt in "},{de:"Griechenland",gr:"Ελλάδα",pr:"E-la-da",mark:true},
      {de:". Jeden Morgen laeuft sie zum "},{de:"Meer",gr:"θάλασσα",pr:"tha-la-sa",mark:true},
      {de:". Das Meer ist "},{de:"blau",gr:"μπλε",pr:"ble",mark:true},
      {de:" und warm. Die Katze trinkt "},{de:"Wasser",gr:"νερό",pr:"ne-ro",mark:true},
      {de:" aus einem Brunnen. Sie ist sehr "},{de:"gluecklich",gr:"χαρούμενη",pr:"cha-ru-me-ni",mark:true},{de:"."}
    ]
  },
  {
    title: "Auf dem Markt",
    emoji: "🍎",
    img: "apfel",
    text: [
      {de:"Maria geht auf den "},{de:"Markt",gr:"αγορά",pr:"a-go-ra",mark:true},
      {de:". Sie kauft "},{de:"Aepfel",gr:"μήλα",pr:"mi-la",mark:true},
      {de:" und "},{de:"Brot",gr:"ψωμί",pr:"pso-mi",mark:true},
      {de:". Der Verkaeufer sagt: Kalimera! "},{de:"Guten Morgen",gr:"Καλημέρα",pr:"Ka-li-me-ra",mark:true},
      {de:"! Maria antwortet: "},{de:"Danke schoen",gr:"Ευχαριστώ",pr:"Ef-cha-ri-sto",mark:true},{de:"!"}
    ]
  },
  {
    title: "Ein Tag am Strand",
    emoji: "🌊",
    img: "meer",
    text: [
      {de:"Die Familie faehrt zum "},{de:"Strand",gr:"παραλία",pr:"pa-ra-li-a",mark:true},
      {de:". Die "},{de:"Sonne",gr:"ήλιος",pr:"i-li-os",mark:true},
      {de:" scheint hell. Die Kinder bauen eine Sandburg. Papa schwimmt im "},{de:"Wasser",gr:"νερό",pr:"ne-ro",mark:true},
      {de:". Mama liest ein "},{de:"Buch",gr:"βιβλίο",pr:"vi-vli-o",mark:true},
      {de:". Am Abend essen sie "},{de:"Eis",gr:"παγωτό",pr:"pa-go-to",mark:true},
      {de:". Ein schoener "},{de:"Tag",gr:"μέρα",pr:"me-ra",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die weise Eule",
    emoji: "🦉",
    img: "baum",
    text: [
      {de:"Eine Eule lebt in einem alten "},{de:"Baum",gr:"δέντρο",pr:"den-dro",mark:true},
      {de:". Die Kinder kommen jeden Tag zu ihr. Sie lernen: "},{de:"Freund",gr:"φίλος",pr:"fi-los",mark:true},
      {de:", "},{de:"Schule",gr:"σχολείο",pr:"scho-li-o",mark:true},
      {de:", "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},
      {de:". Die Eule sagt: Lernen ist wie ein "},{de:"Geschenk",gr:"δώρο",pr:"do-ro",mark:true},{de:"!"}
    ]
  }
];

var convos = [
  {
    title: "Hallo sagen",
    img: "glücklich",
    messages: [
      {side:"L", speaker:"Anna",    gr:"Γεια σου!",                   pr:"Ja su!",                         de:"Hallo!"},
      {side:"R", speaker:"Nikos",   gr:"Γεια! Πώς είσαι;",            pr:"Ja! Pos i-se?",                  de:"Hallo! Wie geht es dir?"},
      {side:"L", speaker:"Anna",    gr:"Είμαι καλά, ευχαριστώ!",      pr:"I-me ka-la, ef-cha-ri-sto!",     de:"Mir geht es gut, danke!"},
      {side:"R", speaker:"Nikos",   gr:"Με λένε Νίκο. Εσένα;",        pr:"Me le-ne Ni-ko. E-se-na?",       de:"Ich heisse Nikos. Und du?"},
      {side:"L", speaker:"Anna",    gr:"Με λένε Άννα. Χαίρομαι!",     pr:"Me le-ne A-na. Che-ro-me!",      de:"Ich heisse Anna. Freut mich!"}
    ],
    tip: "<b>Merke:</b> Γεια σου (Ja su) = Hallo zu einer Person. Γεια σας (Ja sas) = Hallo zu mehreren oder hoeflich."
  },
  {
    title: "Im Cafe",
    img: "eis",
    messages: [
      {side:"L", speaker:"Kellner", gr:"Καλημέρα! Τι θα πάρετε;",     pr:"Ka-li-me-ra! Ti tha pa-re-te?",  de:"Guten Morgen! Was darf es sein?"},
      {side:"R", speaker:"Kind",    gr:"Ένα παγωτό, παρακαλώ.",        pr:"E-na pa-go-to, pa-ra-ka-lo.",    de:"Ein Eis, bitte."},
      {side:"L", speaker:"Kellner", gr:"Τι γεύση θέλεις;",             pr:"Ti ghef-si the-lis?",             de:"Welche Sorte moechtest du?"},
      {side:"R", speaker:"Kind",    gr:"Σοκολάτα, παρακαλώ!",          pr:"So-ko-la-ta, pa-ra-ka-lo!",      de:"Schokolade, bitte!"},
      {side:"L", speaker:"Kellner", gr:"Ορίστε! Δύο ευρώ.",            pr:"O-ri-ste! Di-o ev-ro.",           de:"Bitte sehr! Zwei Euro."},
      {side:"R", speaker:"Kind",    gr:"Ευχαριστώ πολύ!",              pr:"Ef-cha-ri-sto po-li!",            de:"Vielen Dank!"}
    ],
    tip: "<b>Nuetzliche Woerter:</b> παρακαλώ (pa-ra-ka-lo) = bitte · ευχαριστώ (ef-cha-ri-sto) = danke · ορίστε (o-ri-ste) = bitte sehr"
  },
  {
    title: "In der Schule",
    img: "buch",
    messages: [
      {side:"L", speaker:"Lehrerin",gr:"Καλημέρα, παιδιά!",            pr:"Ka-li-me-ra, pe-dja!",            de:"Guten Morgen, Kinder!"},
      {side:"R", speaker:"Kinder",  gr:"Καλημέρα, κυρία!",             pr:"Ka-li-me-ra, ki-ri-a!",           de:"Guten Morgen, Frau Lehrerin!"},
      {side:"L", speaker:"Lehrerin",gr:"Πώς λέγεται αυτό;",            pr:"Pos le-ghe-te af-to?",            de:"Wie heisst das?"},
      {side:"R", speaker:"Kind",    gr:"Αυτό είναι ένα μολύβι.",        pr:"Af-to i-ne e-na mo-li-vi.",       de:"Das ist ein Bleistift."},
      {side:"L", speaker:"Lehrerin",gr:"Μπράβο! Πολύ καλά!",           pr:"Bra-vo! Po-li ka-la!",            de:"Bravo! Sehr gut!"}
    ],
    tip: "<b>In der Schule:</b> κυρία (ki-ri-a) = Frau Lehrerin · κύριος (ki-ri-os) = Herr Lehrer · μπράβο (bra-vo) = super!"
  },
  {
    title: "Familie",
    img: "haus",
    messages: [
      {side:"L", speaker:"Oma",     gr:"Έλα, παιδί μου!",              pr:"E-la, pe-di mu!",                 de:"Komm her, mein Kind!"},
      {side:"R", speaker:"Kind",    gr:"Γιαγιά! Πώς είσαι;",           pr:"Ja-ja! Pos i-se?",                de:"Oma! Wie geht es dir?"},
      {side:"L", speaker:"Oma",     gr:"Καλά, γλυκό μου!",             pr:"Ka-la, ghli-ko mu!",              de:"Gut, mein Schatz!"},
      {side:"R", speaker:"Kind",    gr:"Πού είναι ο παππούς;",         pr:"Pu i-ne o pa-pus?",               de:"Wo ist Opa?"},
      {side:"L", speaker:"Oma",     gr:"Ο παππούς είναι στον κήπο.",   pr:"O pa-pus i-ne ston ki-po.",       de:"Opa ist im Garten."}
    ],
    tip: "<b>Familie:</b> μαμά (ma-ma) = Mama · μπαμπάς (ba-bas) = Papa · γιαγιά (ja-ja) = Oma · παππούς (pa-pus) = Opa"
  }
];

var lueckeSentences = [
  {de:"Die _____ sitzt auf dem Dach.",  answer:"Katze",     gr:"γάτα",         pr:"gha-ta",          cat:"tiere"},
  {de:"Der _____ bellt laut.",  answer:"Hund",      gr:"σκύλος",       pr:"ski-los",         cat:"tiere"},
  {de:"Ich esse einen roten _____.",  answer:"Apfel",     gr:"μήλο",         pr:"mi-lo",           cat:"essen"},
  {de:"Ich trinke jeden Morgen _____.",  answer:"Milch",     gr:"γάλα",         pr:"gha-la",          cat:"essen"},
  {de:"Der Himmel ist _____.",  answer:"Blau",      gr:"μπλε",         pr:"ble",             cat:"farben"},
  {de:"Das Feuer ist _____.",  answer:"Rot",       gr:"κόκκινο",      pr:"ko-ki-no",        cat:"farben"},
  {de:"Ich habe _____ Finger an jeder Hand.",  answer:"Fünf",      gr:"πέντε",        pr:"pen-de",          cat:"zahlen"},
  {de:"Ich wasche meine _____ vor dem Essen.",  answer:"Hand",      gr:"χέρι",         pr:"che-ri",          cat:"koerper"},
  {de:"Ich sehe mit meinen _____.",  answer:"Auge",      gr:"μάτι",         pr:"ma-ti",           cat:"koerper"},
  {de:"Heute scheint die _____ sehr hell.",  answer:"Sonne",     gr:"ήλιος",        pr:"i-li-os",         cat:"natur"},
  {de:"Im Herbst faellt das Laub vom _____.",  answer:"Baum", gr:"δέντρο",   pr:"den-dro",         cat:"natur"},
  {de:"Das _____ faehrt auf Schienen.",  answer:"Zug",       gr:"τρένο",        pr:"tre-no",          cat:"verkehr"},
  {de:"Das _____ fliegt hoch am Himmel.",  answer:"Flugzeug",  gr:"αεροπλάνο",   pr:"a-e-ro-pla-no",   cat:"verkehr"},
  {de:"Ich bin sehr _____, ich habe Hunger.",  answer:"Hungrig",   gr:"πεινασμένος", pr:"pi-nas-me-nos",   cat:"gefuehle"},
  {de:"Es regnet, ich brauche einen Schirm.",  answer:"Regen",     gr:"βροχή",        pr:"vro-chi",         cat:"wetter"},
  {de:"Im Winter faellt weisser _____.",  answer:"Schnee",    gr:"χιόνι",        pr:"chi-o-ni",        cat:"wetter"},
  {de:"Nach dem Wochenende kommt der _____.",  answer:"Montag", gr:"Δευτέρα",   pr:"Def-te-ra",       cat:"wochentage"},
  {de:"Vor dem Samstag kommt der _____.",  answer:"Freitag",   gr:"Παρασκευή",    pr:"Pa-ras-ke-vi",    cat:"wochentage"},
  {de:"Ich lese gern ein _____ vor dem Schlafen.",  answer:"Buch",      gr:"βιβλίο",       pr:"vi-vli-o",        cat:"schule"},
  {de:"Wir wohnen in einem grossen _____.",  answer:"Haus",      gr:"σπίτι",        pr:"spi-ti",          cat:"zuhause"}
];
