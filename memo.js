// memo.js — Moyens mnémotechniques automatiques
const MEMO = (function () {
  // Predefined memo tips for common knowledge
  const TIPS = {
    // Capitales pièges
    "canberra": "🧠 Can-BERRA → le kangourou boit une bière (BEER-a) à Canberra, pas à Sydney !",
    "brasilia": "🧠 BRASIL-ia → la capitale du Brésil se nomme comme le pays, pas Rio",
    "ankara": "🧠 ANK-ara → l'ancre (ANK) est dans la capitale, pas Istanbul la touriste",
    "naypyidaw": "🧠 NAY-pyi-daw → dis \"Nay!\" à Rangoon, la vraie capitale est cachée",
    "sri jayawardenapura kotte": "🧠 Sri Lanka ≠ Colombo → la vraie capitale a un nom impossible, c'est pour ça qu'on se trompe",
    "abuja": "🧠 ABU-ja → Abu habite à Abuja, pas à Lagos (Nigeria)",
    "pretoria": "🧠 PRE-toria → la capitale administrative est toujours PREMIÈRE (PRE)",
    "berne": "🧠 La Suisse → Berne avec un B comme Banque suisse, pas Zurich ni Genève",
    "ottawa": "🧠 O-TTAWA → le O du Canada, pas Toronto ni Montréal",
    "wellington": "🧠 WELL-ington → on est WELL (bien) à Wellington, pas à Auckland",

    // Corps humain
    "os hyoide": "🧠 L'os HYoïde → HY = Hanging (Y est suspendu, il ne touche rien)",
    "femur": "🧠 Le FÉMUR → la FÉMMe a le plus long os dans la cuisse (FÉM-ur)",
    "étrier": "🧠 Le plus petit os → un ÉTRIER pour monter sur un tout petit cheval (dans l'oreille)",

    // Animaux
    "choupisson": "🧠 CHOU-pisson → un petit CHOU qui pique comme un hérisson",
    "marcassin": "🧠 MARC-assin → Marc est un petit cochon (sanglier)",
    "levraut": "🧠 LEVR-aut → le bébé lièvre se LÈVE tôt (haut)",
  };

  // Auto-generate memo based on question/answer patterns
  function generateMemo(question, answer) {
    if (!answer) return null;
    const a = answer.toLowerCase().trim();
    const q = (question || "").toLowerCase();

    // Check predefined tips first
    for (const key in TIPS) {
      if (a.includes(key) || answer.toLowerCase().includes(key)) return TIPS[key];
    }

    // Pattern: First letter association
    if (a.length > 2 && a.length < 30) {
      const firstLetter = answer.charAt(0).toUpperCase();

      // Capital questions
      if (q.includes("capitale") || q.includes("capital")) {
        return `💡 Astuce : ${answer} commence par "${firstLetter}" — associe la première lettre au pays !`;
      }

      // "Qui" questions → person
      if (q.startsWith("qui ") || q.includes("quel ") || q.includes("quelle ")) {
        if (answer.split(" ").length <= 4) {
          return `💡 Retiens la première syllabe : "${answer.substring(0, Math.min(4, answer.length)).toUpperCase()}..." et associe-la à la question`;
        }
      }
    }

    // Pattern: Number answer
    if (/^\d/.test(a)) {
      return `💡 Associe le chiffre à une image : ${answer} → invente une histoire avec ce nombre !`;
    }

    // Pattern: Short factual answer
    if (a.length < 25) {
      const words = answer.split(" ");
      if (words.length <= 3) {
        return `💡 Répète 3 fois : "${answer}" — et crée une image mentale !`;
      }
    }

    return null;
  }

  // Show memo tip in an element
  function showTip(elementId, question, answer) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const memo = generateMemo(question, answer);
    if (memo) {
      el.textContent = memo;
      el.style.display = "";
    } else {
      el.textContent = "";
      el.style.display = "none";
    }
  }

  // Hide memo tip
  function hideTip(elementId) {
    const el = document.getElementById(elementId);
    if (el) { el.textContent = ""; el.style.display = "none"; }
  }

  return { generateMemo, showTip, hideTip };
})();
