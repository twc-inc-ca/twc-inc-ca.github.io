//Fade in animation
function showText(id) {
    document.getElementById(id).style.display = "inline";
}

const observer = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('fadein');
        
        
      }
    });
  });
  
  observer.observe(document.querySelector('#fadein1'));


  // Number of units count animation
  let count = 0;
  const countObserver = new IntersectionObserver(entries => {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting && count == 0) {
        // Add the animation class
        count = 1;
        function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
        }
        
        const obj = document.getElementById("value");
        animateValue(obj, 0, 322, 1500);
        
        
      }
    });
  });
  
  countObserver.observe(document.querySelector('#factSection'));









  
  
  