// ============================================================
//  geschichten.js  –  Geschichten, Gespräche & Lückentexte
//  Hier kannst du neue Inhalte hinzufügen!
// ============================================================

var stories = [
  {
    title: "Perseus und Medusa", titleGr: "Περσέας και Μέδουσα",
    emoji: "⚔️",
    img: "story-hero_perseus_fighting_against_medusa",
    grText: "Ο Περσέας είναι ένας γενναίος ήρωας. Ζει στην Ελλάδα. Μια μέρα παίρνει το σπαθί και την ασπίδα του και φεύγει. Πρέπει να νικήσει τη φοβερή Μέδουσα. Η Μέδουσα έχει φίδια στα μαλλιά της και κακά μάτια. Ο Περσέας είναι πολύ γενναίος. Κοιτάζει στην ασπίδα του σαν καθρέφτη και νικά τη Μέδουσα. Είναι νικητής!",
    text: [
      {de:"Perseus ist ein tapferer "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},
      {de:". Er lebt in "},{de:"Griechenland",gr:"Ελλάδα",pr:"E-la-da",mark:true},
      {de:". Eines Tages nimmt er sein "},{de:"Schwert",gr:"σπαθί",pr:"spa-thi",mark:true},
      {de:" und seinen "},{de:"Schild",gr:"ασπίδα",pr:"as-pi-da",mark:true},
      {de:" und macht sich auf den Weg. Er muss die böse Medusa besiegen. Medusa hat Schlangenhaare und böse "},{de:"Augen",gr:"μάτια",pr:"ma-tia",mark:true},
      {de:". Perseus ist sehr "},{de:"mutig",gr:"γενναίος",pr:"ghen-ne-os",mark:true},
      {de:". Er schaut in seinen Schild wie in einen "},{de:"Spiegel",gr:"καθρέφτης",pr:"kath-ref-tis",mark:true},
      {de:" und besiegt Medusa. Er ist ein "},{de:"Sieger",gr:"νικητής",pr:"ni-ki-tis",mark:true},{de:"!"}
    ]
  },
  {
    title: "Theseus und der Minotaurus", titleGr: "Θησέας και Μινώταυρος",
    emoji: "🐂",
    img: "story-hero_theseus_fighting_against_minotaur",
    grText: "Ο Θησέας είναι ένας γενναίος ήρωας. Πηγαίνει σε ένα μεγάλο λαβύρινθο. Μέσα στον λαβύρινθο ζει ο Μινώταυρος. Ο Μινώταυρος είναι μισός άνθρωπος και μισός ταύρος. Ο Θησέας έχει ένα σπαθί και μια ασπίδα. Είναι πολύ γενναίος. Νικά τον Μινώταυρο και βρίσκει τον δρόμο έξω με ένα κουβάρι νήμα. Όλοι τον αγαπούν!",
    text: [
      {de:"Theseus ist ein tapferer "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},
      {de:". Er betritt ein großes "},{de:"Labyrinth",gr:"λαβύρινθος",pr:"la-vi-rin-thos",mark:true},
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
    title: "Omas Trachanas", titleGr: "Ο Τραχανάς της Γιαγιάς",
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
      {de:"! Die Oma rührt mit einem großen "},{de:"Löffel",gr:"κουτάλι",pr:"ku-ta-li",mark:true},
      {de:". Die Kinder schauen und "},{de:"lächeln",gr:"χαμογελούν",pr:"cha-mo-ghe-lun",mark:true},
      {de:". Die Küche ist warm und die "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},
      {de:" ist zusammen. Das ist "},{de:"Liebe",gr:"αγάπη",pr:"a-ga-pi",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die neun Musen", titleGr: "Οι Εννέα Μούσες",
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
    title: "Der Hirte und seine Schafe", titleGr: "Ο Βοσκός και τα Πρόβατά του",
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
    title: "Die zwölf Götter des Olymp", titleGr: "Οι Δώδεκα Θεοί του Ολύμπου",
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
  },
  {
    title: "Herkules und die Hydra", titleGr: "Ο Ηρακλής και η Ύδρα",
    emoji: "🐉",
    img: "story-hero_hercules_fighting_against_lernaea_hydra",
    grText: "Ο Ηρακλής είναι ο πιο δυνατός ήρωας της Ελλάδας. Μια μέρα πρέπει να νικήσει τη Λερναία Ύδρα. Η Ύδρα είναι ένα τεράστιο τέρας με εννέα κεφάλια. Ζει σε ένα βάλτο κοντά στη λίμνη. Ο Ηρακλής πηγαίνει στο βάλτο με το ξίφος του. Κόβει ένα κεφάλι αλλά φυτρώνουν δύο καινούρια! Ο ανιψιός του Ιόλαος τον βοηθά. Μετά από κάθε κόψιμο καίει τη πληγή με φωτιά. Έτσι η Ύδρα δεν μπορεί να μεγαλώσει καινούρια κεφάλια. Τελικά ο Ηρακλής νικά το τέρας. Όλοι τον αγαπούν και τον θαυμάζουν!",
    text: [
      {de:"Herkules ist der stärkste "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},
      {de:" Griechenlands. Eines Tages muss er die Hydra besiegen. Die Hydra ist ein riesiges "},{de:"Ungeheuer",gr:"τέρας",pr:"te-ras",mark:true},
      {de:" mit neun "},{de:"Köpfen",gr:"κεφάλια",pr:"ke-fa-lia",mark:true},
      {de:". Es lebt in einem "},{de:"Sumpf",gr:"βάλτος",pr:"val-tos",mark:true},
      {de:" nahe dem See. Herkules geht mit seinem "},{de:"Schwert",gr:"ξίφος",pr:"ksi-fos",mark:true},
      {de:" in den Sumpf. Er schlägt einen Kopf ab — aber es wachsen zwei neue! Sein Neffe Iolaos "},{de:"hilft",gr:"βοηθά",pr:"vo-i-tha",mark:true},
      {de:" ihm. Nach jedem Schnitt verbrennen sie die Wunde mit "},{de:"Feuer",gr:"φωτιά",pr:"fo-tia",mark:true},
      {de:". So kann die Hydra keine neuen Köpfe mehr wachsen lassen. Am Ende "},{de:"besiegt",gr:"νικά",pr:"ni-ka",mark:true},
      {de:" Herkules das Ungeheuer. Alle "},{de:"bewundern",gr:"θαυμάζουν",pr:"thav-ma-zun",mark:true},
      {de:" ihn!"}
    ]
  },
  {
    title: "Herkules und der Nemeische Löwe", titleGr: "Ο Ηρακλής και ο Νεμεαίος Λέων",
    emoji: "🦁",
    img: "story-hero_hercules_fighting_against_nemean_lion",
    grText: "Ο Ηρακλής έχει δώδεκα άθλους να κάνει. Ο πρώτος άθλος είναι να νικήσει τον Νεμεαίο Λέοντα. Αυτό το λιοντάρι είναι τεράστιο και πολύ επικίνδυνο. Ζει στα βουνά κοντά στη Νεμέα. Κανένα όπλο δεν μπορεί να τον πληγώσει! Ο Ηρακλής είναι πολύ δυνατός και γενναίος. Πηγαίνει στο βουνό μόνος του. Παλεύει με το λιοντάρι με τα γυμνά του χέρια. Το σφίγγει δυνατά και το νικά! Μετά φοράει το δέρμα του λιονταριού σαν πανοπλία. Όλοι τον αποκαλούν ήρωα!",
    text: [
      {de:"Herkules muss zwölf "},{de:"Aufgaben",gr:"άθλοι",pr:"ath-li",mark:true},
      {de:" erfüllen. Die erste Aufgabe ist der Nemeische "},{de:"Löwe",gr:"λιοντάρι",pr:"li-on-ta-ri",mark:true},
      {de:". Dieses Tier ist riesig und sehr "},{de:"gefährlich",gr:"επικίνδυνο",pr:"e-pi-kin-dhi-no",mark:true},
      {de:". Es lebt in den "},{de:"Bergen",gr:"βουνά",pr:"vu-na",mark:true},
      {de:" nahe Nemea. Kein "},{de:"Schwert",gr:"ξίφος",pr:"ksi-fos",mark:true},
      {de:" kann es verletzen! Herkules ist sehr "},{de:"stark",gr:"δυνατός",pr:"dhi-na-tos",mark:true},
      {de:" und mutig. Er geht alleine auf den Berg. Er "},{de:"kämpft",gr:"παλεύει",pr:"pa-le-vi",mark:true},
      {de:" mit dem Löwen mit bloßen "},{de:"Händen",gr:"χέρια",pr:"che-ria",mark:true},
      {de:". Er drückt ihn fest und "},{de:"besiegt",gr:"νικά",pr:"ni-ka",mark:true},
      {de:" ihn! Danach trägt er das "},{de:"Fell",gr:"δέρμα",pr:"dher-ma",mark:true},
      {de:" des Löwen wie eine Rüstung. Alle nennen ihn "},{de:"Held",gr:"ήρωας",pr:"i-ro-as",mark:true},{de:"!"}
    ]
  },
  {
    title: "Ikarus und Daidalus", titleGr: "Ίκαρος και Δαίδαλος",
    emoji: "🪶",
    img: "story-icarus_and_daedalus_and_the_sun",
    grText: "Ο Δαίδαλος είναι ένας έξυπνος τεχνίτης. Μαζί με τον γιο του τον Ίκαρο είναι φυλακισμένοι σε ένα νησί. Ο Δαίδαλος έχει μια ιδέα! Μαζεύει πολλά φτερά και τα κολλά με κερί. Φτιάχνει δύο ζευγάρια φτερούγες. Μια για τον Ίκαρο και μια για τον εαυτό του. Πριν φύγουν ο Δαίδαλος λέει: Μην πετάς πολύ ψηλά! Ο ήλιος θα λιώσει το κερί! Ο Ίκαρος υπόσχεται. Αλλά στον αέρα ο Ίκαρος ξεχνά. Πετά όλο και πιο ψηλά προς τον ήλιο. Το κερί λιώνει και τα φτερά πέφτουν. Ο Ίκαρος πέφτει στη θάλασσα. Ο Δαίδαλος είναι πολύ λυπημένος. Από τότε λέμε: Μην πετάς πολύ ψηλά!",
    text: [
      {de:"Daidalus ist ein kluger "},{de:"Handwerker",gr:"τεχνίτης",pr:"tech-ni-tis",mark:true},
      {de:". Er und sein "},{de:"Sohn",gr:"γιος",pr:"jios",mark:true},
      {de:" Ikarus sind auf einer "},{de:"Insel",gr:"νησί",pr:"ni-si",mark:true},
      {de:" gefangen. Daidalus hat eine "},{de:"Idee",gr:"ιδέα",pr:"i-dhe-a",mark:true},
      {de:"! Er sammelt viele "},{de:"Federn",gr:"φτερά",pr:"fte-ra",mark:true},
      {de:" und klebt sie mit "},{de:"Wachs",gr:"κερί",pr:"ke-ri",mark:true},
      {de:" zusammen. Er baut zwei Paar "},{de:"Flügel",gr:"φτερούγες",pr:"fte-ru-ghes",mark:true},
      {de:". Bevor sie fliegen sagt Daidalus: Flieg nicht zu nah an die "},{de:"Sonne",gr:"ήλιος",pr:"i-li-os",mark:true},
      {de:"! Das Wachs schmilzt! Aber in der "},{de:"Luft",gr:"αέρας",pr:"a-e-ras",mark:true},
      {de:" vergisst Ikarus. Er fliegt immer höher. Das Wachs "},{de:"schmilzt",gr:"λιώνει",pr:"lio-ni",mark:true},
      {de:" und die Federn fallen. Ikarus fällt ins "},{de:"Meer",gr:"θάλασσα",pr:"tha-la-sa",mark:true},
      {de:". Daidalus ist sehr "},{de:"traurig",gr:"λυπημένος",pr:"li-pi-me-nos",mark:true},
      {de:". Seitdem sagen wir: Flieg nicht zu hoch!"}
    ]
  },
  {
    title: "Der alte Fischer", titleGr: "Ο Γέρος Ψαράς",
    emoji: "🎣",
    img: "story-greek_fishermen_with_his_boat_fishing_net",
    grText: "Ο Νικόλας είναι ένας γέρος ψαράς. Κάθε πρωί πριν ανατείλει ο ήλιος πηγαίνει στη θάλασσα με τη βάρκα του. Η βάρκα του λέγεται Άγιος Νικόλας. Ρίχνει τα δίχτυα του στο νερό και περιμένει. Τα ψάρια έρχονται σιγά σιγά μέσα στα δίχτυα. Ο Νικόλας τραγουδά παλιά τραγούδια ενώ ψαρεύει. Στο βάθος βλέπει το χωριό με την άσπρη εκκλησία και τον ανεμόμυλο. Στο τέλος γυρνά στο λιμάνι με πολλά ψάρια. Η γυναίκα του τον περιμένει στην αποβάθρα. Σήμερα θα φάνε φρέσκο ψάρι για μεσημεριανό!",
    text: [
      {de:"Nikolas ist ein alter "},{de:"Fischer",gr:"ψαράς",pr:"psa-ras",mark:true},
      {de:". Jeden Morgen fährt er mit seinem "},{de:"Boot",gr:"βάρκα",pr:"var-ka",mark:true},
      {de:" aufs "},{de:"Meer",gr:"θάλασσα",pr:"tha-la-sa",mark:true},
      {de:". Er wirft seine "},{de:"Netze",gr:"δίχτυα",pr:"dhich-ti-a",mark:true},
      {de:" ins Wasser und wartet. Die "},{de:"Fische",gr:"ψάρια",pr:"psa-ria",mark:true},
      {de:" kommen langsam in die Netze. Nikolas singt alte "},{de:"Lieder",gr:"τραγούδια",pr:"tra-gu-dhia",mark:true},
      {de:" beim Fischen. In der Ferne sieht er das "},{de:"Dorf",gr:"χωριό",pr:"cho-rio",mark:true},
      {de:" mit der weißen "},{de:"Kirche",gr:"εκκλησία",pr:"e-kli-si-a",mark:true},
      {de:" und der "},{de:"Windmühle",gr:"ανεμόμυλος",pr:"a-ne-mo-mi-los",mark:true},
      {de:". Am Ende kehrt er mit vielen Fischen in den "},{de:"Hafen",gr:"λιμάνι",pr:"li-ma-ni",mark:true},
      {de:" zurück. Heute essen sie frischen "},{de:"Fisch",gr:"ψάρι",pr:"psa-ri",mark:true},
      {de:" zum Mittagessen!"}
    ]
  },
  {
    title: "Das Fußballspiel", titleGr: "Το Ποδοσφαιρικό Παιχνίδι",
    emoji: "⚽",
    img: "story-a_soccer_field_scene_a_young_boy_scoring",
    grText: "Ο Νίκος παίζει ποδόσφαιρο με την ομάδα του. Σήμερα έχουν έναν σημαντικό αγώνα. Η ομάδα του φοράει άσπρες φανέλες. Οι αντίπαλοι φοράνε κίτρινες φανέλες. Ο Νίκος τρέχει γρήγορα με τη μπάλα. Σουτάρει δυνατά προς το τέρμα. Ο τερματοφύλακας προσπαθεί να την πιάσει αλλά δεν μπορεί. ΓΚΟΛ! Όλοι πανηγυρίζουν! Η ομάδα του Νίκου κερδίζει τον αγώνα. Είναι πολύ χαρούμενος!",
    text: [
      {de:"Nikos spielt "},{de:"Fußball",gr:"ποδόσφαιρο",pr:"po-dhos-fe-ro",mark:true},
      {de:" mit seiner "},{de:"Mannschaft",gr:"ομάδα",pr:"o-ma-dha",mark:true},
      {de:". Heute haben sie ein wichtiges "},{de:"Spiel",gr:"αγώνας",pr:"a-gho-nas",mark:true},
      {de:". Nikos rennt schnell mit dem "},{de:"Ball",gr:"μπάλα",pr:"ba-la",mark:true},
      {de:" und schießt stark aufs "},{de:"Tor",gr:"τέρμα",pr:"ter-ma",mark:true},
      {de:". Der "},{de:"Torwart",gr:"τερματοφύλακας",pr:"ter-ma-to-fi-la-kas",mark:true},
      {de:" kann ihn nicht halten. "},{de:"TOR",gr:"ΓΚΟΛ",pr:"gkol",mark:true},
      {de:"! Alle feiern! Die Mannschaft "},{de:"gewinnt",gr:"κερδίζει",pr:"ker-dhi-zi",mark:true},
      {de:" das Spiel. Nikos ist sehr "},{de:"glücklich",gr:"χαρούμενος",pr:"cha-ru-me-nos",mark:true},{de:"!"}
    ]
  },
  {
    title: "Der Klempner", titleGr: "Ο Υδραυλικός",
    emoji: "🔧",
    img: "story-a_friendly_plumber_with_a_full_black_bear",
    grText: "Ο Κώστας είναι υδραυλικός. Σήμερα πηγαίνει σε ένα σπίτι για να επισκευάσει τον νιπτήρα. Παίρνει την εργαλειοθήκη του με πολλά εργαλεία. Βάζει τη φόρμα του και γονατίζει κάτω από τον νιπτήρα. Βρίσκει τη βλάβη στον σωλήνα. Χρησιμοποιεί ένα γαλλικό κλειδί για να σφίξει τον σωλήνα. Μετά από λίγο το νερό δεν στάζει πλέον. Η δουλειά είναι έτοιμη! Ο Κώστας είναι περήφανος για τη δουλειά του.",
    text: [
      {de:"Kostas ist "},{de:"Klempner",gr:"υδραυλικός",pr:"i-dhrau-li-kos",mark:true},
      {de:". Heute geht er in ein Haus um das "},{de:"Waschbecken",gr:"νιπτήρας",pr:"nip-ti-ras",mark:true},
      {de:" zu reparieren. Er nimmt seinen "},{de:"Werkzeugkasten",gr:"εργαλειοθήκη",pr:"er-gha-li-o-thi-ki",mark:true},
      {de:" mit vielen "},{de:"Werkzeugen",gr:"εργαλεία",pr:"er-gha-li-a",mark:true},
      {de:" mit. Er findet den Schaden am "},{de:"Rohr",gr:"σωλήνας",pr:"so-li-nas",mark:true},
      {de:" und benutzt einen "},{de:"Schraubenschlüssel",gr:"γαλλικό κλειδί",pr:"gha-li-ko kli-dhi",mark:true},
      {de:" um ihn festzuziehen. Das "},{de:"Wasser",gr:"νερό",pr:"ne-ro",mark:true},
      {de:" tropft nicht mehr. Die "},{de:"Arbeit",gr:"δουλειά",pr:"dhu-lia",mark:true},
      {de:" ist fertig! Kostas ist sehr "},{de:"stolz",gr:"περήφανος",pr:"pe-ri-fa-nos",mark:true},{de:"!"}
    ]
  },
  {
    title: "Im Friseursalon", titleGr: "Στο Κομμωτήριο",
    emoji: "✂️",
    img: "story-a_hair_salon_scene_a_mother_sitting_in_daughter_waiting",
    grText: "Η Μαρία πηγαίνει με την κόρη της στο κομμωτήριο. Η κομμώτρια την καλωσορίζει με ένα χαμόγελο. Η Μαρία κάθεται στην καρέκλα. Η κομμώτρια χτενίζει τα μαλλιά της και τα βάφει με χρώματα. Η μικρή κόρη κάθεται και περιμένει υπομονετικά. Κοιτάζει τα χρωματιστά μπουκάλια στο ράφι. Μετά από λίγο τα μαλλιά της Μαρίας είναι τέλεια! Ο καθρέφτης δείχνει ένα όμορφο αποτέλεσμα. Η Μαρία και η κόρη της είναι πολύ χαρούμενες!",
    text: [
      {de:"Maria geht mit ihrer "},{de:"Tochter",gr:"κόρη",pr:"ko-ri",mark:true},
      {de:" zum "},{de:"Friseursalon",gr:"κομμωτήριο",pr:"ko-mo-ti-ri-o",mark:true},
      {de:". Die "},{de:"Friseurin",gr:"κομμώτρια",pr:"ko-mo-tria",mark:true},
      {de:" begrüßt sie mit einem Lächeln. Maria setzt sich auf den "},{de:"Stuhl",gr:"καρέκλα",pr:"ka-re-kla",mark:true},
      {de:". Die Friseurin kämmt ihr "},{de:"Haar",gr:"μαλλιά",pr:"ma-lia",mark:true},
      {de:" und färbt es mit "},{de:"Farben",gr:"χρώματα",pr:"chro-ma-ta",mark:true},
      {de:". Die kleine Tochter wartet "},{de:"geduldig",gr:"υπομονετικά",pr:"i-po-mo-ne-ti-ka",mark:true},
      {de:" und schaut die bunten "},{de:"Flaschen",gr:"μπουκάλια",pr:"bu-ka-lia",mark:true},
      {de:" im Regal an. Nach einer Weile ist das "},{de:"Ergebnis",gr:"αποτέλεσμα",pr:"a-po-te-les-ma",mark:true},
      {de:" perfekt! Alle sind "},{de:"glücklich",gr:"χαρούμενες",pr:"cha-ru-me-nes",mark:true},{de:"!"}
    ]
  },
  {
    title: "Das Leichtathletikrennen", titleGr: "Ο Αγώνας Δρόμου",
    emoji: "🏃",
    img: "story-a_track_and_field_scene_a_young_girl_winning",
    grText: "Η Σοφία αγαπά την αθλητική δρομή. Σήμερα έχει έναν σημαντικό αγώνα δρόμου στο στάδιο. Φοράει ένα μπλε αθλητικό μπλουζάκι και πορτοκαλί αθλητικά παπούτσια. Στην αρχή ακούει το σήμα εκκίνησης. Τρέχει όσο πιο γρήγορα μπορεί. Τα πόδια της είναι δυνατά. Οι φίλοι της την επευφημούν από τις κερκίδες. Περνά την κορδέλα πρώτη! Η Σοφία κερδίζει το χρυσό μετάλλιο. Είναι η πρωταθλήτρια!",
    text: [
      {de:"Sofia liebt die "},{de:"Leichtathletik",gr:"αθλητισμός",pr:"ath-li-tis-mos",mark:true},
      {de:". Heute hat sie ein wichtiges "},{de:"Rennen",gr:"αγώνας δρόμου",pr:"a-gho-nas dhro-mu",mark:true},
      {de:" im "},{de:"Stadion",gr:"στάδιο",pr:"sta-dhi-o",mark:true},
      {de:". Sie trägt blaue "},{de:"Sportkleidung",gr:"αθλητικά ρούχα",pr:"ath-li-ti-ka ru-cha",mark:true},
      {de:". Beim "},{de:"Startschuss",gr:"σήμα εκκίνησης",pr:"si-ma e-ki-ni-sis",mark:true},
      {de:" rennt sie so schnell wie möglich. Ihre "},{de:"Beine",gr:"πόδια",pr:"po-dhia",mark:true},
      {de:" sind stark. Ihre Freunde "},{de:"feuern sie an",gr:"την επευφημούν",pr:"tin e-pef-fi-mun",mark:true},
      {de:" von den Rängen. Sie durchbricht das "},{de:"Zielband",gr:"κορδέλα",pr:"kor-dhe-la",mark:true},
      {de:" als Erste! Sofia gewinnt die "},{de:"Goldmedaille",gr:"χρυσό μετάλλιο",pr:"chri-so me-ta-li-o",mark:true},
      {de:". Sie ist die "},{de:"Siegerin",gr:"πρωταθλήτρια",pr:"pro-tath-li-tria",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die Familie am Strand", titleGr: "Η Οικογένεια στην Παραλία",
    emoji: "🏖️",
    img: "story-a_happy_family_arrived_in_a_silver_car",
    grText: "Η οικογένεια φτάνει στην παραλία με το αυτοκίνητο. Είναι σχολικές διακοπές και όλοι είναι χαρούμενοι! Βλέπουν μια πινακίδα που γράφει ΠΑΡΑΛΙΑ. Το νερό της θάλασσας είναι κρυστάλλινο και γαλάζιο. Ο ήλιος λάμπει και ο ουρανός είναι καταγάλανος. Τα παιδιά ανοίγουν την πόρτα και τρέχουν στην άμμο. Δεν μπορούν να περιμένουν να μπουν στο νερό! Ο μπαμπάς παρκάρει το αυτοκίνητο. Η μαμά βγάζει τις πετσέτες και τις ομπρέλες. Σήμερα θα είναι μια τέλεια μέρα στην παραλία!",
    text: [
      {de:"Die "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},
      {de:" erreicht mit dem "},{de:"Auto",gr:"αυτοκίνητο",pr:"af-to-ki-ni-to",mark:true},
      {de:" den "},{de:"Strand",gr:"παραλία",pr:"pa-ra-li-a",mark:true},
      {de:". Es sind "},{de:"Schulferien",gr:"σχολικές διακοπές",pr:"scho-li-kes dhi-a-ko-pes",mark:true},
      {de:" und alle freuen sich! Das "},{de:"Meerwasser",gr:"θαλασσινό νερό",pr:"tha-la-si-no ne-ro",mark:true},
      {de:" ist "},{de:"glasklar",gr:"κρυστάλλινο",pr:"kris-ta-li-no",mark:true},
      {de:" und blau. Die "},{de:"Sonne",gr:"ήλιος",pr:"i-li-os",mark:true},
      {de:" scheint und das Wetter ist "},{de:"sonnig",gr:"ηλιόλουστο",pr:"i-li-o-lus-to",mark:true},
      {de:". Die Kinder rennen in den "},{de:"Sand",gr:"άμμος",pr:"a-mos",mark:true},
      {de:" und können es kaum erwarten ins "},{de:"Wasser",gr:"νερό",pr:"ne-ro",mark:true},
      {de:" zu springen. Mama holt die "},{de:"Handtücher",gr:"πετσέτες",pr:"pe-tse-tes",mark:true},
      {de:" und "},{de:"Sonnenschirme",gr:"ομπρέλες",pr:"om-bre-les",mark:true},
      {de:" heraus. Ein "},{de:"perfekter Tag",gr:"τέλεια μέρα",pr:"te-li-a me-ra",mark:true},{de:"!"}
    ]
  },
  {
    title: "Im griechischen Restaurant", titleGr: "Στο Ελληνικό Εστιατόριο",
    emoji: "🍽️",
    img: "story-a_happy_family_sitting_together_at_a_greek_restaurant",
    grText: "Η οικογένεια πηγαίνει σε ένα ελληνικό εστιατόριο. Όλοι είναι πεινασμένοι και ανυπομονούν για το φαγητό. Το εστιατόριο έχει μπλε καρέκλες και λουλούδια παντού. Ο σερβιτόρος φέρνει τον κατάλογο. Παραγγέλνουν πολλές ελληνικές σπεσιαλιτέ. Φέρνουν τζατζίκι, σαλάτα, σουβλάκι και τυρόπιτα. Τα παιδιά πίνουν χυμό και οι γονείς πίνουν νερό. Το φαγητό είναι νόστιμο και φρέσκο. Όλοι τρώνε με όρεξη και γελούν μαζί. Τι ωραία βραδιά!",
    text: [
      {de:"Die Familie geht in ein griechisches "},{de:"Restaurant",gr:"εστιατόριο",pr:"es-ti-a-to-ri-o",mark:true},
      {de:". Alle sind "},{de:"hungrig",gr:"πεινασμένοι",pr:"pi-nas-me-ni",mark:true},
      {de:" und freuen sich auf das "},{de:"Essen",gr:"φαγητό",pr:"fa-ghi-to",mark:true},
      {de:". Der "},{de:"Kellner",gr:"σερβιτόρος",pr:"ser-vi-to-ros",mark:true},
      {de:" bringt die "},{de:"Speisekarte",gr:"κατάλογος",pr:"ka-ta-lo-ghos",mark:true},
      {de:". Sie bestellen viele griechische "},{de:"Spezialitäten",gr:"σπεσιαλιτέ",pr:"spe-si-a-li-te",mark:true},
      {de:": "},{de:"Tzatziki",gr:"τζατζίκι",pr:"tza-tzi-ki",mark:true},
      {de:", "},{de:"Salat",gr:"σαλάτα",pr:"sa-la-ta",mark:true},
      {de:", "},{de:"Souvlaki",gr:"σουβλάκι",pr:"suv-la-ki",mark:true},
      {de:" und "},{de:"Käsepastete",gr:"τυρόπιτα",pr:"ti-ro-pi-ta",mark:true},
      {de:". Das Essen ist "},{de:"lecker",gr:"νόστιμο",pr:"nos-ti-mo",mark:true},
      {de:" und frisch. Alle essen mit "},{de:"Appetit",gr:"όρεξη",pr:"o-rek-si",mark:true},
      {de:" und lachen zusammen. Was für ein schöner "},{de:"Abend",gr:"βραδιά",pr:"vra-dhia",mark:true},{de:"!"}
    ]
  },
  {
    title: "Entdecke Griechenland",
    titleGr: "Ανακάλυψε την Ελλάδα",
    emoji: "🗺️",
    img: "story-map_of_greece_01",
    grText: "Η Ελλάδα είναι μια όμορφη χώρα στη νότια Ευρώπη. Η πρωτεύουσα είναι η Αθήνα. Στη Αθήνα βρίσκεται η Ακρόπολη. Η Θεσσαλονίκη είναι η δεύτερη μεγάλη πόλη. Ο Όλυμπος είναι το ψηλότερο βουνό της Ελλάδας. Εκεί ζούσαν οι αρχαίοι θεοί! Η Ελλάδα έχει πολλά νησιά. Η Κρήτη είναι το μεγαλύτερο νησί. Η Σαντορίνη είναι διάσημη για τα άσπρα σπίτια και τη θάλασσα. Η Μύκονος και η Ρόδος είναι επίσης πολύ όμορφες. Στα δυτικά βρίσκεται το Ιόνιο Πέλαγος και στα ανατολικά το Αιγαίο Πέλαγος. Η Ελλάδα είναι μια μαγική χώρα!",
    text: [
      {de:"Griechenland ist ein schönes "},{de:"Land",gr:"χώρα",pr:"cho-ra",mark:true},
      {de:" im Süden Europas. Die "},{de:"Hauptstadt",gr:"πρωτεύουσα",pr:"pro-tev-u-sa",mark:true},
      {de:" ist "},{de:"Athen",gr:"Αθήνα",pr:"A-thi-na",mark:true},
      {de:". Dort steht die "},{de:"Akropolis",gr:"Ακρόπολη",pr:"A-kro-po-li",mark:true},
      {de:". "},{de:"Thessaloniki",gr:"Θεσσαλονίκη",pr:"The-sa-lo-ni-ki",mark:true},
      {de:" ist die zweitgrößte Stadt. Der "},{de:"Olymp",gr:"Όλυμπος",pr:"O-lim-pos",mark:true},
      {de:" ist der höchste "},{de:"Berg",gr:"βουνό",pr:"vu-no",mark:true},
      {de:" — dort lebten die alten Götter! Griechenland hat viele "},{de:"Inseln",gr:"νησιά",pr:"ni-sia",mark:true},
      {de:". "},{de:"Kreta",gr:"Κρήτη",pr:"Kri-ti",mark:true},
      {de:" ist die größte Insel. "},{de:"Santorini",gr:"Σαντορίνη",pr:"San-to-ri-ni",mark:true},
      {de:" ist bekannt für seine weißen Häuser. Im Westen liegt das "},{de:"Ionische Meer",gr:"Ιόνιο Πέλαγος",pr:"I-o-ni-o Pe-la-ghos",mark:true},
      {de:" und im Osten die "},{de:"Ägäis",gr:"Αιγαίο Πέλαγος",pr:"E-ghe-o Pe-la-ghos",mark:true},
      {de:". Griechenland ist ein "},{de:"magisches Land",gr:"μαγική χώρα",pr:"ma-gi-ki cho-ra",mark:true},{de:"!"}
    ]
  },
  {
    title: "Odysseus — Abfahrt aus Troja",
    titleGr: "Οδυσσέας — Αναχώρηση από την Τροία",
    emoji: "⚓",
    img: "odysseus_01_departure_troy",
    grText: "Μετά τον μακρύ πόλεμο στην Τροία, ο Οδυσσέας και οι άντρες του ξεκινούν το ταξίδι της επιστροφής για την Ιθάκη. Κανείς δεν ξέρει ότι το ταξίδι θα διαρκέσει πολλά χρόνια!",
    text: [
      {de:"Nach dem langen "},{de:"Krieg",gr:"πόλεμος",pr:"po-le-mos",mark:true},
      {de:" in "},{de:"Troja",gr:"Τροία",pr:"Tro-ia",mark:true},
      {de:" macht sich "},{de:"Odysseus",gr:"Οδυσσέας",pr:"O-dhis-se-as",mark:true},
      {de:" mit seinen "},{de:"Männern",gr:"άντρες",pr:"an-dres",mark:true},
      {de:" und vielen "},{de:"Schiffen",gr:"πλοία",pr:"pli-a",mark:true},
      {de:" auf den Heimweg nach "},{de:"Ithaka",gr:"Ιθάκη",pr:"I-tha-ki",mark:true},
      {de:". Niemand ahnt, dass die "},{de:"Reise",gr:"ταξίδι",pr:"tak-si-dhi",mark:true},
      {de:" noch viele "},{de:"Jahre",gr:"χρόνια",pr:"chro-nia",mark:true},{de:" dauern wird!"}
    ]
  },
  {
    title: "Das Land der Lotophagen",
    titleGr: "Η Χώρα των Λωτοφάγων",
    emoji: "🌸",
    img: "odysseus_02_lotus_eaters",
    grText: "Μετά την αναχώρηση από την Τροία ο Οδυσσέας και οι άντρες του φτάνουν στη χώρα των Λωτοφάγων. Οι κάτοικοι τους δίνουν λωτούς να φάνε. Όποιος τρώει αυτά τα μαγικά φρούτα ξεχνά αμέσως την πατρίδα του και δεν θέλει να φύγει ποτέ!",
    text: [
      {de:"Odysseus landet im "},{de:"Land",gr:"χώρα",pr:"cho-ra",mark:true},
      {de:" der "},{de:"Lotophagen",gr:"Λωτοφάγοι",pr:"Lo-to-fa-gi",mark:true},
      {de:". Die Bewohner geben ihnen "},{de:"Lotosfrüchte",gr:"λωτοί",pr:"lo-ti",mark:true},
      {de:" zu essen. Wer diese "},{de:"magischen",gr:"μαγικά",pr:"ma-gi-ka",mark:true},
      {de:" Früchte isst, "},{de:"vergisst",gr:"ξεχνά",pr:"kse-chna",mark:true},
      {de:" sofort seine "},{de:"Heimat",gr:"πατρίδα",pr:"pa-tri-dha",mark:true},
      {de:"! Odysseus muss seine Männer schnell zurück zum "},{de:"Schiff",gr:"πλοίο",pr:"pli-o",mark:true},
      {de:" ziehen, bevor alle "},{de:"vergessen",gr:"ξεχνούν",pr:"kse-chnun",mark:true},{de:" wohin sie wollen."}
    ]
  },
  {
    title: "Die Zyklopen-Höhle",
    titleGr: "Η Σπηλιά των Κυκλώπων",
    emoji: "👁️",
    img: "odysseus_03_cyclops_polyphemus",
    grText: "Ο Οδυσσέας και οι άντρες του φτάνουν σε ένα νησί και ανακαλύπτουν μια τεράστια σπηλιά. Εκεί ζει ο μονόφθαλμος γίγαντας Πολύφημος! Ο γίγαντας είναι τόσο μεγάλος που οι άντρες μοιάζουν πολύ μικροί δίπλα του.",
    text: [
      {de:"Odysseus entdeckt eine riesige "},{de:"Höhle",gr:"σπηλιά",pr:"spi-lia",mark:true},
      {de:". Dort wohnt der einäugige "},{de:"Riese",gr:"γίγαντας",pr:"gi-ghan-das",mark:true},
      {de:" "},{de:"Polyphem",gr:"Πολύφημος",pr:"Po-li-fi-mos",mark:true},
      {de:"! Der Riese hat nur ein einziges "},{de:"Auge",gr:"μάτι",pr:"ma-ti",mark:true},
      {de:" mitten auf der "},{de:"Stirn",gr:"μέτωπο",pr:"me-to-po",mark:true},
      {de:". Er ist ein "},{de:"Zyklop",gr:"Κύκλωπας",pr:"Ki-klo-pas",mark:true},
      {de:" — riesig und "},{de:"gefährlich",gr:"επικίνδυνος",pr:"e-pi-kin-dhi-nos",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die Insel der Winde",
    titleGr: "Το Νησί των Ανέμων",
    emoji: "💨",
    img: "odysseus_04_island_of_winds",
    grText: "Ο Οδυσσέας επισκέπτεται τον Αίολο, τον βασιλιά των ανέμων. Σαν δώρο παίρνει έναν μεγάλο ασκό δέρματος όπου είναι φυλακισμένοι όλοι οι άνεμοι. Μόνο ο καλός άνεμος της επιστροφής επιτρέπεται να φυσά!",
    text: [
      {de:"Odysseus besucht "},{de:"Äolus",gr:"Αίολος",pr:"E-o-los",mark:true},
      {de:", den "},{de:"König",gr:"βασιλιάς",pr:"va-si-lias",mark:true},
      {de:" der "},{de:"Winde",gr:"άνεμοι",pr:"a-ne-mi",mark:true},
      {de:". Als "},{de:"Geschenk",gr:"δώρο",pr:"dho-ro",mark:true},
      {de:" bekommt er einen großen "},{de:"Ledersack",gr:"ασκός",pr:"as-kos",mark:true},
      {de:" mit allen "},{de:"Winden",gr:"ανέμους",pr:"a-ne-mus",mark:true},
      {de:" darin. Nur der "},{de:"Heimwind",gr:"άνεμος επιστροφής",pr:"a-ne-mos e-pis-tro-fis",mark:true},
      {de:" darf "},{de:"wehen",gr:"φυσά",pr:"fi-sa",mark:true},{de:"!"}
    ]
  },
  {
    title: "Die Zauberin Kirke",
    titleGr: "Η Μάγισσα Κίρκη",
    emoji: "🪄",
    img: "odysseus_05_sorceress_circe",
    grText: "Στο νησί Αιαία ζει η μάγισσα Κίρκη. Με το μαγικό της ραβδί μετατρέπει τους άντρες του Οδυσσέα σε γουρούνια! Αλλά ο Οδυσσέας είναι έξυπνος και γενναίος — αντιστέκεται στη μαγεία και σώζει τους άντρες του.",
    text: [
      {de:"Auf der Insel Aiaia lebt die "},{de:"Zauberin",gr:"μάγισσα",pr:"ma-gi-sa",mark:true},
      {de:" "},{de:"Kirke",gr:"Κίρκη",pr:"Kir-ki",mark:true},
      {de:". Mit ihrem "},{de:"Zauberstab",gr:"μαγικό ραβδί",pr:"ma-gi-ko rav-dhi",mark:true},
      {de:" verwandelt sie die Männer in "},{de:"Schweine",gr:"γουρούνια",pr:"ghu-ru-nia",mark:true},
      {de:"! Aber Odysseus ist "},{de:"schlau",gr:"έξυπνος",pr:"ek-si-pnos",mark:true},
      {de:" und "},{de:"mutig",gr:"γενναίος",pr:"ghen-ne-os",mark:true},
      {de:" — er widersteht dem "},{de:"Zauber",gr:"μαγεία",pr:"ma-gi-a",mark:true},
      {de:" und "},{de:"rettet",gr:"σώζει",pr:"so-zi",mark:true},{de:" seine Männer!"}
    ]
  },
  {
    title: "Die Reise in die Unterwelt",
    titleGr: "Το Ταξίδι στον Άδη",
    emoji: "💀",
    img: "odysseus_06_underworld",
    grText: "Ο Οδυσσέας τολμά να κατεβεί στον Άδη — τη βασιλεία των νεκρών. Εκεί συναντά τα πνεύματα των νεκρών ανθρώπων. Ο ποταμός Στύγας ρέει ήρεμα μέσα στον σκοτεινό κόσμο.",
    text: [
      {de:"Odysseus wagt sich in die "},{de:"Unterwelt",gr:"Άδης",pr:"A-dhis",mark:true},
      {de:" — das "},{de:"Reich",gr:"βασιλεία",pr:"va-si-li-a",mark:true},
      {de:" der "},{de:"Toten",gr:"νεκροί",pr:"ne-kri",mark:true},
      {de:". Dort trifft er die "},{de:"Geister",gr:"πνεύματα",pr:"pnev-ma-ta",mark:true},
      {de:" verstorbener Menschen. Der "},{de:"Fluss",gr:"ποταμός",pr:"po-ta-mos",mark:true},
      {de:" "},{de:"Styx",gr:"Στύγας",pr:"Sti-ghas",mark:true},
      {de:" fließt durch die "},{de:"dunkle",gr:"σκοτεινή",pr:"sko-ti-ni",mark:true},
      {de:" Welt. Odysseus ist "},{de:"mutig",gr:"γενναίος",pr:"ghen-ne-os",mark:true},{de:" und hat keine Angst!"}
    ]
  },
  {
    title: "Die Sirenen",
    titleGr: "Οι Σειρήνες",
    emoji: "🎵",
    img: "odysseus_07_sirens",
    grText: "Οι Σειρήνες είναι όμορφα πλάσματα που τραγουδούν τόσο γλυκά που όλοι οι ναύτες θέλουν να κολυμπήσουν προς αυτές. Ο Οδυσσέας είναι έξυπνος — αφήνεται δεμένος στο κατάρτι και βουλώνει τα αυτιά των αντρών του με κερί.",
    text: [
      {de:"Die "},{de:"Sirenen",gr:"Σειρήνες",pr:"Si-ri-nes",mark:true},
      {de:" singen so "},{de:"betörend",gr:"γλυκά",pr:"ghli-ka",mark:true},
      {de:" dass alle "},{de:"Seeleute",gr:"ναύτες",pr:"naf-tes",mark:true},
      {de:" zu ihnen schwimmen wollen. Odysseus lässt sich am "},{de:"Mast",gr:"κατάρτι",pr:"ka-tar-ti",mark:true},
      {de:" "},{de:"festbinden",gr:"δένουν",pr:"dhe-nun",mark:true},
      {de:". Seinen Männern werden die "},{de:"Ohren",gr:"αυτιά",pr:"af-tia",mark:true},
      {de:" mit "},{de:"Wachs",gr:"κερί",pr:"ke-ri",mark:true},
      {de:" verstopft. So ist er "},{de:"sicher",gr:"ασφαλής",pr:"as-fa-lis",mark:true},{de:"!"}
    ]
  },
  {
    title: "Skylla und Charybdis",
    titleGr: "Σκύλλα και Χάρυβδη",
    emoji: "🌀",
    img: "odysseus_08_scylla_charybdis",
    grText: "Ο Οδυσσέας πρέπει να περάσει από ένα στενό πέρασμα ανάμεσα σε δύο τρομερούς κινδύνους! Από τη μία πλευρά παραμονεύει η Σκύλλα — ένα τέρας με έξι κεφάλια. Από την άλλη πλευρά στροβιλίζεται η Χάρυβδη — μια τεράστια επικίνδυνη δίνη.",
    text: [
      {de:"Odysseus muss durch eine enge "},{de:"Meerenge",gr:"στενό πέρασμα",pr:"ste-no pe-ras-ma",mark:true},
      {de:" hindurch. Auf einer Seite lauert "},{de:"Skylla",gr:"Σκύλλα",pr:"Ski-la",mark:true},
      {de:" — ein "},{de:"Monster",gr:"τέρας",pr:"te-ras",mark:true},
      {de:" mit sechs "},{de:"Köpfen",gr:"κεφάλια",pr:"ke-fa-lia",mark:true},
      {de:". Auf der anderen Seite dreht sich "},{de:"Charybdis",gr:"Χάρυβδη",pr:"Cha-riv-dhi",mark:true},
      {de:" — ein riesiger "},{de:"Strudel",gr:"δίνη",pr:"dhi-ni",mark:true},
      {de:". Odysseus steuert "},{de:"mutig",gr:"γενναία",pr:"ghen-ne-a",mark:true},{de:" hindurch!"}
    ]
  },
  {
    title: "Die Rinder des Helios",
    titleGr: "Τα Βόδια του Ήλιου",
    emoji: "🐄",
    img: "odysseus_09_cattle_helios",
    grText: "Στο νησί του θεού Ήλιου βόσκουν υπέροχα ιερά βόδια. Ο Οδυσσέας προειδοποιεί τους άντρες του — κανείς δεν πρέπει να αγγίξει αυτά τα ζώα! Αλλά οι πεινασμένοι ναύτες δεν τον ακούνε και κάνουν ένα μεγάλο λάθος.",
    text: [
      {de:"Auf der Insel des "},{de:"Sonnengottes",gr:"θεός Ήλιος",pr:"the-os I-li-os",mark:true},
      {de:" grasen "},{de:"heilige Rinder",gr:"ιερά βόδια",pr:"ie-ra vo-dhia",mark:true},
      {de:". Odysseus "},{de:"warnt",gr:"προειδοποιεί",pr:"pro-i-dho-pi-i",mark:true},
      {de:" seine Männer — niemand darf diese "},{de:"Tiere",gr:"ζώα",pr:"zo-a",mark:true},
      {de:" "},{de:"anfassen",gr:"αγγίξει",pr:"an-gi-ksi",mark:true},
      {de:"! Aber die "},{de:"hungrigen",gr:"πεινασμένοι",pr:"pi-nas-me-ni",mark:true},
      {de:" Männer hören nicht und machen einen großen "},{de:"Fehler",gr:"λάθος",pr:"la-thos",mark:true},{de:"!"}
    ]
  },
  {
    title: "Schiffbruch im Sturm",
    titleGr: "Ναυάγιο στην Καταιγίδα",
    emoji: "⚡",
    img: "odysseus_10_shipwreck_storm",
    grText: "Ο Δίας ο βασιλιάς των θεών είναι πολύ θυμωμένος. Στέλνει μια τρομερή καταιγίδα και εκτοξεύει έναν κεραυνό στο πλοίο! Το πλοίο σπάει στα τεράστια κύματα. Μόνο ο Οδυσσέας επιβιώνει.",
    text: [
      {de:"Zeus, der "},{de:"König",gr:"βασιλιάς",pr:"va-si-lias",mark:true},
      {de:" der "},{de:"Götter",gr:"θεοί",pr:"the-i",mark:true},
      {de:", ist sehr "},{de:"wütend",gr:"θυμωμένος",pr:"thi-mo-me-nos",mark:true},
      {de:". Er schickt einen gewaltigen "},{de:"Sturm",gr:"καταιγίδα",pr:"ka-te-gi-dha",mark:true},
      {de:" und einen "},{de:"Blitz",gr:"κεραυνός",pr:"ke-rav-nos",mark:true},
      {de:" aufs "},{de:"Schiff",gr:"πλοίο",pr:"pli-o",mark:true},
      {de:"! Das Schiff "},{de:"zerbricht",gr:"σπάει",pr:"spa-i",mark:true},
      {de:" in den riesigen "},{de:"Wellen",gr:"κύματα",pr:"ki-ma-ta",mark:true},{de:". Nur Odysseus überlebt!"}
    ]
  },
  {
    title: "Die Insel der Kalypso",
    titleGr: "Το Νησί της Καλυψώς",
    emoji: "🏝️",
    img: "odysseus_11_island_calypso",
    grText: "Μετά το ναυάγιο ο Οδυσσέας φτάνει στο όμορφο νησί της νύμφης Καλυψώς. Το νησί είναι αληθινός παράδεισος — αλλά ο Οδυσσέας είναι λυπημένος. Του λείπει η πατρίδα του η Ιθάκη και η οικογένειά του.",
    text: [
      {de:"Nach dem Schiffbruch landet Odysseus auf der Insel der "},{de:"Nymphe",gr:"νύμφη",pr:"nim-fi",mark:true},
      {de:" "},{de:"Kalypso",gr:"Καλυψώ",pr:"Ka-lip-so",mark:true},
      {de:". Die Insel ist ein wahres "},{de:"Paradies",gr:"παράδεισος",pr:"pa-ra-dhe-sos",mark:true},
      {de:" — aber Odysseus ist "},{de:"traurig",gr:"λυπημένος",pr:"li-pi-me-nos",mark:true},
      {de:". Er vermisst seine "},{de:"Heimat",gr:"πατρίδα",pr:"pa-tri-dha",mark:true},
      {de:" "},{de:"Ithaka",gr:"Ιθάκη",pr:"I-tha-ki",mark:true},
      {de:" und seine "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},
      {de:". Sieben lange "},{de:"Jahre",gr:"χρόνια",pr:"chro-nia",mark:true},{de:" muss er bleiben!"}
    ]
  },
  {
    title: "Bei den Phäaken",
    titleGr: "Στους Φαίακες",
    emoji: "👸",
    img: "odysseus_12_phaeacians",
    grText: "Μετά από επτά χρόνια ο Οδυσσέας επιτέλους μπορεί να συνεχίσει το ταξίδι του. Η φιλική πριγκίπισσα Ναυσικά τον βρίσκει στην παραλία και τον φέρνει στον βασιλιά. Οι Φαίακες ακούνε όλη του την ιστορία και τον βοηθούν να επιστρέψει στο σπίτι!",
    text: [
      {de:"Ein neuer "},{de:"Sturm",gr:"καταιγίδα",pr:"ka-te-gi-dha",mark:true},
      {de:" wirft Odysseus ans "},{de:"Ufer",gr:"ακτή",pr:"ak-ti",mark:true},
      {de:" der Insel der "},{de:"Phäaken",gr:"Φαίακες",pr:"Fe-a-kes",mark:true},
      {de:". Die freundliche "},{de:"Prinzessin",gr:"πριγκίπισσα",pr:"prin-ki-pi-sa",mark:true},
      {de:" Nausikaa findet ihn am "},{de:"Strand",gr:"παραλία",pr:"pa-ra-li-a",mark:true},
      {de:" und bringt ihn zum "},{de:"König",gr:"βασιλιάς",pr:"va-si-lias",mark:true},
      {de:". Die Phäaken "},{de:"helfen",gr:"βοηθούν",pr:"vo-i-thun",mark:true},
      {de:" ihm nach "},{de:"Hause",gr:"σπίτι",pr:"spi-ti",mark:true},{de:" zu kommen!"}
    ]
  },
  {
    title: "Athene hilft Odysseus",
    titleGr: "Η Αθηνά Βοηθά τον Οδυσσέα",
    emoji: "🦉",
    img: "odysseus_13_athena",
    grText: "Η θεά Αθηνά είναι η προστάτιδα θεά του έξυπνου Οδυσσέα. Κάθε φορά που βρίσκεται σε μεγάλη ανάγκη του εμφανίζεται και του δίνει σοφές συμβουλές. Με την Αθηνά στο πλευρό του ο Οδυσσέας δεν χάνει ποτέ την ελπίδα!",
    text: [
      {de:"Die "},{de:"Göttin",gr:"θεά",pr:"the-a",mark:true},
      {de:" "},{de:"Athene",gr:"Αθηνά",pr:"A-thi-na",mark:true},
      {de:" ist die "},{de:"Schutzgöttin",gr:"προστάτιδα",pr:"pros-ta-ti-dha",mark:true},
      {de:" des klugen Odysseus. Immer wenn er in "},{de:"Not",gr:"ανάγκη",pr:"a-nan-gi",mark:true},
      {de:" ist, gibt sie ihm weise "},{de:"Ratschläge",gr:"συμβουλές",pr:"sim-vu-les",mark:true},
      {de:". Sie bewundert seinen "},{de:"Mut",gr:"θάρρος",pr:"tha-ros",mark:true},
      {de:" und seine "},{de:"Klugheit",gr:"εξυπνάδα",pr:"ek-si-pna-dha",mark:true},
      {de:". Mit ihr verliert Odysseus nie die "},{de:"Hoffnung",gr:"ελπίδα",pr:"el-pi-dha",mark:true},{de:"!"}
    ]
  },
  {
    title: "Heimkehr nach Ithaka",
    titleGr: "Επιστροφή στην Ιθάκη",
    emoji: "🏠",
    img: "odysseus_14_return_ithaca",
    grText: "Μετά από δέκα μακρά χρόνια στη θάλασσα ο Οδυσσέας επιτέλους φτάνει σπίτι! Ο πιστός σκύλος του ο Άργος τον αναγνωρίζει αμέσως. Η γυναίκα του η Πηνελόπη τον περίμενε όλα αυτά τα χρόνια. Τι χαρά!",
    text: [
      {de:"Nach zehn langen "},{de:"Jahren",gr:"χρόνια",pr:"chro-nia",mark:true},
      {de:" kommt Odysseus endlich nach "},{de:"Hause",gr:"σπίτι",pr:"spi-ti",mark:true},
      {de:"! Sein treuer "},{de:"Hund",gr:"σκύλος",pr:"ski-los",mark:true},
      {de:" "},{de:"Argos",gr:"Άργος",pr:"Ar-ghos",mark:true},
      {de:" erkennt ihn sofort. Seine "},{de:"Frau",gr:"γυναίκα",pr:"ghi-ne-ka",mark:true},
      {de:" "},{de:"Penelope",gr:"Πηνελόπη",pr:"Pi-ne-lo-pi",mark:true},
      {de:" hat all die Jahre auf ihn "},{de:"gewartet",gr:"περίμενε",pr:"pe-ri-me-ne",mark:true},
      {de:". Die ganze "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},{de:" ist wieder vereint!"}
    ]
  },
  {
    title: "Der Bogen des Odysseus",
    titleGr: "Το Τόξο του Οδυσσέα",
    emoji: "🏹",
    img: "odysseus_15_bow_odysseus",
    grText: "Ο Οδυσσέας επιστρέφει μεταμφιεσμένος ως φτωχός ζητιάνος στο παλάτι του. Η Πηνελόπη έχει ανακοινώσει έναν διαγωνισμό. Όλοι οι μνηστήρες προσπαθούν και αποτυγχάνουν. Τότε ο Οδυσσέας παίρνει το τόξο — και το τεντώνει αβίαστα!",
    text: [
      {de:"Odysseus kehrt "},{de:"verkleidet",gr:"μεταμφιεσμένος",pr:"me-tam-fi-es-me-nos",mark:true},
      {de:" als armer "},{de:"Bettler",gr:"ζητιάνος",pr:"zi-tia-nos",mark:true},
      {de:" in seinen "},{de:"Palast",gr:"παλάτι",pr:"pa-la-ti",mark:true},
      {de:" zurück. Penelope hat einen "},{de:"Wettkampf",gr:"διαγωνισμός",pr:"dhia-gho-nis-mos",mark:true},
      {de:" ausgerufen. Wer den riesigen "},{de:"Bogen",gr:"τόξο",pr:"tok-so",mark:true},
      {de:" "},{de:"spannen",gr:"τεντώνει",pr:"ten-to-ni",mark:true},
      {de:" kann, darf Penelope "},{de:"heiraten",gr:"παντρευτεί",pr:"pan-drev-ti",mark:true},
      {de:". Alle "},{de:"scheitern",gr:"αποτυγχάνουν",pr:"a-po-ting-cha-nun",mark:true},{de:" — außer Odysseus!"}
    ]
  },
  {
    title: "Odysseus auf dem Thron",
    titleGr: "Ο Οδυσσέας στον Θρόνο",
    emoji: "👑",
    img: "odysseus_16_family_throne",
    grText: "Μετά από όλα τα μακρά χρόνια και τις αμέτρητες περιπέτειες ο Οδυσσέας κάθεται επιτέλους πάλι στον θρόνο του στην Ιθάκη! Η οικογένεια είναι ξανά ενωμένη και το βασίλειο της Ιθάκης έχει πάλι τον νόμιμο βασιλιά του.",
    text: [
      {de:"Nach all den langen Jahren sitzt Odysseus wieder auf seinem "},{de:"Thron",gr:"θρόνος",pr:"thro-nos",mark:true},
      {de:" in "},{de:"Ithaka",gr:"Ιθάκη",pr:"I-tha-ki",mark:true},
      {de:"! Neben ihm sitzt seine treue "},{de:"Frau",gr:"γυναίκα",pr:"ghi-ne-ka",mark:true},
      {de:" Penelope und sein tapferer "},{de:"Sohn",gr:"γιος",pr:"jios",mark:true},
      {de:" Telemachos. Die "},{de:"Familie",gr:"οικογένεια",pr:"i-ko-ghe-ni-a",mark:true},
      {de:" ist wieder "},{de:"vereint",gr:"ενωμένη",pr:"e-no-me-ni",mark:true},
      {de:". Das "},{de:"Königreich",gr:"βασίλειο",pr:"va-si-li-o",mark:true},
      {de:" hat wieder seinen rechtmäßigen "},{de:"König",gr:"βασιλιάς",pr:"va-si-lias",mark:true},{de:"!"}
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
      {side:"L", speaker:"Kellner", gr:"Τι γεύση θέλεις;",             pr:"Ti ghef-si the-lis?",             de:"Welche Sorte möchtest du?"},
      {side:"R", speaker:"Kind",    gr:"Σοκολάτα, παρακαλώ!",          pr:"So-ko-la-ta, pa-ra-ka-lo!",      de:"Schokolade, bitte!"},
      {side:"L", speaker:"Kellner", gr:"Ορίστε! Δύο ευρώ.",            pr:"O-ri-ste! Di-o ev-ro.",           de:"Bitte sehr! Zwei Euro."},
      {side:"R", speaker:"Kind",    gr:"Ευχαριστώ πολύ!",              pr:"Ef-cha-ri-sto po-li!",            de:"Vielen Dank!"}
    ],
    tip: "<b>Nuetzliche Wörter:</b> παρακαλώ (pa-ra-ka-lo) = bitte · ευχαριστώ (ef-cha-ri-sto) = danke · ορίστε (o-ri-ste) = bitte sehr"
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
  {de:"Das _____ fährt auf Schienen.",         grSatz:"Το τρένο πηγαίνει πάνω σε ράγες.",            answer:"Zug",      gr:"τρένο",        pr:"tre-no",        cat:"verkehr"},
  {de:"Das _____ fliegt hoch am Himmel.",       grSatz:"Το αεροπλάνο πετάει ψηλά στον ουρανό.",       answer:"Flugzeug", gr:"αεροπλάνο",    pr:"a-e-ro-pla-no", cat:"verkehr"},
  {de:"Ich bin sehr _____, ich habe Hunger.",   grSatz:"Είμαι πολύ πεινασμένος.",                     answer:"Hungrig",  gr:"πεινασμένος",  pr:"pi-nas-me-nos", cat:"gefuehle"},
  {de:"Es regnet, ich brauche einen Schirm.",   grSatz:"Βρέχει, χρειάζομαι ομπρέλα.",                 answer:"Regen",    gr:"βροχή",        pr:"vro-chi",       cat:"wetter"},
  {de:"Im Winter faellt weisser _____.",        grSatz:"Τον χειμώνα πέφτει άσπρο χιόνι.",             answer:"Schnee",   gr:"χιόνι",        pr:"chi-o-ni",      cat:"wetter"},
  {de:"Nach dem Wochenende kommt der _____.",   grSatz:"Μετά το Σαββατοκύριακο έρχεται η Δευτέρα.",   answer:"Montag",   gr:"Δευτέρα",      pr:"Def-te-ra",     cat:"wochentage"},
  {de:"Vor dem Samstag kommt der _____.",       grSatz:"Πριν το Σάββατο είναι η Παρασκευή.",          answer:"Freitag",  gr:"Παρασκευή",    pr:"Pa-ras-ke-vi",  cat:"wochentage"},
  {de:"Ich lese gern ein _____ vor dem Schlafen.", grSatz:"Διαβάζω ένα βιβλίο πριν κοιμηθώ.",        answer:"Buch",     gr:"βιβλίο",       pr:"vi-vli-o",      cat:"schule"},
  {de:"Wir wohnen in einem großen _____.",     grSatz:"Μένουμε σε ένα μεγάλο σπίτι.",               answer:"Haus",     gr:"σπίτι",        pr:"spi-ti",        cat:"zuhause"}
];
