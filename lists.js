// Lists QPUC - Rendering and search
(function () {
  // --- List Selection Screen ---
  window.initLists = function () {
    const container = document.getElementById("lists-container");
    container.innerHTML = "";

    // Group by category
    const categories = {};
    LISTS_DATA.forEach((list) => {
      if (!categories[list.category]) categories[list.category] = [];
      categories[list.category].push(list);
    });

    Object.keys(categories).forEach((cat) => {
      const section = document.createElement("div");
      section.className = "list-category";
      section.innerHTML = `<h3 class="list-category-title">${cat}</h3>`;
      const grid = document.createElement("div");
      grid.className = "list-grid";

      categories[cat].forEach((list) => {
        const card = document.createElement("button");
        card.className = "list-card";
        card.onclick = () => showListDetail(list.id);
        card.innerHTML = `
          <span class="list-icon">${list.icon}</span>
          <span class="list-name">${list.name}</span>
          <span class="list-desc-small">${list.description}</span>
        `;
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    });
    showScreen("lists");
  };

  // --- List Detail ---
  window.showListDetail = function (listId) {
    const list = LISTS_DATA.find((l) => l.id === listId);
    if (!list) return;

    document.getElementById("list-detail-title").textContent = list.name;
    const content = document.getElementById("list-detail-content");
    const searchInput = document.getElementById("list-search");
    searchInput.value = "";

    function render(filter) {
      content.innerHTML = "";
      if (list.type === "table") {
        content.appendChild(renderTable(list, filter));
      } else if (list.type === "grouped") {
        content.appendChild(renderGrouped(list, filter));
      }
    }

    render("");
    searchInput.oninput = () => render(searchInput.value.toLowerCase());

    // Quiz mode state
    const quizBtn = document.getElementById("list-quiz-toggle");
    let quizMode = false;
    quizBtn.textContent = "Mode quiz";
    quizBtn.className = "btn-quiz";
    quizBtn.onclick = () => {
      quizMode = !quizMode;
      quizBtn.textContent = quizMode ? "Voir les réponses" : "Mode quiz";
      quizBtn.classList.toggle("active", quizMode);
      content.classList.toggle("quiz-mode", quizMode);
    };
    content.classList.remove("quiz-mode");

    showScreen("list-detail");
  };

  function renderTable(list, filter) {
    const table = document.createElement("table");
    table.className = "list-table";

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    list.columns.forEach((col) => {
      const th = document.createElement("th");
      th.textContent = col;
      headRow.appendChild(th);
    });
    thead.appendChild(headRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    list.rows.forEach((row) => {
      const match = !filter || row.some((cell) => cell.toLowerCase().includes(filter));
      if (!match) return;
      const tr = document.createElement("tr");
      row.forEach((cell, i) => {
        const td = document.createElement("td");
        td.textContent = cell;
        if (i >= 1) td.className = "list-answer";
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    return table;
  }

  function renderGrouped(list, filter) {
    const container = document.createElement("div");
    list.groups.forEach((group) => {
      const filteredItems = group.items.filter(
        (item) =>
          !filter ||
          item.name.toLowerCase().includes(filter) ||
          item.detail.toLowerCase().includes(filter)
      );
      if (filteredItems.length === 0) return;

      const section = document.createElement("div");
      section.className = "list-group";
      const title = document.createElement("h4");
      title.className = "list-group-title";
      title.textContent = group.title;
      section.appendChild(title);

      filteredItems.forEach((item) => {
        const row = document.createElement("div");
        row.className = "list-group-item";
        row.innerHTML = `
          <span class="list-item-name">${item.name}</span>
          <span class="list-item-detail list-answer">${item.detail}</span>
        `;
        section.appendChild(row);
      });
      container.appendChild(section);
    });
    return container;
  }

  window.backToLists = function () {
    initLists();
  };
})();
