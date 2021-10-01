let exitMenu;
let abrirMenu;
let menu;
let btnLogin;
let btnCadastro;
let wrapper;
let loginPage;
let cadastroPage;
let exitPopup;

// Criar um objeto de podcast
function podcast(name, img, author, url, feed){
  this.name = name;
  this.img = img;
  this.author = author;
  this.url = url;
  this.feed = feed;
}
function descPod (desc, title){
  this.desc =desc;
  this.title = title;
}

// Cria uma array para armazenar as requisicoes e uma variavel
let arr = [ ];
let num = 0;
let arrDesc = [];
// arrDesc.push(descHtml.querySelector("description").innerHTML.slice(11,((descHtml.querySelector("description").innerHTML.length)-6)));
// arrDesc.push(descHtml.querySelector("title").innerHTML.slice(12,((descHtml.querySelector("title").innerHTML.length)-6)));
function podFunc(ep){
  arr.push(new podcast(ep.results[0].collectionName, ep.results[0].artworkUrl600, ep.results[0].artistName, ep.results[0].collectionViewUrl, ep.results[0].feedUrl));
  async function fetchDesc(){
    const descRss = await fetch(ep.results[0].feedUrl);
    const descTxt = await descRss.text();
    let domParser = new DOMParser();
    const descHtml = domParser.parseFromString(descTxt, "text/html");
    arrDesc.push(new descPod(descHtml.querySelector("description").innerHTML,descHtml.querySelector("title").innerHTML));
    return (arrDesc);
  }
  fetchDesc().then(resp=>{
    // resp[2]["desc"] = resp[2]["desc"].replaceAll("<\!--[CDATA[", "");
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

    console.log(resp);

    const podImg = document.querySelectorAll(".podcast img");
    const podH1 = document.querySelectorAll(".podcast h1");
    const podP = document.querySelectorAll(".podcast p");
    const podcast = document.querySelectorAll("#podcasts a");
    podImg.forEach((element,index)=>{
      element.src = arr[index].img
    })
    console.log(podcast)
    podcast.forEach((element,index)=>{
      element.setAttribute("href", arr[index].url);
      element.style.textDecoration = "none";
      element.style.cursor = "pointer";
    })
    // podH1[num].innerHTML = arr[num].name; 
    podH1.forEach((element,index)=>{
      element.innerHTML = arr[index].name
      switch(element.innerHTML){
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
    // console.log((feedHtml.querySelectorAll("description")[0].innerHTML).slice(11,((feedHtml.querySelectorAll("description")[0].innerHTML).length)-5));
    // console.log(resp);
    // podP[num].innerHTML= resp;
    // num = num +1;
  })
  
    
}
window.addEventListener('load', () => {

  exitMenu = document.getElementById('sair');
  abrirMenu = document.getElementById('menu');
  menu = document.getElementById('menuMobile');
  let closeMenu = false;
  abrirMenu.addEventListener('click', () => {
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  })
  exitMenu.addEventListener('click', () => {
    menu.style.display = "none";
    closeMenu = true;
  })

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









// JS do funcionamento do comentário da página de artigos


window.addEventListener ('load', () => {

  let btnComentar = document.querySelector('.coment');
  let comentario = document.querySelector ('.comentario');
  comentario.style.display = 'none';

  btnComentar.addEventListener('click', () => {
          if (comentario.style.display === 'none'){
            comentario.style.display = 'block';
          } else {
            comentario.style.display = 'none';
          }
  })

  btnComentar.style.background='#fff';
})
