// ============================================
// 12 Coups de Midi — Core utilities
// ============================================

let stats = JSON.parse(localStorage.getItem("qpuc-stats") || '{"games":0,"correct":0,"total":0,"quizzes":0,"quizCorrect":0,"quizTotal":0}');

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
  return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
}

function checkAnswer(userAnswer, correctAnswer) {
  const u = normalize(userAnswer);
  const c = normalize(correctAnswer);
  if (!u) return false;
  if (u === c) return true;
  const stripArticles = (s) => s.replace(/^(le |la |les |l |un |une |des |du |de la |de l )/g, "").trim();
  const us = stripArticles(u), cs = stripArticles(c);
  if (us === cs) return true;
  if (cs.length > 3 && u.includes(cs)) return true;
  if (us.length > 3 && cs.includes(us)) return true;
  const altMatch = correctAnswer.match(/\(([^)]+)\)/);
  if (altMatch) {
    const alt = normalize(altMatch[1]), altS = stripArticles(alt);
    if (u === alt || us === altS || u.includes(alt) || alt.includes(us)) return true;
  }
  if (correctAnswer.includes("/")) {
    const parts = correctAnswer.split("/").map(p => normalize(p.trim()));
    for (const part of parts) { const partS = stripArticles(part); if (u === part || us === partS || (partS.length > 3 && u.includes(partS))) return true; }
  }
  if (cs.length >= 5) { const dist = levenshtein(us, cs); if (dist <= Math.floor(cs.length * 0.2)) return true; }
  return false;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
  return dp[m][n];
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("screen-" + id);
  if (el) el.classList.add("active");
}

function updateStats() {
  const gamesEl = document.getElementById("stat-games");
  const correctEl = document.getElementById("stat-correct");
  const rateEl = document.getElementById("stat-rate");
  if (gamesEl) gamesEl.textContent = (stats.games || 0) + (stats.quizzes || 0);
  if (correctEl) correctEl.textContent = (stats.correct || 0) + (stats.quizCorrect || 0);
  const total = (stats.total || 0) + (stats.quizTotal || 0);
  const correct = (stats.correct || 0) + (stats.quizCorrect || 0);
  if (rateEl) rateEl.textContent = total > 0 ? Math.round((correct / total) * 100) + "%" : "-";
  localStorage.setItem("qpuc-stats", JSON.stringify(stats));
}

function playSound(type) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination); gain.gain.value = 0.15;
    if (type === "correct") { osc.frequency.value = 880; osc.type = "sine"; osc.start(); setTimeout(() => { osc.frequency.value = 1100; }, 100); setTimeout(() => { osc.stop(); ctx.close(); }, 200); }
    else if (type === "wrong") { osc.frequency.value = 200; osc.type = "square"; osc.start(); setTimeout(() => { osc.stop(); ctx.close(); }, 300); }
    else if (type === "win") { osc.frequency.value = 523; osc.type = "sine"; osc.start(); setTimeout(() => { osc.frequency.value = 659; }, 150); setTimeout(() => { osc.frequency.value = 784; }, 300); setTimeout(() => { osc.frequency.value = 1047; }, 450); setTimeout(() => { osc.stop(); ctx.close(); }, 600); }
  } catch (e) {}
}

// --- Navigation ---
function goHome() {
  showScreen("home");
  updateStats();
  if (typeof updateRevisionBadge === "function") updateRevisionBadge();
}

// --- Init ---
updateStats();
if (typeof updateRevisionBadge === "function") updateRevisionBadge();
