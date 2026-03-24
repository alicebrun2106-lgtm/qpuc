// ============================================
// QPUC - Questions pour un Champion - App Logic
// ============================================

// --- State ---
let currentMode = null;
let stats = JSON.parse(localStorage.getItem("qpuc-stats") || '{"games":0,"correct":0,"total":0}');

// 9 Points Gagnants state
let npScore = 0;
let npQuestionIndex = 0;
let npQuestions = [];
let npTimer = null;
let npTimeLeft = 0;

// 4 à la Suite state
let qsThemeIndex = 0;
let qsQuestionIndex = 0;
let qsStreak = 0;
let qsThemesDone = 0;
let qsThemes = [];
let qsTimer = null;
let qsTimeLeft = 0;

// Face à Face state
let ffScore = 0;
let ffQuestionIndex = 0;
let ffCurrentIndice = 0;
let ffQuestions = [];
let ffAnswered = false;

// --- Utilities ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function checkAnswer(userAnswer, correctAnswer) {
  const u = normalize(userAnswer);
  const c = normalize(correctAnswer);
  if (!u) return false;

  // Exact match
  if (u === c) return true;

  // Remove common articles for comparison
  const stripArticles = (s) =>
    s.replace(/^(le |la |les |l |un |une |des |du |de la |de l )/g, "").trim();
  const us = stripArticles(u);
  const cs = stripArticles(c);
  if (us === cs) return true;

  // Check if user answer contains the key part
  if (cs.length > 3 && u.includes(cs)) return true;
  if (us.length > 3 && cs.includes(us)) return true;

  // Handle parenthetical alternatives: "Héraclès (Hercule)"
  const altMatch = correctAnswer.match(/\(([^)]+)\)/);
  if (altMatch) {
    const alt = normalize(altMatch[1]);
    const altS = stripArticles(alt);
    if (u === alt || us === altS || u.includes(alt) || alt.includes(us)) return true;
  }

  // Handle "X / Y" alternatives
  if (correctAnswer.includes("/")) {
    const parts = correctAnswer.split("/").map((p) => normalize(p.trim()));
    for (const part of parts) {
      const partS = stripArticles(part);
      if (u === part || us === partS || (partS.length > 3 && u.includes(partS))) return true;
    }
  }

  // Levenshtein for typo tolerance (only for longer answers)
  if (cs.length >= 5) {
    const dist = levenshtein(us, cs);
    if (dist <= Math.floor(cs.length * 0.2)) return true;
  }

  return false;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
  document.getElementById("screen-" + id).classList.add("active");
}

function updateStats() {
  document.getElementById("stat-games").textContent = stats.games;
  document.getElementById("stat-correct").textContent = stats.correct;
  document.getElementById("stat-rate").textContent =
    stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) + "%" : "-";
  localStorage.setItem("qpuc-stats", JSON.stringify(stats));
}

function playSound(type) {
  // Simple audio feedback using Web Audio API
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.connect(gain);
  gain.connect(ctx.destination);
  gain.gain.value = 0.15;

  if (type === "correct") {
    osc.frequency.value = 880;
    osc.type = "sine";
    osc.start();
    setTimeout(() => { osc.frequency.value = 1100; }, 100);
    setTimeout(() => { osc.stop(); ctx.close(); }, 200);
  } else if (type === "wrong") {
    osc.frequency.value = 200;
    osc.type = "square";
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, 300);
  } else if (type === "tick") {
    osc.frequency.value = 600;
    osc.type = "sine";
    osc.start();
    setTimeout(() => { osc.stop(); ctx.close(); }, 50);
  } else if (type === "win") {
    osc.frequency.value = 523;
    osc.type = "sine";
    osc.start();
    setTimeout(() => { osc.frequency.value = 659; }, 150);
    setTimeout(() => { osc.frequency.value = 784; }, 300);
    setTimeout(() => { osc.frequency.value = 1047; }, 450);
    setTimeout(() => { osc.stop(); ctx.close(); }, 600);
  }
}

// --- Navigation ---
function goHome() {
  clearTimers();
  showScreen("home");
  updateStats();
  if (typeof updateRevisionBadge === "function") updateRevisionBadge();
}

function clearTimers() {
  if (npTimer) { clearInterval(npTimer); npTimer = null; }
  if (qsTimer) { clearInterval(qsTimer); qsTimer = null; }
}

