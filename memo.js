// memo.js — Vrais moyens mnémotechniques, pas du bullshit auto-généré
const MEMO = (function () {
  // ONLY real, useful mnemonics. No "repeat 3 times" garbage.
  // Each key = lowercase normalized answer or keyword from the question
  const TIPS = {
    // === CAPITALES PIÈGES ===
    "canberra": "🧠 Australie ≠ Sydney → Canberra a été CONSTRUITE exprès entre Sydney et Melbourne pour les départager. Can-BERRA = « can » (boîte) + « berra » → une boîte perdue au milieu de nulle part",
    "brasilia": "🧠 Brésil ≠ Rio → Brasilia a été construite en 4 ans dans la jungle en 1960. Vue du ciel, la ville a la forme d'un avion ✈️",
    "ankara": "🧠 Turquie ≠ Istanbul → Atatürk a choisi Ankara car c'est au CENTRE du pays (protection). Istanbul = la vitrine, Ankara = le bureau",
    "naypyidaw": "🧠 Birmanie ≠ Rangoon → Naypyidaw = « cité royale ». Construite en secret par la junte militaire en 2005. Ville fantôme avec des autoroutes à 20 voies vides",
    "ottawa": "🧠 Canada ≠ Toronto/Montréal → La reine Victoria a choisi Ottawa car c'est pile à la frontière anglophone/francophone. O comme compromis",
    "wellington": "🧠 NZ ≠ Auckland → Wellington est tout au sud, la ville la plus ventée du monde 💨. Well = bien, ington = ton bien-être souffle au vent",
    "berne": "🧠 Suisse ≠ Zurich/Genève → Berne vient de « Bär » (ours en allemand). La ville a une fosse aux ours ! 🐻 B comme Berne, B comme Bear",
    "abuja": "🧠 Nigeria ≠ Lagos → Abuja est au CENTRE du pays, construite dans les années 80. A-BU-JA : Au But, JAmais Lagos",
    "pretoria": "🧠 Afrique du Sud a 3 capitales ! Pretoria (admin), Le Cap (législatif), Bloemfontein (judiciaire). PRE-toria = la PREMière des trois",
    "sri jayawardenapura kotte": "🧠 Sri Lanka ≠ Colombo → Le nom le plus long d'une capitale au monde. Jayawardena = un ancien président. Colombo est juste la plus grande ville",

    // === FLEUVES ===
    "la volga": "🧠 Plus long fleuve d'Europe : VOLGA (3 530 km). Moyen mémo : la VOiture LA plus longue roule en Russie",
    "le nil": "🧠 Plus long d'Afrique ET du monde (6 650 km). N-I-L = Naviguer Infiniment Loin",
    "le yangtse": "🧠 Plus long d'Asie (6 300 km). Yang = soleil en chinois. Le Yangtsé coule d'ouest en est comme le soleil",
    "le danube": "🧠 Traverse 10 pays ! Record mondial. DA-NU-BE → Dix À Naviguer, Un Beau Experience",

    // === CHEFS-LIEUX PIÈGES ===
    "mende": "🧠 Lozère → Mende. La Lozère est le département le moins peuplé. MENDE = M'ENvoie Dans l'Éloignement",
    "gueret": "🧠 Creuse → Guéret. La Creuse est « creuse » (vide) et GUÉRET = un champ labouré (guéret). Sol vide = Creuse",
    "vesoul": "🧠 Haute-Saône → Vesoul. Jacques Brel chante « Vesoul » ! 🎵 V'là t'y pas qu'elle me dit « faudrait aller à Vesoul »",
    "privas": "🧠 Ardèche → Privas. Plus petite préfecture de France (~8 000 hab). PRIVAS = PRIVée de population, A peine quelques habitants en Ardèche",
    "foix": "🧠 Ariège → Foix. « Il était une FOIS un marchand de FOIE dans la ville de FOIX » — les 3 homophones en une phrase",
    "tulle": "🧠 Corrèze → Tulle. Le tissu tulle vient de cette ville ! La dentelle de Tulle était célèbre au XVIIIe",
    "aurillac": "🧠 Cantal → Aurillac. Gerbert d'Aurillac est devenu le pape Sylvestre II (an 1000). AURILLAC = AU pays des oreilles gelées (ville la plus froide de France)",
    "laval": "🧠 Mayenne → Laval. LA-VAL = la vallée. Et c'est aussi le nom de Pierre Laval (Vichy). La Mayenne rime avec peine, Laval rime avec mal",
    "mont-de-marsan": "🧠 Landes → Mont-de-Marsan. Un MONT dans les LANDES (plates !), c'est absurde → facile à retenir. Les Landes sont plates mais leur capitale a « Mont » dedans",

    // === ANIMAUX ===
    "choupisson": "🧠 Bébé hérisson = CHOU + hériSSON → un petit chou qui pique !",
    "marcassin": "🧠 Bébé sanglier = MARC + ASSIN → ton pote Marc fait du bruit comme un petit cochon sauvage",
    "levraut": "🧠 Bébé lièvre = LIÈVRE + HAUT → il saute haut dès la naissance, le levraut court déjà à 1 jour",
    "le vagissement": "🧠 Cri du crocodile = VAGISSEMENT, comme les pleurs d'un BÉBÉ. Le croco pleure des larmes de crocodile et vagit comme un nourrisson",
    "le brame": "🧠 Cri du cerf = BRAME. En automne, le cerf BRAME pour attirer les femelles. « Ça me fait bramer » = ça me fait crier de frustration",
    "une flamboyance": "🧠 Groupe de flamants roses = FLAMBOYANCE. FLAMants → FLAMboyance. Les flamants sont FLAMboyants (roses vifs) !",
    "un assassinat": "🧠 Groupe de corbeaux = un ASSASSINAT (murder of crows en anglais aussi). Les corbeaux sont sinistres → assassinat",
    "un parlement": "🧠 Groupe de hiboux = un PARLEMENT. Les hiboux sont sages et parlent la nuit → ils « parlementent »",

    // === CORPS HUMAIN ===
    "os hyoide": "🧠 Seul os qui ne touche aucun autre = l'os HYOÏDE (dans la gorge). HY-oïde = HYper Isolé. Il « flotte » maintenu par des muscles",
    "femur": "🧠 Plus long os du corps = FÉMUR. Il fait ~1/4 de ta taille. FÉ-MUR = si Fort qu'il est un MUR",
    "etrier": "🧠 Plus petit os = l'ÉTRIER (3mm, dans l'oreille). Imagine un cavalier miniature qui chevauche ton tympan 🐴",

    // === GASTRONOMIE ===
    "comté": "🧠 Fromage AOP le plus produit en France. COMTÉ = il COMPTE le plus dans la production. Vient du Jura, trous = 0 (contrairement à l'emmental)",
    "roquefort": "🧠 Seul fromage au lait de BREBIS parmi les bleus célèbres. ROQUE-FORT = il est FORT en goût et vient des ROQUES (caves) de l'Aveyron",
    "beaufort": "🧠 « Le prince des Gruyères » = BEAUFORT. BEAU + FORT = c'est un BEAU fromage bien FORT de Savoie. Talon concave = creux (unique !)",
    "botrytis cinerea": "🧠 Champignon du Sauternes = BOTRYTIS CINEREA (pourriture noble). BOT-rytis → le BOT (robot) qui fait pourrir le raisin pour le rendre noble 🍇",
    "castelnaudary": "🧠 Cassoulet « pur » = CASTELNAUDARY. CASTEL = château, c'est le CHÂTEAU du cassoulet originel (sans saucisse, juste les haricots)",

    // === INVENTIONS ===
    "laennec": "🧠 Inventeur du stéthoscope = LAENNEC. L'A-ENEC(outé) → il a ÉCOUTÉ le premier cœur avec un cahier roulé par pudeur",
    "joseph meister": "🧠 1er vacciné contre la rage = JOSEPH MEISTER, 9 ans. MEISTER = maître en allemand. Le petit maître de la vaccination",
    "freres montgolfier": "🧠 1er vol : un mouton 🐑, un coq 🐓, un canard 🦆 à Versailles. MOUton COQ CANard = MOU-CO-CAN → ils MOntent au CIel CANon !",

    // === SCIENCES ===
    "effet mpemba": "🧠 Eau chaude gèle plus vite = effet MPEMBA. Un ado tanzanien (Erasto Mpemba) l'a découvert en faisant des glaces à l'école en 1963 !",

    // === ÉTYMOLOGIE ===
    "salarium": "🧠 Salaire vient du latin SALARIUM (ration de SEL). Les légionnaires romains étaient payés en sel. « Pas un sou vaillant » → le sel = la monnaie",
    "croate": "🧠 Cravate vient de CROATE. Les cavaliers croates portaient un foulard noué → Louis XIV a copié → « à la croate » → cravate",
    "bikini": "🧠 Bikini vient de l'atoll de BIKINI (essais nucléaires 1946). Louis Réard voulait un effet « explosif » 💣 sur la plage",
    "al-khwarizmi": "🧠 Algorithme vient d'AL-KHWARIZMI, mathématicien perse. Et algèbre vient de son livre « al-JABR » = la remise en place des os (comme un rebouteux des maths)",
    "barbaros": "🧠 Barbare vient du grec BARBAROS = « celui qui fait bar-bar » (bla-bla incompréhensible). Les Grecs imitaient les langues étrangères",

    // === EXPRESSIONS ===
    "baudelaire": "🧠 « Avoir le cafard » = BAUDELAIRE (Les Fleurs du Mal). Le cafard est un insecte NOIR qui ronge de l'intérieur, comme la mélancolie",
    "tomber en pames": "🧠 « Tomber dans les pommes » ≠ des vraies pommes → vient de « tomber en PÂMES » (pâmoison = évanouissement). Les pommes n'ont rien à voir !",
    "oll korrect": "🧠 OK vient de « OLL KORRECT » = écriture humoristique de « All Correct » dans les journaux américains de 1839. C'est une blague orthographique !",

    // === GÉOGRAPHIE ===
    "fosse des mariannes": "🧠 Point le plus profond = Fosse des MARIANNES (10 994 m). Si on y mettait l'Everest, il resterait 2 km d'eau ! MARIANNE plonge au fond de la Terre",
    "le lesotho": "🧠 Pays-enclave en Afrique du Sud = LESOTHO. LE-SO-THO → « Le SOl est TOtalement entouré ». Comme un trou dans un donut 🍩",

    // === VRAIS NOMS ===
    "francois-marie arouet": "🧠 Voltaire = François-Marie AROUET. VOLTAIRE est (peut-être) l'anagramme de AROUET L.J. (le jeune) en latin",
    "jean-baptiste poquelin": "🧠 Molière = Jean-Baptiste POQUELIN. POQUE-LIN → il POQUait (se moquait) des gens par ses LIGNes de théâtre",
    "edith giovanna gassion": "🧠 Piaf = Édith GASSION. PIAF = moineau en argot. Son surnom car elle était toute petite (1m47) comme un petit oiseau 🐦",
    "michel colucci": "🧠 Coluche = Michel COLUCCI. D'origine italienne → COLUCCI → Coluche. Il a créé les Restos du Cœur ET s'est présenté à la présidentielle",
    "gordon sumner": "🧠 Sting = Gordon SUMNER. Surnommé STING (= piqûre) car il portait un pull rayé jaune et noir comme une guêpe 🐝",
    "paul hewson": "🧠 Bono = Paul HEWSON. BONO VOX = « bonne voix » en pseudo-latin, nom d'un magasin d'appareils auditifs à Dublin 👂",
    "reginald dwight": "🧠 Elton John = Reginald DWIGHT. Il a pris ELTON (du saxophoniste Elton Dean) + JOHN (du chanteur Long John Baldry). Un nom composé de ses héros",
    "thomas bangalter": "🧠 Daft Punk = Thomas BANGALTER + Guy-Manuel de HOMEM-CHRISTO. Le nom vient d'une critique qui disait que leur musique était du « daft punky trash » 🗑️",

    // === VINS ===
    "jeroboam": "🧠 Jéroboam = 4 bouteilles (3L). Les noms des grandes bouteilles sont des rois bibliques : Jéroboam → Mathusalem (8) → Nabuchodonosor (20). Plus le roi est grand, plus la bouteille est grosse",
    "nabuchodonosor": "🧠 Nabuchodonosor = 20 bouteilles (15L). Le roi qui a détruit Jérusalem était ÉNORME → la plus grosse bouteille porte son nom",
    "magnum": "🧠 Magnum = 2 bouteilles. MAGNUM = grand en latin. Comme le pistolet Magnum ou la glace Magnum → tout est DOUBLE taille",

    // === CINÉMA ===
    "sirop de chocolat": "🧠 Faux sang de Psychose (Hitchcock) = sirop de CHOCOLAT Hershey's. Le film était en noir et blanc → le chocolat rendait mieux que du vrai rouge !",
    "james cameron": "🧠 Le dessin de Rose nue dans Titanic a été fait par James CAMERON lui-même. Les mains qu'on voit dessiner = les mains du réalisateur, pas de DiCaprio ✏️",
    "walt disney": "🧠 Record d'Oscars individuels = WALT DISNEY (22 Oscars). C'est plus que n'importe quel acteur ou réalisateur. Un Oscar tous les 2 ans en moyenne !",

    // === MUSIQUE ===
    "cabernet sauvignon": "🧠 Cépage le plus planté AU MONDE = CABERNET SAUVIGNON. Mais en France c'est le MERLOT qui domine. Cab-Sauv = le roi du monde, Merlot = le roi de France",
    "pinot noir": "🧠 Roi de la Bourgogne = PINOT NOIR. PINOT → PINe (pomme de pin, forme de la grappe). La Bourgogne = terre noble, Pinot = raisin noble",

    // === INSTITUTIONS ===
    "49.3": "🧠 Article 49.3 = le gouvernement fait passer une loi SANS vote de l'Assemblée. 49.3 → « Quarante-neuf TROIS » → on force le passage en TROIS secondes",
    "577": "🧠 577 députés à l'Assemblée nationale. 5+7+7 = 19. Ou retiens : il faut 289 voix pour la majorité absolue (577÷2+1)",
    "348": "🧠 348 sénateurs au Sénat. 3-4-8 → le Sénat est le « 3e pouvoir, élu au 4e degré, pendant 8... non 6 ans ». En vrai retiens juste : ~350, moitié moins que les députés",
  };

  function generateMemo(question, answer) {
    if (!answer) return null;
    const a = answer.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const q = (question || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Check predefined tips — match on answer or question keywords
    for (const key in TIPS) {
      const normKey = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      if (a.includes(normKey) || q.includes(normKey)) return TIPS[key];
    }

    // NO auto-generated garbage. If there's no real tip, return null.
    return null;
  }

  function showTip(elementId, question, answer) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const memo = generateMemo(question, answer);
    if (memo) {
      el.textContent = memo;
      el.style.display = "";
    } else {
      el.textContent = "";
      el.style.display = "none";
    }
  }

  function hideTip(elementId) {
    const el = document.getElementById(elementId);
    if (el) { el.textContent = ""; el.style.display = "none"; }
  }

  return { generateMemo, showTip, hideTip };
})();
