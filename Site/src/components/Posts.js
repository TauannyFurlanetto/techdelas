import {pesquisar} from'../js/pesquisa.js';
import Categoria from './Categoria.js';
import Artigo from './Artigo.js';
import lupa from "../icones/lupa.svg";
import postImg from "../img/post1.jpg";

import {readdir} from 'fs'





function Posts(){

    let listaDePosts = require.context("../posts", false, "/.js/")
    
    console.log(listaDePosts);
    console.log("aaaaaaaaaa");

    let categorias = [
        { 
            classe: "Tecnologia",
            txt: "Tecnologia"
        },
        {
            classe: "Empoderamento",
            txt: "Empoderamento"
        },
        {
            classe: "Ciencia",
            txt: "Ciência"
        },
        {
            classe: "Educacao",
            txt: "Educação"
        },
        { 
            classe: "Saude",
            txt: "Saúde Mental"
        }
    ]
    let postagens = [
        {
            titulo: "Mulheres na Tecnologia",
            classes: "Tecnologia Empoderamento",
            txt: "Como está a presença delas no mercado de TI?",
            img: postImg,
            alt: "Mulher digital",
            artigo: "artigo/artigo-tech"
        },
        {
            titulo: "Mulheres revolucionárias na Engenharia Química",
            classes: "Ciencia Empoderamento",
            txt: "Inspirações femininas na área, desafios e motivações",
            img: postImg,
            alt: "Mulher extraindo químico de tonel com uma mangueira",
            artigo: "artigo/artigo"
        },
        {
            titulo: "Empoderamento da Mulher na Medicina",
            classes: "Empoderamento",
            txt: "Apesar de representar a maioria na linha de frente contra o Coronavírus, as mulheres ainda enfrentam uma série de desafios",
            img: postImg,
            alt: "Mulher colocando luva médica",
            artigo: "artigo/artigo-med"
        }
    ]
    return(
        <section className="posts">
        <div className="container">
            <article className="barra">
                <div className="topo">
                    <button><img src={lupa} alt=""/></button>
                    <input type="text" name="pesquisarArtigo" id="artigo" placeholder="Pesquise um post..." onKeyUp={pesquisar}/>
                </div>
                <div className="categorias">
                    <ul>
                        {
                            categorias.map((objeto, index)=>(<Categoria key = {index} classe= {objeto.classe} txt = {objeto.txt}/>))
                        }
                    </ul>
                </div>
            </article>
            <article className="janela">
                <div className="topo">
                    <div className="postagens">
                        {
                            postagens.map((post,index)=>(
                                <Artigo key = {index} artigo = {post.artigo} classes = {post.classes} titulo={post.titulo} txt = {post.txt} img = {post.img} alt = {post.alt}></Artigo>
                            ))
                        }
                    </div>
                </div>
            <a href="posts.html" id="veja-mais">veja mais...</a>
            </article>
        </div>
    </section>
    )
}
export default Posts