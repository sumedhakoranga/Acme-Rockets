const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobineMenu = document.getElementById('mobile-menu')

  const toggleMenu = () =>{
    mobineMenu.classList.toggle('hidden')
    mobineMenu.classList.toggle('flex')
  }

  hamburgerBtn.addEventListener('click', toggleMenu)
  mobineMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)