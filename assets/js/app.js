console.log("INIT");
// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
    console.log("Click");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });


const toggleDarkMode = () => {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Save preference
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Load saved preference on page load
window.onload = () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
};

document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);