function pesquisar(){
    let input, filtro, menu, menuItens, links;

    input = document.getElementById('artigo');
    filtro = input.value.toUpperCase();
    menu = document.querySelector('article.janela');
    menuItens = menu.querySelectorAll('h3');
    let menuItens2 = menu.querySelectorAll('a');
    vejaMais = document.getElementById('veja-mais');
    const selectedCat = Array.from(document.querySelectorAll(".selected"));

    for(let i=0; i<menuItens.length; i++){
        let links = menuItens[i];
        let listaDeClasses = []; 
        if(selectedCat.length>0){
            console.log(selectedCat)
            listaDeClasses = selectedCat[0].classList[0]
        }
        console.log(menuItens2);
        if(links.innerHTML.toUpperCase().includes(filtro) && (menuItens2[i].classList[0].includes(listaDeClasses) || menuItens2[i].classList[1].includes(listaDeClasses))){
            
            menuItens2[i].style.display='block';
            vejaMais.style.display='block';

        }else{
            menuItens2[i].style.display='none';
            vejaMais.style.display='none';
        }
        // catList.forEach(categoria=>{
        //     categoria.classList.remove("selected");
        //     categoria.style.fontWeight = "500"
        // })
            
     }
}

let toogle = true;
let arrCat = ["Tecnologia", "Empoderamento", "Ciencia", "Educacao", "Saude"];
const catList = document.querySelectorAll(".categorias ul li");
function boldCategoria(txt){
    if (txt.style.fontWeight == "500"){
        txt.style.fontWeight = "600";
    }else{
        txt.style.fontWeight = "500"
    }
}
function toggleView(view){
    const posts = document.querySelectorAll(".Cat");
    const selectedCat = document.querySelectorAll(".selected");
    selectedCat.forEach(ele=> {
       posts.forEach(element=>{
        if(!element.className.includes(ele.classList[0])){
            element.style.display = view;
        }else{
            element.style.display = "flex";
        }
       })
       
    });
}

function selectCat(cat, txt){
    // txt.classList.toggle("selected");
    const catList = document.querySelectorAll(".categorias ul li");
    if(!txt.className.includes("selected")){
        catList.forEach(categoria=>{
            categoria.classList.remove("selected");
            categoria.style.fontWeight = "500"
        })
        boldCategoria(txt);
        txt.className += " selected"
        toggleView("none")
    }else{
        boldCategoria(txt);
        toggleView("flex")
        txt.classList.remove("selected");
        
    }
    
    
    // cat = arrCat[cat];
    // boldCategoria(txt);
    // let vejaMais = document.getElementById('veja-mais');
    
    //     if (toogle){
    //         console.log("if" + toogle);
    //         posts.forEach(element=>{
    //             if(!element.className.includes(cat)){
    //                 element.style.display = "none";
    //                 toogle = false;
    //             } 
    //         })
    //         vejaMais.style.display = "none";
    //     }else{
    //         console.log("else"+ toogle);
    //         posts.forEach(element=>{
    //             element.style.display = "flex";
    //             toogle = true;
    //         })
    //         vejaMais.style.display = "block";
    //     };   
}
