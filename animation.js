// Animation for sections using GSAP
// Ensure GSAP and ScrollTrigger are included in your HTML file before this script

// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation for the hero section
gsap.from(".hero-section .intro", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

// Animation for each element in the inventory section
gsap.from(".inventory-section .inventory-header", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".inventory-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

gsap.from(".inventory-section .car-slide", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2, // Stagger the animation for each car slide
  scrollTrigger: {
    trigger: ".inventory-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

// Animation for the financing section
gsap.from(".financing-section .financing-header", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".financing-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

gsap.from(".financing-section .financing-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".financing-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

// Animation for the about us section
gsap.from(".about-section .about-content", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});

// Animation for the contact section
gsap.from(".contact-section .contact-form-container", {
  opacity: 0,
  y: 50,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top center",
    end: "bottom center",
    toggleActions: "play none none none",
  }
});
