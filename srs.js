// SRS.js — Shared SM-2 Spaced Repetition Module
const SRS = (function () {
  function getData(storageKey) {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch { return {}; }
  }
  function saveData(storageKey, data) {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }
  function getState(storageKey, cardKey) {
    const data = getData(storageKey);
    return data[cardKey] || { ef: 2.5, interval: 0, reps: 0, next: 0 };
  }
  function todayMidnight() {
    const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime();
  }
  function update(state, quality) {
    // quality: 1=again, 3=hard, 4=good, 5=easy
    const s = { ...state };
    if (quality >= 3) {
      if (s.reps === 0) s.interval = 1;
      else if (s.reps === 1) s.interval = 6;
      else s.interval = Math.round(s.interval * s.ef);
      s.reps += 1;
    } else {
      s.reps = 0;
      s.interval = 0;
    }
    s.ef = Math.max(1.3, s.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)));
    // Schedule next review at midnight + interval days (not from exact time!)
    // So cards reviewed at 11pm are due at midnight tomorrow, not 11pm tomorrow
    s.next = todayMidnight() + s.interval * 86400000;
    return s;
  }
  function save(storageKey, cardKey, state) {
    const data = getData(storageKey);
    data[cardKey] = state;
    saveData(storageKey, data);
  }
  function getDueCount(storageKey, prefix) {
    const data = getData(storageKey);
    let count = 0;
    for (const key in data) {
      if (prefix && !key.startsWith(prefix)) continue;
      if (data[key].next <= Date.now()) count++;
    }
    return count;
  }
  function getStats(storageKey, prefix) {
    const data = getData(storageKey);
    let total = 0, due = 0, mastered = 0;
    for (const key in data) {
      if (prefix && !key.startsWith(prefix)) continue;
      total++;
      if (data[key].next <= Date.now()) due++;
      if (data[key].reps >= 3) mastered++;
    }
    return { total, due, mastered };
  }
  return { getData, saveData, getState, update, save, getDueCount, getStats };
})();
