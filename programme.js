// Programme QPUC - Task-based learning with progress tracking
(function () {
  const PROG_KEY = "qpuc-prog";
  let currentWeek = null;
  let currentDay = null;
  let currentTaskIndex = -1;
  let progQuizIndex = 0;
  let progQuizScore = 0;
  let progQuizQuestions = [];

  // Fiche flashcard state
  let ficheCards = [];
  let ficheCardIndex = 0;
  let ficheAgainCount = 0;
  let ficheCurrentTask = null;

  // --- Progress Storage ---
  function getProgress() {
    try { return JSON.parse(localStorage.getItem(PROG_KEY)) || {}; } catch { return {}; }
  }
  function saveProgress(data) {
    localStorage.setItem(PROG_KEY, JSON.stringify(data));
  }
  function isTaskDone(taskId) {
    const p = getProgress();
    return !!p[taskId];
  }
  function markDone(taskId, extra) {
    const p = getProgress();
    p[taskId] = { done: true, ts: Date.now(), ...(extra || {}) };
    saveProgress(p);
  }
  function getDayProgress(day) {
    const p = getProgress();
    let done = 0;
    day.tasks.forEach((t) => { if (p[t.id]) done++; });
    return { done, total: day.tasks.length };
  }
  function getWeekProgress(week) {
    let done = 0, total = 0;
    week.days.forEach((d) => {
      const dp = getDayProgress(d);
      done += dp.done;
      total += dp.total;
    });
    return { done, total };
  }

  // --- Task type icons & colors ---
  const TASK_META = {
    lecture: { icon: "📖", color: "#3a7bd5", label: "Lecture" },
    fiche: { icon: "🧠", color: "#f0c040", label: "Fiche" },
    quiz: { icon: "❓", color: "#2ecc71", label: "Quiz" },
  };

  // Day accent colors for visual distinction
  const DAY_COLORS = [
    "#e74c3c", // Lundi - red
    "#3a7bd5", // Mardi - blue
    "#2ecc71", // Mercredi - green
    "#9b59b6", // Jeudi - purple
    "#f39c12", // Vendredi - orange
    "#e91e63", // Samedi - pink
    "#00bcd4", // Dimanche - teal
  ];

  // --- Week Selection ---
  window.initProgramme = function () {
    const container = document.getElementById("programme-weeks");
    container.innerHTML = "";

    PROGRAMME_WEEKS.forEach((week) => {
      const wp = getWeekProgress(week);
      const pct = Math.round((wp.done / wp.total) * 100) || 0;
      const card = document.createElement("button");
      card.className = "programme-week-card";
      card.onclick = () => showWeekDetail(week.week);
      card.innerHTML = `
        <div class="pw-header">
          <span class="pw-number">Semaine ${week.week}</span>
          <span class="pw-title">${week.title}</span>
        </div>
        <p class="pw-desc">${week.description}</p>
        <div class="pw-days-preview">${week.days.map((d) => `<span class="pw-day-icon">${d.icon}</span>`).join("")}</div>
        <div class="pw-progress">
          <div class="pw-progress-bar"><div class="pw-progress-fill" style="width:${pct}%"></div></div>
          <span class="pw-progress-text">${wp.done}/${wp.total} tâches</span>
        </div>
      `;
      container.appendChild(card);
    });

    showScreen("programme");
  };

  // --- Week Detail ---
  function showWeekDetail(weekNum) {
    const week = PROGRAMME_WEEKS.find((w) => w.week === weekNum);
    if (!week) return;
    currentWeek = week;

    document.getElementById("prog-week-title").textContent = `Semaine ${week.week} — ${week.title}`;

    // Week progress bar
    const wp = getWeekProgress(week);
    const wpPct = Math.round((wp.done / wp.total) * 100) || 0;
    document.getElementById("prog-week-progress").innerHTML = `
      <div class="prog-wp-bar"><div class="prog-wp-fill" style="width:${wpPct}%"></div></div>
      <span class="prog-wp-text">${wp.done}/${wp.total} tâches complétées (${wpPct}%)</span>
    `;

    // Day cards
    const grid = document.getElementById("prog-days-grid");
    grid.innerHTML = "";
    week.days.forEach((day, dayIndex) => {
      const dp = getDayProgress(day);
      const dpPct = Math.round((dp.done / dp.total) * 100) || 0;
      const isDone = dp.done === dp.total && dp.total > 0;
      const dayColor = DAY_COLORS[dayIndex % DAY_COLORS.length];
      const card = document.createElement("button");
      card.className = "prog-day-card" + (isDone ? " completed" : "");
      card.style.setProperty("--day-color", dayColor);
      card.onclick = () => showDayTasks(day);
      card.innerHTML = `
        <div class="prog-day-top">
          <span class="prog-day-icon">${day.icon}</span>
          <div class="prog-day-info">
            <span class="prog-day-label">${day.label}</span>
            <span class="prog-day-theme">${day.theme}</span>
          </div>
          ${isDone ? '<span class="prog-day-check">✓</span>' : ''}
        </div>
        <div class="prog-day-bar"><div class="prog-day-bar-fill" style="width:${dpPct}%"></div></div>
        <span class="prog-day-bar-text">${dp.done}/${dp.total}</span>
      `;
      grid.appendChild(card);
    });

    showScreen("programme-week");
  }

  // --- Day Tasks (checklist) ---
  function showDayTasks(day) {
    currentDay = day;
    document.getElementById("prog-day-title").textContent = `${day.icon} ${day.label}`;

    const dp = getDayProgress(day);
    document.getElementById("prog-day-progress-small").textContent = `${dp.done}/${dp.total}`;
    document.getElementById("prog-day-objectif").textContent = day.objectif;

    const list = document.getElementById("prog-task-list");
    list.innerHTML = "";

    day.tasks.forEach((task, i) => {
      const done = isTaskDone(task.id);
      const meta = TASK_META[task.type] || TASK_META.quiz;
      const progress = getProgress();
      const taskData = progress[task.id];

      const el = document.createElement("button");
      el.className = "prog-task-item" + (done ? " done" : "");
      el.dataset.type = task.type;
      el.onclick = () => openTask(day, i);

      let scoreHtml = "";
      if (done && task.type === "quiz" && taskData && taskData.score !== undefined) {
        scoreHtml = `<span class="prog-task-score">${taskData.score}/${taskData.total}</span>`;
      }

      el.innerHTML = `
        <div class="prog-task-check ${done ? 'checked' : ''}" style="border-color:${meta.color}">
          ${done ? '✓' : (i + 1)}
        </div>
        <div class="prog-task-body">
          <span class="prog-task-type" style="color:${meta.color}">${meta.icon} ${meta.label}</span>
          <span class="prog-task-title">${task.title}</span>
        </div>
        ${scoreHtml}
        <span class="prog-task-arrow">${done ? '' : '→'}</span>
      `;
      list.appendChild(el);
    });

    showScreen("programme-day");
  }

  // --- Open a Task ---
  function openTask(day, taskIndex) {
    currentDay = day;
    currentTaskIndex = taskIndex;
    const task = day.tasks[taskIndex];

    if (task.type === "lecture") {
      document.getElementById("prog-lecture-title").textContent = task.title;
      document.getElementById("prog-lecture-subtitle").textContent = task.subtitle || "";
      const link = document.getElementById("prog-lecture-url");
      link.href = task.url;
      document.getElementById("prog-lecture-dur").textContent = task.duration || "";
      showScreen("programme-lecture");
    } else if (task.type === "fiche") {
      document.getElementById("prog-fiche-title").textContent = task.title;
      const container = document.getElementById("prog-fiche-items");
      container.innerHTML = "";
      task.items.forEach((item, i) => {
        const card = document.createElement("div");
        card.className = "prog-fiche-card";
        card.style.animationDelay = (i * 0.06) + "s";
        card.innerHTML = `
          <div class="prog-fiche-fact">${item.fact}</div>
          <div class="prog-fiche-detail">${item.detail}</div>
        `;
        container.appendChild(card);
      });
      showScreen("programme-fiche");
    } else if (task.type === "quiz") {
      startProgQuiz(task);
    }
  }

  // --- Mark task done ---
  window.markTaskDone = function () {
    if (currentTaskIndex < 0 || !currentDay) return;
    const task = currentDay.tasks[currentTaskIndex];
    markDone(task.id);
    advanceToNext();
  };

  function advanceToNext() {
    // Go back to day view and auto-scroll might be nice
    showDayTasks(currentDay);
  }

  // --- Programme Quiz ---
  function startProgQuiz(task) {
    progQuizQuestions = shuffle(task.questions);
    progQuizIndex = 0;
    progQuizScore = 0;

    document.getElementById("prog-quiz-title").textContent = task.title;
    document.getElementById("prog-quiz-total").textContent = progQuizQuestions.length;

    showScreen("programme-quiz");
    showProgQuizQuestion();
  }

  function showProgQuizQuestion() {
    if (progQuizIndex >= progQuizQuestions.length) {
      endProgQuiz();
      return;
    }

    const q = progQuizQuestions[progQuizIndex];
    document.getElementById("prog-quiz-num").textContent = progQuizIndex + 1;
    document.getElementById("prog-quiz-question").textContent = q.q;
    document.getElementById("prog-quiz-hint").textContent = q.hint ? `Indice : ${q.hint}` : "";
    document.getElementById("prog-quiz-hint").style.display = "none";
    document.getElementById("prog-quiz-answer").value = "";
    document.getElementById("prog-quiz-answer").focus();
    document.getElementById("prog-quiz-feedback").textContent = "";
    document.getElementById("prog-quiz-feedback").className = "feedback-container";
    document.getElementById("prog-hint-btn").style.display = q.hint ? "" : "none";
  }

  window.showProgHint = function () {
    document.getElementById("prog-quiz-hint").style.display = "";
  };

  window.validateProgQuiz = function () {
    const q = progQuizQuestions[progQuizIndex];
    const answer = document.getElementById("prog-quiz-answer").value.trim();
    if (!answer) return;

    const isCorrect = checkAnswer(answer, q.r);
    const feedback = document.getElementById("prog-quiz-feedback");

    if (isCorrect) {
      progQuizScore++;
      feedback.textContent = "Bonne réponse !";
      feedback.className = "feedback-container correct";
      playSound("correct");
    } else {
      feedback.innerHTML = `Mauvaise réponse. C'était : <strong>${q.r}</strong>`;
      feedback.className = "feedback-container wrong";
      playSound("wrong");
    }

    progQuizIndex++;
    setTimeout(showProgQuizQuestion, 1500);
  };

  window.skipProgQuiz = function () {
    const q = progQuizQuestions[progQuizIndex];
    const feedback = document.getElementById("prog-quiz-feedback");
    feedback.innerHTML = `Passé. La réponse était : <strong>${q.r}</strong>`;
    feedback.className = "feedback-container timeout";
    progQuizIndex++;
    setTimeout(showProgQuizQuestion, 1500);
  };

  function endProgQuiz() {
    const total = progQuizQuestions.length;
    const pct = Math.round((progQuizScore / total) * 100);

    // Mark quiz task done with score
    if (currentTaskIndex >= 0 && currentDay) {
      const task = currentDay.tasks[currentTaskIndex];
      markDone(task.id, { score: progQuizScore, total });
    }

    const icon = pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📖";
    const title = pct >= 80 ? "Excellent !" : pct >= 50 ? "Pas mal !" : "Continue à réviser !";

    document.getElementById("prog-result-icon").textContent = icon;
    document.getElementById("prog-result-title").textContent = title;
    document.getElementById("prog-result-stats").innerHTML = `
      <div class="result-stat-line"><span>Score</span><span class="result-stat-value">${progQuizScore} / ${total}</span></div>
      <div class="result-stat-line"><span>Taux</span><span class="result-stat-value">${pct}%</span></div>
    `;
    if (pct >= 80) playSound("win");
    showScreen("programme-quiz-result");
  }

  // --- Fiche Flashcards ---
  window.startFicheFlashcards = function () {
    if (currentTaskIndex < 0 || !currentDay) return;
    const task = currentDay.tasks[currentTaskIndex];
    ficheCurrentTask = task;

    // Use micro-flashcards if available, otherwise fallback to fact/detail
    if (task.flashcards && task.flashcards.length > 0) {
      ficheCards = shuffle(task.flashcards.map((fc) => ({ q: fc.q, r: fc.r, mode: "qa" })));
    } else {
      ficheCards = shuffle(task.items.map((item) => ({ q: item.fact, r: item.detail, mode: "fact" })));
    }
    ficheCardIndex = 0;
    ficheAgainCount = 0;

    document.getElementById("prog-fiche-fc-title").textContent = task.title;
    document.getElementById("prog-fc-total").textContent = ficheCards.length;

    // Reset le container (peut avoir été remplacé par le résumé)
    document.querySelector("#screen-programme-fiche-fc .prog-fc-card-container").innerHTML =
      '<div class="prog-fc-prompt" id="prog-fc-prompt"></div>' +
      '<div class="prog-fc-fact" id="prog-fc-fact"></div>' +
      '<div class="prog-fc-reveal" id="prog-fc-reveal"></div>';
    document.getElementById("prog-fc-buttons").innerHTML =
      '<button class="btn-task-done" onclick="revealFicheCard()" id="btn-fc-reveal">Voir la réponse</button>';

    showScreen("programme-fiche-fc");
    showFicheCard();
  };

  function showFicheCard() {
    if (ficheCardIndex >= ficheCards.length) {
      endFicheFlashcards();
      return;
    }
    const card = ficheCards[ficheCardIndex];
    document.getElementById("prog-fc-num").textContent = ficheCardIndex + 1;
    document.getElementById("prog-fc-fact").textContent = card.q;
    document.getElementById("prog-fc-reveal").textContent = "";
    document.getElementById("prog-fc-prompt").textContent = card.mode === "qa" ? "Question" : "Que retiens-tu ?";
    document.getElementById("btn-fc-reveal").style.display = "";
    document.getElementById("prog-fc-buttons").style.display = "";
    document.getElementById("prog-fc-rate").style.display = "none";
  }

  window.revealFicheCard = function () {
    const card = ficheCards[ficheCardIndex];
    document.getElementById("prog-fc-reveal").textContent = card.r;
    document.getElementById("prog-fc-prompt").textContent = card.mode === "qa" ? "Réponse" : "Tu le savais ?";
    document.getElementById("btn-fc-reveal").style.display = "none";
    document.getElementById("prog-fc-buttons").style.display = "none";
    document.getElementById("prog-fc-rate").style.display = "";
  };

  window.rateFicheCard = function (rating) {
    if (rating === "again") {
      ficheAgainCount++;
      // Put card back at end for another try
      ficheCards.push(ficheCards[ficheCardIndex]);
      document.getElementById("prog-fc-total").textContent = ficheCards.length;
    }
    ficheCardIndex++;
    showFicheCard();
  };

  function endFicheFlashcards() {
    // Mark fiche as done
    if (ficheCurrentTask) {
      markDone(ficheCurrentTask.id, { reviewed: ficheCards.length, retries: ficheAgainCount });
      // Ajouter les cartes au pool de révision quotidienne
      if (ficheCurrentTask.flashcards && typeof addFicheToRevisionPool === "function") {
        addFicheToRevisionPool(ficheCurrentTask.id, ficheCurrentTask.title, ficheCurrentTask.flashcards);
      }
    }

    const total = ficheCurrentTask ? ficheCurrentTask.items.length : ficheCards.length;
    const icon = ficheAgainCount === 0 ? "🏆" : ficheAgainCount <= 2 ? "👍" : "📖";
    const title = ficheAgainCount === 0 ? "Parfait ! Tout retenu !" : ficheAgainCount <= 2 ? "Bien joué !" : "Continue de réviser !";

    // Show summary in the flashcard screen
    const container = document.querySelector("#screen-programme-fiche-fc .prog-fc-card-container");
    container.innerHTML = `
      <div class="prog-fc-summary">
        <div class="prog-fc-summary-icon">${icon}</div>
        <div class="prog-fc-summary-text">${title}</div>
        <div class="prog-fc-summary-detail">${total} faits révisés${ficheAgainCount > 0 ? `, ${ficheAgainCount} à revoir` : ''}</div>
      </div>
    `;
    document.getElementById("prog-fc-buttons").innerHTML = `
      <button class="btn-task-done" onclick="backToDay()">Continuer ✓</button>
    `;
    document.getElementById("prog-fc-buttons").style.display = "";
    document.getElementById("prog-fc-rate").style.display = "none";
  }

  window.backToFicheRead = function () {
    // Go back to the fiche reading screen
    if (currentDay && currentTaskIndex >= 0) {
      openTask(currentDay, currentTaskIndex);
    }
  };

  // --- Navigation ---
  window.backToProgramme = function () {
    initProgramme();
  };

  window.backToWeek = function () {
    if (currentWeek) showWeekDetail(currentWeek.week);
    else initProgramme();
  };

  window.backToDay = function () {
    if (currentDay) showDayTasks(currentDay);
    else backToWeek();
  };

  // Keyboard: Enter to validate in quiz
  document.addEventListener("keydown", function (e) {
    const quizScreen = document.getElementById("screen-programme-quiz");
    if (!quizScreen || !quizScreen.classList.contains("active")) return;
    if (e.key === "Enter") {
      e.preventDefault();
      validateProgQuiz();
    }
  });

  // Shuffle util
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
})();
