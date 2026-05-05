// ============================================================
//  geschichten.js  –  Geschichten, Gespräche & Lückentexte
//  Hier kannst du neue Inhalte hinzufügen!
// ============================================================

var stories = [
  {
    title: "Die Katze und das Meer",
    emoji: "🐱",
    img: "katze",
    grText: "Μια μικρή γάτα μένει στην Ελλάδα. Κάθε πρωί τρέχει στη θάλασσα. Η θάλασσα είναι μπλε και ζεστή. Η γάτα πίνει νερό από μια βρύση. Είναι πολύ χαρούμενη.",
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
    grText: "Η Μαρία πηγαίνει στην αγορά. Αγοράζει μήλα και ψωμί. Ο πωλητής λέει: Καλημέρα! Η Μαρία απαντά: Ευχαριστώ!",
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
    grText: "Η οικογένεια πηγαίνει στην παραλία. Ο ήλιος λάμπει πολύ. Τα παιδιά χτίζουν κάστρο στην άμμο. Ο μπαμπάς κολυμπάει στο νερό. Η μαμά διαβάζει ένα βιβλίο. Το βράδυ τρώνε παγωτό. Τι ωραία μέρα!",
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
    grText: "Μια κουκουβάγια ζει σε ένα παλιό δέντρο. Τα παιδιά έρχονται κάθε μέρα κοντά της. Μαθαίνουν: φίλος, σχολείο, αγάπη. Η κουκουβάγια λέει: Η μάθηση είναι σαν δώρο!",
    text: [
      {de:"Eine Eule lebt in einem alten "},{de:"Baum",gr:"δέντρο",pr:"den-dro",mark:true},
      {de:". Die Kinder kommen jeden Tag zu ihr. Sie lernen: "},{de:"Freund",gr:"φίλος",pr:"fi-los",mark:true},
      {de:", "},{de:"Schule",gr:"σχολείο",pr:"scho-li-o",mark:true},
      {de:", "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},
      {de:". Die Eule sagt: Lernen ist wie ein "},{de:"Geschenk",gr:"δώρο",pr:"do-ro",mark:true},{de:"!"}
    ]
  },
  {
    title: "Perseus und Medusa",
    emoji: "⚔️",
    img: "story-hero_perseus_fighting_against_medusa",
    grText: "Ο Περσέας είναι ένας γενναίος ήρωας. Ζει στην Ελλάδα. Μια μέρα παίρνει το σπαθί και την ασπίδα του και φεύγει. Πρέπει να νικήσει τη φοβερή Μέδουσα. Η Μέδουσα έχει φίδια στα μαλλιά της και κακά μάτια. Ο Περσέας είναι πολύ γενναίος. Κοιτάζει στην ασπίδα του σαν καθρέφτη και νικά τη Μέδουσα. Είναι νικητής!",
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
  },
  {
    title: "Theseus und der Minotaurus",
    emoji: "🐂",
    img: "story-hero_theseus_fighting_against_minotaur",
    grText: "Ο Θησέας είναι ένας γενναίος ήρωας. Πηγαίνει σε ένα μεγάλο λαβύρινθο. Μέσα στον λαβύρινθο ζει ο Μινώταυρος. Ο Μινώταυρος είναι μισός άνθρωπος και μισός ταύρος. Ο Θησέας έχει ένα σπαθί και μια ασπίδα. Είναι πολύ γενναίος. Νικά τον Μινώταυρο και βρίσκει τον δρόμο έξω με ένα κουβάρι νήμα. Όλοι τον αγαπούν!",
    text: [
      {de:"Theseus ist ein tapferer "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},
      {de:". Er betritt ein grosses "},{de:"Labyrinth",gr:"λαβύρινθος",pr:"la-vi-rin-thos",mark:true},
      {de:". Im Labyrinth lebt der "},{de:"Minotaurus",gr:"Μινώταυρος",pr:"Mi-no-tav-ros",mark:true},
      {de:". Der Minotaurus ist halb "},{de:"Mensch",gr:"άνθρωπος",pr:"an-thro-pos",mark:true},
      {de:" und halb "},{de:"Stier",gr:"ταύρος",pr:"tav-ros",mark:true},
      {de:". Theseus hat ein "},{de:"Schwert",gr:"σπαθί",pr:"spa-thi",mark:true},
      {de:" und ist sehr "},{de:"mutig",gr:"γενναίος",pr:"ghen-ne-os",mark:true},
      {de:". Er besiegt den Minotaurus und findet den "},{de:"Weg",gr:"δρόμος",pr:"dhro-mos",mark:true},
      {de:" hinaus mit einem "},{de:"Faden",gr:"νήμα",pr:"ni-ma",mark:true},{de:". Alle lieben ihn!"}
    ]
  },
  {
    title: "Omas Trachanas",
    emoji: "🍲",
    img: "story-old_greek_grandmother_cooking_greek_trachanas",
    grText: "Η γιαγιά μαγειρεύει τραχανά στην κουζίνα. Τα εγγόνια της έρχονται και την βοηθούν. Ο τραχανάς είναι μια παραδοσιακή ελληνική σούπα. Μυρίζει πολύ ωραία! Η γιαγιά ανακατεύει με μια μεγάλη κουτάλα. Τα παιδιά κοιτάνε και χαμογελούν. Η κουζίνα είναι ζεστή και η οικογένεια είναι μαζί. Αυτό είναι αγάπη!",
    text: [
      {de:"Die "},{de:"Oma",gr:"γιαγιά",pr:"ja-ja",mark:true},
      {de:" kocht "},{de:"Trachanas",gr:"τραχανάς",pr:"tra-cha-nas",mark:true},
      {de:" in der "},{de:"Küche",gr:"κουζίνα",pr:"ku-zi-na",mark:true},
      {de:". Die "},{de:"Enkelkinder",gr:"εγγόνια",pr:"en-go-nia",mark:true},
      {de:" kommen und helfen ihr. Trachanas ist eine traditionelle griechische "},{de:"Suppe",gr:"σούπα",pr:"su-pa",mark:true},
      {de:". Es riecht sehr "},{de:"lecker",gr:"νόστιμο",pr:"nos-ti-mo",mark:true},
      {de:"! Die Oma rührt mit einem grossen "},{de:"Löffel",gr:"κουτάλι",pr:"ku-ta-li",mark:true},
      {de:". Die Kinder schauen und "},{de:"lächeln",gr:"χαμογελούν",pr:"cha-mo-ghe-lun",mark:true},
      {de:". Die Küche ist warm und die "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},
      {de:" ist zusammen. Das ist "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die neun Musen",
    emoji: "🎭",
    img: "story-9_muses_greek_mythology",
    grText: "Στον Όλυμπο ζουν εννέα Μούσες. Είναι οι θεές της τέχνης και της μουσικής. Η Καλλιόπη αγαπά την ποίηση και εμπνέει τους ποιητές. Η Κλειώ γράφει την ιστορία και θυμάται τα πάντα. Η Μελπομένη αγαπά το θέατρο και φέρνει δάκρυα. Η Θάλεια κάνει τους ανθρώπους να γελούν με τις κωμωδίες. Η Ουρανία κοιτά τα άστρα και γνωρίζει τον ουρανό. Η Ευτέρπη παίζει μουσική με τον αυλό της. Η Ερατώ τραγουδά για την αγάπη και την ομορφιά. Η Τερψιχόρη χορεύει όμορφα και διδάσκει τον χορό. Η Πολύμνια ψέλνει ιερούς ύμνους για τους θεούς. Οι Μούσες εμπνέουν όλους τους ανθρώπους!",
    text: [
      {de:"Auf dem "},{de:"Olymp",gr:"Όλυμπος",pr:"O-lim-pos",mark:true},
      {de:" leben neun "},{de:"Musen",gr:"Μούσες",pr:"Mu-ses",mark:true},
      {de:". Sie sind die Göttinnen der "},{de:"Kunst",gr:"τέχνη",pr:"tech-ni",mark:true},
      {de:" und der "},{de:"Musik",gr:"μουσική",pr:"mu-si-ki",mark:true},
      {de:". Kalliope liebt die "},{de:"Dichtung",gr:"ποίηση",pr:"pi-i-si",mark:true},
      {de:" und inspiriert alle Dichter."},
      {de:" Klio schreibt die "},{de:"Geschichte",gr:"ιστορία",pr:"is-to-ri-a",mark:true},
      {de:" und erinnert sich an alles."},
      {de:" Melpomene liebt das "},{de:"Theater",gr:"θέατρο",pr:"the-a-tro",mark:true},
      {de:" und bringt Tränen."},
      {de:" Thaleia bringt die Menschen zum "},{de:"Lachen",gr:"γέλιο",pr:"ghe-li-o",mark:true},
      {de:" mit Komödien."},
      {de:" Urania schaut zu den "},{de:"Sternen",gr:"άστρα",pr:"a-stra",mark:true},
      {de:" und kennt den Himmel."},
      {de:" Euterpe spielt Musik mit ihrer "},{de:"Flöte",gr:"αυλός",pr:"av-los",mark:true},
      {de:"."},
      {de:" Erato singt über die "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},
      {de:" und Schönheit."},
      {de:" Terpsichore "},{de:"tanzt",gr:"χορεύει",pr:"cho-re-vi",mark:true},
      {de:" wunderschön und lehrt den Tanz."},
      {de:" Polyhymnia singt heilige "},{de:"Hymnen",gr:"ύμνοι",pr:"im-ni",mark:true},
      {de:" für die Götter."},
      {de:" Die Musen "},{de:"inspirieren",gr:"εμπνέουν",pr:"em-pne-un",mark:true},
      {de:" alle Menschen!"}
    ]
  },
  {
    title: "Der Hirte und seine Schafe",
    emoji: "🐑",
    img: "story-greek_shepherd_with_his_sheeps_grazin",
    grText: "Ο Γιώργης είναι ένας γέρος βοσκός. Κάθε πρωί πηγαίνει στο βουνό με τα πρόβατά του. Τα πρόβατα τρώνε φρέσκο χορτάρι. Ο ήλιος λάμπει και ο ουρανός είναι γαλάζιος. Στην κοιλάδα βλέπει μια μικρή εκκλησία και ένα χωριό. Υπάρχουν ελιές και πολύχρωμα λουλούδια παντού. Ο Γιώργης τραγουδά ένα παλιό τραγούδι. Τα πρόβατα τον ακούνε και είναι ήρεμα. Στο τέλος της μέρας γυρνούν όλοι σπίτι μαζί.",
    text: [
      {de:"Giorgis ist ein alter "},{de:"Hirte",gr:"βοσκός",pr:"vos-kos",mark:true},
      {de:". Jeden Morgen geht er auf den "},{de:"Berg",gr:"βουνό",pr:"vu-no",mark:true},
      {de:" mit seinen "},{de:"Schafen",gr:"πρόβατα",pr:"pro-va-ta",mark:true},
      {de:". Die Schafe fressen frisches "},{de:"Gras",gr:"χορτάρι",pr:"chor-ta-ri",mark:true},
      {de:". Die "},{de:"Sonne",gr:"ήλιος",pr:"i-li-os",mark:true},
      {de:" scheint und der Himmel ist blau. Im Tal sieht er eine kleine "},{de:"Kirche",gr:"εκκλησία",pr:"e-kli-si-a",mark:true},
      {de:" und ein "},{de:"Dorf",gr:"χωριό",pr:"cho-rio",mark:true},
      {de:". Es gibt "},{de:"Olivenbäume",gr:"ελιές",pr:"e-lies",mark:true},
      {de:" und bunte "},{de:"Blumen",gr:"λουλούδια",pr:"lu-lu-dhia",mark:true},
      {de:" überall. Giorgis singt ein altes "},{de:"Lied",gr:"τραγούδι",pr:"tra-gu-dhi",mark:true},
      {de:". Die Schafe hören ihm zu und sind "},{de:"ruhig",gr:"ήρεμα",pr:"i-re-ma",mark:true},
      {de:". Am Ende des Tages gehen alle zusammen nach "},{de:"Hause",gr:"σπίτι",pr:"spi-ti",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die zwölf Götter des Olymp",
    emoji: "⚡",
    img: "story-12_greek_gods_with_names_greek_mythology",
    grText: "Στον Όλυμπο ζουν οι δώδεκα θεοί. Ο Δίας είναι ο βασιλιάς των θεών και κρατά τον κεραυνό. Η Ήρα είναι η βασίλισσα και προστατεύει την οικογένεια. Ο Ποσειδών κυβερνά τη θάλασσα με την τρίαινά του. Η Δήμητρα φροντίζει τη γη και τα λουλούδια. Η Αθηνά είναι η θεά της σοφίας και της δικαιοσύνης. Ο Απόλλων είναι ο θεός του ήλιου και της μουσικής. Η Άρτεμις κυνηγά στο δάσος και αγαπά τα ζώα. Ο Άρης είναι ο θεός του πολέμου και είναι δυνατός. Η Αφροδίτη είναι η θεά της αγάπης και της ομορφιάς. Ο Ήφαιστος φτιάχνει όπλα στη φωτιά του. Ο Ερμής είναι ο αγγελιαφόρος των θεών και πετά γρήγορα. Η Εστία φυλάει τη φλόγα του σπιτιού. Όλοι μαζί προστατεύουν τους ανθρώπους!",
    text: [
      {de:"Auf dem "},{de:"Olymp",gr:"Όλυμπος",pr:"O-lim-pos",mark:true},
      {de:" leben die zwölf "},{de:"Götter",gr:"θεοί",pr:"the-i",mark:true},
      {de:". "},{de:"Zeus",gr:"Δίας",pr:"Dhi-as",mark:true},
      {de:" ist der "},{de:"König",gr:"βασιλιάς",pr:"va-si-lias",mark:true},
      {de:" der Götter und hält den Blitz. "},{de:"Hera",gr:"Ήρα",pr:"I-ra",mark:true},
      {de:" ist die Königin und beschützt die Familie. "},{de:"Poseidon",gr:"Ποσειδών",pr:"Po-si-dhon",mark:true},
      {de:" regiert das "},{de:"Meer",gr:"θάλασσα",pr:"tha-la-sa",mark:true},
      {de:" mit seinem Dreizack. "},{de:"Demeter",gr:"Δήμητρα",pr:"Dhi-mi-tra",mark:true},
      {de:" kümmert sich um die "},{de:"Erde",gr:"γη",pr:"ji",mark:true},
      {de:" und die Blumen. "},{de:"Athena",gr:"Αθηνά",pr:"A-thi-na",mark:true},
      {de:" ist die Göttin der "},{de:"Weisheit",gr:"σοφία",pr:"so-fi-a",mark:true},
      {de:". "},{de:"Apollon",gr:"Απόλλων",pr:"A-po-lon",mark:true},
      {de:" ist der Gott der "},{de:"Sonne",gr:"ήλιος",pr:"i-li-os",mark:true},
      {de:" und der Musik. "},{de:"Artemis",gr:"Άρτεμις",pr:"Ar-te-mis",mark:true},
      {de:" jagt im "},{de:"Wald",gr:"δάσος",pr:"dha-sos",mark:true},
      {de:" und liebt die Tiere. "},{de:"Ares",gr:"Άρης",pr:"A-ris",mark:true},
      {de:" ist der Gott des "},{de:"Krieges",gr:"πόλεμος",pr:"po-le-mos",mark:true},
      {de:". "},{de:"Aphrodite",gr:"Αφροδίτη",pr:"A-fro-dhi-ti",mark:true},
      {de:" ist die Göttin der "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},
      {de:". "},{de:"Hephaistos",gr:"Ήφαιστος",pr:"I-fes-tos",mark:true},
      {de:" schmiedet "},{de:"Waffen",gr:"όπλα",pr:"o-pla",mark:true},
      {de:" im Feuer. "},{de:"Hermes",gr:"Ερμής",pr:"Er-mis",mark:true},
      {de:" ist der schnelle "},{de:"Bote",gr:"αγγελιαφόρος",pr:"an-ge-lia-fo-ros",mark:true},
      {de:" der Götter. "},{de:"Hestia",gr:"Εστία",pr:"Es-ti-a",mark:true},
      {de:" hütet die "},{de:"Flamme",gr:"φλόγα",pr:"flo-gha",mark:true},
      {de:" des Hauses. Alle zusammen beschützen die Menschen!"}
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
