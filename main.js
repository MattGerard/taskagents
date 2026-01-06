// TaskAgents.ai - Main JavaScript
// Minimal vanilla JS for progressive enhancement

(function() {
  'use strict';

  // Mobile menu toggle
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.nav-menu');

    if (toggle && menu) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('open');
        const isOpen = menu.classList.contains('open');
        toggle.setAttribute('aria-expanded', isOpen);
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!toggle.contains(e.target) && !menu.contains(e.target)) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      });

      // Close menu when clicking a link
      const menuLinks = menu.querySelectorAll('a');
      menuLinks.forEach(link => {
        link.addEventListener('click', function() {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // Add scrolled class to header
  function initStickyHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function updateHeader() {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', updateHeader);
    updateHeader();
  }

  // Set active nav link
  function initActiveNav() {
    const currentPage = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      if (linkPath === currentPage ||
          (currentPage === '/' && linkPath === '/') ||
          (currentPage.includes(linkPath) && linkPath !== '/')) {
        link.classList.add('active');
      }
    });
  }

  // Contact form handling
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    // Form submission with rate limiting
    let lastSubmitTime = 0;
    const SUBMIT_COOLDOWN = 60000; // 60 seconds

    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Rate limiting
      const now = Date.now();
      if (now - lastSubmitTime < SUBMIT_COOLDOWN) {
        const remainingTime = Math.ceil((SUBMIT_COOLDOWN - (now - lastSubmitTime)) / 1000);
        showFormMessage('error', `Please wait ${remainingTime} seconds before submitting again.`);
        return;
      }

      // Validate form
      if (!validateForm(form)) {
        return;
      }

      // Check honeypot
      const honeypot = form.querySelector('input[name="_gotcha"]');
      if (honeypot && honeypot.value) {
        // Silent fail for bots
        showFormMessage('success', 'Thank you for your message. We\'ll be in touch soon.');
        form.reset();
        return;
      }

      // Disable submit button
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const formData = new FormData(form);
        const formEndpoint = form.action;

        const response = await fetch(formEndpoint, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          lastSubmitTime = Date.now();
          showFormMessage('success', 'Thank you for your message. We\'ll be in touch within 24 hours.');
          form.reset();
          clearFormErrors();
        } else {
          const data = await response.json();
          if (data.errors) {
            showFormMessage('error', 'Please correct the errors and try again.');
          } else {
            throw new Error('Form submission failed');
          }
        }
      } catch (error) {
        console.error('Form submission error:', error);
        showFormMessage('error', 'There was a problem sending your message. Please try emailing us directly.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        validateField(input);
      });

      input.addEventListener('input', function() {
        // Clear error on input
        const errorEl = input.parentElement.querySelector('.form-error');
        if (errorEl) {
          errorEl.textContent = '';
          input.classList.remove('error');
        }
      });
    });
  }

  function validateForm(form) {
    let isValid = true;
    clearFormErrors();

    const inputs = form.querySelectorAll('input:not([name="_gotcha"]), textarea, select');
    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    return isValid;
  }

  function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let error = '';

    // Skip honeypot
    if (fieldName === '_gotcha') return true;

    // Required fields
    if (field.hasAttribute('required') && !value) {
      error = 'This field is required';
    }

    // Email validation
    if (fieldName === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Please enter a valid email address';
      }
    }

    // Show error if any
    if (error) {
      showFieldError(field, error);
      return false;
    }

    return true;
  }

  function showFieldError(field, message) {
    field.classList.add('error');
    let errorEl = field.parentElement.querySelector('.form-error');

    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'form-error';
      field.parentElement.appendChild(errorEl);
    }

    errorEl.textContent = message;
  }

  function clearFormErrors() {
    const errors = document.querySelectorAll('.form-error');
    errors.forEach(error => error.textContent = '');

    const errorInputs = document.querySelectorAll('.form-input.error, .form-textarea.error, .form-select.error');
    errorInputs.forEach(input => input.classList.remove('error'));
  }

  function showFormMessage(type, message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());

    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = `alert alert-${type} form-message`;
    messageEl.textContent = message;

    const form = document.getElementById('contact-form');
    form.insertBefore(messageEl, form.firstChild);

    // Auto-dismiss success messages
    if (type === 'success') {
      setTimeout(() => {
        messageEl.style.transition = 'opacity 0.3s ease-out';
        messageEl.style.opacity = '0';
        setTimeout(() => messageEl.remove(), 300);
      }, 5000);
    }

    // Scroll to message
    messageEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Fade-in animation on scroll
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.card, .timeline-item');
    animatedElements.forEach(el => observer.observe(el));
  }

  // Initialize everything when DOM is ready
  function init() {
    initMobileMenu();
    initStickyHeader();
    initActiveNav();
    initContactForm();

    // Only run animations if supported
    if ('IntersectionObserver' in window) {
      initScrollAnimations();
    }
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
