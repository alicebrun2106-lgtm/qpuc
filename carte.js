// ============================================
// Carte de France — Departements, Regions, Fleuves, Chef-lieux
// ============================================
(function () {
  "use strict";

  var REGIONS = [
    { id: "idf", name: "\u00cele-de-France", path: "M290,240 L310,230 L330,245 L325,265 L305,270 L285,260 Z", color: "#e74c3c", departments: ["Paris (75) \u2192 Paris","Seine-et-Marne (77) \u2192 Melun","Yvelines (78) \u2192 Versailles","Essonne (91) \u2192 \u00c9vry","Hauts-de-Seine (92) \u2192 Nanterre","Seine-Saint-Denis (93) \u2192 Bobigny","Val-de-Marne (94) \u2192 Cr\u00e9teil","Val-d\u2019Oise (95) \u2192 Pontoise"] },
    { id: "hdf", name: "Hauts-de-France", path: "M260,120 L310,100 L370,115 L380,160 L350,190 L310,200 L280,195 L255,170 Z", color: "#3498db", departments: ["Aisne (02) \u2192 Laon","Nord (59) \u2192 Lille","Oise (60) \u2192 Beauvais","Pas-de-Calais (62) \u2192 Arras","Somme (80) \u2192 Amiens"] },
    { id: "normandie", name: "Normandie", path: "M150,150 L255,170 L280,195 L290,230 L260,240 L220,230 L170,210 L130,190 Z", color: "#2ecc71", departments: ["Calvados (14) \u2192 Caen","Eure (27) \u2192 \u00c9vreux","Manche (50) \u2192 Saint-L\u00f4","Orne (61) \u2192 Alen\u00e7on","Seine-Maritime (76) \u2192 Rouen"] },
    { id: "bretagne", name: "Bretagne", path: "M60,190 L130,190 L170,210 L160,250 L120,260 L70,245 L40,220 Z", color: "#9b59b6", departments: ["C\u00f4tes-d\u2019Armor (22) \u2192 Saint-Brieuc","Finist\u00e8re (29) \u2192 Quimper","Ille-et-Vilaine (35) \u2192 Rennes","Morbihan (56) \u2192 Vannes"] },
    { id: "pdl", name: "Pays de la Loire", path: "M120,260 L160,250 L220,265 L230,310 L200,340 L150,330 L110,300 Z", color: "#f39c12", departments: ["Loire-Atlantique (44) \u2192 Nantes","Maine-et-Loire (49) \u2192 Angers","Mayenne (53) \u2192 Laval","Sarthe (72) \u2192 Le Mans","Vend\u00e9e (85) \u2192 La Roche-sur-Yon"] },
    { id: "centre", name: "Centre-Val de Loire", path: "M220,230 L260,240 L290,240 L305,270 L310,310 L280,340 L230,340 L220,310 L220,265 Z", color: "#1abc9c", departments: ["Cher (18) \u2192 Bourges","Eure-et-Loir (28) \u2192 Chartres","Indre (36) \u2192 Ch\u00e2teauroux","Indre-et-Loire (37) \u2192 Tours","Loir-et-Cher (41) \u2192 Blois","Loiret (45) \u2192 Orl\u00e9ans"] },
    { id: "bfc", name: "Bourgogne-Franche-Comt\u00e9", path: "M330,245 L380,230 L420,250 L430,300 L410,340 L370,350 L340,330 L310,310 L325,265 Z", color: "#e67e22", departments: ["C\u00f4te-d\u2019Or (21) \u2192 Dijon","Doubs (25) \u2192 Besan\u00e7on","Jura (39) \u2192 Lons-le-Saunier","Ni\u00e8vre (58) \u2192 Nevers","Haute-Sa\u00f4ne (70) \u2192 Vesoul","Sa\u00f4ne-et-Loire (71) \u2192 M\u00e2con","Yonne (89) \u2192 Auxerre","Territoire de Belfort (90) \u2192 Belfort"] },
    { id: "ge", name: "Grand Est", path: "M370,115 L420,110 L470,135 L480,190 L460,230 L420,250 L380,230 L350,190 L380,160 Z", color: "#c0392b", departments: ["Ardennes (08) \u2192 Charleville-M\u00e9zi\u00e8res","Aube (10) \u2192 Troyes","Marne (51) \u2192 Ch\u00e2lons-en-Champagne","Haute-Marne (52) \u2192 Chaumont","Meurthe-et-Moselle (54) \u2192 Nancy","Meuse (55) \u2192 Bar-le-Duc","Moselle (57) \u2192 Metz","Bas-Rhin (67) \u2192 Strasbourg","Haut-Rhin (68) \u2192 Colmar","Vosges (88) \u2192 \u00c9pinal"] },
    { id: "na", name: "Nouvelle-Aquitaine", path: "M110,300 L150,330 L200,340 L230,340 L280,340 L300,380 L280,430 L250,470 L200,480 L160,460 L120,410 L100,360 Z", color: "#8e44ad", departments: ["Charente (16) \u2192 Angoul\u00eame","Charente-Maritime (17) \u2192 La Rochelle","Corr\u00e8ze (19) \u2192 Tulle","Creuse (23) \u2192 Gu\u00e9ret","Dordogne (24) \u2192 P\u00e9rigueux","Gironde (33) \u2192 Bordeaux","Landes (40) \u2192 Mont-de-Marsan","Lot-et-Garonne (47) \u2192 Agen","Pyr\u00e9n\u00e9es-Atlantiques (64) \u2192 Pau","Deux-S\u00e8vres (79) \u2192 Niort","Vienne (86) \u2192 Poitiers","Haute-Vienne (87) \u2192 Limoges"] },
    { id: "ara", name: "Auvergne-Rh\u00f4ne-Alpes", path: "M340,330 L370,350 L410,340 L430,300 L470,320 L490,370 L470,420 L420,430 L370,420 L340,400 L300,380 L310,340 Z", color: "#2980b9", departments: ["Ain (01) \u2192 Bourg-en-Bresse","Allier (03) \u2192 Moulins","Ard\u00e8che (07) \u2192 Privas","Cantal (15) \u2192 Aurillac","Dr\u00f4me (26) \u2192 Valence","Is\u00e8re (38) \u2192 Grenoble","Loire (42) \u2192 Saint-\u00c9tienne","Haute-Loire (43) \u2192 Le Puy-en-Velay","Puy-de-D\u00f4me (63) \u2192 Clermont-Ferrand","Rh\u00f4ne (69) \u2192 Lyon","Savoie (73) \u2192 Chamb\u00e9ry","Haute-Savoie (74) \u2192 Annecy"] },
    { id: "occitanie", name: "Occitanie", path: "M160,460 L200,480 L250,470 L280,430 L340,400 L370,420 L380,460 L350,500 L280,530 L220,530 L170,510 Z", color: "#d35400", departments: ["Ari\u00e8ge (09) \u2192 Foix","Aude (11) \u2192 Carcassonne","Aveyron (12) \u2192 Rodez","Gard (30) \u2192 N\u00eemes","Haute-Garonne (31) \u2192 Toulouse","Gers (32) \u2192 Auch","H\u00e9rault (34) \u2192 Montpellier","Lot (46) \u2192 Cahors","Loz\u00e8re (48) \u2192 Mende","Hautes-Pyr\u00e9n\u00e9es (65) \u2192 Tarbes","Pyr\u00e9n\u00e9es-Orientales (66) \u2192 Perpignan","Tarn (81) \u2192 Albi","Tarn-et-Garonne (82) \u2192 Montauban"] },
    { id: "paca", name: "Provence-Alpes-C\u00f4te d\u2019Azur", path: "M380,460 L420,430 L470,420 L510,440 L520,480 L480,500 L430,500 L390,490 Z", color: "#16a085", departments: ["Alpes-de-Haute-Provence (04) \u2192 Digne-les-Bains","Hautes-Alpes (05) \u2192 Gap","Alpes-Maritimes (06) \u2192 Nice","Bouches-du-Rh\u00f4ne (13) \u2192 Marseille","Var (83) \u2192 Toulon","Vaucluse (84) \u2192 Avignon"] },
    { id: "corse", name: "Corse", path: "M530,460 L540,450 L550,470 L545,510 L535,520 L525,500 Z", color: "#7f8c8d", departments: ["Corse-du-Sud (2A) \u2192 Ajaccio","Haute-Corse (2B) \u2192 Bastia"] },
  ];

  var RIVERS = [
    { name: "La Seine", path: "M150,180 L220,210 L290,245 L310,250 L340,280", color: "#3498db" },
    { name: "La Loire", path: "M110,300 L160,290 L220,300 L280,330 L340,350 L380,370", color: "#2980b9" },
    { name: "Le Rh\u00f4ne", path: "M430,280 L420,320 L430,370 L440,420 L460,460 L480,490", color: "#1abc9c" },
    { name: "La Garonne", path: "M200,500 L220,470 L250,440 L280,420 L300,400", color: "#9b59b6" },
    { name: "Le Rhin", path: "M470,135 L475,180 L465,230 L450,260", color: "#e74c3c" },
  ];

  // ── Helpers ──────────────────────────────────────────

  function svgEl(tag, attrs, children) {
    var e = document.createElementNS("http://www.w3.org/2000/svg", tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        e.setAttribute(k, attrs[k]);
      });
    }
    if (children) children.forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function htmlEl(tag, attrs, children) {
    var e = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "className") e.className = attrs[k];
        else if (k === "textContent") e.textContent = attrs[k];
        else if (k === "innerHTML") e.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") e.addEventListener(k.slice(2).toLowerCase(), attrs[k]);
        else e.setAttribute(k, attrs[k]);
      });
    }
    if (children) children.forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }

  function parseDept(deptStr) {
    var m = deptStr.match(/^(.+?)\s*\(([^)]+)\)\s*\u2192\s*(.+)$/);
    if (!m) return { name: deptStr, code: "", chefLieu: "" };
    return { name: m[1].trim(), code: m[2].trim(), chefLieu: m[3].trim() };
  }

  function centroid(pathStr) {
    var coords = pathStr.match(/(\d+(?:\.\d+)?),(\d+(?:\.\d+)?)/g);
    if (!coords || coords.length === 0) return { x: 300, y: 300 };
    var sx = 0, sy = 0;
    coords.forEach(function (c) {
      var parts = c.split(",");
      sx += parseFloat(parts[0]);
      sy += parseFloat(parts[1]);
    });
    return { x: sx / coords.length, y: sy / coords.length };
  }

  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // ── Build flat departments list ─────────────────────
  var ALL_DEPTS = [];
  REGIONS.forEach(function (r) {
    r.departments.forEach(function (d) {
      var p = parseDept(d);
      ALL_DEPTS.push({ region: r.name, regionId: r.id, name: p.name, code: p.code, chefLieu: p.chefLieu });
    });
  });

  // ── CSS ─────────────────────────────────────────────
  function injectStyles() {
    if (document.getElementById("carte-styles")) return;
    var s = document.createElement("style");
    s.id = "carte-styles";
    s.textContent = "\
#screen-carte { padding: 10px; max-width: 1000px; }\
.carte-layout { display: flex; gap: 16px; flex: 1; min-height: 0; }\
.carte-map-col { flex: 1; min-width: 0; display: flex; flex-direction: column; }\
.carte-panel-col { width: 300px; flex-shrink: 0; display: flex; flex-direction: column; }\
.carte-svg-wrap { background: #0d1130; border-radius: 12px; border: 1px solid #222; overflow: hidden; position: relative; }\
.carte-svg-wrap svg { display: block; width: 100%; height: auto; }\
.carte-svg-wrap svg path.region-path { cursor: pointer; stroke: #1a1a3a; stroke-width: 1.5; transition: opacity .15s, stroke-width .15s; }\
.carte-svg-wrap svg path.region-path:hover { opacity: 0.82; stroke-width: 3; stroke: #fff; }\
.carte-svg-wrap svg path.region-path.selected { opacity: 0.85; stroke-width: 3; stroke: #f0c040; }\
.carte-svg-wrap svg path.region-path.quiz-correct { stroke: #2ecc71 !important; stroke-width: 4 !important; opacity: 1 !important; }\
.carte-svg-wrap svg path.region-path.quiz-wrong { stroke: #e74c3c !important; stroke-width: 4 !important; opacity: 0.5 !important; }\
.carte-svg-wrap svg path.region-path.quiz-target { stroke: #f0c040 !important; stroke-width: 4 !important; animation: carte-pulse 0.6s ease 3; }\
@keyframes carte-pulse { 0%,100%{ stroke-width:4; } 50%{ stroke-width:7; } }\
.carte-river { fill: none; stroke-width: 2.5; stroke-linecap: round; stroke-linejoin: round; opacity: 0.7; pointer-events: none; }\
.carte-river-label { font-size: 10px; fill: #80d0ff; font-style: italic; pointer-events: none; }\
.carte-region-label { font-size: 9px; fill: rgba(255,255,255,0.85); text-anchor: middle; pointer-events: none; font-weight: 700; }\
.carte-tooltip { position: absolute; background: rgba(20,24,51,0.95); color: #e8e8f0; padding: 8px 14px; border-radius: 8px; font-size: 15px; font-weight: 700; pointer-events: none; white-space: nowrap; border: 1px solid rgba(240,192,64,0.5); z-index: 10; transform: translate(-50%, -120%); display: none; }\
.carte-panel { background: #141833; border-radius: 12px; border: 1px solid #222; padding: 16px; overflow-y: auto; flex: 1; min-height: 200px; }\
.carte-panel h3 { color: #f0c040; margin-bottom: 12px; font-size: 18px; }\
.carte-panel-count { color: #8888aa; font-size: 13px; margin-bottom: 12px; }\
.carte-dept-item { background: #1c2244; border-radius: 8px; padding: 10px 14px; margin-bottom: 6px; font-size: 13px; line-height: 1.5; color: #ccc; }\
.carte-dept-item .dept-name { color: #e8e8f0; font-weight: 700; }\
.carte-dept-item .dept-code { color: #f0c040; font-size: 12px; margin-left: 4px; }\
.carte-dept-item .dept-chef { color: #80d0ff; display: block; margin-top: 2px; font-size: 12px; }\
.carte-panel-placeholder { color: #555577; font-size: 14px; text-align: center; margin-top: 40px; line-height: 1.6; }\
.carte-toolbar { display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap; align-items: center; }\
.carte-btn { background: #1c2244; color: #e8e8f0; border: 1px solid #333; border-radius: 8px; padding: 9px 18px; cursor: pointer; font-size: 13px; font-weight: 700; transition: background .15s, border-color .15s; }\
.carte-btn:hover { background: #2a3060; border-color: #f0c040; }\
.carte-btn.active { background: #f0c040; color: #0a0e27; border-color: #f0c040; }\
.carte-quiz-bar { background: #1c2244; border-radius: 10px; padding: 16px 20px; margin-bottom: 10px; display: none; flex-direction: column; gap: 10px; }\
.carte-quiz-bar.visible { display: flex; }\
.carte-quiz-bar-top { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }\
.carte-quiz-question { font-size: 17px; font-weight: 800; color: #f0c040; flex: 1; min-width: 200px; }\
.carte-quiz-score { font-size: 14px; color: #8888aa; font-weight: 700; white-space: nowrap; }\
.carte-quiz-choices { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }\
.carte-quiz-choice { background: #252a50; border: 2px solid #333; border-radius: 8px; padding: 12px 16px; cursor: pointer; font-size: 15px; font-weight: 600; color: #e8e8f0; text-align: center; transition: border-color .15s, background .15s; }\
.carte-quiz-choice:hover { border-color: #f0c040; background: #2a3060; }\
.carte-quiz-choice.correct { border-color: #2ecc71 !important; background: rgba(46,204,113,0.15) !important; color: #2ecc71 !important; font-weight: 800 !important; }\
.carte-quiz-choice.wrong { border-color: #e74c3c !important; background: rgba(231,76,60,0.15) !important; color: #e74c3c !important; }\
.carte-quiz-choice.disabled { pointer-events: none; opacity: 0.6; }\
.carte-quiz-feedback { font-size: 15px; font-weight: 700; min-height: 22px; }\
.carte-quiz-next { background: #f0c040; color: #0a0e27; border: none; border-radius: 8px; padding: 10px 22px; cursor: pointer; font-size: 14px; font-weight: 800; display: none; }\
.carte-quiz-next:hover { background: #f5d060; }\
.carte-quiz-next.visible { display: inline-block; }\
.carte-quiz-actions { display: flex; gap: 8px; flex-wrap: wrap; }\
.carte-result-panel { text-align: center; padding-top: 30px; }\
.carte-result-panel .result-emoji { font-size: 48px; margin-bottom: 10px; }\
.carte-result-panel .result-msg { font-size: 20px; font-weight: 800; color: #f0c040; margin-bottom: 8px; }\
.carte-result-panel .result-score { font-size: 32px; font-weight: 900; color: #e8e8f0; }\
.carte-result-panel .result-pct { font-size: 16px; color: #8888aa; margin-top: 4px; }\
@media (max-width: 700px) {\
  .carte-layout { flex-direction: column; }\
  .carte-panel-col { width: 100%; max-height: 300px; }\
  .carte-quiz-choices { grid-template-columns: 1fr; }\
}\
";
    document.head.appendChild(s);
  }

  // ── State ───────────────────────────────────────────
  var state = {
    selectedRegion: null,
    showRivers: false,
    quizActive: false,
    quizType: null,
    quizQueue: [],
    quizCurrent: null,
    quizScore: 0,
    quizTotal: 0,
    quizAnswered: false,
  };

  var refs = {};

  // ── Build the screen ────────────────────────────────
  function buildScreen() {
    var screen = document.getElementById("screen-carte");
    if (!screen) {
      screen = document.createElement("div");
      screen.id = "screen-carte";
      screen.className = "screen";
      document.getElementById("app").appendChild(screen);
    }
    screen.innerHTML = "";

    // Header
    var header = htmlEl("div", { className: "game-header" }, [
      htmlEl("button", { className: "btn-back", textContent: "\u2190 Retour", onClick: function () { stopQuiz(); if (typeof goHome === "function") goHome(); } }),
      htmlEl("h2", { textContent: "Carte de France" }),
      htmlEl("div"),
    ]);
    screen.appendChild(header);

    // Toolbar
    var toolbar = htmlEl("div", { className: "carte-toolbar" });
    refs.btnRivers = htmlEl("button", { className: "carte-btn", innerHTML: "\ud83c\udf0a Fleuves", onClick: toggleRivers });
    refs.btnQuizRegion = htmlEl("button", { className: "carte-btn", innerHTML: "\ud83c\udfaf Quiz R\u00e9gions", onClick: function () { startQuiz("region"); } });
    refs.btnQuizChef = htmlEl("button", { className: "carte-btn", innerHTML: "\ud83c\udfe0 Quiz Chef-lieux", onClick: function () { startQuiz("cheflieu"); } });
    refs.btnStopQuiz = htmlEl("button", { className: "carte-btn", innerHTML: "\u2716 Arr\u00eater le quiz", onClick: stopQuiz });
    refs.btnStopQuiz.style.display = "none";
    toolbar.appendChild(refs.btnRivers);
    toolbar.appendChild(refs.btnQuizRegion);
    toolbar.appendChild(refs.btnQuizChef);
    toolbar.appendChild(refs.btnStopQuiz);
    screen.appendChild(toolbar);

    // Quiz bar
    refs.quizBar = htmlEl("div", { className: "carte-quiz-bar", id: "carte-quiz-bar" });
    screen.appendChild(refs.quizBar);

    // Layout
    var layout = htmlEl("div", { className: "carte-layout" });
    var mapCol = htmlEl("div", { className: "carte-map-col" });
    var panelCol = htmlEl("div", { className: "carte-panel-col" });

    // SVG wrap
    var svgWrap = htmlEl("div", { className: "carte-svg-wrap" });
    refs.tooltip = htmlEl("div", { className: "carte-tooltip" });
    svgWrap.appendChild(buildSVG());
    svgWrap.appendChild(refs.tooltip);
    refs.svgWrap = svgWrap;
    mapCol.appendChild(svgWrap);

    // Panel
    refs.panel = htmlEl("div", { className: "carte-panel" });
    refs.panel.innerHTML = '<div class="carte-panel-placeholder">Clique sur une r\u00e9gion pour voir ses d\u00e9partements et chef-lieux.</div>';
    panelCol.appendChild(refs.panel);

    layout.appendChild(mapCol);
    layout.appendChild(panelCol);
    screen.appendChild(layout);
  }

  // ── Build SVG map ───────────────────────────────────
  function buildSVG() {
    var svg = svgEl("svg", { viewBox: "0 0 600 600", preserveAspectRatio: "xMidYMid meet" });
    refs.svg = svg;

    // Background
    svg.appendChild(svgEl("rect", { x: "0", y: "0", width: "600", height: "600", fill: "#0a0e27" }));

    // Rivers group (hidden by default)
    refs.gRivers = svgEl("g", { id: "carte-rivers", style: "display:none" });
    RIVERS.forEach(function (rv) {
      refs.gRivers.appendChild(svgEl("path", {
        d: rv.path,
        class: "carte-river",
        stroke: rv.color,
        "stroke-dasharray": "6 3",
      }));
      // Label near midpoint
      var allCoords = rv.path.match(/(\d+),(\d+)/g);
      if (allCoords && allCoords.length >= 2) {
        var midIdx = Math.floor(allCoords.length / 2);
        var mc = allCoords[midIdx].split(",");
        var lbl = svgEl("text", {
          x: String(parseInt(mc[0]) + 10),
          y: String(parseInt(mc[1]) - 8),
          class: "carte-river-label",
        });
        lbl.textContent = rv.name;
        refs.gRivers.appendChild(lbl);
      }
    });
    svg.appendChild(refs.gRivers);

    // Region shapes
    var gRegions = svgEl("g", { id: "carte-regions-g" });
    refs.regionPaths = {};
    REGIONS.forEach(function (r) {
      var p = svgEl("path", {
        d: r.path,
        fill: r.color,
        class: "region-path",
        "data-id": r.id,
      });
      p.addEventListener("click", function () { onRegionClick(r); });
      p.addEventListener("mouseenter", function (e) { onRegionHover(r, e, true); });
      p.addEventListener("mouseleave", function (e) { onRegionHover(r, e, false); });
      refs.regionPaths[r.id] = p;
      gRegions.appendChild(p);
    });
    svg.appendChild(gRegions);

    // Region labels
    var gLabels = svgEl("g", { id: "carte-labels-g" });
    var SHORT_NAMES = {
      "Bourgogne-Franche-Comt\u00e9": "BFC",
      "Auvergne-Rh\u00f4ne-Alpes": "ARA",
      "Nouvelle-Aquitaine": "Nlle-Aquit.",
      "Provence-Alpes-C\u00f4te d\u2019Azur": "PACA",
      "Centre-Val de Loire": "Centre-VdL",
      "Pays de la Loire": "Pays Loire",
      "Hauts-de-France": "Hauts-de-Fr.",
      "\u00cele-de-France": "\u00cddF",
    };
    REGIONS.forEach(function (r) {
      var c = centroid(r.path);
      var label = SHORT_NAMES[r.name] || r.name;
      var txt = svgEl("text", {
        x: String(Math.round(c.x)),
        y: String(Math.round(c.y + 3)),
        class: "carte-region-label",
      });
      txt.textContent = label;
      gLabels.appendChild(txt);
    });
    svg.appendChild(gLabels);

    return svg;
  }

  // ── Interaction ─────────────────────────────────────
  function onRegionHover(region, e, enter) {
    if (enter) {
      refs.tooltip.textContent = region.name;
      refs.tooltip.style.display = "block";
      var wrap = refs.svgWrap;
      var rect = wrap.getBoundingClientRect();
      refs.tooltip.style.left = (e.clientX - rect.left) + "px";
      refs.tooltip.style.top = (e.clientY - rect.top) + "px";
    } else {
      refs.tooltip.style.display = "none";
    }
  }

  function onRegionClick(region) {
    if (state.quizActive && state.quizType === "region") {
      handleQuizRegionClick(region);
      return;
    }
    if (state.quizActive) return;
    selectRegion(region);
  }

  function selectRegion(region) {
    state.selectedRegion = region.id;
    Object.keys(refs.regionPaths).forEach(function (id) {
      refs.regionPaths[id].classList.toggle("selected", id === region.id);
    });
    renderPanel(region);
  }

  function renderPanel(region) {
    var panel = refs.panel;
    panel.innerHTML = "";
    panel.appendChild(htmlEl("h3", { textContent: region.name }));
    panel.appendChild(htmlEl("div", { className: "carte-panel-count", textContent: region.departments.length + " d\u00e9partements" }));
    region.departments.forEach(function (d) {
      var p = parseDept(d);
      var item = htmlEl("div", { className: "carte-dept-item" });
      item.innerHTML = '<span class="dept-name">' + escHtml(p.name) + '</span><span class="dept-code">(' + escHtml(p.code) + ')</span><span class="dept-chef">Chef-lieu : ' + escHtml(p.chefLieu) + '</span>';
      panel.appendChild(item);
    });
  }

  // ── Rivers toggle ───────────────────────────────────
  function toggleRivers() {
    state.showRivers = !state.showRivers;
    refs.gRivers.style.display = state.showRivers ? "inline" : "none";
    refs.btnRivers.classList.toggle("active", state.showRivers);
  }

  // ── Quiz engine ─────────────────────────────────────
  function startQuiz(type) {
    state.quizActive = true;
    state.quizType = type;
    state.quizScore = 0;
    state.quizTotal = 0;
    state.quizAnswered = false;

    refs.btnStopQuiz.style.display = "";
    refs.btnQuizRegion.style.display = "none";
    refs.btnQuizChef.style.display = "none";

    // Clear highlights
    Object.keys(refs.regionPaths).forEach(function (id) {
      refs.regionPaths[id].classList.remove("selected", "quiz-correct", "quiz-wrong", "quiz-target");
    });

    if (type === "region") {
      state.quizQueue = shuffleArr(REGIONS.slice());
      nextQuizRegion();
    } else {
      state.quizQueue = shuffleArr(ALL_DEPTS.slice()).slice(0, 15);
      nextQuizChefLieu();
    }
  }

  function stopQuiz() {
    state.quizActive = false;
    state.quizType = null;
    state.quizQueue = [];
    state.quizCurrent = null;
    state.quizAnswered = false;

    refs.quizBar.classList.remove("visible");
    refs.quizBar.innerHTML = "";
    refs.btnStopQuiz.style.display = "none";
    refs.btnQuizRegion.style.display = "";
    refs.btnQuizChef.style.display = "";

    Object.keys(refs.regionPaths).forEach(function (id) {
      refs.regionPaths[id].classList.remove("selected", "quiz-correct", "quiz-wrong", "quiz-target");
    });

    refs.panel.innerHTML = '<div class="carte-panel-placeholder">Clique sur une r\u00e9gion pour voir ses d\u00e9partements et chef-lieux.</div>';
  }

  // ── Quiz: Regions (click the map) ──────────────────
  function nextQuizRegion() {
    if (state.quizQueue.length === 0) { endQuiz(); return; }
    state.quizAnswered = false;
    state.quizCurrent = state.quizQueue.shift();
    state.quizTotal++;

    // Reset region visual states
    Object.keys(refs.regionPaths).forEach(function (id) {
      refs.regionPaths[id].classList.remove("quiz-correct", "quiz-wrong", "quiz-target");
    });

    refs.quizBar.classList.add("visible");
    refs.quizBar.innerHTML = "";

    var topRow = htmlEl("div", { className: "carte-quiz-bar-top" });
    topRow.appendChild(htmlEl("div", { className: "carte-quiz-question", textContent: "Clique sur : " + state.quizCurrent.name }));
    topRow.appendChild(htmlEl("div", { className: "carte-quiz-score", textContent: "Score : " + state.quizScore + " / " + (state.quizTotal - 1) }));
    refs.quizBar.appendChild(topRow);

    refs.panel.innerHTML = '<div class="carte-panel-placeholder"><strong style="color:#f0c040;font-size:18px;">Quiz R\u00e9gions</strong><br><br>Trouve <strong style="color:#e8e8f0">' + escHtml(state.quizCurrent.name) + '</strong><br>sur la carte !</div>';
  }

  function handleQuizRegionClick(region) {
    if (state.quizType !== "region" || state.quizAnswered) return;
    state.quizAnswered = true;

    var correct = region.id === state.quizCurrent.id;
    if (correct) {
      state.quizScore++;
      refs.regionPaths[region.id].classList.add("quiz-correct");
      try { if (typeof playSound === "function") playSound("correct"); } catch (e) {}
    } else {
      refs.regionPaths[region.id].classList.add("quiz-wrong");
      refs.regionPaths[state.quizCurrent.id].classList.add("quiz-target");
      try { if (typeof playSound === "function") playSound("wrong"); } catch (e) {}
    }

    // Update score
    var scoreEl = refs.quizBar.querySelector(".carte-quiz-score");
    if (scoreEl) scoreEl.textContent = "Score : " + state.quizScore + " / " + state.quizTotal;

    // Feedback
    var fb = htmlEl("div", { className: "carte-quiz-feedback" });
    fb.style.color = correct ? "#2ecc71" : "#e74c3c";
    fb.textContent = correct ? "Bravo !" : "C\u2019\u00e9tait " + state.quizCurrent.name;
    refs.quizBar.appendChild(fb);

    // Next button
    var isLast = state.quizQueue.length === 0;
    var nextBtn = htmlEl("button", { className: "carte-quiz-next visible", textContent: isLast ? "Voir le r\u00e9sultat" : "Suivant \u2192", onClick: nextQuizRegion });
    refs.quizBar.appendChild(nextBtn);
  }

  // ── Quiz: Chef-lieux (multiple choice) ─────────────
  function nextQuizChefLieu() {
    if (state.quizQueue.length === 0) { endQuiz(); return; }
    state.quizAnswered = false;
    state.quizCurrent = state.quizQueue.shift();
    state.quizTotal++;

    Object.keys(refs.regionPaths).forEach(function (id) {
      refs.regionPaths[id].classList.remove("selected", "quiz-correct", "quiz-wrong", "quiz-target");
    });

    refs.quizBar.classList.add("visible");
    refs.quizBar.innerHTML = "";

    var topRow = htmlEl("div", { className: "carte-quiz-bar-top" });
    topRow.appendChild(htmlEl("div", { className: "carte-quiz-question", textContent: "Chef-lieu de " + state.quizCurrent.name + " (" + state.quizCurrent.code + ") ?" }));
    topRow.appendChild(htmlEl("div", { className: "carte-quiz-score", textContent: "Score : " + state.quizScore + " / " + (state.quizTotal - 1) }));
    refs.quizBar.appendChild(topRow);

    // Build 4 choices
    var correctAnswer = state.quizCurrent.chefLieu;
    var others = ALL_DEPTS.filter(function (d) { return d.chefLieu !== correctAnswer; });
    var distractors = shuffleArr(others).slice(0, 3).map(function (d) { return d.chefLieu; });
    var choices = shuffleArr([correctAnswer].concat(distractors));

    var choicesDiv = htmlEl("div", { className: "carte-quiz-choices" });
    choices.forEach(function (ch) {
      var btn = htmlEl("div", { className: "carte-quiz-choice", textContent: ch, onClick: function () { handleChefLieuChoice(ch, correctAnswer, choicesDiv); } });
      choicesDiv.appendChild(btn);
    });
    refs.quizBar.appendChild(choicesDiv);

    // Highlight region on map
    if (refs.regionPaths[state.quizCurrent.regionId]) {
      refs.regionPaths[state.quizCurrent.regionId].classList.add("selected");
    }

    // Panel info
    refs.panel.innerHTML = '<div class="carte-panel-placeholder"><strong style="color:#f0c040;font-size:18px;">Quiz Chef-lieux</strong><br><br>D\u00e9partement : <strong style="color:#e8e8f0">' + escHtml(state.quizCurrent.name) + '</strong><br>Code : <strong style="color:#e8e8f0">' + escHtml(state.quizCurrent.code) + '</strong><br>R\u00e9gion : ' + escHtml(state.quizCurrent.region) + '</div>';
  }

  function handleChefLieuChoice(chosen, correct, container) {
    if (state.quizAnswered) return;
    state.quizAnswered = true;

    var isCorrect = chosen === correct;
    if (isCorrect) {
      state.quizScore++;
      try { if (typeof playSound === "function") playSound("correct"); } catch (e) {}
    } else {
      try { if (typeof playSound === "function") playSound("wrong"); } catch (e) {}
    }

    // Mark choices
    var btns = container.querySelectorAll(".carte-quiz-choice");
    btns.forEach(function (b) {
      b.classList.add("disabled");
      if (b.textContent === correct) b.classList.add("correct");
      if (b.textContent === chosen && !isCorrect) b.classList.add("wrong");
    });

    // Update score
    var scoreEl = refs.quizBar.querySelector(".carte-quiz-score");
    if (scoreEl) scoreEl.textContent = "Score : " + state.quizScore + " / " + state.quizTotal;

    // Feedback
    var fb = htmlEl("div", { className: "carte-quiz-feedback" });
    fb.style.color = isCorrect ? "#2ecc71" : "#e74c3c";
    fb.textContent = isCorrect ? "Bravo !" : "R\u00e9ponse : " + correct;
    refs.quizBar.appendChild(fb);

    // Next
    var isLast = state.quizQueue.length === 0;
    var nextBtn = htmlEl("button", { className: "carte-quiz-next visible", textContent: isLast ? "Voir le r\u00e9sultat" : "Suivant \u2192", onClick: nextQuizChefLieu });
    refs.quizBar.appendChild(nextBtn);
  }

  // ── Quiz end ────────────────────────────────────────
  function endQuiz() {
    var pct = state.quizTotal > 0 ? Math.round((state.quizScore / state.quizTotal) * 100) : 0;
    var msg, emoji;
    if (pct === 100) { msg = "Parfait !"; emoji = "\u2b50"; }
    else if (pct >= 70) { msg = "Bien jou\u00e9 !"; emoji = "\ud83c\udf89"; }
    else if (pct >= 40) { msg = "Pas mal, continue !"; emoji = "\ud83d\udc4d"; }
    else { msg = "Courage, r\u00e9vise et r\u00e9essaie !"; emoji = "\ud83d\udcaa"; }

    refs.quizBar.classList.add("visible");
    refs.quizBar.innerHTML = "";

    var topRow = htmlEl("div", { className: "carte-quiz-bar-top" });
    topRow.appendChild(htmlEl("div", { className: "carte-quiz-question", innerHTML: emoji + " " + escHtml(msg) + ' &mdash; ' + state.quizScore + "/" + state.quizTotal + " (" + pct + "%)" }));
    refs.quizBar.appendChild(topRow);

    var actions = htmlEl("div", { className: "carte-quiz-actions" });
    var savedType = state.quizType;
    actions.appendChild(htmlEl("button", { className: "carte-quiz-next visible", textContent: "Rejouer", onClick: function () { startQuiz(savedType || "region"); } }));
    actions.appendChild(htmlEl("button", { className: "carte-quiz-next visible", textContent: "Terminer", onClick: stopQuiz, style: "background:#555;color:#eee;" }));
    refs.quizBar.appendChild(actions);

    // Result panel
    refs.panel.innerHTML = '<div class="carte-result-panel"><div class="result-emoji">' + emoji + '</div><div class="result-msg">' + escHtml(msg) + '</div><div class="result-score">' + state.quizScore + ' / ' + state.quizTotal + '</div><div class="result-pct">' + pct + '%</div></div>';

    // Track stats globally
    try {
      if (typeof stats !== "undefined") {
        stats.quizzes = (stats.quizzes || 0) + 1;
        stats.quizCorrect = (stats.quizCorrect || 0) + state.quizScore;
        stats.quizTotal = (stats.quizTotal || 0) + state.quizTotal;
        if (typeof updateStats === "function") updateStats();
      }
    } catch (e) {}
  }

  // ── Public entry point ──────────────────────────────
  function initCarte() {
    injectStyles();
    buildScreen();
    if (typeof showScreen === "function") showScreen("carte");
  }

  window.initCarte = initCarte;
})();
