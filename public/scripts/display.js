let lastScrollTop = 0;
const menu = document.querySelector('.menusection');

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;

  if (scroll > lastScrollTop) {
    menu.style.opacity = '0';
    menu.style.display = 'none';
  } else {
    menu.style.opacity = '100';
    menu.style.display = 'flex';
  }
  lastScrollTop = scroll;
});
