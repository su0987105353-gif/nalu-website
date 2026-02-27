// Main application script
document.addEventListener('DOMContentLoaded', () => {
  // Community Slider Logic
  let currentSlide = 0;
  const sliderContainer = document.getElementById('community-slider');
  const totalSlides = sliderContainer ? sliderContainer.children.length : 0;

  function updateSlidePosition() {
    if (sliderContainer) {
      sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }

  window.nextSlide = function () {
    if (totalSlides > 0) {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
    }
  }

  window.prevSlide = function () {
    if (totalSlides > 0) {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }
  }

  // Mobile Menu Logic
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });

  // Back to Top Button Logic (Debounced)
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (window.scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
          backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        }
      }, 16); // ~60fps
    }, { passive: true });
  }

  // Booking Form Logic
  const bookingForm = document.getElementById('bookingForm');
  const submitBtn = document.getElementById('submitBtn');
  const formMessage = document.getElementById('formMessage');

  const GAS_URL = 'https://script.google.com/macros/s/AKfycbxX34dMw9eHCZG30u4YaB2mjbj-ebtwUYQmaquXSdfnq1NE9pgqZSM_bkz4NvKvWhl1/exec';

  if (bookingForm) {
    const dateInput = document.getElementById('date');
    if (dateInput) {
      const today = new Date().toISOString().split('T')[0];
      dateInput.min = today;
    }

    // Form Validation
    function validateForm(form) {
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const phone = form.querySelector('#phone').value.trim();
      const date = form.querySelector('#date').value;
      const people = form.querySelector('#people').value;
      const trip = form.querySelector('#trip').value;

      if (!name || name.length < 2) {
        alert('Please enter a valid name (at least 2 characters)');
        return false;
      }

      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert('Please enter a valid email address');
        return false;
      }

      if (!phone || phone.length < 7) {
        alert('Please enter a valid phone number');
        return false;
      }

      if (!date) {
        alert('Please select a travel date');
        return false;
      }

      if (!people || people < 1) {
        alert('Please enter the number of people');
        return false;
      }

      if (!trip) {
        alert('Please select an adventure');
        return false;
      }

      return true;
    }

    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!validateForm(bookingForm)) {
        return;
      }

      submitBtn.innerText = 'Sending...';
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-70', 'cursor-not-allowed');
      formMessage.classList.add('hidden');

      const formData = new FormData(bookingForm);
      const urlEncodedData = new URLSearchParams(formData);

      fetch(GAS_URL, {
        method: 'POST',
        body: urlEncodedData
      })
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => {
          if (data.success) {
            alert('✅ ' + data.message);
            formMessage.innerText = data.message;
            formMessage.className = 'text-green-400 text-center text-sm font-bold mt-2 block';
            bookingForm.reset();
          } else {
            throw new Error(data.message || 'Server returned false success status.');
          }
        })
        .catch(error => {
          console.error('Error:', error);
          alert('❌ Submission failed. Please try again or contact us via WhatsApp.');
          formMessage.innerText = 'Something went wrong. Please try WhatsApp directly.';
          formMessage.className = 'text-red-400 text-center text-sm font-bold mt-2 block';
        })
        .finally(() => {
          submitBtn.innerText = 'Confirm Booking';
          submitBtn.disabled = false;
          submitBtn.classList.remove('opacity-70', 'cursor-not-allowed');
        });
    });
  }

  // Price Match Checkbox Logic
  const priceMatchCheckbox = document.getElementById('priceMatch');
  const quoteContainer = document.getElementById('quoteDetailsContainer');
  const quoteDetails = document.getElementById('quoteDetails');

  if (priceMatchCheckbox && quoteContainer) {
    priceMatchCheckbox.addEventListener('change', function () {
      if (this.checked) {
        quoteContainer.classList.remove('max-h-0', 'opacity-0');
        quoteContainer.classList.add('max-h-32', 'opacity-100');
      } else {
        quoteContainer.classList.remove('max-h-32', 'opacity-100');
        quoteContainer.classList.add('max-h-0', 'opacity-0');
        quoteDetails.value = '';
      }
    });
  }
});
