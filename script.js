/* const box = document.querySelectorAll('.timeline-graphs');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('isVisible');
    } else {
      entry.target.classList.remove('isVisible');
    }
  });
});

box.forEach(box => {
  observer.observe(box);
}); */





const elementsToExpand = document.querySelectorAll('.timeline-graphs');

let expansionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      console.log('Yep');
      //entry.target.style.animation = `expansion 2s ease-in-out`;

    } else {
      // entry.target.style.animation = "none";
      console.log('Nope')
    }
  });

});

elementsToExpand.forEach((element) => {
  expansionObserver.observe(element);
});

console.log('Hi');