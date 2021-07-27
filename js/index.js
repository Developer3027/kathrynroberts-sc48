/* countdown clock */
const deadline = new Date('jan 20, 2024 12:00:00').getTime();

function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

const x = setInterval(function () {
  const now = new Date().getTime();
  const t = deadline - now;
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((t % (1000 * 60)) / 1000);

  document.getElementById('day').innerHTML = days;
  document.getElementById('hour').innerHTML = addZero(hours);
  document.getElementById('minute').innerHTML = addZero(minutes);
  document.getElementById('second').innerHTML = addZero(seconds);
  if (t < 0) {
    clearInterval(x);
    document.getElementById('demo').innerHTML = 'TIME UP';
    document.getElementById('day').innerHTML = '0';
    document.getElementById('hour').innerHTML = '0';
    document.getElementById('minute').innerHTML = '0';
    document.getElementById('second').innerHTML = '0';
  }
}, 1000);

/* Hide Navbar scroll */
// const nav = document.querySelector('nav')
// const navLabel = document.querySelector('label')
// const heroMain = document.querySelector('.hero-main')

// const mainOptions = {
//   threshold: '.20',
//   rootMargin: ''
// }

// const mainObserver = new IntersectionObserver(function (entries, mainObserver) {
//   entries.forEach(entry => {
//     console.log(entry)
//     if (!entry.isIntersecting) {
//       nav.classList.remove('nav-hide')
//       nav.classList.add('navbar-lite')
//       navLabel.classList.remove('hide-nav')
//     } else {
//       nav.classList.add('nav-hide')
//       nav.classList.remove('navbar-lite')
//       navLabel.classList.add('hide-nav')
//     }
//   })
// }, mainOptions)

// mainObserver.observe(heroMain)
