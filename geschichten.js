// ============================================================
//  geschichten.js  –  Geschichten, Gespräche & Lückentexte
//  Hier kannst du neue Inhalte hinzufügen!
// ============================================================

var stories = [
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
  },
  {
    title: "Herkules und die Hydra",
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
    title: "Herkules und der Nemeische Löwe",
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
    title: "Ikarus und Daidalus",
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
    title: "Der alte Fischer",
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
