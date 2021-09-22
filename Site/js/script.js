let exitMenu;
let abrirMenu;
let menu;
let btnLogin;
let btnCadastro;
let wrapper;
let loginPage;
let cadastroPage;
let exitPopup;


window.addEventListener('load', () => {

  exitMenu = document.getElementById('sair');
  abrirMenu = document.getElementById('menu');
  menu = document.getElementById('menuMobile');

  abrirMenu.addEventListener('click', () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  })

  exitMenu.addEventListener('click', () => {
    menu.style.display = "none";
  })

  // pop-up stuff

  btnLogin = document.querySelector("#login");
  btnCadastro = document.querySelector("#cadastro");

  wrapper = document.querySelector(".pop-up-wrapper");
  loginPage = document.querySelector(".pop-up.login");
  cadastroPage = document.querySelector(".pop-up.register");
  exitPopup = document.querySelectorAll(".pop-up img:first-of-type")

  btnLogin.onclick = (event) => {
    loginToggle()
  }

  btnCadastro.onclick = (event) => {
    cadastroToggle()
  }

  wrapper.onclick = (event) => {
    if (event.target == wrapper) {
      closePopup()
    } 
    else
    exitPopup.forEach(exit => {
      if (event.target == exit) {
        event.preventDefault();
        closePopup();
      }
    });
  }

})

function loginToggle() {
  wrapper.classList.toggle("active");
  loginPage.classList.toggle("active");
}

function cadastroToggle() {
  wrapper.classList.toggle("active");
  cadastroPage.classList.toggle("active");
}

function closePopup() {
  wrapper.classList.remove("active");
  loginPage.classList.remove("active");
  cadastroPage.classList.remove("active");
}
