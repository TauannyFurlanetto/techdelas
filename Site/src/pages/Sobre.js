import '../icones/logo-branco.png';
import '../css/global.css';
import '../css/sobre.css';

import profAlice from "../fotos/foto_Alice.jpeg"
import profGi from "../fotos/foto_Giovana.png"
import profTau from "../fotos/foto_Tau.jpg"
import profVanessa from "../fotos/foto_Vanessa.jpg"
import profVivian from "../fotos/foto_vivian.jpeg"
import logo from "../icones/logo_header.svg"
import '../js/script.js';

import Rodape from '../components/footer';
 

function Sobre() {
    return (
        <div>
        
            <div className="container">
                <section className="aboult">
                    <article className="sobre">
                        <h1>Sobre</h1><br/>
                        <p>Desde Ada Lovelace e Margaret Hamilton, mulheres vêm inovando e contribuindo para o desenvolvimento da tecnologia e ciência cada vez mais. No entanto, o reconhecimento nunca foi suficiente diante de contribuições históricas como o primeiro algoritmo criado ou a descoberta da estrutura do DNA. <br/><br/>

                        A falta de credibilidade e incentivo às mulheres é um fator de risco que perdura até os dias de hoje. Por isso, o  <strong>TECHdelas</strong> nasceu para revolucionar o mercado de ciência e tecnologia, motivando mulheres que se interessam, querem fazer parte ou que já estão inseridas nessas áreas. <br/><br/>

                        No <strong>TECHdelas</strong> nós te ouvimos, apoiamos e seremos seu porta voz! Aqui, você pode mandar sua história e acompanhar a trajetória de outras que, assim como você, merecem ser ouvidas! 
                        </p>
                    </article>

                    <article className="logomao">
                        <img src={logo} alt="Logotipo TechDelas"/>
                    </article>
                </section>
            </div>

            <div className="container">
                <div className="objetivos">
                    <section className="frase">
                        <p>”<br/>Somos mães. Somos carinhosas. Somos artistas. Somos ativistas. Somos empresárias, médicas, líderes da indústria e da tecnologia. Nosso poder é ilimitado. Levantemos!<br/>”<br/>
                        <span>- Alicia Keys</span></p>
                    </section>

                    <section className="objetivo">
                        <h2>Objetivos</h2>
                        <p>Permitir que mulheres de todas as idades interajam umas com as outras e tenham acesso a temas relevantes como mercado de trabalho, empoderamento feminino, ciência, tecnologia e feminismo. </p> <br/>
                        <h2>Valores</h2>
                        <ul>
                            <li><img src="icones/forca.png" alt="ícone braço"/>Empoderar</li>
                            <li><img src="icones/lampada-brilhante.png" alt="ícone lâmpada"/>Inspirar</li>
                            <li><img src="icones/graphics-scale.png" alt="Ícone escala gráfica"/>Crescer e evoluir juntas</li>
                            <li><img src="icones/coracao.png" alt="Ícone mão segurando coração"/>Incluir</li>
                            <li><img src="icones/coracao-artificial.png" alt="Ícone de coração"/>Paixão por realizar</li>
                        </ul>
                    </section>
                </div>
            </div>

            <div className="container">
                    <h1 id="titulo">A Equipe</h1>
                        <section className="equipe">
                            <article>
                                <div className="person" style={{backgroundImage: `url(${profAlice})`}}></div>
                                <h2>Alice Marques Candido</h2>
                                <p>Estudante Universitária<br/>
                                    Estagiária OLX Brasil<br/>
                                    21 anos
                                </p>
                            </article>

                            <article>
                                <div className="person" style={{backgroundImage: `url(${profGi})`}}></div>
                                <h2>Giovana Narciso Guimarães</h2>
                                <p>Estudante Universitária<br/>
                                    Estagiária OLX Brasil<br/>
                                    18 anos
                                </p>
                            </article>

                            <article>
                                <div className="person" style={{backgroundImage: `url(${profTau})`}}></div>
                                <h2>Tauanny Virgínio Furlanetto</h2>
                                <p>Estudante Universitária<br/>
                                    Estagiária OLX Brasil<br/>
                                    19 anos
                                </p>
                            </article>

                            <article>
                                <div className="person" style={{backgroundImage: `url(${profVanessa})`}}></div>
                                <h2>Vanessa Rodrigues Cardoso</h2>
                                <p>Estudante Ensino Técnico<br/>
                                    Estagiária OLX Brasil<br/>
                                    18 anos
                                </p>
                            </article>

                            <article>
                                <div className="person" style={{backgroundImage: `url(${profVivian})`}}></div>
                                <h2>Vivian Ribeiro de Souza</h2>
                                <p>Estudante Universitária<br/>
                                    Estagiária OLX Brasil<br/>
                                    21 anos
                                </p>
                            </article>
                        </section>
                        
            </div>

            <div className="container">
                <section className="contatos">
                    <h1>Contatos</h1>

                    <section className="contact">
                        <article className="redes">
                            <p>Entre em contato com a gente:</p><br/>
                            <p><a href="mailto:techdelas@gmail.com"><img src="icones/email.svg"/> techdelas@gmail.com</a></p>
                            <p><a href="tel:+55559000000"><img src="icones/telefone.svg"/> (55)9000000</a></p>
                            <p><a href="https://api.whatsapp.com/send?phone=5555559000000&text=Oi%2C%20vi%20seu%20contato%20na%20p%C3%A1gina%20TechDelas!"><img src="icones/whatsapp.svg"/> Whatsapp</a></p>
                            <div className="icons">
                            <a href="http://linkedin.com"><img src="icones/linkedin_roxo.svg" alt="Logotipo linkedin"/></a>
                            <a href="http://facebook.com"><img src="icones/facebook_roxo.svg" alt="Logotipo facebook"/></a>
                            <a href="http://youtube.com"><img src="icones/youtube_roxo.svg" alt="Logotipo youtube"/></a>
                            <a href="http://instagram.com"><img src="icones/instagram_roxo.svg" alt="Logotipo instagram"/></a>
                            </div>
                        </article>

                        <article className="local">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488050159!2d-46.87549321094932!3d-23.68153146695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1631658993975!5m2!1sen!2sbr" width="500" height="270" style={{border: "solid 0px"}} allowfullscreen="" loading="lazy"></iframe>
                        </article>
                    </section>
                </section>
            </div>
                 
            <Rodape />

        </div>
    )
}

export default Sobre;