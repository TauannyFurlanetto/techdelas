import '../css/global.css';
import '../css/artigo.css';

import { useParams } from 'react-router-dom';

import postImg1 from "../img/post1.jpg";
import postImg2 from "../img/post2.jpg";
import postImg3 from "../img/post3.jpg";

import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import Art_individual from '../components/Artigo_indiv';
import '../js/script.js';

let artigos = [
    {
        titulo: "Mulheres revolucionárias na Engenharia Química",
        subtitulo: "Inspirações femininas na área, desafios e motivações",
        img: postImg1,
        alt: "Mulher extraindo químico de tonel com uma mangueira",
        fig: "Imagem retirada de pexels",
    }
]

export default function Artigo(){

    const { artigo = 'artigo404' } = useParams()

    console.log(artigo)
    let postObject
    try{
        postObject = (require('../posts/'+ artigo)).default
    }
    catch{
        postObject = (require('../posts/'+ "artigo404")).default
    }
    
    console.log(`este artigo ${artigo} contem os parametros ${Object.keys(postObject)}`)
    console.log(postObject.titulo)
    console.log(postObject.subtitulo)
    console.log(postObject)

    return (
<div>
    

    <section className="content">
        
        <article className="artigo">
        
       
            {/* {artigos.map((post, indice) => 
                <Art_individual
                key={indice}
                titulo={post.cor} 
                img={post.img} 
                alt={post.alt}
                fig={post.fig}
                />
            )} */}
        

        

        <div className="tags">
            <a href="">Tecnologia</a>
            <a href="">Empoderamento</a>
            <a href="">Ciência</a>
        </div>

        <div className="separador"></div>

        <div className="reacao">
            <img src="icones/thumbs-up.svg" alt="curtida" />
            <button className="coment"><img src="icones/message-circle.svg" alt="" /><a /></button>
        </div>

        <div className="comentario">
            <h3>Escreva seu comentário:</h3>
            <div id="comentario">

            <form className='artigoComent'>
                    <div className="caixa">
                        <label for="comentario"></label>
                        <textarea name="comentario" id="comentario" required maxlength="200"></textarea>
                    </div>

                    <button type="submit" className="enviar">Enviar</button>

            </form>

            </div>
        </div>

    </article>
    </section>

    <Rodape />

    
</div>
)}