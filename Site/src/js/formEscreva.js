// nome: min 3 max 15
// sobrenome min 3 max 150
// includes @ .com e min 12 carac
// min 500 caracters 

const escrevaButton = document.querySelector("#buttom-forms");
const formEscreva = document.querySelector(".forms form");

window.addEventListener("load", ()=>{
    escrevaButton.addEventListener("click", (event)=>{
        event.preventDefault();
        
        const inputNome = document.querySelector("#fname");
        const inputSobre = document.querySelector("#lname");
        const inputEmail = document.querySelector("#email");
        const inputMessage = document.querySelector("#message");
        const ulErros = document.querySelector(".errosEscreva ul");
        let errorArr = [];
        ulErros.innerHTML = "";

        console.log(inputNome.value.length<3);
        if(inputNome.value.length<3 || inputNome.value.length>15){
            console.log(inputNome.value.length<3);
            errorArr.push("O primeiro nome deve possuir ao menos 3 caracteres e no máximo 15 caracteres");
        }
        if(inputSobre.value.length<3 || inputSobre.value.length>150){
            errorArr.push("O sobrenome deve possuir ao menos 3 caracteres e no máximo 150 caracteres");
        }
        if(inputEmail.value.length<12 || !inputEmail.value.includes("@") || !inputEmail.value.includes(".")){
            errorArr.push("O email deve possuir ao menos 12 caracteres e conter '@' e '.'");
        }
        if(inputMessage.value.length<500 || inputMessage.value.length<4000){ 
            errorArr.push("A mensagem é muito pequena, deve possuir ao menos 250 caracteres");
        } if(errorArr.length>0){
            console.log(ulErros);
            errorArr.forEach(erro=>{
                ulErros.innerHTML += "<li>" + erro+ "</li>";
            })
        } else{
            formEscreva.submit();
        }
    })
})