// Schémas visuels des institutions — HTML/CSS diagrams
(function () {
  const SCHEMAS = [
    {
      id: "ve-republique",
      name: "La Ve République",
      icon: "🇫🇷",
      desc: "Comment fonctionne le pouvoir en France",
      html: `
        <div class="schema-diagram">
          <div class="schema-title">La Ve République française</div>
          <div class="schema-row">
            <div class="schema-box schema-president">
              <div class="schema-box-title">👤 Président de la République</div>
              <div class="schema-box-detail">Élu au suffrage universel direct pour 5 ans (quinquennat)</div>
              <div class="schema-box-facts">
                <span>Chef des armées</span>
                <span>Nomme le Premier ministre</span>
                <span>Peut dissoudre l'Assemblée</span>
                <span>Siège : Palais de l'Élysée</span>
              </div>
            </div>
          </div>
          <div class="schema-arrow">↓ nomme</div>
          <div class="schema-row">
            <div class="schema-box schema-pm">
              <div class="schema-box-title">🏛️ Premier ministre</div>
              <div class="schema-box-detail">Chef du gouvernement — dirige l'action du gouvernement</div>
              <div class="schema-box-facts">
                <span>Siège : Hôtel de Matignon</span>
                <span>Responsable devant l'Assemblée</span>
                <span>Peut engager le 49.3</span>
              </div>
            </div>
          </div>
          <div class="schema-arrow">↓ dirige</div>
          <div class="schema-row">
            <div class="schema-box schema-gouv">
              <div class="schema-box-title">👥 Gouvernement</div>
              <div class="schema-box-detail">Ministres nommés par le Président sur proposition du PM</div>
              <div class="schema-box-facts">
                <span>Conseil des ministres chaque mercredi</span>
                <span>Siège : Palais de l'Élysée (pour le Conseil)</span>
              </div>
            </div>
          </div>
          <div class="schema-separator">⚖️ PARLEMENT (vote les lois)</div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-an">
              <div class="schema-box-title">🔵 Assemblée nationale</div>
              <div class="schema-box-detail">577 députés — élus au suffrage universel direct pour 5 ans</div>
              <div class="schema-box-facts">
                <span>Siège : Palais Bourbon</span>
                <span>A le dernier mot sur les lois</span>
                <span>Peut renverser le gouvernement (motion de censure)</span>
              </div>
            </div>
            <div class="schema-box schema-senat">
              <div class="schema-box-title">🔴 Sénat</div>
              <div class="schema-box-detail">348 sénateurs — élus au suffrage universel indirect pour 6 ans</div>
              <div class="schema-box-facts">
                <span>Siège : Palais du Luxembourg</span>
                <span>Représente les collectivités</span>
                <span>Président du Sénat = 2e personnage de l'État</span>
              </div>
            </div>
          </div>
          <div class="schema-separator">🛡️ CONTRÔLE</div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-cc">
              <div class="schema-box-title">⚖️ Conseil constitutionnel</div>
              <div class="schema-box-detail">9 membres (3 nommés par chaque président : République, AN, Sénat)</div>
              <div class="schema-box-facts">
                <span>Vérifie la constitutionnalité des lois</span>
                <span>Valide les élections</span>
              </div>
            </div>
            <div class="schema-box schema-ce">
              <div class="schema-box-title">📋 Conseil d'État</div>
              <div class="schema-box-detail">Plus haute juridiction administrative</div>
              <div class="schema-box-facts">
                <span>Siège : Palais-Royal</span>
                <span>Conseille le gouvernement sur les projets de loi</span>
              </div>
            </div>
          </div>
          <div class="schema-key">
            <div class="schema-key-title">🔑 Chiffres clés</div>
            <div class="schema-key-items">
              <span>49.3 = passage en force d'une loi sans vote</span>
              <span>Motion de censure = renverser le gouvernement</span>
              <span>Cohabitation = Président et PM de partis différents</span>
              <span>Article 16 = pouvoirs exceptionnels du Président</span>
            </div>
          </div>
        </div>`
    },
    {
      id: "ue",
      name: "L'Union européenne",
      icon: "🇪🇺",
      desc: "Les institutions européennes et comment elles fonctionnent",
      html: `
        <div class="schema-diagram">
          <div class="schema-title">L'Union européenne — 27 pays membres</div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-eu1">
              <div class="schema-box-title">🏛️ Commission européenne</div>
              <div class="schema-box-detail">27 commissaires (1 par pays) — le « gouvernement » de l'UE</div>
              <div class="schema-box-facts">
                <span>Siège : Bruxelles (Berlaymont)</span>
                <span>Présidente : Ursula von der Leyen</span>
                <span>Propose les lois européennes</span>
                <span>Gardienne des traités</span>
              </div>
            </div>
            <div class="schema-box schema-eu2">
              <div class="schema-box-title">🗳️ Parlement européen</div>
              <div class="schema-box-detail">705 députés élus au suffrage universel direct pour 5 ans</div>
              <div class="schema-box-facts">
                <span>Siège : Strasbourg (sessions) + Bruxelles (commissions)</span>
                <span>Vote les lois avec le Conseil</span>
                <span>Vote le budget de l'UE</span>
              </div>
            </div>
          </div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-eu3">
              <div class="schema-box-title">🤝 Conseil de l'UE</div>
              <div class="schema-box-detail">Ministres des 27 pays — vote les lois avec le Parlement</div>
              <div class="schema-box-facts">
                <span>Siège : Bruxelles</span>
                <span>Présidence tournante (6 mois)</span>
                <span>≠ Conseil européen !</span>
              </div>
            </div>
            <div class="schema-box schema-eu4">
              <div class="schema-box-title">👔 Conseil européen</div>
              <div class="schema-box-detail">Chefs d'État des 27 — donne les grandes orientations</div>
              <div class="schema-box-facts">
                <span>Siège : Bruxelles</span>
                <span>Se réunit 4× par an minimum</span>
                <span>Président : Charles Michel</span>
              </div>
            </div>
          </div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-eu5">
              <div class="schema-box-title">⚖️ Cour de justice de l'UE</div>
              <div class="schema-box-detail">Veille au respect du droit européen</div>
              <div class="schema-box-facts">
                <span>Siège : Luxembourg</span>
                <span>≠ CEDH (Cour européenne des droits de l'homme, Strasbourg)</span>
              </div>
            </div>
            <div class="schema-box schema-eu6">
              <div class="schema-box-title">💶 BCE</div>
              <div class="schema-box-detail">Banque centrale européenne — gère l'euro</div>
              <div class="schema-box-facts">
                <span>Siège : Francfort</span>
                <span>Fixe les taux d'intérêt</span>
                <span>Zone euro : 20 pays</span>
              </div>
            </div>
          </div>
          <div class="schema-key">
            <div class="schema-key-title">🔑 Pièges classiques</div>
            <div class="schema-key-items">
              <span>Conseil de l'UE ≠ Conseil européen ≠ Conseil de l'Europe (47 pays)</span>
              <span>CJUE (Luxembourg) ≠ CEDH (Strasbourg)</span>
              <span>Parlement : Strasbourg / Commission : Bruxelles / BCE : Francfort</span>
            </div>
          </div>
        </div>`
    },
    {
      id: "onu",
      name: "L'ONU",
      icon: "🌐",
      desc: "Organisation des Nations Unies — structure et organes principaux",
      html: `
        <div class="schema-diagram">
          <div class="schema-title">L'ONU — 193 pays membres — Siège : New York</div>
          <div class="schema-row">
            <div class="schema-box schema-onu1">
              <div class="schema-box-title">🌍 Assemblée générale</div>
              <div class="schema-box-detail">193 pays, 1 voix chacun — se réunit chaque septembre</div>
              <div class="schema-box-facts">
                <span>Vote des résolutions (non contraignantes)</span>
                <span>Élit les membres non permanents du Conseil de sécurité</span>
              </div>
            </div>
          </div>
          <div class="schema-row">
            <div class="schema-box schema-onu2">
              <div class="schema-box-title">🛡️ Conseil de sécurité</div>
              <div class="schema-box-detail">15 membres dont 5 PERMANENTS avec droit de veto</div>
              <div class="schema-box-facts">
                <span>🇫🇷 France 🇺🇸 USA 🇬🇧 Royaume-Uni 🇷🇺 Russie 🇨🇳 Chine</span>
                <span>+ 10 non permanents (élus pour 2 ans)</span>
                <span>Seul organe à prendre des décisions contraignantes</span>
                <span>Peut autoriser l'usage de la force</span>
              </div>
            </div>
          </div>
          <div class="schema-row schema-row-split">
            <div class="schema-box schema-onu3">
              <div class="schema-box-title">👤 Secrétaire général</div>
              <div class="schema-box-detail">Chef administratif de l'ONU</div>
              <div class="schema-box-facts">
                <span>Mandat de 5 ans renouvelable</span>
                <span>Actuel : António Guterres (Portugal)</span>
              </div>
            </div>
            <div class="schema-box schema-onu4">
              <div class="schema-box-title">⚖️ CIJ</div>
              <div class="schema-box-detail">Cour internationale de Justice — 15 juges</div>
              <div class="schema-box-facts">
                <span>Siège : La Haye (Pays-Bas)</span>
                <span>Règle les différends entre États</span>
                <span>≠ CPI (Cour pénale internationale)</span>
              </div>
            </div>
          </div>
          <div class="schema-separator">🏢 Agences spécialisées</div>
          <div class="schema-row schema-row-grid">
            <div class="schema-mini">🏥 OMS<br><small>Santé — Genève</small></div>
            <div class="schema-mini">📚 UNESCO<br><small>Éducation — Paris</small></div>
            <div class="schema-mini">👶 UNICEF<br><small>Enfants — New York</small></div>
            <div class="schema-mini">🌾 FAO<br><small>Alimentation — Rome</small></div>
            <div class="schema-mini">💼 OIT<br><small>Travail — Genève</small></div>
            <div class="schema-mini">🕊️ HCR<br><small>Réfugiés — Genève</small></div>
          </div>
          <div class="schema-key">
            <div class="schema-key-title">🔑 À retenir</div>
            <div class="schema-key-items">
              <span>5 membres permanents = P5 = droit de VETO</span>
              <span>CIJ (La Haye) = entre États ≠ CPI (La Haye) = individus</span>
              <span>OMS = Genève / UNESCO = Paris / FAO = Rome</span>
            </div>
          </div>
        </div>`
    },
  ];

  window.initSchemas = function () {
    let screen = document.getElementById("screen-schemas");
    if (!screen) {
      screen = document.createElement("div");
      screen.id = "screen-schemas";
      screen.className = "screen";
      document.getElementById("app").appendChild(screen);
    }

    screen.innerHTML = `
      <div class="game-header">
        <button class="btn-back" onclick="goHome()">← Retour</button>
        <h2>Schémas</h2>
        <div></div>
      </div>
      <div class="schemas-list" id="schemas-list"></div>
    `;

    const list = document.getElementById("schemas-list");
    SCHEMAS.forEach(s => {
      const btn = document.createElement("button");
      btn.className = "mode-card";
      btn.onclick = () => showSchema(s.id);
      btn.innerHTML = `<div class="mode-icon">${s.icon}</div><div class="mode-title">${s.name}</div><div class="mode-desc">${s.desc}</div>`;
      list.appendChild(btn);
    });

    showScreen("schemas");
  };

  function showSchema(id) {
    const schema = SCHEMAS.find(s => s.id === id);
    if (!schema) return;

    let screen = document.getElementById("screen-schema-detail");
    if (!screen) {
      screen = document.createElement("div");
      screen.id = "screen-schema-detail";
      screen.className = "screen";
      document.getElementById("app").appendChild(screen);
    }

    screen.innerHTML = `
      <div class="game-header">
        <button class="btn-back" onclick="initSchemas()">← Retour</button>
        <h2>${schema.icon} ${schema.name}</h2>
        <div></div>
      </div>
      ${schema.html}
    `;

    showScreen("schema-detail");
  }
})();
