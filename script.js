const progress = document.querySelector(".scroll-progress");
const revealItems = document.querySelectorAll(".reveal");

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const current = scrollable > 0 ? window.scrollY / scrollable : 0;
  progress.style.width = `${Math.min(current, 1) * 100}%`;
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.18,
  },
);

revealItems.forEach((item) => observer.observe(item));
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
