// explorer.js — Onglet "Explorer" : catégories simplifiées
(function () {
  const SRS_KEY = "qpuc-srs";
  let currentCategory = null;

  function getCardKey(packId, idx) { return packId + ":" + idx; }
  function getMastery(packId, total) {
    const data = SRS.getData(SRS_KEY) || {};
    let m = 0;
    for (let i = 0; i < total; i++) {
      const st = data[getCardKey(packId, i)];
      if (st && st.reps >= 3) m++;
    }
    return total > 0 ? Math.round(m / total * 100) : 0;
  }
  function getStarted(packId) {
    const data = SRS.getData(SRS_KEY) || {};
    let started = false;
    for (const k in data) { if (k.startsWith(packId + ":")) { started = true; break; } }
    return started;
  }

  // ---------- INIT ----------
  window.initExplorer = function () {
    const container = document.getElementById("explorer-content");
    if (!container) return;
    container.innerHTML = "";

    if (currentCategory) {
      renderCategoryDetail(container, currentCategory);
    } else {
      renderCategoryList(container);
    }
  };

  function renderCategoryList(container) {
    const header = document.createElement("div");
    header.className = "explorer-header";
    header.innerHTML = `
      <h1 class="explorer-title">Explorer</h1>
      <p class="explorer-sub">Choisis un thème et apprends à ton rythme.</p>
    `;
    container.appendChild(header);

    const grid = document.createElement("div");
    grid.className = "category-grid";
    CATEGORIES.forEach((cat) => grid.appendChild(buildCategoryCard(cat)));
    container.appendChild(grid);
  }

  function buildCategoryCard(cat) {
    const allPacks = (typeof FLASHCARD_PACKS !== "undefined" ? FLASHCARD_PACKS : []);
    const packs = allPacks.filter((p) => cat.packIds.includes(p.id));
    let mastered = 0, total = packs.length;
    packs.forEach((p) => { if (getMastery(p.id, p.cards.length) >= 100) mastered++; });

    const card = document.createElement("button");
    card.className = "category-card";
    card.style.setProperty("--cat-color", cat.color);
    card.onclick = () => { currentCategory = cat.id; window.initExplorer(); };
    card.innerHTML = `
      <div class="category-card-icon">${cat.icon}</div>
      <div class="category-card-name">${cat.name}</div>
      <div class="category-card-desc">${cat.description}</div>
      <div class="category-card-progress">
        <span class="category-card-mastered">${mastered}/${total}</span>
        <span class="category-card-mastered-lbl">paquets maîtrisés</span>
      </div>
    `;
    return card;
  }

  function renderCategoryDetail(container, catId) {
    const cat = CATEGORIES.find((c) => c.id === catId);
    if (!cat) { currentCategory = null; window.initExplorer(); return; }

    const back = document.createElement("button");
    back.className = "explorer-back-btn";
    back.innerHTML = "← Catégories";
    back.onclick = () => { currentCategory = null; window.initExplorer(); };
    container.appendChild(back);

    const head = document.createElement("div");
    head.className = "category-detail-header";
    head.style.setProperty("--cat-color", cat.color);
    head.innerHTML = `
      <div class="category-detail-icon">${cat.icon}</div>
      <h1 class="category-detail-title">${cat.name}</h1>
      <p class="category-detail-desc">${cat.description}</p>
    `;
    container.appendChild(head);

    const allPacks = (typeof FLASHCARD_PACKS !== "undefined" ? FLASHCARD_PACKS : []);
    const packs = allPacks.filter((p) => cat.packIds.includes(p.id));

    // Sort by difficulty (debutant first), then by mastery
    const order = { debutant: 0, intermediaire: 1, expert: 2 };
    packs.sort((a, b) => {
      const da = order[a.difficulty] ?? 1, db = order[b.difficulty] ?? 1;
      if (da !== db) return da - db;
      return a.name.localeCompare(b.name, "fr");
    });

    const list = document.createElement("div");
    list.className = "pack-list";
    packs.forEach((p) => list.appendChild(buildPackRow(p)));
    container.appendChild(list);
  }

  function buildPackRow(pack) {
    const total = pack.cards.length;
    const mastery = getMastery(pack.id, total);
    const started = getStarted(pack.id);

    const diffLabels = { debutant: "Débutant", intermediaire: "Intermédiaire", expert: "Avancé" };
    const diffColors = { debutant: "#2ecc71", intermediaire: "#f0c040", expert: "#e74c3c" };
    const dLabel = diffLabels[pack.difficulty] || "Intermédiaire";
    const dColor = diffColors[pack.difficulty] || "#f0c040";

    const row = document.createElement("button");
    row.className = "pack-row";
    row.onclick = () => {
      if (typeof startFlashcardSession === "function") {
        startFlashcardSession(pack.id);
      }
    };

    const badge = mastery >= 100 ? '<span class="pack-row-mastered">⭐</span>' : "";
    const label = mastery >= 100 ? "Maîtrisé" : started ? "Continuer" : "Apprendre";

    row.innerHTML = `
      <div class="pack-row-icon">${pack.icon || "📚"}</div>
      <div class="pack-row-info">
        <div class="pack-row-name">${pack.name}${badge}</div>
        <div class="pack-row-meta">
          <span class="pack-row-diff" style="background:${dColor}33;color:${dColor}">${dLabel}</span>
          <span class="pack-row-cards">${total} cartes</span>
        </div>
        <div class="pack-row-progress"><div class="pack-row-progress-fill" style="width:${mastery}%"></div></div>
      </div>
      <div class="pack-row-cta">${label} →</div>
    `;
    return row;
  }
})();
