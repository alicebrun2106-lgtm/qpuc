// Programme QPUC - Semaines de révision (structure par micro-tâches)
const PROGRAMME_WEEKS = [
  {
    week: 1,
    title: "Les Fondations",
    description: "Couvrir les bases dans tous les grands domaines de culture générale",
    days: [
      // ===================== JOUR 1 : HISTOIRE DE FRANCE =====================
      {
        day: 1, label: "Lundi", theme: "Histoire de France", icon: "🏰",
        objectif: "Maîtriser les grandes périodes et dates clés",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d1t0", type: "lecture",
            title: "L'histoire de France en 20 minutes",
            subtitle: "Vidéo YouTube — Parcourir les grandes dates de l'histoire de France",
            url: "https://www.youtube.com/watch?v=JDE2mNATuyM",
            duration: "20 min"
          },
          // --- Fiche 1 : Moyen Âge (481–1453) ---
          {
            id: "w1d1t1", type: "fiche",
            title: "Moyen Âge (481–1453)",
            items: [
              { fact: "481 — Clovis, roi des Francs", detail: "Baptisé à Reims par Saint Rémi vers 496. Premier roi barbare converti au catholicisme, ce qui lui assure le soutien de l'Église et unifie le royaume franc." },
              { fact: "800 — Charlemagne couronné empereur", detail: "Couronné par le pape Léon III à Rome le 25 décembre 800. Son empire couvre la France, l'Allemagne et l'Italie actuelles. Il relance l'éducation (renaissance carolingienne)." },
              { fact: "1066 — Guillaume le Conquérant envahit l'Angleterre", detail: "Duc de Normandie, il bat Harold II à la bataille d'Hastings. La Tapisserie de Bayeux (70 m de long) raconte cet événement. L'anglais moderne est rempli de mots français à cause de cette conquête." },
              { fact: "1337–1453 — Guerre de Cent Ans", detail: "Conflit dynastique entre Valois (France) et Plantagenêts (Angleterre). Batailles clés : Crécy (1346), Azincourt (1415). Se termine par la victoire française à Castillon (1453)." },
              { fact: "1431 — Jeanne d'Arc brûlée à Rouen", detail: "Capturée par les Bourguignons, vendue aux Anglais, condamnée pour hérésie. Elle avait fait sacrer Charles VII à Reims en 1429. Canonisée en 1920." }
            ],
            flashcards: [
              { q: "Par qui Clovis a-t-il été baptisé ?", r: "Saint Rémi" },
              { q: "Dans quelle ville Clovis a-t-il été baptisé ?", r: "Reims" },
              { q: "Vers quelle année Clovis a-t-il été baptisé ?", r: "496" },
              { q: "Quel pape a couronné Charlemagne ?", r: "Léon III" },
              { q: "Quel jour Charlemagne a-t-il été couronné en 800 ?", r: "25 décembre" },
              { q: "Comment appelle-t-on la renaissance culturelle sous Charlemagne ?", r: "Renaissance carolingienne" },
              { q: "Quelle bataille Guillaume le Conquérant remporte-t-il en 1066 ?", r: "Hastings" },
              { q: "Quelle est la longueur de la Tapisserie de Bayeux ?", r: "70 mètres" },
              { q: "Quelle bataille clé de la Guerre de Cent Ans a lieu en 1415 ?", r: "Azincourt" },
              { q: "En quelle année la Guerre de Cent Ans se termine-t-elle ?", r: "1453" },
              { q: "Quelle est la dernière bataille de la Guerre de Cent Ans ?", r: "Castillon" },
              { q: "Par qui Jeanne d'Arc a-t-elle été capturée ?", r: "Les Bourguignons" },
              { q: "En quelle année Jeanne d'Arc fait-elle sacrer Charles VII ?", r: "1429" },
              { q: "En quelle année Jeanne d'Arc a-t-elle été canonisée ?", r: "1920" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d1t2", type: "quiz",
            title: "Mini-quiz : Moyen Âge",
            questions: [
              { q: "En quelle année Clovis est-il devenu roi des Francs ?", r: "481", hint: "Fin du Ve siècle, début du Moyen Âge franc" },
              { q: "Qui a couronné Charlemagne empereur et en quelle année ?", r: "Le pape Léon III, en 800", hint: "Un soir de Noël à Rome" },
              { q: "Quelle bataille de 1066 a permis à Guillaume de conquérir l'Angleterre ?", r: "La bataille d'Hastings", hint: "Racontée sur une célèbre tapisserie" },
              { q: "En quelle année Jeanne d'Arc a-t-elle été brûlée à Rouen ?", r: "1431", hint: "Deux ans après le sacre de Charles VII à Reims" }
            ]
          },
          // --- Fiche 2 : Renaissance & guerres de religion (1515–1610) ---
          {
            id: "w1d1t3", type: "fiche",
            title: "Renaissance & guerres de religion (1515–1610)",
            items: [
              { fact: "1515 — Bataille de Marignan (François Ier)", detail: "Victoire contre les Suisses en Italie du Nord. François Ier, sacré un an plus tôt, ramène Léonard de Vinci en France. C'est LA date que tout le monde connaît." },
              { fact: "1539 — Ordonnance de Villers-Cotterêts", detail: "François Ier impose le français à la place du latin dans les actes officiels. C'est l'acte fondateur de la langue française comme langue administrative." },
              { fact: "1572 — Massacre de la Saint-Barthélemy (24 août)", detail: "Des milliers de protestants assassinés à Paris et en province, sur ordre de Catherine de Médicis et Charles IX. Point culminant des guerres de religion." },
              { fact: "1598 — Édit de Nantes (Henri IV)", detail: "Accorde la liberté de culte aux protestants. Henri IV, ancien protestant converti (« Paris vaut bien une messe »), met fin à 36 ans de guerres de religion." },
              { fact: "1610 — Assassinat d'Henri IV par Ravaillac", detail: "Poignardé dans son carrosse rue de la Ferronnerie à Paris le 14 mai. Son fils Louis XIII n'a que 9 ans ; Marie de Médicis assure la régence." }
            ],
            flashcards: [
              { q: "Contre qui François Ier remporte-t-il Marignan ?", r: "Les Suisses" },
              { q: "Quel artiste François Ier ramène-t-il d'Italie ?", r: "Léonard de Vinci" },
              { q: "Quelle langue l'ordonnance de Villers-Cotterêts remplace-t-elle ?", r: "Le latin" },
              { q: "Quel roi signe l'ordonnance de Villers-Cotterêts ?", r: "François Ier" },
              { q: "Quel jour a lieu le massacre de la Saint-Barthélemy ?", r: "24 août 1572" },
              { q: "Qui ordonne le massacre de la Saint-Barthélemy ?", r: "Catherine de Médicis" },
              { q: "Quelle phrase célèbre attribue-t-on à Henri IV ?", r: "Paris vaut bien une messe" },
              { q: "Combien d'années durent les guerres de religion en France ?", r: "36 ans" },
              { q: "Dans quelle rue Henri IV est-il assassiné ?", r: "Rue de la Ferronnerie" },
              { q: "Quel âge a Louis XIII à la mort d'Henri IV ?", r: "9 ans" },
              { q: "Qui assure la régence après l'assassinat d'Henri IV ?", r: "Marie de Médicis" },
              { q: "Quel jour Henri IV est-il assassiné en 1610 ?", r: "14 mai" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d1t4", type: "quiz",
            title: "Mini-quiz : Renaissance & guerres de religion",
            questions: [
              { q: "Quelle ordonnance de 1539 impose le français dans les actes officiels ?", r: "L'ordonnance de Villers-Cotterêts", hint: "Signée par François Ier" },
              { q: "Quel édit de 1598 accorde la liberté de culte aux protestants ?", r: "L'édit de Nantes", hint: "Signé par Henri IV" },
              { q: "Quel roi est associé à la bataille de Marignan en 1515 ?", r: "François Ier", hint: "Il a aussi invité Léonard de Vinci en France" },
              { q: "Qui a assassiné Henri IV en 1610 ?", r: "Ravaillac", hint: "Rue de la Ferronnerie à Paris" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d1t5", type: "lecture",
            title: "L'Histoire de France en 100 dates importantes",
            subtitle: "Vidéo YouTube — De la préhistoire à la Ve République (22 min)",
            url: "https://www.youtube.com/watch?v=VM90PABJ2wQ",
            duration: "22 min"
          },
          // --- Fiche 3 : Monarchie absolue & Lumières (1643–1789) ---
          {
            id: "w1d1t6", type: "fiche",
            title: "Monarchie absolue & Lumières (1643–1789)",
            items: [
              { fact: "1643–1715 — Règne de Louis XIV (72 ans)", detail: "Le Roi-Soleil, plus long règne d'Europe. Construit Versailles, révoque l'édit de Nantes (1685, édit de Fontainebleau). Ministre clé : Colbert (économie)." },
              { fact: "1685 — Révocation de l'édit de Nantes", detail: "Louis XIV signe l'édit de Fontainebleau. Environ 200 000 protestants (huguenots) fuient la France, emportant savoir-faire et capitaux. Erreur économique majeure." },
              { fact: "1715–1774 — Louis XV, le Bien-Aimé", detail: "Arrière-petit-fils de Louis XIV, roi à 5 ans. Perd le Canada au traité de Paris (1763). Fin de règne impopulaire. Meurt de la variole." },
              { fact: "1751 — L'Encyclopédie de Diderot et d'Alembert", detail: "28 volumes, 17 ans de travail, 150 auteurs. Œuvre phare des Lumières, elle diffuse le savoir et critique l'autorité. Combattue par la censure royale." },
              { fact: "1774–1792 — Louis XVI, dernier roi de l'Ancien Régime", detail: "Épouse Marie-Antoinette d'Autriche. Convoque les États généraux en 1789. Guillotiné le 21 janvier 1793 place de la Révolution (actuelle Concorde)." }
            ],
            flashcards: [
              { q: "Combien d'années dure le règne de Louis XIV ?", r: "72 ans" },
              { q: "Quel ministre gère l'économie sous Louis XIV ?", r: "Colbert" },
              { q: "Quel édit Louis XIV signe-t-il en 1685 ?", r: "Édit de Fontainebleau" },
              { q: "Combien de protestants fuient la France après 1685 ?", r: "200 000" },
              { q: "De quelle maladie meurt Louis XV ?", r: "La variole" },
              { q: "Quel traité fait perdre le Canada à la France ?", r: "Traité de Paris (1763)" },
              { q: "Combien de volumes comporte l'Encyclopédie ?", r: "28 volumes" },
              { q: "Combien d'auteurs ont contribué à l'Encyclopédie ?", r: "150 auteurs" },
              { q: "Qui co-dirige l'Encyclopédie avec Diderot ?", r: "D'Alembert" },
              { q: "Quelle est l'épouse de Louis XVI ?", r: "Marie-Antoinette" },
              { q: "Quel jour Louis XVI est-il guillotiné ?", r: "21 janvier 1793" },
              { q: "Comment s'appelle aujourd'hui la place de la Révolution ?", r: "Place de la Concorde" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d1t7", type: "quiz",
            title: "Mini-quiz : Monarchie absolue & Lumières",
            questions: [
              { q: "Combien d'années a duré le règne de Louis XIV ?", r: "72 ans (1643–1715)", hint: "Le plus long règne d'Europe" },
              { q: "Quel édit de 1685 révoque la liberté de culte des protestants ?", r: "L'édit de Fontainebleau", hint: "Annule l'édit de Nantes" },
              { q: "Qui sont les deux directeurs de l'Encyclopédie (1751) ?", r: "Diderot et d'Alembert", hint: "28 volumes au total" },
              { q: "En quelle année Louis XVI a-t-il été guillotiné ?", r: "1793 (21 janvier)", hint: "Place de la Révolution, actuelle place de la Concorde" }
            ]
          },
          // --- Fiche 4 : Révolution → XXe siècle (1789–1968) ---
          {
            id: "w1d1t8", type: "fiche",
            title: "Révolution → XXe siècle (1789–1968)",
            items: [
              { fact: "14 juillet 1789 — Prise de la Bastille", detail: "Symbole du début de la Révolution. La Bastille ne contenait que 7 prisonniers ce jour-là. Le 14 juillet devient fête nationale en 1880." },
              { fact: "1804 — Napoléon sacré empereur", detail: "Se couronne lui-même à Notre-Dame de Paris le 2 décembre, devant le pape Pie VII. Instaure le Code civil (encore en vigueur). Défait à Waterloo en 1815." },
              { fact: "1870 — Chute du Second Empire, IIIe République", detail: "Napoléon III capitule à Sedan face à la Prusse. La IIIe République dure jusqu'en 1940 — c'est la plus longue république française (70 ans)." },
              { fact: "1914–1918 — Première Guerre mondiale", detail: "1,4 million de morts français. Batailles clés : Verdun (1916, 300 jours), la Marne. Armistice le 11 novembre 1918. Traité de Versailles (1919)." },
              { fact: "1958 — Ve République, De Gaulle président", detail: "Crise algérienne : De Gaulle revient au pouvoir, fait adopter une nouvelle constitution renforçant le pouvoir présidentiel. Élu président le 21 décembre 1958." }
            ],
            flashcards: [
              { q: "Combien de prisonniers contenait la Bastille le 14 juillet 1789 ?", r: "7" },
              { q: "En quelle année le 14 juillet devient-il fête nationale ?", r: "1880" },
              { q: "Où Napoléon se couronne-t-il empereur ?", r: "Notre-Dame de Paris" },
              { q: "Quel jour Napoléon est-il sacré en 1804 ?", r: "2 décembre" },
              { q: "Quel pape assiste au sacre de Napoléon ?", r: "Pie VII" },
              { q: "En quelle année Napoléon est-il défait à Waterloo ?", r: "1815" },
              { q: "À quelle bataille Napoléon III capitule-t-il en 1870 ?", r: "Sedan" },
              { q: "Combien d'années dure la IIIe République ?", r: "70 ans" },
              { q: "Combien de morts français lors de la Première Guerre mondiale ?", r: "1,4 million" },
              { q: "Combien de jours dure la bataille de Verdun en 1916 ?", r: "300 jours" },
              { q: "Quel traité met fin à la Première Guerre mondiale ?", r: "Traité de Versailles" },
              { q: "Quelle crise ramène De Gaulle au pouvoir en 1958 ?", r: "La crise algérienne" },
              { q: "Quel jour De Gaulle est-il élu président en 1958 ?", r: "21 décembre" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d1t9", type: "quiz",
            title: "Mini-quiz : Révolution → XXe siècle",
            questions: [
              { q: "Combien de prisonniers se trouvaient dans la Bastille le 14 juillet 1789 ?", r: "7", hint: "Beaucoup moins que ce qu'on imagine" },
              { q: "En quelle année Napoléon a-t-il été défait à Waterloo ?", r: "1815", hint: "Actuelle Belgique" },
              { q: "Quelle bataille de 1916 a duré environ 300 jours ?", r: "La bataille de Verdun", hint: "Symbole de la guerre des tranchées" },
              { q: "Qui a fondé la Ve République en 1958 ?", r: "Charles de Gaulle", hint: "Rappelé au pouvoir lors de la crise algérienne" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d1t10", type: "quiz",
            title: "Quiz final : Histoire de France",
            questions: [
              { q: "Quel roi franc a été baptisé à Reims vers 496 ?", r: "Clovis" },
              { q: "Quelle guerre oppose la France et l'Angleterre de 1337 à 1453 ?", r: "La Guerre de Cent Ans" },
              { q: "Quelle ordonnance impose le français dans les actes officiels en 1539 ?", r: "L'ordonnance de Villers-Cotterêts" },
              { q: "Quel massacre de protestants a eu lieu le 24 août 1572 ?", r: "Le massacre de la Saint-Barthélemy" },
              { q: "Quel château Louis XIV a-t-il fait construire ?", r: "Le château de Versailles" },
              { q: "Quel traité de 1763 fait perdre le Canada à la France ?", r: "Le traité de Paris" },
              { q: "Quel jour Napoléon s'est-il couronné empereur en 1804 ?", r: "Le 2 décembre", hint: "À Notre-Dame de Paris" },
              { q: "Quel régime politique dure de 1870 à 1940 en France ?", r: "La IIIe République" },
              { q: "En quelle année le traité de Versailles met-il fin à la Première Guerre mondiale ?", r: "1919" },
              { q: "Quelle phrase célèbre attribue-t-on à Henri IV pour justifier sa conversion ?", r: "Paris vaut bien une messe" },
              { q: "Qui a été régente après l'assassinat d'Henri IV en 1610 ?", r: "Marie de Médicis" },
              { q: "Quel événement de mai 1968 a marqué la France ?", r: "Mai 68 — révolte étudiante et grève générale" }
            ]
          }
        ]
      },

      // ===================== JOUR 2 : GÉOGRAPHIE MONDE =====================
      {
        day: 2, label: "Mardi", theme: "Géographie monde", icon: "🌍",
        objectif: "Connaître les capitales pièges, fleuves et montagnes",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d2t0", type: "lecture",
            title: "Quiz Culture Générale — Capitales du Monde",
            subtitle: "Vidéo YouTube — 170 pays en français, testez vos connaissances",
            url: "https://www.youtube.com/watch?v=MUJc2cpSEvo",
            duration: "15 min"
          },
          // --- Fiche 1 : Capitales pièges d'Europe ---
          {
            id: "w1d2t1", type: "fiche",
            title: "Capitales pièges d'Europe",
            items: [
              { fact: "Suisse → Berne (pas Zurich ni Genève)", detail: "Zurich est la plus grande ville et Genève le siège de l'ONU, mais la capitale fédérale est Berne depuis 1848." },
              { fact: "Turquie → Ankara (pas Istanbul)", detail: "Istanbul (ex-Constantinople) est la plus grande ville, mais Atatürk a déplacé la capitale à Ankara en 1923 pour marquer la rupture avec l'Empire ottoman." },
              { fact: "Monténégro → Podgorica", detail: "Petit pays des Balkans indépendant depuis 2006. Anciennement Titograd sous la Yougoslavie. À ne pas confondre avec le Kosovo (Pristina)." },
              { fact: "Lituanie → Vilnius / Lettonie → Riga / Estonie → Tallinn", detail: "Les trois pays baltes du nord au sud : Estonie-Tallinn, Lettonie-Riga, Lituanie-Vilnius. Moyen mnémotechnique : l'ordre alphabétique inverse (E-L-L) du nord au sud." },
              { fact: "Slovaquie → Bratislava / Slovénie → Ljubljana", detail: "Deux pays souvent confondus. Bratislava est à 60 km de Vienne sur le Danube. Ljubljana est en ex-Yougoslavie, au nord de la Croatie." }
            ],
            flashcards: [
              { q: "Depuis quelle année Berne est-elle la capitale fédérale suisse ?", r: "1848" },
              { q: "Quelle ville suisse est le siège de l'ONU ?", r: "Genève" },
              { q: "En quelle année Atatürk déplace-t-il la capitale turque à Ankara ?", r: "1923" },
              { q: "Depuis quelle année le Monténégro est-il indépendant ?", r: "2006" },
              { q: "Comment s'appelait Podgorica sous la Yougoslavie ?", r: "Titograd" },
              { q: "Quelle est la capitale de l'Estonie ?", r: "Tallinn" },
              { q: "Quelle est la capitale de la Lettonie ?", r: "Riga" },
              { q: "Quelle est la capitale de la Lituanie ?", r: "Vilnius" },
              { q: "Sur quel fleuve se trouve Bratislava ?", r: "Le Danube" },
              { q: "À combien de kilomètres de Vienne se trouve Bratislava ?", r: "60 km" },
              { q: "Quelle est la capitale de la Slovénie ?", r: "Ljubljana" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d2t2", type: "quiz",
            title: "Mini-quiz : Capitales Europe",
            questions: [
              { q: "Quelle est la capitale de la Suisse ?", r: "Berne", hint: "Ni Zurich ni Genève" },
              { q: "Quelle est la capitale de la Turquie ?", r: "Ankara", hint: "Déplacée par Atatürk en 1923" },
              { q: "Quelle est la capitale de la Lettonie ?", r: "Riga", hint: "Pays balte du milieu" },
              { q: "Quelle est la capitale de la Slovénie ?", r: "Ljubljana", hint: "Ex-Yougoslavie, au nord de la Croatie" }
            ]
          },
          // --- Fiche 2 : Capitales Afrique & Moyen-Orient ---
          {
            id: "w1d2t3", type: "fiche",
            title: "Capitales Afrique & Moyen-Orient",
            items: [
              { fact: "Maroc → Rabat (pas Casablanca ni Marrakech)", detail: "Casablanca est la capitale économique, Marrakech la touristique. Rabat est la capitale politique depuis le protectorat français (1912)." },
              { fact: "Nigéria → Abuja (pas Lagos)", detail: "Lagos est la mégapole de 15 millions d'habitants, mais la capitale a été déplacée à Abuja en 1991, au centre du pays, pour des raisons ethniques et géographiques." },
              { fact: "Afrique du Sud → Pretoria (exécutif), Le Cap (législatif), Bloemfontein (judiciaire)", detail: "Seul pays au monde avec trois capitales. Piège classique : Johannesburg n'est capitale de rien malgré ses 5 millions d'habitants." },
              { fact: "Éthiopie → Addis-Abeba", detail: "Signifie « nouvelle fleur » en amharique. Siège de l'Union africaine. Située à 2 400 m d'altitude, c'est l'une des capitales les plus hautes d'Afrique." },
              { fact: "Israël → Jérusalem (proclamée) / Tel-Aviv (ambassades)", detail: "Jérusalem est la capitale proclamée par Israël, mais la plupart des ambassades sont à Tel-Aviv. Statut contesté internationalement." }
            ],
            flashcards: [
              { q: "Depuis quand Rabat est-elle capitale du Maroc ?", r: "1912" },
              { q: "Quelle est la capitale économique du Maroc ?", r: "Casablanca" },
              { q: "En quelle année la capitale du Nigéria a-t-elle été déplacée à Abuja ?", r: "1991" },
              { q: "Combien d'habitants compte Lagos ?", r: "15 millions" },
              { q: "Quelle est la capitale judiciaire de l'Afrique du Sud ?", r: "Bloemfontein" },
              { q: "Quelle est la capitale législative de l'Afrique du Sud ?", r: "Le Cap" },
              { q: "Que signifie Addis-Abeba en amharique ?", r: "Nouvelle fleur" },
              { q: "Quelle organisation internationale a son siège à Addis-Abeba ?", r: "L'Union africaine" },
              { q: "À quelle altitude se trouve Addis-Abeba ?", r: "2 400 m" },
              { q: "Dans quelle ville se trouvent la plupart des ambassades en Israël ?", r: "Tel-Aviv" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d2t4", type: "quiz",
            title: "Mini-quiz : Capitales Afrique & Moyen-Orient",
            questions: [
              { q: "Quelle est la capitale du Nigéria ?", r: "Abuja", hint: "Pas Lagos — déplacée en 1991" },
              { q: "Quel pays a trois capitales : Pretoria, Le Cap et Bloemfontein ?", r: "L'Afrique du Sud" },
              { q: "Quelle est la capitale du Maroc ?", r: "Rabat", hint: "Ni Casablanca ni Marrakech" },
              { q: "Que signifie Addis-Abeba en amharique ?", r: "Nouvelle fleur", hint: "Capitale de l'Éthiopie" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d2t5", type: "lecture",
            title: "QUIZ — Les Capitales du Monde (80 Pays)",
            subtitle: "Vidéo YouTube — Testez vos connaissances sur 80 capitales",
            url: "https://www.youtube.com/watch?v=9AWctHsuLvM",
            duration: "15 min"
          },
          // --- Fiche 3 : Capitales Asie & Océanie ---
          {
            id: "w1d2t6", type: "fiche",
            title: "Capitales Asie & Océanie",
            items: [
              { fact: "Australie → Canberra (pas Sydney ni Melbourne)", detail: "Canberra a été construite exprès comme capitale en 1913 pour mettre fin à la rivalité entre Sydney et Melbourne. Ville planifiée par l'architecte américain Walter Burley Griffin." },
              { fact: "Myanmar (Birmanie) → Naypyidaw (pas Rangoun)", detail: "Capitale déplacée en 2006 dans une ville fantôme construite en secret par la junte militaire. Rangoun (Yangon) reste la plus grande ville." },
              { fact: "Sri Lanka → Sri Jayawardenapura Kotte (pas Colombo)", detail: "Plus longue capitale du monde à écrire. Colombo est la capitale commerciale, mais le parlement siège à Kotte depuis 1982." },
              { fact: "Nouvelle-Zélande → Wellington (pas Auckland)", detail: "Auckland est la plus grande ville (1,7 million d'habitants), mais Wellington est la capitale depuis 1865, située à la pointe sud de l'île du Nord." },
              { fact: "Pakistan → Islamabad (pas Karachi)", detail: "Karachi est la mégapole (15 millions), mais Islamabad a été construite comme capitale en 1960 pour remplacer Karachi, jugée trop excentrée." }
            ],
            flashcards: [
              { q: "En quelle année Canberra a-t-elle été construite comme capitale ?", r: "1913" },
              { q: "Quel architecte a conçu la ville de Canberra ?", r: "Walter Burley Griffin" },
              { q: "En quelle année la capitale du Myanmar a-t-elle été déplacée à Naypyidaw ?", r: "2006" },
              { q: "Quel est l'ancien nom de Rangoun ?", r: "Yangon" },
              { q: "Quelle est la plus longue capitale du monde à écrire ?", r: "Sri Jayawardenapura Kotte" },
              { q: "Depuis quelle année le parlement du Sri Lanka siège-t-il à Kotte ?", r: "1982" },
              { q: "Depuis quelle année Wellington est-elle capitale de Nouvelle-Zélande ?", r: "1865" },
              { q: "Combien d'habitants compte Auckland ?", r: "1,7 million" },
              { q: "En quelle année Islamabad a-t-elle été construite comme capitale ?", r: "1960" },
              { q: "Combien d'habitants compte Karachi ?", r: "15 millions" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d2t7", type: "quiz",
            title: "Mini-quiz : Capitales Asie & Océanie",
            questions: [
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra", hint: "Construite exprès en 1913" },
              { q: "Quelle est la capitale du Myanmar (Birmanie) ?", r: "Naypyidaw", hint: "Déplacée en 2006, ville fantôme" },
              { q: "Quelle est la capitale de la Nouvelle-Zélande ?", r: "Wellington", hint: "Pointe sud de l'île du Nord" },
              { q: "Quelle est la capitale du Pakistan ?", r: "Islamabad", hint: "Pas Karachi — construite en 1960" }
            ]
          },
          // --- Fiche 4 : Capitales Amériques + fleuves & montagnes ---
          {
            id: "w1d2t8", type: "fiche",
            title: "Capitales Amériques + fleuves & montagnes",
            items: [
              { fact: "Canada → Ottawa (pas Toronto ni Montréal)", detail: "Choisie par la reine Victoria en 1857 comme compromis entre anglophones (Toronto) et francophones (Montréal/Québec). Située en Ontario, à la frontière du Québec." },
              { fact: "Brésil → Brasília (pas Rio ni São Paulo)", detail: "Capitale depuis 1960, construite en 3 ans par l'architecte Niemeyer et l'urbaniste Lucio Costa. Vue du ciel, la ville a la forme d'un avion." },
              { fact: "USA → Washington D.C. (pas New York)", detail: "District of Columbia, créé en 1790 comme capitale fédérale neutre, n'appartenant à aucun État. Nommée d'après George Washington." },
              { fact: "Nil : 6 650 km — plus long fleuve du monde", detail: "Traverse 11 pays d'Afrique. Source au lac Victoria (Ouganda/Tanzanie). Le Nil Blanc et le Nil Bleu confluent à Khartoum (Soudan)." },
              { fact: "Everest : 8 849 m — plus haut sommet du monde", detail: "Frontière Népal/Tibet. Première ascension par Edmund Hillary et Tensing Norgay le 29 mai 1953. En népalais : Sagarmatha (« front du ciel »)." }
            ],
            flashcards: [
              { q: "Qui a choisi Ottawa comme capitale du Canada ?", r: "La reine Victoria" },
              { q: "En quelle année Ottawa est-elle devenue capitale du Canada ?", r: "1857" },
              { q: "Quel architecte a conçu Brasília ?", r: "Oscar Niemeyer" },
              { q: "Quel urbaniste a planifié Brasília ?", r: "Lucio Costa" },
              { q: "Quelle forme a Brasília vue du ciel ?", r: "Un avion" },
              { q: "En quelle année Washington D.C. a-t-elle été créée ?", r: "1790" },
              { q: "Combien de pays le Nil traverse-t-il ?", r: "11 pays" },
              { q: "Où le Nil Blanc et le Nil Bleu confluent-ils ?", r: "Khartoum (Soudan)" },
              { q: "Qui a réalisé la première ascension de l'Everest ?", r: "Hillary et Tensing Norgay" },
              { q: "Quel jour l'Everest a-t-il été gravi pour la première fois ?", r: "29 mai 1953" },
              { q: "Quel est le nom népalais de l'Everest ?", r: "Sagarmatha" },
              { q: "Entre quels territoires se situe l'Everest ?", r: "Népal et Tibet" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d2t9", type: "quiz",
            title: "Mini-quiz : Amériques + fleuves & montagnes",
            questions: [
              { q: "Quelle est la capitale du Canada ?", r: "Ottawa", hint: "Compromis entre anglophones et francophones" },
              { q: "Quel architecte a conçu Brasília ?", r: "Oscar Niemeyer", hint: "Ville en forme d'avion vue du ciel" },
              { q: "Quel est le plus long fleuve du monde et quelle est sa longueur ?", r: "Le Nil, 6 650 km", hint: "Il traverse l'Égypte" },
              { q: "Qui a réalisé la première ascension de l'Everest et en quelle année ?", r: "Edmund Hillary et Tensing Norgay, en 1953" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d2t10", type: "quiz",
            title: "Quiz final : Géographie monde",
            questions: [
              { q: "Quelle est la capitale de la Suisse ?", r: "Berne" },
              { q: "Quelle est la capitale du Nigéria ?", r: "Abuja" },
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Quelle est la capitale du Brésil ?", r: "Brasília" },
              { q: "Quel pays a trois capitales ?", r: "L'Afrique du Sud" },
              { q: "Quel est le plus haut sommet du monde et sa hauteur ?", r: "L'Everest, 8 849 m" },
              { q: "Où le Nil Blanc et le Nil Bleu confluent-ils ?", r: "À Khartoum (Soudan)" },
              { q: "Quelle est la capitale de la Slovénie ?", r: "Ljubljana" },
              { q: "Pourquoi la capitale de la Turquie est-elle Ankara et non Istanbul ?", r: "Atatürk l'a déplacée en 1923 pour rompre avec l'Empire ottoman" },
              { q: "Quelle est la capitale du Myanmar ?", r: "Naypyidaw" },
              { q: "Quelle est la capitale du Sri Lanka ?", r: "Sri Jayawardenapura Kotte" },
              { q: "Quel fleuve traverse le plus de capitales européennes ?", r: "Le Danube (Vienne, Bratislava, Budapest, Belgrade)" }
            ]
          }
        ]
      },

      // ===================== JOUR 3 : SCIENCES & NATURE =====================
      {
        day: 3, label: "Mercredi", theme: "Sciences & Nature", icon: "🔬",
        objectif: "Grandes découvertes, inventeurs, corps humain, espace",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d3t0", type: "lecture",
            title: "Les plus grandes découvertes scientifiques",
            subtitle: "Vidéo YouTube — Les grandes dates de l'histoire des sciences",
            url: "https://www.youtube.com/watch?v=ScJW3gVSxSk",
            duration: "15 min"
          },
          // --- Fiche 1 : Physique & astronomie ---
          {
            id: "w1d3t1", type: "fiche",
            title: "Physique & astronomie",
            items: [
              { fact: "Newton (1687) — Lois de la gravitation universelle", detail: "Principia Mathematica : F = G×m₁×m₂/d². Légende de la pomme. Il découvre aussi la décomposition de la lumière blanche par un prisme et co-invente le calcul infinitésimal." },
              { fact: "Einstein (1905) — Relativité restreinte, E=mc²", detail: "L'énergie égale la masse multipliée par la vitesse de la lumière au carré. Publie 4 articles révolutionnaires en 1905 (annus mirabilis). Nobel 1921 pour l'effet photoélectrique, pas la relativité." },
              { fact: "Vitesse de la lumière : 299 792 km/s (≈ 300 000 km/s)", detail: "Notée c. Mesurée pour la première fois par Rømer en 1676 grâce aux éclipses des lunes de Jupiter. C'est la vitesse maximale dans l'univers selon Einstein." },
              { fact: "Galilée (1610) — Confirme l'héliocentrisme de Copernic", detail: "Observe les lunes de Jupiter avec sa lunette astronomique. Condamné par l'Inquisition en 1633. « Et pourtant, elle tourne » (apocryphe). Copernic avait publié sa théorie en 1543." },
              { fact: "Planètes du système solaire : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune", detail: "Moyen mnémotechnique : « Me Voici Toute Mignonne, Je Suis Une Nébuleuse ». Pluton reclassée en planète naine en 2006. Jupiter est la plus grande, Mercure la plus petite." }
            ],
            flashcards: [
              { q: "Comment s'appelle l'ouvrage majeur de Newton (1687) ?", r: "Principia Mathematica" },
              { q: "Que découvre Newton avec un prisme ?", r: "La décomposition de la lumière" },
              { q: "Combien d'articles Einstein publie-t-il en 1905 ?", r: "4" },
              { q: "Pour quelle découverte Einstein reçoit-il le Nobel en 1921 ?", r: "L'effet photoélectrique" },
              { q: "Qui mesure la vitesse de la lumière pour la première fois en 1676 ?", r: "Rømer" },
              { q: "Comment Rømer mesure-t-il la vitesse de la lumière ?", r: "Éclipses des lunes de Jupiter" },
              { q: "En quelle année Galilée est-il condamné par l'Inquisition ?", r: "1633" },
              { q: "En quelle année Copernic publie-t-il sa théorie héliocentrique ?", r: "1543" },
              { q: "En quelle année Pluton est-elle reclassée en planète naine ?", r: "2006" },
              { q: "Quelle est la plus grande planète du système solaire ?", r: "Jupiter" },
              { q: "Quelle est la plus petite planète du système solaire ?", r: "Mercure" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d3t2", type: "quiz",
            title: "Mini-quiz : Physique & astronomie",
            questions: [
              { q: "Quelle est la formule de la relativité restreinte d'Einstein ?", r: "E=mc²" },
              { q: "Pour quelle découverte Einstein a-t-il reçu le Nobel en 1921 ?", r: "L'effet photoélectrique", hint: "Pas pour la relativité" },
              { q: "Quelle est la vitesse de la lumière ?", r: "Environ 300 000 km/s (299 792 km/s)" },
              { q: "Qui a confirmé l'héliocentrisme en 1610 grâce à sa lunette ?", r: "Galilée", hint: "Il a observé les lunes de Jupiter" }
            ]
          },
          // --- Fiche 2 : Chimie & biologie ---
          {
            id: "w1d3t3", type: "fiche",
            title: "Chimie & biologie",
            items: [
              { fact: "Lavoisier (XVIIIe) — Père de la chimie moderne", detail: "Identifie l'oxygène et l'hydrogène, énonce la loi de conservation de la masse : « Rien ne se perd, rien ne se crée, tout se transforme. » Guillotiné en 1794." },
              { fact: "Mendeleïev (1869) — Tableau périodique des éléments", detail: "Classe les 63 éléments connus par masse atomique et prédit l'existence d'éléments inconnus. Aujourd'hui : 118 éléments. L'hydrogène (H) est le premier, l'oganesson (Og) le dernier." },
              { fact: "Darwin (1859) — L'Origine des espèces", detail: "Théorie de l'évolution par sélection naturelle. Voyage sur le HMS Beagle aux Galápagos (1831-1836). Les pinsons de Darwin illustrent l'adaptation." },
              { fact: "Watson & Crick (1953) — Structure en double hélice de l'ADN", detail: "Découverte au laboratoire Cavendish de Cambridge grâce aux clichés de diffraction de Rosalind Franklin (photo 51). Nobel de médecine en 1962." },
              { fact: "Symboles chimiques courants : H (hydrogène), O (oxygène), Fe (fer), Au (or), Na (sodium)", detail: "Fe vient du latin Ferrum, Au de Aurum, Na de Natrium. L'or (Au) a le numéro atomique 79. Le fer (Fe) 26. Le sodium (Na) 11." }
            ],
            flashcards: [
              { q: "Comment Lavoisier meurt-il en 1794 ?", r: "Guillotiné" },
              { q: "Quels gaz Lavoisier identifie-t-il ?", r: "Oxygène et hydrogène" },
              { q: "Combien d'éléments Mendeleïev classe-t-il en 1869 ?", r: "63" },
              { q: "Combien d'éléments compte le tableau périodique actuel ?", r: "118" },
              { q: "Sur quel navire Darwin voyage-t-il aux Galápagos ?", r: "HMS Beagle" },
              { q: "En quelle année Darwin publie-t-il L'Origine des espèces ?", r: "1859" },
              { q: "Quel cliché de Rosalind Franklin est clé pour la découverte de l'ADN ?", r: "Photo 51" },
              { q: "Dans quel laboratoire Watson et Crick découvrent-ils l'ADN ?", r: "Laboratoire Cavendish" },
              { q: "Quel est le numéro atomique de l'or ?", r: "79" },
              { q: "De quel mot latin vient le symbole Na (sodium) ?", r: "Natrium" },
              { q: "Quel est le numéro atomique du fer ?", r: "26" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d3t4", type: "quiz",
            title: "Mini-quiz : Chimie & biologie",
            questions: [
              { q: "Quelle phrase célèbre de Lavoisier résume la conservation de la masse ?", r: "Rien ne se perd, rien ne se crée, tout se transforme" },
              { q: "Combien d'éléments compte le tableau périodique actuel ?", r: "118", hint: "Créé par Mendeleïev en 1869" },
              { q: "Quel est le symbole chimique du fer ?", r: "Fe", hint: "Du latin Ferrum" },
              { q: "Quelle chercheuse a réalisé la photo 51, clé de la structure de l'ADN ?", r: "Rosalind Franklin", hint: "Watson et Crick ont reçu le Nobel" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d3t5", type: "lecture",
            title: "77 Découvertes qui ont bouleversé le monde",
            subtitle: "Vidéo YouTube — Les grandes avancées scientifiques — Doc Seven (34 min)",
            url: "https://www.youtube.com/watch?v=9IpRIlM1X58",
            duration: "15 min"
          },
          // --- Fiche 3 : Médecine & corps humain ---
          {
            id: "w1d3t6", type: "fiche",
            title: "Médecine & corps humain",
            items: [
              { fact: "Pasteur (1885) — Vaccin contre la rage", detail: "Aussi inventeur de la pasteurisation (1863). Réfute la génération spontanée. Premier vacciné contre la rage : Joseph Meister, un garçon de 9 ans mordu par un chien." },
              { fact: "Fleming (1928) — Découverte de la pénicilline", detail: "Découverte accidentelle : une moisissure (Penicillium notatum) tue les bactéries dans une boîte de Petri oubliée. Nobel 1945. Premier antibiotique, il sauvera des millions de vies." },
              { fact: "Corps humain : 206 os, ~600 muscles, 5 litres de sang", detail: "Le plus petit os : l'étrier dans l'oreille (3 mm). Le plus grand : le fémur. Le cœur bat environ 100 000 fois par jour, soit 3 milliards de fois dans une vie." },
              { fact: "Le pancréas produit l'insuline", detail: "Insuline découverte par Banting et Best en 1921 (Nobel 1923). Le diabète de type 1 est dû à une destruction des cellules bêta du pancréas. Avant l'insuline, le diabète était mortel." },
              { fact: "46 chromosomes (23 paires) dans chaque cellule humaine", detail: "22 paires d'autosomes + 1 paire de chromosomes sexuels (XX femme, XY homme). La trisomie 21 est causée par un chromosome 21 surnuméraire." }
            ],
            flashcards: [
              { q: "Qu'a inventé Pasteur en 1863 ?", r: "La pasteurisation" },
              { q: "Comment s'appelle le premier vacciné contre la rage ?", r: "Joseph Meister" },
              { q: "Quel âge avait Joseph Meister lors de la vaccination ?", r: "9 ans" },
              { q: "Quelle moisissure est à l'origine de la pénicilline ?", r: "Penicillium notatum" },
              { q: "En quelle année Fleming reçoit-il le Nobel ?", r: "1945" },
              { q: "Quel est le plus petit os du corps humain ?", r: "L'étrier" },
              { q: "Combien de fois le cœur bat-il par jour environ ?", r: "100 000 fois" },
              { q: "Qui découvre l'insuline en 1921 ?", r: "Banting et Best" },
              { q: "Quelles cellules du pancréas sont détruites dans le diabète de type 1 ?", r: "Cellules bêta" },
              { q: "Combien de paires d'autosomes chez l'humain ?", r: "22 paires" },
              { q: "Quelle anomalie chromosomique cause la trisomie 21 ?", r: "Chromosome 21 surnuméraire" },
              { q: "Quels chromosomes sexuels définissent une femme ?", r: "XX" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d3t7", type: "quiz",
            title: "Mini-quiz : Médecine & corps humain",
            questions: [
              { q: "Qui a été le premier enfant vacciné contre la rage par Pasteur ?", r: "Joseph Meister", hint: "En 1885, mordu par un chien enragé" },
              { q: "Combien d'os compte le squelette humain adulte ?", r: "206" },
              { q: "Quel organe produit l'insuline ?", r: "Le pancréas", hint: "Découverte par Banting et Best en 1921" },
              { q: "Combien de chromosomes dans une cellule humaine ?", r: "46 (23 paires)" }
            ]
          },
          // --- Fiche 4 : Inventions & découvertes ---
          {
            id: "w1d3t8", type: "fiche",
            title: "Inventions & découvertes",
            items: [
              { fact: "Marie Curie (1898) — Découverte du radium et du polonium", detail: "Première femme Nobel (physique 1903 avec Pierre Curie, chimie 1911 seule). Seule personne à avoir reçu deux Nobel dans deux sciences différentes. Meurt en 1934 d'une anémie aplasique due aux radiations." },
              { fact: "Gutenberg (v. 1450) — Imprimerie à caractères mobiles", detail: "Premier livre imprimé : la Bible de Gutenberg (180 exemplaires). Révolutionne la diffusion du savoir en Europe. L'imprimerie existait en Chine depuis le XIe siècle." },
              { fact: "Frères Lumière (1895) — Première projection cinématographique", detail: "28 décembre 1895 au Grand Café à Paris, boulevard des Capucines. Premier film : La Sortie de l'usine Lumière à Lyon. 46 secondes." },
              { fact: "Graham Bell (1876) — Brevet du téléphone", detail: "Conteste avec Elisha Gray qui dépose son brevet le même jour. Antonio Meucci est reconnu en 2002 comme le véritable inventeur par le Congrès américain." },
              { fact: "Neil Armstrong (20 juillet 1969) — Premier homme sur la Lune", detail: "Mission Apollo 11. Buzz Aldrin le rejoint sur la Lune, Michael Collins reste en orbite. Armstrong prononce : « Un petit pas pour l'homme, un bond de géant pour l'humanité. »" }
            ],
            flashcards: [
              { q: "Combien de Nobel Marie Curie a-t-elle reçus ?", r: "Deux" },
              { q: "En quelle année Marie Curie reçoit-elle le Nobel de chimie ?", r: "1911" },
              { q: "De quoi meurt Marie Curie en 1934 ?", r: "Anémie aplasique" },
              { q: "Combien d'exemplaires de la Bible Gutenberg a-t-on imprimés ?", r: "180" },
              { q: "Quel jour a lieu la première projection des frères Lumière ?", r: "28 décembre 1895" },
              { q: "Où a lieu la première projection cinématographique ?", r: "Grand Café, boulevard des Capucines" },
              { q: "Combien de temps dure le premier film des Lumière ?", r: "46 secondes" },
              { q: "Qui est reconnu en 2002 comme véritable inventeur du téléphone ?", r: "Antonio Meucci" },
              { q: "En quelle année Graham Bell dépose-t-il le brevet du téléphone ?", r: "1876" },
              { q: "Quel astronaute d'Apollo 11 reste en orbite lunaire ?", r: "Michael Collins" },
              { q: "Quel astronaute rejoint Armstrong sur la Lune ?", r: "Buzz Aldrin" },
              { q: "Quelle est la mission de la première marche lunaire ?", r: "Apollo 11" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d3t9", type: "quiz",
            title: "Mini-quiz : Inventions & découvertes",
            questions: [
              { q: "Combien de prix Nobel Marie Curie a-t-elle reçus et dans quelles disciplines ?", r: "Deux : physique (1903) et chimie (1911)" },
              { q: "En quelle année les frères Lumière ont-ils projeté le premier film ?", r: "1895", hint: "Au Grand Café, boulevard des Capucines à Paris" },
              { q: "Quel astronaute a posé le premier pas sur la Lune ?", r: "Neil Armstrong", hint: "20 juillet 1969, mission Apollo 11" },
              { q: "Vers quelle année Gutenberg a-t-il inventé l'imprimerie à caractères mobiles ?", r: "Vers 1450", hint: "Premier livre imprimé : la Bible" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d3t10", type: "quiz",
            title: "Quiz final : Sciences & Nature",
            questions: [
              { q: "Quelle est la formule de Newton pour la gravitation universelle ?", r: "F = G×m₁×m₂/d²" },
              { q: "Quel gaz les plantes absorbent-elles pendant la photosynthèse ?", r: "Le dioxyde de carbone (CO₂)" },
              { q: "Quel est le plus petit os du corps humain ?", r: "L'étrier (dans l'oreille)", hint: "Environ 3 mm" },
              { q: "Qui a créé le tableau périodique des éléments en 1869 ?", r: "Dmitri Mendeleïev" },
              { q: "Quelle planète est la plus grande du système solaire ?", r: "Jupiter" },
              { q: "Quel est le symbole chimique de l'or ?", r: "Au", hint: "Du latin Aurum" },
              { q: "Qui a découvert la pénicilline en 1928 ?", r: "Alexander Fleming" },
              { q: "Quel vaisseau a permis à Darwin de voyager aux Galápagos ?", r: "Le HMS Beagle" },
              { q: "En quelle année Pluton a-t-elle été reclassée en planète naine ?", r: "2006" },
              { q: "Quel organe filtre le sang dans le corps humain ?", r: "Les reins" },
              { q: "Qui a inventé la pasteurisation ?", r: "Louis Pasteur", hint: "En 1863" },
              { q: "Qui était le troisième astronaute d'Apollo 11, resté en orbite ?", r: "Michael Collins" }
            ]
          }
        ]
      },

      // ===================== JOUR 4 : LITTÉRATURE FRANÇAISE =====================
      {
        day: 4, label: "Jeudi", theme: "Littérature française", icon: "📚",
        objectif: "Grands auteurs, œuvres majeures et prix littéraires",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d4t0", type: "lecture",
            title: "Histoire de la Littérature Française",
            subtitle: "Vidéo YouTube — Tour d'horizon des mouvements littéraires",
            url: "https://www.youtube.com/watch?v=UmC59d_CXH4",
            duration: "15 min"
          },
          // --- Fiche 1 : XVIIe–XVIIIe : classicisme & Lumières ---
          {
            id: "w1d4t1", type: "fiche",
            title: "XVIIe–XVIIIe : classicisme & Lumières",
            items: [
              { fact: "Molière (1622–1673) — Tartuffe, Le Misanthrope, L'Avare", detail: "De son vrai nom Jean-Baptiste Poquelin. Comédien et dramaturge favori de Louis XIV. Meurt sur scène en jouant Le Malade imaginaire. Père de la comédie française." },
              { fact: "Racine (1639–1699) — Phèdre, Andromaque, Britannicus", detail: "Maître de la tragédie classique en alexandrins. Rival de Corneille. Phèdre (1677) est considérée comme le sommet de la tragédie française. Thème : passions destructrices." },
              { fact: "La Fontaine (1621–1695) — Fables (12 livres, 243 fables)", detail: "S'inspire d'Ésope et Phèdre. « La Cigale et la Fourmi », « Le Corbeau et le Renard ». Morale souvent satirique envers les puissants. Élu à l'Académie française en 1684." },
              { fact: "Voltaire (1694–1778) — Candide (1759), Zadig", detail: "Philosophe des Lumières. Candide critique l'optimisme de Leibniz (« Tout est pour le mieux dans le meilleur des mondes »). Défenseur de la tolérance (affaire Calas). Exilé à Ferney." },
              { fact: "Rousseau (1712–1778) — Du Contrat social, Les Confessions", detail: "« L'homme naît bon, c'est la société qui le corrompt. » Précurseur du romantisme et de la démocratie moderne. Enterré au Panthéon face à Voltaire, son rival intellectuel." }
            ],
            flashcards: [
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin" },
              { q: "En jouant quelle pièce Molière meurt-il ?", r: "Le Malade imaginaire" },
              { q: "Quel roi est le protecteur de Molière ?", r: "Louis XIV" },
              { q: "Quel est le thème principal des tragédies de Racine ?", r: "Les passions destructrices" },
              { q: "Combien de fables La Fontaine a-t-il écrites ?", r: "243" },
              { q: "En quelle année La Fontaine est-il élu à l'Académie française ?", r: "1684" },
              { q: "Quel philosophe Candide de Voltaire critique-t-il ?", r: "Leibniz" },
              { q: "Où Voltaire vit-il en exil ?", r: "Ferney" },
              { q: "Quelle affaire judiciaire Voltaire défend-il ?", r: "L'affaire Calas" },
              { q: "Où Rousseau est-il enterré ?", r: "Au Panthéon" },
              { q: "Face à quel rival Rousseau est-il enterré au Panthéon ?", r: "Voltaire" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d4t2", type: "quiz",
            title: "Mini-quiz : XVIIe–XVIIIe",
            questions: [
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin", hint: "Mort en jouant Le Malade imaginaire" },
              { q: "Quelle tragédie de Racine est considérée comme le sommet du genre ?", r: "Phèdre (1677)" },
              { q: "Quel conte philosophique de Voltaire critique l'optimisme de Leibniz ?", r: "Candide" },
              { q: "Quel philosophe a écrit « L'homme naît bon, c'est la société qui le corrompt » ?", r: "Jean-Jacques Rousseau" }
            ]
          },
          // --- Fiche 2 : XIXe : romantisme & réalisme ---
          {
            id: "w1d4t3", type: "fiche",
            title: "XIXe : romantisme & réalisme",
            items: [
              { fact: "Hugo (1802–1885) — Les Misérables, Notre-Dame de Paris", detail: "Chef de file du romantisme. Aussi poète (Les Contemplations) et homme politique (exilé 19 ans par Napoléon III à Guernesey). Funérailles nationales : 2 millions de personnes." },
              { fact: "Balzac (1799–1850) — La Comédie humaine (91 romans)", detail: "Projet titanesque de décrire toute la société française. Le Père Goriot, Eugénie Grandet, Illusions perdues. Travaillait 16h/jour, buvait 50 cafés quotidiens." },
              { fact: "Stendhal (1783–1842) — Le Rouge et le Noir, La Chartreuse de Parme", detail: "De son vrai nom Henri Beyle. Le Rouge et le Noir (1830) : Julien Sorel, ambition et hypocrisie sociale. Inventeur du concept de cristallisation amoureuse (De l'Amour)." },
              { fact: "Flaubert (1821–1880) — Madame Bovary (1857)", detail: "Poursuivi pour immoralité à la publication. Emma Bovary rêve de passion romanesque dans sa vie de province. Le « bovarysme » : se concevoir autrement qu'on n'est." },
              { fact: "Dumas (1802–1870) — Les Trois Mousquetaires, Le Comte de Monte-Cristo", detail: "Maître du roman-feuilleton. « Tous pour un, un pour tous » est la devise des mousquetaires. Petit-fils d'une esclave haïtienne. Transféré au Panthéon en 2002." }
            ],
            flashcards: [
              { q: "Combien d'années Hugo est-il exilé par Napoléon III ?", r: "19 ans" },
              { q: "Où Hugo est-il exilé ?", r: "Guernesey" },
              { q: "Combien de personnes assistent aux funérailles de Hugo ?", r: "2 millions" },
              { q: "Combien de romans composent La Comédie humaine ?", r: "91" },
              { q: "Combien de cafés Balzac buvait-il par jour ?", r: "50" },
              { q: "Quel est le vrai nom de Stendhal ?", r: "Henri Beyle" },
              { q: "Quel concept amoureux Stendhal invente-t-il ?", r: "La cristallisation" },
              { q: "Pour quel motif Flaubert est-il poursuivi en 1857 ?", r: "Immoralité" },
              { q: "Comment appelle-t-on le fait de se concevoir autrement qu'on est ?", r: "Le bovarysme" },
              { q: "En quelle année Dumas est-il transféré au Panthéon ?", r: "2002" },
              { q: "Quel genre littéraire Dumas maîtrise-t-il ?", r: "Le roman-feuilleton" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d4t4", type: "quiz",
            title: "Mini-quiz : XIXe romantisme & réalisme",
            questions: [
              { q: "Combien de romans composent La Comédie humaine de Balzac ?", r: "91 romans", hint: "Projet de décrire toute la société française" },
              { q: "Quel roman de Flaubert lui a valu un procès pour immoralité ?", r: "Madame Bovary (1857)" },
              { q: "Quel est le vrai nom de Stendhal ?", r: "Henri Beyle", hint: "Auteur du Rouge et le Noir" },
              { q: "Quelle est la devise des Trois Mousquetaires ?", r: "Tous pour un, un pour tous" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d4t5", type: "lecture",
            title: "20 Romans Français Incontournables",
            subtitle: "Vidéo YouTube — Résumés des grands classiques (1h31)",
            url: "https://www.youtube.com/watch?v=u4GtGFYECe0",
            duration: "15 min"
          },
          // --- Fiche 3 : XIXe : naturalisme & poésie ---
          {
            id: "w1d4t6", type: "fiche",
            title: "XIXe : naturalisme & poésie",
            items: [
              { fact: "Zola (1840–1902) — Germinal, L'Assommoir, J'accuse", detail: "Chef du naturalisme. Les Rougon-Macquart : 20 romans sur l'hérédité et le milieu social. « J'accuse » (1898) dans L'Aurore défend Dreyfus. Mort asphyxié (accident ou assassinat ?)." },
              { fact: "Baudelaire (1821–1867) — Les Fleurs du mal (1857)", detail: "Condamné pour outrage aux bonnes mœurs la même année que Flaubert. Invente le poème en prose (Le Spleen de Paris). Le « spleen » baudelairien : mélancolie existentielle." },
              { fact: "Rimbaud (1854–1891) — Le Bateau ivre, Une saison en enfer", detail: "Écrit toute son œuvre entre 15 et 20 ans, puis abandonne la poésie pour devenir trafiquant en Afrique. Relation tumultueuse avec Verlaine (qui lui tire dessus en 1873)." },
              { fact: "Verlaine (1844–1896) — Poèmes saturniens, Romances sans paroles", detail: "Poète de la musicalité : « De la musique avant toute chose ». Emprisonné 2 ans pour avoir tiré sur Rimbaud à Bruxelles. Élu « Prince des poètes » en 1894." },
              { fact: "Maupassant (1850–1893) — Boule de Suif, Le Horla, Bel-Ami", detail: "Protégé de Flaubert. Maître de la nouvelle (plus de 300). Boule de Suif (1880) le rend célèbre en un jour. Sombre dans la folie (syphilis) et meurt à 42 ans." }
            ],
            flashcards: [
              { q: "Combien de romans composent Les Rougon-Macquart ?", r: "20" },
              { q: "Dans quel journal Zola publie-t-il « J'accuse » ?", r: "L'Aurore" },
              { q: "Quelle affaire Zola défend-il avec « J'accuse » ?", r: "L'affaire Dreyfus" },
              { q: "Quel recueil de Baudelaire est condamné en 1857 ?", r: "Les Fleurs du mal" },
              { q: "Comment s'appelle la mélancolie existentielle chez Baudelaire ?", r: "Le spleen" },
              { q: "À quel âge Rimbaud arrête-t-il la poésie ?", r: "20 ans" },
              { q: "Que fait Rimbaud après la poésie ?", r: "Trafiquant en Afrique" },
              { q: "En quelle année Verlaine tire-t-il sur Rimbaud ?", r: "1873" },
              { q: "Dans quelle ville Verlaine tire-t-il sur Rimbaud ?", r: "Bruxelles" },
              { q: "Combien de nouvelles Maupassant a-t-il écrites ?", r: "Plus de 300" },
              { q: "Qui est le mentor littéraire de Maupassant ?", r: "Flaubert" },
              { q: "À quel âge Maupassant meurt-il ?", r: "42 ans" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d4t7", type: "quiz",
            title: "Mini-quiz : XIXe naturalisme & poésie",
            questions: [
              { q: "Combien de romans composent le cycle des Rougon-Macquart de Zola ?", r: "20 romans" },
              { q: "Quel recueil de Baudelaire a été condamné pour outrage en 1857 ?", r: "Les Fleurs du mal" },
              { q: "À quel âge Rimbaud a-t-il cessé d'écrire de la poésie ?", r: "20 ans", hint: "Parti ensuite en Afrique" },
              { q: "Quelle nouvelle de Maupassant l'a rendu célèbre en 1880 ?", r: "Boule de Suif" }
            ]
          },
          // --- Fiche 4 : XXe : existentialisme & prix Nobel ---
          {
            id: "w1d4t8", type: "fiche",
            title: "XXe : existentialisme & prix Nobel",
            items: [
              { fact: "Proust (1871–1922) — À la recherche du temps perdu (7 tomes)", detail: "3 000 pages, considéré comme le plus grand roman du XXe siècle. La madeleine de Proust est devenue une expression courante pour la mémoire involontaire. Vivait en reclus dans une chambre tapissée de liège." },
              { fact: "Camus (1913–1960) — L'Étranger, La Peste — Nobel 1957", detail: "Né en Algérie. L'absurde : Meursault tue « à cause du soleil ». La Peste (1947) : allégorie du nazisme. Plus jeune Nobel français (44 ans). Mort dans un accident de voiture." },
              { fact: "Sartre (1905–1980) — La Nausée, Huis clos — Nobel refusé 1964", detail: "« L'enfer, c'est les autres » (Huis clos). Philosophe de l'existentialisme : « L'existence précède l'essence. » Seul auteur à avoir refusé le Nobel. Compagnon de Simone de Beauvoir." },
              { fact: "Beauvoir (1908–1986) — Le Deuxième Sexe (1949)", detail: "« On ne naît pas femme, on le devient. » Texte fondateur du féminisme moderne. Couple libre avec Sartre pendant 50 ans. Aussi romancière : Les Mandarins (prix Goncourt 1954)." },
              { fact: "Saint-Exupéry (1900–1944) — Le Petit Prince (1943)", detail: "Pilote et écrivain. Le Petit Prince est le livre le plus traduit au monde après la Bible (300 langues). Disparu en vol au-dessus de la Méditerranée. Son avion retrouvé en 2004." }
            ],
            flashcards: [
              { q: "Combien de tomes compte À la recherche du temps perdu ?", r: "7" },
              { q: "Combien de pages fait l'œuvre de Proust ?", r: "3 000" },
              { q: "De quel matériau Proust tapissait-il sa chambre ?", r: "Liège" },
              { q: "Dans quel pays Camus est-il né ?", r: "Algérie" },
              { q: "À quel âge Camus reçoit-il le Nobel ?", r: "44 ans" },
              { q: "En quelle année Camus reçoit-il le Nobel ?", r: "1957" },
              { q: "Quelle phrase célèbre vient de Huis clos de Sartre ?", r: "L'enfer, c'est les autres" },
              { q: "Qui est la compagne de Sartre pendant 50 ans ?", r: "Simone de Beauvoir" },
              { q: "Quel prix Beauvoir reçoit-elle pour Les Mandarins ?", r: "Prix Goncourt (1954)" },
              { q: "En combien de langues Le Petit Prince est-il traduit ?", r: "300 langues" },
              { q: "En quelle année l'avion de Saint-Exupéry est-il retrouvé ?", r: "2004" },
              { q: "Au-dessus de quelle mer Saint-Exupéry disparaît-il ?", r: "La Méditerranée" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d4t9", type: "quiz",
            title: "Mini-quiz : XXe existentialisme & Nobel",
            questions: [
              { q: "Combien de tomes compte À la recherche du temps perdu de Proust ?", r: "7 tomes", hint: "Environ 3 000 pages" },
              { q: "Quel philosophe français a refusé le Nobel de littérature en 1964 ?", r: "Jean-Paul Sartre" },
              { q: "Quelle phrase célèbre de Beauvoir résume Le Deuxième Sexe ?", r: "On ne naît pas femme, on le devient" },
              { q: "Quel est le livre le plus traduit au monde après la Bible ?", r: "Le Petit Prince de Saint-Exupéry", hint: "Traduit en plus de 300 langues" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d4t10", type: "quiz",
            title: "Quiz final : Littérature française",
            questions: [
              { q: "Quel dramaturge du XVIIe est mort sur scène en jouant Le Malade imaginaire ?", r: "Molière" },
              { q: "Quel auteur a écrit 91 romans dans La Comédie humaine ?", r: "Honoré de Balzac" },
              { q: "Quel recueil de fables compte 243 textes en 12 livres ?", r: "Les Fables de La Fontaine" },
              { q: "Quel article de Zola défend Dreyfus en 1898 ?", r: "J'accuse", hint: "Publié dans L'Aurore" },
              { q: "Quel poète a écrit toute son œuvre entre 15 et 20 ans ?", r: "Arthur Rimbaud" },
              { q: "Quel auteur français a reçu le Nobel en 1957 ?", r: "Albert Camus" },
              { q: "Comment s'appelle le concept de Stendhal sur l'amour idéalisé ?", r: "La cristallisation amoureuse" },
              { q: "Quel roman de Camus commence par la mort de la mère du narrateur ?", r: "L'Étranger" },
              { q: "Quelle expression courante vient de l'œuvre de Proust ?", r: "La madeleine de Proust", hint: "Liée à la mémoire involontaire" },
              { q: "Qui a écrit « L'enfer, c'est les autres » ?", r: "Jean-Paul Sartre", hint: "Dans Huis clos" },
              { q: "Quel prix Simone de Beauvoir a-t-elle obtenu pour Les Mandarins ?", r: "Le prix Goncourt (1954)" },
              { q: "Quel poète a été élu « Prince des poètes » en 1894 ?", r: "Paul Verlaine" }
            ]
          }
        ]
      },

      // ===================== JOUR 5 : ARTS & PEINTURE =====================
      {
        day: 5, label: "Vendredi", theme: "Arts & Peinture", icon: "🎨",
        objectif: "Courants artistiques et œuvres emblématiques",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d5t0", type: "lecture",
            title: "Histoire de l'Art — De la Renaissance à nos jours",
            subtitle: "Vidéo YouTube — Tous les grands mouvements artistiques (28 min)",
            url: "https://www.youtube.com/watch?v=RRjfQGPbDnc",
            duration: "15 min"
          },
          // --- Fiche 1 : Renaissance & Baroque ---
          {
            id: "w1d5t1", type: "fiche",
            title: "Renaissance & Baroque",
            items: [
              { fact: "Léonard de Vinci (1452–1519) — La Joconde, La Cène", detail: "La Joconde (Mona Lisa) est au Louvre, peinte entre 1503 et 1519. La Cène est une fresque à Milan. Vinci est aussi ingénieur, anatomiste, inventeur. Meurt à Amboise, invité par François Ier." },
              { fact: "Michel-Ange (1475–1564) — Plafond de la Chapelle Sixtine, David", detail: "Peint le plafond de la Sixtine en 4 ans (1508-1512), allongé sur un échafaudage. Le David (1504) mesure 5,17 m, à Florence. Aussi architecte de la coupole de Saint-Pierre de Rome." },
              { fact: "Raphaël (1483–1520) — L'École d'Athènes (Vatican)", detail: "Troisième génie de la Renaissance italienne avec Vinci et Michel-Ange. L'École d'Athènes réunit Platon et Aristote. Mort à 37 ans le jour de son anniversaire." },
              { fact: "Caravage (1571–1610) — Maître du clair-obscur baroque", detail: "Révolutionne la peinture avec des contrastes violents de lumière. La Vocation de saint Matthieu (Rome). Assassin en fuite, meurt à 38 ans. Influence majeure sur Rembrandt et Vermeer." },
              { fact: "Vermeer (1632–1675) — La Jeune Fille à la perle", detail: "Seulement 34 tableaux connus. La Jeune Fille à la perle est au Mauritshuis (La Haye). Maître de la lumière hollandaise. Redécouvert au XIXe siècle par le critique Thoré-Bürger." }
            ],
            flashcards: [
              { q: "Dans quel musée se trouve La Joconde ?", r: "Le Louvre" },
              { q: "Où Léonard de Vinci meurt-il ?", r: "Amboise" },
              { q: "Quel roi invite Vinci en France ?", r: "François Ier" },
              { q: "Combien d'années Michel-Ange met-il pour peindre la Sixtine ?", r: "4 ans" },
              { q: "Quelle est la taille du David de Michel-Ange ?", r: "5,17 m" },
              { q: "Dans quelle ville se trouve le David de Michel-Ange ?", r: "Florence" },
              { q: "À quel âge Raphaël meurt-il ?", r: "37 ans" },
              { q: "Quelle technique le Caravage révolutionne-t-il ?", r: "Le clair-obscur" },
              { q: "Combien de tableaux connus Vermeer a-t-il laissés ?", r: "34" },
              { q: "Dans quel musée se trouve La Jeune Fille à la perle ?", r: "Mauritshuis (La Haye)" },
              { q: "Quel critique redécouvre Vermeer au XIXe siècle ?", r: "Thoré-Bürger" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d5t2", type: "quiz",
            title: "Mini-quiz : Renaissance & Baroque",
            questions: [
              { q: "Dans quel musée se trouve La Joconde ?", r: "Le Musée du Louvre (Paris)", hint: "Peinte par Léonard de Vinci" },
              { q: "Combien d'années Michel-Ange a-t-il mis pour peindre le plafond de la Sixtine ?", r: "4 ans (1508–1512)" },
              { q: "Quel peintre baroque est le maître du clair-obscur ?", r: "Le Caravage" },
              { q: "Dans quel musée se trouve La Jeune Fille à la perle de Vermeer ?", r: "Le Mauritshuis à La Haye" }
            ]
          },
          // --- Fiche 2 : Romantisme & Impressionnisme ---
          {
            id: "w1d5t3", type: "fiche",
            title: "Romantisme & Impressionnisme",
            items: [
              { fact: "Delacroix (1798–1863) — La Liberté guidant le peuple (1830)", detail: "Tableau inspiré par la révolution de Juillet 1830 (les Trois Glorieuses). Au Louvre. La femme au drapeau tricolore symbolise Marianne. Delacroix est le chef de file du romantisme en peinture." },
              { fact: "Géricault (1791–1824) — Le Radeau de la Méduse (1819)", detail: "Au Louvre. S'inspire du naufrage réel de la frégate Méduse en 1816 (147 naufragés sur un radeau, 15 survivants). Scandale politique car il dénonce l'incompétence de l'officier royaliste." },
              { fact: "Monet (1840–1926) — Impression, soleil levant (1872)", detail: "Ce tableau, exposé en 1874, donne son nom à l'impressionnisme (un critique l'utilise avec mépris). Les Nymphéas : 250 tableaux de son jardin de Giverny. Au Musée Marmottan (Paris)." },
              { fact: "Renoir (1841–1919) — Bal du moulin de la Galette (1876)", detail: "Au Musée d'Orsay. Spécialiste des scènes de vie joyeuses et des nus féminins. Peint malgré ses rhumatismes en fin de vie, le pinceau attaché à la main." },
              { fact: "Degas (1834–1917) — Les danseuses (série de pastels)", detail: "Peintre et sculpteur des danseuses de l'Opéra de Paris. Petite Danseuse de quatorze ans (sculpture, 1881). Considéré comme impressionniste mais lui préférait le terme « réaliste »." }
            ],
            flashcards: [
              { q: "Quelle révolution inspire La Liberté guidant le peuple ?", r: "Révolution de Juillet 1830" },
              { q: "Comment s'appellent les trois jours de la révolution de 1830 ?", r: "Les Trois Glorieuses" },
              { q: "Combien de naufragés y avait-il sur le radeau de la Méduse ?", r: "147" },
              { q: "Combien de survivants sur le radeau de la Méduse ?", r: "15" },
              { q: "En quelle année le tableau Impression, soleil levant est-il exposé ?", r: "1874" },
              { q: "Combien de Nymphéas Monet a-t-il peints ?", r: "250" },
              { q: "Où se trouve le jardin de Monet ?", r: "Giverny" },
              { q: "Dans quel musée se trouve Impression, soleil levant ?", r: "Musée Marmottan" },
              { q: "Dans quel musée se trouve le Bal du moulin de la Galette ?", r: "Musée d'Orsay" },
              { q: "Quel terme Degas préférait-il à « impressionniste » ?", r: "Réaliste" },
              { q: "En quelle année Degas crée-t-il la Petite Danseuse de quatorze ans ?", r: "1881" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d5t4", type: "quiz",
            title: "Mini-quiz : Romantisme & Impressionnisme",
            questions: [
              { q: "Quel tableau de Delacroix représente une femme au drapeau tricolore ?", r: "La Liberté guidant le peuple (1830)" },
              { q: "Quel tableau a donné son nom au mouvement impressionniste ?", r: "Impression, soleil levant de Monet (1872)" },
              { q: "Quel naufrage réel inspire Le Radeau de la Méduse ?", r: "Le naufrage de la frégate Méduse en 1816", hint: "147 naufragés, 15 survivants" },
              { q: "Quel peintre impressionniste est célèbre pour ses danseuses ?", r: "Edgar Degas" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d5t5", type: "lecture",
            title: "QUIZ — Qui est le Peintre ? 40 Tableaux",
            subtitle: "Vidéo YouTube — Reconnaissez-vous ces chefs-d'œuvre ? (12 min)",
            url: "https://www.youtube.com/watch?v=Is-xzan9A1k",
            duration: "15 min"
          },
          // --- Fiche 3 : Post-impressionnisme & avant-gardes ---
          {
            id: "w1d5t6", type: "fiche",
            title: "Post-impressionnisme & avant-gardes",
            items: [
              { fact: "Van Gogh (1853–1890) — La Nuit étoilée, Les Tournesols", detail: "Hollandais installé en France. Se coupe l'oreille à Arles en 1888 (dispute avec Gauguin). La Nuit étoilée peinte à l'asile de Saint-Rémy. Vendu seulement 1 tableau de son vivant. Suicide à 37 ans." },
              { fact: "Cézanne (1839–1906) — Les Joueurs de cartes, La Montagne Sainte-Victoire", detail: "Précurseur du cubisme. Peint la montagne Sainte-Victoire (Aix-en-Provence) plus de 80 fois. Picasso l'appelle « le père de nous tous »." },
              { fact: "Gauguin (1848–1903) — D'où venons-nous ? Que sommes-nous ? Où allons-nous ?", detail: "Quitte tout pour peindre à Tahiti en 1891. Couleurs vives et aplats. Son plus grand tableau (4,6 m) est au Museum of Fine Arts de Boston." },
              { fact: "Picasso (1881–1973) — Guernica (1937), Les Demoiselles d'Avignon (1907)", detail: "Co-fondateur du cubisme avec Braque. Guernica dénonce le bombardement de la ville basque par les nazis. Au Musée Reina Sofía (Madrid). Périodes : bleue, rose, cubiste, surréaliste." },
              { fact: "Cubisme (1907) — Décompose les formes en géométrie", detail: "Lancé par Picasso (Les Demoiselles d'Avignon) et Braque. Cubisme analytique (1907-12) puis synthétique (1912-19). Influencé par Cézanne et les masques africains." }
            ],
            flashcards: [
              { q: "Dans quelle ville Van Gogh se coupe-t-il l'oreille ?", r: "Arles" },
              { q: "Avec quel peintre Van Gogh se dispute-t-il à Arles ?", r: "Gauguin" },
              { q: "Où Van Gogh peint-il La Nuit étoilée ?", r: "Asile de Saint-Rémy" },
              { q: "Combien de tableaux Van Gogh vend-il de son vivant ?", r: "Un seul" },
              { q: "Combien de fois Cézanne peint-il la montagne Sainte-Victoire ?", r: "Plus de 80 fois" },
              { q: "Qui appelle Cézanne « le père de nous tous » ?", r: "Picasso" },
              { q: "En quelle année Gauguin part-il à Tahiti ?", r: "1891" },
              { q: "Dans quel musée se trouve le grand tableau de Gauguin ?", r: "Museum of Fine Arts de Boston" },
              { q: "Dans quel musée se trouve Guernica ?", r: "Musée Reina Sofía (Madrid)" },
              { q: "Quelle ville basque Guernica dénonce-t-il ?", r: "Guernica" },
              { q: "Quelles sont les deux phases du cubisme ?", r: "Analytique et synthétique" },
              { q: "Quelles influences inspirent le cubisme ?", r: "Cézanne et masques africains" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d5t7", type: "quiz",
            title: "Mini-quiz : Post-impressionnisme & avant-gardes",
            questions: [
              { q: "Combien de tableaux Van Gogh a-t-il vendu de son vivant ?", r: "Un seul", hint: "Il s'est suicidé à 37 ans" },
              { q: "Quel peintre Picasso appelle-t-il « le père de nous tous » ?", r: "Paul Cézanne" },
              { q: "Dans quel musée se trouve Guernica de Picasso ?", r: "Le Musée Reina Sofía à Madrid" },
              { q: "Où Gauguin est-il parti peindre en 1891 ?", r: "À Tahiti" }
            ]
          },
          // --- Fiche 4 : Art moderne & contemporain ---
          {
            id: "w1d5t8", type: "fiche",
            title: "Art moderne & contemporain",
            items: [
              { fact: "Dalí (1904–1989) — La Persistance de la mémoire (1931)", detail: "Montres molles dans un paysage de Port Lligat (Catalogne). Au MoMA (New York). Surréaliste excentrique, moustache iconique. Méthode « paranoïaque-critique »." },
              { fact: "Magritte (1898–1967) — La Trahison des images (Ceci n'est pas une pipe)", detail: "Surréaliste belge. « Ceci n'est pas une pipe » questionne la relation entre image et réalité. Au LACMA (Los Angeles). Aussi : Le Fils de l'homme (homme au chapeau melon avec pomme)." },
              { fact: "Warhol (1928–1987) — Marilyn Monroe, Campbell's Soup Cans", detail: "Père du Pop Art américain. Sa Factory à New York produit sérigraphies et films. « À l'avenir, chacun aura droit à 15 minutes de célébrité mondiale. » Au MoMA et Whitney Museum." },
              { fact: "Mondrian (1872–1944) — Compositions en rouge, jaune et bleu", detail: "Néoplasticisme / De Stijl : lignes noires, couleurs primaires, angles droits. Influence le design, l'architecture et la mode (robe Yves Saint Laurent 1965). Hollandais installé à New York." },
              { fact: "Duchamp (1887–1968) — Fontaine (1917, urinoir signé R. Mutt)", detail: "Révolutionne l'art avec le ready-made : un objet ordinaire devient œuvre d'art par le choix de l'artiste. Français naturalisé américain. La Fontaine est souvent élue œuvre la plus influente du XXe siècle." }
            ],
            flashcards: [
              { q: "Dans quel musée se trouve La Persistance de la mémoire ?", r: "MoMA (New York)" },
              { q: "Quel paysage Dalí représente-t-il dans ses montres molles ?", r: "Port Lligat" },
              { q: "Comment s'appelle la méthode créative de Dalí ?", r: "Méthode paranoïaque-critique" },
              { q: "Dans quel musée se trouve Ceci n'est pas une pipe ?", r: "LACMA (Los Angeles)" },
              { q: "Comment s'appelle le tableau de Magritte avec un homme et une pomme ?", r: "Le Fils de l'homme" },
              { q: "Comment s'appelle l'atelier de Warhol ?", r: "La Factory" },
              { q: "Quelle technique artistique Warhol utilise-t-il principalement ?", r: "La sérigraphie" },
              { q: "Quel mouvement artistique Mondrian fonde-t-il ?", r: "De Stijl (néoplasticisme)" },
              { q: "Quel créateur de mode s'inspire de Mondrian en 1965 ?", r: "Yves Saint Laurent" },
              { q: "Sous quel pseudonyme Duchamp signe-t-il sa Fontaine ?", r: "R. Mutt" },
              { q: "Comment appelle-t-on un objet ordinaire devenu œuvre d'art ?", r: "Ready-made" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d5t9", type: "quiz",
            title: "Mini-quiz : Art moderne & contemporain",
            questions: [
              { q: "Quel artiste est célèbre pour ses montres molles dans La Persistance de la mémoire ?", r: "Salvador Dalí", hint: "Au MoMA de New York" },
              { q: "Quel artiste a créé la Fontaine (urinoir) en 1917 ?", r: "Marcel Duchamp", hint: "Inventeur du ready-made" },
              { q: "Quel mouvement artistique Andy Warhol représente-t-il ?", r: "Le Pop Art" },
              { q: "Quel peintre hollandais utilise uniquement des lignes noires et des couleurs primaires ?", r: "Piet Mondrian", hint: "Mouvement De Stijl" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d5t10", type: "quiz",
            title: "Quiz final : Arts & Peinture",
            questions: [
              { q: "Qui a peint le plafond de la Chapelle Sixtine ?", r: "Michel-Ange" },
              { q: "Quel tableau de Monet a donné son nom à l'impressionnisme ?", r: "Impression, soleil levant (1872)" },
              { q: "Où Van Gogh s'est-il coupé l'oreille ?", r: "À Arles, en 1888" },
              { q: "Quel artiste du Pop Art est célèbre pour ses sérigraphies de Marilyn Monroe ?", r: "Andy Warhol" },
              { q: "Quel tableau de Géricault dénonce le naufrage de 1816 ?", r: "Le Radeau de la Méduse" },
              { q: "Quel surréaliste belge a peint Ceci n'est pas une pipe ?", r: "René Magritte" },
              { q: "Combien de fois Cézanne a-t-il peint la montagne Sainte-Victoire ?", r: "Plus de 80 fois" },
              { q: "Quel peintre baroque hollandais a laissé seulement 34 tableaux connus ?", r: "Johannes Vermeer" },
              { q: "Quel courant artistique Picasso et Braque ont-ils fondé vers 1907 ?", r: "Le cubisme" },
              { q: "Quelle robe d'Yves Saint Laurent de 1965 s'inspire de Mondrian ?", r: "La robe Mondrian" },
              { q: "Dans quel musée parisien se trouve le Bal du moulin de la Galette de Renoir ?", r: "Le Musée d'Orsay" },
              { q: "Quel architecte est aussi Michel-Ange : coupole de quel édifice ?", r: "La basilique Saint-Pierre de Rome" }
            ]
          }
        ]
      },

      // ===================== JOUR 6 : SPORT =====================
      {
        day: 6, label: "Samedi", theme: "Sport", icon: "⚽",
        objectif: "Palmarès, records, grands événements sportifs",
        tasks: [
          // --- Lecture 1 ---
          {
            id: "w1d6t0", type: "lecture",
            title: "L'histoire des Jeux Olympiques",
            subtitle: "Vidéo YouTube — Découvrir l'histoire des Jeux Olympiques et leurs grands champions",
            url: "https://www.youtube.com/watch?v=D4qBjgsgsEI",
            duration: "15 min"
          },
          // --- Fiche 1 : Football : Coupe du monde & Euro ---
          {
            id: "w1d6t1", type: "fiche",
            title: "Football : Coupe du monde & Euro",
            items: [
              { fact: "Brésil : 5 Coupes du monde (1958, 1962, 1970, 1994, 2002)", detail: "Record absolu. Pelé a participé aux trois premières (seul triple champion). Le Brésil est le seul pays à avoir disputé toutes les éditions de la Coupe du monde." },
              { fact: "France : 2 Coupes du monde (1998, 2018)", detail: "1998 : à domicile, France 3-0 Brésil en finale (doublé de Zidane). 2018 : France 4-2 Croatie en finale à Moscou (Mbappé, Griezmann, Pogba)." },
              { fact: "Argentine : 3 Coupes du monde (1978, 1986, 2022)", detail: "Maradona en 1986 (« Main de Dieu » et « But du siècle » vs Angleterre). Messi en 2022 au Qatar, finale épique contre la France (3-3, tirs au but)." },
              { fact: "Euro : l'Allemagne et l'Espagne détiennent le record (3 titres chacun)", detail: "Allemagne : 1972, 1980, 1996. Espagne : 1964, 2008, 2012. La France a gagné 2 fois : 1984 (Platini) et 2000 (Zidane, but en or vs Italie)." },
              { fact: "Pelé : seul joueur triple champion du monde (1958, 1962, 1970)", detail: "Né Edson Arantes do Nascimento. 1 281 buts en carrière (record officieux). Surnommé « O Rei » (le Roi). Champion du monde à 17 ans en 1958 (plus jeune vainqueur)." }
            ],
            flashcards: [
              { q: "Combien de Coupes du monde le Brésil a-t-il gagnées ?", r: "5" },
              { q: "Quel est le score de la finale France-Brésil 1998 ?", r: "3-0" },
              { q: "Qui marque un doublé en finale de la Coupe du monde 1998 ?", r: "Zidane" },
              { q: "Quel est le score de la finale 2018 France-Croatie ?", r: "4-2" },
              { q: "Quel geste de Maradona est célèbre en 1986 ?", r: "La Main de Dieu" },
              { q: "Quel est le score de la finale 2022 Argentine-France ?", r: "3-3 (tirs au but)" },
              { q: "Combien de titres de champion d'Europe l'Allemagne a-t-elle ?", r: "3" },
              { q: "Combien de fois la France a-t-elle gagné l'Euro ?", r: "2 fois (1984, 2000)" },
              { q: "Quel est le vrai nom de Pelé ?", r: "Edson Arantes do Nascimento" },
              { q: "Combien de buts Pelé a-t-il marqués en carrière ?", r: "1 281" },
              { q: "À quel âge Pelé devient-il champion du monde en 1958 ?", r: "17 ans" },
              { q: "Quel est le surnom de Pelé ?", r: "O Rei" }
            ]
          },
          // --- Mini-quiz 1 ---
          {
            id: "w1d6t2", type: "quiz",
            title: "Mini-quiz : Football",
            questions: [
              { q: "Quel pays détient le record de Coupes du monde avec 5 titres ?", r: "Le Brésil" },
              { q: "Quel est le score de la finale 1998 France-Brésil ?", r: "3-0 pour la France", hint: "Doublé de Zidane" },
              { q: "Qui est le seul joueur triple champion du monde ?", r: "Pelé (1958, 1962, 1970)" },
              { q: "En quelle année la France a-t-elle gagné l'Euro avec un but en or de Trezeguet ?", r: "2000", hint: "Finale contre l'Italie" }
            ]
          },
          // --- Fiche 2 : JO & athlétisme ---
          {
            id: "w1d6t3", type: "fiche",
            title: "JO & athlétisme",
            items: [
              { fact: "JO modernes : Pierre de Coubertin, 1896 à Athènes", detail: "Coubertin, baron français, fonde le CIO en 1894. Premiers JO modernes : 241 athlètes, 14 pays, 9 sports. Devise : « Citius, Altius, Fortius — Communiter » (Plus vite, Plus haut, Plus fort — Ensemble)." },
              { fact: "Michael Phelps : 28 médailles olympiques dont 23 en or", detail: "Nageur américain, recordman absolu. Surnommé « le Baltimore Bullet ». A participé à 5 JO (2000 à 2016). 23 titres olympiques, record impensable." },
              { fact: "Usain Bolt : 100 m en 9 s 58 / 200 m en 19 s 19 (records du monde)", detail: "Records établis aux Mondiaux de Berlin 2009. Jamaïcain, triple champion olympique du 100 m (2008, 2012, 2016). Surnommé « Lightning Bolt » (l'Éclair)." },
              { fact: "Carl Lewis : 9 médailles d'or olympiques (athlétisme)", detail: "Américain, domine les années 1980-90. Vainqueur du 100 m, 200 m, longueur et relais 4×100 m. Comparé à Jesse Owens (4 médailles d'or à Berlin 1936 devant Hitler)." },
              { fact: "JO de Paris : 1900, 1924, 2024", detail: "Paris est la 2e ville après Londres (1908, 1948, 2012) à accueillir 3 fois les JO. 2024 : cérémonie d'ouverture sur la Seine, 10 714 athlètes, 32 sports." }
            ],
            flashcards: [
              { q: "En quelle année le CIO est-il fondé ?", r: "1894" },
              { q: "Combien de pays participent aux premiers JO modernes de 1896 ?", r: "14" },
              { q: "Combien de sports aux premiers JO modernes ?", r: "9" },
              { q: "Combien de médailles d'or Michael Phelps a-t-il ?", r: "23" },
              { q: "Quel est le surnom de Michael Phelps ?", r: "Baltimore Bullet" },
              { q: "Où Usain Bolt établit-il ses records du monde en 2009 ?", r: "Mondiaux de Berlin" },
              { q: "Quel est le record du monde du 200 m ?", r: "19 s 19" },
              { q: "Quel est le surnom d'Usain Bolt ?", r: "Lightning Bolt" },
              { q: "Combien de médailles d'or olympiques Carl Lewis a-t-il ?", r: "9" },
              { q: "Quelle ville a accueilli les JO le plus de fois ?", r: "Londres (3 fois)" },
              { q: "Combien d'athlètes aux JO de Paris 2024 ?", r: "10 714" },
              { q: "Où a lieu la cérémonie d'ouverture des JO 2024 ?", r: "Sur la Seine" }
            ]
          },
          // --- Mini-quiz 2 ---
          {
            id: "w1d6t4", type: "quiz",
            title: "Mini-quiz : JO & athlétisme",
            questions: [
              { q: "Qui a fondé les JO modernes et en quelle année ont eu lieu les premiers ?", r: "Pierre de Coubertin, 1896 à Athènes" },
              { q: "Quel nageur détient le record de 28 médailles olympiques ?", r: "Michael Phelps" },
              { q: "Quel est le record du monde du 100 m et qui le détient ?", r: "9 s 58 par Usain Bolt", hint: "Mondiaux de Berlin 2009" },
              { q: "Combien de fois Paris a-t-elle accueilli les JO d'été ?", r: "3 fois (1900, 1924, 2024)" }
            ]
          },
          // --- Lecture 2 ---
          {
            id: "w1d6t5", type: "lecture",
            title: "QUIZ 100% Sport — 50 Questions Multi-sports",
            subtitle: "Vidéo YouTube — Football, tennis, ski, athlétisme... (18 min)",
            url: "https://www.youtube.com/watch?v=5C55d5UZbu8",
            duration: "15 min"
          },
          // --- Fiche 3 : Tennis & cyclisme ---
          {
            id: "w1d6t6", type: "fiche",
            title: "Tennis & cyclisme",
            items: [
              { fact: "4 Grands Chelems : Open d'Australie, Roland-Garros, Wimbledon, US Open", detail: "Open d'Australie (janvier, dur), Roland-Garros (mai-juin, terre battue), Wimbledon (juin-juillet, gazon), US Open (août-septembre, dur). Wimbledon est le plus ancien (1877)." },
              { fact: "Novak Djokovic : record de 24 Grands Chelems masculins", detail: "Serbe, né en 1987. Dépasse Nadal (22) et Federer (20). A remporté chaque Grand Chelem au moins 3 fois. Médaille d'or olympique en 2024 à Paris." },
              { fact: "Rafael Nadal : record de 14 victoires à Roland-Garros", detail: "Surnommé « le Roi de la terre battue ». Espagnol, gaucher. 22 Grands Chelems au total. Rivalité légendaire avec Federer (40 confrontations)." },
              { fact: "Tour de France : créé en 1903, maillot jaune depuis 1919", detail: "Créé par le journal L'Auto (Henri Desgrange). Environ 3 500 km en 21 étapes sur 3 semaines en juillet. Le maillot jaune est la couleur du papier du journal L'Auto." },
              { fact: "Records Tour de France : Jacques Anquetil, Eddy Merckx, Bernard Hinault, Miguel Indurain, chacun 5 victoires", detail: "Quatre coureurs à 5 victoires. Merckx (belge) surnommé « le Cannibale ». Hinault est le dernier Français vainqueur (1985). Lance Armstrong déchu de ses 7 titres pour dopage." }
            ],
            flashcards: [
              { q: "Quel Grand Chelem se joue sur gazon ?", r: "Wimbledon" },
              { q: "Quel est le plus ancien Grand Chelem de tennis ?", r: "Wimbledon (1877)" },
              { q: "Combien de Grands Chelems Djokovic a-t-il gagnés ?", r: "24" },
              { q: "Combien de Grands Chelems Federer a-t-il gagnés ?", r: "20" },
              { q: "Combien de fois Nadal a-t-il gagné Roland-Garros ?", r: "14" },
              { q: "Combien de confrontations entre Nadal et Federer ?", r: "40" },
              { q: "Quel journal crée le Tour de France ?", r: "L'Auto" },
              { q: "En quelle année le Tour de France est-il créé ?", r: "1903" },
              { q: "Depuis quelle année le maillot jaune existe-t-il ?", r: "1919" },
              { q: "Quel est le surnom d'Eddy Merckx ?", r: "Le Cannibale" },
              { q: "Quel est le dernier Français vainqueur du Tour de France ?", r: "Bernard Hinault (1985)" },
              { q: "Pourquoi Lance Armstrong a-t-il perdu ses 7 titres ?", r: "Dopage" }
            ]
          },
          // --- Mini-quiz 3 ---
          {
            id: "w1d6t7", type: "quiz",
            title: "Mini-quiz : Tennis & cyclisme",
            questions: [
              { q: "Quel Grand Chelem de tennis se joue sur terre battue ?", r: "Roland-Garros" },
              { q: "Quel joueur détient le record de 24 Grands Chelems masculins ?", r: "Novak Djokovic" },
              { q: "Combien de fois Nadal a-t-il gagné Roland-Garros ?", r: "14 fois" },
              { q: "Pourquoi le maillot du leader du Tour de France est-il jaune ?", r: "C'était la couleur du papier du journal L'Auto qui a créé la course" }
            ]
          },
          // --- Fiche 4 : Rugby, sports divers & records ---
          {
            id: "w1d6t8", type: "fiche",
            title: "Rugby, sports divers & records",
            items: [
              { fact: "All Blacks (Nouvelle-Zélande) : 3 Coupes du monde de rugby (1987, 2011, 2015)", detail: "Équipe la plus titrée et la plus mythique du rugby. Haka avant chaque match. L'Afrique du Sud est aussi à 4 titres (1995, 2007, 2019, 2023). La France n'a jamais gagné (3 finales perdues)." },
              { fact: "Teddy Riner : 3 médailles d'or olympiques en judo (2012, 2016, 2024)", detail: "Français, catégorie +100 kg. 11 titres de champion du monde (record absolu tous sports de combat confondus). Invaincu pendant 154 combats consécutifs (2010-2020)." },
              { fact: "Record marathon : Kelvin Kiptum, 2 h 00 min 35 s (Chicago 2023)", detail: "Kenyan, premier homme sous les 2h01 en compétition officielle. Décédé dans un accident de voiture en février 2024 à 24 ans. Le précédent record était celui d'Eliud Kipchoge (2 h 01 min 09 s)." },
              { fact: "NBA : Michael Jordan, 6 titres avec les Chicago Bulls", detail: "Considéré comme le meilleur joueur de basket de l'histoire. 6 finales, 6 victoires, 6 titres de MVP des finales (1991-93, 1996-98). Marque Air Jordan." },
              { fact: "Formule 1 : Lewis Hamilton et Michael Schumacher, 7 titres mondiaux chacun", detail: "Schumacher : 5 titres consécutifs avec Ferrari (2000-2004). Hamilton : premier pilote noir champion du monde (2008 à 2020). Max Verstappen en compte 4 (2021-2024)." }
            ],
            flashcards: [
              { q: "Combien de Coupes du monde l'Afrique du Sud a-t-elle en rugby ?", r: "4" },
              { q: "Combien de finales de Coupe du monde la France a-t-elle perdues en rugby ?", r: "3" },
              { q: "Quel rituel les All Blacks pratiquent-ils avant chaque match ?", r: "Le haka" },
              { q: "Combien de titres mondiaux Teddy Riner a-t-il ?", r: "11" },
              { q: "Combien de combats consécutifs Riner remporte-t-il sans défaite ?", r: "154" },
              { q: "Quel est le record du marathon de Kelvin Kiptum ?", r: "2 h 00 min 35 s" },
              { q: "Où Kiptum établit-il son record du marathon ?", r: "Chicago (2023)" },
              { q: "Combien de titres NBA Michael Jordan a-t-il ?", r: "6" },
              { q: "Combien de titres consécutifs Schumacher remporte-t-il avec Ferrari ?", r: "5" },
              { q: "Combien de titres mondiaux Max Verstappen a-t-il ?", r: "4" },
              { q: "Quelle marque de baskets porte le nom de Michael Jordan ?", r: "Air Jordan" }
            ]
          },
          // --- Mini-quiz 4 ---
          {
            id: "w1d6t9", type: "quiz",
            title: "Mini-quiz : Rugby, sports divers & records",
            questions: [
              { q: "Quel pays de rugby est surnommé les All Blacks ?", r: "La Nouvelle-Zélande" },
              { q: "Combien de titres mondiaux Teddy Riner a-t-il en judo ?", r: "11 titres de champion du monde" },
              { q: "Quel est le record du monde du marathon et qui le détient ?", r: "2 h 00 min 35 s par Kelvin Kiptum", hint: "Chicago 2023" },
              { q: "Combien de titres de champion du monde de F1 partagent Hamilton et Schumacher ?", r: "7 chacun" }
            ]
          },
          // --- Quiz final du jour ---
          {
            id: "w1d6t10", type: "quiz",
            title: "Quiz final : Sport",
            questions: [
              { q: "Quel pays a gagné le plus de Coupes du monde de football ?", r: "Le Brésil (5 titres)" },
              { q: "Quel est le record du monde du 200 m ?", r: "19 s 19 par Usain Bolt" },
              { q: "Quel tennisman a gagné Roland-Garros 14 fois ?", r: "Rafael Nadal" },
              { q: "Combien de médailles d'or olympiques Michael Phelps a-t-il remportées ?", r: "23" },
              { q: "Quel pays a le plus de titres en Coupe du monde de rugby ?", r: "L'Afrique du Sud (4 titres)" },
              { q: "En quelle année le Tour de France a-t-il été créé ?", r: "1903" },
              { q: "Quelle est la devise olympique ?", r: "Plus vite, plus haut, plus fort — ensemble" },
              { q: "Quel basketteur a remporté 6 titres NBA avec les Chicago Bulls ?", r: "Michael Jordan" },
              { q: "Quel judoka français a été invaincu pendant 154 combats ?", r: "Teddy Riner" },
              { q: "Combien de victoires au Tour de France détiennent Merckx, Anquetil, Hinault et Indurain chacun ?", r: "5 chacun" },
              { q: "Qui est le plus jeune vainqueur de Coupe du monde de football ?", r: "Pelé, à 17 ans en 1958" },
              { q: "Quel Grand Chelem de tennis est le plus ancien ?", r: "Wimbledon (1877)" }
            ]
          }
        ]
      },

      // ===================== JOUR 7 : TEST BLANC #1 =====================
      {
        day: 7, label: "Dimanche", theme: "Test blanc #1", icon: "📝",
        objectif: "Évaluer ton niveau — objectif : 30/50",
        tasks: [
          // --- Lecture : QPUC replay ---
          {
            id: "w1d7t0", type: "lecture",
            title: "Questions pour un Champion — Episode complet",
            subtitle: "Vidéo YouTube — Regarder une émission QPUC pour s'imprégner du rythme (37 min)",
            url: "https://www.youtube.com/watch?v=pBIUUSsl0i0",
            duration: "26 min"
          },
          // --- Quiz section Histoire (8 questions) ---
          {
            id: "w1d7t1", type: "quiz",
            title: "Section Histoire (8 questions)",
            questions: [
              { q: "Quel événement de 1539 impose le français dans les documents officiels ?", r: "L'ordonnance de Villers-Cotterêts" },
              { q: "Quel roi de France a régné 72 ans ?", r: "Louis XIV (1643–1715)" },
              { q: "Quelle héroïne a fait sacrer Charles VII à Reims en 1429 ?", r: "Jeanne d'Arc" },
              { q: "Quel traité de 1919 met fin à la Première Guerre mondiale ?", r: "Le traité de Versailles" },
              { q: "En quelle année Napoléon a-t-il été sacré empereur ?", r: "1804" },
              { q: "Quel édit met fin aux guerres de religion en 1598 ?", r: "L'édit de Nantes", hint: "Signé par Henri IV" },
              { q: "Quelle bataille de 1916 symbolise la guerre des tranchées ?", r: "Verdun" },
              { q: "Qui a guillotiné Louis XVI le 21 janvier 1793 ?", r: "La Convention nationale (durant la Révolution)", hint: "Place de la Révolution" }
            ]
          },
          // --- Quiz section Géographie (8 questions) ---
          {
            id: "w1d7t2", type: "quiz",
            title: "Section Géographie (8 questions)",
            questions: [
              { q: "Quelle est la capitale du Canada ?", r: "Ottawa" },
              { q: "Quelle est la capitale de l'Australie ?", r: "Canberra" },
              { q: "Quel pays a trois capitales officielles ?", r: "L'Afrique du Sud (Pretoria, Le Cap, Bloemfontein)" },
              { q: "Quel est le plus long fleuve du monde ?", r: "Le Nil (6 650 km)" },
              { q: "Quelle est la hauteur de l'Everest ?", r: "8 849 m" },
              { q: "Quelle est la capitale de la Birmanie (Myanmar) ?", r: "Naypyidaw" },
              { q: "Quel détroit sépare l'Europe de l'Asie à Istanbul ?", r: "Le Bosphore" },
              { q: "Quelle est la capitale du Nigéria ?", r: "Abuja", hint: "Pas Lagos" }
            ]
          },
          // --- Quiz section Sciences (8 questions) ---
          {
            id: "w1d7t3", type: "quiz",
            title: "Section Sciences (8 questions)",
            questions: [
              { q: "Quelle est la formule d'Einstein sur l'énergie et la masse ?", r: "E=mc²" },
              { q: "Combien d'os compte le squelette humain adulte ?", r: "206" },
              { q: "Qui a découvert la structure de l'ADN en 1953 ?", r: "Watson et Crick (grâce aux travaux de Rosalind Franklin)" },
              { q: "Combien d'éléments compte le tableau périodique actuel ?", r: "118" },
              { q: "Qui a formulé la loi de conservation de la masse ?", r: "Lavoisier" },
              { q: "Quel astronaute a marché en premier sur la Lune ?", r: "Neil Armstrong (20 juillet 1969)" },
              { q: "Combien de chromosomes dans une cellule humaine ?", r: "46 (23 paires)" },
              { q: "Qui a inventé l'imprimerie à caractères mobiles vers 1450 ?", r: "Gutenberg" }
            ]
          },
          // --- Quiz section Littérature (8 questions) ---
          {
            id: "w1d7t4", type: "quiz",
            title: "Section Littérature (8 questions)",
            questions: [
              { q: "Quel est le vrai nom de Molière ?", r: "Jean-Baptiste Poquelin" },
              { q: "Combien de tomes compte À la recherche du temps perdu ?", r: "7 tomes" },
              { q: "Quel auteur a écrit Germinal et J'accuse ?", r: "Émile Zola" },
              { q: "Quel philosophe existentialiste a refusé le Nobel en 1964 ?", r: "Jean-Paul Sartre" },
              { q: "Qui a écrit Les Misérables ?", r: "Victor Hugo" },
              { q: "Quel roman de Flaubert a été poursuivi pour immoralité en 1857 ?", r: "Madame Bovary" },
              { q: "Quel poète a été surnommé « Prince des poètes » en 1894 ?", r: "Paul Verlaine" },
              { q: "Quel est le livre le plus traduit au monde après la Bible ?", r: "Le Petit Prince de Saint-Exupéry" }
            ]
          },
          // --- Quiz section Arts (6 questions) ---
          {
            id: "w1d7t5", type: "quiz",
            title: "Section Arts (6 questions)",
            questions: [
              { q: "Dans quel musée se trouve La Joconde ?", r: "Le Musée du Louvre (Paris)" },
              { q: "Quel peintre est le maître du clair-obscur baroque ?", r: "Le Caravage" },
              { q: "Qui a peint La Nuit étoilée ?", r: "Vincent van Gogh" },
              { q: "Quel courant artistique a été fondé par Picasso et Braque vers 1907 ?", r: "Le cubisme" },
              { q: "Quel artiste a créé la Fontaine (urinoir) en 1917 ?", r: "Marcel Duchamp" },
              { q: "Quel tableau de Delacroix (1830) est une allégorie de la liberté ?", r: "La Liberté guidant le peuple" }
            ]
          },
          // --- Quiz section Sport (6 questions) ---
          {
            id: "w1d7t6", type: "quiz",
            title: "Section Sport (6 questions)",
            questions: [
              { q: "Quel pays a remporté le plus de Coupes du monde de football ?", r: "Le Brésil (5 titres)" },
              { q: "Quel est le record du monde du 100 m ?", r: "9 s 58 par Usain Bolt" },
              { q: "Quel nageur détient 28 médailles olympiques ?", r: "Michael Phelps" },
              { q: "Quel joueur de tennis détient le record de 24 Grands Chelems ?", r: "Novak Djokovic" },
              { q: "Quel judoka français détient 11 titres de champion du monde ?", r: "Teddy Riner" },
              { q: "En quelle année les premiers JO modernes ont-ils eu lieu ?", r: "1896 à Athènes" }
            ]
          },
          // --- Quiz final mixte (6 questions) ---
          {
            id: "w1d7t7", type: "quiz",
            title: "Quiz final mixte (toutes catégories)",
            questions: [
              { q: "Quel empereur franc a été couronné par le pape en l'an 800 ?", r: "Charlemagne" },
              { q: "Quelle est la capitale du Sri Lanka ?", r: "Sri Jayawardenapura Kotte" },
              { q: "Quel symbole chimique correspond au sodium ?", r: "Na (du latin Natrium)" },
              { q: "Qui a écrit Le Deuxième Sexe en 1949 ?", r: "Simone de Beauvoir" },
              { q: "Dans quel musée se trouve Guernica de Picasso ?", r: "Le Musée Reina Sofía à Madrid" },
              { q: "Quel basketteur a remporté 6 titres NBA avec les Chicago Bulls ?", r: "Michael Jordan" }
            ]
          }
        ]
      }
    ]
  }
];
