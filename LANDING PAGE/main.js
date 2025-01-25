// main.js

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = "#222"; // Darker background when scrolling
    navbar.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
  } else {
    navbar.style.backgroundColor = "transparent"; // Transparent background at the top
    navbar.style.boxShadow = "none";
  }
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1); // Get target ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for navbar height
        behavior: 'smooth',
      });
    }
  });
});

// Form Validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="message"]');

  if (!name.value.trim()) {
    alert("Please enter your name.");
    name.focus();
    return;
  }

  if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  if (!message.value.trim()) {
    alert("Please enter your message.");
    message.focus();
    return;
  }

  alert("Thank you for your message! We'll get back to you soon.");
  form.reset();
});

// Button Hover Animation
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseover", () => {
    button.style.transform = "scale(1.1)";
    button.style.transition = "transform 0.2s";
  });

  button.addEventListener("mouseout", () => {
    button.style.transform = "scale(1)";
  });
});
