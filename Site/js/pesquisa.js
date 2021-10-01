function pesquisar(){
    let input, filtro, menu, menuItens, links;

    input = document.getElementById('artigo');
    filtro = input.value.toUpperCase();
    menu = document.querySelector('article.janela');
    menuItens = menu.querySelectorAll('h3');
    menuItens2 = menu.querySelectorAll('a');

    for(let i=0; i<menuItens.length; i++){
        let links = menuItens[i];
            

        if(links.innerHTML.toUpperCase().includes(filtro)){
            menuItens2[i].style.display='block';
            console.log(menuItens2[i])
        }else{
            menuItens2[i].style.display='none';
        }
            
     }
}

