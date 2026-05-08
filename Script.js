document.getElementById('btnGreet').addEventListener('click', function() {
  alert(`Halo! Saya Muhammad Fahmi Haekal.\nSenang berkenalan dengan Anda! 👋`);
});

// Efek muncul perlahan
const cards = document.querySelectorAll('.header-card, .content-card');
cards.forEach((card, index) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'all 0.5s ease';
  
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 200 * index);
});
