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
  }
];
