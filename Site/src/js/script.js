
let exitMenu;
let abrirMenu;
let menu;
let btnLogin;
let btnCadastro;
let wrapper;
let loginPage;
let cadastroPage;
let exitPopup;

let verMais;

window.addEventListener('load', () => {
	// Pega os elementos
	console.log("load")
	exitMenu = document.getElementById('sair');
	abrirMenu = document.getElementById('menu');
	menu = document.getElementById('menuMobile');
	let closeMenu = false;
	// Abre o menu
	if (abrirMenu !== null){
		abrirMenu.addEventListener('click', () => {
			if (menu.style.display === "block") {
				menu.style.display = "none";
			} else {
				menu.style.display = "block";
			}
		})
	}
	// Fecha o menu
	if (exitMenu !== null){
		exitMenu.addEventListener('click', () => {
			menu.style.display = "none";
			closeMenu = true;
		})
	}
	// Retorna o menu desktop caso a tela aumente de novo
	window.addEventListener("resize", () => {
		if (window.innerWidth > 1040) {
			menu.style.display = "flex";
			closeMenu = false;
		}
		if (window.innerWidth < 1040 && closeMenu === false) {
			if (menu.style.display === "flex") {
				menu.style.display = "none";
			}
		}
	})

	//Veja mais!!!! aaaaaaaaaaa

	// verMais = document.getElementById("veja-mais")
	// if (verMais !== null) {
	// 	verMais.onclick = (event) => {
	// 		event.preventDefault();
	// 		addPost(3)
	// 	}
	// }

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
		if (event.target === wrapper) {
			closePopup()
		} else
			exitPopup.forEach(exit => {
				if (event.target === exit) {
					event.preventDefault();
					closePopup();
				}
			});
	}

})

function loginToggle() {
	wrapper.classList.toggle("active");
	loginPage.classList.toggle("active")
}

function cadastroToggle() {
	wrapper.classList.toggle("active");
	cadastroPage.classList.toggle("active");
}

function closePopup() {
	wrapper.classList.remove("active");
	loginPage.classList.remove("active");
	cadastroPage.classList.remove("active");
	let erroClear = document.querySelectorAll(".error");
	console.log(erroClear)
	erroClear.forEach(error=>{
		error.innerHTML = " "
	})
	
}

function addPost(newPostsAmount) {
	const postsList = document.querySelector(".postagens")

	for (let i = 0; i < newPostsAmount; i++) {
		const cloneLastPost = (document.querySelector(".postagens a:last-child")).cloneNode(true) //retorna clone do ultimo post da lista, deve ser trocado por novos posts eventualmente
		const newPost = cloneLastPost //newPost deve guardar os novos posts, que no momento não existem então ok
		postsList.appendChild(newPost)
	}

}

// JS do funcionamento do comentário da página de artigos

window.addEventListener ('load', () => {
	let btnComentar = document.querySelector('.coment');
	if (btnComentar !== null){
		let comentario = document.querySelector ('.comentario');
		comentario.style.display = 'none';
		
		btnComentar.addEventListener('click', () => {
				if (comentario.style.display === 'none'){
				comentario.style.display = 'block';
				} else {
				comentario.style.display = 'none';
				}
		})
	}
})

window.addEventListener('load', () => {

  let btnComentar = document.querySelector('.coment');
  if(btnComentar !== null){
	btnComentar.onmouseover = (evento) => {
	btnComentar.style.cssText = 'background-color: #fff';
	}
  }
})

window.addEventListener ('load', () => {
  let like = document.querySelector(".reacao img");
	if(like !== null){
		like.addEventListener("click", ()=>{
			if( like.src.includes("icones/thumbs-up.svg")){
			  like.src = "icones/like_colorido.svg";
			} else {
			  like.src = "icones/thumbs-up.svg";
			}
		  })
	} 
}) 


let inpLogEmail;
let inpLogPass;

let inpRegEmail;
let inpRegPass;
let inpRegConfirmPass;
let inpRegName;

let popupLogin;
let popupRegister;

window.addEventListener("load", () => {

	inpLogEmail = document.getElementById("login-email")
	inpLogPass = document.getElementById("login-senha")
	inpRegEmail = document.getElementById("reg-email")
	inpRegPass = document.getElementById("reg-senha")
	inpRegConfirmPass = document.getElementById("reg-senha-confirm")
	inpRegName = document.getElementById("reg-nome")
	popupLogin = document.querySelector(".pop-up button.login")
	popupRegister = document.querySelector(".pop-up button.register")

	popupLogin.addEventListener("click", (event) => {
		event.preventDefault()
		if (ValidateForm(event.target.classList[0]) === 0){
			event.target.parentNode.parentNode.submit()
		}

		//console.log(event.target.classList[0]) //retorna primeira classe do botão clicado
	})
	popupRegister.addEventListener("click", (event) => {
		event.preventDefault()
		if (ValidateForm(event.target.classList[0]) === 0){
			event.target.parentNode.parentNode.submit()
		}
	})
})

function ValidateForm(classname) {
	let labelDivs
	if (classname === "register") {
		labelDivs = document.querySelectorAll(".pop-up.register form > .pop-up-labels")
		let errorNum = 0
		if (inpRegName.value.length < 3 || inpRegName.value.length > 20) {
			InsertErrorMessage("register", "nome", "Nome inválido")
			errorNum += 1
		}
		else {
			InsertErrorMessage("register", "nome") //passando nenhum parametro de mensagem de erro o erro some da tela
		}

		if (!inpRegEmail.value.includes("@")) {
			InsertErrorMessage("register", "email", "Email inválido")
			errorNum += 1
		}
		else {
			InsertErrorMessage("register", "email") //passando nenhum parametro de mensagem de erro o erro some da tela
		}

		if (inpRegPass.value.length < 6) {
			InsertErrorMessage("register", "senha", "Senha deve ter ao menos 6 caracteres")
			errorNum += 1
		}
		else {
			InsertErrorMessage("register", "senha") //passando nenhum parametro de mensagem de erro o erro some da tela
		}

		if (inpRegConfirmPass.value !== inpRegPass.value) {
			InsertErrorMessage("register", "senha-confirm", "Senha incorreta")
			errorNum += 1
		}
		else {
			InsertErrorMessage("register", "senha-confirm") //passando nenhum parametro de mensagem de erro o erro some da tela
		}
		return errorNum
	}
	else if (classname === "login") {
		labelDivs = document.querySelectorAll(".pop-up.login form > .pop-up-labels")
		let errorNum = 0

		if (!inpLogEmail.value.includes("@")) {
			InsertErrorMessage("login", "email", "Email inválido")
			errorNum += 1
		}
		else {
			InsertErrorMessage("login", "email") //passando nenhum parametro de mensagem de erro o erro some da tela
		}

		if (inpLogPass.value.length < 6) {
			InsertErrorMessage("login", "senha", "Senha deve ter ao menos 6 caracteres")
			errorNum += 1
		}
		else {
			InsertErrorMessage("login", "senha") //passando nenhum parametro de mensagem de erro o erro some da tela
		}
		return errorNum
	}
	
}

function CreateErrorElement(innerhtml = "") {
	const errorP = document.createElement("p")
	errorP.className = "error"
	errorP.style = "margin: 0; color: red; font-size: 0.7rem;padding-left: 1rem;"
	errorP.innerHTML = innerhtml
	return errorP
}



function InsertErrorMessage(popup, labelname, msg) {
	const labelError = document.querySelector(".pop-up." + popup + " .pop-up-labels." + labelname + " p")
	labelError.parentNode.replaceChild(CreateErrorElement(msg), labelError)
}
