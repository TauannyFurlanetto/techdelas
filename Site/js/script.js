const exitMenu = document.getElementById('sair');
const abrirMenu = document.getElementById('menu');
const menu = document.getElementById('menuMobile');

abrirMenu.addEventListener('click', ()=> {
if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
})

exitMenu.addEventListener('click', ()=> {
    menu.style.display = "none";
})