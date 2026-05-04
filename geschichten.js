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
  ,
  {
    title: "Perseus und Medusa",
    emoji: "⚔️",
    img: "story-hero_perseus_fighting_against_medusa",
    text: [
      {de:"Perseus ist ein tapferer "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},
      {de:". Er lebt in "},{de:"Griechenland",gr:"Ελλάδα",pr:"E-la-da",mark:true},
      {de:". Eines Tages nimmt er sein "},{de:"Schwert",gr:"σπαθί",pr:"spa-thi",mark:true},
      {de:" und seinen "},{de:"Schild",gr:"ασπίδα",pr:"as-pi-da",mark:true},
      {de:" und macht sich auf den Weg. Er muss die boese Medusa besiegen. Medusa hat Schlangenhaare und boese "},{de:"Augen",gr:"μάτια",pr:"ma-tia",mark:true},
      {de:". Perseus ist sehr "},{de:"mutig",gr:"γενναίος",pr:"ghen-ne-os",mark:true},
      {de:". Er schaut in seinen Schild wie in einen "},{de:"Spiegel",gr:"καθρέφτης",pr:"kath-ref-tis",mark:true},
      {de:" und besiegt Medusa. Er ist ein "},{de:"Sieger",gr:"νικητής",pr:"ni-ki-tis",mark:true},{de:"!"}
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
  {de:"Die _____ sitzt auf dem Dach.",          grSatz:"Η γάτα κάθεται στη στέγη.",                    answer:"Katze",    gr:"γάτα",         pr:"gha-ta",        cat:"tiere"},
  {de:"Der _____ bellt laut.",                  grSatz:"Ο σκύλος γαβγίζει δυνατά.",                   answer:"Hund",     gr:"σκύλος",       pr:"ski-los",       cat:"tiere"},
  {de:"Ich esse einen roten _____.",            grSatz:"Τρώω ένα κόκκινο μήλο.",                      answer:"Apfel",    gr:"μήλο",         pr:"mi-lo",         cat:"essen"},
  {de:"Ich trinke jeden Morgen _____.",         grSatz:"Πίνω γάλα κάθε πρωί.",                        answer:"Milch",    gr:"γάλα",         pr:"gha-la",        cat:"essen"},
  {de:"Der Himmel ist _____.",                  grSatz:"Ο ουρανός είναι μπλε.",                        answer:"Blau",     gr:"μπλε",         pr:"ble",           cat:"farben"},
  {de:"Das Feuer ist _____.",                   grSatz:"Η φωτιά είναι κόκκινη.",                       answer:"Rot",      gr:"κόκκινο",      pr:"ko-ki-no",      cat:"farben"},
  {de:"Ich habe _____ Finger an jeder Hand.",   grSatz:"Έχω πέντε δάχτυλα σε κάθε χέρι.",             answer:"Fünf",     gr:"πέντε",        pr:"pen-de",        cat:"zahlen"},
  {de:"Ich wasche meine _____ vor dem Essen.",  grSatz:"Πλένω τα χέρια μου πριν το φαγητό.",          answer:"Hand",     gr:"χέρι",         pr:"che-ri",        cat:"koerper"},
  {de:"Ich sehe mit meinen _____.",             grSatz:"Βλέπω με τα μάτια μου.",                      answer:"Auge",     gr:"μάτι",         pr:"ma-ti",         cat:"koerper"},
  {de:"Heute scheint die _____ sehr hell.",     grSatz:"Σήμερα ο ήλιος λάμπει πολύ.",                 answer:"Sonne",    gr:"ήλιος",        pr:"i-li-os",       cat:"natur"},
  {de:"Im Herbst faellt das Laub vom _____.",   grSatz:"Το φθινόπωρο τα φύλλα πέφτουν από το δέντρο.",answer:"Baum",     gr:"δέντρο",       pr:"den-dro",       cat:"natur"},
  {de:"Das _____ faehrt auf Schienen.",         grSatz:"Το τρένο πηγαίνει πάνω σε ράγες.",            answer:"Zug",      gr:"τρένο",        pr:"tre-no",        cat:"verkehr"},
  {de:"Das _____ fliegt hoch am Himmel.",       grSatz:"Το αεροπλάνο πετάει ψηλά στον ουρανό.",       answer:"Flugzeug", gr:"αεροπλάνο",    pr:"a-e-ro-pla-no", cat:"verkehr"},
  {de:"Ich bin sehr _____, ich habe Hunger.",   grSatz:"Είμαι πολύ πεινασμένος.",                     answer:"Hungrig",  gr:"πεινασμένος",  pr:"pi-nas-me-nos", cat:"gefuehle"},
  {de:"Es regnet, ich brauche einen Schirm.",   grSatz:"Βρέχει, χρειάζομαι ομπρέλα.",                 answer:"Regen",    gr:"βροχή",        pr:"vro-chi",       cat:"wetter"},
  {de:"Im Winter faellt weisser _____.",        grSatz:"Τον χειμώνα πέφτει άσπρο χιόνι.",             answer:"Schnee",   gr:"χιόνι",        pr:"chi-o-ni",      cat:"wetter"},
  {de:"Nach dem Wochenende kommt der _____.",   grSatz:"Μετά το Σαββατοκύριακο έρχεται η Δευτέρα.",   answer:"Montag",   gr:"Δευτέρα",      pr:"Def-te-ra",     cat:"wochentage"},
  {de:"Vor dem Samstag kommt der _____.",       grSatz:"Πριν το Σάββατο είναι η Παρασκευή.",          answer:"Freitag",  gr:"Παρασκευή",    pr:"Pa-ras-ke-vi",  cat:"wochentage"},
  {de:"Ich lese gern ein _____ vor dem Schlafen.", grSatz:"Διαβάζω ένα βιβλίο πριν κοιμηθώ.",        answer:"Buch",     gr:"βιβλίο",       pr:"vi-vli-o",      cat:"schule"},
  {de:"Wir wohnen in einem grossen _____.",     grSatz:"Μένουμε σε ένα μεγάλο σπίτι.",               answer:"Haus",     gr:"σπίτι",        pr:"spi-ti",        cat:"zuhause"}
];
