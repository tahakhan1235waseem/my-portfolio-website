/* ================================
   Taha Khan Portfolio JavaScript
================================ */


/* ================= THEME ================= */

const body = document.body;

const themeToggle =
  document.getElementById("themeToggle");

const themeIcon =
  document.getElementById("themeIcon");


/* Load saved theme */

const savedTheme =
  localStorage.getItem("taha-theme");


if (savedTheme === "dark") {

  body.classList.add("dark");

}


updateThemeIcon();


/* Toggle theme */

themeToggle.addEventListener("click", () => {

  body.classList.toggle("dark");

  localStorage.setItem(
    "taha-theme",
    body.classList.contains("dark")
      ? "dark"
      : "light"
  );

  updateThemeIcon();

});


function updateThemeIcon() {

  if (body.classList.contains("dark")) {

    themeIcon.textContent = "☀";

  } else {

    themeIcon.textContent = "☾";

  }

}


/* ================= MOBILE MENU ================= */

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");


menuToggle.addEventListener("click", () => {

  nav.classList.toggle("open");

});


/* Close menu when clicking navigation */

nav.querySelectorAll("a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

  });

});


/* ================= SCROLL PROGRESS ================= */

const progress =
  document.getElementById("progress");


window.addEventListener("scroll", () => {

  const scrollTop =
    window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;


  if (pageHeight <= 0) {

    progress.style.width = "0%";

    return;

  }


  const percentage =
    (scrollTop / pageHeight) * 100;


  progress.style.width =
    `${percentage}%`;

});


/* ================= SCROLL REVEAL ================= */

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });