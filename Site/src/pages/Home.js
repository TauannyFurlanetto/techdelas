import '../css/home.css';
import '../css/global.css';

import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import '../js/script.js';

import bannerUm from "../img/heroFoto2.jpg";
import bannerDois from "../img/heroFoto.jpg";
import { useState } from 'react';
import Posts from '../components/Posts'

function Home() {
    const [banner, setBanner] = useState(bannerUm);
    const [banner2, setBanner2] = useState(bannerDois);
  return (
    <div className="Home">
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
    <script src="js/pesquisa.js"></script>
    <script src="js/script.js"></script>
    </div>
  );
}

export default Home;


