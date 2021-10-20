import '../css/global.css';
import '../css/artigo.css';

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import postImg1 from "../img/post1.jpg";
import postImg2 from "../img/post2.jpg";
import postImg3 from "../img/post3.jpg";

import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import Figure from '../components/figure';
import Art_individual from '../components/Artigo_indiv';
import likeImg from "../icones/thumbs-up.svg";
import likeColorido from "../icones/like_colorido.svg"
import comments from "../icones/message-circle.svg"
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

    const { artigo = 'artigo404' } = useParams() //variavel 'artigo' guarda o que aparece na url depois de /artigo/, o default é /artigo/artigo404

    let postObject
    try{
        postObject = (require('../posts/'+ artigo)).default
    }
    catch{
        postObject = (require('../posts/'+ "artigo404")).default //executado caso a url resulte em um artigo que não existe
    }
    
    console.log(`este artigo ${artigo} contem os parametros ${Object.keys(postObject)}`)
    console.log(postObject.titulo)
    console.log(postObject.subtitulo)
    console.log(postObject)
    const [like, setLike] = useState(likeImg)
    let artContent = [];
    postObject.content.forEach(element => {
        if (element.p){
            artContent.push(<p>  {element.p}  </p>)
        }
        else if(element.img){
            artContent.push(<Figure imgsrc={require('../' + element.img.source).default} caption={element.img.alt}></Figure>)
        }
    });
    
    
    return (
<div>
    

    <section className="content">
        
        <article className="artigo">

            <div className="titulo">
                <h1>{postObject.titulo}</h1>
                <h2>{postObject.subtitulo}</h2>

                <h3>{postObject.autor}</h3>
                <p>{postObject.data}</p>
            </div>

            {artContent}


            <div className="tags">
                <a href="">Tecnologia</a>
                <a href="">Empoderamento</a>
                <a href="">Ciência</a>
            </div>

            <div className="separador"></div>

            <div className="reacao">
                <img src={like} onClick = {()=>{if(like==likeImg){setLike(likeColorido)}else{setLike(likeImg)}}} alt="curtida" />
                <button className="coment"><img src={comments} alt="" /><a /></button>
            </div>

            <div className="comentario">
                <h3>Escreva seu comentário:</h3>
                <div id="comentario">

                <form className='artigoComent'>
                    <div className="caixa">
                        <label htmlFor="comentario"></label>
                        <textarea name="comentario" id="comentario" required maxLength="200"></textarea>
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