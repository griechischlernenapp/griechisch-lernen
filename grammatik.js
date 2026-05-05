// ============================================================
//  grammatik.js  –  Grammatik: Einzahl / Mehrzahl & Verben
//  Hier kannst du neue Wörter und Verben hinzufügen!
// ============================================================

var grammatikKategorien = [
  {id:"tiere",      label:"🐾 Tiere"},
  {id:"essen",      label:"🍎 Essen"},
  {id:"farben",     label:"🎨 Farben"},
  {id:"zahlen",     label:"🔢 Zahlen"},
  {id:"koerper",    label:"💪 Körper"},
  {id:"kleidung",   label:"👕 Kleidung"},
  {id:"zuhause",    label:"🏠 Zuhause"},
  {id:"natur",      label:"🌿 Natur"},
  {id:"schule",     label:"✏️ Schule"},
  {id:"verkehr",    label:"🚗 Verkehr"},
  {id:"gefuehle",   label:"😊 Gefühle"},
  {id:"wetter",     label:"🌤️ Wetter"},
  {id:"verben",     label:"🔄 Verben"}
];

// Nomen: Einzahl und Mehrzahl
var nomen = [
  // Tiere
  {de:"Katze",     dePl:"Katzen",      gr:"γάτα",       grPl:"γάτες",       pr:"gha-ta",        prPl:"gha-tes",       emoji:"🐱", cat:"tiere"},
  {de:"Hund",      dePl:"Hunde",       gr:"σκύλος",     grPl:"σκύλοι",      pr:"ski-los",       prPl:"ski-li",        emoji:"🐶", cat:"tiere"},
  {de:"Vogel",     dePl:"Vögel",       gr:"πουλί",      grPl:"πουλιά",      pr:"pu-li",         prPl:"pu-lia",        emoji:"🐦", cat:"tiere"},
  {de:"Fisch",     dePl:"Fische",      gr:"ψάρι",       grPl:"ψάρια",       pr:"psa-ri",        prPl:"psa-ria",       emoji:"🐟", cat:"tiere"},
  {de:"Pferd",     dePl:"Pferde",      gr:"άλογο",      grPl:"άλογα",       pr:"a-lo-gho",      prPl:"a-lo-gha",      emoji:"🐴", cat:"tiere"},
  {de:"Schaf",     dePl:"Schafe",      gr:"πρόβατο",    grPl:"πρόβατα",     pr:"pro-va-to",     prPl:"pro-va-ta",     emoji:"🐑", cat:"tiere"},
  // Essen
  {de:"Apfel",     dePl:"Äpfel",       gr:"μήλο",       grPl:"μήλα",        pr:"mi-lo",         prPl:"mi-la",         emoji:"🍎", cat:"essen"},
  {de:"Brot",      dePl:"Brote",       gr:"ψωμί",       grPl:"ψωμιά",       pr:"pso-mi",        prPl:"pso-mia",       emoji:"🍞", cat:"essen"},
  {de:"Ei",        dePl:"Eier",        gr:"αυγό",       grPl:"αυγά",        pr:"av-gho",        prPl:"av-gha",        emoji:"🥚", cat:"essen"},
  {de:"Tomate",    dePl:"Tomaten",     gr:"ντομάτα",    grPl:"ντομάτες",    pr:"do-ma-ta",      prPl:"do-ma-tes",     emoji:"🍅", cat:"essen"},
  {de:"Olive",     dePl:"Oliven",      gr:"ελιά",       grPl:"ελιές",       pr:"e-lia",         prPl:"e-lies",        emoji:"🫒", cat:"essen"},
  {de:"Käse",      dePl:"Käsesorten",  gr:"τυρί",       grPl:"τυριά",       pr:"ti-ri",         prPl:"ti-ria",        emoji:"🧀", cat:"essen"},
  // Körper
  {de:"Auge",      dePl:"Augen",       gr:"μάτι",       grPl:"μάτια",       pr:"ma-ti",         prPl:"ma-tia",        emoji:"👁️", cat:"koerper"},
  {de:"Hand",      dePl:"Hände",       gr:"χέρι",       grPl:"χέρια",       pr:"che-ri",        prPl:"che-ria",       emoji:"✋", cat:"koerper"},
  {de:"Fuß",       dePl:"Füße",        gr:"πόδι",       grPl:"πόδια",       pr:"po-dhi",        prPl:"po-dhia",       emoji:"🦶", cat:"koerper"},
  {de:"Ohr",       dePl:"Ohren",       gr:"αυτί",       grPl:"αυτιά",       pr:"af-ti",         prPl:"af-tia",        emoji:"👂", cat:"koerper"},
  {de:"Zahn",      dePl:"Zähne",       gr:"δόντι",      grPl:"δόντια",      pr:"dhon-di",       prPl:"dhon-dia",      emoji:"🦷", cat:"koerper"},
  {de:"Finger",    dePl:"Finger",      gr:"δάχτυλο",    grPl:"δάχτυλα",     pr:"dhach-ti-lo",   prPl:"dhach-ti-la",   emoji:"☝️", cat:"koerper"},
  // Kleidung
  {de:"Hemd",      dePl:"Hemden",      gr:"πουκάμισο",  grPl:"πουκάμισα",   pr:"pu-ka-mi-so",   prPl:"pu-ka-mi-sa",   emoji:"👕", cat:"kleidung"},
  {de:"Schuh",     dePl:"Schuhe",      gr:"παπούτσι",   grPl:"παπούτσια",   pr:"pa-pu-tsi",     prPl:"pa-pu-tsia",    emoji:"👟", cat:"kleidung"},
  {de:"Kleid",     dePl:"Kleider",     gr:"φόρεμα",     grPl:"φορέματα",    pr:"fo-re-ma",      prPl:"fo-re-ma-ta",   emoji:"👗", cat:"kleidung"},
  {de:"Mütze",     dePl:"Mützen",      gr:"σκούφος",    grPl:"σκούφοι",     pr:"sku-fos",       prPl:"sku-fi",        emoji:"🧢", cat:"kleidung"},
  // Zuhause
  {de:"Haus",      dePl:"Häuser",      gr:"σπίτι",      grPl:"σπίτια",      pr:"spi-ti",        prPl:"spi-tia",       emoji:"🏠", cat:"zuhause"},
  {de:"Tür",       dePl:"Türen",       gr:"πόρτα",      grPl:"πόρτες",      pr:"por-ta",        prPl:"por-tes",       emoji:"🚪", cat:"zuhause"},
  {de:"Fenster",   dePl:"Fenster",     gr:"παράθυρο",   grPl:"παράθυρα",    pr:"pa-ra-thi-ro",  prPl:"pa-ra-thi-ra",  emoji:"🪟", cat:"zuhause"},
  {de:"Stuhl",     dePl:"Stühle",      gr:"καρέκλα",    grPl:"καρέκλες",    pr:"ka-re-kla",     prPl:"ka-re-kles",    emoji:"🪑", cat:"zuhause"},
  {de:"Tisch",     dePl:"Tische",      gr:"τραπέζι",    grPl:"τραπέζια",    pr:"tra-pe-zi",     prPl:"tra-pe-zia",    emoji:"🪵", cat:"zuhause"},
  {de:"Bett",      dePl:"Betten",      gr:"κρεβάτι",    grPl:"κρεβάτια",    pr:"kre-va-ti",     prPl:"kre-va-tia",    emoji:"🛏️", cat:"zuhause"},
  // Natur
  {de:"Baum",      dePl:"Bäume",       gr:"δέντρο",     grPl:"δέντρα",      pr:"den-dro",       prPl:"den-dra",       emoji:"🌳", cat:"natur"},
  {de:"Blume",     dePl:"Blumen",      gr:"λουλούδι",   grPl:"λουλούδια",   pr:"lu-lu-dhi",     prPl:"lu-lu-dhia",    emoji:"🌸", cat:"natur"},
  {de:"Berg",      dePl:"Berge",       gr:"βουνό",      grPl:"βουνά",       pr:"vu-no",         prPl:"vu-na",         emoji:"⛰️", cat:"natur"},
  {de:"Wolke",     dePl:"Wolken",      gr:"σύννεφο",    grPl:"σύννεφα",     pr:"si-ne-fo",      prPl:"si-ne-fa",      emoji:"☁️", cat:"natur"},
  {de:"Stern",     dePl:"Sterne",      gr:"αστέρι",     grPl:"αστέρια",     pr:"as-te-ri",      prPl:"as-te-ria",     emoji:"⭐", cat:"natur"},
  {de:"Welle",     dePl:"Wellen",      gr:"κύμα",       grPl:"κύματα",      pr:"ki-ma",         prPl:"ki-ma-ta",      emoji:"🌊", cat:"natur"},
  // Schule
  {de:"Buch",      dePl:"Bücher",      gr:"βιβλίο",     grPl:"βιβλία",      pr:"vi-vli-o",      prPl:"vi-vli-a",      emoji:"📚", cat:"schule"},
  {de:"Stift",     dePl:"Stifte",      gr:"μολύβι",     grPl:"μολύβια",     pr:"mo-li-vi",      prPl:"mo-li-via",     emoji:"✏️", cat:"schule"},
  {de:"Schüler",   dePl:"Schüler",     gr:"μαθητής",    grPl:"μαθητές",     pr:"ma-thi-tis",    prPl:"ma-thi-tes",    emoji:"👨‍🎓", cat:"schule"},
  {de:"Lehrer",    dePl:"Lehrer",      gr:"δάσκαλος",   grPl:"δάσκαλοι",    pr:"das-ka-los",    prPl:"das-ka-li",     emoji:"👨‍🏫", cat:"schule"},
  // Verkehr
  {de:"Auto",      dePl:"Autos",       gr:"αυτοκίνητο", grPl:"αυτοκίνητα",  pr:"af-to-ki-ni-to",prPl:"af-to-ki-ni-ta",emoji:"🚗", cat:"verkehr"},
  {de:"Bus",       dePl:"Busse",       gr:"λεωφορείο",  grPl:"λεωφορεία",   pr:"le-o-fo-ri-o",  prPl:"le-o-fo-ri-a",  emoji:"🚌", cat:"verkehr"},
  {de:"Zug",       dePl:"Züge",        gr:"τρένο",      grPl:"τρένα",       pr:"tre-no",        prPl:"tre-na",        emoji:"🚆", cat:"verkehr"},
  {de:"Schiff",    dePl:"Schiffe",     gr:"πλοίο",      grPl:"πλοία",       pr:"pli-o",         prPl:"pli-a",         emoji:"🚢", cat:"verkehr"},
];

