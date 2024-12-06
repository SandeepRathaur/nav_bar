// Change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Optional: Highlight current section (if needed)
  document.querySelectorAll('#navbar a').forEach(link => {
    link.addEventListener('click', event => {
      document.querySelectorAll('#navbar a').forEach(item => item.classList.remove('active'));
      event.target.classList.add('active');
    });
  });
  