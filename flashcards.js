// Flashcards — SM-2 via shared SRS module + Difficulty filtering + Clean progress
(function () {
  const SRS_KEY = "qpuc-srs";
  const TRACK_KEY = "qpuc-tracking";
  const NEW_CARDS_PER_SESSION = 15;
  const MASTERY_THRESHOLD = 80;
  let currentFilter = "all";

  function getCardKey(packId, idx) { return packId + ":" + idx; }

  // --- Tracking System ---
  function getTracking() {
    try { return JSON.parse(localStorage.getItem(TRACK_KEY)) || {}; } catch { return {}; }
  }
  function saveTracking(data) {
    localStorage.setItem(TRACK_KEY, JSON.stringify(data));
  }
  function trackAnswer(packId, cardIdx, quality) {
    const data = getTracking();
    if (!data[packId]) data[packId] = { attempts: 0, correct: 0, wrong: 0, cards: {}, lastPlayed: 0 };
    const pack = data[packId];
    const isCorrect = quality >= 3;
    pack.attempts++;
    if (isCorrect) pack.correct++; else pack.wrong++;
    pack.lastPlayed = Date.now();
    const ck = String(cardIdx);
    if (!pack.cards[ck]) pack.cards[ck] = { attempts: 0, correct: 0, wrong: 0 };
    pack.cards[ck].attempts++;
    if (isCorrect) pack.cards[ck].correct++; else pack.cards[ck].wrong++;
    saveTracking(data);
  }

  function getPackMastery(packId, totalCards) {
    const srsData = SRS.getData(SRS_KEY);
    let mastered = 0;
    for (let i = 0; i < totalCards; i++) {
      const st = srsData[getCardKey(packId, i)];
      if (st && st.reps >= 3) mastered++;
    }
    return totalCards > 0 ? Math.round((mastered / totalCards) * 100) : 0;
  }

  function getPackStats(packId) {
    const data = getTracking();
    const ps = data[packId];
    if (!ps) return { attempts: 0, correct: 0, wrong: 0, successRate: 0, started: false, cardsAttempted: 0, lastPlayed: 0 };
    return {
      attempts: ps.attempts, correct: ps.correct, wrong: ps.wrong,
      successRate: ps.attempts > 0 ? Math.round((ps.correct / ps.attempts) * 100) : 0,
      started: ps.attempts > 0,
      cardsAttempted: Object.keys(ps.cards).length,
      lastPlayed: ps.lastPlayed || 0
    };
  }

  function getDifficultyMastery(difficulty) {
    const packs = FLASHCARD_PACKS.filter(p => p.difficulty === difficulty);
    if (packs.length === 0) return 100;
    let total = 0;
    packs.forEach(p => { total += getPackMastery(p.id, p.cards.length); });
    return Math.round(total / packs.length);
  }

  function isDifficultyUnlocked(difficulty) {
    if (difficulty === "debutant" || !difficulty) return true;
    if (difficulty === "intermediaire") return getDifficultyMastery("debutant") >= MASTERY_THRESHOLD;
    if (difficulty === "expert") return getDifficultyMastery("intermediaire") >= MASTERY_THRESHOLD;
    return true;
  }

  // Get due count for a pack (cards needing review today)
  function getPackDue(packId, totalCards) {
    const srsData = SRS.getData(SRS_KEY);
    let due = 0, newCards = 0;
    for (let i = 0; i < totalCards; i++) {
      const st = srsData[getCardKey(packId, i)];
      if (!st) newCards++;
      else if (st.next <= Date.now()) due++;
    }
    return { due, newCards };
  }

  // --- Build a single pack card (clean version) ---
  function buildPackCard(pack) {
    const total = pack.cards.length;
    const mastery = getPackMastery(pack.id, total);
    const stats = getPackStats(pack.id);
    const { due, newCards } = getPackDue(pack.id, total);
    const srsData = SRS.getData(SRS_KEY);
    let mastered = 0;
    for (let i = 0; i < total; i++) {
      const st = srsData[getCardKey(pack.id, i)];
      if (st && st.reps >= 3) mastered++;
    }

    const card = document.createElement("button");
    card.className = "pack-card";
    card.onclick = () => startFlashcardSession(pack.id);

    // Progress bar color based on mastery
    let barColor = "var(--accent)";
    let barBg = "rgba(255,255,255,0.06)";
    if (mastery >= 100) barColor = "#2ecc71";
    else if (mastery >= 50) barColor = "#f0c040";
    else if (stats.started) barColor = "#3498db";

    // Simple status line — one clean message
    let statusText = "";
    if (mastery >= 100) {
      statusText = '<span class="pack-status-done">✅ Maîtrisé</span>';
    } else if (stats.started) {
      const todoCount = due + Math.min(newCards, NEW_CARDS_PER_SESSION);
      statusText = `<span class="pack-status-todo">${todoCount > 0 ? todoCount + " à revoir" : "À jour !"}</span>`;
    } else {
      statusText = `<span class="pack-status-new">${total} cartes</span>`;
    }

    card.innerHTML = `
      <div class="pack-icon">${pack.icon}</div>
      <div class="pack-info">
        <div class="pack-name">${pack.name}</div>
        <div class="pack-progress-bar"><div class="pack-progress-fill" style="width:${mastery}%;background:${barColor}"></div></div>
        <div class="pack-bottom-row">
          ${statusText}
          <span class="pack-mastery-num">${mastered}/${total}</span>
        </div>
      </div>
    `;
    return card;
  }

  // --- Pack Selection Screen ---
  window.initFlashcards = function () {
    const container = document.getElementById("flashcard-packs");
    container.innerHTML = "";

    // Count packs per difficulty
    const counts = { all: FLASHCARD_PACKS.length, debutant: 0, intermediaire: 0, expert: 0 };
    FLASHCARD_PACKS.forEach(p => { if (p.difficulty && counts[p.difficulty] !== undefined) counts[p.difficulty]++; });

    const debutantMastery = getDifficultyMastery("debutant");
    const intermMastery = getDifficultyMastery("intermediaire");
    const interLocked = !isDifficultyUnlocked("intermediaire");
    const expertLocked = !isDifficultyUnlocked("expert");

    // Filter tabs — clean, no counts
    const filterBar = document.createElement("div");
    filterBar.className = "fc-filter-bar";
    [
      { key: "all", label: "Tous", emoji: "📚", locked: false },
      { key: "debutant", label: "Facile", emoji: "🟢", locked: false },
      { key: "intermediaire", label: "Moyen", emoji: interLocked ? "🔒" : "🟠", locked: interLocked },
      { key: "expert", label: "Difficile", emoji: expertLocked ? "🔒" : "🔴", locked: expertLocked },
    ].forEach(({ key, label, emoji, locked }) => {
      const btn = document.createElement("button");
      btn.className = "fc-filter-btn" + (currentFilter === key ? " active" : "") + (locked ? " fc-locked" : "");
      btn.textContent = `${emoji} ${label}`;
      if (locked) {
        btn.onclick = () => showLockMessage(key === "intermediaire"
          ? `Maîtrise 80% des Faciles pour débloquer ! (${debutantMastery}%)`
          : `Maîtrise 80% des Moyens pour débloquer ! (${intermMastery}%)`);
      } else {
        btn.onclick = () => { currentFilter = key; initFlashcards(); };
      }
      filterBar.appendChild(btn);
    });
    container.appendChild(filterBar);

    // Reset locked filter
    if ((currentFilter === "intermediaire" && interLocked) || (currentFilter === "expert" && expertLocked)) {
      currentFilter = "all";
    }

    // Filter packs
    let packs = currentFilter === "all"
      ? FLASHCARD_PACKS
      : FLASHCARD_PACKS.filter(p => p.difficulty === currentFilter);

    if (packs.length === 0) {
      container.innerHTML += '<p style="text-align:center;color:#aaa;padding:2rem;">Aucun pack ici.</p>';
      showScreen("flashcards");
      return;
    }

    // Split into 3 groups: in progress, mastered, new
    const inProgress = [];
    const done = [];
    const notStarted = [];

    packs.forEach(pack => {
      const mastery = getPackMastery(pack.id, pack.cards.length);
      const stats = getPackStats(pack.id);
      if (mastery >= 100) done.push(pack);
      else if (stats.started) inProgress.push(pack);
      else notStarted.push(pack);
    });

    // Sort in-progress: lowest mastery first (most urgent)
    inProgress.sort((a, b) => getPackMastery(a.id, a.cards.length) - getPackMastery(b.id, b.cards.length));
    // Sort done: most recent first
    done.sort((a, b) => (getPackStats(b.id).lastPlayed || 0) - (getPackStats(a.id).lastPlayed || 0));
    // Sort new: alphabetical
    notStarted.sort((a, b) => a.name.localeCompare(b.name, "fr"));

    // Render sections
    function addSection(title, icon, packList, collapsed) {
      if (packList.length === 0) return;
      const section = document.createElement("div");
      section.className = "fc-section";

      const header = document.createElement("div");
      header.className = "fc-section-header";
      header.innerHTML = `<span>${icon} ${title}</span><span class="fc-section-count">${packList.length}</span>`;
      if (collapsed) {
        header.classList.add("fc-section-collapsible");
        header.onclick = () => {
          section.classList.toggle("fc-section-collapsed");
          header.classList.toggle("fc-section-open");
        };
        section.classList.add("fc-section-collapsed");
      }
      section.appendChild(header);

      const list = document.createElement("div");
      list.className = "fc-section-list";
      packList.forEach(pack => list.appendChild(buildPackCard(pack)));
      section.appendChild(list);

      container.appendChild(section);
    }

    addSection("À continuer", "🔄", inProgress, false);
    addSection("À découvrir", "✨", notStarted, false);
    addSection("Maîtrisés", "✅", done, done.length > 3);

    showScreen("flashcards");
  };

  function showLockMessage(msg) {
    let el = document.getElementById("fc-lock-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "fc-lock-toast";
      el.className = "fc-lock-toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("fc-lock-toast-show");
    setTimeout(() => el.classList.remove("fc-lock-toast-show"), 3000);
  }

  // --- Session ---
  let session = {};

  function startFlashcardSession(packId) {
    const pack = FLASHCARD_PACKS.find((p) => p.id === packId);
    if (!pack) return;
    const srsData = SRS.getData(SRS_KEY);

    const allCards = pack.cards.map((card, i) => ({ front: card.front, back: card.back, memo: card.memo || null, srsKey: getCardKey(packId, i), cardIdx: i }));
    if (pack.reversible) {
      pack.cards.forEach((card, i) => {
        if (card.back.length < 60) {
          allCards.push({ front: card.back, back: card.front, memo: card.memo || null, srsKey: getCardKey(packId, i) + "_r", cardIdx: i });
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
      document.getElementById("fc-card-front").innerHTML = "✅ Toutes les cartes sont à jour !";
      document.getElementById("fc-card-back").textContent = "";
      document.getElementById("fc-quality-buttons").style.display = "none";
      document.getElementById("fc-flip-btn").textContent = "Revoir quand même";
      document.getElementById("fc-flip-btn").style.display = "";
      document.getElementById("fc-flip-btn").onclick = function() {
        const allIndices = allCards.map((_, i) => i);
        shuffle(allIndices);
        session = { packId, pack, allCards, queue: allIndices, index: 0, flipped: false, results: { again: 0, hard: 0, good: 0, easy: 0 } };
        document.getElementById("fc-flip-btn").textContent = "Voir la réponse";
        document.getElementById("fc-flip-btn").onclick = flipFlashcard;
        showFlashcard();
      };
      document.getElementById("fc-progress-text").textContent = `${allCards.length} cartes`;
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
    const memoEl = document.getElementById("fc-memo-tip");
    if (memoEl) {
      if (card.memo) { memoEl.textContent = "🧠 " + card.memo; memoEl.style.display = ""; }
      else if (typeof MEMO !== "undefined") { MEMO.showTip("fc-memo-tip", card.front, card.back); }
      else { memoEl.textContent = ""; memoEl.style.display = "none"; }
    }
  };

  window.rateFlashcard = function (quality) {
    const { allCards, queue, index, packId } = session;
    const card = allCards[queue[index]];
    const state = SRS.getState(SRS_KEY, card.srsKey);
    const newState = SRS.update(state, quality);
    SRS.save(SRS_KEY, card.srsKey, newState);
    trackAnswer(packId, card.cardIdx, quality);

    if (quality <= 1) { session.results.again++; session.queue.push(queue[index]); }
    else if (quality === 3) session.results.hard++;
    else if (quality === 4) session.results.good++;
    else session.results.easy++;

    session.index++;
    if (session.index >= session.queue.length) showFlashcardResult();
    else showFlashcard();
  };

  function showFlashcardResult() {
    const { pack, packId, results } = session;
    const total = results.again + results.hard + results.good + results.easy;
    const mastery = getPackMastery(packId, pack.cards.length);

    document.getElementById("fc-result-title").textContent = pack.name;
    document.getElementById("fc-result-total").textContent = total;
    document.getElementById("fc-result-again").textContent = results.again;
    document.getElementById("fc-result-hard").textContent = results.hard;
    document.getElementById("fc-result-good").textContent = results.good;
    document.getElementById("fc-result-easy").textContent = results.easy;

    let masteryEl = document.getElementById("fc-result-mastery");
    if (!masteryEl) {
      masteryEl = document.createElement("div");
      masteryEl.id = "fc-result-mastery";
      masteryEl.className = "fc-result-mastery";
      const resultContainer = document.querySelector("#screen-flashcard-result .fc-result-stats");
      if (resultContainer) resultContainer.parentNode.insertBefore(masteryEl, resultContainer.nextSibling);
    }
    masteryEl.innerHTML = `
      <div class="fc-result-mastery-bar">
        <span class="fc-result-mastery-label">Maîtrise</span>
        <div class="pack-progress-bar" style="flex:1"><div class="pack-progress-fill" style="width:${mastery}%"></div></div>
        <span class="fc-result-mastery-pct">${mastery}%</span>
      </div>
    `;
    showScreen("flashcard-result");
  }

  window.backToFlashcards = function () { initFlashcards(); };

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
