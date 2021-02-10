const box = document.querySelectorAll('.timeline-graphs');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('isVisible');
    } else {
      entry.target.classList.remove('isVisible');
    }
  });
});

box.forEach(image => {
  observer.observe(image);
});