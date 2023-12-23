const menuBtn = document.querySelector('.btn--menu');

menuBtn.addEventListener('click', () => {
  const isExpanded = JSON.parse(menuBtn.getAttribute('aria-expanded'));
  menuBtn.setAttribute('aria-expanded', !isExpanded);
})