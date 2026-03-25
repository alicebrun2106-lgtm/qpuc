// Programme 12 Coups / QPUC - Fun facts & culture G large
const PROGRAMME_WEEKS = [
  {
    week: 1,
    title: "Les Fondations",
    description: "Culture G large : fun facts, détails insolites, tout ce qu'on te demande aux 12 Coups",
    days: [
      // ===================== JOUR 1 : ANIMAUX & NATURE =====================
      {
        day: 1, label: "Lundi", theme: "Animaux & Nature insolites", icon: "🦎",
        objectif: "Connaître les fun facts animaux que personne ne sait",
        tasks: [
          {
            id: "w1d1t0", type: "lecture",
            title: "50 faits incroyables sur les animaux",
            subtitle: "Vidéo YouTube — Les animaux les plus fous de la planète",
            url: "https://www.youtube.com/watch?v=gKeBMgTEMOc",
            duration: "15 min"
          },
          {
            id: "w1d1t1", type: "fiche",
            title: "Noms & cris des animaux",
            items: [
              { fact: "Le bébé du hérisson s'appelle le choupisson", detail: "Celui de la chouette est le poussin, celui du lièvre le levraut, celui du sanglier le marcassin." },
              { fact: "Le cri du crocodile est le vagissement", detail: "Celui du corbeau est le croassement, celui de la grenouille le coassement (facile à confondre !)." },
              { fact: "Le cri du rhinocéros s'appelle le barrissement", detail: "Comme l'éléphant ! Le cerf, lui, brame. Le chameau blatère. La hyène ricane." },
              { fact: "Un groupe de flamants roses s'appelle une flamboyance", detail: "Un groupe de corbeaux : un assassinat. Un groupe de hiboux : un parlement." },
              { fact: "Le mâle de l'abeille s'appelle le faux-bourdon", detail: "Il ne pique pas (pas de dard) et son seul rôle est la reproduction. Il meurt juste après." }
            ],
            flashcards: [
              { q: "Comment s'appelle le bébé du hérisson ?", r: "Le choupisson" },
              { q: "Comment s'appelle le bébé du sanglier ?", r: "Le marcassin" },
              { q: "Comment s'appelle le bébé du lièvre ?", r: "Le levraut" },
              { q: "Comment appelle-t-on le cri du crocodile ?", r: "Le vagissement" },
              { q: "Comment appelle-t-on le cri du cerf ?", r: "Le brame" },
              { q: "Comment appelle-t-on le cri du chameau ?", r: "Le blatèrement" },
              { q: "Quelle est la différence entre croasser et coasser ?", r: "Le corbeau croasse, la grenouille coasse" },
              { q: "Comment appelle-t-on un groupe de flamants roses ?", r: "Une flamboyance" },
              { q: "Comment appelle-t-on un groupe de corbeaux ?", r: "Un assassinat" },
              { q: "Comment appelle-t-on un groupe de hiboux ?", r: "Un parlement" },
              { q: "Comment s'appelle le mâle de l'abeille ?", r: "Le faux-bourdon" },
              { q: "Pourquoi le faux-bourdon ne pique-t-il pas ?", r: "Il n'a pas de dard" },
              { q: "Comment appelle-t-on le cri du rhinocéros ?", r: "Le barrissement" },
              { q: "Comment appelle-t-on le cri de la hyène ?", r: "Le ricanement" }
            ]
          },
          {
            id: "w1d1t2", type: "quiz",
            title: "Mini-quiz : Noms & cris",
            questions: [
              { q: "Comment appelle-t-on le bébé du sanglier ?", r: "Le marcassin", hint: "Ça commence par M" },
              { q: "Quel animal brame ?", r: "Le cerf", hint: "Surtout pendant la saison des amours en forêt" },
              { q: "Comment appelle-t-on un groupe de corbeaux ?", r: "Un assassinat", hint: "C'est assez sinistre comme nom !" },
              { q: "Quel est le cri du crocodile ?", r: "Le vagissement", hint: "Comme les pleurs d'un bébé" }
            ]
          },
          {
            id: "w1d1t3", type: "fiche",
            title: "Records & bizarreries animales",
            items: [
              { fact: "Le cœur de la crevette est dans sa tête", detail: "Et le cœur de la baleine bleue pèse 600 kg — un enfant pourrait ramper dans ses artères." },
              { fact: "Les empreintes digitales du koala sont quasi identiques à celles de l'homme", detail: "Au point que des empreintes de koala ont déjà été confondues avec des empreintes humaines sur des scènes de crime en Australie." },
              { fact: "Un escargot peut dormir 3 ans d'affilée", detail: "Il entre en estivation quand il fait trop sec. Le record de sommeil animal revient au loir : jusqu'à 11 mois par an." },
              { fact: "Les yeux de l'autruche sont plus gros que son cerveau", detail: "Chaque œil fait environ 5 cm de diamètre. C'est le plus gros œil de tous les animaux terrestres." },
              { fact: "Le homard a du sang bleu", detail: "Son sang contient de l'hémocyanine (à base de cuivre) au lieu de l'hémoglobine (à base de fer). Les pieuvres aussi ont le sang bleu." },
              { fact: "La langue du caméléon est 1,5 fois plus longue que son corps", detail: "Elle se déploie en 0,07 seconde pour attraper un insecte. C'est plus rapide qu'un clignement d'œil." }
            ],
            flashcards: [
              { q: "Où se trouve le cœur de la crevette ?", r: "Dans sa tête" },
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "Environ 600 kg" },
              { q: "Quel animal a des empreintes digitales quasi identiques à l'homme ?", r: "Le koala" },
              { q: "Combien de temps un escargot peut-il dormir ?", r: "Jusqu'à 3 ans" },
              { q: "Quel animal peut dormir jusqu'à 11 mois par an ?", r: "Le loir" },
              { q: "Qu'est-ce qui est plus gros que le cerveau de l'autruche ?", r: "Ses yeux" },
              { q: "Pourquoi le homard a-t-il le sang bleu ?", r: "Son sang contient de l'hémocyanine (cuivre) au lieu de l'hémoglobine (fer)" },
              { q: "Quel autre animal marin a aussi le sang bleu ?", r: "La pieuvre" },
              { q: "Combien de fois la langue du caméléon est-elle plus longue que son corps ?", r: "1,5 fois" },
              { q: "En combien de temps la langue du caméléon se déploie-t-elle ?", r: "0,07 seconde" },
              { q: "Quel est le diamètre de l'œil de l'autruche ?", r: "Environ 5 cm" },
              { q: "Comment s'appelle le repos prolongé de l'escargot quand il fait sec ?", r: "L'estivation" },
              { q: "Quelle molécule donne sa couleur rouge au sang humain ?", r: "L'hémoglobine (à base de fer)" },
              { q: "Quelle molécule donne sa couleur bleue au sang du homard ?", r: "L'hémocyanine (à base de cuivre)" },
              { q: "Quel est le plus gros œil de tous les animaux terrestres ?", r: "Celui de l'autruche" }
            ]
          },
          {
            id: "w1d1t4", type: "quiz",
            title: "Mini-quiz : Records animaux",
            questions: [
              { q: "Quel animal a le sang bleu ?", r: "Le homard (et la pieuvre)", hint: "Crustacé qu'on mange au restaurant" },
              { q: "Où se trouve le cœur de la crevette ?", r: "Dans sa tête", hint: "Pas dans le thorax comme nous !" },
              { q: "Quel animal a des empreintes confondues avec celles des humains ?", r: "Le koala", hint: "Animal australien amateur d'eucalyptus" },
              { q: "Combien de temps un escargot peut-il dormir ?", r: "3 ans", hint: "Quand il fait trop sec dehors" }
            ]
          },
          {
            id: "w1d1t5", type: "lecture",
            title: "Records incroyables du monde animal",
            subtitle: "Vidéo YouTube — Les animaux les plus extrêmes",
            url: "https://www.youtube.com/watch?v=4MqhHEMWFfo",
            duration: "12 min"
          },
          {
            id: "w1d1t6", type: "fiche",
            title: "Animaux & expressions françaises",
            items: [
              { fact: "« Avoir une mémoire d'éléphant » — Les éléphants se souviennent vraiment", detail: "Ils reconnaissent des congénères après 20 ans de séparation. Ils visitent aussi les os de leurs morts (comportement de deuil)." },
              { fact: "« Myope comme une taupe » — FAUX ! La taupe voit un peu", detail: "Elle distingue la lumière mais sa vision est très faible. Elle compense avec un odorat et un toucher ultra-développés." },
              { fact: "« Pleurer des larmes de crocodile » — Le croco pleure vraiment en mangeant", detail: "Ses glandes lacrymales s'activent quand il ouvre grand la mâchoire. C'est mécanique, pas émotionnel." },
              { fact: "« Fier comme un paon » — Seul le mâle fait la roue", detail: "La femelle s'appelle la paonne. Les plumes de la « queue » sont en fait des plumes du dos (les couvertures sus-caudales)." },
              { fact: "« Une hirondelle ne fait pas le printemps » — Elles parcourent 10 000 km", detail: "Les hirondelles migrent d'Afrique subsaharienne vers l'Europe chaque printemps. Elles dorment même en volant !" }
            ],
            flashcards: [
              { q: "Combien d'années un éléphant peut-il se souvenir d'un congénère ?", r: "Plus de 20 ans" },
              { q: "Vrai ou faux : la taupe est totalement aveugle ?", r: "Faux — elle distingue la lumière" },
              { q: "Pourquoi le crocodile pleure-t-il en mangeant ?", r: "Ses glandes lacrymales s'activent quand il ouvre la mâchoire (c'est mécanique)" },
              { q: "Comment s'appelle la femelle du paon ?", r: "La paonne" },
              { q: "Les plumes de la roue du paon viennent de quelle partie du corps ?", r: "Du dos (couvertures sus-caudales), pas de la queue" },
              { q: "Combien de km les hirondelles parcourent-elles pour migrer ?", r: "Environ 10 000 km" },
              { q: "D'où viennent les hirondelles quand elles arrivent en Europe ?", r: "D'Afrique subsaharienne" },
              { q: "Quel sens compense la mauvaise vue de la taupe ?", r: "L'odorat et le toucher" },
              { q: "Les éléphants visitent-ils les restes de leurs morts ?", r: "Oui — ils ont un comportement de deuil" },
              { q: "Vrai ou faux : les hirondelles peuvent dormir en volant ?", r: "Vrai" }
            ]
          },
          {
            id: "w1d1t7", type: "quiz",
            title: "Quiz final : Animaux & Nature",
            questions: [
              { q: "Comment s'appelle le bébé du hérisson ?", r: "Le choupisson" },
              { q: "Quel animal a le sang bleu à cause du cuivre ?", r: "Le homard" },
              { q: "Comment appelle-t-on un groupe de flamants roses ?", r: "Une flamboyance" },
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "600 kg" },
              { q: "Quelle est la particularité des empreintes du koala ?", r: "Elles sont quasi identiques à celles de l'homme" },
              { q: "La femelle du paon s'appelle... ?", r: "La paonne" }
            ]
          }
        ]
      },

      // ===================== JOUR 2 : CORPS HUMAIN & SCIENCES ÉTONNANTES =====================
      {
        day: 2, label: "Mardi", theme: "Corps humain & Sciences", icon: "🧬",
        objectif: "Fun facts sur le corps et la science qu'on ignore",
        tasks: [
          {
            id: "w1d2t0", type: "lecture",
            title: "30 choses que vous ne savez pas sur votre corps",
            subtitle: "Vidéo YouTube — Faits incroyables sur le corps humain",
            url: "https://www.youtube.com/watch?v=B-FLZl9PnHM",
            duration: "15 min"
          },
          {
            id: "w1d2t1", type: "fiche",
            title: "Le corps humain en chiffres fous",
            items: [
              { fact: "Le corps humain contient assez de fer pour fabriquer un clou de 7 cm", detail: "Environ 3 à 4 grammes de fer dans le corps. Le fer est dans l'hémoglobine du sang." },
              { fact: "L'estomac se renouvelle entièrement tous les 3-4 jours", detail: "Sans ce renouvellement, l'acide chlorhydrique (pH 1-2) digérerait l'estomac lui-même." },
              { fact: "Un humain produit 25 000 litres de salive dans sa vie", detail: "Assez pour remplir deux piscines. La salive contient des antidouleurs 6 fois plus puissants que la morphine (opiorphine)." },
              { fact: "Les os sont 4 fois plus résistants que le béton", detail: "À poids égal ! Le fémur peut supporter une charge de plus d'une tonne avant de se briser." },
              { fact: "Le nez humain peut détecter plus de 1 000 milliards d'odeurs", detail: "Bien plus que les 10 000 qu'on croyait avant. Les femmes ont un odorat plus fin que les hommes." },
              { fact: "On naît avec environ 300 os, mais adulte on n'en a plus que 206", detail: "Beaucoup d'os fusionnent en grandissant, surtout ceux du crâne et de la colonne vertébrale." }
            ],
            flashcards: [
              { q: "Combien de fer le corps humain contient-il ?", r: "3 à 4 grammes (assez pour un clou de 7 cm)" },
              { q: "Tous les combien l'estomac se renouvelle-t-il ?", r: "Tous les 3-4 jours" },
              { q: "Quel est le pH de l'acide de l'estomac ?", r: "pH 1-2 (très acide)" },
              { q: "Combien de litres de salive produit-on dans une vie ?", r: "25 000 litres" },
              { q: "Comment s'appelle l'antidouleur naturel dans la salive ?", r: "L'opiorphine" },
              { q: "Combien de fois les os sont-ils plus résistants que le béton ?", r: "4 fois (à poids égal)" },
              { q: "Quelle charge le fémur peut-il supporter ?", r: "Plus d'une tonne" },
              { q: "Combien d'odeurs le nez humain peut-il détecter ?", r: "Plus de 1 000 milliards" },
              { q: "Combien d'os a un bébé à la naissance ?", r: "Environ 300" },
              { q: "Combien d'os a un adulte ?", r: "206" },
              { q: "Pourquoi a-t-on moins d'os adulte qu'à la naissance ?", r: "Beaucoup d'os fusionnent en grandissant" },
              { q: "Qui a un meilleur odorat : les hommes ou les femmes ?", r: "Les femmes" },
              { q: "Quel os est le plus long et le plus solide du corps ?", r: "Le fémur" },
              { q: "Quel acide se trouve dans l'estomac ?", r: "L'acide chlorhydrique" }
            ]
          },
          {
            id: "w1d2t2", type: "quiz",
            title: "Mini-quiz : Corps humain",
            questions: [
              { q: "Combien d'os a un bébé à la naissance ?", r: "300 (206 chez l'adulte)", hint: "Beaucoup fusionnent en grandissant" },
              { q: "Combien de litres de salive produit-on dans sa vie ?", r: "25 000 litres", hint: "De quoi remplir deux piscines" },
              { q: "Quel est le pH de l'acide de l'estomac ?", r: "1 à 2", hint: "Très très acide" },
              { q: "Combien d'odeurs le nez peut-il détecter ?", r: "Plus de 1 000 milliards", hint: "Bien plus que les 10 000 qu'on croyait" }
            ]
          },
          {
            id: "w1d2t3", type: "fiche",
            title: "Sciences étonnantes",
            items: [
              { fact: "Une cuillère à café d'étoile à neutrons pèse 6 milliards de tonnes", detail: "La matière y est si comprimée qu'un morceau de la taille d'un sucre pèserait autant que le mont Everest." },
              { fact: "La foudre est 5 fois plus chaude que la surface du Soleil", detail: "Un éclair atteint 30 000 °C, contre 5 500 °C pour la surface du Soleil. Chaque seconde, 100 éclairs frappent la Terre." },
              { fact: "L'eau chaude gèle plus vite que l'eau froide", detail: "C'est l'effet Mpemba, découvert par un lycéen tanzanien en 1963. La science n'explique toujours pas totalement pourquoi." },
              { fact: "Le son ne se propage pas dans l'espace", detail: "L'espace est un vide quasi-total — pas de molécules pour transporter les ondes sonores. Les explosions de films sont donc fausses !" },
              { fact: "Le miel ne se périme jamais", detail: "On a trouvé du miel comestible dans des tombes égyptiennes vieilles de 3 000 ans. Son pH acide et sa faible teneur en eau empêchent les bactéries." },
              { fact: "Les bananes sont naturellement radioactives", detail: "Elles contiennent du potassium-40. Il faudrait en manger 10 millions d'un coup pour que la dose soit dangereuse." }
            ],
            flashcards: [
              { q: "Combien pèse une cuillère à café d'étoile à neutrons ?", r: "6 milliards de tonnes" },
              { q: "Quelle est la température d'un éclair ?", r: "30 000 °C" },
              { q: "Quelle est la température de la surface du Soleil ?", r: "5 500 °C" },
              { q: "Combien d'éclairs frappent la Terre chaque seconde ?", r: "100" },
              { q: "Comment s'appelle l'effet où l'eau chaude gèle plus vite ?", r: "L'effet Mpemba" },
              { q: "Qui a découvert l'effet Mpemba ?", r: "Un lycéen tanzanien en 1963" },
              { q: "Pourquoi n'y a-t-il pas de son dans l'espace ?", r: "Il n'y a pas de molécules pour transporter les ondes sonores" },
              { q: "Combien de temps du miel peut-il se conserver ?", r: "Indéfiniment — il ne se périme jamais" },
              { q: "On a trouvé du miel comestible dans des tombes de quel âge ?", r: "3 000 ans (tombes égyptiennes)" },
              { q: "Pourquoi les bananes sont-elles radioactives ?", r: "Elles contiennent du potassium-40" },
              { q: "Combien de bananes faudrait-il manger d'un coup pour une dose dangereuse ?", r: "10 millions" },
              { q: "Qu'est-ce qui empêche les bactéries de se développer dans le miel ?", r: "Son pH acide et sa faible teneur en eau" },
              { q: "Combien de fois un éclair est-il plus chaud que le Soleil ?", r: "5 fois plus chaud que la surface" }
            ]
          },
          {
            id: "w1d2t4", type: "quiz",
            title: "Mini-quiz : Sciences étonnantes",
            questions: [
              { q: "Quel aliment ne se périme jamais ?", r: "Le miel", hint: "On en a trouvé dans des tombes égyptiennes" },
              { q: "Comment s'appelle l'effet où l'eau chaude gèle plus vite ?", r: "Effet Mpemba", hint: "Découvert par un lycéen africain" },
              { q: "La foudre est combien de fois plus chaude que le Soleil ?", r: "5 fois", hint: "30 000 °C vs 5 500 °C" },
              { q: "Pourquoi les bananes sont-elles radioactives ?", r: "Elles contiennent du potassium-40", hint: "Un isotope d'un élément chimique commun" }
            ]
          },
          {
            id: "w1d2t5", type: "lecture",
            title: "77 Découvertes qui ont bouleversé le monde",
            subtitle: "Vidéo YouTube — Les grandes avancées scientifiques — Doc Seven (34 min)",
            url: "https://www.youtube.com/watch?v=9IpRIlM1X58",
            duration: "34 min"
          },
          {
            id: "w1d2t6", type: "fiche",
            title: "Inventions & origines surprenantes",
            items: [
              { fact: "Le micro-ondes a été inventé par accident", detail: "Percy Spencer, ingénieur chez Raytheon, a remarqué en 1945 qu'une barre de chocolat avait fondu dans sa poche près d'un magnétron radar." },
              { fact: "Le Coca-Cola était à l'origine un médicament", detail: "Inventé en 1886 par le pharmacien John Pemberton à Atlanta. Il contenait de la cocaïne (retirée en 1903) et était vendu comme tonique." },
              { fact: "Les Post-it sont nés d'une colle ratée", detail: "Spencer Silver chez 3M a créé une colle trop faible en 1968. Son collègue Art Fry a eu l'idée de l'utiliser pour ses marque-pages en 1974." },
              { fact: "La Tour Eiffel grandit de 15 cm en été", detail: "La dilatation thermique du fer. Elle devait être démontée après 20 ans (1909) mais a été sauvée par les antennes radio." },
              { fact: "Internet a été inventé en France et aux USA", detail: "Le réseau ARPANET (1969, USA) est le plus connu, mais le Minitel français (1982) a été le premier réseau grand public." }
            ],
            flashcards: [
              { q: "Qui a inventé le micro-ondes par accident ?", r: "Percy Spencer" },
              { q: "Quel objet a fondu dans la poche de Spencer en 1945 ?", r: "Une barre de chocolat" },
              { q: "Qui a inventé le Coca-Cola ?", r: "John Pemberton, pharmacien à Atlanta" },
              { q: "En quelle année le Coca-Cola a-t-il été inventé ?", r: "1886" },
              { q: "Quand la cocaïne a-t-elle été retirée du Coca-Cola ?", r: "1903" },
              { q: "Qui a inventé la colle des Post-it ?", r: "Spencer Silver (chez 3M)" },
              { q: "Qui a eu l'idée d'utiliser cette colle pour des Post-it ?", r: "Art Fry (pour ses marque-pages)" },
              { q: "De combien la Tour Eiffel grandit-elle en été ?", r: "15 cm" },
              { q: "Pourquoi la Tour Eiffel grandit-elle en été ?", r: "La dilatation thermique du fer" },
              { q: "Quand la Tour Eiffel devait-elle être démontée ?", r: "En 1909 (après 20 ans)" },
              { q: "Qu'est-ce qui a sauvé la Tour Eiffel de la démolition ?", r: "Les antennes radio installées dessus" },
              { q: "En quelle année le Minitel a-t-il été lancé en France ?", r: "1982" },
              { q: "Comment s'appelle le premier réseau internet américain ?", r: "ARPANET (1969)" }
            ]
          },
          {
            id: "w1d2t7", type: "quiz",
            title: "Quiz final : Corps & Sciences",
            questions: [
              { q: "Combien d'os a un adulte ?", r: "206" },
              { q: "Quel aliment ne périme jamais ?", r: "Le miel" },
              { q: "Qui a inventé le Coca-Cola et en quelle année ?", r: "John Pemberton, 1886" },
              { q: "De combien la Tour Eiffel grandit-elle en été ?", r: "15 cm" },
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "600 kg" },
              { q: "Comment s'appelle l'effet où l'eau chaude gèle plus vite ?", r: "L'effet Mpemba" }
            ]
          }
        ]
      },

      // ===================== JOUR 3 : GASTRONOMIE & RÉGIONS DE FRANCE =====================
      {
        day: 3, label: "Mercredi", theme: "Gastronomie & Régions", icon: "🧀",
        objectif: "Fromages, plats régionaux, spécialités — tout pour briller",
        tasks: [
          {
            id: "w1d3t0", type: "lecture",
            title: "Tour de France des spécialités régionales",
            subtitle: "Vidéo YouTube — Gastronomie française région par région",
            url: "https://www.youtube.com/watch?v=Hl77r5MOI2o",
            duration: "18 min"
          },
          {
            id: "w1d3t1", type: "fiche",
            title: "Fromages de France",
            items: [
              { fact: "La France compte plus de 1 200 variétés de fromages", detail: "Le général de Gaulle disait : « Comment voulez-vous gouverner un pays qui a 246 variétés de fromage ? ». En réalité, c'est bien plus !" },
              { fact: "Le Roquefort est le plus ancien fromage français connu", detail: "Mentionné dès 1070 ! Affiné dans les caves naturelles de Roquefort-sur-Soulzon (Aveyron). C'est un bleu au lait de brebis." },
              { fact: "Le Comté est le fromage AOP le plus produit en France", detail: "Plus de 60 000 tonnes par an. Il faut 400 litres de lait pour un meule de 40 kg. Affiné dans le Jura." },
              { fact: "Le Camembert a été « inventé » par Marie Harel en 1791", detail: "Paysanne normande qui aurait aidé un prêtre réfractaire. La boîte en bois date de 1890 pour faciliter le transport par train." },
              { fact: "Le Brie de Meaux était surnommé « le roi des fromages »", detail: "Au Congrès de Vienne (1815), il a été élu meilleur fromage du monde dans un concours entre diplomates européens." }
            ],
            flashcards: [
              { q: "Combien de variétés de fromages la France compte-t-elle ?", r: "Plus de 1 200" },
              { q: "Quelle citation de Gaulle sur les fromages ?", r: "« Comment voulez-vous gouverner un pays qui a 246 variétés de fromage ? »" },
              { q: "Quel est le plus ancien fromage français connu ?", r: "Le Roquefort (mentionné en 1070)" },
              { q: "Avec quel lait le Roquefort est-il fabriqué ?", r: "Lait de brebis" },
              { q: "Quel est le fromage AOP le plus produit en France ?", r: "Le Comté" },
              { q: "Combien de litres de lait faut-il pour une meule de Comté ?", r: "400 litres" },
              { q: "Qui a « inventé » le Camembert ?", r: "Marie Harel, en 1791" },
              { q: "Pourquoi le Camembert est-il vendu dans une boîte en bois ?", r: "Pour faciliter le transport par train (depuis 1890)" },
              { q: "Quel fromage est surnommé « le roi des fromages » ?", r: "Le Brie de Meaux" },
              { q: "Lors de quel événement le Brie a-t-il été élu meilleur fromage ?", r: "Le Congrès de Vienne (1815)" },
              { q: "Dans quelle région le Comté est-il affiné ?", r: "Le Jura" },
              { q: "Dans quel département se trouvent les caves du Roquefort ?", r: "L'Aveyron (Roquefort-sur-Soulzon)" }
            ]
          },
          {
            id: "w1d3t2", type: "quiz",
            title: "Mini-quiz : Fromages",
            questions: [
              { q: "Quel est le fromage AOP le plus produit en France ?", r: "Le Comté", hint: "Fromage du Jura" },
              { q: "Qui a inventé le Camembert ?", r: "Marie Harel en 1791", hint: "Une paysanne normande" },
              { q: "Avec quel lait fait-on le Roquefort ?", r: "Lait de brebis", hint: "Ce n'est pas du lait de vache" },
              { q: "Quel fromage a été élu meilleur au Congrès de Vienne ?", r: "Le Brie de Meaux", hint: "Le « roi des fromages »" }
            ]
          },
          {
            id: "w1d3t3", type: "fiche",
            title: "Plats régionaux & spécialités",
            items: [
              { fact: "La bouillabaisse est un plat marseillais de pêcheurs", detail: "Originalement les poissons invendus cuits dans un bouillon. Doit contenir au minimum 4 espèces de poissons de roche. Le mot vient de « quand ça bout, tu baisses » (le feu)." },
              { fact: "Le cassoulet tire son nom de la cassole", detail: "Plat en terre cuite de Castelnaudary. Guerre des cassoulets : Castelnaudary (le père), Carcassonne (le fils), Toulouse (le Saint-Esprit)." },
              { fact: "La quiche Lorraine ne contient PAS de fromage traditionnellement", detail: "La recette originale : pâte brisée, crème, œufs, lardons. Le gruyère a été ajouté plus tard. « Quiche » vient de l'allemand « Kuchen » (gâteau)." },
              { fact: "Le croissant n'est PAS français à l'origine", detail: "Il vient du kipferl autrichien. Importé à Paris par August Zang en 1838. La version feuilletée au beurre est française (années 1920)." },
              { fact: "La tarte Tatin est née d'une erreur", detail: "Les sœurs Tatin à Lamotte-Beuvron (Sologne) ont oublié la pâte et l'ont posée sur les pommes déjà cuites. C'est un dessert « renversé »." }
            ],
            flashcards: [
              { q: "D'où vient le mot « bouillabaisse » ?", r: "« Quand ça bout, tu baisses » (le feu)" },
              { q: "Combien d'espèces de poisson doit contenir une bouillabaisse ?", r: "Au minimum 4 (poissons de roche)" },
              { q: "D'où vient le nom « cassoulet » ?", r: "De la cassole (plat en terre cuite)" },
              { q: "Quelle ville est considérée comme le « père » du cassoulet ?", r: "Castelnaudary" },
              { q: "Vrai ou faux : la quiche Lorraine traditionnelle contient du fromage ?", r: "Faux — la recette originale n'a pas de fromage" },
              { q: "D'où vient le mot « quiche » ?", r: "De l'allemand « Kuchen » (gâteau)" },
              { q: "De quel pays vient le croissant à l'origine ?", r: "L'Autriche (le kipferl)" },
              { q: "Qui a importé le croissant à Paris ?", r: "August Zang, en 1838" },
              { q: "Qui a inventé la tarte Tatin ?", r: "Les sœurs Tatin à Lamotte-Beuvron" },
              { q: "Comment la tarte Tatin a-t-elle été inventée ?", r: "Par erreur — elles ont oublié la pâte et l'ont posée par-dessus" },
              { q: "Dans quelle région se trouve Lamotte-Beuvron (tarte Tatin) ?", r: "La Sologne" },
              { q: "Depuis quand le croissant est-il feuilleté au beurre ?", r: "Les années 1920" },
              { q: "Quels sont les 3 ingrédients de base de la quiche Lorraine ?", r: "Crème, œufs, lardons (+ pâte brisée)" }
            ]
          },
          {
            id: "w1d3t4", type: "quiz",
            title: "Mini-quiz : Plats régionaux",
            questions: [
              { q: "De quel pays vient le croissant ?", r: "L'Autriche", hint: "Le kipferl, importé à Paris en 1838" },
              { q: "La quiche Lorraine contient-elle du fromage dans sa recette originale ?", r: "Non", hint: "Juste crème, œufs et lardons" },
              { q: "Qui a inventé la tarte Tatin ?", r: "Les sœurs Tatin", hint: "Par accident, dans une auberge de Sologne" },
              { q: "D'où vient le mot bouillabaisse ?", r: "Quand ça bout, tu baisses (le feu)", hint: "C'est du provençal" }
            ]
          },
          {
            id: "w1d3t5", type: "lecture",
            title: "Les secrets de la gastronomie française",
            subtitle: "Vidéo YouTube — Cuisine et traditions régionales",
            url: "https://www.youtube.com/watch?v=Q3EKDsVKbKM",
            duration: "20 min"
          },
          {
            id: "w1d3t6", type: "fiche",
            title: "Régions & chefs-lieux pièges",
            items: [
              { fact: "Le chef-lieu de la Corse-du-Sud est Ajaccio, pas Bastia", detail: "Bastia est le chef-lieu de Haute-Corse. Napoléon Bonaparte est né à Ajaccio le 15 août 1769." },
              { fact: "Strasbourg est la capitale de l'Alsace mais aussi siège du Parlement européen", detail: "Elle accueille aussi le Conseil de l'Europe et la Cour européenne des droits de l'homme. 3 institutions majeures." },
              { fact: "Le Mont-Saint-Michel est en Normandie, pas en Bretagne", detail: "Depuis 2009, il est rattaché au département de la Manche. Mais le Couesnon, la rivière frontière, « a mis le Mont en Normandie »." },
              { fact: "La plus grande région de France est la Nouvelle-Aquitaine", detail: "84 000 km² — plus grande que l'Autriche ! Son chef-lieu est Bordeaux." },
              { fact: "Le plus petit département de France métropolitaine est Paris", detail: "105 km² seulement. Le plus grand est la Gironde (10 000 km²). Le département le moins peuplé est la Lozère." }
            ],
            flashcards: [
              { q: "Quel est le chef-lieu de la Corse-du-Sud ?", r: "Ajaccio" },
              { q: "Quel est le chef-lieu de la Haute-Corse ?", r: "Bastia" },
              { q: "Où est né Napoléon Bonaparte ?", r: "Ajaccio, le 15 août 1769" },
              { q: "Quelles 3 institutions européennes sont à Strasbourg ?", r: "Parlement européen, Conseil de l'Europe, Cour européenne des droits de l'homme" },
              { q: "Le Mont-Saint-Michel est dans quel département ?", r: "La Manche (Normandie)" },
              { q: "Quelle rivière sépare la Normandie de la Bretagne au Mont-Saint-Michel ?", r: "Le Couesnon" },
              { q: "Quelle est la plus grande région de France ?", r: "La Nouvelle-Aquitaine (84 000 km²)" },
              { q: "Quel est le chef-lieu de la Nouvelle-Aquitaine ?", r: "Bordeaux" },
              { q: "Quel est le plus petit département de France métropolitaine ?", r: "Paris (105 km²)" },
              { q: "Quel est le plus grand département de France ?", r: "La Gironde (10 000 km²)" },
              { q: "Quel est le département le moins peuplé de France ?", r: "La Lozère" },
              { q: "Vrai ou faux : la Nouvelle-Aquitaine est plus grande que l'Autriche ?", r: "Vrai" }
            ]
          },
          {
            id: "w1d3t7", type: "quiz",
            title: "Quiz final : Gastronomie & Régions",
            questions: [
              { q: "Combien de variétés de fromages en France ?", r: "Plus de 1 200" },
              { q: "De quel pays vient le croissant ?", r: "L'Autriche" },
              { q: "Quel est le chef-lieu de la Corse-du-Sud ?", r: "Ajaccio" },
              { q: "Quel est le plus grand département de France ?", r: "La Gironde" },
              { q: "Quelle est la plus grande région de France ?", r: "La Nouvelle-Aquitaine" },
              { q: "Qui a inventé la tarte Tatin ?", r: "Les sœurs Tatin (par accident)" }
            ]
          }
        ]
      },

      // ===================== JOUR 4 : CÉLÉBRITÉS & CULTURE POP =====================
      {
        day: 4, label: "Jeudi", theme: "Célébrités & Culture Pop", icon: "🌟",
        objectif: "Vrais noms, anecdotes de stars, show-biz — le cœur des 12 Coups",
        tasks: [
          {
            id: "w1d4t0", type: "lecture",
            title: "Les vrais noms des célébrités françaises",
            subtitle: "Vidéo YouTube — Découvre les vrais noms des stars",
            url: "https://www.youtube.com/watch?v=zPH0hQWQtZg",
            duration: "12 min"
          },
          {
            id: "w1d4t1", type: "fiche",
            title: "Vrais noms des célébrités",
            items: [
              { fact: "Johnny Hallyday s'appelait Jean-Philippe Smet", detail: "Né à Paris en 1943. Hallyday est le nom de son beau-père américain Lee Hallyday qui l'a élevé." },
              { fact: "Édith Piaf s'appelait Édith Giovanna Gassion", detail: "Surnommée « la Môme Piaf » par le directeur de cabaret Louis Leplée (piaf = moineau en argot). Mesure 1m47." },
              { fact: "Coluche s'appelait Michel Colucci", detail: "Fils d'un immigré italien. Il s'est présenté à l'élection présidentielle de 1981 et a créé les Restos du Cœur en 1985." },
              { fact: "Voltaire s'appelait François-Marie Arouet", detail: "« Voltaire » est probablement l'anagramme de AROUET L.J. (le jeune) en latin. Il a passé 11 mois à la Bastille." },
              { fact: "Molière s'appelait Jean-Baptiste Poquelin", detail: "Fils d'un tapissier du roi. Il est mort après la 4e représentation du Malade imaginaire, sur scène (presque)." },
              { fact: "Le Corbusier s'appelait Charles-Édouard Jeanneret", detail: "Architecte suisse naturalisé français. Son pseudonyme vient du nom de son grand-père maternel : Lecorbésier." }
            ],
            flashcards: [
              { q: "Quel est le vrai nom de Johnny Hallyday ?", r: "Jean-Philippe Smet" },
              { q: "D'où vient le nom « Hallyday » ?", r: "De son beau-père américain Lee Hallyday" },
              { q: "Quel est le vrai nom d'Édith Piaf ?", r: "Édith Giovanna Gassion" },
              { q: "Que signifie « piaf » en argot ?", r: "Moineau" },
              { q: "Quelle était la taille d'Édith Piaf ?", r: "1m47" },
              { q: "Quel est le vrai nom de Coluche ?", r: "Michel Colucci" },
              { q: "Quelle association Coluche a-t-il créée ?", r: "Les Restos du Cœur (1985)" },
              { q: "Quel est le vrai nom de Voltaire ?", r: "François-Marie Arouet" },
              { q: "Combien de temps Voltaire a-t-il passé à la Bastille ?", r: "11 mois" },
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin" },
              { q: "Quel était le métier du père de Molière ?", r: "Tapissier du roi" },
              { q: "Après quelle représentation Molière est-il mort ?", r: "La 4e du Malade imaginaire" },
              { q: "Quel est le vrai nom de Le Corbusier ?", r: "Charles-Édouard Jeanneret" },
              { q: "De quelle nationalité était Le Corbusier à l'origine ?", r: "Suisse" },
              { q: "En quelle année Coluche s'est-il présenté à la présidentielle ?", r: "1981" }
            ]
          },
          {
            id: "w1d4t2", type: "quiz",
            title: "Mini-quiz : Vrais noms",
            questions: [
              { q: "Quel est le vrai nom de Johnny Hallyday ?", r: "Jean-Philippe Smet", hint: "Prénom composé français classique" },
              { q: "Que signifie « piaf » ?", r: "Moineau (en argot)", hint: "Surnom donné à Édith Gassion" },
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin", hint: "Fils d'un tapissier" },
              { q: "Quelle association Coluche a-t-il créée ?", r: "Les Restos du Cœur", hint: "En 1985" }
            ]
          },
          {
            id: "w1d4t3", type: "fiche",
            title: "Anecdotes cinéma & séries",
            items: [
              { fact: "Le film le plus cher de l'histoire est Pirates des Caraïbes 4", detail: "Budget de 379 millions de dollars. Mais le plus rentable est Avatar (2009) avec 2,9 milliards de recettes." },
              { fact: "Le rôle de Gandalf a d'abord été proposé à Sean Connery", detail: "Il a refusé car il « ne comprenait pas le scénario ». Ian McKellen a pris le rôle. Connery a aussi refusé le rôle de Morpheus (Matrix)." },
              { fact: "Shrek est basé sur un vrai livre pour enfants (1990)", detail: "Écrit par William Steig. « Shrek » vient du yiddish « Schreck » qui signifie peur/monstre." },
              { fact: "Le son de sabre laser Star Wars = TV défaillante + câble de micro", detail: "Ben Burtt, ingénieur du son, a combiné le bourdonnement d'un vieux téléviseur avec le bruit d'un câble de micro passant près d'un haut-parleur." },
              { fact: "Intouchables (2011) est le film français le plus vu à l'étranger", detail: "Plus de 50 millions d'entrées dans le monde. Basé sur l'histoire vraie de Philippe Pozzo di Borgo et Abdel Sellou." }
            ],
            flashcards: [
              { q: "Quel est le film le plus cher de l'histoire ?", r: "Pirates des Caraïbes 4 (379 M$)" },
              { q: "Quel est le film le plus rentable de l'histoire ?", r: "Avatar (2009) — 2,9 milliards $" },
              { q: "À qui le rôle de Gandalf a-t-il été proposé en premier ?", r: "Sean Connery" },
              { q: "Pourquoi Connery a-t-il refusé Gandalf ?", r: "Il ne comprenait pas le scénario" },
              { q: "D'où vient le mot « Shrek » ?", r: "Du yiddish « Schreck » = peur/monstre" },
              { q: "Qui a écrit le livre Shrek (1990) ?", r: "William Steig" },
              { q: "Comment a été créé le son du sabre laser Star Wars ?", r: "TV défaillante + câble de micro (par Ben Burtt)" },
              { q: "Quel est le film français le plus vu à l'étranger ?", r: "Intouchables (2011)" },
              { q: "Sur quelle histoire vraie Intouchables est-il basé ?", r: "Philippe Pozzo di Borgo et Abdel Sellou" },
              { q: "Combien d'entrées Intouchables a-t-il fait dans le monde ?", r: "Plus de 50 millions" },
              { q: "Quel autre rôle célèbre Sean Connery a-t-il refusé ?", r: "Morpheus dans Matrix" }
            ]
          },
          {
            id: "w1d4t4", type: "quiz",
            title: "Mini-quiz : Cinéma",
            questions: [
              { q: "Quel est le film le plus rentable de tous les temps ?", r: "Avatar (2,9 milliards $)", hint: "Film de James Cameron, 2009" },
              { q: "D'où vient le mot Shrek ?", r: "Du yiddish Schreck (peur)", hint: "C'est une langue germanique" },
              { q: "Quel film français a fait 50M d'entrées à l'étranger ?", r: "Intouchables", hint: "Omar Sy et François Cluzet" },
              { q: "Qui a refusé le rôle de Gandalf ?", r: "Sean Connery", hint: "L'ancien James Bond" }
            ]
          },
          {
            id: "w1d4t5", type: "lecture",
            title: "20 Romans Français Incontournables",
            subtitle: "Vidéo YouTube — Résumés des grands classiques (1h31)",
            url: "https://www.youtube.com/watch?v=u4GtGFYECe0",
            duration: "20 min"
          },
          {
            id: "w1d4t6", type: "fiche",
            title: "Musique & émissions TV cultes",
            items: [
              { fact: "La Marseillaise a 15 couplets, pas un seul", detail: "Composée par Rouget de Lisle à Strasbourg en 1792. Le fameux « Allons enfants » n'est que le 1er couplet. Le 7e est le plus violent." },
              { fact: "« Que je t'aime » de Johnny a été écrite par Gilles Thibaut", detail: "Jean Renard a composé la musique. Hallyday l'a interprétée pour la 1re fois au Palais des Sports en 1969." },
              { fact: "« Questions pour un Champion » existe depuis 1988", detail: "Présenté par Julien Lepers de 1988 à 2015 (27 ans !), puis Samuel Étienne. Le « 4 à la suite » est le moment le plus redouté." },
              { fact: "« Les 12 Coups de Midi » existe depuis 2010", detail: "Présenté par Jean-Luc Reichmann sur TF1. Le record de victoires est détenu par Paul (153 participations, 691 000 € en 2019)." },
              { fact: "The Voice France existe depuis 2012", detail: "Les premiers coachs étaient Jenifer, Garou, Louis Bertignac et Florent Pagny. Maître Gims et Kendji Girac n'ont pas gagné l'émission." }
            ],
            flashcards: [
              { q: "Combien de couplets a la Marseillaise ?", r: "15 couplets" },
              { q: "Qui a composé la Marseillaise ?", r: "Rouget de Lisle" },
              { q: "Dans quelle ville la Marseillaise a-t-elle été composée ?", r: "Strasbourg (en 1792)" },
              { q: "Qui a présenté QPUC de 1988 à 2015 ?", r: "Julien Lepers" },
              { q: "Combien d'années Julien Lepers a-t-il présenté QPUC ?", r: "27 ans" },
              { q: "Qui présente Les 12 Coups de Midi ?", r: "Jean-Luc Reichmann" },
              { q: "Depuis quelle année Les 12 Coups de Midi existe-t-il ?", r: "2010" },
              { q: "Qui détient le record de victoires aux 12 Coups ?", r: "Paul (153 participations, 691 000 €)" },
              { q: "En quelle année a débuté The Voice France ?", r: "2012" },
              { q: "Qui étaient les 4 premiers coachs de The Voice France ?", r: "Jenifer, Garou, Louis Bertignac, Florent Pagny" },
              { q: "Qui a écrit les paroles de « Que je t'aime » ?", r: "Gilles Thibaut" },
              { q: "Sur quelle chaîne sont diffusés Les 12 Coups de Midi ?", r: "TF1" }
            ]
          },
          {
            id: "w1d4t7", type: "quiz",
            title: "Quiz final : Célébrités & Culture Pop",
            questions: [
              { q: "Quel est le vrai nom d'Édith Piaf ?", r: "Édith Giovanna Gassion" },
              { q: "Combien de couplets a la Marseillaise ?", r: "15" },
              { q: "Qui présente Les 12 Coups de Midi ?", r: "Jean-Luc Reichmann" },
              { q: "Quel est le film français le plus vu à l'étranger ?", r: "Intouchables" },
              { q: "Depuis quelle année QPUC existe-t-il ?", r: "1988" },
              { q: "Quel est le vrai nom de Coluche ?", r: "Michel Colucci" }
            ]
          }
        ]
      },

      // ===================== JOUR 5 : LANGUE FRANÇAISE & ÉTYMOLOGIE =====================
      {
        day: 5, label: "Vendredi", theme: "Langue & Étymologie", icon: "📖",
        objectif: "Origines des mots, expressions, pièges de vocabulaire",
        tasks: [
          {
            id: "w1d5t0", type: "lecture",
            title: "L'histoire de la langue française",
            subtitle: "Vidéo YouTube — D'où vient le français ?",
            url: "https://www.youtube.com/watch?v=jFCLgEcajm0",
            duration: "15 min"
          },
          {
            id: "w1d5t1", type: "fiche",
            title: "Étymologies surprenantes",
            items: [
              { fact: "« Salaire » vient de « sal » (sel) en latin", detail: "Les soldats romains étaient payés en sel. D'où aussi « soldat » (solidus = pièce d'or donnée pour acheter du sel)." },
              { fact: "« Cravate » vient des Croates", detail: "Les cavaliers croates au service de Louis XIV portaient un foulard noué. Les Français ont copié le style et l'ont appelé « à la croate » → cravate." },
              { fact: "« Bikini » vient de l'atoll de Bikini (îles Marshall)", detail: "Louis Réard l'a nommé ainsi en 1946 car l'effet devait être « explosif comme une bombe atomique » (les essais nucléaires venaient d'y avoir lieu)." },
              { fact: "« Algorithme » vient du mathématicien Al-Khwarizmi", detail: "Mathématicien perse du IXe siècle. « Algèbre » vient aussi de son livre « Al-jabr ». Il a introduit les chiffres arabes en Occident." },
              { fact: "« Assassin » vient du mot arabe « haschischin »", detail: "Les Haschischins étaient une secte de tueurs au XIe siècle qui consommaient du haschich avant leurs missions." }
            ],
            flashcards: [
              { q: "D'où vient le mot « salaire » ?", r: "Du latin « sal » (sel) — les soldats romains étaient payés en sel" },
              { q: "D'où vient le mot « cravate » ?", r: "Des cavaliers croates de Louis XIV (« à la croate »)" },
              { q: "Pourquoi le bikini s'appelle-t-il ainsi ?", r: "Nommé d'après l'atoll de Bikini (essais nucléaires) — effet « explosif »" },
              { q: "Qui a inventé le bikini ?", r: "Louis Réard, en 1946" },
              { q: "D'où vient le mot « algorithme » ?", r: "Du mathématicien perse Al-Khwarizmi (IXe siècle)" },
              { q: "D'où vient le mot « algèbre » ?", r: "Du livre « Al-jabr » d'Al-Khwarizmi" },
              { q: "D'où vient le mot « assassin » ?", r: "De l'arabe « haschischin » (consommateurs de haschich)" },
              { q: "D'où vient le mot « soldat » ?", r: "De « solidus » (pièce d'or pour acheter du sel)" },
              { q: "Quel roi français a popularisé la cravate ?", r: "Louis XIV" },
              { q: "Quel événement a eu lieu sur l'atoll de Bikini ?", r: "Des essais nucléaires américains (1946)" }
            ]
          },
          {
            id: "w1d5t2", type: "quiz",
            title: "Mini-quiz : Étymologie",
            questions: [
              { q: "D'où vient le mot salaire ?", r: "Du sel (sal en latin)", hint: "Lien avec les soldats romains" },
              { q: "D'où vient le mot cravate ?", r: "Des Croates", hint: "Foulard porté par des cavaliers au service de Louis XIV" },
              { q: "D'où vient le mot algorithme ?", r: "D'Al-Khwarizmi", hint: "Mathématicien perse du IXe siècle" },
              { q: "Qui a inventé le bikini ?", r: "Louis Réard en 1946", hint: "Nommé d'après un atoll des îles Marshall" }
            ]
          },
          {
            id: "w1d5t3", type: "fiche",
            title: "Pièges & records de la langue française",
            items: [
              { fact: "Le mot le plus long du dictionnaire : « anticonstitutionnellement » (25 lettres)", detail: "Mais « intergouvernementalisations » (27 lettres) existe aussi. En médecine : « hippopotomonstrosesquipédaliophobie » = la peur des mots longs !" },
              { fact: "« Oiseau » est le plus long mot dont on ne prononce aucune lettre normalement", detail: "O-I-S-E-A-U : aucune de ces 6 lettres ne se prononce comme dans l'alphabet. C'est aussi le plus court mot contenant les 5 voyelles." },
              { fact: "Un palindrome se lit dans les deux sens : « kayak », « ressasser »", detail: "« Ressasser » est le plus long palindrome français. Phrase palindrome célèbre : « Ésope reste ici et se repose »." },
              { fact: "Le français a 13 temps de conjugaison", detail: "Le passé simple est quasi-mort à l'oral. Le subjonctif imparfait (« qu'il chantât ») est le temps le plus moqué de France." },
              { fact: "80 % du vocabulaire anglais vient du français ou du latin", detail: "Après la conquête normande de 1066, le français était la langue de la cour anglaise pendant 300 ans." }
            ],
            flashcards: [
              { q: "Quel est le mot le plus long du dictionnaire français ?", r: "Anticonstitutionnellement (25 lettres)" },
              { q: "Comment s'appelle la peur des mots longs ?", r: "Hippopotomonstrosesquipédaliophobie" },
              { q: "Quel est le plus court mot français contenant les 5 voyelles ?", r: "Oiseau" },
              { q: "Quel est le plus long palindrome français ?", r: "Ressasser" },
              { q: "Qu'est-ce qu'un palindrome ?", r: "Un mot ou phrase qui se lit dans les deux sens" },
              { q: "Quelle phrase palindrome célèbre contient « Ésope » ?", r: "« Ésope reste ici et se repose »" },
              { q: "Combien de temps de conjugaison le français a-t-il ?", r: "13" },
              { q: "Quel pourcentage du vocabulaire anglais vient du français ?", r: "80 %" },
              { q: "Pendant combien d'années le français était-il la langue de la cour anglaise ?", r: "300 ans (après 1066)" },
              { q: "Quel temps de conjugaison est le plus moqué en français ?", r: "Le subjonctif imparfait (« qu'il chantât »)" },
              { q: "Pourquoi « oiseau » est-il un mot remarquable ?", r: "Aucune de ses 6 lettres ne se prononce normalement" }
            ]
          },
          {
            id: "w1d5t4", type: "quiz",
            title: "Mini-quiz : Langue française",
            questions: [
              { q: "Quel est le plus long palindrome français ?", r: "Ressasser", hint: "7 lettres, même sens dans les deux sens" },
              { q: "Quel est le mot le plus long du dictionnaire ?", r: "Anticonstitutionnellement", hint: "25 lettres" },
              { q: "Quel % du vocabulaire anglais vient du français ?", r: "80 %", hint: "Grâce à la conquête normande" },
              { q: "Comment s'appelle la peur des mots longs ?", r: "Hippopotomonstrosesquipédaliophobie", hint: "C'est ironiquement un mot très long" }
            ]
          },
          {
            id: "w1d5t5", type: "lecture",
            title: "Les expressions françaises et leurs origines",
            subtitle: "Vidéo YouTube — D'où viennent nos expressions ?",
            url: "https://www.youtube.com/watch?v=1gM2T8F3bMc",
            duration: "15 min"
          },
          {
            id: "w1d5t6", type: "fiche",
            title: "Expressions françaises décryptées",
            items: [
              { fact: "« Être au pied du mur » = vient de l'escrime", detail: "Quand le duelliste recule jusqu'au mur, il ne peut plus fuir et doit se battre. Rien à voir avec la maçonnerie !" },
              { fact: "« Avoir la flemme » vient du grec « phlegma »", detail: "Dans la théorie des humeurs, le flegme (mucus) rendait apathique et mou. Un flegmatique = quelqu'un de lent." },
              { fact: "« OK » viendrait de « Oll Korrect » (all correct, mal orthographié)", detail: "Blague de journalistes américains dans les années 1830. Devenu populaire pendant la campagne de Martin Van Buren (« Old Kinderhook ») en 1840." },
              { fact: "« Poser un lapin » = ne pas payer une prostituée au XIXe siècle", detail: "« Lapin » signifiait « ne pas payer ». L'expression a évolué vers « ne pas venir au rendez-vous »." },
              { fact: "« Tomber dans les pommes » ne vient PAS des pommes", detail: "Viendrait de « tomber dans les pâmes » (s'évanouir, du verbe « se pâmer »). La déformation en « pommes » est apparue au XIXe siècle." }
            ],
            flashcards: [
              { q: "D'où vient l'expression « être au pied du mur » ?", r: "De l'escrime — quand on recule jusqu'au mur" },
              { q: "D'où vient le mot « flemme » ?", r: "Du grec « phlegma » (mucus — rendait apathique)" },
              { q: "D'où viendrait le mot « OK » ?", r: "De « Oll Korrect » (all correct, mal orthographié)" },
              { q: "Que signifiait « poser un lapin » à l'origine ?", r: "Ne pas payer (une prostituée, au XIXe siècle)" },
              { q: "D'où vient « tomber dans les pommes » ?", r: "De « tomber dans les pâmes » (se pâmer = s'évanouir)" },
              { q: "Pendant quelle campagne électorale « OK » est-il devenu populaire ?", r: "Celle de Martin Van Buren (1840)" },
              { q: "Qu'est-ce qu'un « flegmatique » dans la théorie des humeurs ?", r: "Quelqu'un de lent et apathique" },
              { q: "De quel sport vient « être au pied du mur » ?", r: "L'escrime" }
            ]
          },
          {
            id: "w1d5t7", type: "quiz",
            title: "Quiz final : Langue & Étymologie",
            questions: [
              { q: "D'où vient le mot salaire ?", r: "Du sel" },
              { q: "D'où vient le mot bikini ?", r: "De l'atoll de Bikini (essais nucléaires)" },
              { q: "Quel est le plus long palindrome français ?", r: "Ressasser" },
              { q: "D'où vient « OK » ?", r: "De « Oll Korrect »" },
              { q: "D'où vient « être au pied du mur » ?", r: "De l'escrime" },
              { q: "D'où vient le mot cravate ?", r: "Des Croates" }
            ]
          }
        ]
      },

      // ===================== JOUR 6 : GÉOGRAPHIE INSOLITE & RECORDS =====================
      {
        day: 6, label: "Samedi", theme: "Géographie & Records", icon: "🌍",
        objectif: "Capitales pièges, records géographiques, fun facts monde",
        tasks: [
          {
            id: "w1d6t0", type: "lecture",
            title: "Quiz Culture Générale — Capitales du Monde",
            subtitle: "Vidéo YouTube — 170 pays en français",
            url: "https://www.youtube.com/watch?v=MUJc2cpSEvo",
            duration: "20 min"
          },
          {
            id: "w1d6t1", type: "fiche",
            title: "Capitales pièges",
            items: [
              { fact: "La capitale de l'Australie n'est PAS Sydney — c'est Canberra", detail: "Canberra a été construite exprès entre Sydney et Melbourne pour régler la rivalité entre les deux villes. Le nom viendrait d'un mot aborigène signifiant « lieu de rencontre »." },
              { fact: "La capitale du Brésil n'est PAS Rio — c'est Brasília", detail: "Construite en 41 mois (1956-1960) en plein centre du pays. Vue du ciel, la ville a la forme d'un avion. Architecte : Oscar Niemeyer." },
              { fact: "La capitale de la Turquie n'est PAS Istanbul — c'est Ankara", detail: "Istanbul (ex-Constantinople, ex-Byzance) est la plus grande ville mais Atatürk a choisi Ankara comme capitale en 1923." },
              { fact: "La capitale du Myanmar (Birmanie) est Naypyidaw, pas Rangoun", detail: "Déplacée en 2006 dans le secret. Naypyidaw est une ville fantôme avec des autoroutes à 20 voies quasi-vides." },
              { fact: "La capitale du Maroc n'est PAS Casablanca — c'est Rabat", detail: "Casablanca est la plus grande ville et le centre économique. Rabat est la capitale politique depuis 1912." }
            ],
            flashcards: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Pourquoi Canberra a-t-elle été construite ?", r: "Pour régler la rivalité entre Sydney et Melbourne" },
              { q: "Quelle est la capitale du Brésil ?", r: "Brasília" },
              { q: "En combien de temps Brasília a-t-elle été construite ?", r: "41 mois (1956-1960)" },
              { q: "Quelle forme a Brasília vue du ciel ?", r: "Un avion" },
              { q: "Qui est l'architecte de Brasília ?", r: "Oscar Niemeyer" },
              { q: "Quelle est la capitale de la Turquie ?", r: "Ankara" },
              { q: "Quels sont les 3 noms historiques d'Istanbul ?", r: "Byzance → Constantinople → Istanbul" },
              { q: "Quelle est la capitale du Myanmar ?", r: "Naypyidaw" },
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat" },
              { q: "Depuis quand Rabat est-elle la capitale du Maroc ?", r: "1912" },
              { q: "Qui a déplacé la capitale turque de Constantinople à Ankara ?", r: "Atatürk (en 1923)" },
              { q: "Combien de voies ont les autoroutes de Naypyidaw ?", r: "20 voies (quasi-vides)" }
            ]
          },
          {
            id: "w1d6t2", type: "quiz",
            title: "Mini-quiz : Capitales pièges",
            questions: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra", hint: "Ni Sydney, ni Melbourne" },
              { q: "Quelle est la capitale de la Turquie ?", r: "Ankara", hint: "Pas Istanbul" },
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat", hint: "Pas Casablanca" },
              { q: "Quelle forme a Brasília vue du ciel ?", r: "Un avion", hint: "Construite en 41 mois" }
            ]
          },
          {
            id: "w1d6t3", type: "fiche",
            title: "Records & fun facts géographiques",
            items: [
              { fact: "La France est le pays avec le plus de fuseaux horaires : 12", detail: "Grâce aux territoires d'outre-mer ! Les USA en ont 11, la Russie 11. La Chine n'en a qu'un seul (malgré sa taille)." },
              { fact: "Le point le plus éloigné de tout océan est en Chine", detail: "Le « pôle d'inaccessibilité » est dans le désert du Xinjiang, à 2 648 km de la mer la plus proche." },
              { fact: "Monaco est plus petit que Central Park à New York", detail: "Monaco : 2 km². Central Park : 3,4 km². C'est le 2e plus petit pays (après le Vatican : 0,44 km²)." },
              { fact: "Le Nil et l'Amazone se disputent le titre de plus long fleuve", detail: "Le Nil fait ~6 650 km, l'Amazone ~6 400 km. Mais de nouvelles mesures donnent parfois l'Amazone gagnant." },
              { fact: "La Russie a 11 fuseaux horaires et est plus grande que Pluton", detail: "Surface : 17,1 millions km². Pluton : 16,6 millions km². Quand il est midi à Moscou, il est 21h à l'est du pays." }
            ],
            flashcards: [
              { q: "Quel pays a le plus de fuseaux horaires ?", r: "La France (12)" },
              { q: "Pourquoi la France a-t-elle 12 fuseaux horaires ?", r: "Grâce aux territoires d'outre-mer" },
              { q: "Combien de fuseaux horaires la Chine a-t-elle ?", r: "Un seul" },
              { q: "Quel pays est plus petit que Central Park ?", r: "Monaco" },
              { q: "Quelle est la surface de Monaco ?", r: "2 km²" },
              { q: "Quel est le plus petit pays du monde ?", r: "Le Vatican (0,44 km²)" },
              { q: "Quels sont les deux fleuves qui se disputent le titre de plus long ?", r: "Le Nil et l'Amazone" },
              { q: "Quelle est la longueur du Nil ?", r: "~6 650 km" },
              { q: "Vrai ou faux : la Russie est plus grande que Pluton ?", r: "Vrai (17,1 vs 16,6 millions km²)" },
              { q: "Combien de fuseaux horaires la Russie a-t-elle ?", r: "11" },
              { q: "Où se trouve le pôle d'inaccessibilité (point le plus éloigné de tout océan) ?", r: "Dans le désert du Xinjiang (Chine)" },
              { q: "Quelle est la surface de Central Park ?", r: "3,4 km²" }
            ]
          },
          {
            id: "w1d6t4", type: "quiz",
            title: "Mini-quiz : Records géo",
            questions: [
              { q: "Quel pays a le plus de fuseaux horaires ?", r: "La France (12)", hint: "Grâce à l'outre-mer" },
              { q: "Quel est le plus petit pays du monde ?", r: "Le Vatican", hint: "0,44 km²" },
              { q: "Vrai ou faux : la Russie est plus grande que Pluton ?", r: "Vrai", hint: "17,1 vs 16,6 millions km²" },
              { q: "Combien de fuseaux horaires la Chine a-t-elle ?", r: "Un seul", hint: "Malgré sa taille énorme" }
            ]
          },
          {
            id: "w1d6t5", type: "lecture",
            title: "QUIZ — Les Capitales du Monde (80 Pays)",
            subtitle: "Vidéo YouTube — Testez vos connaissances sur 80 capitales",
            url: "https://www.youtube.com/watch?v=9AWctHsuLvM",
            duration: "15 min"
          },
          {
            id: "w1d6t6", type: "fiche",
            title: "Surnoms de villes & pays",
            items: [
              { fact: "Bruges = la Venise du Nord", detail: "À cause de ses canaux. D'autres « Venise du Nord » : Amsterdam, Stockholm, Saint-Pétersbourg." },
              { fact: "Las Vegas est surnommée « Sin City » (la ville du péché)", detail: "Elle est dans le Nevada, en plein désert. Son nom signifie « les prairies » en espagnol (il y avait des sources d'eau)." },
              { fact: "Istanbul était Constantinople, elle-même Byzance", detail: "Seule ville au monde à cheval sur deux continents (Europe et Asie). Le détroit du Bosphore les sépare." },
              { fact: "La Finlande est le « pays aux mille lacs » — en fait 188 000", detail: "Plus de 188 000 lacs ! Et le pays compte plus de saunas que de voitures. Aussi le pays le plus heureux du monde selon l'ONU." },
              { fact: "Le Japon est « le pays du Soleil levant »", detail: "En japonais : Nihon (日本) = « origine du soleil ». Le drapeau (cercle rouge) représente le soleil. L'empereur est censé descendre d'Amaterasu, déesse du soleil." }
            ],
            flashcards: [
              { q: "Quelle ville est surnommée « la Venise du Nord » ?", r: "Bruges (aussi Amsterdam, Stockholm, Saint-Pétersbourg)" },
              { q: "Dans quel état américain se trouve Las Vegas ?", r: "Le Nevada" },
              { q: "Que signifie « Las Vegas » en espagnol ?", r: "Les prairies" },
              { q: "Quelle ville est à cheval sur deux continents ?", r: "Istanbul (Europe et Asie)" },
              { q: "Quel détroit sépare la partie européenne et asiatique d'Istanbul ?", r: "Le Bosphore" },
              { q: "Combien de lacs la Finlande compte-t-elle ?", r: "Plus de 188 000" },
              { q: "Que signifie « Nihon » (Japon) ?", r: "Origine du soleil" },
              { q: "Quelle déesse est l'ancêtre mythique de l'empereur du Japon ?", r: "Amaterasu (déesse du soleil)" },
              { q: "Quel est le surnom de Las Vegas ?", r: "Sin City (la ville du péché)" },
              { q: "Quel pays est le plus heureux du monde selon l'ONU ?", r: "La Finlande" },
              { q: "Qu'est-ce que la Finlande a en plus grand nombre que les voitures ?", r: "Des saunas" }
            ]
          },
          {
            id: "w1d6t7", type: "quiz",
            title: "Quiz final : Géographie & Records",
            questions: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Quel pays a 12 fuseaux horaires ?", r: "La France" },
              { q: "Que signifie Las Vegas en espagnol ?", r: "Les prairies" },
              { q: "Combien de lacs la Finlande a-t-elle ?", r: "188 000" },
              { q: "Quel est le plus petit pays du monde ?", r: "Le Vatican" },
              { q: "Quelle ville est sur deux continents ?", r: "Istanbul" }
            ]
          }
        ]
      },

      // ===================== JOUR 7 : SPORT & DIVERTISSEMENT =====================
      {
        day: 7, label: "Dimanche", theme: "Sport & Records", icon: "🏆",
        objectif: "Anecdotes sportives, records, fun facts — quiz final mixte",
        tasks: [
          {
            id: "w1d7t0", type: "lecture",
            title: "QUIZ 100% Sport — 50 Questions",
            subtitle: "Vidéo YouTube — Football, tennis, ski, athlétisme... (18 min)",
            url: "https://www.youtube.com/watch?v=5C55d5UZbu8",
            duration: "18 min"
          },
          {
            id: "w1d7t1", type: "fiche",
            title: "Football : fun facts",
            items: [
              { fact: "Le Brésil est le seul pays à avoir disputé toutes les Coupes du monde", detail: "5 titres (record) : 1958, 1962, 1970, 1994, 2002. Pelé est le seul joueur à avoir gagné 3 Coupes du monde." },
              { fact: "Le score le plus large en football est 149-0", detail: "En 2002, à Madagascar : le SO l'Emyrne a marqué 149 buts contre soi (contre-goals volontaires) pour protester contre l'arbitrage." },
              { fact: "Zinédine Zidane a mis un coup de tête à Materazzi en finale 2006", detail: "Materazzi l'aurait insulté en parlant de sa sœur. C'était le dernier match de la carrière de Zidane. L'Italie a gagné aux tirs au but." },
              { fact: "Le ballon d'or féminin n'existe que depuis 2018", detail: "La première lauréate est la Norvégienne Ada Hegerberg. Le ballon d'or masculin existe depuis 1956 (premier : Stanley Matthews)." },
              { fact: "Lionel Messi a remporté 8 Ballons d'Or", detail: "Record absolu. Cristiano Ronaldo en a 5. Messi a finalement gagné la Coupe du monde en 2022 au Qatar avec l'Argentine." }
            ],
            flashcards: [
              { q: "Combien de Coupes du monde le Brésil a-t-il remportées ?", r: "5 (1958, 1962, 1970, 1994, 2002)" },
              { q: "Quel joueur a gagné 3 Coupes du monde ?", r: "Pelé" },
              { q: "Quel est le score le plus large de l'histoire du football ?", r: "149-0 (Madagascar, 2002)" },
              { q: "Pourquoi ce score de 149-0 ?", r: "Buts contre soi volontaires pour protester contre l'arbitrage" },
              { q: "Qu'a fait Zidane en finale de la Coupe du monde 2006 ?", r: "Un coup de tête à Materazzi" },
              { q: "Qui a gagné la finale 2006 ?", r: "L'Italie (aux tirs au but)" },
              { q: "Depuis quand le Ballon d'Or féminin existe-t-il ?", r: "2018" },
              { q: "Qui est la première lauréate du Ballon d'Or féminin ?", r: "Ada Hegerberg (Norvégienne)" },
              { q: "Combien de Ballons d'Or Messi a-t-il ?", r: "8" },
              { q: "Combien de Ballons d'Or Ronaldo a-t-il ?", r: "5" },
              { q: "En quelle année Messi a-t-il gagné la Coupe du monde ?", r: "2022 (au Qatar)" },
              { q: "Qui a été le premier Ballon d'Or masculin en 1956 ?", r: "Stanley Matthews" }
            ]
          },
          {
            id: "w1d7t2", type: "quiz",
            title: "Mini-quiz : Football",
            questions: [
              { q: "Combien de Ballons d'Or Messi a-t-il ?", r: "8", hint: "Record absolu" },
              { q: "Quel est le score le plus large de l'histoire ?", r: "149-0", hint: "Match de protestation à Madagascar" },
              { q: "Depuis quand le Ballon d'Or féminin existe-t-il ?", r: "2018", hint: "La première lauréate est norvégienne" },
              { q: "Combien de Coupes du monde le Brésil a-t-il ?", r: "5", hint: "Record, devant l'Italie et l'Allemagne" }
            ]
          },
          {
            id: "w1d7t3", type: "fiche",
            title: "JO, tennis & records sportifs",
            items: [
              { fact: "Les anneaux olympiques représentent les 5 continents habités", detail: "Bleu (Europe), noir (Afrique), rouge (Amériques), jaune (Asie), vert (Océanie). Créés par Pierre de Coubertin en 1913." },
              { fact: "Usain Bolt a couru le 100m en 9,58 secondes", detail: "Record du monde établi à Berlin en 2009. Sa vitesse max : 44,72 km/h. Il mesure 1m96 — inhabituellement grand pour un sprinter." },
              { fact: "Rafael Nadal a gagné 14 fois Roland-Garros", detail: "Record absolu sur un même Grand Chelem. Surnommé « le roi de la terre battue ». Il est gaucher au tennis mais droitier dans la vie." },
              { fact: "Le marathon tire son nom de la bataille de Marathon (490 av. J.-C.)", detail: "Le soldat Philippidès aurait couru 42 km jusqu'à Athènes pour annoncer la victoire. La distance officielle (42,195 km) date des JO de Londres 1908." },
              { fact: "Michael Jordan a été coupé de son équipe de basket au lycée", detail: "Jugé trop petit en seconde. Il a ensuite remporté 6 titres NBA avec les Chicago Bulls et 5 MVP." }
            ],
            flashcards: [
              { q: "Que représentent les 5 anneaux olympiques ?", r: "Les 5 continents habités" },
              { q: "Qui a créé les anneaux olympiques ?", r: "Pierre de Coubertin (1913)" },
              { q: "Quel est le record du monde du 100m ?", r: "9,58 secondes (Usain Bolt, Berlin 2009)" },
              { q: "Quelle est la vitesse max d'Usain Bolt ?", r: "44,72 km/h" },
              { q: "Quelle est la taille d'Usain Bolt ?", r: "1m96" },
              { q: "Combien de fois Nadal a-t-il gagné Roland-Garros ?", r: "14 fois" },
              { q: "Nadal est gaucher au tennis. Et dans la vie ?", r: "Il est droitier" },
              { q: "D'où vient le mot « marathon » ?", r: "De la bataille de Marathon (490 av. J.-C.)" },
              { q: "Quelle est la distance exacte d'un marathon ?", r: "42,195 km" },
              { q: "Depuis quand le marathon fait-il 42,195 km ?", r: "Les JO de Londres 1908" },
              { q: "Combien de titres NBA Michael Jordan a-t-il ?", r: "6 (avec les Chicago Bulls)" },
              { q: "Pourquoi Jordan a-t-il été coupé de son équipe au lycée ?", r: "Jugé trop petit" },
              { q: "Quelle couleur représente l'Europe dans les anneaux olympiques ?", r: "Bleu" },
              { q: "Quel surnom donne-t-on à Nadal ?", r: "Le roi de la terre battue" }
            ]
          },
          {
            id: "w1d7t4", type: "quiz",
            title: "Mini-quiz : Sport",
            questions: [
              { q: "Quel est le record du monde du 100m ?", r: "9,58 s (Bolt)", hint: "Berlin, 2009" },
              { q: "Combien de fois Nadal a-t-il gagné Roland-Garros ?", r: "14", hint: "Le roi de la terre battue" },
              { q: "Quelle est la distance exacte d'un marathon ?", r: "42,195 km", hint: "Fixée aux JO de Londres 1908" },
              { q: "Combien de titres NBA Michael Jordan a-t-il ?", r: "6", hint: "Tous avec les Chicago Bulls" }
            ]
          },
          {
            id: "w1d7t5", type: "lecture",
            title: "Questions pour un Champion — Episode complet",
            subtitle: "Vidéo YouTube — Regarder une émission QPUC pour s'imprégner du rythme (37 min)",
            url: "https://www.youtube.com/watch?v=pBIUUSsl0i0",
            duration: "37 min"
          },
          {
            id: "w1d7t6", type: "fiche",
            title: "Mix culture G — détails improbables",
            items: [
              { fact: "Le cœur des demi-sœurs de Cendrillon s'appellent Javotte et Anastasie", detail: "Dans la version Disney (1950). Dans le conte de Perrault (1697), elles n'ont pas de nom. Le soulier est en verre, pas en vair (fourrure)." },
              { fact: "Picasso a peint Guernica en réaction au bombardement de la ville en 1937", detail: "Le tableau fait 3,5 m × 7,8 m. Il est au Musée Reina Sofía à Madrid. Picasso a dit : « Non, c'est vous qui avez fait ça » à un officier nazi." },
              { fact: "Le vrai nom de Batman est Bruce Wayne", detail: "Bruce Wayne est milliardaire à Gotham City. Son majordome s'appelle Alfred. Premier comic : Detective Comics #27 (1939)." },
              { fact: "La Tour Eiffel a été construite pour l'Exposition universelle de 1889", detail: "Gustave Eiffel. 324 mètres de haut. 18 038 pièces métalliques. 2,5 millions de rivets. Elle reçoit 7 millions de visiteurs par an." },
              { fact: "Le nom complet de Barbie est Barbara Millicent Roberts", detail: "Créée par Ruth Handler (Mattel) en 1959. Ken s'appelle Kenneth Sean Carson. Barbie a eu plus de 200 métiers différents." }
            ],
            flashcards: [
              { q: "Comment s'appellent les demi-sœurs de Cendrillon (Disney) ?", r: "Javotte et Anastasie" },
              { q: "Le soulier de Cendrillon est en verre ou en vair ?", r: "En verre (dans la version de Perrault)" },
              { q: "Où est exposé Guernica de Picasso ?", r: "Au Musée Reina Sofía à Madrid" },
              { q: "Quelles sont les dimensions de Guernica ?", r: "3,5 m × 7,8 m" },
              { q: "Quel événement a inspiré Guernica ?", r: "Le bombardement de la ville de Guernica en 1937" },
              { q: "Quel est le vrai nom de Batman ?", r: "Bruce Wayne" },
              { q: "Comment s'appelle le majordome de Batman ?", r: "Alfred" },
              { q: "En quelle année la Tour Eiffel a-t-elle été construite ?", r: "1889 (Exposition universelle)" },
              { q: "Combien de rivets la Tour Eiffel contient-elle ?", r: "2,5 millions" },
              { q: "Combien de visiteurs la Tour Eiffel reçoit-elle par an ?", r: "7 millions" },
              { q: "Quel est le nom complet de Barbie ?", r: "Barbara Millicent Roberts" },
              { q: "Qui a créé Barbie ?", r: "Ruth Handler (Mattel), en 1959" },
              { q: "Quel est le nom complet de Ken (petit ami de Barbie) ?", r: "Kenneth Sean Carson" },
              { q: "Combien de métiers Barbie a-t-elle eus ?", r: "Plus de 200" },
              { q: "Quelle hauteur fait la Tour Eiffel ?", r: "324 mètres" }
            ]
          },
          {
            id: "w1d7t7", type: "quiz",
            title: "Quiz final mixte — Semaine 1",
            questions: [
              { q: "Comment s'appelle le bébé du hérisson ?", r: "Le choupisson" },
              { q: "Combien d'os a un adulte ?", r: "206" },
              { q: "Qui a inventé le Camembert ?", r: "Marie Harel" },
              { q: "Quel est le vrai nom de Johnny Hallyday ?", r: "Jean-Philippe Smet" },
              { q: "D'où vient le mot salaire ?", r: "Du sel" },
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Combien de Ballons d'Or Messi a-t-il ?", r: "8" },
              { q: "Comment s'appellent les demi-sœurs de Cendrillon ?", r: "Javotte et Anastasie" },
              { q: "Quel aliment ne périme jamais ?", r: "Le miel" },
              { q: "De quel pays vient le croissant ?", r: "L'Autriche" }
            ]
          }
        ]
      }
    ]
  }
];
