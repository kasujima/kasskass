document.addEventListener("DOMContentLoaded", () => {
  // 1️⃣ Greeting alert based on time
  const hour = new Date().getHours();
  let greeting;
  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  alert(`${greeting}, welcome to Kasu Jima Geda's personal website!`);

  // 2️⃣ Contact form alert
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function(event) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields before sending!");
      event.preventDefault(); // stops mailto from opening
    } else {
      alert(`✅ Thank you, ${name}! Your message is ready to be sent.`);
      // mailto will open automatically after alert
    }
  });
});

