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
  
  observer.observe(document.querySelector('#fadein2'));
  observer.observe(document.querySelector('#fadein3'));
  observer.observe(document.querySelector('#fadein4'));
  observer.observe(document.querySelector('#fadein5'));