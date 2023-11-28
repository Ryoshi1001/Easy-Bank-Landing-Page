const mobileOpenBtn = document.getElementById('menuopenbtn')

const mobileCloseBtn = document.getElementById('menuclosebtn')

const mobilemenu = document.getElementById('mobile-nav-menu')

mobileOpenBtn.addEventListener('click', () => {
  mobileOpenBtn.classList.add('hidden')
  mobileCloseBtn.classList.remove('hidden')
  mobilemenu.classList.add('mobile-menu-animate')
  document.body.style.overflow='hidden'
  document.main.style.background = 'rgba(23, 40, 30, .1)';

})

mobileCloseBtn.addEventListener('click', () => {
  mobileOpenBtn.classList.remove('hidden')
  mobileCloseBtn.classList.add('hidden')
  mobilemenu.classList.remove('mobile-menu-animate')
  document.body.style.overflow = 'visible'
})