document.addEventListener('DOMContentLoaded', function() {
  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      productCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.filter = 'blur(8px)';
        }
      });
    });

    card.addEventListener('mouseout', () => {
      productCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.style.filter = 'none';
        }
      });
    });
  });
});
