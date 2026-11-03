/**
 * Amey Anil Ghogare - Personal Portfolio Website
 * Modern Interactive JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // --- 1. Theme Management (Dark / Light Theme Toggle) ---
  function initTheme() {
    try {
      const themeToggleBtn = document.getElementById('theme-toggle');
      const rootElement = document.documentElement;
      const savedTheme = localStorage.getItem('amey_portfolio_theme') || 'dark';

      if (savedTheme === 'light') {
        rootElement.setAttribute('data-theme', 'light');
      } else {
        rootElement.removeAttribute('data-theme');
      }

      if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
          const isLight = rootElement.getAttribute('data-theme') === 'light';
          if (isLight) {
            rootElement.removeAttribute('data-theme');
            localStorage.setItem('amey_portfolio_theme', 'dark');
            themeToggleBtn.setAttribute('aria-label', 'Switch to light theme');
          } else {
            rootElement.setAttribute('data-theme', 'light');
            localStorage.setItem('amey_portfolio_theme', 'light');
            themeToggleBtn.setAttribute('aria-label', 'Switch to dark theme');
          }
        });
      }
    } catch (e) {
      console.warn('Theme storage unavailable:', e);
    }
  }

  // --- 2. Animated Typing Effect (Hero Section) ---
  function initTypewriter() {
    const typedTarget = document.getElementById('typed-text');
    if (!typedTarget) return;

    const roles = [
      'Data Analyst',
      'Python Developer',
      'Machine Learning Enthusiast',
      'Software Developer'
    ];

    let roleIndex = 0;
    let charIndex = roles[0].length;
    let isDeleting = true; // start by holding and deleting the initial text
    const typingSpeed = 80;
    const deletingSpeed = 40;
    const holdDuration = 1800;

    function typeLoop() {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typedTarget.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedTarget.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let timeoutDuration = isDeleting ? deletingSpeed : typingSpeed;

      if (!isDeleting && charIndex === currentRole.length) {
        timeoutDuration = holdDuration;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        timeoutDuration = 350;
      }

      setTimeout(typeLoop, timeoutDuration);
    }

    // Wait 1.5s on the initial text before cycling
    setTimeout(typeLoop, 1500);
  }

  // --- 3. Scroll Progress Indicator & Sticky Navbar ---
  function initScrollTracking() {
    const scrollProgressBar = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');

    function updateActiveNavLink() {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset + 140;

      sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop;
        const sectionId = current.getAttribute('id');
        const targetNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (targetNavLink) {
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            targetNavLink.classList.add('active');
          } else {
            targetNavLink.classList.remove('active');
          }
        }
      });
    }

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (scrollProgressBar) {
        scrollProgressBar.style.width = `${scrollPercent}%`;
      }

      if (navbar) {
        if (scrollTop > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      if (backToTopBtn) {
        if (scrollTop > 400) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      }

      updateActiveNavLink();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // --- 4. Mobile Menu Navigation Drawer ---
  function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!mobileToggle || !navMenu) return;

    function openMobileMenu() {
      navMenu.classList.add('open');
      mobileToggle.setAttribute('aria-expanded', 'true');
      mobileToggle.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      `;
    }

    function closeMobileMenu() {
      navMenu.classList.remove('open');
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      `;
    }

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navMenu.classList.contains('open');
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });

    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(event.target) &&
        !mobileToggle.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  // --- 5. Interactive Projects Filter ---
  function initProjectFilters() {
    const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!projectFilterBtns.length || !projectCards.length) return;

    projectFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        projectFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const categories = card.getAttribute('data-category') || '';
          if (filterValue === 'all' || categories.includes(filterValue)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px) scale(0.97)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 6. Interactive Skills Category Switcher ---
  function initSkillFilters() {
    const skillsTabBtns = document.querySelectorAll('.skills-tab-btn');
    const skillCategoryCards = document.querySelectorAll('.skill-category-card');

    if (!skillsTabBtns.length || !skillCategoryCards.length) return;

    skillsTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        skillsTabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const catFilter = btn.getAttribute('data-skill-cat');

        skillCategoryCards.forEach(card => {
          const cat = card.getAttribute('data-category');
          if (catFilter === 'all' || cat === catFilter) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(12px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 7. Scroll Reveal Animations via IntersectionObserver ---
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    if ('IntersectionObserver' in window) {
      document.body.classList.add('js-reveal-ready');

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
      });

      revealElements.forEach(el => {
        // If element is already within viewport on load, activate immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('active');
        } else {
          revealObserver.observe(el);
        }
      });
    } else {
      // Fallback: make all active
      revealElements.forEach(el => el.classList.add('active'));
    }
  }

  // --- 8. Copy Email to Clipboard Feature ---
  function initCopyEmail() {
    const copyEmailBtn = document.getElementById('copy-email-btn');
    if (!copyEmailBtn) return;

    copyEmailBtn.addEventListener('click', async () => {
      const email = 'ameyghogare18@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyEmailBtn.textContent;
        copyEmailBtn.textContent = 'Copied!';
        copyEmailBtn.style.background = '#10b981';
        copyEmailBtn.style.color = '#ffffff';

        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
          copyEmailBtn.style.background = '';
          copyEmailBtn.style.color = '';
        }, 2000);
      } catch (err) {
        window.prompt('Copy email address:', email);
      }
    });
  }

  // --- 9. Contact Form Submission Handler ---
  function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    if (!contactForm || !formStatus) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
        formStatus.className = 'form-status-alert error';
        formStatus.textContent = 'Please complete all required fields before submitting.';
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        formStatus.className = 'form-status-alert error';
        formStatus.textContent = 'Please provide a valid email address.';
        return;
      }

      formStatus.className = 'form-status-alert success';
      formStatus.innerHTML = `
        <strong>Thank you, ${escapeHTML(name)}!</strong><br/>
        Launching your email application to send to <strong>ameyghogare18@gmail.com</strong>...
      `;

      const mailtoUrl = `mailto:ameyghogare18@gmail.com?subject=${encodeURIComponent('[Portfolio Contact] ' + subject)}&body=${encodeURIComponent('From: ' + name + ' (' + email + ')\n\nMessage:\n' + message)}`;
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 600);

      contactForm.reset();
    });

    function escapeHTML(str) {
      return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag));
    }
  }

  // --- Initialize All Modules Safely ---
  initTheme();
  initTypewriter();
  initScrollTracking();
  initMobileMenu();
  initProjectFilters();
  initSkillFilters();
  initScrollReveal();
  initCopyEmail();
  initContactForm();
});