// Verben: alle Personen
var verben = [
  {
    de:"gehen", gr:"πηγαίνω", pr:"pi-ghe-no", emoji:"🚶", cat:"verben",
    formen:[
      {person:"ich",         de:"gehe",    gr:"πηγαίνω",   pr:"pi-ghe-no"},
      {person:"du",          de:"gehst",   gr:"πηγαίνεις", pr:"pi-ghe-nis"},
      {person:"er/sie/es",   de:"geht",    gr:"πηγαίνει",  pr:"pi-ghe-ni"},
      {person:"wir",         de:"gehen",   gr:"πηγαίνουμε",pr:"pi-ghe-nu-me"},
      {person:"ihr",         de:"geht",    gr:"πηγαίνετε", pr:"pi-ghe-ne-te"},
      {person:"sie",         de:"gehen",   gr:"πηγαίνουν", pr:"pi-ghe-nun"}
    ]
  },
  {
    de:"essen", gr:"τρώω", pr:"tro-o", emoji:"🍽️", cat:"verben",
    formen:[
      {person:"ich",         de:"esse",    gr:"τρώω",      pr:"tro-o"},
      {person:"du",          de:"isst",    gr:"τρως",      pr:"tros"},
      {person:"er/sie/es",   de:"isst",    gr:"τρώει",     pr:"tro-i"},
      {person:"wir",         de:"essen",   gr:"τρώμε",     pr:"tro-me"},
      {person:"ihr",         de:"esst",    gr:"τρώτε",     pr:"tro-te"},
      {person:"sie",         de:"essen",   gr:"τρώνε",     pr:"tro-ne"}
    ]
  },
  {
    de:"trinken", gr:"πίνω", pr:"pi-no", emoji:"🥤", cat:"verben",
    formen:[
      {person:"ich",         de:"trinke",   gr:"πίνω",     pr:"pi-no"},
      {person:"du",          de:"trinkst",  gr:"πίνεις",   pr:"pi-nis"},
      {person:"er/sie/es",   de:"trinkt",   gr:"πίνει",    pr:"pi-ni"},
      {person:"wir",         de:"trinken",  gr:"πίνουμε",  pr:"pi-nu-me"},
      {person:"ihr",         de:"trinkt",   gr:"πίνετε",   pr:"pi-ne-te"},
      {person:"sie",         de:"trinken",  gr:"πίνουν",   pr:"pi-nun"}
    ]
  },
  {
    de:"sehen", gr:"βλέπω", pr:"vle-po", emoji:"👁️", cat:"verben",
    formen:[
      {person:"ich",         de:"sehe",    gr:"βλέπω",     pr:"vle-po"},
      {person:"du",          de:"siehst",  gr:"βλέπεις",   pr:"vle-pis"},
      {person:"er/sie/es",   de:"sieht",   gr:"βλέπει",    pr:"vle-pi"},
      {person:"wir",         de:"sehen",   gr:"βλέπουμε",  pr:"vle-pu-me"},
      {person:"ihr",         de:"seht",    gr:"βλέπετε",   pr:"vle-pe-te"},
      {person:"sie",         de:"sehen",   gr:"βλέπουν",   pr:"vle-pun"}
    ]
  },
  {
    de:"haben", gr:"έχω", pr:"e-cho", emoji:"✋", cat:"verben",
    formen:[
      {person:"ich",         de:"habe",    gr:"έχω",       pr:"e-cho"},
      {person:"du",          de:"hast",    gr:"έχεις",     pr:"e-chis"},
      {person:"er/sie/es",   de:"hat",     gr:"έχει",      pr:"e-chi"},
      {person:"wir",         de:"haben",   gr:"έχουμε",    pr:"e-chu-me"},
      {person:"ihr",         de:"habt",    gr:"έχετε",     pr:"e-che-te"},
      {person:"sie",         de:"haben",   gr:"έχουν",     pr:"e-chun"}
    ]
  },
  {
    de:"sein", gr:"είμαι", pr:"i-me", emoji:"🧍", cat:"verben",
    formen:[
      {person:"ich",         de:"bin",     gr:"είμαι",     pr:"i-me"},
      {person:"du",          de:"bist",    gr:"είσαι",     pr:"i-se"},
      {person:"er/sie/es",   de:"ist",     gr:"είναι",     pr:"i-ne"},
      {person:"wir",         de:"sind",    gr:"είμαστε",   pr:"i-mas-te"},
      {person:"ihr",         de:"seid",    gr:"είστε",     pr:"is-te"},
      {person:"sie",         de:"sind",    gr:"είναι",     pr:"i-ne"}
    ]
  },
  {
    de:"kommen", gr:"έρχομαι", pr:"er-cho-me", emoji:"🚶", cat:"verben",
    formen:[
      {person:"ich",         de:"komme",   gr:"έρχομαι",   pr:"er-cho-me"},
      {person:"du",          de:"kommst",  gr:"έρχεσαι",   pr:"er-che-se"},
      {person:"er/sie/es",   de:"kommt",   gr:"έρχεται",   pr:"er-che-te"},
      {person:"wir",         de:"kommen",  gr:"ερχόμαστε", pr:"er-cho-mas-te"},
      {person:"ihr",         de:"kommt",   gr:"έρχεστε",   pr:"er-ches-te"},
      {person:"sie",         de:"kommen",  gr:"έρχονται",  pr:"er-chon-de"}
    ]
  },
  {
    de:"spielen", gr:"παίζω", pr:"pe-zo", emoji:"⚽", cat:"verben",
    formen:[
      {person:"ich",         de:"spiele",  gr:"παίζω",     pr:"pe-zo"},
      {person:"du",          de:"spielst", gr:"παίζεις",   pr:"pe-zis"},
      {person:"er/sie/es",   de:"spielt",  gr:"παίζει",    pr:"pe-zi"},
      {person:"wir",         de:"spielen", gr:"παίζουμε",  pr:"pe-zu-me"},
      {person:"ihr",         de:"spielt",  gr:"παίζετε",   pr:"pe-ze-te"},
      {person:"sie",         de:"spielen", gr:"παίζουν",   pr:"pe-zun"}
    ]
  },
  {
    de:"lernen", gr:"μαθαίνω", pr:"ma-the-no", emoji:"📚", cat:"verben",
    formen:[
      {person:"ich",         de:"lerne",   gr:"μαθαίνω",   pr:"ma-the-no"},
      {person:"du",          de:"lernst",  gr:"μαθαίνεις", pr:"ma-the-nis"},
      {person:"er/sie/es",   de:"lernt",   gr:"μαθαίνει",  pr:"ma-the-ni"},
      {person:"wir",         de:"lernen",  gr:"μαθαίνουμε",pr:"ma-the-nu-me"},
      {person:"ihr",         de:"lernt",   gr:"μαθαίνετε", pr:"ma-the-ne-te"},
      {person:"sie",         de:"lernen",  gr:"μαθαίνουν", pr:"ma-the-nun"}
    ]
  },
  {
    de:"schlafen", gr:"κοιμάμαι", pr:"ki-ma-me", emoji:"😴", cat:"verben",
    formen:[
      {person:"ich",         de:"schlafe", gr:"κοιμάμαι",  pr:"ki-ma-me"},
      {person:"du",          de:"schläfst",gr:"κοιμάσαι",  pr:"ki-ma-se"},
      {person:"er/sie/es",   de:"schläft", gr:"κοιμάται",  pr:"ki-ma-te"},
      {person:"wir",         de:"schlafen",gr:"κοιμόμαστε",pr:"ki-mo-mas-te"},
      {person:"ihr",         de:"schlaft", gr:"κοιμάστε",  pr:"ki-mas-te"},
      {person:"sie",         de:"schlafen",gr:"κοιμούνται",pr:"ki-mun-de"}
    ]
  }
];
