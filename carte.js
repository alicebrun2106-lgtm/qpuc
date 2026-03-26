// Carte interactive de France — placeholder
// Will be replaced by full implementation
(function() {
  window.initCarte = function() {
    let screen = document.getElementById("screen-carte");
    if (!screen) {
      screen = document.createElement("div");
      screen.id = "screen-carte";
      screen.className = "screen";
      document.getElementById("app").appendChild(screen);
    }
    screen.innerHTML = '<div class="game-header"><button class="btn-back" onclick="goHome()">← Retour</button><h2>🗺️ Carte</h2><div></div></div><div style="text-align:center;padding:60px 20px;color:var(--text-dim)"><div style="font-size:64px;margin-bottom:20px">🗺️</div><div style="font-size:18px">Carte en cours de chargement...</div></div>';
    showScreen("carte");
  };
})();
