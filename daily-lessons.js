// Mini-leçons rotatives par date — une chaque jour
// Format : { title, hook, body, factoids: [3 punchlines à retenir] }
// La rotation se fait par jour de l'année % nombre de leçons

const DAILY_LESSONS = [
  {
    title: "Aujourd'hui, tu comprends les trous noirs",
    hook: "🕳️ Pas un trou. Pas vraiment noir. Mais terrifiant quand même.",
    body: "Un trou noir, c'est un objet si dense que même la lumière n'arrive plus à s'échapper. Imagine compresser le Soleil dans une bille de 6 km : ça donnerait un trou noir. Ce qu'on appelle l'« horizon des événements » est la frontière au-delà de laquelle tout retour est impossible. La 1re photo d'un trou noir date de 2019 (M87*).",
    factoids: [
      "Sagittarius A* est le trou noir au centre de notre galaxie (4 millions de fois la masse du Soleil)",
      "Einstein les a prédits dès 1915 avec sa relativité générale",
      "Stephen Hawking a montré qu'ils s'évaporent (très lentement) — c'est le rayonnement de Hawking",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends l'impressionnisme",
    hook: "🎨 Ils peignaient si vite que les critiques ont cru à des brouillons.",
    body: "L'impressionnisme naît à Paris en 1874. Monet, Renoir, Pissarro, Sisley peignent en plein air, vite, pour capter la lumière qui change. Le mot « impressionniste » vient d'une moquerie sur le tableau Impression, soleil levant de Monet. Ils refusent les contours nets et préfèrent les touches courtes.",
    factoids: [
      "Le Salon des Refusés (1863) a précédé le mouvement",
      "Monet a peint 250 fois ses Nymphéas",
      "Cézanne, considéré post-impressionniste, ouvrira la voie au cubisme",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends la Révolution française",
    hook: "🇫🇷 En 10 ans, la France passe de la monarchie absolue à l'Empire.",
    body: "Tout commence en 1789 avec les États généraux et la prise de la Bastille (14 juillet). La Déclaration des droits de l'homme est votée le 26 août. Louis XVI est guillotiné en 1793, suivi par la Terreur (Robespierre). Le coup d'État du 18 brumaire (1799) amène Bonaparte au pouvoir.",
    factoids: [
      "La Bastille ne contenait que 7 prisonniers le jour de la prise",
      "Le calendrier républicain a duré 12 ans (1793-1805)",
      "Marie-Antoinette a été guillotinée 9 mois après son mari",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends l'ADN",
    hook: "🧬 Une molécule en double hélice contient toute l'information du vivant.",
    body: "L'ADN (acide désoxyribonucléique) est une molécule en forme de double hélice, découverte en 1953 par Watson et Crick (avec les images cruciales de Rosalind Franklin). 4 lettres seulement : A, T, G, C, qui s'apparient deux à deux. Le génome humain compte 3 milliards de paires de bases.",
    factoids: [
      "Si on déroulait l'ADN d'une seule cellule, il ferait 2 mètres de long",
      "On partage 50% de notre ADN avec une banane (gènes basiques de la vie)",
      "Le projet du génome humain a été achevé en 2003",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends le Big Bang",
    hook: "💥 L'univers a 13,8 milliards d'années — et il grandit toujours.",
    body: "Le Big Bang n'est PAS une explosion : c'est une expansion. Tout l'univers tenait dans un point infiniment dense, puis a commencé à s'étendre il y a 13,8 milliards d'années. C'est l'astrophysicien Georges Lemaître (un prêtre belge) qui a proposé l'idée en 1927, confirmée par Hubble.",
    factoids: [
      "Le rayonnement fossile à 2,7 K est le « bruit » du Big Bang",
      "Edwin Hubble a montré en 1929 que les galaxies s'éloignent",
      "L'expansion s'accélère à cause de l'énergie noire (Nobel 2011)",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends Picasso",
    hook: "🐂 Il a inventé le cubisme et a peint pendant 80 ans sans s'arrêter.",
    body: "Pablo Picasso (1881-1973) est espagnol mais a passé sa vie en France. Il a traversé plusieurs périodes : bleue, rose, africaine, cubiste (avec Braque, vers 1907), classique, surréaliste. Son chef-d'œuvre : Guernica (1937), peint après le bombardement de la ville basque.",
    factoids: [
      "Il aurait produit ~50 000 œuvres dans sa vie",
      "Son nom complet fait 23 mots (tradition espagnole)",
      "Les Demoiselles d'Avignon (1907) marque la naissance du cubisme",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends la Ve République",
    hook: "🏛️ Née en 1958 d'une crise. Toujours en vigueur aujourd'hui.",
    body: "La Ve République est créée en 1958 par De Gaulle en pleine crise algérienne. Spécificité : un président très puissant, élu directement depuis 1962. Le quinquennat remplace le septennat en 2000. Aujourd'hui, Emmanuel Macron est le 8e président de la Ve.",
    factoids: [
      "L'article 49.3 permet de faire passer un texte sans vote",
      "L'article 16 donne les pleins pouvoirs au président en cas de crise",
      "Charles de Gaulle a été le 1er président, élu en 1958",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends les océans",
    hook: "🌊 71% de la Terre est sous l'eau. Et on connaît mieux Mars.",
    body: "5 océans : Pacifique (le plus vaste), Atlantique, Indien, Arctique, Austral. Le point le plus profond est la fosse des Mariannes (~11 000 m). Les océans absorbent 30% du CO₂ humain et produisent 50% de l'oxygène (via le phytoplancton).",
    factoids: [
      "Seulement 5% des océans sont cartographiés en haute résolution",
      "Le Pacifique fait 165 millions de km², plus grand que tous les continents réunis",
      "Le Gulf Stream réchauffe l'Europe — sans lui, Paris aurait le climat de Montréal",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends Shakespeare",
    hook: "📜 Il a inventé 1700 mots en anglais. Personne ne sait à quoi il ressemblait.",
    body: "William Shakespeare (1564-1616) est l'auteur de 39 pièces et 154 sonnets. Hamlet, Roméo et Juliette, Macbeth, Le Roi Lear : tous écrits en moins de 25 ans. Il a inventé des mots toujours utilisés (lonely, eyeball, bedroom). On ne possède aucun portrait certifié de lui.",
    factoids: [
      "Hamlet a 4 042 lignes, c'est son plus long texte",
      "Il est mort le même jour que Cervantès (23 avril 1616)",
      "Le Globe Theatre, son théâtre, a brûlé en 1613 puis a été reconstruit",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends Mozart",
    hook: "🎼 Il composait à 5 ans. Mort à 35. 626 œuvres derrière lui.",
    body: "Wolfgang Amadeus Mozart (1756-1791) est né à Salzbourg. Enfant prodige, il joue devant les cours d'Europe à 6 ans. Il maîtrise opéra, symphonie, concerto. Ses chefs-d'œuvre : Les Noces de Figaro, Don Giovanni, La Flûte enchantée, le Requiem (inachevé à sa mort).",
    factoids: [
      "Il aurait composé sa 1re œuvre à 5 ans (Menuet K1)",
      "Le Requiem a été commandé par un mystérieux comte (Walsegg)",
      "On ne sait pas où il est enterré exactement — fosse commune à Vienne",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends les volcans",
    hook: "🌋 1500 volcans actifs sur Terre. Et on en découvre toujours.",
    body: "Un volcan, c'est un point où le magma de la Terre remonte à la surface. Trois types principaux : effusif (laves coulantes, type Hawaii), explosif (type Vésuve, Pinatubo), et fissural (Islande). L'échelle d'explosivité va de 0 à 8 (l'éruption du Toba il y a 74 000 ans = 8).",
    factoids: [
      "Le Stromboli est en éruption permanente depuis 2 000 ans",
      "L'éruption du Krakatoa (1883) a été entendue à 4 800 km",
      "Le Yellowstone est un super-volcan : sa caldeira fait 70 km de long",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends Napoléon",
    hook: "🗡️ De Corse à empereur. De empereur à Sainte-Hélène. En 20 ans.",
    body: "Napoléon Bonaparte (1769-1821) est né en Corse. Général brillant, il prend le pouvoir par le coup du 18 brumaire (1799), se sacre empereur en 1804. Il refait l'Europe avec ses victoires (Austerlitz, Iéna), puis chute après la Russie (1812) et Waterloo (1815). Exil à Sainte-Hélène jusqu'à sa mort.",
    factoids: [
      "Il faisait 1m68, taille moyenne pour l'époque (le « petit caporal » est un mythe)",
      "Le Code civil de 1804 régit toujours le droit français",
      "Il a vécu seulement 100 jours après son retour de l'île d'Elbe",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends l'évolution",
    hook: "🐒 Toi, le chimpanzé et la banane partagez un ancêtre commun.",
    body: "Charles Darwin publie L'Origine des espèces en 1859. L'idée : les espèces évoluent par sélection naturelle (les mieux adaptés survivent et se reproduisent plus). Pas de but, pas de plan : juste du temps et des mutations aléatoires. La preuve la plus claire : l'ADN partagé entre toutes les espèces.",
    factoids: [
      "L'humain et le chimpanzé partagent ~98,8% de leur ADN",
      "Le mot « évolution » n'apparaît qu'à la fin de la 1re édition de Darwin",
      "La théorie a été co-formulée par Alfred Russel Wallace (oublié injustement)",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends la Guerre froide",
    hook: "❄️ 45 ans de tension nucléaire entre USA et URSS, sans guerre directe.",
    body: "Après 1945, deux blocs s'affrontent sans se taper dessus directement : USA (capitaliste) vs URSS (communiste). Berlin coupé en deux par un mur (1961-1989). Course à l'espace, course aux armes nucléaires, guerres « chaudes » par procuration (Corée, Vietnam, Afghanistan). Fin officielle : chute de l'URSS en 1991.",
    factoids: [
      "Crise des missiles de Cuba (1962) : 13 jours au bord de la guerre nucléaire",
      "Le Téléphone rouge entre Maison Blanche et Kremlin existe depuis 1963",
      "Le mur de Berlin est tombé le 9 novembre 1989 — par accident administratif !",
    ],
  },
  {
    title: "Aujourd'hui, tu comprends le cerveau humain",
    hook: "🧠 86 milliards de neurones. 20 watts. Plus efficace qu'un supercalculateur.",
    body: "Le cerveau humain pèse ~1,3 kg (2% du corps) mais consomme 20% de l'énergie. Il est divisé en 4 lobes : frontal (décision), pariétal (sensations), temporal (mémoire), occipital (vision). Le cervelet gère l'équilibre. Les neurones communiquent via des synapses (~100 trillions au total).",
    factoids: [
      "On utilise bien 100% de notre cerveau (le mythe des 10% est faux)",
      "Le cerveau finit de se développer vers 25 ans",
      "Les neurones du cervelet représentent 50% du total mais 10% du volume",
    ],
  },
];

// Get the lesson for today (rotates daily)
function getTodayLesson() {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((d - start) / 86400000);
  return DAILY_LESSONS[dayOfYear % DAILY_LESSONS.length];
}
