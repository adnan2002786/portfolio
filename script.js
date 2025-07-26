// Typing effect
const text = "Fresher | Full-Stack Developer | AI/ML Enthusiast";
let index = 0;
const typing = () => {
  document.getElementById("typed-text").textContent = text.slice(0, index++);
  if (index > text.length) index = 0;
};
setInterval(typing, 150);

// Form submission alert
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been received.");
  this.reset();
});
