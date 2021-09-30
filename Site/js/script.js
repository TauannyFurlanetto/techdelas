let exitMenu;
let abrirMenu;
let menu;
let btnLogin;
let btnCadastro;
let wrapper;
let loginPage;
let cadastroPage;
let exitPopup;

// PODCAST

// Criar um objeto de podcast
function podcast(name, img, author, url, feed){
  this.name = name;
  this.img = img;
  this.author = author;
  this.url = url;
  this.feed = feed;
}
// Cria um objeto da descricao do podcast
function descPod (desc, title){
  this.desc =desc;
  this.title = title; //Será usado como chave de comparação
}

// Cria uma array para armazenar as requisicoes
let arr = [ ];
// Cria uma array para armazenar as decricoes
let arrDesc = [];
// Cria um contador
let num =0;
function numSum (){
  return num = num +1;
}
//Pega o resultado da requisicao do script no HTML
function podFunc(ep){
  // Armazena os podcasts
  arr.push(new podcast(ep.results[0].collectionName, ep.results[0].artworkUrl600, ep.results[0].artistName, ep.results[0].collectionViewUrl, ep.results[0].feedUrl));
  
  // Funcao que busca a desricao
  async function fetchDesc(){
    console.log(ep.results[0].feedUrl)
    const descRss = await fetch(ep.results[0].feedUrl);
    const descTxt = await descRss.text();
    let domParser = new DOMParser();
    const descHtml = domParser.parseFromString(descTxt, "text/html");
    arrDesc.push(new descPod(descHtml.querySelector("description").innerHTML,descHtml.querySelector("title").innerHTML));
    console.log(arrDesc)
    return (arrDesc);
  }
  // Busca a descricao
  fetchDesc().then(resp=>{
    // Formatacao da descricao e titulo
    resp.map((element)=>{
      element["desc"] = element["desc"].replaceAll("<\!--[CDATA[", "");
      element["desc"] = element["desc"].replaceAll("<p-->", "");
      element["desc"] = element["desc"].replaceAll("&nbsp", "");
      element["desc"] = element["desc"].replaceAll(";", "");
      element["desc"] = element["desc"].replaceAll("<p></p>]]", "");
      element["desc"] = element["desc"].replaceAll("]]-->", "");
      element["desc"] = element["desc"].replaceAll("&g", "");
      element["desc"] = element["desc"].replaceAll(".t", "");

      element["title"] = element["title"].replaceAll("&lt;![CDATA[", "");
      element["title"] = element["title"].replaceAll("]]&gt;", "");
    });

    // Seleciona os objetos no html
    const podImg = document.querySelectorAll(".podcast img");
    const podH1 = document.querySelectorAll(".podcast h1");
    const podP = document.querySelectorAll(".podcast p");
    const podcast = document.querySelectorAll("#podcasts a");

    // Define os valores das imagens, h1 e do a (href)
    podImg[num].src = arr[num].img;
    podcast[num].setAttribute("href", arr[num].url);
    podcast[num].style.textDecoration = "none";
    podcast[num].style.cursor = "pointer";
    podH1[num].innerHTML = arr[num].name;
    numSum();
    podH1.forEach((element,index)=>{
      element.innerHTML = arr[index].name
      switch(element.innerHTML){
        // Compara o titulo do podcast atual ao titulo da descricao
        // Atribui o valor adequado ao paragrafo
        case resp[0]["title"]:
          podP[index].innerHTML = resp[0]["desc"];
          break;
        case resp[1]["title"]:
          podP[index].innerHTML = resp[1]["desc"];
          break;
        case resp[2]["title"]:
          podP[index].innerHTML = resp[2]["desc"];
          break;
        case resp[3]["title"]:
          podP[index].innerHTML = resp[3]["desc"];
          break;
        case resp[4]["title"]:
          podP[index].innerHTML = resp[4]["desc"];
          break;
        default:
          break;
      }
    })
  }).catch(err =>{
  });
}

// MENU
window.addEventListener('load', () => {

  // Pega os elementos
  exitMenu = document.getElementById('sair');
  abrirMenu = document.getElementById('menu');
  menu = document.getElementById('menuMobile');
  let closeMenu = false;
  // Abre o menu
  abrirMenu.addEventListener('click', () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  })
  // Fecha o menu
  exitMenu.addEventListener('click', () => {
    menu.style.display = "none";
    closeMenu = true;
  })
  // Retorna o menu desktop caso a tela aumente de novo
  window.addEventListener("resize", ()=>{
    if(window.innerWidth>1040){
      menu.style.display = "flex";
      closeMenu = false;
    }
    if(window.innerWidth<1040 && closeMenu == false){
      if(menu.style.display == "flex"){
          menu.style.display = "none";
        }
    }
  })

  // POP-UP

  // pop-up stuff

  btnLogin = document.querySelector("#login");
  btnCadastro = document.querySelector("#cadastro");

  wrapper = document.querySelector(".pop-up-wrapper");
  loginPage = document.querySelector(".pop-up.login");
  cadastroPage = document.querySelector(".pop-up.register");
  exitPopup = document.querySelectorAll(".pop-up a img:first-of-type")

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
