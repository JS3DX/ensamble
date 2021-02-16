const elementsToExpand = document.querySelectorAll('.timeline-graphs');

let expansionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('isVisible');
    } else {
      entry.target.classList.remove('isVisible');
    }
  });

});

elementsToExpand.forEach((element) => {
  expansionObserver.observe(element);
});

