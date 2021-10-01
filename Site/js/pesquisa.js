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
            vejaMais.style.display='none';

        }else{
            menuItens2[i].style.display='none';
            vejaMais.style.display='block';
        }
            
     }
}

