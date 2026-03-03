document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

reveals.forEach((r) => {
  r.style.opacity = 0;
  r.style.transform = "translateY(60px)";
  r.style.transition = "1s ease";
  observer.observe(r);
});

document.addEventListener("mousemove", (e) => {
  const hero = document.querySelector(".hero-content");
  const x = (window.innerWidth / 2 - e.clientX) / 50;
  const y = (window.innerHeight / 2 - e.clientY) / 50;
  hero.style.transform = `translate(${x}px,${y}px)`;
});

document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.transform = `rotateY(${(x - rect.width / 2) / 15}deg)
       rotateX(${-(y - rect.height / 2) / 15}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0) rotateX(0)";
  });
});

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-content");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".card img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.classList.add("modal-open");
  });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
}

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

function scrollToWorks() {
  document.querySelector("#works").scrollIntoView({ behavior: "smooth" });
}
