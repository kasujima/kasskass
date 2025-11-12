document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".viewPptBtn").forEach(btn => {
    btn.onclick = () => {
      const slides = btn.closest(".project").querySelector(".pptSlides");
      const show = slides.style.display === "none" || slides.style.display === "";
      slides.style.display = show ? "block" : "none";
      btn.textContent = show ? "hide it" : "click for more";
    };
  });
});
