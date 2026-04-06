const PROGRAMME_WEEKS = [
  {
    week: 1,
    title: "Les Bases",
    description: "Culture G de base : capitales, géo, animaux, corps humain, sport, culture pop",
    days: [
      // === JOUR 1 : CAPITALES DU MONDE ===
      {
        day: 1, label: "Lundi", theme: "Capitales du monde", icon: "🏙️",
        objectif: "Connaître les capitales pièges qu'on confond toujours",
        tasks: [
          {
            id: "w1d1t0", type: "lecture",
            title: "Les capitales du monde en 10 minutes",
            subtitle: "Les capitales les plus surprenantes",
            url: "https://www.youtube.com/watch?v=88MaNPF4plI",
            duration: "10 min"
          },
          {
            id: "w1d1t1", type: "fiche",
            title: "Capitales pièges classiques",
            items: [
              { fact: "La capitale de l'Australie est Canberra, pas Sydney", detail: "Sydney est la plus grande ville mais Canberra a été construite exprès comme capitale en 1913, entre Sydney et Melbourne qui se disputaient le titre." },
              { fact: "La capitale du Brésil est Brasília, pas Rio de Janeiro", detail: "Brasília a été construite en 41 mois dans les années 1960 par l'architecte Oscar Niemeyer. Rio était l'ancienne capitale." },
              { fact: "La capitale de la Turquie est Ankara, pas Istanbul", detail: "Atatürk a déplacé la capitale d'Istanbul à Ankara en 1923 pour marquer la rupture avec l'Empire ottoman." },
              { fact: "La capitale du Canada est Ottawa, pas Toronto ou Montréal", detail: "La reine Victoria a choisi Ottawa en 1857 car elle était à la frontière entre le Canada anglophone et francophone." },
              { fact: "La capitale du Myanmar est Naypyidaw, pas Rangoon", detail: "La junte militaire a déplacé la capitale en 2006. Naypyidaw est une ville fantôme géante construite en secret." }
            ],
            flashcards: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Quelle est la capitale du Brésil ?", r: "Brasília" },
              { q: "Quelle est la capitale de la Turquie ?", r: "Ankara" },
              { q: "Quelle est la capitale du Canada ?", r: "Ottawa" },
              { q: "Quelle est la capitale du Myanmar ?", r: "Naypyidaw" },
              { q: "Qui a choisi Ottawa comme capitale du Canada ?", r: "La reine Victoria" },
              { q: "En quelle décennie Brasília a-t-elle été construite ?", r: "Les années 1960" },
              { q: "Quel architecte a conçu Brasília ?", r: "Oscar Niemeyer" },
              { q: "Pourquoi Ankara est-elle devenue capitale à la place d'Istanbul ?", r: "Pour marquer la rupture avec l'Empire ottoman" },
              { q: "Pourquoi Naypyidaw est-elle surnommée ville fantôme ?", r: "Construite en secret par la junte, elle est quasi vide" },
              { q: "Quelle était l'ancienne capitale du Brésil ?", r: "Rio de Janeiro" },
              { q: "Canberra a été construite pour résoudre quel conflit ?", r: "La rivalité entre Sydney et Melbourne" }
            ]
          },
          {
            id: "w1d1t2", type: "quiz",
            title: "Quiz : Capitales pièges",
            questions: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra", choices: ["Sydney", "Melbourne", "Canberra", "Perth"] },
              { q: "Quelle est la capitale du Brésil ?", r: "Brasília", choices: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"] },
              { q: "Quelle est la capitale de la Turquie ?", r: "Ankara", choices: ["Istanbul", "Ankara", "Izmir", "Antalya"] },
              { q: "Quelle est la capitale du Canada ?", r: "Ottawa", choices: ["Toronto", "Montréal", "Vancouver", "Ottawa"] },
              { q: "Quelle est la capitale du Myanmar ?", r: "Naypyidaw", choices: ["Rangoon", "Mandalay", "Naypyidaw", "Bagan"] },
              { q: "Quel architecte a conçu Brasília ?", r: "Oscar Niemeyer", choices: ["Le Corbusier", "Oscar Niemeyer", "Zaha Hadid", "Frank Gehry"] }
            ]
          },
          {
            id: "w1d1t3", type: "fiche",
            title: "Capitales d'Europe à connaître",
            items: [
              { fact: "La capitale de la Suisse est Berne, pas Genève ou Zurich", detail: "Genève est le siège de l'ONU et Zurich la plus grande ville, mais Berne est la capitale fédérale depuis 1848." },
              { fact: "La capitale de la Slovaquie est Bratislava", detail: "C'est la seule capitale au monde bordant deux pays étrangers (Autriche et Hongrie). Elle est à 60 km de Vienne." },
              { fact: "La capitale du Monténégro est Podgorica", detail: "Anciennement Titograd sous la Yougoslavie. Le Monténégro est indépendant depuis 2006." },
              { fact: "La capitale de Malte est La Valette", detail: "C'est la plus petite capitale de l'UE avec seulement 6 000 habitants. Elle porte le nom d'un grand maître des Chevaliers de l'ordre de Malte." },
              { fact: "La capitale de la Moldavie est Chișinău", detail: "La Moldavie est le pays le moins visité d'Europe. Sa capitale se prononce 'Kichinéou'." }
            ],
            flashcards: [
              { q: "Quelle est la capitale de la Suisse ?", r: "Berne" },
              { q: "Quelle est la capitale de la Slovaquie ?", r: "Bratislava" },
              { q: "Quelle est la capitale du Monténégro ?", r: "Podgorica" },
              { q: "Quelle est la capitale de Malte ?", r: "La Valette" },
              { q: "Quelle est la capitale de la Moldavie ?", r: "Chișinău" },
              { q: "Quelle est la plus petite capitale de l'UE ?", r: "La Valette" },
              { q: "Quelle capitale européenne borde deux pays étrangers ?", r: "Bratislava" },
              { q: "Comment s'appelait Podgorica sous la Yougoslavie ?", r: "Titograd" },
              { q: "Depuis quand le Monténégro est-il indépendant ?", r: "2006" },
              { q: "Quel est le pays le moins visité d'Europe ?", r: "La Moldavie" },
              { q: "De qui La Valette porte-t-elle le nom ?", r: "Un grand maître des Chevaliers de l'ordre de Malte" },
              { q: "À quelle distance Bratislava se trouve-t-elle de Vienne ?", r: "60 km" }
            ]
          },
          {
            id: "w1d1t4", type: "quiz",
            title: "Quiz : Capitales Europe",
            questions: [
              { q: "Quelle est la capitale de la Suisse ?", r: "Berne", choices: ["Zurich", "Genève", "Berne", "Lausanne"] },
              { q: "Quelle est la plus petite capitale de l'UE ?", r: "La Valette", choices: ["Luxembourg", "La Valette", "Monaco", "Ljubljana"] },
              { q: "Quelle capitale est à 60 km de Vienne ?", r: "Bratislava", choices: ["Prague", "Budapest", "Bratislava", "Ljubljana"] },
              { q: "Quelle est la capitale du Monténégro ?", r: "Podgorica", choices: ["Pristina", "Podgorica", "Tirana", "Skopje"] },
              { q: "Comment s'appelait Podgorica sous la Yougoslavie ?", r: "Titograd", choices: ["Stalingrad", "Titograd", "Leningrad", "Petrograd"] },
              { q: "Quelle est la capitale de la Moldavie ?", r: "Chișinău", choices: ["Minsk", "Chișinău", "Kiev", "Tbilissi"] }
            ]
          },
          {
            id: "w1d1t5", type: "fiche",
            title: "Capitales d'Afrique et d'Asie",
            items: [
              { fact: "La capitale du Maroc est Rabat, pas Casablanca ou Marrakech", detail: "Casablanca est la plus grande ville, Marrakech la plus touristique, mais Rabat est la capitale depuis 1912." },
              { fact: "La capitale de l'Inde est New Delhi, pas Mumbai (Bombay)", detail: "Les Britanniques ont déplacé la capitale de Calcutta à New Delhi en 1911. Mumbai est la capitale économique." },
              { fact: "La capitale du Nigeria est Abuja, pas Lagos", detail: "Lagos était la capitale jusqu'en 1991. Abuja a été choisie car elle est au centre du pays, neutre entre le nord musulman et le sud chrétien." },
              { fact: "La capitale de la Tanzanie est Dodoma, pas Dar es Salaam", detail: "Dar es Salaam reste la plus grande ville et le centre économique. Le transfert vers Dodoma date de 1996." },
              { fact: "La capitale du Sri Lanka est Sri Jayawardenapura Kotte", detail: "C'est la capitale la plus longue à écrire ! La plupart des gens disent Colombo, qui est la capitale commerciale." }
            ],
            flashcards: [
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat" },
              { q: "Quelle est la capitale de l'Inde ?", r: "New Delhi" },
              { q: "Quelle est la capitale du Nigeria ?", r: "Abuja" },
              { q: "Quelle est la capitale de la Tanzanie ?", r: "Dodoma" },
              { q: "Quelle est la capitale officielle du Sri Lanka ?", r: "Sri Jayawardenapura Kotte" },
              { q: "Quelle ville est la capitale économique de l'Inde ?", r: "Mumbai" },
              { q: "Pourquoi Abuja a-t-elle remplacé Lagos ?", r: "Elle est au centre, neutre entre nord musulman et sud chrétien" },
              { q: "Quelle est la capitale commerciale du Sri Lanka ?", r: "Colombo" },
              { q: "En quelle année New Delhi est-elle devenue capitale ?", r: "1911" },
              { q: "Quelle est la plus grande ville du Maroc ?", r: "Casablanca" },
              { q: "Depuis quand Rabat est-elle la capitale du Maroc ?", r: "1912" },
              { q: "Quelle est la plus grande ville du Nigeria ?", r: "Lagos" }
            ]
          },
          {
            id: "w1d1t6", type: "quiz",
            title: "Quiz final : Capitales monde",
            questions: [
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat", choices: ["Casablanca", "Marrakech", "Rabat", "Fès"] },
              { q: "Quelle est la capitale du Nigeria ?", r: "Abuja", choices: ["Lagos", "Abuja", "Kano", "Ibadan"] },
              { q: "Quelle est la capitale officielle du Sri Lanka ?", r: "Sri Jayawardenapura Kotte", choices: ["Colombo", "Kandy", "Sri Jayawardenapura Kotte", "Galle"] },
              { q: "Quelle est la capitale de l'Inde ?", r: "New Delhi", choices: ["Mumbai", "Calcutta", "New Delhi", "Bangalore"] },
              { q: "Quelle est la capitale de la Tanzanie ?", r: "Dodoma", choices: ["Dar es Salaam", "Dodoma", "Zanzibar", "Arusha"] },
              { q: "Quelle ville est la capitale économique de l'Inde ?", r: "Mumbai", choices: ["New Delhi", "Calcutta", "Mumbai", "Chennai"] }
            ]
          }
        ]
      },

      // === JOUR 2 : GÉOGRAPHIE FRANCE ===
      {
        day: 2, label: "Mardi", theme: "Géographie de la France", icon: "🇫🇷",
        objectif: "Maîtriser les fleuves, montagnes et régions de France",
        tasks: [
          {
            id: "w1d2t0", type: "lecture",
            title: "La géographie de la France en 10 min",
            subtitle: "Fleuves, montagnes, régions — l'essentiel",
            url: "https://www.youtube.com/watch?v=SuGr6IpWJiI",
            duration: "10 min"
          },
          {
            id: "w1d2t1", type: "fiche",
            title: "Les 5 grands fleuves français",
            items: [
              { fact: "La Loire est le plus long fleuve de France (1 012 km)", detail: "Elle prend sa source au Mont Gerbier-de-Jonc en Ardèche et se jette dans l'Atlantique à Saint-Nazaire." },
              { fact: "La Seine fait 776 km et traverse Paris", detail: "Elle prend sa source sur le plateau de Langres en Côte-d'Or et se jette dans la Manche au Havre." },
              { fact: "Le Rhône est le plus puissant fleuve français", detail: "Il naît en Suisse dans le glacier du Rhône, traverse le lac Léman, puis Lyon, et se jette en Méditerranée en Camargue." },
              { fact: "La Garonne prend sa source en Espagne (Val d'Aran)", detail: "Elle traverse Toulouse et Bordeaux avant de former l'estuaire de la Gironde avec la Dordogne." },
              { fact: "Le Rhin forme la frontière avec l'Allemagne sur 190 km", detail: "C'est le fleuve le plus long d'Europe occidentale (1 230 km au total). Strasbourg est sur le Rhin." }
            ],
            flashcards: [
              { q: "Quel est le plus long fleuve de France ?", r: "La Loire (1 012 km)" },
              { q: "Où la Loire prend-elle sa source ?", r: "Au Mont Gerbier-de-Jonc en Ardèche" },
              { q: "Où la Seine se jette-t-elle ?", r: "Dans la Manche, au Havre" },
              { q: "Quel est le fleuve le plus puissant de France ?", r: "Le Rhône" },
              { q: "Dans quel pays la Garonne prend-elle sa source ?", r: "En Espagne (Val d'Aran)" },
              { q: "Quelles villes la Garonne traverse-t-elle ?", r: "Toulouse et Bordeaux" },
              { q: "Qu'est-ce que l'estuaire de la Gironde ?", r: "La rencontre de la Garonne et de la Dordogne" },
              { q: "Quelle ville française est sur le Rhin ?", r: "Strasbourg" },
              { q: "Où le Rhône se jette-t-il ?", r: "En Méditerranée, en Camargue" },
              { q: "Quel lac le Rhône traverse-t-il ?", r: "Le lac Léman" },
              { q: "Quelle est la longueur de la Seine ?", r: "776 km" },
              { q: "Où la Seine prend-elle sa source ?", r: "Sur le plateau de Langres en Côte-d'Or" }
            ]
          },
          {
            id: "w1d2t2", type: "quiz",
            title: "Quiz : Fleuves français",
            questions: [
              { q: "Quel est le plus long fleuve de France ?", r: "La Loire", choices: ["La Seine", "Le Rhône", "La Loire", "La Garonne"] },
              { q: "Où la Loire prend-elle sa source ?", r: "Mont Gerbier-de-Jonc", choices: ["Mont Blanc", "Mont Gerbier-de-Jonc", "Plateau de Langres", "Pyrénées"] },
              { q: "Quel fleuve traverse Toulouse et Bordeaux ?", r: "La Garonne", choices: ["La Loire", "La Dordogne", "La Garonne", "Le Rhône"] },
              { q: "Quelle ville est sur le Rhin ?", r: "Strasbourg", choices: ["Colmar", "Mulhouse", "Strasbourg", "Metz"] },
              { q: "Où le Rhône se jette-t-il ?", r: "En Méditerranée", choices: ["Dans l'Atlantique", "Dans la Manche", "En Méditerranée", "Dans la mer du Nord"] },
              { q: "Quel est le fleuve le plus puissant de France ?", r: "Le Rhône", choices: ["La Seine", "Le Rhône", "La Loire", "Le Rhin"] }
            ]
          },
          {
            id: "w1d2t3", type: "fiche",
            title: "Montagnes et points culminants",
            items: [
              { fact: "Le Mont Blanc (4 808 m) est le plus haut sommet des Alpes", detail: "Il est à la frontière franco-italienne. Les Italiens considèrent que le sommet est aussi italien." },
              { fact: "Le Puy de Sancy (1 885 m) est le plus haut sommet du Massif Central", detail: "C'est un ancien volcan dans le Puy-de-Dôme. La Dordogne y prend sa source." },
              { fact: "Le Pic du Midi d'Ossau (2 884 m) est un sommet emblématique des Pyrénées", detail: "Le plus haut des Pyrénées françaises est le Vignemale (3 298 m). L'Aneto (3 404 m) côté espagnol." },
              { fact: "Le Grand Ballon (1 424 m) est le point culminant des Vosges", detail: "Les Vosges sont les plus vieilles montagnes de France, avec des sommets arrondis appelés 'ballons'." },
              { fact: "Le Crêt de la Neige (1 720 m) est le point culminant du Jura", detail: "Le massif du Jura a donné son nom à la période du Jurassique (ère des dinosaures)." }
            ],
            flashcards: [
              { q: "Quelle est l'altitude du Mont Blanc ?", r: "4 808 m" },
              { q: "Quel est le plus haut sommet du Massif Central ?", r: "Le Puy de Sancy (1 885 m)" },
              { q: "Quel fleuve prend sa source au Puy de Sancy ?", r: "La Dordogne" },
              { q: "Quel est le plus haut sommet des Pyrénées françaises ?", r: "Le Vignemale (3 298 m)" },
              { q: "Comment appelle-t-on les sommets arrondis des Vosges ?", r: "Des ballons" },
              { q: "Quel est le point culminant des Vosges ?", r: "Le Grand Ballon (1 424 m)" },
              { q: "Quel est le point culminant du Jura ?", r: "Le Crêt de la Neige (1 720 m)" },
              { q: "Le Jura a donné son nom à quelle période géologique ?", r: "Le Jurassique" },
              { q: "Le Mont Blanc est à la frontière de quels pays ?", r: "France et Italie" },
              { q: "Quel est le plus haut sommet des Pyrénées (côté espagnol) ?", r: "L'Aneto (3 404 m)" },
              { q: "Dans quel département se trouve le Puy de Sancy ?", r: "Le Puy-de-Dôme" },
              { q: "Quelles sont les plus vieilles montagnes de France ?", r: "Les Vosges" }
            ]
          },
          {
            id: "w1d2t4", type: "quiz",
            title: "Quiz : Montagnes de France",
            questions: [
              { q: "Quelle est l'altitude du Mont Blanc ?", r: "4 808 m", choices: ["4 208 m", "4 808 m", "5 108 m", "4 600 m"] },
              { q: "Quel est le point culminant du Massif Central ?", r: "Puy de Sancy", choices: ["Puy de Dôme", "Puy de Sancy", "Plomb du Cantal", "Mont Aigoual"] },
              { q: "Comment appelle-t-on les sommets des Vosges ?", r: "Des ballons", choices: ["Des dômes", "Des ballons", "Des pics", "Des crêtes"] },
              { q: "Le Jura a donné son nom à quelle période ?", r: "Le Jurassique", choices: ["Le Crétacé", "Le Jurassique", "Le Carbonifère", "Le Trias"] },
              { q: "Quel est le plus haut sommet des Pyrénées françaises ?", r: "Le Vignemale", choices: ["Le Pic du Midi", "L'Aneto", "Le Vignemale", "Le Canigou"] },
              { q: "Quel fleuve naît au Puy de Sancy ?", r: "La Dordogne", choices: ["La Loire", "L'Allier", "La Dordogne", "Le Lot"] }
            ]
          }
        ]
      },

      // === JOUR 3 : ANIMAUX & NATURE ===
      {
        day: 3, label: "Mercredi", theme: "Animaux & Nature", icon: "🦁",
        objectif: "Fun facts animaux qu'on adore poser en quiz",
        tasks: [
          {
            id: "w1d3t0", type: "lecture",
            title: "50 faits incroyables sur les animaux",
            subtitle: "Les fun facts les plus dingues du règne animal",
            url: "https://www.youtube.com/watch?v=gKeBMgTEMOc",
            duration: "12 min"
          },
          {
            id: "w1d3t1", type: "fiche",
            title: "Noms des bébés animaux & cris",
            items: [
              { fact: "Le bébé du hérisson s'appelle le choupisson", detail: "Le levraut (lièvre), le marcassin (sanglier), le girafon (girafe), le louveteau (loup)." },
              { fact: "Le cri du cerf s'appelle le brame", detail: "Le corbeau croasse, la grenouille coasse. Le chameau blatère. La hyène ricane. Le rhinocéros barrit." },
              { fact: "Un groupe de flamants roses s'appelle une flamboyance", detail: "Un groupe de corbeaux : un assassinat. Un groupe de hiboux : un parlement. Un groupe de lions : une troupe." },
              { fact: "Le mâle de l'abeille est le faux-bourdon", detail: "Il n'a pas de dard et ne pique pas. Son seul rôle est de féconder la reine. Il meurt juste après." },
              { fact: "La femelle du canard est la cane, pas la canarde", detail: "Le bébé est le caneton. Le cri du canard s'appelle le cancanement (ou nasillage)." }
            ],
            flashcards: [
              { q: "Comment s'appelle le bébé du hérisson ?", r: "Le choupisson" },
              { q: "Comment s'appelle le bébé du sanglier ?", r: "Le marcassin" },
              { q: "Comment s'appelle le bébé du lièvre ?", r: "Le levraut" },
              { q: "Comment appelle-t-on le cri du cerf ?", r: "Le brame" },
              { q: "Comment appelle-t-on le cri du chameau ?", r: "Le blatèrement" },
              { q: "Quelle différence entre croasser et coasser ?", r: "Le corbeau croasse, la grenouille coasse" },
              { q: "Comment appelle-t-on un groupe de flamants roses ?", r: "Une flamboyance" },
              { q: "Comment appelle-t-on un groupe de corbeaux ?", r: "Un assassinat" },
              { q: "Comment s'appelle le mâle de l'abeille ?", r: "Le faux-bourdon" },
              { q: "Comment s'appelle la femelle du canard ?", r: "La cane" },
              { q: "Comment appelle-t-on le cri du canard ?", r: "Le cancanement" },
              { q: "Comment appelle-t-on un groupe de hiboux ?", r: "Un parlement" }
            ]
          },
          {
            id: "w1d3t2", type: "quiz",
            title: "Quiz : Animaux noms & cris",
            questions: [
              { q: "Comment s'appelle le bébé du sanglier ?", r: "Le marcassin", choices: ["Le porcelet", "Le marcassin", "Le goret", "Le cochonnet"] },
              { q: "Quel animal brame ?", r: "Le cerf", choices: ["Le loup", "Le cerf", "L'ours", "Le daim"] },
              { q: "Comment appelle-t-on un groupe de corbeaux ?", r: "Un assassinat", choices: ["Un parlement", "Un assassinat", "Une meute", "Un vol"] },
              { q: "Comment s'appelle le mâle de l'abeille ?", r: "Le faux-bourdon", choices: ["Le bourdon", "Le faux-bourdon", "L'ouvrière", "Le frelon"] },
              { q: "Quel animal coasse ?", r: "La grenouille", choices: ["Le corbeau", "La grenouille", "Le canard", "La cigale"] },
              { q: "Comment s'appelle le bébé du hérisson ?", r: "Le choupisson", choices: ["Le hérissonneau", "Le choupisson", "Le piquant", "L'oursin"] }
            ]
          },
          {
            id: "w1d3t3", type: "fiche",
            title: "Records & bizarreries animales",
            items: [
              { fact: "Le cœur d'une baleine bleue pèse 600 kg", detail: "Un enfant pourrait ramper dans ses artères. C'est le plus gros animal ayant jamais existé sur Terre." },
              { fact: "Les empreintes digitales du koala sont identiques à celles de l'homme", detail: "Des empreintes de koala ont déjà été confondues avec des empreintes humaines sur des scènes de crime." },
              { fact: "Un escargot peut dormir 3 ans d'affilée", detail: "C'est l'estivation : il entre en sommeil quand il fait trop sec. Le record est le loir : 11 mois par an." },
              { fact: "Le homard a le sang bleu", detail: "Son sang contient de l'hémocyanine (cuivre) au lieu de l'hémoglobine (fer). La pieuvre aussi." },
              { fact: "La langue du caméléon est 1,5 fois plus longue que son corps", detail: "Elle se déploie en 0,07 seconde. Plus rapide qu'un clignement d'œil." }
            ],
            flashcards: [
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "600 kg" },
              { q: "Quel animal a des empreintes identiques à l'homme ?", r: "Le koala" },
              { q: "Combien de temps un escargot peut-il dormir ?", r: "3 ans" },
              { q: "Pourquoi le homard a-t-il le sang bleu ?", r: "Son sang contient de l'hémocyanine (à base de cuivre)" },
              { q: "Combien de fois la langue du caméléon est-elle plus longue que son corps ?", r: "1,5 fois" },
              { q: "Quel animal dort jusqu'à 11 mois par an ?", r: "Le loir" },
              { q: "Comment s'appelle le repos prolongé de l'escargot ?", r: "L'estivation" },
              { q: "Quel autre animal marin a le sang bleu ?", r: "La pieuvre" },
              { q: "En combien de temps la langue du caméléon se déploie-t-elle ?", r: "0,07 seconde" },
              { q: "Quel est le plus gros animal ayant jamais existé ?", r: "La baleine bleue" },
              { q: "Quelle molécule rend le sang du homard bleu ?", r: "L'hémocyanine" },
              { q: "Quelle molécule rend le sang humain rouge ?", r: "L'hémoglobine" }
            ]
          },
          {
            id: "w1d3t4", type: "quiz",
            title: "Quiz final : Animaux records",
            questions: [
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "600 kg", choices: ["100 kg", "600 kg", "1 tonne", "200 kg"] },
              { q: "Quel animal a des empreintes confondues avec celles des humains ?", r: "Le koala", choices: ["Le chimpanzé", "Le koala", "Le gorille", "L'orang-outan"] },
              { q: "Pourquoi le homard a-t-il le sang bleu ?", r: "Hémocyanine (cuivre)", choices: ["Hémoglobine (fer)", "Hémocyanine (cuivre)", "Chlorophylle", "Mélanine"] },
              { q: "Combien de temps un escargot peut-il dormir ?", r: "3 ans", choices: ["6 mois", "1 an", "3 ans", "3 mois"] },
              { q: "Quel est le plus gros animal ayant jamais existé ?", r: "La baleine bleue", choices: ["L'éléphant d'Afrique", "Le dinosaure T-Rex", "La baleine bleue", "Le requin baleine"] },
              { q: "Quel animal dort jusqu'à 11 mois par an ?", r: "Le loir", choices: ["La marmotte", "Le loir", "L'ours", "Le hérisson"] }
            ]
          }
        ]
      },

      // === JOUR 4 : CORPS HUMAIN ===
      {
        day: 4, label: "Jeudi", theme: "Corps humain & Santé", icon: "🧬",
        objectif: "Les chiffres et fun facts du corps humain",
        tasks: [
          {
            id: "w1d4t0", type: "lecture",
            title: "Le corps humain en chiffres",
            subtitle: "Tout ce que tu ne savais pas sur ton propre corps",
            url: "https://www.youtube.com/watch?v=Ae4MadKPJC0",
            duration: "10 min"
          },
          {
            id: "w1d4t1", type: "fiche",
            title: "Chiffres fous du corps humain",
            items: [
              { fact: "Le corps humain contient 206 os à l'âge adulte", detail: "Un bébé en a environ 300 — certains fusionnent en grandissant. Le plus petit os est l'étrier dans l'oreille (3 mm)." },
              { fact: "Le fémur est l'os le plus long du corps", detail: "Il mesure environ 1/4 de la taille de la personne. C'est aussi l'os le plus solide." },
              { fact: "Le corps produit 1 litre de salive par jour", detail: "En une vie, c'est environ 35 000 litres, soit une piscine. La salive contient des antidouleurs 6× plus puissants que la morphine." },
              { fact: "Le cerveau consomme 20% de l'énergie du corps", detail: "Alors qu'il ne représente que 2% du poids. Il est composé de 75% d'eau." },
              { fact: "Les ongles des mains poussent 4× plus vite que ceux des pieds", detail: "Il faut environ 6 mois pour renouveler un ongle de main, 12 à 18 mois pour un ongle de pied." }
            ],
            flashcards: [
              { q: "Combien d'os a un adulte ?", r: "206" },
              { q: "Combien d'os a un bébé ?", r: "Environ 300" },
              { q: "Quel est le plus petit os du corps ?", r: "L'étrier (dans l'oreille, 3 mm)" },
              { q: "Quel est l'os le plus long du corps ?", r: "Le fémur" },
              { q: "Combien de salive le corps produit-il par jour ?", r: "1 litre" },
              { q: "Quel pourcentage d'énergie le cerveau consomme-t-il ?", r: "20%" },
              { q: "Quel pourcentage du poids du corps le cerveau représente-t-il ?", r: "2%" },
              { q: "De combien d'eau le cerveau est-il composé ?", r: "75%" },
              { q: "Les ongles des mains poussent combien de fois plus vite que ceux des pieds ?", r: "4 fois" },
              { q: "Combien de temps faut-il pour renouveler un ongle de main ?", r: "Environ 6 mois" },
              { q: "L'os le plus solide du corps est aussi le plus long, lequel ?", r: "Le fémur" },
              { q: "Quel est le plus petit os du corps humain ?", r: "L'étrier (3 mm, dans l'oreille)" }
            ]
          },
          {
            id: "w1d4t2", type: "quiz",
            title: "Quiz : Corps humain",
            questions: [
              { q: "Combien d'os a un adulte ?", r: "206", choices: ["186", "206", "226", "256"] },
              { q: "Quel est l'os le plus long du corps ?", r: "Le fémur", choices: ["Le tibia", "Le fémur", "L'humérus", "Le radius"] },
              { q: "Quel est le plus petit os du corps ?", r: "L'étrier", choices: ["Le marteau", "L'enclume", "L'étrier", "Le pisiforme"] },
              { q: "Quel pourcentage d'énergie le cerveau consomme-t-il ?", r: "20%", choices: ["5%", "10%", "20%", "40%"] },
              { q: "Combien de salive produit-on par jour ?", r: "1 litre", choices: ["0,5 litre", "1 litre", "2 litres", "0,2 litre"] },
              { q: "Combien d'os a un nouveau-né ?", r: "Environ 300", choices: ["206", "Environ 300", "Environ 150", "350"] }
            ]
          },
          {
            id: "w1d4t3", type: "fiche",
            title: "Organes et sens",
            items: [
              { fact: "Le foie est le seul organe qui peut se régénérer", detail: "On peut retirer 75% du foie et il repoussera en quelques semaines. C'est le plus gros organe interne (1,5 kg)." },
              { fact: "L'intestin grêle mesure 6 à 7 mètres de long", detail: "Déplié, sa surface ferait la taille d'un terrain de tennis grâce aux villosités." },
              { fact: "L'œil humain peut distinguer environ 10 millions de couleurs", detail: "Grâce à 3 types de cônes (rouge, vert, bleu). Les daltoniens n'en ont que 2 types fonctionnels." },
              { fact: "Le nez humain peut détecter plus d'un trillion d'odeurs", detail: "C'est bien plus que les 10 000 qu'on croyait. Les cellules olfactives se renouvellent toutes les 6 semaines." },
              { fact: "Le cœur bat environ 100 000 fois par jour", detail: "Soit 3 milliards de battements dans une vie. Il pompe 7 500 litres de sang par jour." }
            ],
            flashcards: [
              { q: "Quel est le seul organe capable de se régénérer ?", r: "Le foie" },
              { q: "Combien pèse le foie ?", r: "Environ 1,5 kg" },
              { q: "Quelle est la longueur de l'intestin grêle ?", r: "6 à 7 mètres" },
              { q: "À quoi correspond la surface dépliée de l'intestin grêle ?", r: "Un terrain de tennis" },
              { q: "Combien de couleurs l'œil humain peut-il distinguer ?", r: "Environ 10 millions" },
              { q: "Combien de types de cônes a l'œil humain ?", r: "3 (rouge, vert, bleu)" },
              { q: "Combien de fois le cœur bat-il par jour ?", r: "Environ 100 000 fois" },
              { q: "Combien de litres de sang le cœur pompe-t-il par jour ?", r: "7 500 litres" },
              { q: "Combien d'odeurs le nez humain peut-il détecter ?", r: "Plus d'un trillion" },
              { q: "Tous les combien les cellules olfactives se renouvellent-elles ?", r: "Toutes les 6 semaines" },
              { q: "Quel est le plus gros organe interne du corps ?", r: "Le foie" },
              { q: "Qu'est-ce qu'un daltonien a de différent dans les yeux ?", r: "Seulement 2 types de cônes au lieu de 3" }
            ]
          },
          {
            id: "w1d4t4", type: "quiz",
            title: "Quiz final : Organes et sens",
            questions: [
              { q: "Quel organe peut se régénérer à 75% ?", r: "Le foie", choices: ["Le rein", "Le foie", "Le poumon", "Le pancréas"] },
              { q: "Quelle est la longueur de l'intestin grêle ?", r: "6-7 mètres", choices: ["2-3 mètres", "6-7 mètres", "10-12 mètres", "1,5 mètre"] },
              { q: "Combien de fois le cœur bat-il par jour ?", r: "100 000", choices: ["50 000", "100 000", "200 000", "75 000"] },
              { q: "Combien de couleurs l'œil distingue-t-il ?", r: "10 millions", choices: ["1 million", "10 millions", "100 000", "1 milliard"] },
              { q: "Quel est le plus gros organe interne ?", r: "Le foie", choices: ["Le cœur", "Le foie", "Les poumons", "L'estomac"] },
              { q: "La surface dépliée de l'intestin grêle équivaut à quoi ?", r: "Un terrain de tennis", choices: ["Un terrain de foot", "Un terrain de tennis", "Une table", "Un terrain de basket"] }
            ]
          }
        ]
      },

      // === JOUR 5 : SPORT ===
      {
        day: 5, label: "Vendredi", theme: "Sport", icon: "⚽",
        objectif: "Les bases du sport que tout le monde devrait connaître",
        tasks: [
          {
            id: "w1d5t0", type: "lecture",
            title: "Les JO, le foot et les records",
            subtitle: "L'essentiel du sport à savoir",
            url: "https://www.youtube.com/watch?v=Tt-6_L9nqOo",
            duration: "12 min"
          },
          {
            id: "w1d5t1", type: "fiche",
            title: "Football : les classiques",
            items: [
              { fact: "La France a gagné la Coupe du monde en 1998 et 2018", detail: "En 98 : Zidane marque 2 buts de la tête en finale contre le Brésil (3-0). En 2018 : victoire 4-2 contre la Croatie." },
              { fact: "Le Brésil est le pays le plus titré en Coupe du monde (5 victoires)", detail: "1958, 1962, 1970, 1994, 2002. Pelé est le seul joueur à avoir gagné 3 Coupes du monde." },
              { fact: "Le Ballon d'Or récompense le meilleur joueur du monde", detail: "Créé en 1956 par France Football. Messi détient le record avec 8 Ballons d'Or." },
              { fact: "Un match de foot dure 2 × 45 minutes", detail: "Le penalty se tire à 11 mètres. Le hors-jeu existe depuis 1863. Un terrain fait 100-110 m × 64-75 m." },
              { fact: "Kylian Mbappé est devenu le plus jeune buteur français en Coupe du monde", detail: "Il avait 19 ans en 2018. Pelé avait 17 ans quand il a marqué en finale en 1958." }
            ],
            flashcards: [
              { q: "En quelles années la France a-t-elle gagné la Coupe du monde ?", r: "1998 et 2018" },
              { q: "Quel est le score de la finale 1998 ?", r: "3-0 contre le Brésil" },
              { q: "Quel pays a gagné le plus de Coupes du monde ?", r: "Le Brésil (5)" },
              { q: "Qui est le seul joueur à avoir gagné 3 Coupes du monde ?", r: "Pelé" },
              { q: "Qui détient le record de Ballons d'Or ?", r: "Messi (8)" },
              { q: "À quelle distance se tire un penalty ?", r: "11 mètres" },
              { q: "Combien de buts Zidane a-t-il marqué en finale 1998 ?", r: "2 (de la tête)" },
              { q: "Contre qui la France a-t-elle gagné en finale en 2018 ?", r: "La Croatie" },
              { q: "Quel était le score de la finale 2018 ?", r: "4-2" },
              { q: "En quelle année le Ballon d'Or a-t-il été créé ?", r: "1956" },
              { q: "Par quel magazine le Ballon d'Or a-t-il été créé ?", r: "France Football" },
              { q: "Quel âge avait Mbappé lors de son 1er but en Coupe du monde ?", r: "19 ans" }
            ]
          },
          {
            id: "w1d5t2", type: "quiz",
            title: "Quiz : Football",
            questions: [
              { q: "En quelles années la France a-t-elle gagné la Coupe du monde ?", r: "1998 et 2018", choices: ["1998 et 2014", "1998 et 2018", "2006 et 2018", "1998 et 2022"] },
              { q: "Quel pays a le plus de Coupes du monde ?", r: "Le Brésil", choices: ["L'Allemagne", "L'Italie", "Le Brésil", "L'Argentine"] },
              { q: "Qui a le plus de Ballons d'Or ?", r: "Messi", choices: ["Ronaldo", "Messi", "Zidane", "Pelé"] },
              { q: "À quelle distance se tire un penalty ?", r: "11 mètres", choices: ["9 mètres", "11 mètres", "16 mètres", "7 mètres"] },
              { q: "Quel était le score de la finale 1998 ?", r: "3-0", choices: ["2-1", "3-0", "1-0", "2-0"] },
              { q: "Qui est le seul joueur à avoir gagné 3 Coupes du monde ?", r: "Pelé", choices: ["Maradona", "Zidane", "Pelé", "Ronaldo"] }
            ]
          },
          {
            id: "w1d5t3", type: "fiche",
            title: "JO et autres sports",
            items: [
              { fact: "Les JO modernes ont été créés par Pierre de Coubertin en 1896 à Athènes", detail: "La devise olympique est 'Citius, Altius, Fortius' (Plus vite, Plus haut, Plus fort). Les 5 anneaux représentent les 5 continents." },
              { fact: "Usain Bolt détient le record du 100 m en 9,58 secondes", detail: "Record établi à Berlin en 2009. Il détient aussi le record du 200 m (19,19 s). Jamaïcain, surnommé 'Lightning Bolt'." },
              { fact: "Le Tour de France a été créé en 1903", detail: "Le maillot jaune existe depuis 1919. Le Tour fait environ 3 500 km. L'Alpe d'Huez a 21 virages numérotés." },
              { fact: "Le tennis utilise un score bizarre : 15, 30, 40, jeu", detail: "Un Grand Chelem = gagner les 4 tournois majeurs (Open d'Australie, Roland-Garros, Wimbledon, US Open)." },
              { fact: "Le rugby se joue à 15 (ou 7 en version courte)", detail: "Un essai vaut 5 points, une transformation 2, une pénalité 3. Le ballon est ovale." }
            ],
            flashcards: [
              { q: "Qui a créé les JO modernes ?", r: "Pierre de Coubertin" },
              { q: "En quelle année et où ont eu lieu les premiers JO modernes ?", r: "1896 à Athènes" },
              { q: "Quelle est la devise olympique ?", r: "Citius, Altius, Fortius (Plus vite, Plus haut, Plus fort)" },
              { q: "Que représentent les 5 anneaux olympiques ?", r: "Les 5 continents" },
              { q: "Quel est le record du 100 m ?", r: "9,58 secondes (Usain Bolt)" },
              { q: "En quelle année le Tour de France a-t-il été créé ?", r: "1903" },
              { q: "Depuis quand le maillot jaune existe-t-il ?", r: "1919" },
              { q: "Combien de virages numérotés a l'Alpe d'Huez ?", r: "21" },
              { q: "Quels sont les 4 tournois du Grand Chelem en tennis ?", r: "Open d'Australie, Roland-Garros, Wimbledon, US Open" },
              { q: "Combien de points vaut un essai au rugby ?", r: "5 points" },
              { q: "Combien de joueurs par équipe au rugby ?", r: "15" },
              { q: "Quel est le surnom d'Usain Bolt ?", r: "Lightning Bolt" }
            ]
          },
          {
            id: "w1d5t4", type: "quiz",
            title: "Quiz final : JO et sports",
            questions: [
              { q: "Qui a créé les JO modernes ?", r: "Pierre de Coubertin", choices: ["Jules Rimet", "Pierre de Coubertin", "Henry Dunant", "Baron Rothschild"] },
              { q: "Quel est le record du 100 m ?", r: "9,58 s", choices: ["9,72 s", "9,58 s", "9,84 s", "9,45 s"] },
              { q: "Combien vaut un essai au rugby ?", r: "5 points", choices: ["3 points", "5 points", "7 points", "4 points"] },
              { q: "Lequel n'est PAS un tournoi du Grand Chelem ?", r: "Masters de Rome", choices: ["Roland-Garros", "Wimbledon", "Masters de Rome", "US Open"] },
              { q: "En quelle année le Tour de France a-t-il été créé ?", r: "1903", choices: ["1896", "1903", "1919", "1925"] },
              { q: "Que représentent les 5 anneaux olympiques ?", r: "Les 5 continents", choices: ["Les 5 sports originaux", "Les 5 continents", "Les 5 valeurs olympiques", "Les 5 villes fondatrices"] }
            ]
          }
        ]
      },

      // === JOUR 6 : CULTURE POP & TV ===
      {
        day: 6, label: "Samedi", theme: "Culture Pop & TV", icon: "📺",
        objectif: "Émissions cultes, acteurs, chansons — la culture pop française",
        tasks: [
          {
            id: "w1d6t0", type: "lecture",
            title: "Les émissions cultes de la TV française",
            subtitle: "De Nuit Debout à Fort Boyard",
            url: "https://www.youtube.com/watch?v=IhTGqxAMfAs",
            duration: "15 min"
          },
          {
            id: "w1d6t1", type: "fiche",
            title: "Émissions TV cultes",
            items: [
              { fact: "Fort Boyard est diffusé depuis 1990 sur France 2", detail: "Le Fort est au large de La Rochelle. Le Père Fouras pose des énigmes du haut de sa vigie. Passe-Partout et Passe-Muraille sont les personnages récurrents." },
              { fact: "Les 12 Coups de Midi sont présentés par Jean-Luc Reichmann depuis 2010", detail: "Le jeu se termine par l'Étoile Mystérieuse. Le plus grand champion est Christian Quesada (193 participations) puis Émilien." },
              { fact: "Koh-Lanta est diffusé depuis 2001 sur TF1", detail: "Présenté par Denis Brogniart. Le jeu se déroule sur une île déserte. L'épreuve des poteaux est la plus emblématique." },
              { fact: "Questions pour un Champion existe depuis 1988", detail: "Créé par Julien Lepers qui l'a présenté pendant 28 ans. Samuel Étienne a pris la suite en 2016." },
              { fact: "Qui veut gagner des millions était présenté par Jean-Pierre Foucault", detail: "L'émission propose des questions à choix multiples de difficulté croissante. Le gain maximum est 1 million d'euros." }
            ],
            flashcards: [
              { q: "Depuis quand Fort Boyard est-il diffusé ?", r: "1990" },
              { q: "Où se trouve le Fort Boyard ?", r: "Au large de La Rochelle" },
              { q: "Comment s'appelle le personnage qui pose les énigmes dans Fort Boyard ?", r: "Le Père Fouras" },
              { q: "Qui présente Les 12 Coups de Midi ?", r: "Jean-Luc Reichmann" },
              { q: "Comment s'appelle l'épreuve finale des 12 Coups ?", r: "L'Étoile Mystérieuse" },
              { q: "Qui présente Koh-Lanta ?", r: "Denis Brogniart" },
              { q: "Quelle est l'épreuve la plus emblématique de Koh-Lanta ?", r: "L'épreuve des poteaux" },
              { q: "Qui a créé Questions pour un Champion ?", r: "Julien Lepers" },
              { q: "Pendant combien d'années Julien Lepers a-t-il présenté QPUC ?", r: "28 ans" },
              { q: "Qui a remplacé Julien Lepers à QPUC ?", r: "Samuel Étienne" },
              { q: "Qui présentait Qui veut gagner des millions ?", r: "Jean-Pierre Foucault" },
              { q: "Depuis quand Koh-Lanta existe-t-il ?", r: "2001" }
            ]
          },
          {
            id: "w1d6t2", type: "quiz",
            title: "Quiz : TV française",
            questions: [
              { q: "Qui présente Les 12 Coups de Midi ?", r: "Jean-Luc Reichmann", choices: ["Nagui", "Jean-Luc Reichmann", "Laurent Ruquier", "Cyril Hanouna"] },
              { q: "Où se trouve Fort Boyard ?", r: "Au large de La Rochelle", choices: ["En Bretagne", "Au large de La Rochelle", "En Corse", "Au large de Marseille"] },
              { q: "Qui présente Koh-Lanta ?", r: "Denis Brogniart", choices: ["Stéphane Plaza", "Denis Brogniart", "Christophe Dechavanne", "Nikos Aliagas"] },
              { q: "Qui a présenté QPUC pendant 28 ans ?", r: "Julien Lepers", choices: ["Samuel Étienne", "Julien Lepers", "Patrice Laffont", "Michel Drucker"] },
              { q: "Comment s'appelle l'épreuve finale des 12 Coups ?", r: "L'Étoile Mystérieuse", choices: ["Le Coup de Maître", "L'Étoile Mystérieuse", "Le Grand Chelem", "La Question d'Or"] },
              { q: "Depuis quand Fort Boyard existe-t-il ?", r: "1990", choices: ["1985", "1990", "1995", "2000"] }
            ]
          },
          {
            id: "w1d6t3", type: "fiche",
            title: "Cinéma & Musique française",
            items: [
              { fact: "Intouchables (2011) est le plus gros succès du cinéma français", detail: "19,4 millions d'entrées en France. Avec Omar Sy et François Cluzet. Il a été adapté aux USA sous le titre 'The Upside'." },
              { fact: "La Marseillaise a été écrite par Rouget de Lisle en 1792", detail: "Elle a été composée à Strasbourg et s'appelait 'Chant de guerre pour l'armée du Rhin'. Ce sont les soldats marseillais qui l'ont popularisée." },
              { fact: "Edith Piaf est connue pour 'La Vie en Rose' et 'Non, je ne regrette rien'", detail: "Son vrai nom était Edith Giovanna Gassion. 'Piaf' est un mot d'argot pour moineau." },
              { fact: "Le Festival de Cannes a lieu chaque année en mai", detail: "La Palme d'Or est le prix suprême. Le premier festival a eu lieu en 1946. Le tapis rouge fait 60 mètres." },
              { fact: "Jean-Paul Belmondo et Alain Delon sont les 2 plus grandes stars du cinéma français", detail: "Belmondo : 'À bout de souffle', 'Le Professionnel'. Delon : 'Le Samouraï', 'La Piscine'. Ils étaient rivaux." }
            ],
            flashcards: [
              { q: "Quel est le plus gros succès du cinéma français ?", r: "Intouchables (19,4 millions d'entrées)" },
              { q: "Qui a écrit La Marseillaise ?", r: "Rouget de Lisle" },
              { q: "Dans quelle ville La Marseillaise a-t-elle été composée ?", r: "Strasbourg" },
              { q: "Quel était le vrai nom d'Edith Piaf ?", r: "Edith Giovanna Gassion" },
              { q: "Que signifie 'Piaf' en argot ?", r: "Moineau" },
              { q: "Quel est le prix suprême du Festival de Cannes ?", r: "La Palme d'Or" },
              { q: "En quel mois a lieu le Festival de Cannes ?", r: "Mai" },
              { q: "Combien de mètres fait le tapis rouge de Cannes ?", r: "60 mètres" },
              { q: "Avec qui Omar Sy joue-t-il dans Intouchables ?", r: "François Cluzet" },
              { q: "Quel nom portait La Marseillaise à l'origine ?", r: "Chant de guerre pour l'armée du Rhin" },
              { q: "En quelle année La Marseillaise a-t-elle été écrite ?", r: "1792" },
              { q: "En quelle année Intouchables est-il sorti ?", r: "2011" }
            ]
          },
          {
            id: "w1d6t4", type: "quiz",
            title: "Quiz final : Ciné & musique",
            questions: [
              { q: "Quel est le plus gros succès du cinéma français ?", r: "Intouchables", choices: ["Les Visiteurs", "Intouchables", "Bienvenue chez les Ch'tis", "Astérix Mission Cléopâtre"] },
              { q: "Qui a écrit La Marseillaise ?", r: "Rouget de Lisle", choices: ["Victor Hugo", "Rouget de Lisle", "Danton", "Napoléon"] },
              { q: "Quel est le vrai nom d'Edith Piaf ?", r: "Edith Gassion", choices: ["Edith Dumont", "Edith Gassion", "Edith Moineau", "Edith Bernard"] },
              { q: "Quel est le prix suprême à Cannes ?", r: "La Palme d'Or", choices: ["L'Ours d'Or", "Le Lion d'Or", "La Palme d'Or", "Le César"] },
              { q: "Que signifie 'Piaf' en argot ?", r: "Moineau", choices: ["Chanteuse", "Moineau", "Petite", "Parisienne"] },
              { q: "Dans quelle ville La Marseillaise a-t-elle été composée ?", r: "Strasbourg", choices: ["Marseille", "Paris", "Strasbourg", "Lyon"] }
            ]
          }
        ]
      },

      // === JOUR 7 : MIX RÉVISION ===
      {
        day: 7, label: "Dimanche", theme: "Quiz de révision", icon: "🏆",
        objectif: "Test blanc sur tout ce qu'on a vu cette semaine",
        tasks: [
          {
            id: "w1d7t0", type: "quiz",
            title: "Quiz mix : Capitales",
            questions: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra", choices: ["Sydney", "Canberra", "Melbourne", "Brisbane"] },
              { q: "Quelle est la capitale de la Suisse ?", r: "Berne", choices: ["Genève", "Zurich", "Berne", "Lausanne"] },
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat", choices: ["Casablanca", "Rabat", "Marrakech", "Fès"] },
              { q: "Quelle est la capitale du Nigeria ?", r: "Abuja", choices: ["Lagos", "Abuja", "Kano", "Port Harcourt"] },
              { q: "Quelle est la capitale du Myanmar ?", r: "Naypyidaw", choices: ["Rangoon", "Naypyidaw", "Mandalay", "Bangkok"] },
              { q: "Quelle est la capitale de Malte ?", r: "La Valette", choices: ["Mdina", "La Valette", "Sliema", "Gozo"] }
            ]
          },
          {
            id: "w1d7t1", type: "quiz",
            title: "Quiz mix : Géo France",
            questions: [
              { q: "Quel est le plus long fleuve de France ?", r: "La Loire", choices: ["La Seine", "La Loire", "Le Rhône", "La Garonne"] },
              { q: "Quelle est l'altitude du Mont Blanc ?", r: "4 808 m", choices: ["4 208 m", "4 808 m", "5 108 m", "4 500 m"] },
              { q: "Quel est le point culminant des Vosges ?", r: "Le Grand Ballon", choices: ["Le Hohneck", "Le Grand Ballon", "Le Ballon d'Alsace", "Le Donon"] },
              { q: "Où la Loire prend-elle sa source ?", r: "Mont Gerbier-de-Jonc", choices: ["Mont Blanc", "Mont Gerbier-de-Jonc", "Puy de Sancy", "Mont Aigoual"] },
              { q: "Quelle ville est sur le Rhin ?", r: "Strasbourg", choices: ["Colmar", "Strasbourg", "Mulhouse", "Metz"] },
              { q: "Où le Rhône se jette-t-il ?", r: "En Méditerranée", choices: ["Dans l'Atlantique", "En Méditerranée", "Dans la Manche", "Dans la mer du Nord"] }
            ]
          },
          {
            id: "w1d7t2", type: "quiz",
            title: "Quiz mix : Animaux & Corps",
            questions: [
              { q: "Combien pèse le cœur d'une baleine bleue ?", r: "600 kg", choices: ["100 kg", "600 kg", "1 tonne", "50 kg"] },
              { q: "Combien d'os a un adulte ?", r: "206", choices: ["186", "206", "256", "300"] },
              { q: "Quel est l'os le plus long du corps ?", r: "Le fémur", choices: ["Le tibia", "L'humérus", "Le fémur", "Le péroné"] },
              { q: "Quel animal a le sang bleu ?", r: "Le homard", choices: ["La baleine", "Le homard", "Le dauphin", "Le requin"] },
              { q: "Comment s'appelle le bébé du sanglier ?", r: "Le marcassin", choices: ["Le goret", "Le marcassin", "Le porcelet", "Le cochonnet"] },
              { q: "Quel est le seul organe qui peut se régénérer ?", r: "Le foie", choices: ["Le cœur", "Le rein", "Le foie", "Le poumon"] }
            ]
          },
          {
            id: "w1d7t3", type: "quiz",
            title: "Quiz mix : Sport & Culture Pop",
            questions: [
              { q: "Qui détient le record du 100 m ?", r: "Usain Bolt", choices: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Yohan Blake"] },
              { q: "Qui présente Les 12 Coups de Midi ?", r: "Jean-Luc Reichmann", choices: ["Nagui", "Jean-Luc Reichmann", "Laurent Ruquier", "Cyril Hanouna"] },
              { q: "Qui a écrit La Marseillaise ?", r: "Rouget de Lisle", choices: ["Victor Hugo", "Rouget de Lisle", "Molière", "La Fayette"] },
              { q: "Quel est le plus gros succès du cinéma français ?", r: "Intouchables", choices: ["Les Visiteurs", "Intouchables", "Le Dîner de Cons", "Astérix"] },
              { q: "Combien de Coupes du monde le Brésil a-t-il gagnées ?", r: "5", choices: ["3", "4", "5", "6"] },
              { q: "Quel est le prix suprême à Cannes ?", r: "La Palme d'Or", choices: ["L'Oscar", "Le César", "La Palme d'Or", "L'Ours d'Or"] }
            ]
          }
        ]
      }
    ]
  },

  // ======================================================================
  // SEMAINE 2 — CULTURE G+ (Intermédiaire)
  // ======================================================================
  {
    week: 2,
    title: "Culture G+",
    description: "Fun facts, anecdotes et détails insolites — le niveau 12 Coups de Midi",
    days: [
      // === JOUR 1 : GASTRONOMIE & TERROIR ===
      {
        day: 1, label: "Lundi", theme: "Gastronomie & Terroir", icon: "🧀",
        objectif: "Fromages, plats régionaux, AOP, vins — la France dans l'assiette",
        tasks: [
          { id: "w2d1t0", type: "lecture", title: "Les fromages français en 10 min", subtitle: "Un tour de France gastronomique", url: "https://www.youtube.com/watch?v=RMuKbMVuxRY", duration: "12 min" },
          { id: "w2d1t1", type: "fiche", title: "Fromages & Terroirs",
            items: [
              { fact: "Il existe plus de 1 200 variétés de fromages en France", detail: "46 ont une AOP. Le Comté est le fromage AOP le plus produit, devant le Roquefort." },
              { fact: "Le Roquefort est affiné dans les caves naturelles de Roquefort-sur-Soulzon (Aveyron)", detail: "C'est un fromage au lait cru de brebis. La moisissure Penicillium roqueforti lui donne ses veines bleues." },
              { fact: "Le Beaufort est surnommé 'le prince des Gruyères'", detail: "Fromage de Savoie au lait cru de vache, il est reconnaissable à son talon concave (creux)." },
              { fact: "La truffe noire du Périgord s'appelle Tuber melanosporum", detail: "On la cherche avec un cochon ou un chien truffier. 1 kg peut coûter plus de 1 000 €." },
              { fact: "Le cassoulet a 3 capitales : Castelnaudary, Toulouse et Carcassonne", detail: "Castelnaudary = le pur (pas de saucisse), Toulouse = avec saucisse, Carcassonne = avec perdrix." }
            ],
            flashcards: [
              { q: "Combien de variétés de fromages existe-t-il en France ?", r: "Plus de 1 200" },
              { q: "Combien ont une AOP ?", r: "46" },
              { q: "Quel est le fromage AOP le plus produit en France ?", r: "Le Comté" },
              { q: "Dans quel département est affiné le Roquefort ?", r: "L'Aveyron (Roquefort-sur-Soulzon)" },
              { q: "Quel lait est utilisé pour le Roquefort ?", r: "Lait cru de brebis" },
              { q: "Quelle moisissure donne ses veines bleues au Roquefort ?", r: "Penicillium roqueforti" },
              { q: "Quel fromage est surnommé le prince des Gruyères ?", r: "Le Beaufort" },
              { q: "De quelle région vient le Beaufort ?", r: "La Savoie" },
              { q: "Quel est le nom scientifique de la truffe noire du Périgord ?", r: "Tuber melanosporum" },
              { q: "Quelles sont les 3 capitales du cassoulet ?", r: "Castelnaudary, Toulouse, Carcassonne" },
              { q: "Quelle ville fait le cassoulet 'pur' sans saucisse ?", r: "Castelnaudary" },
              { q: "Avec quel animal cherche-t-on traditionnellement les truffes ?", r: "Un cochon (ou un chien truffier)" }
            ]
          },
          { id: "w2d1t2", type: "quiz", title: "Quiz : Fromages & Terroirs",
            questions: [
              { q: "Quel fromage est affiné dans les caves de l'Aveyron ?", r: "Le Roquefort", choices: ["Le Comté", "Le Roquefort", "Le Beaufort", "Le Cantal"] },
              { q: "Quel fromage est surnommé 'le prince des Gruyères' ?", r: "Le Beaufort", choices: ["L'Emmental", "Le Beaufort", "Le Gruyère suisse", "Le Comté"] },
              { q: "Quelle est la capitale du cassoulet 'pur' ?", r: "Castelnaudary", choices: ["Toulouse", "Carcassonne", "Castelnaudary", "Albi"] },
              { q: "Combien de fromages AOP en France ?", r: "46", choices: ["28", "46", "64", "102"] },
              { q: "Quel lait pour le Roquefort ?", r: "Brebis", choices: ["Vache", "Chèvre", "Brebis", "Bufflonne"] },
              { q: "Quel est le nom scientifique de la truffe noire ?", r: "Tuber melanosporum", choices: ["Tuber magnatum", "Tuber melanosporum", "Tuber aestivum", "Tuber brumale"] }
            ]
          },
          { id: "w2d1t3", type: "fiche", title: "Vins & Cépages",
            items: [
              { fact: "Le Champagne ne peut venir QUE de la région Champagne", detail: "Sinon c'est un 'crémant' (Alsace, Bourgogne, Loire). Méthode identique mais appellation protégée." },
              { fact: "Le cépage le plus planté au monde est le Cabernet Sauvignon", detail: "En France, c'est le Merlot qui domine. Le Pinot Noir est le roi de la Bourgogne." },
              { fact: "Le Sauternes est un vin liquoreux obtenu grâce à la pourriture noble", detail: "Le champignon Botrytis cinerea concentre les sucres du raisin. Le Château d'Yquem est le plus célèbre." },
              { fact: "Le rosé de Provence représente plus de 40% de la production française de rosé", detail: "Contrairement à une idée reçue, le rosé n'est PAS un mélange de rouge et de blanc (sauf le Champagne rosé)." },
              { fact: "Un jéroboam contient 3 litres (4 bouteilles)", detail: "Magnum = 2 bouteilles, Mathusalem = 8, Nabuchodonosor = 20 bouteilles." }
            ],
            flashcards: [
              { q: "Comment appelle-t-on un vin effervescent hors Champagne fait par la même méthode ?", r: "Un crémant" },
              { q: "Quel est le cépage le plus planté au monde ?", r: "Le Cabernet Sauvignon" },
              { q: "Quel cépage est le roi de la Bourgogne ?", r: "Le Pinot Noir" },
              { q: "Comment s'appelle le champignon qui fait le Sauternes ?", r: "Botrytis cinerea (pourriture noble)" },
              { q: "Quel est le plus célèbre Sauternes ?", r: "Château d'Yquem" },
              { q: "Combien de bouteilles dans un jéroboam ?", r: "4 (3 litres)" },
              { q: "Combien de bouteilles dans un Nabuchodonosor ?", r: "20" },
              { q: "Combien de bouteilles dans un magnum ?", r: "2" },
              { q: "Le rosé est-il un mélange de rouge et blanc ?", r: "Non (sauf le Champagne rosé)" },
              { q: "Quelle région produit 40% du rosé français ?", r: "La Provence" },
              { q: "Quel est le cépage le plus planté en France ?", r: "Le Merlot" },
              { q: "Combien de bouteilles dans un Mathusalem ?", r: "8" }
            ]
          },
          { id: "w2d1t4", type: "quiz", title: "Quiz : Vins",
            questions: [
              { q: "Combien de bouteilles dans un jéroboam ?", r: "4", choices: ["2", "3", "4", "6"] },
              { q: "Quel champignon crée la pourriture noble du Sauternes ?", r: "Botrytis cinerea", choices: ["Penicillium", "Botrytis cinerea", "Aspergillus", "Saccharomyces"] },
              { q: "Quel cépage domine en Bourgogne ?", r: "Pinot Noir", choices: ["Merlot", "Cabernet Sauvignon", "Pinot Noir", "Syrah"] },
              { q: "Comment s'appelle un vin effervescent non-champenois ?", r: "Un crémant", choices: ["Un prosecco", "Un cava", "Un crémant", "Un mousseux"] },
              { q: "Combien de bouteilles dans un Nabuchodonosor ?", r: "20", choices: ["12", "15", "20", "24"] },
              { q: "Le rosé est un mélange rouge + blanc ?", r: "Non", choices: ["Oui, toujours", "Non", "Seulement en Provence", "Seulement en été"] }
            ]
          }
        ]
      },

      // === JOUR 2 : CINÉMA & SÉRIES ===
      {
        day: 2, label: "Mardi", theme: "Cinéma & Séries", icon: "🎬",
        objectif: "Répliques cultes, Oscars, réalisateurs, anecdotes de tournage",
        tasks: [
          { id: "w2d2t0", type: "lecture", title: "Les plus grands films de tous les temps", subtitle: "Top 10 des films les plus importants", url: "https://www.youtube.com/watch?v=EYqBN7Jz9uc", duration: "15 min" },
          { id: "w2d2t1", type: "fiche", title: "Oscars & Records",
            items: [
              { fact: "Le film le plus oscarisé est Ben-Hur (1959), Titanic (1997) et Le Seigneur des Anneaux : Le Retour du Roi (2003) — 11 Oscars chacun", detail: "Walt Disney détient le record individuel avec 22 Oscars dans sa carrière." },
              { fact: "Le plus jeune Oscar du meilleur acteur : Adrien Brody à 29 ans (Le Pianiste, 2003)", detail: "La plus jeune actrice oscarisée : Tatum O'Neal à 10 ans (Paper Moon, 1974)." },
              { fact: "Hitchcock n'a jamais gagné l'Oscar du meilleur réalisateur", detail: "Il a été nommé 5 fois sans jamais gagner. Kubrick non plus (4 nominations, 0 victoire)." },
              { fact: "Le premier film parlant : Le Chanteur de Jazz (1927)", detail: "Avant, les films étaient muets avec des cartons. Charlie Chaplin a résisté au parlant jusqu'en 1940 (Le Dictateur)." },
              { fact: "Le film le plus cher de l'histoire : Pirates des Caraïbes 4 (~400 M$)", detail: "Titanic (1997) coûtait 200 M$ — un record à l'époque. Avatar (2009) a coûté 237 M$." }
            ],
            flashcards: [
              { q: "Quels 3 films ont gagné 11 Oscars ?", r: "Ben-Hur, Titanic, Le Retour du Roi" },
              { q: "Qui détient le record d'Oscars individuels ?", r: "Walt Disney (22 Oscars)" },
              { q: "Qui est le plus jeune acteur oscarisé ?", r: "Adrien Brody (29 ans, Le Pianiste)" },
              { q: "Qui est la plus jeune actrice oscarisée ?", r: "Tatum O'Neal (10 ans, Paper Moon)" },
              { q: "Hitchcock a-t-il gagné l'Oscar du meilleur réalisateur ?", r: "Non, jamais (5 nominations)" },
              { q: "Quel est le premier film parlant ?", r: "Le Chanteur de Jazz (1927)" },
              { q: "Jusqu'à quel film Chaplin a-t-il résisté au parlant ?", r: "Le Dictateur (1940)" },
              { q: "Quel est le film le plus cher de l'histoire ?", r: "Pirates des Caraïbes 4 (~400 M$)" },
              { q: "Combien a coûté Titanic ?", r: "200 millions de dollars" },
              { q: "Kubrick a-t-il gagné l'Oscar du meilleur réalisateur ?", r: "Non, jamais" }
            ]
          },
          { id: "w2d2t2", type: "quiz", title: "Quiz : Oscars",
            questions: [
              { q: "Combien d'Oscars pour Titanic ?", r: "11", choices: ["7", "9", "11", "13"] },
              { q: "Quel réalisateur culte n'a jamais eu l'Oscar ?", r: "Hitchcock", choices: ["Spielberg", "Hitchcock", "Scorsese", "Coppola"] },
              { q: "Quel est le premier film parlant ?", r: "Le Chanteur de Jazz", choices: ["Metropolis", "Le Chanteur de Jazz", "Les Lumières de la ville", "Nosferatu"] },
              { q: "Qui détient le record d'Oscars individuels ?", r: "Walt Disney", choices: ["Meryl Streep", "Walt Disney", "Jack Nicholson", "Katharine Hepburn"] },
              { q: "Quel film a coûté ~400 M$ ?", r: "Pirates des Caraïbes 4", choices: ["Avatar", "Avengers Endgame", "Pirates des Caraïbes 4", "Titanic"] },
              { q: "Qui est la plus jeune actrice oscarisée ?", r: "Tatum O'Neal", choices: ["Shirley Temple", "Anna Paquin", "Tatum O'Neal", "Jodie Foster"] }
            ]
          },
          { id: "w2d2t3", type: "fiche", title: "Répliques cultes & Anecdotes",
            items: [
              { fact: "'Que la Force soit avec toi' — Star Wars (1977)", detail: "La phrase exacte de Dark Vador n'est PAS 'Luke, je suis ton père' mais 'Non, JE suis ton père'." },
              { fact: "'Frankly, my dear, I don't give a damn' — Autant en emporte le vent (1939)", detail: "Élu meilleure réplique de l'histoire du cinéma par l'American Film Institute." },
              { fact: "Dans Psychose (1960), le sang sous la douche est du sirop de chocolat", detail: "Le film étant en noir et blanc, Hitchcock a utilisé du sirop Hershey's qui rendait mieux à l'écran." },
              { fact: "Le Parrain : Marlon Brando avait du coton dans les joues", detail: "Pour grossir ses bajoues et avoir l'air plus âgé. Il a refusé son Oscar en 1973 en signe de protestation." },
              { fact: "Titanic : le dessin de Rose nue a été fait par James Cameron lui-même", detail: "Les mains qu'on voit dessiner dans le film sont celles du réalisateur, pas de DiCaprio." }
            ],
            flashcards: [
              { q: "Quelle est la vraie réplique de Dark Vador (pas la version populaire) ?", r: "'Non, je suis ton père' (pas 'Luke, je suis ton père')" },
              { q: "Quel film contient 'Frankly my dear I don't give a damn' ?", r: "Autant en emporte le vent (1939)" },
              { q: "Quel liquide Hitchcock a utilisé comme sang dans Psychose ?", r: "Du sirop de chocolat Hershey's" },
              { q: "Pourquoi Brando avait-il les joues gonflées dans Le Parrain ?", r: "Il avait du coton dans les joues" },
              { q: "Pourquoi Brando a-t-il refusé son Oscar en 1973 ?", r: "En protestation (droits des Amérindiens)" },
              { q: "Qui a vraiment dessiné le portrait de Rose dans Titanic ?", r: "James Cameron (le réalisateur)" },
              { q: "Pourquoi le sirop de chocolat marchait comme faux sang dans Psychose ?", r: "Le film était en noir et blanc" },
              { q: "De quel film vient 'Que la Force soit avec toi' ?", r: "Star Wars (1977)" }
            ]
          },
          { id: "w2d2t4", type: "quiz", title: "Quiz : Répliques & Anecdotes",
            questions: [
              { q: "Quelle est la VRAIE réplique de Dark Vador ?", r: "'Non, je suis ton père'", choices: ["'Luke, je suis ton père'", "'Non, je suis ton père'", "'Je suis ton destin'", "'Rejoins le côté obscur'"] },
              { q: "Qui a dessiné le portrait de Rose dans Titanic ?", r: "James Cameron", choices: ["Leonardo DiCaprio", "James Cameron", "Un artiste professionnel", "Kate Winslet"] },
              { q: "Quel faux sang dans Psychose ?", r: "Sirop de chocolat", choices: ["Ketchup", "Peinture rouge", "Sirop de chocolat", "Jus de betterave"] },
              { q: "Pourquoi Brando a refusé son Oscar ?", r: "Protestation pour les Amérindiens", choices: ["Il était malade", "Protestation pour les Amérindiens", "Il n'aimait pas le film", "Conflit avec le studio"] }
            ]
          }
        ]
      },

      // === JOUR 3 : VRAIS NOMS & CÉLÉBRITÉS ===
      {
        day: 3, label: "Mercredi", theme: "Vrais noms & Show-biz", icon: "🌟",
        objectif: "Les vrais noms que personne ne connaît, les couples, les anecdotes",
        tasks: [
          { id: "w2d3t0", type: "lecture", title: "Les vrais noms des stars", subtitle: "Tu ne devineras jamais leur vrai nom", url: "https://www.youtube.com/watch?v=2n_wJ8A-2gQ", duration: "10 min" },
          { id: "w2d3t1", type: "fiche", title: "Vrais noms des célébrités",
            items: [
              { fact: "Voltaire s'appelait François-Marie Arouet", detail: "Voltaire est un anagramme approximatif de AROUET LJ (le jeune). Molière = Jean-Baptiste Poquelin." },
              { fact: "Édith Piaf s'appelait Édith Giovanna Gassion", detail: "Surnommée 'la Môme Piaf' car un piaf = un moineau en argot. Elle mesurait 1m47." },
              { fact: "Coluche s'appelait Michel Gérard Joseph Colucci", detail: "D'origine italienne, il s'est présenté à la présidentielle de 1981. Il a créé les Restos du Cœur." },
              { fact: "Le Corbusier s'appelait Charles-Édouard Jeanneret", detail: "Architecte suisse naturalisé français. La Cité radieuse de Marseille est son œuvre la plus connue." },
              { fact: "Mère Teresa s'appelait Anjezë Gonxhe Bojaxhiu", detail: "Née en Macédoine (Albanie ottomane), elle a reçu le prix Nobel de la paix en 1979." }
            ],
            flashcards: [
              { q: "Quel est le vrai nom de Voltaire ?", r: "François-Marie Arouet" },
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin" },
              { q: "Quel est le vrai nom d'Édith Piaf ?", r: "Édith Giovanna Gassion" },
              { q: "Pourquoi le surnom 'Piaf' ?", r: "Un piaf = un moineau en argot" },
              { q: "Combien mesurait Édith Piaf ?", r: "1m47" },
              { q: "Quel est le vrai nom de Coluche ?", r: "Michel Colucci" },
              { q: "Qui a créé les Restos du Cœur ?", r: "Coluche" },
              { q: "Quel est le vrai nom de Le Corbusier ?", r: "Charles-Édouard Jeanneret" },
              { q: "Quelle est l'œuvre la plus connue de Le Corbusier ?", r: "La Cité radieuse de Marseille" },
              { q: "Quel est le vrai nom de Mère Teresa ?", r: "Anjezë Gonxhe Bojaxhiu" },
              { q: "De quel pays était originaire Mère Teresa ?", r: "Macédoine (Albanie ottomane)" },
              { q: "Quel prix a reçu Mère Teresa en 1979 ?", r: "Le prix Nobel de la paix" }
            ]
          },
          { id: "w2d3t2", type: "quiz", title: "Quiz : Vrais noms",
            questions: [
              { q: "Quel est le vrai nom de Voltaire ?", r: "François-Marie Arouet", choices: ["Jean-Jacques Rousseau", "François-Marie Arouet", "Denis Diderot", "Charles de Montesquieu"] },
              { q: "Qui a créé les Restos du Cœur ?", r: "Coluche", choices: ["l'Abbé Pierre", "Coluche", "Mère Teresa", "Sœur Emmanuelle"] },
              { q: "Pourquoi Piaf s'appelle Piaf ?", r: "Un piaf = un moineau", choices: ["Son nom de famille", "Un piaf = un moineau", "Le nom de sa rue", "Son premier rôle"] },
              { q: "De quel pays venait Mère Teresa ?", r: "Macédoine", choices: ["Inde", "Macédoine", "Albanie", "Italie"] },
              { q: "Quel est le vrai nom du Corbusier ?", r: "Charles-Édouard Jeanneret", choices: ["Auguste Perret", "Charles-Édouard Jeanneret", "Hector Guimard", "Jean Prouvé"] },
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin", choices: ["Pierre Corneille", "Jean-Baptiste Poquelin", "Jean Racine", "François Rabelais"] }
            ]
          },
          { id: "w2d3t3", type: "fiche", title: "Vrais noms modernes",
            items: [
              { fact: "Sting s'appelle Gordon Matthew Thomas Sumner", detail: "Surnommé Sting ('piqûre' en anglais) car il portait souvent un pull rayé jaune et noir." },
              { fact: "Bono (U2) s'appelle Paul David Hewson", detail: "Bono vient de 'Bono Vox' (bonne voix en latin approximatif), nom d'un magasin d'appareils auditifs à Dublin." },
              { fact: "Elton John s'appelle Reginald Kenneth Dwight", detail: "Il a pris le prénom du saxophoniste Elton Dean et le nom du chanteur Long John Baldry." },
              { fact: "Whoopi Goldberg s'appelle Caryn Elaine Johnson", detail: "Le 'Goldberg' vient de sa conviction que 'Goldberg' sonne mieux pour Hollywood (origines juives fictives)." },
              { fact: "Daft Punk : Thomas Bangalter et Guy-Manuel de Homem-Christo", detail: "Le nom vient d'une critique musicale qui qualifiait leur musique de 'daft punky trash'." }
            ],
            flashcards: [
              { q: "Quel est le vrai nom de Sting ?", r: "Gordon Matthew Thomas Sumner" },
              { q: "Pourquoi le surnom Sting ?", r: "Il portait un pull rayé jaune et noir (comme une guêpe)" },
              { q: "Quel est le vrai nom de Bono ?", r: "Paul David Hewson" },
              { q: "D'où vient le surnom Bono ?", r: "D'un magasin d'appareils auditifs à Dublin (Bono Vox)" },
              { q: "Quel est le vrai nom d'Elton John ?", r: "Reginald Kenneth Dwight" },
              { q: "D'où vient le nom 'Elton John' ?", r: "Elton Dean (saxophoniste) + Long John Baldry (chanteur)" },
              { q: "Quel est le vrai nom de Whoopi Goldberg ?", r: "Caryn Elaine Johnson" },
              { q: "Quels sont les vrais noms des Daft Punk ?", r: "Thomas Bangalter et Guy-Manuel de Homem-Christo" },
              { q: "D'où vient le nom Daft Punk ?", r: "D'une critique qui qualifiait leur musique de 'daft punky trash'" }
            ]
          },
          { id: "w2d3t4", type: "quiz", title: "Quiz : Vrais noms modernes",
            questions: [
              { q: "Quel est le vrai nom de Sting ?", r: "Gordon Sumner", choices: ["James Smith", "Gordon Sumner", "Michael King", "Robert Plant"] },
              { q: "D'où vient le nom Daft Punk ?", r: "Une critique musicale", choices: ["Un jeu vidéo", "Une critique musicale", "Leur premier album", "Un film de SF"] },
              { q: "Quel est le vrai nom d'Elton John ?", r: "Reginald Dwight", choices: ["Reginald Dwight", "Edward Smith", "William Jones", "Frederick Brown"] },
              { q: "D'où vient le surnom Bono ?", r: "Un magasin d'appareils auditifs", choices: ["Un mot irlandais", "Un magasin d'appareils auditifs", "Son prof de musique", "Une chanson de U2"] }
            ]
          }
        ]
      },

      // === JOUR 4 : INVENTIONS & SCIENCES ===
      {
        day: 4, label: "Jeudi", theme: "Inventions & Sciences étonnantes", icon: "💡",
        objectif: "Qui a inventé quoi, quand, et les histoires folles derrière",
        tasks: [
          { id: "w2d4t0", type: "lecture", title: "Les inventions qui ont changé le monde", subtitle: "De la roue à Internet", url: "https://www.youtube.com/watch?v=Q9VKkwL0eGE", duration: "12 min" },
          { id: "w2d4t1", type: "fiche", title: "Inventions françaises",
            items: [
              { fact: "Le cinématographe a été inventé par les frères Lumière (1895)", detail: "La première projection publique a eu lieu au Salon Indien du Grand Café, Paris, le 28 décembre 1895." },
              { fact: "Le stéthoscope a été inventé par René Laennec (1816)", detail: "Il a roulé un cahier en tube pour écouter le cœur d'une patiente corpulente. L'idée est née de la pudeur !" },
              { fact: "La pasteurisation a été inventée par Louis Pasteur", detail: "Il a aussi créé le vaccin contre la rage (1885). Premier vacciné : Joseph Meister, un berger de 9 ans." },
              { fact: "Le Minitel a été lancé en France en 1982", detail: "3615 ULLA était le service le plus rentable. Le Minitel a précédé Internet de 10 ans." },
              { fact: "La montgolfière : frères Montgolfier, 1783", detail: "Premier vol habité avec un mouton, un coq et un canard à Versailles devant Louis XVI." }
            ],
            flashcards: [
              { q: "Qui a inventé le cinématographe ?", r: "Les frères Lumière (1895)" },
              { q: "Où a eu lieu la première projection de cinéma ?", r: "Au Grand Café, Paris" },
              { q: "Qui a inventé le stéthoscope ?", r: "René Laennec (1816)" },
              { q: "Pourquoi Laennec a-t-il inventé le stéthoscope ?", r: "Par pudeur — il a roulé un cahier pour écouter le cœur d'une patiente" },
              { q: "Qui a inventé la pasteurisation ?", r: "Louis Pasteur" },
              { q: "Qui fut le premier vacciné contre la rage ?", r: "Joseph Meister, un berger de 9 ans" },
              { q: "En quelle année le Minitel a-t-il été lancé ?", r: "1982" },
              { q: "Quels animaux ont volé dans la première montgolfière ?", r: "Un mouton, un coq et un canard" },
              { q: "Qui a inventé la montgolfière ?", r: "Les frères Montgolfier (1783)" },
              { q: "Devant quel roi le premier vol en montgolfière a-t-il eu lieu ?", r: "Louis XVI (à Versailles)" },
              { q: "Quel était le service Minitel le plus rentable ?", r: "3615 ULLA" }
            ]
          },
          { id: "w2d4t2", type: "quiz", title: "Quiz : Inventions",
            questions: [
              { q: "Quels animaux ont volé dans la 1ère montgolfière ?", r: "Mouton, coq et canard", choices: ["Chat et chien", "Mouton, coq et canard", "Deux pigeons", "Un singe"] },
              { q: "Qui a inventé le stéthoscope ?", r: "Laennec", choices: ["Pasteur", "Laennec", "Lavoisier", "Curie"] },
              { q: "Qui fut le premier vacciné contre la rage ?", r: "Joseph Meister", choices: ["Louis Pasteur lui-même", "Joseph Meister", "Jenner", "Un chien"] },
              { q: "Où a eu lieu la 1ère projection de cinéma ?", r: "Grand Café, Paris", choices: ["Hollywood", "Grand Café, Paris", "Lyon", "New York"] },
              { q: "En quelle année le Minitel ?", r: "1982", choices: ["1978", "1982", "1986", "1990"] },
              { q: "Qui a inventé la montgolfière ?", r: "Les frères Montgolfier", choices: ["Les frères Wright", "Les frères Montgolfier", "Les frères Lumière", "Les frères Grimm"] }
            ]
          },
          { id: "w2d4t3", type: "fiche", title: "Sciences étonnantes",
            items: [
              { fact: "La foudre est 5 fois plus chaude que la surface du Soleil", detail: "Un éclair atteint 30 000°C. La surface du Soleil est à environ 5 500°C." },
              { fact: "Une cuillère à café d'étoile à neutrons pèserait 6 milliards de tonnes", detail: "La densité est si extrême que la matière est compressée au niveau nucléaire." },
              { fact: "L'ADN humain déroulé mesurerait 2 mètres par cellule", detail: "Mis bout à bout, l'ADN de toutes nos cellules couvrirait 600 fois la distance Terre-Soleil." },
              { fact: "L'eau chaude gèle plus vite que l'eau froide", detail: "C'est l'effet Mpemba, observé depuis Aristote mais toujours pas totalement expliqué en 2024." },
              { fact: "Les neurones du cerveau sont plus nombreux que les étoiles de la Voie Lactée", detail: "~86 milliards de neurones vs ~100 milliards d'étoiles. C'est à peu près équivalent." }
            ],
            flashcards: [
              { q: "Quelle est la température d'un éclair ?", r: "30 000°C (5 fois la surface du Soleil)" },
              { q: "Combien pèserait une cuillère d'étoile à neutrons ?", r: "6 milliards de tonnes" },
              { q: "Quelle longueur d'ADN dans une seule cellule ?", r: "2 mètres" },
              { q: "Comment s'appelle le phénomène : l'eau chaude gèle plus vite que la froide ?", r: "L'effet Mpemba" },
              { q: "Combien de neurones dans le cerveau humain ?", r: "Environ 86 milliards" },
              { q: "Quelle est la température à la surface du Soleil ?", r: "Environ 5 500°C" },
              { q: "Qui a observé en premier l'effet Mpemba ?", r: "Aristote (puis Erasto Mpemba en 1963)" }
            ]
          },
          { id: "w2d4t4", type: "quiz", title: "Quiz : Sciences",
            questions: [
              { q: "Température d'un éclair ?", r: "30 000°C", choices: ["5 500°C", "10 000°C", "30 000°C", "100 000°C"] },
              { q: "Comment s'appelle l'effet eau chaude → gèle plus vite ?", r: "Effet Mpemba", choices: ["Effet Bernoulli", "Effet Mpemba", "Effet Joule", "Effet Venturi"] },
              { q: "Combien de neurones dans le cerveau ?", r: "86 milliards", choices: ["10 milliards", "86 milliards", "200 milliards", "1 000 milliards"] },
              { q: "Longueur d'ADN dans une cellule ?", r: "2 mètres", choices: ["2 cm", "2 mètres", "20 mètres", "200 mètres"] }
            ]
          }
        ]
      },

      // === JOUR 5 : LANGUE FRANÇAISE ===
      {
        day: 5, label: "Vendredi", theme: "Langue & Étymologie", icon: "📖",
        objectif: "Origines des mots, expressions, pièges de la langue française",
        tasks: [
          { id: "w2d5t0", type: "lecture", title: "L'étymologie des mots du quotidien", subtitle: "Pourquoi dit-on ça ?", url: "https://www.youtube.com/watch?v=U7xE1qWKPdE", duration: "10 min" },
          { id: "w2d5t1", type: "fiche", title: "Étymologies surprenantes",
            items: [
              { fact: "Salaire vient du latin 'salarium' (ration de sel)", detail: "Les soldats romains étaient payés en partie en sel. D'où aussi 'pas un sou vaillant' (sel = valeur)." },
              { fact: "Cravate vient de 'Croate'", detail: "Les cavaliers croates portaient un foulard noué autour du cou au XVIIe siècle, mode adoptée par Louis XIV." },
              { fact: "Bikini vient de l'atoll de Bikini", detail: "Louis Réard a nommé son maillot d'après les essais nucléaires de 1946 à Bikini — l'effet devait être 'explosif'." },
              { fact: "Algorithme vient de Al-Khwarizmi", detail: "Mathématicien perse du IXe siècle, père de l'algèbre (al-jabr = 'la remise en place')." },
              { fact: "Vandale vient des Vandales, peuple germanique qui a saccagé Rome en 455", detail: "D'où 'vandalisme'. Barbare vient du grec barbaros = celui dont on ne comprend pas la langue." }
            ],
            flashcards: [
              { q: "D'où vient le mot 'salaire' ?", r: "Du latin salarium (ration de sel)" },
              { q: "Pourquoi les soldats romains recevaient du sel ?", r: "Le sel servait de paiement/monnaie" },
              { q: "D'où vient le mot 'cravate' ?", r: "De 'Croate' (foulard des cavaliers croates)" },
              { q: "Qui a popularisé la cravate en France ?", r: "Louis XIV" },
              { q: "D'où vient le mot 'bikini' ?", r: "De l'atoll de Bikini (essais nucléaires de 1946)" },
              { q: "Qui a inventé le bikini ?", r: "Louis Réard" },
              { q: "D'où vient le mot 'algorithme' ?", r: "Du mathématicien perse Al-Khwarizmi" },
              { q: "Que signifie 'al-jabr' (origine d'algèbre) ?", r: "La remise en place" },
              { q: "De quel peuple vient le mot 'vandale' ?", r: "Les Vandales (peuple germanique)" },
              { q: "Que signifie 'barbaros' en grec ?", r: "Celui dont on ne comprend pas la langue" }
            ]
          },
          { id: "w2d5t2", type: "quiz", title: "Quiz : Étymologie",
            questions: [
              { q: "D'où vient 'salaire' ?", r: "Du sel (salarium)", choices: ["De 'salle'", "Du sel (salarium)", "De 'salut'", "De 'salaire minimum'"] },
              { q: "D'où vient 'cravate' ?", r: "De 'Croate'", choices: ["De 'cravache'", "De 'Croate'", "D'un tissu", "D'un roi"] },
              { q: "D'où vient 'algorithme' ?", r: "D'Al-Khwarizmi", choices: ["D'un mot grec", "D'Al-Khwarizmi", "D'Alan Turing", "D'un mot latin"] },
              { q: "Qui a inventé le bikini ?", r: "Louis Réard", choices: ["Coco Chanel", "Louis Réard", "Christian Dior", "Jacques Heim"] },
              { q: "Que veut dire 'barbaros' en grec ?", r: "Celui qu'on ne comprend pas", choices: ["Sauvage", "Cruel", "Celui qu'on ne comprend pas", "Étranger"] }
            ]
          },
          { id: "w2d5t3", type: "fiche", title: "Expressions françaises",
            items: [
              { fact: "'Avoir le cafard' vient de Baudelaire (Les Fleurs du Mal)", detail: "Le cafard = la mélancolie. Baudelaire l'utilise dans son sens d'insecte sombre qui ronge de l'intérieur." },
              { fact: "'Poser un lapin' vient du XIXe siècle", detail: "À l'origine, c'était ne pas payer une prostituée. Le 'lapin' = le prix non payé." },
              { fact: "'Tomber dans les pommes' ne vient PAS des pommes", detail: "Probablement une déformation de 'tomber en pâmes' (pâmoison = évanouissement)." },
              { fact: "'OK' viendrait de 'Oll Korrect'", detail: "Abréviation humoristique de 'All Correct' née dans les journaux américains vers 1839." },
              { fact: "'Faire la grasse matinée' = matin 'gras' = temps gaspillé", detail: "Comme le 'Mardi gras' (jour où on mange gras avant le Carême), 'gras' = excès, abondance." }
            ],
            flashcards: [
              { q: "D'où vient l'expression 'avoir le cafard' ?", r: "De Baudelaire (Les Fleurs du Mal)" },
              { q: "Que signifiait 'poser un lapin' à l'origine ?", r: "Ne pas payer une prostituée" },
              { q: "D'où vient vraiment 'tomber dans les pommes' ?", r: "De 'tomber en pâmes' (pâmoison = évanouissement)" },
              { q: "D'où viendrait le mot 'OK' ?", r: "De 'Oll Korrect' (abréviation humoristique de 'All Correct')" },
              { q: "Que signifie 'gras' dans 'grasse matinée' ?", r: "Temps gaspillé / excès (comme Mardi gras)" }
            ]
          },
          { id: "w2d5t4", type: "quiz", title: "Quiz : Expressions",
            questions: [
              { q: "D'où vient 'avoir le cafard' ?", r: "De Baudelaire", choices: ["De Molière", "De Baudelaire", "De Victor Hugo", "De Voltaire"] },
              { q: "'Tomber dans les pommes' vient de quoi ?", r: "Tomber en pâmes", choices: ["Les pommes de Newton", "Tomber en pâmes", "Un conte de fées", "Une recette de cuisine"] },
              { q: "D'où viendrait 'OK' ?", r: "Oll Korrect", choices: ["Old Kingdom", "Oll Korrect", "Oklahoma", "Ohne Korrektur"] },
              { q: "Que signifiait 'poser un lapin' à l'origine ?", r: "Ne pas payer", choices: ["Fuir un rendez-vous", "Ne pas payer", "Perdre un pari", "Mentir"] }
            ]
          }
        ]
      },

      // === JOUR 6 : GÉO MONDE INSOLITE ===
      {
        day: 6, label: "Samedi", theme: "Géographie insolite", icon: "🌍",
        objectif: "Surnoms de villes, records géographiques, frontières bizarres",
        tasks: [
          { id: "w2d6t0", type: "lecture", title: "Les frontières les plus bizarres du monde", subtitle: "Géographie absurde", url: "https://www.youtube.com/watch?v=x8bJQLSVjDE", duration: "12 min" },
          { id: "w2d6t1", type: "fiche", title: "Surnoms de villes",
            items: [
              { fact: "Paris = la Ville Lumière", detail: "Pas pour l'éclairage public (bien que Paris fut pionnière) mais pour le siècle des Lumières et son rayonnement intellectuel." },
              { fact: "New York = la Grosse Pomme (Big Apple)", detail: "Terme popularisé dans les années 1920 par un chroniqueur de courses hippiques, puis adopté par les jazzmen." },
              { fact: "Rome = la Ville Éternelle (Città Eterna)", detail: "Surnom datant de l'Antiquité, attribué au poète Tibulle (Ier siècle av. J.-C.)." },
              { fact: "Venise du Nord = Bruges (Belgique)", detail: "Mais aussi Amsterdam, Saint-Pétersbourg et Stockholm revendiquent ce surnom !" },
              { fact: "Istanbul était Constantinople (puis Byzance avant)", detail: "Byzance → Constantinople (330, Constantin) → Istanbul (1930, Atatürk). Les 3 noms = la même ville." }
            ],
            flashcards: [
              { q: "Quel est le surnom de Paris ?", r: "La Ville Lumière" },
              { q: "Pourquoi Paris = Ville Lumière ?", r: "Pour le siècle des Lumières (rayonnement intellectuel)" },
              { q: "Quel est le surnom de New York ?", r: "La Grosse Pomme (Big Apple)" },
              { q: "D'où vient le surnom Big Apple ?", r: "Des chroniqueurs de courses hippiques des années 1920" },
              { q: "Quel est le surnom de Rome ?", r: "La Ville Éternelle" },
              { q: "Quelle ville belge est surnommée 'Venise du Nord' ?", r: "Bruges" },
              { q: "Quels sont les 3 noms historiques d'Istanbul ?", r: "Byzance, Constantinople, Istanbul" },
              { q: "Qui a renommé Constantinople en Istanbul ?", r: "Atatürk (1930)" },
              { q: "Qui a fondé Constantinople ?", r: "Constantin (en 330)" }
            ]
          },
          { id: "w2d6t2", type: "quiz", title: "Quiz : Surnoms de villes",
            questions: [
              { q: "Quelle ville est 'la Venise du Nord' ?", r: "Bruges", choices: ["Amsterdam", "Bruges", "Stockholm", "Copenhague"] },
              { q: "Comment s'appelait Istanbul avant ?", r: "Constantinople", choices: ["Ankara", "Constantinople", "Alexandrie", "Smyrne"] },
              { q: "Pourquoi Paris = Ville Lumière ?", r: "Le siècle des Lumières", choices: ["L'éclairage public", "Le siècle des Lumières", "La Tour Eiffel illuminée", "Les Champs-Élysées"] },
              { q: "Quel est le surnom de New York ?", r: "Big Apple", choices: ["Big Apple", "Big City", "City of Dreams", "Empire City"] },
              { q: "Quel poète a surnommé Rome 'Ville Éternelle' ?", r: "Tibulle", choices: ["Virgile", "Tibulle", "Ovide", "Horace"] }
            ]
          },
          { id: "w2d6t3", type: "fiche", title: "Records & Curiosités géo",
            items: [
              { fact: "Le point le plus profond de la Terre : fosse des Mariannes (10 994 m)", detail: "Le Challenger Deep. Si on y mettait l'Everest (8 849 m), il resterait 2 km d'eau au-dessus." },
              { fact: "Le pays le plus petit du monde : le Vatican (0,44 km²)", detail: "Suivi de Monaco (2 km²). Le Vatican a environ 800 habitants et sa propre armée (la Garde suisse)." },
              { fact: "La frontière la plus longue du monde : Canada-États-Unis (8 891 km)", detail: "Non surveillée sur la majorité de son tracé. La 2e plus longue : Russie-Kazakhstan (7 644 km)." },
              { fact: "Le Lesotho et le Vatican sont des enclaves complètes", detail: "Le Lesotho est entièrement entouré par l'Afrique du Sud. Le Vatican par l'Italie. San Marin aussi." },
              { fact: "La Russie a 11 fuseaux horaires", detail: "Quand il est midi à Kaliningrad (ouest), il est 22h à Kamtchatka (est). Les USA en ont 6." }
            ],
            flashcards: [
              { q: "Quel est le point le plus profond de la Terre ?", r: "La fosse des Mariannes (10 994 m)" },
              { q: "Comment s'appelle le point précis le plus profond ?", r: "Le Challenger Deep" },
              { q: "Quel est le plus petit pays du monde ?", r: "Le Vatican (0,44 km²)" },
              { q: "Combien d'habitants au Vatican ?", r: "Environ 800" },
              { q: "Quelle est la plus longue frontière du monde ?", r: "Canada-États-Unis (8 891 km)" },
              { q: "Quel pays africain est une enclave complète ?", r: "Le Lesotho (entouré par l'Afrique du Sud)" },
              { q: "Combien de fuseaux horaires en Russie ?", r: "11" },
              { q: "Quelle est la 2e plus longue frontière du monde ?", r: "Russie-Kazakhstan (7 644 km)" },
              { q: "Si on mettait l'Everest dans la fosse des Mariannes, que se passerait-il ?", r: "Il resterait ~2 km d'eau au-dessus" },
              { q: "Quelle est l'armée du Vatican ?", r: "La Garde suisse" }
            ]
          },
          { id: "w2d6t4", type: "quiz", title: "Quiz : Records géo",
            questions: [
              { q: "Point le plus profond de la Terre ?", r: "Fosse des Mariannes", choices: ["Fosse des Mariannes", "Fosse de Porto Rico", "Fosse du Japon", "Fosse des Tonga"] },
              { q: "Plus petit pays du monde ?", r: "Vatican", choices: ["Monaco", "Vatican", "San Marin", "Liechtenstein"] },
              { q: "Plus longue frontière du monde ?", r: "Canada-USA", choices: ["Russie-Chine", "Canada-USA", "Brésil-Argentine", "Inde-Chine"] },
              { q: "Combien de fuseaux horaires en Russie ?", r: "11", choices: ["7", "9", "11", "13"] },
              { q: "Quel pays africain est entouré par un seul autre pays ?", r: "Le Lesotho", choices: ["Le Swaziland", "Le Lesotho", "La Gambie", "Djibouti"] }
            ]
          }
        ]
      },

      // === JOUR 7 : MIX SEMAINE 2 ===
      {
        day: 7, label: "Dimanche", theme: "Mix de révision S2", icon: "🏆",
        objectif: "Test récapitulatif — tous les thèmes de la semaine",
        tasks: [
          { id: "w2d7t0", type: "quiz", title: "Quiz mix : Gastronomie & Vins",
            questions: [
              { q: "Combien de fromages AOP en France ?", r: "46", choices: ["28", "46", "64", "102"] },
              { q: "Combien de bouteilles dans un Mathusalem ?", r: "8", choices: ["4", "6", "8", "12"] },
              { q: "Quel fromage au lait de brebis est affiné dans l'Aveyron ?", r: "Le Roquefort", choices: ["Le Comté", "Le Roquefort", "Le Beaufort", "Le Cantal"] },
              { q: "Quel champignon crée le Sauternes ?", r: "Botrytis cinerea", choices: ["Penicillium", "Botrytis cinerea", "Aspergillus", "Lactobacillus"] },
              { q: "Quel cépage domine en Bourgogne ?", r: "Pinot Noir", choices: ["Merlot", "Pinot Noir", "Syrah", "Grenache"] },
              { q: "Quel est le cassoulet avec perdrix ?", r: "Carcassonne", choices: ["Toulouse", "Castelnaudary", "Carcassonne", "Albi"] }
            ]
          },
          { id: "w2d7t1", type: "quiz", title: "Quiz mix : Cinéma & Célébrités",
            questions: [
              { q: "Combien d'Oscars pour Titanic ?", r: "11", choices: ["8", "10", "11", "13"] },
              { q: "Vrai nom de Coluche ?", r: "Michel Colucci", choices: ["Michel Blanc", "Michel Colucci", "Michel Sardou", "Michel Boujenah"] },
              { q: "Qui a dessiné Rose dans Titanic ?", r: "James Cameron", choices: ["DiCaprio", "James Cameron", "Un artiste", "Kate Winslet"] },
              { q: "Vrai nom de Sting ?", r: "Gordon Sumner", choices: ["Gordon Sumner", "Paul Hewson", "Reginald Dwight", "Eric Clapton"] },
              { q: "Quel faux sang dans Psychose ?", r: "Sirop de chocolat", choices: ["Ketchup", "Sirop de chocolat", "Peinture", "Jus de tomate"] },
              { q: "Vrai nom d'Elton John ?", r: "Reginald Dwight", choices: ["Reginald Dwight", "Gordon Sumner", "Paul McCartney", "Farrokh Bulsara"] }
            ]
          },
          { id: "w2d7t2", type: "quiz", title: "Quiz mix : Sciences & Langue",
            questions: [
              { q: "Température d'un éclair ?", r: "30 000°C", choices: ["5 500°C", "15 000°C", "30 000°C", "100 000°C"] },
              { q: "D'où vient le mot 'salaire' ?", r: "Du sel", choices: ["De 'salle'", "Du sel", "De 'salut'", "D'un roi"] },
              { q: "Quels animaux dans la 1ère montgolfière ?", r: "Mouton, coq, canard", choices: ["Chat, chien", "Mouton, coq, canard", "Deux pigeons", "Un singe"] },
              { q: "D'où vient l'expression 'avoir le cafard' ?", r: "Baudelaire", choices: ["Molière", "Baudelaire", "Hugo", "Zola"] },
              { q: "Comment s'appelle l'effet eau chaude gèle plus vite ?", r: "Effet Mpemba", choices: ["Effet Doppler", "Effet Mpemba", "Effet Joule", "Effet papillon"] },
              { q: "D'où vient le mot 'algorithme' ?", r: "Al-Khwarizmi", choices: ["Archimède", "Al-Khwarizmi", "Euclide", "Fibonacci"] }
            ]
          },
          { id: "w2d7t3", type: "quiz", title: "Quiz mix : Géographie",
            questions: [
              { q: "Quel est le plus petit pays du monde ?", r: "Le Vatican", choices: ["Monaco", "Le Vatican", "San Marin", "Nauru"] },
              { q: "Quelle ville est la 'Venise du Nord' ?", r: "Bruges", choices: ["Amsterdam", "Bruges", "Stockholm", "Helsinki"] },
              { q: "Plus longue frontière du monde ?", r: "Canada-USA", choices: ["Russie-Chine", "Canada-USA", "Brésil-Argentine", "Russie-Kazakhstan"] },
              { q: "Comment s'appelait Istanbul avant ?", r: "Constantinople", choices: ["Ankara", "Constantinople", "Athènes", "Smyrne"] },
              { q: "Combien de fuseaux horaires en Russie ?", r: "11", choices: ["6", "9", "11", "14"] },
              { q: "Point le plus profond de la Terre ?", r: "Fosse des Mariannes", choices: ["Fosse de Porto Rico", "Fosse des Mariannes", "Fosse du Japon", "Grand Canyon"] }
            ]
          }
        ]
      }
    ]
  },

  // =============================================
  // SEMAINE 3 : SCIENCES
  // =============================================
  {
    week: 3,
    title: "Sciences",
    description: "Physique, chimie, inventions, astronomie, biologie, mathématiques — la culture scientifique",
    days: [

      // === JOUR 1 : PHYSIQUE & CHIMIE ===
      {
        day: 1, label: "Lundi", theme: "Physique & Chimie", icon: "⚗️",
        objectif: "Connaître les lois fondamentales et les éléments chimiques incontournables",
        tasks: [
          {
            id: "w3d1t1", type: "fiche",
            title: "Les grandes lois de la physique",
            items: [
              { fact: "La vitesse de la lumière est de 299 792 km/s", detail: "Notée 'c'. C'est la vitesse maximale dans l'univers. Einstein a montré que rien ne peut aller plus vite (E=mc²). La lumière du Soleil met 8 min 20 s à nous atteindre." },
              { fact: "La gravité sur Terre est de 9,81 m/s²", detail: "Notée 'g'. Elle varie légèrement selon l'altitude et la latitude. Sur la Lune c'est 1,62 m/s² (6 fois moins). Sur Jupiter c'est 24,8 m/s²." },
              { fact: "L'eau bout à 100°C et gèle à 0°C (au niveau de la mer)", detail: "L'échelle Celsius est basée sur ces deux points. En altitude, l'eau bout plus tôt (85°C au sommet de l'Everest). L'eau salée gèle à -2°C." },
              { fact: "Le zéro absolu est -273,15°C (0 Kelvin)", detail: "C'est la température la plus basse possible. Les atomes cessent tout mouvement. On ne l'a jamais atteint exactement, mais on s'en est approché à un milliardième de degré." },
              { fact: "Newton a formulé 3 lois du mouvement", detail: "1) Inertie : un objet reste immobile ou en mouvement sauf si une force agit. 2) F=ma. 3) Action-réaction : toute force entraîne une force opposée égale." },
              { fact: "La relativité d'Einstein : E = mc²", detail: "L'énergie (E) = masse (m) × vitesse de la lumière au carré (c²). 1 kg de matière = 90 000 milliards de joules. C'est le principe de la bombe atomique et des centrales nucléaires." },
              { fact: "Le son se déplace à ~343 m/s dans l'air", detail: "C'est environ 1 235 km/h. Mach 1 = la vitesse du son. Le Concorde volait à Mach 2. Le son ne se propage pas dans le vide (pas de son dans l'espace)." },
              { fact: "Les 4 forces fondamentales : gravité, électromagnétisme, force nucléaire forte, force nucléaire faible", detail: "La gravité est la plus faible mais agit à distance infinie. La force nucléaire forte est la plus puissante mais n'agit qu'à l'échelle du noyau atomique." }
            ],
            flashcards: [
              { q: "Quelle est la vitesse de la lumière ?", r: "299 792 km/s (environ 300 000 km/s)" },
              { q: "Quelle est la formule d'Einstein pour l'énergie ?", r: "E = mc²" },
              { q: "Quelle est la gravité sur Terre ?", r: "9,81 m/s²" },
              { q: "Qu'est-ce que le zéro absolu ?", r: "-273,15°C (0 Kelvin)" },
              { q: "Combien de lois du mouvement Newton a-t-il formulées ?", r: "3 lois" },
              { q: "À quelle vitesse le son se déplace-t-il dans l'air ?", r: "~343 m/s (1 235 km/h)" },
              { q: "Quelles sont les 4 forces fondamentales ?", r: "Gravité, électromagnétisme, force nucléaire forte, force nucléaire faible" },
              { q: "Quelle est la force fondamentale la plus puissante ?", r: "La force nucléaire forte" },
              { q: "Combien de temps met la lumière du Soleil pour atteindre la Terre ?", r: "8 minutes 20 secondes" },
              { q: "À quelle température l'eau bout-elle au sommet de l'Everest ?", r: "~85°C (pression atmosphérique plus faible)" },
              { q: "Qu'est-ce que Mach 1 ?", r: "La vitesse du son (~1 235 km/h)" },
              { q: "La 3e loi de Newton s'appelle comment ?", r: "Le principe d'action-réaction" }
            ]
          },
          {
            id: "w3d1t2", type: "fiche",
            title: "Le tableau périodique : les éléments à connaître",
            items: [
              { fact: "L'hydrogène (H) est l'élément le plus abondant de l'univers", detail: "75% de la matière de l'univers. C'est le carburant des étoiles (fusion nucléaire). Numéro atomique 1. Le plus léger de tous." },
              { fact: "L'or (Au) a le symbole Au, du latin 'aurum'", detail: "Numéro atomique 79. Métal rare et inaltérable (ne rouille pas). Tout l'or extrait dans l'histoire tiendrait dans 3 piscines olympiques." },
              { fact: "Le mercure (Hg) est le seul métal liquide à température ambiante", detail: "Son symbole Hg vient du latin 'hydrargyrum' (argent liquide). Très toxique. Utilisé dans les thermomètres avant d'être interdit." },
              { fact: "L'oxygène (O) représente 21% de l'air que nous respirons", detail: "L'azote (N) = 78%, l'oxygène = 21%, le reste = 1% (argon, CO2...). L'oxygène a été découvert par Lavoisier en 1778." },
              { fact: "Le fer (Fe) est le métal le plus utilisé au monde", detail: "Symbole Fe du latin 'ferrum'. Le noyau de la Terre est composé principalement de fer. L'acier = fer + carbone." },
              { fact: "L'uranium (U) est utilisé dans les centrales nucléaires", detail: "Numéro atomique 92. L'isotope U-235 est fissile. 1 kg d'uranium = autant d'énergie que 20 000 kg de charbon." },
              { fact: "Le carbone (C) est la base de toute la chimie organique", detail: "Numéro atomique 6. Peut former 4 liaisons → molécules très complexes (ADN, protéines). Diamant et graphite sont tous deux du carbone pur." },
              { fact: "Le tableau périodique a été créé par Mendeleïev en 1869", detail: "Dmitri Mendeleïev a classé les 63 éléments connus par masse atomique. Il a prédit l'existence d'éléments pas encore découverts ! Aujourd'hui : 118 éléments." }
            ],
            flashcards: [
              { q: "Quel est l'élément le plus abondant de l'univers ?", r: "L'hydrogène (H)" },
              { q: "Pourquoi le symbole de l'or est-il Au ?", r: "Du latin 'aurum'" },
              { q: "Quel est le seul métal liquide à température ambiante ?", r: "Le mercure (Hg)" },
              { q: "Quel pourcentage de l'air est de l'oxygène ?", r: "21%" },
              { q: "Qui a créé le tableau périodique ?", r: "Dmitri Mendeleïev (1869)" },
              { q: "Combien d'éléments le tableau périodique compte-t-il aujourd'hui ?", r: "118 éléments" },
              { q: "Quel élément est la base de la chimie organique ?", r: "Le carbone (C)" },
              { q: "Diamant et graphite sont composés du même élément. Lequel ?", r: "Le carbone" },
              { q: "Qui a découvert l'oxygène ?", r: "Lavoisier (1778)" },
              { q: "L'acier est un alliage de fer et de quel élément ?", r: "Le carbone" },
              { q: "1 kg d'uranium produit autant d'énergie que combien de kg de charbon ?", r: "20 000 kg" },
              { q: "Quel pourcentage de l'air est de l'azote ?", r: "78%" }
            ]
          },
          {
            id: "w3d1t3", type: "quiz",
            title: "Quiz : Physique & Chimie",
            questions: [
              { q: "Quelle est la vitesse de la lumière ?", r: "~300 000 km/s", choices: ["150 000 km/s", "~300 000 km/s", "1 million km/s", "30 000 km/s"] },
              { q: "Quelle est la formule d'Einstein ?", r: "E = mc²", choices: ["E = mv²", "E = mc²", "F = ma", "P = mgh"] },
              { q: "Qui a créé le tableau périodique ?", r: "Mendeleïev", choices: ["Einstein", "Newton", "Mendeleïev", "Lavoisier"] },
              { q: "Quel est le seul métal liquide à température ambiante ?", r: "Le mercure", choices: ["Le plomb", "Le mercure", "L'aluminium", "Le gallium"] },
              { q: "Quel est l'élément le plus abondant de l'univers ?", r: "L'hydrogène", choices: ["L'hélium", "L'oxygène", "L'hydrogène", "Le carbone"] },
              { q: "Combien y a-t-il de forces fondamentales en physique ?", r: "4", choices: ["2", "3", "4", "5"] },
              { q: "Le zéro absolu est à quelle température ?", r: "-273,15°C", choices: ["-100°C", "-273,15°C", "-459°C", "-300°C"] },
              { q: "L'air est composé principalement de quel gaz ?", r: "Azote (78%)", choices: ["Oxygène", "Azote (78%)", "CO2", "Argon"] }
            ]
          }
        ]
      },

      // === JOUR 2 : INVENTIONS SCIENTIFIQUES ===
      {
        day: 2, label: "Mardi", theme: "Inventions scientifiques", icon: "💡",
        objectif: "Les grandes inventions qui ont changé le monde et leurs inventeurs",
        tasks: [
          {
            id: "w3d2t1", type: "fiche",
            title: "Inventions qui ont changé le monde",
            items: [
              { fact: "L'imprimerie a été inventée par Gutenberg (1450)", detail: "Johannes Gutenberg a créé la presse à caractères mobiles à Mayence (Allemagne). Son premier livre : la Bible à 42 lignes. L'imprimerie a révolutionné la diffusion du savoir." },
              { fact: "La machine à vapeur perfectionnée par James Watt (1769)", detail: "Thomas Newcomen l'avait inventée en 1712, mais Watt l'a rendue efficace. Ça a lancé la révolution industrielle. L'unité de puissance 'watt' porte son nom." },
              { fact: "L'ampoule électrique inventée par Thomas Edison (1879)", detail: "Edison a trouvé le filament en bambou carbonisé qui dure 1200h. Il a aussi inventé le phonographe et fondé General Electric. 1093 brevets au total !" },
              { fact: "Le téléphone inventé par Alexander Graham Bell (1876)", detail: "Bell a déposé son brevet 2 heures avant son rival Elisha Gray. Ses premiers mots au téléphone : 'Mr. Watson, come here, I want to see you.'" },
              { fact: "La pénicilline découverte par Alexander Fleming (1928)", detail: "Fleming a découvert par accident qu'une moisissure tuait les bactéries. Le 1er antibiotique a sauvé des millions de vies. Prix Nobel 1945." },
              { fact: "Internet créé en 1969 (ARPANET) par le Département de la Défense américain", detail: "Le 1er message envoyé était 'LO' (le système a planté avant de finir 'LOGIN'). Tim Berners-Lee a inventé le World Wide Web en 1989 au CERN." },
              { fact: "La dynamite inventée par Alfred Nobel (1867)", detail: "Nobel a stabilisé la nitroglycérine avec de la terre de diatomée. Il a créé le prix Nobel avec sa fortune pour promouvoir la paix (ironie !)" },
              { fact: "Le vaccin inventé par Edward Jenner (1796)", detail: "Jenner a inoculé la variole de la vache (vaccine) à un enfant pour le protéger. Pasteur a perfectionné la méthode en 1885 avec le vaccin contre la rage." }
            ],
            flashcards: [
              { q: "Qui a inventé l'imprimerie à caractères mobiles ?", r: "Johannes Gutenberg (1450)" },
              { q: "Qui a perfectionné la machine à vapeur ?", r: "James Watt (1769)" },
              { q: "Qui a inventé l'ampoule électrique ?", r: "Thomas Edison (1879)" },
              { q: "Qui a inventé le téléphone ?", r: "Alexander Graham Bell (1876)" },
              { q: "Qui a découvert la pénicilline ?", r: "Alexander Fleming (1928)" },
              { q: "Quel était le premier réseau Internet ?", r: "ARPANET (1969)" },
              { q: "Qui a inventé la dynamite ?", r: "Alfred Nobel (1867)" },
              { q: "Qui a inventé le premier vaccin ?", r: "Edward Jenner (1796, variole)" },
              { q: "Qui a inventé le World Wide Web ?", r: "Tim Berners-Lee (1989, au CERN)" },
              { q: "Combien de brevets Edison a-t-il déposés ?", r: "1 093 brevets" },
              { q: "Quels sont les premiers mots prononcés au téléphone ?", r: "'Mr. Watson, come here, I want to see you'" },
              { q: "Quel est le premier livre imprimé par Gutenberg ?", r: "La Bible à 42 lignes" }
            ]
          },
          {
            id: "w3d2t2", type: "fiche",
            title: "Inventions françaises et modernes",
            items: [
              { fact: "Le cinématographe inventé par les frères Lumière (1895)", detail: "Auguste et Louis Lumière à Lyon. Première projection publique payante le 28 décembre 1895 au Grand Café à Paris. Le premier film : 'La Sortie de l'usine Lumière'." },
              { fact: "Le stéthoscope inventé par René Laennec (1816)", detail: "Médecin breton qui a roulé un cahier pour écouter le cœur d'une patiente. Le nom vient du grec 'stethos' (poitrine) et 'skopein' (examiner)." },
              { fact: "La pasteurisation inventée par Louis Pasteur (1863)", detail: "Chauffer un liquide pour tuer les microbes sans altérer le goût. Pasteur a aussi créé le vaccin contre la rage et prouvé que les germes causent les maladies." },
              { fact: "Le braille inventé par Louis Braille (1824)", detail: "Louis Braille, aveugle depuis l'âge de 3 ans, a inventé ce système d'écriture à 15 ans. 6 points en relief = 64 combinaisons. Utilisé dans le monde entier." },
              { fact: "L'avion des frères Wright (1903) — mais Clément Ader revendique 1890", detail: "Les frères Wright (USA) ont volé 12 secondes à Kitty Hawk. Clément Ader (France) prétend avoir volé en 1890 avec l'Éole, mais c'est contesté." },
              { fact: "Le GPS lancé par l'armée américaine (1978-1995)", detail: "24 satellites en orbite à 20 200 km d'altitude. Ouvert aux civils en 2000 par Bill Clinton. Précision : ~1 mètre. La version européenne s'appelle Galileo." },
              { fact: "Le smartphone : iPhone lancé par Apple en 2007", detail: "Steve Jobs a présenté le premier iPhone le 9 janvier 2007. Il combinait téléphone, iPod et navigateur web. Ça a tué le BlackBerry et le Nokia." }
            ],
            flashcards: [
              { q: "Qui a inventé le cinématographe ?", r: "Les frères Lumière (1895, Lyon)" },
              { q: "Quelle est la date de la 1ère projection de cinéma payante ?", r: "28 décembre 1895" },
              { q: "Qui a inventé le stéthoscope ?", r: "René Laennec (1816)" },
              { q: "Qui a inventé la pasteurisation ?", r: "Louis Pasteur (1863)" },
              { q: "Qui a inventé le braille ?", r: "Louis Braille (1824, à 15 ans)" },
              { q: "Quand le premier iPhone a-t-il été présenté ?", r: "9 janvier 2007" },
              { q: "Comment s'appelle le GPS européen ?", r: "Galileo" },
              { q: "Qui revendique le premier vol motorisé en France ?", r: "Clément Ader (1890, avec l'Éole)" },
              { q: "Combien de satellites composent le GPS ?", r: "24 satellites" },
              { q: "Quel Français a prouvé que les germes causent les maladies ?", r: "Louis Pasteur" }
            ]
          },
          {
            id: "w3d2t3", type: "quiz",
            title: "Quiz : Inventions",
            questions: [
              { q: "Qui a inventé l'imprimerie ?", r: "Gutenberg", choices: ["Galilée", "Gutenberg", "Newton", "Da Vinci"] },
              { q: "La pénicilline a été découverte par accident en quelle année ?", r: "1928", choices: ["1895", "1912", "1928", "1945"] },
              { q: "Qui a inventé le cinématographe ?", r: "Les frères Lumière", choices: ["Thomas Edison", "Les frères Lumière", "Georges Méliès", "Charlie Chaplin"] },
              { q: "Qui a perfectionné la machine à vapeur ?", r: "James Watt", choices: ["Thomas Edison", "James Watt", "Benjamin Franklin", "Nikola Tesla"] },
              { q: "Quel était le premier réseau Internet ?", r: "ARPANET", choices: ["Ethernet", "ARPANET", "World Wide Web", "Minitel"] },
              { q: "Qui a inventé le braille ?", r: "Louis Braille", choices: ["Louis Pasteur", "Louis Braille", "Louis Lumière", "Louis XIV"] },
              { q: "Le premier iPhone date de quelle année ?", r: "2007", choices: ["2004", "2005", "2007", "2010"] },
              { q: "Qui a créé le prix Nobel ?", r: "Alfred Nobel", choices: ["Albert Einstein", "Alfred Nobel", "Isaac Newton", "Marie Curie"] }
            ]
          }
        ]
      },

      // === JOUR 3 : ASTRONOMIE & ESPACE ===
      {
        day: 3, label: "Mercredi", theme: "Astronomie & Espace", icon: "🚀",
        objectif: "Le système solaire, les étoiles et les missions spatiales marquantes",
        tasks: [
          {
            id: "w3d3t1", type: "fiche",
            title: "Le système solaire",
            items: [
              { fact: "Les 8 planètes dans l'ordre : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune", detail: "Moyen mnémotechnique : 'Me Voici Tout Mouillé, Je Suis Un Nageur'. Pluton a été rétrogradée en planète naine en 2006." },
              { fact: "Jupiter est la plus grande planète (11× le diamètre de la Terre)", detail: "Sa Grande Tache Rouge est une tempête plus grande que la Terre, active depuis 350 ans. Jupiter a 95 lunes connues, dont Europa (peut-être de l'eau liquide)." },
              { fact: "Le Soleil représente 99,86% de la masse du système solaire", detail: "C'est une étoile naine jaune. Sa température de surface = 5 500°C. Son cœur = 15 millions de degrés. Il brûlera encore 5 milliards d'années." },
              { fact: "La Lune est à 384 400 km de la Terre", detail: "C'est le seul corps céleste visité par l'homme (Apollo 11, 1969). La Lune s'éloigne de 3,8 cm par an. Elle met 27,3 jours pour faire le tour de la Terre." },
              { fact: "Mars est surnommée la planète rouge à cause de l'oxyde de fer", detail: "Mars a le plus grand volcan du système solaire : Olympus Mons (21 km de haut, 3× l'Everest). Une journée sur Mars = 24h37." },
              { fact: "Saturne a des anneaux composés de glace et de roches", detail: "Les anneaux font 280 000 km de diamètre mais seulement 10 m d'épaisseur ! Saturne est si légère qu'elle flotterait sur l'eau (densité < 1)." },
              { fact: "Une année-lumière = 9 461 milliards de km", detail: "C'est la distance parcourue par la lumière en 1 an. L'étoile la plus proche (Proxima Centauri) est à 4,24 années-lumière. Notre galaxie fait 100 000 années-lumière de diamètre." }
            ],
            flashcards: [
              { q: "Citez les 8 planètes du système solaire dans l'ordre", r: "Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune" },
              { q: "Quelle est la plus grande planète du système solaire ?", r: "Jupiter" },
              { q: "En quelle année Pluton a-t-elle perdu son statut de planète ?", r: "2006" },
              { q: "Quel pourcentage de la masse du système solaire le Soleil représente-t-il ?", r: "99,86%" },
              { q: "À quelle distance est la Lune de la Terre ?", r: "384 400 km" },
              { q: "Quel est le plus grand volcan du système solaire ?", r: "Olympus Mons (sur Mars, 21 km de haut)" },
              { q: "Pourquoi Mars est-elle rouge ?", r: "À cause de l'oxyde de fer (rouille) à sa surface" },
              { q: "De quoi sont composés les anneaux de Saturne ?", r: "De glace et de roches" },
              { q: "Qu'est-ce qu'une année-lumière en km ?", r: "9 461 milliards de km" },
              { q: "Quelle est l'étoile la plus proche de la Terre (hors Soleil) ?", r: "Proxima Centauri (4,24 années-lumière)" },
              { q: "Combien de lunes connues Jupiter a-t-elle ?", r: "95 lunes" },
              { q: "Quelle planète flotterait sur l'eau ?", r: "Saturne (densité < 1)" }
            ]
          },
          {
            id: "w3d3t2", type: "fiche",
            title: "Les grandes missions spatiales",
            items: [
              { fact: "Spoutnik : 1er satellite artificiel (1957, URSS)", detail: "Une simple sphère de 58 cm avec 4 antennes. Son 'bip-bip' a choqué le monde et lancé la course à l'espace." },
              { fact: "Youri Gagarine : 1er humain dans l'espace (12 avril 1961)", detail: "Vol de 108 minutes en orbite autour de la Terre dans Vostok 1. Sa phrase célèbre : 'La Terre est bleue... c'est magnifique.'" },
              { fact: "Apollo 11 : 1er pas sur la Lune (20 juillet 1969)", detail: "Neil Armstrong : 'Un petit pas pour l'homme, un bond de géant pour l'humanité.' Buzz Aldrin l'a rejoint. Michael Collins est resté en orbite." },
              { fact: "Voyager 1 : l'objet humain le plus éloigné de la Terre", detail: "Lancé en 1977, il est à plus de 24 milliards de km. Il transporte un disque d'or avec des sons et images de la Terre pour d'éventuels extraterrestres." },
              { fact: "Le télescope spatial Hubble lancé en 1990", detail: "Orbite à 547 km d'altitude. Il a révolutionné l'astronomie avec des images incroyables. Remplacé progressivement par le James Webb (lancé en 2021)." },
              { fact: "Thomas Pesquet : 1er Français commandant de l'ISS (2021)", detail: "Astronaute de l'ESA. 2 missions : Proxima (2016-2017) et Alpha (2021). Il a passé 396 jours dans l'espace au total." }
            ],
            flashcards: [
              { q: "Quel est le 1er satellite artificiel de l'histoire ?", r: "Spoutnik (1957, URSS)" },
              { q: "Qui est le 1er humain dans l'espace ?", r: "Youri Gagarine (12 avril 1961)" },
              { q: "Qui a été le 1er homme à marcher sur la Lune ?", r: "Neil Armstrong (20 juillet 1969)" },
              { q: "Quel est l'objet humain le plus éloigné de la Terre ?", r: "Voyager 1 (lancé en 1977)" },
              { q: "En quelle année le télescope Hubble a-t-il été lancé ?", r: "1990" },
              { q: "Comment s'appelle le successeur de Hubble ?", r: "Le télescope James Webb (2021)" },
              { q: "Qui est le 1er Français commandant de l'ISS ?", r: "Thomas Pesquet (2021)" },
              { q: "Que transporte Voyager 1 pour les extraterrestres ?", r: "Un disque d'or avec des sons et images de la Terre" },
              { q: "Quelle est la phrase célèbre de Gagarine ?", r: "'La Terre est bleue... c'est magnifique'" },
              { q: "Qui est resté en orbite pendant qu'Armstrong marchait sur la Lune ?", r: "Michael Collins" }
            ]
          },
          {
            id: "w3d3t3", type: "quiz",
            title: "Quiz : Astronomie",
            questions: [
              { q: "Quelle est la plus grande planète du système solaire ?", r: "Jupiter", choices: ["Saturne", "Jupiter", "Neptune", "Uranus"] },
              { q: "Qui est le premier homme à marcher sur la Lune ?", r: "Neil Armstrong", choices: ["Buzz Aldrin", "Neil Armstrong", "Youri Gagarine", "John Glenn"] },
              { q: "Quel télescope spatial a été lancé en 1990 ?", r: "Hubble", choices: ["James Webb", "Hubble", "Kepler", "Spitzer"] },
              { q: "En quelle année Pluton a perdu son statut de planète ?", r: "2006", choices: ["2000", "2003", "2006", "2012"] },
              { q: "Combien de planètes dans le système solaire ?", r: "8", choices: ["7", "8", "9", "10"] },
              { q: "Quel Français a commandé l'ISS en 2021 ?", r: "Thomas Pesquet", choices: ["Jean-Loup Chrétien", "Thomas Pesquet", "Claudie Haigneré", "Patrick Baudry"] },
              { q: "Quel est le plus grand volcan du système solaire ?", r: "Olympus Mons", choices: ["Mauna Kea", "Olympus Mons", "Everest", "Etna"] },
              { q: "Le 1er satellite artificiel s'appelait ?", r: "Spoutnik", choices: ["Explorer", "Spoutnik", "Vostok", "Apollo"] }
            ]
          }
        ]
      },

      // === JOUR 4 : BIOLOGIE & CORPS HUMAIN ===
      {
        day: 4, label: "Jeudi", theme: "Biologie & Corps humain", icon: "🧬",
        objectif: "ADN, cellules, organes et grandes découvertes biologiques",
        tasks: [
          {
            id: "w3d4t1", type: "fiche",
            title: "Les bases de la biologie",
            items: [
              { fact: "L'ADN contient le code génétique de tout être vivant", detail: "ADN = Acide DésoxyriboNucléique. Double hélice découverte par Watson & Crick (1953). Déroulé, l'ADN d'une cellule mesure ~2 mètres. Le génome humain = 3,2 milliards de paires de bases." },
              { fact: "Le corps humain contient environ 37 200 milliards de cellules", detail: "Mais aussi 38 000 milliards de bactéries ! On a plus de bactéries que de cellules propres. Les cellules se renouvellent : peau = 2-3 semaines, sang = 120 jours." },
              { fact: "Charles Darwin a proposé la théorie de l'évolution (1859)", detail: "Dans 'L'Origine des espèces'. Sélection naturelle : les individus les mieux adaptés survivent et se reproduisent. Voyage sur le Beagle aux Galapagos = inspiration clé." },
              { fact: "Les mitochondries sont les 'centrales énergétiques' de la cellule", detail: "Elles produisent l'ATP (énergie). Fait étonnant : elles ont leur propre ADN et étaient probablement des bactéries indépendantes il y a 2 milliards d'années (endosymbiose)." },
              { fact: "La photosynthèse transforme le CO2 en oxygène grâce à la lumière", detail: "6 CO2 + 6 H2O + lumière → C6H12O6 (glucose) + 6 O2. Se déroule dans les chloroplastes. Les plantes produisent ~50% de l'oxygène terrestre (le reste = océans)." },
              { fact: "Le cerveau humain contient ~86 milliards de neurones", detail: "Il consomme 20% de l'énergie du corps alors qu'il ne pèse que 1,4 kg (2% du poids). Les signaux nerveux voyagent à ~400 km/h." }
            ],
            flashcards: [
              { q: "Que signifie ADN ?", r: "Acide DésoxyriboNucléique" },
              { q: "Qui a découvert la structure en double hélice de l'ADN ?", r: "Watson & Crick (1953)" },
              { q: "Combien de cellules dans le corps humain ?", r: "~37 200 milliards" },
              { q: "Qui a proposé la théorie de l'évolution ?", r: "Charles Darwin (1859)" },
              { q: "Quel organe consomme 20% de l'énergie du corps ?", r: "Le cerveau" },
              { q: "Combien de neurones dans le cerveau humain ?", r: "~86 milliards" },
              { q: "Qu'est-ce que la photosynthèse produit ?", r: "Du glucose et de l'oxygène à partir de CO2 et d'eau" },
              { q: "Comment s'appelle la 'centrale énergétique' de la cellule ?", r: "La mitochondrie" },
              { q: "Combien pèse le cerveau humain ?", r: "~1,4 kg" },
              { q: "À quelle vitesse les signaux nerveux voyagent-ils ?", r: "~400 km/h" },
              { q: "Déroulé, l'ADN d'une cellule mesure combien ?", r: "~2 mètres" },
              { q: "Quel est le livre majeur de Darwin ?", r: "L'Origine des espèces (1859)" }
            ]
          },
          {
            id: "w3d4t2", type: "fiche",
            title: "Le corps humain : records et chiffres",
            items: [
              { fact: "Le cœur bat environ 100 000 fois par jour", detail: "Soit ~3 milliards de battements dans une vie. Le cœur pompe ~7 000 litres de sang par jour. Le sang fait le tour du corps en ~1 minute." },
              { fact: "Le fémur est l'os le plus long du corps (environ 1/4 de la taille)", detail: "Le corps humain a 206 os chez l'adulte (mais 270 à la naissance — ils fusionnent). L'os le plus petit : l'étrier dans l'oreille (3 mm)." },
              { fact: "L'intestin grêle mesure environ 6 mètres de long", detail: "Le gros intestin fait ~1,5 m. La surface totale des intestins (avec les villosités) = ~32 m², soit un demi-terrain de badminton." },
              { fact: "Les poumons contiennent ~300 millions d'alvéoles", detail: "Surface d'échange = ~70 m² (un court de tennis). On respire ~20 000 fois par jour et on inhale ~10 000 litres d'air." },
              { fact: "Le foie est le plus gros organe interne (~1,5 kg)", detail: "Il remplit plus de 500 fonctions : détoxification, production de bile, stockage du glucose, synthèse des protéines. Il peut se régénérer !" },
              { fact: "L'être humain a 5 sens principaux mais en réalité bien plus", detail: "En plus de la vue, l'ouïe, l'odorat, le goût et le toucher, on a la proprioception (position du corps), la thermoception (température), la nociception (douleur), l'équilibrioception..." }
            ],
            flashcards: [
              { q: "Combien de fois le cœur bat-il par jour ?", r: "~100 000 fois" },
              { q: "Combien d'os un adulte a-t-il ?", r: "206 os" },
              { q: "Quel est l'os le plus long du corps ?", r: "Le fémur" },
              { q: "Quel est l'os le plus petit du corps ?", r: "L'étrier (dans l'oreille, 3 mm)" },
              { q: "Quelle est la longueur de l'intestin grêle ?", r: "~6 mètres" },
              { q: "Combien d'alvéoles dans les poumons ?", r: "~300 millions" },
              { q: "Quel est le plus gros organe interne ?", r: "Le foie (~1,5 kg)" },
              { q: "Combien de litres de sang le cœur pompe-t-il par jour ?", r: "~7 000 litres" },
              { q: "Combien de fonctions le foie remplit-il ?", r: "Plus de 500" },
              { q: "Qu'est-ce que la proprioception ?", r: "Le sens de la position du corps dans l'espace" },
              { q: "Combien d'os un bébé a-t-il à la naissance ?", r: "270 (ils fusionnent en 206)" },
              { q: "Combien de fois respire-t-on par jour ?", r: "~20 000 fois" }
            ]
          },
          {
            id: "w3d4t3", type: "quiz",
            title: "Quiz : Biologie",
            questions: [
              { q: "Que signifie ADN ?", r: "Acide DésoxyriboNucléique", choices: ["Acide DiNitrique", "Acide DésoxyriboNucléique", "Amine DéNaturée", "Atome DiNucléaire"] },
              { q: "Combien d'os chez un adulte ?", r: "206", choices: ["186", "206", "256", "270"] },
              { q: "Quel est le plus gros organe interne ?", r: "Le foie", choices: ["Le cerveau", "Le foie", "Les poumons", "L'estomac"] },
              { q: "Qui a proposé la théorie de l'évolution ?", r: "Darwin", choices: ["Pasteur", "Darwin", "Mendel", "Lamarck"] },
              { q: "Combien de neurones dans le cerveau ?", r: "~86 milliards", choices: ["10 milliards", "~86 milliards", "200 milliards", "1 billion"] },
              { q: "Qu'est-ce que la mitochondrie ?", r: "La centrale énergétique de la cellule", choices: ["Le noyau de la cellule", "La centrale énergétique de la cellule", "La membrane cellulaire", "Un type de bactérie"] },
              { q: "Combien de fois le cœur bat-il par jour ?", r: "~100 000", choices: ["50 000", "~100 000", "200 000", "500 000"] },
              { q: "Quel est l'os le plus petit du corps ?", r: "L'étrier", choices: ["La rotule", "L'étrier", "Le coccyx", "La phalange"] }
            ]
          }
        ]
      },

      // === JOUR 5 : MATHÉMATIQUES & GRANDS SCIENTIFIQUES ===
      {
        day: 5, label: "Vendredi", theme: "Maths & Grands scientifiques", icon: "🧮",
        objectif: "Les nombres célèbres, les théorèmes et les scientifiques incontournables",
        tasks: [
          {
            id: "w3d5t1", type: "fiche",
            title: "Nombres et concepts mathématiques célèbres",
            items: [
              { fact: "Pi (π) ≈ 3,14159... — rapport du périmètre d'un cercle à son diamètre", detail: "Nombre irrationnel (décimales infinies sans motif). Record : calculé à 100 000 milliards de décimales (2024). Le 14 mars = Pi Day (3/14 en format US)." },
              { fact: "Le nombre d'or (φ) ≈ 1,618", detail: "Présent dans la nature (coquillage nautile, tournesol), l'architecture (Parthénon) et l'art (Léonard de Vinci). La suite de Fibonacci converge vers φ." },
              { fact: "Le théorème de Pythagore : a² + b² = c²", detail: "Dans un triangle rectangle, le carré de l'hypoténuse = somme des carrés des deux autres côtés. Connu des Babyloniens 1000 ans avant Pythagore." },
              { fact: "L'infini (∞) n'est pas un nombre, c'est un concept", detail: "Georg Cantor a montré qu'il existe plusieurs tailles d'infini. L'ensemble des nombres réels est 'plus infini' que l'ensemble des entiers naturels !" },
              { fact: "Le zéro a été inventé en Inde au Ve siècle", detail: "Les mathématiciens indiens (Brahmagupta, ~628) ont été les premiers à traiter le zéro comme un nombre. Les Mayas l'avaient aussi indépendamment. Il est arrivé en Europe via les Arabes." },
              { fact: "Un googol = 10^100 (1 suivi de 100 zéros)", detail: "Le nom 'Google' vient d'une faute d'orthographe de 'googol'. Un googolplex = 10^googol, un nombre si grand qu'on ne pourrait pas l'écrire même en utilisant tout l'univers." }
            ],
            flashcards: [
              { q: "Que vaut approximativement Pi (π) ?", r: "3,14159..." },
              { q: "Que vaut le nombre d'or (φ) ?", r: "~1,618" },
              { q: "Quel est le théorème de Pythagore ?", r: "a² + b² = c² (triangle rectangle)" },
              { q: "Qui a montré qu'il existe plusieurs tailles d'infini ?", r: "Georg Cantor" },
              { q: "Où et quand le zéro a-t-il été inventé ?", r: "En Inde, au Ve siècle" },
              { q: "Combien vaut un googol ?", r: "10^100 (1 suivi de 100 zéros)" },
              { q: "D'où vient le nom 'Google' ?", r: "D'une faute d'orthographe de 'googol'" },
              { q: "Quelle suite mathématique converge vers le nombre d'or ?", r: "La suite de Fibonacci" },
              { q: "Quand est le Pi Day ?", r: "Le 14 mars (3/14)" },
              { q: "Les Babyloniens connaissaient quel théorème 1000 ans avant son auteur ?", r: "Le théorème de Pythagore" }
            ]
          },
          {
            id: "w3d5t2", type: "fiche",
            title: "Les grands scientifiques à connaître",
            items: [
              { fact: "Marie Curie : 1ère femme prix Nobel, 2 prix Nobel (physique 1903, chimie 1911)", detail: "Née en Pologne, naturalisée française. A découvert le radium et le polonium. Morte d'une leucémie causée par ses recherches. Ses carnets sont encore radioactifs aujourd'hui." },
              { fact: "Albert Einstein : prix Nobel de physique 1921 (effet photoélectrique)", detail: "Pas pour la relativité ! Né en Allemagne, naturalisé américain. A refusé la présidence d'Israël. Son cerveau a été conservé après sa mort." },
              { fact: "Isaac Newton : gravitation universelle, optique, calcul infinitésimal", detail: "La légende de la pomme tombée sur sa tête est probablement vraie (racontée par Newton lui-même). Né le 25 décembre 1642. A aussi été alchimiste." },
              { fact: "Galilée : père de l'astronomie moderne, a amélioré le télescope", detail: "A observé les lunes de Jupiter (1610). Condamné par l'Inquisition pour avoir dit que la Terre tourne autour du Soleil. Phrase apocryphe : 'Et pourtant elle tourne.'" },
              { fact: "Nikola Tesla : courant alternatif, bobine Tesla, transmission sans fil", detail: "Génie visionnaire rival d'Edison. 300 brevets. A imaginé le WiFi, les drones et les robots 100 ans avant. Mort seul et ruiné en 1943. L'unité tesla (T) mesure le champ magnétique." },
              { fact: "Ada Lovelace : 1ère programmeuse de l'histoire (1843)", detail: "Fille de Lord Byron. A écrit le premier algorithme destiné à être exécuté par une machine (la machine analytique de Babbage). Le langage Ada porte son nom." }
            ],
            flashcards: [
              { q: "Combien de prix Nobel Marie Curie a-t-elle reçus ?", r: "2 (physique 1903, chimie 1911)" },
              { q: "Pour quelle découverte Einstein a-t-il eu le Nobel ?", r: "L'effet photoélectrique (pas la relativité)" },
              { q: "Qui est considéré comme le père de la gravitation universelle ?", r: "Isaac Newton" },
              { q: "Qui a été condamné par l'Inquisition pour l'héliocentrisme ?", r: "Galilée" },
              { q: "Qui est le rival d'Edison pour le courant alternatif ?", r: "Nikola Tesla" },
              { q: "Qui est la 1ère programmeuse de l'histoire ?", r: "Ada Lovelace (1843)" },
              { q: "Quels éléments Marie Curie a-t-elle découverts ?", r: "Le radium et le polonium" },
              { q: "Combien de brevets Tesla a-t-il déposés ?", r: "~300 brevets" },
              { q: "De qui Ada Lovelace est-elle la fille ?", r: "Lord Byron (le poète)" },
              { q: "Qu'a refusé Einstein en 1952 ?", r: "La présidence d'Israël" },
              { q: "Quelle phrase est attribuée (à tort) à Galilée ?", r: "'Et pourtant elle tourne'" },
              { q: "Quand est né Newton ?", r: "Le 25 décembre 1642" }
            ]
          },
          {
            id: "w3d5t3", type: "quiz",
            title: "Quiz final : Sciences",
            questions: [
              { q: "Combien de prix Nobel Marie Curie a-t-elle reçus ?", r: "2", choices: ["1", "2", "3", "4"] },
              { q: "Que vaut approximativement Pi ?", r: "3,14159", choices: ["2,71828", "3,14159", "1,61803", "9,80665"] },
              { q: "Qui est la 1ère programmeuse de l'histoire ?", r: "Ada Lovelace", choices: ["Grace Hopper", "Ada Lovelace", "Marie Curie", "Hedy Lamarr"] },
              { q: "Le théorème de Pythagore concerne quel type de triangle ?", r: "Triangle rectangle", choices: ["Triangle isocèle", "Triangle rectangle", "Triangle équilatéral", "Triangle quelconque"] },
              { q: "Pour quelle découverte Einstein a-t-il eu le Nobel ?", r: "L'effet photoélectrique", choices: ["La relativité", "L'effet photoélectrique", "La fission nucléaire", "Les ondes gravitationnelles"] },
              { q: "Qui a inventé le courant alternatif ?", r: "Nikola Tesla", choices: ["Thomas Edison", "Nikola Tesla", "Benjamin Franklin", "Michael Faraday"] },
              { q: "Où le zéro a-t-il été inventé ?", r: "En Inde", choices: ["En Grèce", "En Egypte", "En Inde", "En Chine"] },
              { q: "D'où vient le nom de la société Google ?", r: "Du nombre googol (10^100)", choices: ["D'un algorithme", "Du nombre googol (10^100)", "Du nom d'un fondateur", "D'un mot allemand"] }
            ]
          }
        ]
      }
    ]
  }
];
