// Carte interactive de France — Régions, départements, fleuves
(function () {
  const REGIONS = [
    { id:"idf", name:"Île-de-France", path:"M290,240 L310,230 L330,245 L325,265 L305,270 L285,260 Z", color:"#e74c3c",
      depts:["Paris (75) → Paris","Seine-et-Marne (77) → Melun","Yvelines (78) → Versailles","Essonne (91) → Évry","Hauts-de-Seine (92) → Nanterre","Seine-Saint-Denis (93) → Bobigny","Val-de-Marne (94) → Créteil","Val-d'Oise (95) → Pontoise"] },
    { id:"hdf", name:"Hauts-de-France", path:"M260,120 L310,100 L370,115 L380,160 L350,190 L310,200 L280,195 L255,170 Z", color:"#3498db",
      depts:["Aisne (02) → Laon","Nord (59) → Lille","Oise (60) → Beauvais","Pas-de-Calais (62) → Arras","Somme (80) → Amiens"] },
    { id:"normandie", name:"Normandie", path:"M150,150 L255,170 L280,195 L290,230 L260,240 L220,230 L170,210 L130,190 Z", color:"#2ecc71",
      depts:["Calvados (14) → Caen","Eure (27) → Évreux","Manche (50) → Saint-Lô","Orne (61) → Alençon","Seine-Maritime (76) → Rouen"] },
    { id:"bretagne", name:"Bretagne", path:"M60,190 L130,190 L170,210 L160,250 L120,260 L70,245 L40,220 Z", color:"#9b59b6",
      depts:["Côtes-d'Armor (22) → Saint-Brieuc","Finistère (29) → Quimper","Ille-et-Vilaine (35) → Rennes","Morbihan (56) → Vannes"] },
    { id:"pdl", name:"Pays de la Loire", path:"M120,260 L160,250 L220,265 L230,310 L200,340 L150,330 L110,300 Z", color:"#f39c12",
      depts:["Loire-Atlantique (44) → Nantes","Maine-et-Loire (49) → Angers","Mayenne (53) → Laval","Sarthe (72) → Le Mans","Vendée (85) → La Roche-sur-Yon"] },
    { id:"centre", name:"Centre-Val de Loire", path:"M220,230 L260,240 L290,240 L305,270 L310,310 L280,340 L230,340 L220,310 L220,265 Z", color:"#1abc9c",
      depts:["Cher (18) → Bourges","Eure-et-Loir (28) → Chartres","Indre (36) → Châteauroux","Indre-et-Loire (37) → Tours","Loir-et-Cher (41) → Blois","Loiret (45) → Orléans"] },
    { id:"bfc", name:"Bourgogne-Franche-Comté", path:"M330,245 L380,230 L420,250 L430,300 L410,340 L370,350 L340,330 L310,310 L325,265 Z", color:"#e67e22",
      depts:["Côte-d'Or (21) → Dijon","Doubs (25) → Besançon","Jura (39) → Lons-le-Saunier","Nièvre (58) → Nevers","Haute-Saône (70) → Vesoul","Saône-et-Loire (71) → Mâcon","Yonne (89) → Auxerre","Territoire de Belfort (90) → Belfort"] },
    { id:"ge", name:"Grand Est", path:"M370,115 L420,110 L470,135 L480,190 L460,230 L420,250 L380,230 L350,190 L380,160 Z", color:"#c0392b",
      depts:["Ardennes (08) → Charleville-Mézières","Aube (10) → Troyes","Marne (51) → Châlons-en-Champagne","Haute-Marne (52) → Chaumont","Meurthe-et-Moselle (54) → Nancy","Meuse (55) → Bar-le-Duc","Moselle (57) → Metz","Bas-Rhin (67) → Strasbourg","Haut-Rhin (68) → Colmar","Vosges (88) → Épinal"] },
    { id:"na", name:"Nouvelle-Aquitaine", path:"M110,300 L150,330 L200,340 L230,340 L280,340 L300,380 L280,430 L250,470 L200,480 L160,460 L120,410 L100,360 Z", color:"#8e44ad",
      depts:["Charente (16) → Angoulême","Charente-Maritime (17) → La Rochelle","Corrèze (19) → Tulle","Creuse (23) → Guéret","Dordogne (24) → Périgueux","Gironde (33) → Bordeaux","Landes (40) → Mont-de-Marsan","Lot-et-Garonne (47) → Agen","Pyrénées-Atlantiques (64) → Pau","Deux-Sèvres (79) → Niort","Vienne (86) → Poitiers","Haute-Vienne (87) → Limoges"] },
    { id:"ara", name:"Auvergne-Rhône-Alpes", path:"M340,330 L370,350 L410,340 L430,300 L470,320 L490,370 L470,420 L420,430 L370,420 L340,400 L300,380 L310,340 Z", color:"#2980b9",
      depts:["Ain (01) → Bourg-en-Bresse","Allier (03) → Moulins","Ardèche (07) → Privas","Cantal (15) → Aurillac","Drôme (26) → Valence","Isère (38) → Grenoble","Loire (42) → Saint-Étienne","Haute-Loire (43) → Le Puy-en-Velay","Puy-de-Dôme (63) → Clermont-Ferrand","Rhône (69) → Lyon","Savoie (73) → Chambéry","Haute-Savoie (74) → Annecy"] },
    { id:"occitanie", name:"Occitanie", path:"M160,460 L200,480 L250,470 L280,430 L340,400 L370,420 L380,460 L350,500 L280,530 L220,530 L170,510 Z", color:"#d35400",
      depts:["Ariège (09) → Foix","Aude (11) → Carcassonne","Aveyron (12) → Rodez","Gard (30) → Nîmes","Haute-Garonne (31) → Toulouse","Gers (32) → Auch","Hérault (34) → Montpellier","Lot (46) → Cahors","Lozère (48) → Mende","Hautes-Pyrénées (65) → Tarbes","Pyrénées-Orientales (66) → Perpignan","Tarn (81) → Albi","Tarn-et-Garonne (82) → Montauban"] },
    { id:"paca", name:"PACA", path:"M380,460 L420,430 L470,420 L510,440 L520,480 L480,500 L430,500 L390,490 Z", color:"#16a085",
      depts:["Alpes-de-Haute-Provence (04) → Digne-les-Bains","Hautes-Alpes (05) → Gap","Alpes-Maritimes (06) → Nice","Bouches-du-Rhône (13) → Marseille","Var (83) → Toulon","Vaucluse (84) → Avignon"] },
    { id:"corse", name:"Corse", path:"M530,460 L545,445 L555,465 L550,510 L540,525 L525,500 Z", color:"#7f8c8d",
      depts:["Corse-du-Sud (2A) → Ajaccio","Haute-Corse (2B) → Bastia"] },
  ];

  const RIVERS = [
    { name:"La Seine", path:"M150,180 Q220,210 290,245 Q310,250 340,280", color:"#5dade2" },
    { name:"La Loire", path:"M110,300 Q160,280 230,300 Q280,320 340,350 Q360,360 390,375", color:"#3498db" },
    { name:"Le Rhône", path:"M430,280 Q425,310 430,360 Q435,400 450,440 Q465,470 480,495", color:"#2ecc71" },
    { name:"La Garonne", path:"M200,500 Q230,465 260,440 Q280,420 300,395", color:"#9b59b6" },
    { name:"Le Rhin", path:"M470,135 Q472,170 468,210 Q462,240 455,260", color:"#e74c3c" },
  ];

  let selectedRegion = null;
  let quizMode = false;
  let quizTarget = null;
  let quizScore = 0;
  let quizTotal = 0;
  let showRivers = true;

  window.initCarte = function () {
    let screen = document.getElementById("screen-carte");
    if (!screen) {
      screen = document.createElement("div");
      screen.id = "screen-carte";
      screen.className = "screen";
      document.getElementById("app").appendChild(screen);
    }

    selectedRegion = null;
    quizMode = false;
    quizScore = 0;
    quizTotal = 0;

    screen.innerHTML = `
      <div class="game-header">
        <button class="btn-back" onclick="goHome()">← Retour</button>
        <h2>🗺️ Carte de France</h2>
        <div></div>
      </div>
      <div class="carte-controls">
        <button class="carte-btn active" id="btn-explore" onclick="carteExplore()">🔍 Explorer</button>
        <button class="carte-btn" id="btn-quiz-carte" onclick="carteQuiz()">❓ Quiz</button>
        <button class="carte-btn ${showRivers ? 'active' : ''}" id="btn-rivers" onclick="carteToggleRivers()">🌊 Fleuves</button>
      </div>
      <div class="carte-quiz-bar" id="carte-quiz-bar" style="display:none">
        <div class="carte-quiz-prompt" id="carte-quiz-prompt"></div>
        <div class="carte-quiz-score" id="carte-quiz-score"></div>
      </div>
      <div class="carte-container">
        <svg id="carte-svg" viewBox="0 0 600 560" xmlns="http://www.w3.org/2000/svg"></svg>
      </div>
      <div class="carte-info" id="carte-info">
        <div class="carte-info-placeholder">👆 Clique sur une région pour voir ses départements</div>
      </div>
    `;

    renderMap();
    showScreen("carte");
  };

  function renderMap() {
    const svg = document.getElementById("carte-svg");
    svg.innerHTML = "";

    // Background
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    bg.setAttribute("width", "600"); bg.setAttribute("height", "560");
    bg.setAttribute("fill", "transparent");
    svg.appendChild(bg);

    // Rivers (below regions)
    if (showRivers) {
      RIVERS.forEach(r => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", r.path);
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", r.color);
        path.setAttribute("stroke-width", "3");
        path.setAttribute("stroke-linecap", "round");
        path.setAttribute("opacity", "0.7");
        path.setAttribute("stroke-dasharray", "8,4");
        svg.appendChild(path);

        // River label
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        const coords = r.path.match(/[\d.]+/g);
        if (coords && coords.length >= 4) {
          text.setAttribute("x", parseFloat(coords[2]) + 5);
          text.setAttribute("y", parseFloat(coords[3]) - 8);
        }
        text.setAttribute("fill", r.color);
        text.setAttribute("font-size", "11");
        text.setAttribute("font-weight", "600");
        text.setAttribute("font-style", "italic");
        text.textContent = r.name;
        svg.appendChild(text);
      });
    }

    // Regions
    REGIONS.forEach(r => {
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.setAttribute("data-id", r.id);
      g.style.cursor = "pointer";

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", r.path);
      path.setAttribute("fill", selectedRegion === r.id ? r.color : r.color + "60");
      path.setAttribute("stroke", selectedRegion === r.id ? "#fff" : r.color);
      path.setAttribute("stroke-width", selectedRegion === r.id ? "3" : "1.5");
      path.setAttribute("class", "carte-region");

      g.appendChild(path);

      // Label
      const bbox = getPathCenter(r.path);
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", bbox.x);
      text.setAttribute("y", bbox.y);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("fill", "#fff");
      text.setAttribute("font-size", r.id === "corse" ? "9" : "11");
      text.setAttribute("font-weight", "700");
      text.setAttribute("pointer-events", "none");
      text.textContent = r.id === "corse" ? "Corse" : r.name.split("-")[0].split(" ")[0];
      g.appendChild(text);

      g.addEventListener("click", () => onRegionClick(r));
      g.addEventListener("mouseenter", () => {
        if (selectedRegion !== r.id) path.setAttribute("fill", r.color + "90");
      });
      g.addEventListener("mouseleave", () => {
        if (selectedRegion !== r.id) path.setAttribute("fill", r.color + "60");
      });

      svg.appendChild(g);
    });
  }

  function getPathCenter(d) {
    const nums = d.match(/[\d.]+/g).map(Number);
    let sumX = 0, sumY = 0, count = 0;
    for (let i = 0; i < nums.length; i += 2) {
      sumX += nums[i]; sumY += nums[i + 1]; count++;
    }
    return { x: sumX / count, y: sumY / count };
  }

  function onRegionClick(r) {
    if (quizMode) {
      quizTotal++;
      const correct = r.id === quizTarget.id;
      if (correct) quizScore++;

      // Flash feedback
      const panel = document.getElementById("carte-info");
      if (correct) {
        panel.innerHTML = `<div class="carte-feedback-correct">✅ Oui ! C'est bien <strong>${quizTarget.name}</strong></div>`;
        selectedRegion = r.id;
      } else {
        panel.innerHTML = `<div class="carte-feedback-wrong">❌ Non, c'était <strong>${quizTarget.name}</strong> — tu as cliqué sur ${r.name}</div>`;
        selectedRegion = quizTarget.id;
      }
      renderMap();
      document.getElementById("carte-quiz-score").textContent = `${quizScore}/${quizTotal}`;

      setTimeout(() => {
        selectedRegion = null;
        nextQuizCarteQuestion();
      }, 1800);
      return;
    }

    selectedRegion = r.id;
    renderMap();

    const panel = document.getElementById("carte-info");
    panel.innerHTML = `
      <div class="carte-region-title" style="color:${r.color}">${r.name}</div>
      <div class="carte-depts-count">${r.depts.length} départements</div>
      <div class="carte-depts-list">
        ${r.depts.map(d => {
          const parts = d.split(" → ");
          return `<div class="carte-dept-item"><span class="carte-dept-name">${parts[0]}</span><span class="carte-dept-chef">→ ${parts[1]}</span></div>`;
        }).join("")}
      </div>
    `;
  }

  // --- Quiz mode ---
  window.carteQuiz = function () {
    quizMode = true;
    quizScore = 0;
    quizTotal = 0;
    document.getElementById("btn-explore").classList.remove("active");
    document.getElementById("btn-quiz-carte").classList.add("active");
    document.getElementById("carte-quiz-bar").style.display = "";
    selectedRegion = null;
    renderMap();
    nextQuizCarteQuestion();
  };

  function nextQuizCarteQuestion() {
    const r = REGIONS[Math.floor(Math.random() * REGIONS.length)];
    quizTarget = r;
    document.getElementById("carte-quiz-prompt").textContent = `👆 Clique sur : ${r.name}`;
    document.getElementById("carte-quiz-score").textContent = `${quizScore}/${quizTotal}`;
    document.getElementById("carte-info").innerHTML = `<div class="carte-info-placeholder">Trouve <strong style="color:var(--accent)">${r.name}</strong> sur la carte !</div>`;
  }

  window.carteExplore = function () {
    quizMode = false;
    document.getElementById("btn-explore").classList.add("active");
    document.getElementById("btn-quiz-carte").classList.remove("active");
    document.getElementById("carte-quiz-bar").style.display = "none";
    selectedRegion = null;
    renderMap();
    document.getElementById("carte-info").innerHTML = '<div class="carte-info-placeholder">👆 Clique sur une région pour voir ses départements</div>';
  };

  window.carteToggleRivers = function () {
    showRivers = !showRivers;
    document.getElementById("btn-rivers").classList.toggle("active", showRivers);
    renderMap();
  };
})();