function startGame(mode) {
  currentMode = mode;
  if (mode === "neufPoints") initNeufPoints();
  else if (mode === "quatreALaSuite") initQuatre();
  else if (mode === "faceAFace") initFaceAFace();
}

function replay() {
  if (currentMode) startGame(currentMode);
}

// ============================================
// 9 POINTS GAGNANTS
// ============================================
function initNeufPoints() {
  npScore = 0;
  npQuestionIndex = 0;

  // Build question list: mix of difficulties
  const faciles = shuffle(QUESTIONS.neufPoints.faciles).slice(0, 12);
  const moyennes = shuffle(QUESTIONS.neufPoints.moyennes).slice(0, 10);
  const difficiles = shuffle(QUESTIONS.neufPoints.difficiles).slice(0, 8);

  npQuestions = [];
  faciles.forEach((q) => npQuestions.push({ ...q, pts: 1, diff: "easy" }));
  moyennes.forEach((q) => npQuestions.push({ ...q, pts: 2, diff: "medium" }));
  difficiles.forEach((q) => npQuestions.push({ ...q, pts: 3, diff: "hard" }));

  // Shuffle within difficulty tiers then interleave
  npQuestions = [
    ...shuffle(faciles).map((q) => ({ ...q, pts: 1, diff: "easy" })),
    ...shuffle(moyennes).map((q) => ({ ...q, pts: 2, diff: "medium" })),
    ...shuffle(difficiles).map((q) => ({ ...q, pts: 3, diff: "hard" })),
  ];

  document.getElementById("np-score").textContent = "0";
  document.getElementById("np-progress").style.width = "0%";
  document.getElementById("np-history").innerHTML = "";
  document.getElementById("np-feedback").textContent = "";
  document.getElementById("np-feedback").className = "feedback-container";

  showScreen("neufPoints");
  showNpQuestion();
}

function showNpQuestion() {
  if (npScore >= 9) {
    endNeufPoints(true);
    return;
  }
  if (npQuestionIndex >= npQuestions.length) {
    endNeufPoints(false);
    return;
  }

  const q = npQuestions[npQuestionIndex];
  document.getElementById("np-question").textContent = q.q;
  document.getElementById("np-qnum").textContent = `Question ${npQuestionIndex + 1}`;
  document.getElementById("np-answer").value = "";
  document.getElementById("np-answer").focus();
  document.getElementById("np-feedback").textContent = "";
  document.getElementById("np-feedback").className = "feedback-container";

  // Difficulty indicator
  const diffEl = document.getElementById("np-difficulty");
  diffEl.className = "difficulty-indicator";
  if (q.diff === "medium") {
    diffEl.className += " medium";
    diffEl.querySelector(".diff-text").textContent = "2 points";
  } else if (q.diff === "hard") {
    diffEl.className += " hard";
    diffEl.querySelector(".diff-text").textContent = "3 points";
  } else {
    diffEl.querySelector(".diff-text").textContent = "1 point";
  }

  // Timer
  const timeLimit = q.diff === "easy" ? 15 : q.diff === "medium" ? 12 : 10;
  startNpTimer(timeLimit);
}

function startNpTimer(seconds) {
  if (npTimer) clearInterval(npTimer);
  npTimeLeft = seconds * 10; // tenths of seconds
  const total = npTimeLeft;
  const timerEl = document.getElementById("np-timer");

  npTimer = setInterval(() => {
    npTimeLeft--;
    const pct = (npTimeLeft / total) * 100;
    timerEl.style.width = pct + "%";
    timerEl.className = "timer-fill";
    if (pct < 25) timerEl.classList.add("danger");
    else if (pct < 50) timerEl.classList.add("warning");

    if (npTimeLeft <= 0) {
      clearInterval(npTimer);
      npTimer = null;
      timeoutNeufPoints();
    }
  }, 100);
}

function validateNeufPoints() {
  if (npTimer) { clearInterval(npTimer); npTimer = null; }

  const q = npQuestions[npQuestionIndex];
  const answer = document.getElementById("np-answer").value.trim();
  const isCorrect = checkAnswer(answer, q.r);
  const feedback = document.getElementById("np-feedback");

  if (isCorrect) {
    npScore += q.pts;
    stats.correct++;
    feedback.textContent = `Bonne réponse ! +${q.pts} point${q.pts > 1 ? "s" : ""}`;
    feedback.className = "feedback-container correct";
    playSound("correct");
    addNpHistory(q.q, true);
  } else {
    feedback.innerHTML = `Mauvaise réponse. La bonne réponse était : <strong>${q.r}</strong>`;
    feedback.className = "feedback-container wrong";
    playSound("wrong");
    addNpHistory(q.q, false);
  }

  stats.total++;
  updateStats();

  document.getElementById("np-score").textContent = npScore;
  document.getElementById("np-progress").style.width = Math.min((npScore / 9) * 100, 100) + "%";

  npQuestionIndex++;
  setTimeout(showNpQuestion, 1500);
}

