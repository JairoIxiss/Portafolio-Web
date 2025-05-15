const containers = document.querySelectorAll(".proyecto-container");

containers.forEach(container => {
  container.addEventListener("click", () => {
    const modalId = container.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove("hidden");
  });
});

const modals = document.querySelectorAll(".modal");

modals.forEach(modal => {
  const closeBtn = modal.querySelector(".close");

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
});