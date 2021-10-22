// nome: min 3 max 15
// sobrenome min 3 max 150
// includes @ .com e min 12 carac
// min 500 caracters 

console.log("formsLoad")
    console.log("buttonNotNull")
    const escrevaButton = (event)=>{
    console.log("click")
    event.preventDefault();
    const inputNome = document.querySelector("#fname");
    const inputSobre = document.querySelector("#lname");
    const inputEmail = document.querySelector("#email");
    const inputMessage = document.querySelector("#message");
    const ulErros = document.querySelector(".errosEscreva ul");
    let errorArr = [];
    ulErros.innerHTML = "";
    if(inputNome.value.length<3 || inputNome.value.length>15){
        errorArr.push("O primeiro nome deve possuir ao menos 3 caracteres e no máximo 15 caracteres");
    }
    if(inputSobre.value.length<3 || inputSobre.value.length>150){
        errorArr.push("O sobrenome deve possuir ao menos 3 caracteres e no máximo 150 caracteres");
    }

    if(inputEmail.value.length<12 || !inputEmail.value.includes("@") || !inputEmail.value.includes(".")){
        errorArr.push("O email deve possuir ao menos 12 caracteres e conter '@' e '.'");
    
    }    
    
    if(inputMessage.value.length<250|| inputMessage.value.length>4000){ 
        errorArr.push("A mensagem é deve possuir ao menos 250 caracteres e no máximo 4000");
    } 
    if(errorArr.length>0){
        errorArr.forEach(erro=>{
            ulErros.innerHTML += "<li>" + erro+ "</li>";
        })
    }else{
        window.location.reload();
}}
export{escrevaButton}
