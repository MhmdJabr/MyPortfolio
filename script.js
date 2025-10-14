// theme toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

themeToggle?.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
});

// mobile menu simple toggle
const mobileToggle = document.getElementById("mobile-toggle");
const nav = document.querySelector("header nav");
mobileToggle?.addEventListener("click", () => {
  // toggle small mobile nav (quick simple)
  const existing = document.getElementById("mobile-nav");
  if (existing) {
    existing.remove();
    return;
  }
  const div = document.createElement("div");
  div.id = "mobile-nav";
  div.className =
    "absolute left-0 right-0 top-16 bg-white/95 dark:bg-[#071023]/95 p-4 z-50 shadow-md";
  div.innerHTML = `
    <a class="block py-2" href="#home">Home</a>
    <a class="block py-2" href="#about">About</a>
    <a class="block py-2" href="#skills">Skills</a>
    <a class="block py-2" href="#projects">Projects</a>
    <a class="block py-2" href="#experience">Experience</a>
    <a class="block py-2" href="#education">Education</a>
    <a class="block py-2" href="#certificates">Certificates</a>
    <a class="block py-2" href="#contact">Contact</a>
  `;
  document.querySelector("header").appendChild(div);
});

// init Swipers
function initSwipers() {
  // Projects swiper
  const projectsSwiper = new Swiper(".projects-swiper", {
    loop: false,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".projects-swiper .swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".projects-swiper .swiper-button-next",
      prevEl: ".projects-swiper .swiper-button-prev",
    },
  });

  // Experience swiper
  const expSwiper = new Swiper(".exp-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: { el: ".exp-swiper .swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".exp-swiper .swiper-button-next",
      prevEl: ".exp-swiper .swiper-button-prev",
    },
  });

  // Certificates swiper
  const certSwiper = new Swiper(".cert-swiper", {
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
    navigation: {
      nextEl: ".cert-swiper .swiper-button-next",
      prevEl: ".cert-swiper .swiper-button-prev",
    },
  });
}

if (typeof Swiper !== "undefined") {
  initSwipers();
} else {
  window.addEventListener("load", initSwipers);
}
