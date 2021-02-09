// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');

const section = document.getElementById('education');
const cards = document.querySelectorAll('.card');

//Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    mobileNav.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');

    navItems.forEach((item) => item.classList.add('show'));

    //Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    mobileNav.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');

    navItems.forEach((item) => item.classList.remove('show'));

    //Set Menu State
    showMenu = false;
  }
}

navItems.forEach((item) => item.addEventListener('click', closeMenu));

function closeMenu() {
  menuBtn.classList.remove('close');
  mobileNav.classList.remove('show');
  menuBranding.classList.remove('show');
  menuNav.classList.remove('show');

  showMenu = true;
}

// License active cards
$('.l-card').click(function () {
  $('.l-card').removeClass('active');
  // $(".tab").addClass("active"); // instead of this do the below
  $(this).addClass('active');
});
