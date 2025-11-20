// script.js
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // toggle active class
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const level = btn.getAttribute('data-level');
      cards.forEach(card => {
        const cardLevel = card.getAttribute('data-level');
        
        if (level === 'All' || cardLevel === level) {
          // tampilkan dengan animasi
          card.style.display = '';
          requestAnimationFrame(() => {
            card.classList.add('fade-in');
            card.classList.remove('fade-out');
          });
        } else {
          // sembunyikan dengan animasi
          card.classList.add('fade-out');
          card.classList.remove('fade-in');
          setTimeout(() => {
            if (card.classList.contains('fade-out')) {
              card.style.display = 'none';
            }
          }, 300); // durasi sama dengan CSS
        }
      });
    });
  });

  // keyboard accessibility - tekan Enter untuk aktifkan filter
  filterButtons.forEach(btn => {
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') btn.click();
    });
  });

  // (optional) buat seluruh card bisa diklik
  // cards.forEach(card => {
  //   card.addEventListener('click', () => {
  //     const slug = card.getAttribute('data-slug');
  //     if (slug) window.location.href = `reading-${slug}.html`;
  //   });
  // });
});
