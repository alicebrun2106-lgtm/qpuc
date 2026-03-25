// Flashcards — SM-2 via shared SRS module + Difficulty filtering
(function () {
  const SRS_KEY = "qpuc-srs";
  const NEW_CARDS_PER_SESSION = 15;
  let currentFilter = "all";

  function getCardKey(packId, idx) { return packId + ":" + idx; }

  // --- Pack Selection Screen with Difficulty Filter ---
  window.initFlashcards = function () {
    const container = document.getElementById("flashcard-packs");
    container.innerHTML = "";
    const srsData = SRS.getData(SRS_KEY);

    // Count packs per difficulty for badges
    const counts = { all: FLASHCARD_PACKS.length, debutant: 0, intermediaire: 0, expert: 0 };
    FLASHCARD_PACKS.forEach(p => { if (p.difficulty && counts[p.difficulty] !== undefined) counts[p.difficulty]++; });

    // Filter tabs with counts
    const filterBar = document.createElement("div");
    filterBar.className = "fc-filter-bar";
    [
      { key: "all", label: "Tous", emoji: "📚" },
      { key: "debutant", label: "Débutant", emoji: "🟢" },
      { key: "intermediaire", label: "Intermédiaire", emoji: "🟠" },
      { key: "expert", label: "Expert", emoji: "🔴" },
    ].forEach(({ key, label, emoji }) => {
      const btn = document.createElement("button");
      btn.className = "fc-filter-btn" + (currentFilter === key ? " active" : "");
      btn.innerHTML = `${emoji} ${label} <span class="fc-filter-count">${counts[key]}</span>`;
      btn.onclick = () => { currentFilter = key; initFlashcards(); };
      filterBar.appendChild(btn);
    });
    container.appendChild(filterBar);

    // Filter packs
    const packs = currentFilter === "all"
      ? FLASHCARD_PACKS
      : FLASHCARD_PACKS.filter(p => p.difficulty === currentFilter);

    if (packs.length === 0) {
      container.innerHTML += '<p style="text-align:center;color:#aaa;padding:2rem;">Aucun pack dans cette catégorie.</p>';
      showScreen("flashcards");
      return;
    }

    packs.forEach((pack) => {
      const total = pack.cards.length;
      let mastered = 0, due = 0;
      pack.cards.forEach((_, i) => {
        const key = getCardKey(pack.id, i);
        const st = srsData[key];
        if (st) {
          if (st.reps >= 3) mastered++;
          if (st.next <= Date.now()) due++;
        } else {
          due++;
        }
      });

      const pct = Math.round((mastered / total) * 100);
      const diffBadge = pack.difficulty
        ? `<span class="diff-badge diff-${pack.difficulty}">${pack.difficulty === "debutant" ? "Débutant" : pack.difficulty === "intermediaire" ? "Intermédiaire" : "Expert"}</span>`
        : "";

      const card = document.createElement("button");
      card.className = "pack-card";
      card.onclick = () => startFlashcardSession(pack.id);
      card.innerHTML = `
        <div class="pack-icon">${pack.icon}</div>
        <div class="pack-info">
          <div class="pack-name">${pack.name} ${diffBadge}</div>
          <div class="pack-desc">${pack.description}</div>
          <div class="pack-stats">
            <span class="pack-due">${due} à revoir</span>
            <span class="pack-mastered">${mastered}/${total} maîtrisées</span>
          </div>
          <div class="pack-progress-bar"><div class="pack-progress-fill" style="width:${pct}%"></div></div>
        </div>
      `;
      container.appendChild(card);
    });
    showScreen("flashcards");
  };

  // --- Session ---
  let session = {};

  function startFlashcardSession(packId) {
    const pack = FLASHCARD_PACKS.find((p) => p.id === packId);
    if (!pack) return;
    const srsData = SRS.getData(SRS_KEY);

    // Build card list — include reverse cards for reversible packs
    const allCards = pack.cards.map((card, i) => ({ front: card.front, back: card.back, srsKey: getCardKey(packId, i) }));
    if (pack.reversible) {
      pack.cards.forEach((card, i) => {
        if (card.back.length < 60) {
          allCards.push({ front: card.back, back: card.front, srsKey: getCardKey(packId, i) + "_r" });
        }
      });
    }

    const dueCards = [];
    const newCards = [];
    allCards.forEach((card, i) => {
      const st = srsData[card.srsKey];
      if (!st) newCards.push(i);
      else if (st.next <= Date.now()) dueCards.push(i);
    });

    shuffle(dueCards);
    shuffle(newCards);

    const queue = [...dueCards, ...newCards.slice(0, NEW_CARDS_PER_SESSION)];
    if (queue.length === 0) {
      document.getElementById("fc-session-title").textContent = pack.name;
      document.getElementById("fc-card-front").textContent = "Aucune carte à revoir !";
      document.getElementById("fc-card-back").textContent = "Reviens demain.";
      document.getElementById("fc-quality-buttons").style.display = "none";
      document.getElementById("fc-flip-btn").style.display = "none";
      document.getElementById("fc-progress-text").textContent = "0 / 0";
      showScreen("flashcard-session");
      return;
    }

    session = { packId, pack, allCards, queue, index: 0, flipped: false, results: { again: 0, hard: 0, good: 0, easy: 0 } };
    document.getElementById("fc-session-title").textContent = pack.name;
    document.getElementById("fc-quality-buttons").style.display = "none";
    document.getElementById("fc-flip-btn").style.display = "";
    showFlashcard();
    showScreen("flashcard-session");
  }

  function showFlashcard() {
    const { allCards, queue, index } = session;
    const card = allCards[queue[index]];
    document.getElementById("fc-progress-text").textContent = `${index + 1} / ${queue.length}`;
    document.getElementById("fc-card-front").textContent = card.front;
    document.getElementById("fc-card-back").textContent = "";
    document.getElementById("fc-card").classList.remove("flipped");
    session.flipped = false;
    document.getElementById("fc-quality-buttons").style.display = "none";
    document.getElementById("fc-flip-btn").style.display = "";
    if (typeof MEMO !== "undefined") MEMO.hideTip("fc-memo-tip");
  }

  window.flipFlashcard = function () {
    if (session.flipped) return;
    session.flipped = true;
    const card = session.allCards[session.queue[session.index]];
    document.getElementById("fc-card-back").textContent = card.back;
    document.getElementById("fc-card").classList.add("flipped");
    document.getElementById("fc-quality-buttons").style.display = "";
    document.getElementById("fc-flip-btn").style.display = "none";
    // Show memo tip
    if (typeof MEMO !== "undefined") MEMO.showTip("fc-memo-tip", card.front, card.back);
  };

  window.rateFlashcard = function (quality) {
    const { allCards, queue, index } = session;
    const card = allCards[queue[index]];
    const state = SRS.getState(SRS_KEY, card.srsKey);
    const newState = SRS.update(state, quality);
    SRS.save(SRS_KEY, card.srsKey, newState);

    if (quality <= 1) { session.results.again++; session.queue.push(queue[index]); }
    else if (quality === 3) session.results.hard++;
    else if (quality === 4) session.results.good++;
    else session.results.easy++;

    session.index++;
    if (session.index >= session.queue.length) showFlashcardResult();
    else showFlashcard();
  };

  function showFlashcardResult() {
    const { pack, results } = session;
    const total = results.again + results.hard + results.good + results.easy;
    document.getElementById("fc-result-title").textContent = pack.name;
    document.getElementById("fc-result-total").textContent = total;
    document.getElementById("fc-result-again").textContent = results.again;
    document.getElementById("fc-result-hard").textContent = results.hard;
    document.getElementById("fc-result-good").textContent = results.good;
    document.getElementById("fc-result-easy").textContent = results.easy;
    showScreen("flashcard-result");
  }

  window.backToFlashcards = function () { initFlashcards(); };

  // Keyboard
  document.addEventListener("keydown", function (e) {
    const fcScreen = document.getElementById("screen-flashcard-session");
    if (!fcScreen || !fcScreen.classList.contains("active")) return;
    if (e.key === " " || e.key === "Enter") { e.preventDefault(); if (!session.flipped) flipFlashcard(); }
    else if (session.flipped) {
      if (e.key === "1") rateFlashcard(1);
      else if (e.key === "2") rateFlashcard(3);
      else if (e.key === "3") rateFlashcard(4);
      else if (e.key === "4") rateFlashcard(5);
    }
  });

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
})();
