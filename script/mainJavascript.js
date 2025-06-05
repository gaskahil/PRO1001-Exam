const wrapper = document.querySelector(".wrapper");
  const sidePanel = document.querySelector(".side-panel");
  const toggleBtn = document.querySelector(".side-panel-toggle");

//Chatbot elements
const chatBtn = document.getElementById("chatBtn");
const chatbotPopup = document.getElementById("chatbotPopup");
const closeChatbotBtn = document.getElementById("closeChatbotBtn");
const chatMenuLink = document.getElementById("chatMenuLink");

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

//Chatbot popup
if (chatBtn && chatbotPopup && closeChatbotBtn) {
  chatBtn.addEventListener("click", () => {
    chatbotPopup.style.display = "block";
  });

  closeChatbotBtn.addEventListener("click", () => {
    chatbotPopup.style.display = "none";
  });

  chatbotPopup.addEventListener("click", (e) => {
    if (e.target === chatbotPopup) {
      chatbotPopup.style.display = "none";
    }
  });
}

if (chatMenuLink && chatbotPopup) {
  chatMenuLink.addEventListener("click", (e) => {
    e.preventDefault();
    chatbotPopup.style.display = "block";
  });
}