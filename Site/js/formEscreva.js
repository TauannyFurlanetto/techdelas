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
            errorArr.push("O nome deve ser menor que 15 e maior que 3");
        }
        if(inputSobre.value.length<3 || inputSobre.value.length>150){
            errorArr.push("O nome deve ser menor que 150 e maior que 3");
        }
        if(inputEmail.value.length<12 || !inputEmail.value.includes("@") || !inputEmail.value.includes(".")){
            errorArr.push("O email deve ser maior 12 e conter '@' e '.'");
        }
        if(inputMessage.value.length<500 || inputMessage.value.length<4000){ 
            errorArr.push("A mensagem é muito pequena, deve ser maior que 250 caracteres");
        }if(errorArr.length>0){
            console.log(ulErros);
            errorArr.forEach(erro=>{
                ulErros.innerHTML += "<li>" + erro+ "</li>";
            })
        }else{
            formEscreva.submit();
        }
    })
})