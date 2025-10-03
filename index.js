const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const navMenu = document.getElementById("navMenu");

  menuOpen.addEventListener("click", () => {
    navMenu.classList.remove("-translate-x-full");  // slide in
  });

  menuClose.addEventListener("click", () => {
    navMenu.classList.add("-translate-x-full"); // slide out
  });
const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('text-secondary')); // remove from others
      link.classList.add('text-secondary'); // add to clicked one
    });
  });


const toggle = document.getElementById("togglePlan");
    const prices = document.querySelectorAll(".plan-price");

    toggle.addEventListener("change", () => {
      prices.forEach(price => {
        price.textContent = toggle.checked 
          ? price.getAttribute("data-yearly") 
          : price.getAttribute("data-monthly");
      });
    });

const images = document.querySelectorAll("#testimonial-images img");
  const texts = document.querySelectorAll("#testimonial-texts > div");
  let currentIndex = 0;
  let interval;

  function showTestimonial(index) {
    // Hide all texts & remove border
    texts.forEach(t => t.classList.add("hidden"));
    images.forEach(img => img.classList.remove("border-2", "border-secondary"));

    // Show selected text & add border to selected image
    texts[index].classList.remove("hidden");
    images[index].classList.add("border-2", "border-secondary");

    currentIndex = index;
  }

  // Auto change testimonials
  function startAutoChange() {
    interval = setInterval(() => {
      let nextIndex = (currentIndex + 1) % texts.length;
      showTestimonial(nextIndex);
    }, 4000); // change every 4s
  }

  // Click on image to show testimonial
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      clearInterval(interval); // stop auto-play when user clicks
      showTestimonial(index);
      startAutoChange(); // restart auto-play
    });
  });

  // Initialize
  showTestimonial(0);
  startAutoChange();


const faders = document.querySelectorAll('.fade-in');

const options = {
  threshold: 0.2
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, options);

faders.forEach(fader => {
  observer.observe(fader);
});