if (window.feather) {
  window.feather.replace();
}

const menuButton = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const navigation = document.querySelector('#site-nav');

function closeMenu() {
  sidebar.classList.remove('menu-open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const open = sidebar.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && sidebar.classList.contains('menu-open')) {
    closeMenu();
    menuButton.focus();
  }
});

const lightbox = document.querySelector('.lightbox');
if (lightbox) {
  const image = lightbox.querySelector('img');
  const caption = lightbox.querySelector('p');
  document.querySelectorAll('.photo-open').forEach((button) => {
    button.addEventListener('click', () => {
      image.src = button.dataset.full;
      image.alt = button.dataset.caption;
      caption.textContent = button.dataset.caption;
      lightbox.showModal();
    });
  });
  lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
}
