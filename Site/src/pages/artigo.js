import '../css/home.css';
import '../css/global.css';

import postImg from "../img/post2.jpg"
import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import Art_individual from '../components/Artigo_indiv';
import '../js/script.js';

let artigos = [
    {
        titulo: "Mulheres revolucionárias na Engenharia Química",
        txt: "Inspirações femininas na área, desafios e motivações",
        img: postImg,
        alt: "Mulher extraindo químico de tonel com uma mangueira",
        fig: "Imagem retirada de pexels",
    }
]

export default function Artigo(){
return (
<div>
    
    <Cabecalho />

    <section className="content">
        
        <article className="artigo">
        
       
            {artigos.map((post, indice) => 
                <Art_individual
                key={indice}
                titulo={post.cor} 
                img={post.img} 
                alt={post.alt}
                fig={post.fig}
                />
            )}
        

        

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

    <div className="pop-up-wrapper">
        <div className="pop-up register">

            <a href=""><img src="icones/exit.svg" alt="" /></a>

            <h2>Cadastre-se:</h2>

            <form>
                <label for-id="nome">Nome</label>
                <input type="nome" id="nome" name="nome"/>

                <label for-id="email">Email</label>
                <div className="input">
                    <img src="icones/email.svg" alt="" />
                    <input type="email" id="email" name="email"/>
                </div>

                <label for-id="senha">Senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <label for-id="senha">Digite novamente sua senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <div className="button">
                    <button className="register">Cadastre-se</button>
                </div>
            </form>

        </div>

        <div className="pop-up login">

            <a href=""><img src="icones/exit.svg" alt="" /></a>

            <h2>Login:</h2>

            <form>

                <label for-id="email">Email</label>
                <div className="input">
                    <img src="icones/email.svg" alt="" />
                    <input type="email" id="email" name="email"/>
                </div>

                <label for-id="senha">Senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <a className="esqueci" href="">Esqueci minha senha</a>

                <div className="button">
                    <button className="register">Login</button>
                </div>
            </form>

        </div>

</div>
</div>
)}