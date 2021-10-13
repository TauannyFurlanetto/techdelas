import './css/home.css';
import './css/global.css';

import Cabecalho from './components/header';
import Rodape from './components/footer';
import './js/script.js';

import bannerUm from "./img/heroFoto2.jpg";
import bannerDois from "./img/heroFoto.jpg";
import logoLinkedin from "./icones/linkedin.svg";
import logoFacebook from "./icones/facebook.svg";
import logoYoutube from "./icones/youtube.svg";
import logoInstagram from "./icones/instagram.svg";
import { useState } from 'react';
import Posts from './components/Posts'

function Home() {
    const [banner, setBanner] = useState(bannerUm);
    const [banner2, setBanner2] = useState(bannerDois);
  return (
    <div className="Home">
      
      <Cabecalho />

    <section className="banner">
        <div className="container">
            <div className="left">
                <h1><span>Tech</span>delas</h1>
                <div className="paragrafo">
                    <p>Leia e publique histórias sobre ciência, tecnologia, empoderamento e o mercado de trabalho, e sua relação com o mundo feminino.
                    </p>
                </div>
                <a href="escreva.html"><button>Escreva para gente</button></a>
            </div>
            <div id="imagem">
                <div style={{backgroundImage: `url(${banner})`}} onAnimationIteration = {()=>{if(banner==bannerUm){setBanner(bannerDois); setBanner2(bannerUm)}else{setBanner(bannerUm); setBanner2(bannerDois)}}}></div>
                <div style={{backgroundImage: `url(${banner2})`}}></div>
            </div>
        </div>
    </section>
    <Posts></Posts>
    
    <Rodape />

    {/* <!-- POP-UP --> */}

    <div className="pop-up-wrapper">
        <div className="pop-up register">

            <a href=""><img src="icones/exit.svg" alt="" /></a>

            <h2>Cadastre-se:</h2>

            <form>
                <div className="pop-up-labels nome">
                    <label for-id="reg-nome">Nome</label>
                    <p></p>
                </div>
                <input type="nome" id="reg-nome" name="nome"/>

                <div className="pop-up-labels email">
                    <label for-id="reg-email">Email</label>
                    <p></p>
                </div>
                <div className="input">
                    <img src="icones/email.svg" alt="" />
                    <input type="email" id="reg-email" name="email"/>
                </div>

                <div className="pop-up-labels senha">
                    <label for-id="reg-senha">Senha</label>
                    <p></p>
                </div>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="password" id="reg-senha" name="senha"/>
                </div>

                <div className="pop-up-labels senha-confirm">
                    <label for-id="reg-senha-confirm">Digite novamente sua senha</label>
                    <p></p>
                </div>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="password" id="reg-senha-confirm" name="senha"/>
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

                <div className="pop-up-labels email">
                    <label for-id="login-email">Email</label>
                    <p></p>
                </div>
                <div className="input">
                    <img src="icones/email.svg" alt="" />
                    <input type="email" id="login-email" name="email"/>
                </div>

                <div className="pop-up-labels senha">
                    <label for-id="login-senha">Senha</label>
                    <p></p>
                </div>
                <div className="input">
                    <img src="icones/senha.svg" alt="" />
                    <input type="password" id="login-senha" name="senha"/>
                </div>

                <a className="esqueci" href="">Esqueci minha senha</a>

                <div className="button">
                    <button className="login">Login</button>
                </div>
            </form>

        </div>

    </div>

    <script src="js/pesquisa.js"></script>
    <script src="js/script.js"></script>
    
    {/* <!-- ------ --> */}
    </div>
  );
}

export default Home;


