// ============================================================
//  alphabet.js  –  Griechisches Alphabet
//  Hier kannst du Beispielwörter ergänzen oder ändern!
// ============================================================

var alphabet = [
  {
    name: "Alpha", nameGr: "Άλφα", gross: "Α", klein: "α", img: "alpha",
    aussprache: "a", deutsch: "wie deutsches A",
    beispiele: [
      {gr:"αγάπη",    pr:"a-ga-pi",    de:"Liebe"},
      {gr:"αδελφός",  pr:"a-del-fos",  de:"Bruder"},
      {gr:"αέρας",    pr:"a-e-ras",    de:"Wind / Luft"},
      {gr:"αλεπού",   pr:"a-le-pu",    de:"Fuchs"},
      {gr:"άνθρωπος", pr:"an-thro-pos",de:"Mensch"}
    ]
  },
  {
    name: "Beta", nameGr: "Βήτα", gross: "Β", klein: "β", img: "beta",
    aussprache: "w", deutsch: "wie deutsches W",
    beispiele: [
      {gr:"βιβλίο",   pr:"wi-wli-o",   de:"Buch"},
      {gr:"βουνό",    pr:"wu-no",      de:"Berg"},
      {gr:"βροχή",    pr:"wro-chi",    de:"Regen"},
      {gr:"βάτραχος", pr:"wa-tra-chos",de:"Frosch"},
      {gr:"βασιλιάς", pr:"wa-si-lias", de:"König"}
    ]
  },
  {
    name: "Gamma", nameGr: "Γάμμα", gross: "Γ", klein: "γ", img: "gamma",
    aussprache: "gh / j", deutsch: "wie weiches G oder J",
    beispiele: [
      {gr:"γάτα",     pr:"gha-ta",     de:"Katze"},
      {gr:"γάλα",     pr:"gha-la",     de:"Milch"},
      {gr:"γιαγιά",   pr:"ja-ja",      de:"Oma"},
      {gr:"γη",       pr:"ji",         de:"Erde"},
      {gr:"γράμμα",   pr:"ghra-ma",    de:"Brief / Buchstabe"}
    ]
  },
  {
    name: "Delta", nameGr: "Δέλτα", gross: "Δ", klein: "δ", img: "delta",
    aussprache: "dh", deutsch: "wie englisches TH in 'the'",
    beispiele: [
      {gr:"δέντρο",   pr:"dhen-dro",   de:"Baum"},
      {gr:"δάσκαλος", pr:"dhas-ka-los",de:"Lehrer"},
      {gr:"δρόμος",   pr:"dhro-mos",   de:"Straße"},
      {gr:"δάχτυλο",  pr:"dhach-ti-lo",de:"Finger"},
      {gr:"δελφίνι",  pr:"dhel-fi-ni", de:"Delfin"}
    ]
  },
  {
    name: "Epsilon", nameGr: "Έψιλον", gross: "Ε", klein: "ε", img: "epsilon",
    aussprache: "e", deutsch: "wie deutsches E",
    beispiele: [
      {gr:"εκκλησία", pr:"e-kli-si-a", de:"Kirche"},
      {gr:"ελιά",     pr:"e-lia",      de:"Olive"},
      {gr:"εστιατόριο",pr:"es-ti-a-to-ri-o",de:"Restaurant"},
      {gr:"εικόνα",   pr:"e-ko-na",    de:"Bild"},
      {gr:"εφημερίδα",pr:"e-fi-me-ri-dha",de:"Zeitung"}
    ]
  },
  {
    name: "Zeta", nameGr: "Ζήτα", gross: "Ζ", klein: "ζ", img: "zeta",
    aussprache: "s (stimmhaft)", deutsch: "wie deutsches S in 'Sonne'",
    beispiele: [
      {gr:"ζώο",      pr:"zo-o",       de:"Tier"},
      {gr:"ζάχαρη",   pr:"za-cha-ri",  de:"Zucker"},
      {gr:"ζεστός",   pr:"zes-tos",    de:"warm / heiß"},
      {gr:"ζωή",      pr:"zo-i",       de:"Leben"},
      {gr:"ζυμαρικά", pr:"zi-ma-ri-ka",de:"Nudeln / Pasta"}
    ]
  },
  {
    name: "Eta", nameGr: "Ήτα", gross: "Η", klein: "η", img: "eta",
    aussprache: "i", deutsch: "wie deutsches I",
    beispiele: [
      {gr:"ήλιος",    pr:"i-li-os",    de:"Sonne"},
      {gr:"ήρωας",    pr:"i-ro-as",    de:"Held"},
      {gr:"ηφαίστειο",pr:"i-fes-ti-o", de:"Vulkan"},
      {gr:"ημέρα",    pr:"i-me-ra",    de:"Tag"},
      {gr:"ήρεμος",   pr:"i-re-mos",   de:"ruhig"}
    ]
  },
  {
    name: "Theta", nameGr: "Θήτα", gross: "Θ", klein: "θ", img: "theta",
    aussprache: "th", deutsch: "wie englisches TH in 'think'",
    beispiele: [
      {gr:"θάλασσα",  pr:"tha-la-sa",  de:"Meer"},
      {gr:"θερμοκρασία",pr:"ther-mo-kra-si-a",de:"Temperatur"},
      {gr:"θέατρο",   pr:"the-a-tro",  de:"Theater"},
      {gr:"θυμάρι",   pr:"thi-ma-ri",  de:"Thymian"},
      {gr:"θύρα",     pr:"thi-ra",     de:"Tür / Eingang"}
    ]
  },
  {
    name: "Iota", nameGr: "Ιώτα", gross: "Ι", klein: "ι", img: "iota",
    aussprache: "i", deutsch: "wie deutsches I",
    beispiele: [
      {gr:"ιστορία",  pr:"is-to-ri-a", de:"Geschichte"},
      {gr:"ιδέα",     pr:"i-dhe-a",    de:"Idee"},
      {gr:"ιατρός",   pr:"i-a-tros",   de:"Arzt"},
      {gr:"ίππος",    pr:"i-pos",      de:"Pferd (formal)"},
      {gr:"ιχθύς",    pr:"ich-this",   de:"Fisch (formal)"}
    ]
  },
  {
    name: "Kappa", nameGr: "Κάππα", gross: "Κ", klein: "κ", img: "kappa",
    aussprache: "k", deutsch: "wie deutsches K",
    beispiele: [
      {gr:"καλημέρα", pr:"ka-li-me-ra",de:"Guten Morgen"},
      {gr:"κατσίκα",  pr:"kat-si-ka",  de:"Ziege"},
      {gr:"κήπος",    pr:"ki-pos",     de:"Garten"},
      {gr:"κύκλος",   pr:"ki-klos",    de:"Kreis"},
      {gr:"καρδιά",   pr:"kar-dhia",   de:"Herz"}
    ]
  },
  {
    name: "Lambda", nameGr: "Λάμδα", gross: "Λ", klein: "λ", img: "lambda",
    aussprache: "l", deutsch: "wie deutsches L",
    beispiele: [
      {gr:"λεμόνι",   pr:"le-mo-ni",   de:"Zitrone"},
      {gr:"λουλούδι", pr:"lu-lu-dhi",  de:"Blume"},
      {gr:"λύκος",    pr:"li-kos",     de:"Wolf"},
      {gr:"λίμνη",    pr:"lim-ni",     de:"See"},
      {gr:"λάδι",     pr:"la-dhi",     de:"Öl"}
    ]
  },
  {
    name: "My", nameGr: "Μι", gross: "Μ", klein: "μ", img: "mu",
    aussprache: "m", deutsch: "wie deutsches M",
    beispiele: [
      {gr:"μαμά",     pr:"ma-ma",      de:"Mama"},
      {gr:"μήλο",     pr:"mi-lo",      de:"Apfel"},
      {gr:"μύτη",     pr:"mi-ti",      de:"Nase"},
      {gr:"μουσική",  pr:"mu-si-ki",   de:"Musik"},
      {gr:"μέλι",     pr:"me-li",      de:"Honig"}
    ]
  },
  {
    name: "Ny", nameGr: "Νι", gross: "Ν", klein: "ν", img: "nu",
    aussprache: "n", deutsch: "wie deutsches N",
    beispiele: [
      {gr:"νερό",     pr:"ne-ro",      de:"Wasser"},
      {gr:"νύχτα",    pr:"nich-ta",    de:"Nacht"},
      {gr:"νησί",     pr:"ni-si",      de:"Insel"},
      {gr:"νόμος",    pr:"no-mos",     de:"Gesetz"},
      {gr:"ναός",     pr:"na-os",      de:"Tempel"}
    ]
  },
  {
    name: "Xi", nameGr: "Ξι", gross: "Ξ", klein: "ξ", img: "xi",
    aussprache: "ks", deutsch: "wie deutsches X",
    beispiele: [
      {gr:"ξύλο",     pr:"ksi-lo",     de:"Holz"},
      {gr:"ξενοδοχείο",pr:"kse-no-dho-chi-o",de:"Hotel"},
      {gr:"ξαδελφός", pr:"ksa-dhel-fos",de:"Cousin"},
      {gr:"ξέρω",     pr:"kse-ro",     de:"ich weiß"},
      {gr:"ξεκινώ",   pr:"kse-ki-no",  de:"ich beginne"}
    ]
  },
  {
    name: "Omikron", nameGr: "Όμικρον", gross: "Ο", klein: "ο", img: "omicron",
    aussprache: "o", deutsch: "wie deutsches O",
    beispiele: [
      {gr:"οικογένεια",pr:"i-ko-ghe-ni-a",de:"Familie"},
      {gr:"όνομα",    pr:"o-no-ma",    de:"Name"},
      {gr:"ουρανός",  pr:"u-ra-nos",   de:"Himmel"},
      {gr:"οδός",     pr:"o-dhos",     de:"Straße (formal)"},
      {gr:"όρος",     pr:"o-ros",      de:"Berg (formal)"}
    ]
  },
  {
    name: "Pi", nameGr: "Πι", gross: "Π", klein: "π", img: "pi",
    aussprache: "p", deutsch: "wie deutsches P",
    beispiele: [
      {gr:"παιδί",    pr:"pe-dhi",     de:"Kind"},
      {gr:"πόρτα",    pr:"por-ta",     de:"Tür"},
      {gr:"ποδήλατο", pr:"po-dhi-la-to",de:"Fahrrad"},
      {gr:"πλοίο",    pr:"pli-o",      de:"Schiff"},
      {gr:"πουλί",    pr:"pu-li",      de:"Vogel"}
    ]
  },
  {
    name: "Rho", nameGr: "Ρο", gross: "Ρ", klein: "ρ", img: "rho",
    aussprache: "r", deutsch: "wie deutsches R",
    beispiele: [
      {gr:"ρόδο",     pr:"ro-dho",     de:"Rose"},
      {gr:"ρολόι",    pr:"ro-lo-i",    de:"Uhr"},
      {gr:"ρέμα",     pr:"re-ma",      de:"Bach"},
      {gr:"ρίζα",     pr:"ri-za",      de:"Wurzel"},
      {gr:"ράφι",     pr:"ra-fi",      de:"Regal"}
    ]
  },
  {
    name: "Sigma", nameGr: "Σίγμα", gross: "Σ", klein: "σ/ς", img: "sigma",
    aussprache: "s", deutsch: "wie deutsches S (scharf)",
    beispiele: [
      {gr:"σπίτι",    pr:"spi-ti",     de:"Haus"},
      {gr:"σκύλος",   pr:"ski-los",    de:"Hund"},
      {gr:"σχολείο",  pr:"scho-li-o",  de:"Schule"},
      {gr:"σελήνη",   pr:"se-li-ni",   de:"Mond (formal)"},
      {gr:"σταφύλι",  pr:"sta-fi-li",  de:"Weintraube"}
    ]
  },
  {
    name: "Tau", nameGr: "Ταυ", gross: "Τ", klein: "τ", img: "tau",
    aussprache: "t", deutsch: "wie deutsches T",
    beispiele: [
      {gr:"τραπέζι",  pr:"tra-pe-zi",  de:"Tisch"},
      {gr:"τηλέφωνο", pr:"ti-le-fo-no",de:"Telefon"},
      {gr:"τυρί",     pr:"ti-ri",      de:"Käse"},
      {gr:"τρένο",    pr:"tre-no",     de:"Zug"},
      {gr:"τάξη",     pr:"tak-si",     de:"Klasse"}
    ]
  },
  {
    name: "Ypsilon", nameGr: "Ύψιλον", gross: "Υ", klein: "υ", img: "upsilon",
    aussprache: "i", deutsch: "wie deutsches I",
    beispiele: [
      {gr:"υπολογιστής",pr:"i-po-lo-ghis-tis",de:"Computer"},
      {gr:"ύπνος",    pr:"ip-nos",     de:"Schlaf"},
      {gr:"υγεία",    pr:"i-ghi-a",    de:"Gesundheit"},
      {gr:"ύδωρ",     pr:"i-dhor",     de:"Wasser (formal)"},
      {gr:"υπόγειο",  pr:"i-po-ghi-o", de:"Keller"}
    ]
  },
  {
    name: "Phi", nameGr: "Φι", gross: "Φ", klein: "φ", img: "phi",
    aussprache: "f", deutsch: "wie deutsches F",
    beispiele: [
      {gr:"φίλος",    pr:"fi-los",     de:"Freund"},
      {gr:"φεγγάρι",  pr:"fen-gha-ri", de:"Mond"},
      {gr:"φωτιά",    pr:"fo-tia",     de:"Feuer"},
      {gr:"φύλλο",    pr:"fi-lo",      de:"Blatt"},
      {gr:"φαγητό",   pr:"fa-ghi-to",  de:"Essen / Mahlzeit"}
    ]
  },
  {
    name: "Chi", nameGr: "Χι", gross: "Χ", klein: "χ", img: "chi",
    aussprache: "ch", deutsch: "wie deutsches CH in 'Bach'",
    beispiele: [
      {gr:"χέρι",     pr:"che-ri",     de:"Hand"},
      {gr:"χιόνι",    pr:"chi-o-ni",   de:"Schnee"},
      {gr:"χρώμα",    pr:"chro-ma",    de:"Farbe"},
      {gr:"χώρα",     pr:"cho-ra",     de:"Land"},
      {gr:"χαρά",     pr:"cha-ra",     de:"Freude"}
    ]
  },
  {
    name: "Psi", nameGr: "Ψι", gross: "Ψ", klein: "ψ", img: "psi",
    aussprache: "ps", deutsch: "wie PS in 'Psyche'",
    beispiele: [
      {gr:"ψάρι",     pr:"psa-ri",     de:"Fisch"},
      {gr:"ψωμί",     pr:"pso-mi",     de:"Brot"},
      {gr:"ψυγείο",   pr:"psi-ghi-o",  de:"Kühlschrank"},
      {gr:"ψηλός",    pr:"psi-los",    de:"groß / hoch"},
      {gr:"ψυχή",     pr:"psi-chi",    de:"Seele"}
    ]
  },
  {
    name: "Omega", nameGr: "Ωμέγα", gross: "Ω", klein: "ω", img: "omega",
    aussprache: "o", deutsch: "wie deutsches O",
    beispiele: [
      {gr:"ώρα",      pr:"o-ra",       de:"Stunde / Uhrzeit"},
      {gr:"ωκεανός",  pr:"o-ke-a-nos", de:"Ozean"},
      {gr:"ώμος",     pr:"o-mos",      de:"Schulter"},
      {gr:"ωραίος",   pr:"o-re-os",    de:"schön"},
      {gr:"ωφέλιμος", pr:"o-fe-li-mos",de:"nützlich"}
    ]
  }
];
