// Flashcards QPUC - SM-2 Spaced Repetition
(function () {
  const SRS_KEY = "qpuc-srs";
  const NEW_CARDS_PER_SESSION = 15;

  // --- SM-2 Algorithm ---
  function getSrsData() {
    try { return JSON.parse(localStorage.getItem(SRS_KEY)) || {}; } catch { return {}; }
  }
  function saveSrsData(data) {
    localStorage.setItem(SRS_KEY, JSON.stringify(data));
  }
  function getCardKey(packId, idx) { return packId + ":" + idx; }

  function getCardState(srs, key) {
    return srs[key] || { ef: 2.5, interval: 0, reps: 0, next: 0 };
  }

  function sm2Update(state, quality) {
    // quality: 1=again, 3=hard, 4=good, 5=easy
    const s = { ...state };
    if (quality >= 3) {
      if (s.reps === 0) s.interval = 1;
      else if (s.reps === 1) s.interval = 6;
      else s.interval = Math.round(s.interval * s.ef);
      s.reps += 1;
    } else {
      s.reps = 0;
      s.interval = 0; // review again this session
    }
    s.ef = Math.max(1.3, s.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    s.next = Date.now() + s.interval * 86400000;
    return s;
  }

  // --- Pack Selection Screen ---
  window.initFlashcards = function () {
    const container = document.getElementById("flashcard-packs");
    container.innerHTML = "";
    const srs = getSrsData();

    FLASHCARD_PACKS.forEach((pack) => {
      const total = pack.cards.length;
      let mastered = 0, due = 0;
      pack.cards.forEach((_, i) => {
        const key = getCardKey(pack.id, i);
        const st = srs[key];
        if (st) {
          if (st.reps >= 3) mastered++;
          if (st.next <= Date.now()) due++;
        } else {
          due++; // new = due
        }
      });

      const pct = Math.round((mastered / total) * 100);
      const card = document.createElement("button");
      card.className = "pack-card";
      card.onclick = () => startFlashcardSession(pack.id);
      card.innerHTML = `
        <div class="pack-icon">${pack.icon}</div>
        <div class="pack-info">
          <div class="pack-name">${pack.name}</div>
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
    const srs = getSrsData();

    // Build queue: due cards first, then new cards
    const dueCards = [];
    const newCards = [];
    pack.cards.forEach((card, i) => {
      const key = getCardKey(packId, i);
      const st = srs[key];
      if (!st) newCards.push(i);
      else if (st.next <= Date.now()) dueCards.push(i);
    });

    // Shuffle
    shuffle(dueCards);
    shuffle(newCards);

    const queue = [...dueCards, ...newCards.slice(0, NEW_CARDS_PER_SESSION)];
    if (queue.length === 0) {
      // All cards are scheduled for later
      document.getElementById("fc-session-title").textContent = pack.name;
      document.getElementById("fc-card-front").textContent = "Aucune carte à revoir pour le moment !";
      document.getElementById("fc-card-back").textContent = "Revenez demain.";
      document.getElementById("fc-quality-buttons").style.display = "none";
      document.getElementById("fc-flip-btn").style.display = "none";
      document.getElementById("fc-progress-text").textContent = "0 / 0";
      showScreen("flashcard-session");
      return;
    }

    session = {
      packId,
      pack,
      queue,
      index: 0,
      flipped: false,
      results: { again: 0, hard: 0, good: 0, easy: 0 },
    };

    document.getElementById("fc-session-title").textContent = pack.name;
    document.getElementById("fc-quality-buttons").style.display = "none";
    document.getElementById("fc-flip-btn").style.display = "";
    showFlashcard();
    showScreen("flashcard-session");
  }

  function showFlashcard() {
    const { pack, queue, index } = session;
    const cardIdx = queue[index];
    const card = pack.cards[cardIdx];

    document.getElementById("fc-progress-text").textContent = `${index + 1} / ${queue.length}`;
    document.getElementById("fc-card-front").textContent = card.front;
    document.getElementById("fc-card-back").textContent = "";

    const cardEl = document.getElementById("fc-card");
    cardEl.classList.remove("flipped");
    session.flipped = false;

    document.getElementById("fc-quality-buttons").style.display = "none";
    document.getElementById("fc-flip-btn").style.display = "";
  }

  window.flipFlashcard = function () {
    if (session.flipped) return;
    session.flipped = true;
    // Mettre la réponse au moment du flip seulement
    const cardIdx = session.queue[session.index];
    const card = session.pack.cards[cardIdx];
    document.getElementById("fc-card-back").textContent = card.back;
    document.getElementById("fc-card").classList.add("flipped");
    document.getElementById("fc-quality-buttons").style.display = "";
    document.getElementById("fc-flip-btn").style.display = "none";
  };

  window.rateFlashcard = function (quality) {
    const { packId, queue, index } = session;
    const cardIdx = queue[index];
    const key = getCardKey(packId, cardIdx);
    const srs = getSrsData();
    const state = getCardState(srs, key);
    const newState = sm2Update(state, quality);
    srs[key] = newState;
    saveSrsData(srs);

    // Track results
    if (quality <= 1) session.results.again++;
    else if (quality === 3) session.results.hard++;
    else if (quality === 4) session.results.good++;
    else session.results.easy++;

    // If "again", re-add to queue
    if (quality <= 1) {
      session.queue.push(cardIdx);
    }

    session.index++;
    if (session.index >= session.queue.length) {
      showFlashcardResult();
    } else {
      showFlashcard();
    }
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

  window.backToFlashcards = function () {
    initFlashcards();
  };

  // --- Keyboard support ---
  document.addEventListener("keydown", function (e) {
    const fcScreen = document.getElementById("screen-flashcard-session");
    if (!fcScreen || !fcScreen.classList.contains("active")) return;

    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (!session.flipped) flipFlashcard();
    } else if (session.flipped) {
      if (e.key === "1") rateFlashcard(1);
      else if (e.key === "2") rateFlashcard(3);
      else if (e.key === "3") rateFlashcard(4);
      else if (e.key === "4") rateFlashcard(5);
    }
  });

  // --- Utils ---
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
})();
