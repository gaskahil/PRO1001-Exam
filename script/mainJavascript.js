const wrapper = document.querySelector(".wrapper");
  const sidePanel = document.querySelector(".side-panel");
  const toggleBtn = document.querySelector(".side-panel-toggle");

//open or close the menu panel
toggleBtn.addEventListener("click", () => {
  wrapper.classList.toggle("side-panel-open");
});

window.addEventListener("click", function(event) {
  if (
    wrapper.classList.contains("side-panel-open") &&
    !sidePanel.contains(event.target) &&
    !toggleBtn.contains(event.target)
  ) {
    wrapper.classList.remove("side-panel-open");
  }
});