// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
});

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = {};
      
      for (let [key, value] of formData.entries()) {
        data[key] = value;
      }
      
      // Simple validation
      if (!data.firstName || !data.lastName || !data.email || !data.message) {
        alert('Vui lòng điền đầy đủ các thông tin bắt buộc!');
        return;
      }
      
      // Simulate form submission
      alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong vòng 24 giờ.');
      form.reset();
    });
  }
});

// Smooth scrolling for navbar links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Add loading animation to form button
document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('.btn[type="submit"]');
  
  if (submitBtn) {
    submitBtn.addEventListener('click', function() {
      const originalText = this.innerHTML;
      this.innerHTML = '<i class="bi bi-hourglass-split"></i> Đang gửi...';
      this.disabled = true;
      
      setTimeout(() => {
        this.innerHTML = originalText;
        this.disabled = false;
      }, 2000);
    });
  }
});
