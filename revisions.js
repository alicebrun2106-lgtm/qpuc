/* ===== RÉVISIONS QUOTIDIENNES — Répétition espacée ===== */
(function () {
  "use strict";
  const REV_KEY = "qpuc-revisions";
  const INTERVALS = [1, 3, 7, 14, 30]; // jours
  const DAY_MS = 86400000;

  // --- Storage ---
  function getData() {
    try { return JSON.parse(localStorage.getItem(REV_KEY)) || { cards: [] }; }
    catch (e) { return { cards: [] }; }
  }
  function save(d) { localStorage.setItem(REV_KEY, JSON.stringify(d)); }

  // --- Helpers ---
  function todayStart() {
    const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime();
  }
  function getDueCards() {
    const now = Date.now();
    return getData().cards.filter(function (c) { return c.nextReview <= now; });
  }
  function shuffle(a) {
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function formatNextReview(ts) {
    var diff = Math.ceil((ts - Date.now()) / DAY_MS);
    if (diff <= 0) return "aujourd'hui";
    if (diff === 1) return "demain";
    return "dans " + diff + " jours";
  }

  // ============================================
  // PUBLIC: Ajouter les cartes après une fiche
  // ============================================
  window.addFicheToRevisionPool = function (taskId, taskTitle, flashcards) {
    var data = getData();
    var existing = {};
    data.cards.forEach(function (c) { existing[c.source + "|" + c.q] = true; });
    var tomorrow = todayStart() + DAY_MS;
    flashcards.forEach(function (fc) {
      var key = taskId + "|" + fc.q;
      if (!existing[key]) {
        data.cards.push({
          q: fc.q, r: fc.r,
          source: taskId,
          sourceTitle: taskTitle,
          interval: 1,
          nextReview: tomorrow,
          streak: 0
        });
      }
    });
    save(data);
  };

  // PUBLIC: Nombre de cartes dues (pour badge)
  window.getRevisionsDueCount = function () { return getDueCards().length; };

  // ============================================
  // DASHBOARD
  // ============================================
  window.initRevisions = function () {
    showScreen("revisions");
    renderDashboard();
  };

  function renderDashboard() {
    var data = getData();
    var now = Date.now();
    var dueList = document.getElementById("rev-due-list");
    var masteredList = document.getElementById("rev-mastered-list");
    var summary = document.getElementById("rev-summary");
    var btnStart = document.getElementById("btn-start-revisions");
    var badge = document.getElementById("rev-due-badge");

    // Group by source
    var groups = {};
    data.cards.forEach(function (c) {
      if (!groups[c.sourceTitle]) {
        groups[c.sourceTitle] = { title: c.sourceTitle, due: 0, scheduled: 0, nextDate: Infinity };
      }
      if (c.nextReview <= now) {
        groups[c.sourceTitle].due++;
      } else {
        groups[c.sourceTitle].scheduled++;
        if (c.nextReview < groups[c.sourceTitle].nextDate) groups[c.sourceTitle].nextDate = c.nextReview;
      }
    });
    var packs = Object.values(groups);
    var totalDue = data.cards.filter(function (c) { return c.nextReview <= now; }).length;
    var totalCards = data.cards.length;

    // Badge
    badge.textContent = totalDue;
    badge.style.background = totalDue > 0 ? "var(--orange, #f39c12)" : "var(--green, #2ecc71)";

    // Summary
    if (totalCards === 0) {
      summary.innerHTML = '<div class="rev-empty"><div class="rev-empty-icon">📭</div>' +
        '<div class="rev-empty-text">Pas encore de cartes à réviser.<br>Termine des fiches dans le Programme pour remplir ton pool !</div></div>';
      btnStart.style.display = "none";
      dueList.innerHTML = "";
      masteredList.innerHTML = "";
      return;
    }
    if (totalDue === 0) {
      summary.innerHTML = '<div class="rev-empty"><div class="rev-empty-icon">🎉</div>' +
        '<div class="rev-empty-text">Tout est révisé pour aujourd\'hui !<br>' + totalCards + ' cartes dans ton pool.</div></div>';
      btnStart.style.display = "none";
    } else {
      summary.innerHTML = '<div class="rev-count">' + totalDue + '</div>carte' + (totalDue > 1 ? "s" : "") + ' à revoir aujourd\'hui';
      btnStart.style.display = "";
    }

    // Due packs
    var dueHtml = "";
    packs.forEach(function (p) {
      if (p.due > 0) {
        dueHtml += '<div class="rev-pack-item"><span class="rev-pack-name">' + p.title +
          '</span><span class="rev-pack-count due">' + p.due + ' carte' + (p.due > 1 ? "s" : "") + '</span></div>';
      }
    });
    dueList.innerHTML = dueHtml || '<div class="rev-pack-empty">Aucune carte due</div>';

    // Mastered packs
    var mastHtml = "";
    packs.forEach(function (p) {
      if (p.scheduled > 0) {
        mastHtml += '<div class="rev-pack-item"><span class="rev-pack-name">' + p.title +
          '</span><span class="rev-pack-count scheduled">✓ ' + p.scheduled + ' — ' +
          formatNextReview(p.nextDate) + '</span></div>';
      }
    });
    masteredList.innerHTML = mastHtml || '<div class="rev-pack-empty">—</div>';
  }

  // ============================================
  // REVIEW SESSION
  // ============================================
  var revCards = [], revIndex = 0, revAgainCount = 0;

  window.startRevisionSession = function () {
    var due = getDueCards();
    if (due.length === 0) return;
    revCards = shuffle(due.slice());
    revIndex = 0;
    revAgainCount = 0;
    document.getElementById("rev-fc-total").textContent = revCards.length;
    showScreen("revision-session");
    showRevCard();
  };

  function showRevCard() {
    if (revIndex >= revCards.length) { endRevSession(); return; }
    var c = revCards[revIndex];
    document.getElementById("rev-fc-num").textContent = revIndex + 1;
    document.getElementById("rev-fc-prompt").textContent = "Question";
    document.getElementById("rev-fc-fact").textContent = c.q;
    document.getElementById("rev-fc-reveal").textContent = "";
    document.getElementById("rev-fc-reveal").style.display = "none";
    document.getElementById("rev-fc-buttons").style.display = "";
    document.getElementById("rev-fc-rate").style.display = "none";
  }

  window.revealRevisionCard = function () {
    var c = revCards[revIndex];
    document.getElementById("rev-fc-prompt").textContent = "Réponse";
    document.getElementById("rev-fc-reveal").textContent = c.r;
    document.getElementById("rev-fc-reveal").style.display = "";
    document.getElementById("rev-fc-buttons").style.display = "none";
    document.getElementById("rev-fc-rate").style.display = "";
  };

  window.rateRevisionCard = function (rating) {
    var card = revCards[revIndex];
    var data = getData();
    // Find matching card in storage
    for (var i = 0; i < data.cards.length; i++) {
      if (data.cards[i].source === card.source && data.cards[i].q === card.q) {
        if (rating === "ok") {
          data.cards[i].streak++;
          data.cards[i].interval = INTERVALS[Math.min(data.cards[i].streak, INTERVALS.length - 1)];
        } else {
          data.cards[i].streak = 0;
          data.cards[i].interval = 1;
          revAgainCount++;
          // Push to end of current session too
          revCards.push(card);
          document.getElementById("rev-fc-total").textContent = revCards.length;
        }
        data.cards[i].nextReview = Date.now() + data.cards[i].interval * DAY_MS;
        break;
      }
    }
    save(data);
    revIndex++;
    showRevCard();
  };

  function endRevSession() {
    var total = getDueCards().length === 0 ? revCards.length : revCards.length;
    var unique = revCards.length - revAgainCount;
    var icon = revAgainCount === 0 ? "🏆" : revAgainCount <= 3 ? "👍" : "📖";
    var container = document.getElementById("rev-fc-fact");
    var prompt = document.getElementById("rev-fc-prompt");
    var reveal = document.getElementById("rev-fc-reveal");

    prompt.textContent = "";
    container.innerHTML = '<div class="prog-fc-summary"><div class="prog-fc-summary-icon">' + icon +
      '</div><div class="prog-fc-summary-text">Révision terminée !</div>' +
      '<div class="prog-fc-summary-detail">' + unique + ' cartes révisées' +
      (revAgainCount > 0 ? ", " + revAgainCount + " à revoir" : "") + '</div></div>';
    reveal.style.display = "none";
    document.getElementById("rev-fc-rate").style.display = "none";
    document.getElementById("rev-fc-buttons").innerHTML =
      '<button class="btn-task-done" onclick="backToRevisions()">Continuer ✓</button>';
    document.getElementById("rev-fc-buttons").style.display = "";
  }

  window.backToRevisions = function () {
    // Reset the reveal button for next time
    document.getElementById("rev-fc-buttons").innerHTML =
      '<button class="btn-task-done" onclick="revealRevisionCard()" id="btn-rev-reveal">Voir la réponse</button>';
    showScreen("revisions");
    renderDashboard();
  };

  // ============================================
  // Update badge on home (called externally)
  // ============================================
  window.updateRevisionBadge = function () {
    var due = getDueCards().length;
    var badge = document.getElementById("rev-home-badge");
    if (badge) {
      badge.textContent = due;
      badge.style.display = due > 0 ? "" : "none";
    }
  };
})();