function skipNeufPoints() {
  if (npTimer) { clearInterval(npTimer); npTimer = null; }
  const q = npQuestions[npQuestionIndex];
  const feedback = document.getElementById("np-feedback");
  feedback.innerHTML = `Passé. La réponse était : <strong>${q.r}</strong>`;
  feedback.className = "feedback-container timeout";
  stats.total++;
  addNpHistory(q.q, false);
  npQuestionIndex++;
  setTimeout(showNpQuestion, 1500);
}

function timeoutNeufPoints() {
  const q = npQuestions[npQuestionIndex];
  const feedback = document.getElementById("np-feedback");
  feedback.innerHTML = `Temps écoulé ! La réponse était : <strong>${q.r}</strong>`;
  feedback.className = "feedback-container timeout";
  playSound("wrong");
  stats.total++;
  addNpHistory(q.q, false);
  npQuestionIndex++;
  setTimeout(showNpQuestion, 1500);
}

function addNpHistory(question, correct) {
  const history = document.getElementById("np-history");
  const div = document.createElement("div");
  div.className = "history-item " + (correct ? "correct" : "wrong");
  div.innerHTML = `<div class="history-dot"></div><span>${question}</span>`;
  history.prepend(div);
}

function endNeufPoints(won) {
  clearTimers();
  stats.games++;
  updateStats();

  const icon = won ? "🏆" : "😔";
  const title = won ? "Qualifié !" : "Éliminé...";
  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-stats").innerHTML = `
    <div class="result-stat-line"><span>Score</span><span class="result-stat-value">${npScore} / 9</span></div>
    <div class="result-stat-line"><span>Questions posées</span><span class="result-stat-value">${npQuestionIndex}</span></div>
  `;
  if (won) playSound("win");
  showScreen("result");
}

// Enter key handler for 9 Points
document.getElementById("np-answer").addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateNeufPoints();
});

// ============================================
// 4 À LA SUITE
// ============================================
function initQuatre() {
  qsThemes = shuffle(QUESTIONS.quatreALaSuite);
  qsThemeIndex = 0;
  qsThemesDone = 0;
  document.getElementById("qs-themes-done").textContent = "0";
  document.getElementById("qs-feedback").textContent = "";
  document.getElementById("qs-feedback").className = "feedback-container";

  showScreen("quatreALaSuite");
  startNewTheme();
}

function startNewTheme() {
  if (qsThemeIndex >= qsThemes.length) {
    endQuatre();
    return;
  }

  const theme = qsThemes[qsThemeIndex];
  qsQuestionIndex = 0;
  qsStreak = 0;

  document.getElementById("qs-theme").textContent = theme.theme;
  document.getElementById("qs-streak").textContent = "0";
  updateStreakDots();
  document.getElementById("qs-feedback").textContent = "";
  document.getElementById("qs-feedback").className = "feedback-container";

  showQsQuestion();
}

function showQsQuestion() {
  const theme = qsThemes[qsThemeIndex];

  if (qsStreak >= 4) {
    // Theme completed!
    qsThemesDone++;
    document.getElementById("qs-themes-done").textContent = qsThemesDone;
    playSound("win");

    const feedback = document.getElementById("qs-feedback");
    feedback.textContent = "4 à la suite ! Thème complété !";
    feedback.className = "feedback-container correct";

    qsThemeIndex++;
    setTimeout(startNewTheme, 2000);
    return;
  }

  if (qsQuestionIndex >= theme.questions.length) {
    // Ran out of questions for this theme
    const feedback = document.getElementById("qs-feedback");
    feedback.textContent = "Thème terminé sans 4 à la suite.";
    feedback.className = "feedback-container timeout";

    qsThemeIndex++;
    setTimeout(startNewTheme, 2000);
    return;
  }

  const q = theme.questions[qsQuestionIndex];
  document.getElementById("qs-question").textContent = q.q;
  document.getElementById("qs-answer").value = "";
  document.getElementById("qs-answer").focus();
  document.getElementById("qs-feedback").textContent = "";
  document.getElementById("qs-feedback").className = "feedback-container";

  startQsTimer(15);
}

function startQsTimer(seconds) {
  if (qsTimer) clearInterval(qsTimer);
  qsTimeLeft = seconds * 10;
  const total = qsTimeLeft;
  const timerEl = document.getElementById("qs-timer");

  qsTimer = setInterval(() => {
    qsTimeLeft--;
    const pct = (qsTimeLeft / total) * 100;
    timerEl.style.width = pct + "%";
    timerEl.className = "timer-fill";
    if (pct < 25) timerEl.classList.add("danger");
    else if (pct < 50) timerEl.classList.add("warning");

    if (qsTimeLeft <= 0) {
      clearInterval(qsTimer);
      qsTimer = null;
      timeoutQuatre();
    }
  }, 100);
}

function validateQuatre() {
  if (qsTimer) { clearInterval(qsTimer); qsTimer = null; }

  const theme = qsThemes[qsThemeIndex];
  const q = theme.questions[qsQuestionIndex];
  const answer = document.getElementById("qs-answer").value.trim();
  const isCorrect = checkAnswer(answer, q.r);
  const feedback = document.getElementById("qs-feedback");

  if (isCorrect) {
    qsStreak++;
    stats.correct++;
    feedback.textContent = `Bonne réponse !`;
    feedback.className = "feedback-container correct";
    playSound("correct");
  } else {
    feedback.innerHTML = `Mauvaise réponse ! Retour à zéro. La réponse était : <strong>${q.r}</strong>`;
    feedback.className = "feedback-container wrong";
    playSound("wrong");
    qsStreak = 0;
  }

  stats.total++;
  updateStats();

  document.getElementById("qs-streak").textContent = qsStreak;
  updateStreakDots();

  qsQuestionIndex++;
  setTimeout(showQsQuestion, 1500);
}

function skipQuatre() {
  if (qsTimer) { clearInterval(qsTimer); qsTimer = null; }
  const theme = qsThemes[qsThemeIndex];
  const q = theme.questions[qsQuestionIndex];
  const feedback = document.getElementById("qs-feedback");
  feedback.innerHTML = `Passé. Retour à zéro. La réponse était : <strong>${q.r}</strong>`;
  feedback.className = "feedback-container timeout";
  qsStreak = 0;
  stats.total++;
  document.getElementById("qs-streak").textContent = "0";
  updateStreakDots();
  qsQuestionIndex++;
  setTimeout(showQsQuestion, 1500);
}

function timeoutQuatre() {
  const theme = qsThemes[qsThemeIndex];
  const q = theme.questions[qsQuestionIndex];
  const feedback = document.getElementById("qs-feedback");
  feedback.innerHTML = `Temps écoulé ! Retour à zéro. La réponse était : <strong>${q.r}</strong>`;
  feedback.className = "feedback-container timeout";
  playSound("wrong");
  qsStreak = 0;
  stats.total++;
  document.getElementById("qs-streak").textContent = "0";
  updateStreakDots();
  qsQuestionIndex++;
  setTimeout(showQsQuestion, 1500);
}

function updateStreakDots() {
  const dots = document.querySelectorAll("#qs-dots .streak-dot");
  dots.forEach((dot, i) => {
    dot.className = "streak-dot";
    if (i < qsStreak) dot.classList.add("filled");
    else if (i === qsStreak) dot.classList.add("active");
  });
}

function endQuatre() {
  clearTimers();
  stats.games++;
  updateStats();

  const icon = qsThemesDone >= 3 ? "🏆" : qsThemesDone >= 1 ? "👍" : "😔";
  const title = qsThemesDone >= 3 ? "Excellent !" : qsThemesDone >= 1 ? "Pas mal !" : "Dommage...";
  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-stats").innerHTML = `
    <div class="result-stat-line"><span>Thèmes complétés</span><span class="result-stat-value">${qsThemesDone} / ${qsThemes.length}</span></div>
  `;
  if (qsThemesDone >= 3) playSound("win");
  showScreen("result");
}

document.getElementById("qs-answer").addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateQuatre();
});

// ============================================
// FACE À FACE
// ============================================
function initFaceAFace() {
  ffScore = 0;
  ffQuestionIndex = 0;
  ffQuestions = shuffle(QUESTIONS.faceAFace);

  document.getElementById("ff-score").textContent = "0";
  document.getElementById("ff-progress").style.width = "0%";
  document.getElementById("ff-feedback").textContent = "";
  document.getElementById("ff-feedback").className = "feedback-container";

  showScreen("faceAFace");
  showFfQuestion();
}

function showFfQuestion() {
  if (ffScore >= 15) {
    endFaceAFace(true);
    return;
  }
  if (ffQuestionIndex >= ffQuestions.length) {
    endFaceAFace(false);
    return;
  }

  const q = ffQuestions[ffQuestionIndex];
  ffCurrentIndice = 0;
  ffAnswered = false;

  document.getElementById("ff-theme").textContent = q.theme;
  document.getElementById("ff-answer").value = "";
  document.getElementById("ff-answer").focus();
  document.getElementById("ff-feedback").textContent = "";
  document.getElementById("ff-feedback").className = "feedback-container";
  document.getElementById("ff-next").style.display = "";
  document.getElementById("ff-validate").disabled = false;

  // Show first indice
  document.getElementById("ff-indices").innerHTML = "";
  addIndice(0);
  updateFfDots();
}

function addIndice(index) {
  const q = ffQuestions[ffQuestionIndex];
  if (index >= q.indices.length) return;

  const div = document.createElement("div");
  div.className = "ff-indice";
  div.innerHTML = `<span class="indice-num">${index + 1}</span>${q.indices[index]}`;
  document.getElementById("ff-indices").appendChild(div);
}

function updateFfDots() {
  const points = [4, 3, 2, 1];
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById("ff-dot-" + points[i]);
    dot.className = "ff-point-dot";
    if (i === ffCurrentIndice) dot.classList.add("active");
    else if (i < ffCurrentIndice) dot.classList.add("past");
  }
}

function nextIndice() {
  if (ffAnswered) return;
  if (ffCurrentIndice >= 3) return; // Already at last indice

  ffCurrentIndice++;
  addIndice(ffCurrentIndice);
  updateFfDots();
  document.getElementById("ff-answer").focus();

  if (ffCurrentIndice >= 3) {
    document.getElementById("ff-next").style.display = "none";
  }
}

function validateFaceAFace() {
  if (ffAnswered) return;

  const q = ffQuestions[ffQuestionIndex];
  const answer = document.getElementById("ff-answer").value.trim();

  if (!answer) return;

  const isCorrect = checkAnswer(answer, q.reponse);
  const feedback = document.getElementById("ff-feedback");
  const pointsGained = [4, 3, 2, 1][ffCurrentIndice];

  ffAnswered = true;
  document.getElementById("ff-next").style.display = "none";

  if (isCorrect) {
    ffScore += pointsGained;
    stats.correct++;
    feedback.textContent = `Bonne réponse ! +${pointsGained} point${pointsGained > 1 ? "s" : ""} → ${q.reponse}`;
    feedback.className = "feedback-container correct";
    playSound("correct");
  } else {
    feedback.innerHTML = `Mauvaise réponse. C'était : <strong>${q.reponse}</strong>`;
    feedback.className = "feedback-container wrong";
    playSound("wrong");

    // Show remaining indices
    for (let i = ffCurrentIndice + 1; i < q.indices.length; i++) {
      addIndice(i);
    }
  }

  stats.total++;
  updateStats();

  document.getElementById("ff-score").textContent = ffScore;
  document.getElementById("ff-progress").style.width = Math.min((ffScore / 15) * 100, 100) + "%";

  ffQuestionIndex++;
  setTimeout(showFfQuestion, 2500);
}

function endFaceAFace(won) {
  stats.games++;
  updateStats();

  const icon = won ? "🏆" : "😔";
  const title = won ? "Champion !" : "Éliminé...";
  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-title").textContent = title;
  document.getElementById("result-stats").innerHTML = `
    <div class="result-stat-line"><span>Score</span><span class="result-stat-value">${ffScore} / 15</span></div>
    <div class="result-stat-line"><span>Questions jouées</span><span class="result-stat-value">${ffQuestionIndex}</span></div>
  `;
  if (won) playSound("win");
  showScreen("result");
}

document.getElementById("ff-answer").addEventListener("keydown", (e) => {
  if (e.key === "Enter") validateFaceAFace();
});

// --- Init ---
updateStats();
if (typeof updateRevisionBadge === "function") updateRevisionBadge();
