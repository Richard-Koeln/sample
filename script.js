const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("#main-menu");

    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      menu.classList.toggle("is-open", !isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menu.classList.remove("is-open");
      });
    });

    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        document.querySelectorAll(".filter-button").forEach((item) => {
          item.setAttribute("aria-pressed", String(item === button));
        });
        document.querySelectorAll(".activity-card").forEach((card) => {
          card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
      });
    });
