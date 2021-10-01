function pesquisar(){
    let input, filtro, menu, menuItens, links;

    input = document.getElementById('artigo');
    filtro = input.value.toUpperCase();
    menu = document.querySelector('article.janela');
    menuItens = menu.querySelectorAll('h3');
    menuItens2 = menu.querySelectorAll('a');
    vejaMais = document.getElementById('veja-mais');

    for(let i=0; i<menuItens.length; i++){
        let links = menuItens[i];
            
        if(links.innerHTML.toUpperCase().includes(filtro)){
            menuItens2[i].style.display='block';
            vejaMais.style.display='block';

        }else{
            menuItens2[i].style.display='none';
            vejaMais.style.display='none';
        }
        
            
     }
}

let toogle = true;
let arrCat = ["Tecnologia", "Empoderamento", "Ciencia", "Educacao", "Saude"];
const catList = document.querySelectorAll(".categorias ul li");
catList.forEach(ele=>{
    ele.style.fontWeight = "500"
})
function selectCat(cat, txt){
    cat = arrCat[cat];
    if (txt.style.fontWeight == "500"){
        txt.style.fontWeight = "600";
    }else{
        txt.style.fontWeight = "500"
    }
    let vejaMais = document.getElementById('veja-mais');
    const posts = document.querySelectorAll(".Cat");
        console.log("click");
        if (toogle){
            console.log("if" + toogle);
            posts.forEach(element=>{
                if(!element.className.includes(cat)){
                    element.style.display = "none";
                    toogle = false;
                } 
            })
            vejaMais.style.display = "none";
        }else{
            console.log("else"+ toogle);
            posts.forEach(element=>{
                element.style.display = "flex";
                toogle = true;
            })
            vejaMais.style.display = "block";
        };   
}