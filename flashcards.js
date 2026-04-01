// Flashcards — SM-2 via shared SRS module + Difficulty filtering + Progress tracking
(function () {
  const SRS_KEY = "qpuc-srs";
  const TRACK_KEY = "qpuc-tracking";
  const NEW_CARDS_PER_SESSION = 15;
  const MASTERY_THRESHOLD = 80; // % needed to unlock next difficulty
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

  // Get mastery % for a pack based on SRS data (reps >= 3 = mastered)
  function getPackMastery(packId, totalCards) {
    const srsData = SRS.getData(SRS_KEY);
    let mastered = 0;
    for (let i = 0; i < totalCards; i++) {
      const st = srsData[getCardKey(packId, i)];
      if (st && st.reps >= 3) mastered++;
    }
    return totalCards > 0 ? Math.round((mastered / totalCards) * 100) : 0;
  }

  // Get pack activity stats from tracking
  function getPackStats(packId) {
    const data = getTracking();
    const ps = data[packId];
    if (!ps) return { attempts: 0, correct: 0, wrong: 0, successRate: 0, started: false, cardsAttempted: 0 };
    const cardsAttempted = Object.keys(ps.cards).length;
    return {
      attempts: ps.attempts,
      correct: ps.correct,
      wrong: ps.wrong,
      successRate: ps.attempts > 0 ? Math.round((ps.correct / ps.attempts) * 100) : 0,
      started: ps.attempts > 0,
      cardsAttempted,
      lastPlayed: ps.lastPlayed || 0
    };
  }

  // Average mastery across all packs of a given difficulty
  function getDifficultyMastery(difficulty) {
    const packs = FLASHCARD_PACKS.filter(p => p.difficulty === difficulty);
    if (packs.length === 0) return 100;
    let total = 0;
    packs.forEach(p => { total += getPackMastery(p.id, p.cards.length); });
    return Math.round(total / packs.length);
  }

  // Check if a difficulty level is unlocked
  function isDifficultyUnlocked(difficulty) {
    if (difficulty === "debutant" || !difficulty) return true;
    if (difficulty === "intermediaire") return getDifficultyMastery("debutant") >= MASTERY_THRESHOLD;
    if (difficulty === "expert") return getDifficultyMastery("intermediaire") >= MASTERY_THRESHOLD;
    return true;
  }

  // Sort packs: most mastered first, then started but not mastered, then unstarted
  function sortPacksByProgress(packs) {
    return [...packs].sort((a, b) => {
      const mastA = getPackMastery(a.id, a.cards.length);
      const mastB = getPackMastery(b.id, b.cards.length);
      const statsA = getPackStats(a.id);
      const statsB = getPackStats(b.id);

      // Group: started packs first, unstarted last
      if (statsA.started && !statsB.started) return -1;
      if (!statsA.started && statsB.started) return 1;

      // Within started: sort by mastery % descending (most mastered = priority done, show first)
      // But incomplete packs (mastery < 100) that are started get priority over 100% packs
      if (statsA.started && statsB.started) {
        // Packs not yet fully mastered come before fully mastered
        const aComplete = mastA >= 100;
        const bComplete = mastB >= 100;
        if (!aComplete && bComplete) return -1;
        if (aComplete && !bComplete) return 1;
        // Among incomplete: lowest mastery = most urgent = shown first
        if (!aComplete && !bComplete) return mastA - mastB;
        // Among complete: most recently played first
        return (statsB.lastPlayed || 0) - (statsA.lastPlayed || 0);
      }

      // Among unstarted: alphabetical
      return a.name.localeCompare(b.name, "fr");
    });
  }

  // --- Pack Selection Screen with Difficulty Filter ---
  window.initFlashcards = function () {
    const container = document.getElementById("flashcard-packs");
    container.innerHTML = "";
    const srsData = SRS.getData(SRS_KEY);

    // Count packs per difficulty for badges
    const counts = { all: FLASHCARD_PACKS.length, debutant: 0, intermediaire: 0, expert: 0 };
    FLASHCARD_PACKS.forEach(p => { if (p.difficulty && counts[p.difficulty] !== undefined) counts[p.difficulty]++; });

    // Difficulty mastery for lock display
    const debutantMastery = getDifficultyMastery("debutant");
    const intermMastery = getDifficultyMastery("intermediaire");
    const interLocked = !isDifficultyUnlocked("intermediaire");
    const expertLocked = !isDifficultyUnlocked("expert");

    // Filter tabs with counts + lock indicator
    const filterBar = document.createElement("div");
    filterBar.className = "fc-filter-bar";
    [
      { key: "all", label: "Tous", emoji: "📚", locked: false },
      { key: "debutant", label: "Débutant", emoji: "🟢", locked: false },
      { key: "intermediaire", label: "Intermédiaire", emoji: interLocked ? "🔒" : "🟠", locked: interLocked },
      { key: "expert", label: "Expert", emoji: expertLocked ? "🔒" : "🔴", locked: expertLocked },
    ].forEach(({ key, label, emoji, locked }) => {
      const btn = document.createElement("button");
      btn.className = "fc-filter-btn" + (currentFilter === key ? " active" : "") + (locked ? " fc-locked" : "");
      btn.innerHTML = `${emoji} ${label} <span class="fc-filter-count">${counts[key]}</span>`;
      if (locked) {
        btn.onclick = () => {
          showLockMessage(key === "intermediaire"
            ? `Maîtrise 80% des packs Débutant pour débloquer ! (${debutantMastery}%)`
            : `Maîtrise 80% des packs Intermédiaire pour débloquer ! (${intermMastery}%)`);
        };
      } else {
        btn.onclick = () => { currentFilter = key; initFlashcards(); };
      }
      filterBar.appendChild(btn);
    });
    container.appendChild(filterBar);

    // Global progress summary
    const summaryBar = document.createElement("div");
    summaryBar.className = "fc-summary-bar";
    const tracking = getTracking();
    let totalAttempts = 0, totalCorrect = 0, totalPacks = FLASHCARD_PACKS.length, startedPacks = 0;
    let allMastery = 0;
    FLASHCARD_PACKS.forEach(p => {
      const ps = tracking[p.id];
      if (ps && ps.attempts > 0) { startedPacks++; totalAttempts += ps.attempts; totalCorrect += ps.correct; }
      allMastery += getPackMastery(p.id, p.cards.length);
    });
    const avgMastery = totalPacks > 0 ? Math.round(allMastery / totalPacks) : 0;
    const globalRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    summaryBar.innerHTML = `
      <div class="fc-summary-stat">
        <span class="fc-summary-val">${avgMastery}%</span>
        <span class="fc-summary-label">Maîtrise globale</span>
      </div>
      <div class="fc-summary-stat">
        <span class="fc-summary-val">${startedPacks}/${totalPacks}</span>
        <span class="fc-summary-label">Packs commencés</span>
      </div>
      <div class="fc-summary-stat">
        <span class="fc-summary-val">${globalRate}%</span>
        <span class="fc-summary-label">Taux de réussite</span>
      </div>
      <div class="fc-summary-stat">
        <span class="fc-summary-val">${totalAttempts}</span>
        <span class="fc-summary-label">Réponses totales</span>
      </div>
    `;
    container.appendChild(summaryBar);

    // If showing a locked difficulty, show unlock message
    if ((currentFilter === "intermediaire" && interLocked) || (currentFilter === "expert" && expertLocked)) {
      currentFilter = "all";
    }

    // Filter packs
    let packs = currentFilter === "all"
      ? FLASHCARD_PACKS
      : FLASHCARD_PACKS.filter(p => p.difficulty === currentFilter);

    if (packs.length === 0) {
      container.innerHTML += '<p style="text-align:center;color:#aaa;padding:2rem;">Aucun pack dans cette catégorie.</p>';
      showScreen("flashcards");
      return;
    }

    // Sort by progress
    packs = sortPacksByProgress(packs);

    packs.forEach((pack) => {
      const total = pack.cards.length;
      const mastery = getPackMastery(pack.id, total);
      const packStats = getPackStats(pack.id);
      let due = 0;
      let mastered = 0;
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

      const diffBadge = pack.difficulty
        ? `<span class="diff-badge diff-${pack.difficulty}">${pack.difficulty === "debutant" ? "Débutant" : pack.difficulty === "intermediaire" ? "Intermédiaire" : "Expert"}</span>`
        : "";

      // Status badge
      let statusBadge = "";
      if (mastery >= 100) {
        statusBadge = '<span class="pack-status-badge pack-status-complete">✅ Maîtrisé</span>';
      } else if (packStats.started) {
        statusBadge = '<span class="pack-status-badge pack-status-progress">📖 En cours</span>';
      } else {
        statusBadge = '<span class="pack-status-badge pack-status-new">✨ Nouveau</span>';
      }

      // Stats line
      let statsLine = "";
      if (packStats.started) {
        statsLine = `<span class="pack-attempts">${packStats.attempts} rép.</span>
          <span class="pack-success-rate">${packStats.successRate}% réussi</span>
          <span class="pack-cards-seen">${packStats.cardsAttempted}/${total} vues</span>`;
      } else {
        statsLine = `<span class="pack-due">${total} cartes à découvrir</span>`;
      }

      const card = document.createElement("button");
      card.className = "pack-card";
      card.onclick = () => startFlashcardSession(pack.id);
      card.innerHTML = `
        <div class="pack-icon">${pack.icon}</div>
        <div class="pack-info">
          <div class="pack-name">${pack.name} ${diffBadge} ${statusBadge}</div>
          <div class="pack-desc">${pack.description}</div>
          <div class="pack-stats">
            ${statsLine}
          </div>
          <div class="pack-mastery-row">
            <span class="pack-mastery-pct">${mastery}%</span>
            <div class="pack-progress-bar"><div class="pack-progress-fill" style="width:${mastery}%"></div></div>
            <span class="pack-mastered-count">${mastered}/${total}</span>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
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

    // Build card list — include reverse cards for reversible packs
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

    // Track this answer
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
    const packStats = getPackStats(packId);

    document.getElementById("fc-result-title").textContent = pack.name;
    document.getElementById("fc-result-total").textContent = total;
    document.getElementById("fc-result-again").textContent = results.again;
    document.getElementById("fc-result-hard").textContent = results.hard;
    document.getElementById("fc-result-good").textContent = results.good;
    document.getElementById("fc-result-easy").textContent = results.easy;

    // Add mastery info to result screen
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
        <span class="fc-result-mastery-label">Maîtrise du pack</span>
        <div class="pack-progress-bar" style="flex:1"><div class="pack-progress-fill" style="width:${mastery}%"></div></div>
        <span class="fc-result-mastery-pct">${mastery}%</span>
      </div>
      <div class="fc-result-mastery-detail">
        ${packStats.attempts} réponses au total · ${packStats.successRate}% de réussite · ${packStats.cardsAttempted}/${pack.cards.length} cartes vues
      </div>
    `;

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
