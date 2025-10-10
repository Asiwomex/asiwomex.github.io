// ===== HAMBURGER MENU TOGGLE =====
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const overlay = document.getElementById("menuOverlay");
  const body = document.body;
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
  overlay.classList.toggle("active");
  
  // Prevent body scroll when menu is open
  if (menu.classList.contains("open")) {
    body.style.overflow = "hidden";
  } else {
    body.style.overflow = "";
  }
}

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById("themeToggle");
const themeToggleMobile = document.getElementById("themeToggleMobile");
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem("theme") || "light";
html.setAttribute("data-theme", currentTheme);

function toggleTheme() {
  const theme = html.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", toggleTheme);
}

// ===== SCROLL PROGRESS BAR =====
window.addEventListener("scroll", () => {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercentage + "%";
});

// ===== NAVBAR SHOW/HIDE ON SCROLL =====
let lastScrollTop = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scrolling down
    nav.classList.add("nav-hidden");
  } else {
    // Scrolling up
    nav.classList.remove("nav-hidden");
  }
  
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll(".animate-on-scroll").forEach((el) => {
  observer.observe(el);
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 500) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== SMOOTH SCROLL FOR ALL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===== PARTICLE ANIMATION =====
function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return;

  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${Math.random() > 0.5 ? '#3b82f6' : '#8b5cf6'};
      border-radius: 50%;
      opacity: ${Math.random() * 0.5 + 0.2};
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 10}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
    `;
    particlesContainer.appendChild(particle);
  }
}

// Add particle animation CSS
const style = document.createElement("style");
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(100px, -100px) rotate(90deg);
    }
    50% {
      transform: translate(200px, 0) rotate(180deg);
    }
    75% {
      transform: translate(100px, 100px) rotate(270deg);
    }
  }
`;
document.head.appendChild(style);

// Initialize particles
createParticles();

// ===== TYPING EFFECT =====
function typeEffect() {
  const typingElement = document.querySelector(".typing-effect");
  if (!typingElement) return;

  const text = typingElement.textContent;
  typingElement.textContent = "";
  typingElement.style.opacity = "1";
  
  let i = 0;
  const speed = 100;

  function type() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  // Start typing after a short delay
  setTimeout(type, 500);
}

// Initialize typing effect when page loads
window.addEventListener("load", typeEffect);

// ===== CURSOR TRAIL EFFECT (Optional) =====
let cursorTrail = [];
const trailLength = 10;

document.addEventListener("mousemove", (e) => {
  cursorTrail.push({ x: e.clientX, y: e.clientY });
  
  if (cursorTrail.length > trailLength) {
    cursorTrail.shift();
  }
});

// ===== PARALLAX EFFECT ON SCROLL =====
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".section__pic-container");
  
  parallaxElements.forEach((element) => {
    const speed = 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// ===== LAZY LOADING IMAGES =====
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src || img.src;
        img.classList.add("loaded");
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img").forEach((img) => {
    imageObserver.observe(img);
  });
}

// ===== SKILL BARS ANIMATION =====
function animateSkillBars() {
  const skillItems = document.querySelectorAll(".skill-item");
  
  skillItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = "0";
      item.style.transform = "translateX(-50px)";
      
      setTimeout(() => {
        item.style.transition = "all 0.5s ease";
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, 100);
    }, index * 100);
  });
}

// Trigger skill bars animation when skills section is visible
const skillsSection = document.getElementById("experience");
if (skillsSection) {
  const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateSkillBars();
        skillsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  skillsObserver.observe(skillsSection);
}

// ===== PROJECT CARDS STAGGER ANIMATION =====
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.2}s`;
});

// ===== CONSOLE MESSAGE =====
console.log(
  "%c👋 Welcome to Asiwome's Portfolio!",
  "color: #3b82f6; font-size: 20px; font-weight: bold;"
);
console.log(
  "%cInterested in the code? Check out the repository!",
  "color: #8b5cf6; font-size: 14px;"
);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
  // Any heavy scroll operations can go here
}, 100);

window.addEventListener("scroll", debouncedScroll);

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const overlay = document.getElementById("menuOverlay");
    const body = document.body;
    
    if (menu && menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
      overlay.classList.remove("active");
      body.style.overflow = "";
    }
  }
});

// Focus trap for mobile menu
const menuLinks = document.querySelector(".menu-links");
if (menuLinks) {
  menuLinks.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      const focusableElements = menuLinks.querySelectorAll("a");
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}

// ===== PRELOADER (Optional) =====
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

