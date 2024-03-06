function updateNavbarStyle() {
  const navbar = document.querySelector('header');
  const isNavbarAtTop = window.scrollY === 0;

  navbar.style.transition = 'background-color 0.5s ease, box-shadow 0.5s ease';

  if (isNavbarAtTop) {
    navbar.style.backgroundColor = '#f2f5f7';
    navbar.style.boxShadow = 'none';
  } else {
    navbar.style.backgroundColor = '#fff';
    navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  }
}

window.addEventListener('scroll', updateNavbarStyle);

// Initial check to set the default style when the page loads
updateNavbarStyle();
