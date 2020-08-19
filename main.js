const options = {
    threshold: .4
}
  
const observer = new IntersectionObserver(colorize, options);

const target = document.querySelector('.bohan-pic');
observer.observe(target);

function colorize (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            target.classList.add('colorize')
        }
    })
}
