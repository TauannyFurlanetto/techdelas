import '../icones/logo-branco.png';
import '../css/global.css';
import '../css/sobre.css';
import '../js/script.js';

import iconeForca from "../icones/forca.png"
import iconeLampada from "../icones/lampada-brilhante.png"
import iconeEscala from "../icones/graphics-scale.png"
import iconeMaoCoracao from "../icones/coracao.png"
import iconeCoracao from "../icones/coracao-artificial.png"
import profAlice from "../fotos/foto_Alice.jpeg"
import profGi from "../fotos/foto_Giovana.png"
import profTau from "../fotos/foto_Tau.jpg"
import profVanessa from "../fotos/foto_Vanessa.jpg"
import profVivian from "../fotos/foto_vivian.jpeg"
import logo from "../icones/logo_header.svg"
import iconeEmail from "../icones/email.svg"
import iconeTelefone from "../icones/telefone.svg"
import iconeLinkedin from "../icones/linkedin_roxo.svg"
import iconeFacebook from "../icones/facebook_roxo.svg"
import iconeYout from "../icones/youtube_roxo.svg" 
import iconeInsta from "../icones/instagram_roxo.svg"
import iconeWhats from "../icones/whatsapp.svg"

import Valores from '../components/Valores'
import Equipe from '../components/Equipe'
import ContatoSobre from '../components/ContatoSobre';
import RedesSociais from '../components/RedesSociais';
import Rodape from '../components/footer';
 

function Sobre() {

    let valores = [
        {
            icone: iconeForca,
            alt: 'ícone braço',
            titulo: 'Empoderar'

        },
        {
            icone: iconeLampada,
            alt: 'ícone lâmpada',
            titulo: 'Inspirar'   
        },
        {
            icone: iconeEscala,
            alt: 'Ícone escala gráfica',
            titulo: 'Crescer e evoluir juntas'   
        },
        {
            icone: iconeMaoCoracao,
            alt: 'Ícone mão segurando coração',
            titulo: 'Incluir'   
        },
        {
            icone: iconeCoracao,
            alt: 'Ícone de coração',
            titulo: 'Paixão por realizar'   
        }
    ]

    let equipe = [
        {
            foto: profAlice,
            nome: 'Alice Marques Candido',
            escolaridade: 'Estudante Universitária',
            funcao: 'Estagiária OLX Brasil',
            idade: '21 anos'
        },
        {
            foto: profGi,
            nome: 'Giovana Narciso Guimarães',
            escolaridade: 'Estudante Universitária',
            funcao: 'Estagiária OLX Brasil',
            idade: '18 anos'
        },
        {
            foto: profTau,
            nome: 'Tauanny Virgínio Furlanetto',
            escolaridade: 'Estudante Universitária',
            funcao: 'Estagiária OLX Brasil',
            idade: '19 anos'
        },
        {
            foto: profVanessa,
            nome: 'Vanessa Rodrigues Cardoso',
            escolaridade: 'Estudante Ensino Técnico',
            funcao: 'Estagiária OLX Brasil',
            idade: '18 anos'
        },
        {
            foto: profVivian,
            nome: 'Vivian Ribeiro de Souza',
            escolaridade: 'Estudante Universitária',
            funcao: 'Estagiária OLX Brasil',
            idade: '21 anos'
        }
    ]
    

    let contatos = [
        {
            href: 'mailto:techdelas@gmail.com',
            icone: iconeEmail,
            desc: 'techdelas@gmail.com'
        },
        {
            href: 'tel:+55559000000',
            icone: iconeTelefone,
            desc: '(55)9000000'
        },
        {
            href: 'https://api.whatsapp.com/send?phone=5555559000000&text=Oi%2C%20vi%20seu%20contato%20na%20p%C3%A1gina%20TechDelas!',
            icone: iconeWhats,
            desc: 'Whatsapp'
        }
    ]

    let redesSociais = [
        {
            href: 'http://linkedin.com',
            icone: iconeLinkedin,
            alt: 'Logotipo linkedin'
        },
        {
            href: 'http://facebook.com',
            icone: iconeFacebook,
            alt: 'Logotipo facebook'
        },
        {
            href: 'http://youtube.com',
            icone: iconeYout,
            alt: 'Logotipo youtube'
        },
        {
            href: 'http://instagram.com',
            icone: iconeInsta,
            alt: 'Logotipo instagram'
        }
    ]

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
                            {valores.map((valor, indice) =>
                                <Valores
                                key={indice}
                                icone={valor.icone}
                                alt={valor.alt}
                                titulo={valor.titulo}
                                />
                            )}
                        </ul>
                    </section>
                </div>
            </div>

            <div className="container">
                    <h1 id="titulo">A Equipe</h1>
                        <section className="equipe">
                            {equipe.map((integrante, indice) =>
                                <Equipe
                                key={indice}
                                foto={integrante.foto}
                                nome={integrante.nome}
                                escolaridade={integrante.escolaridade}
                                funcao={integrante.funcao}
                                idade={integrante.idade}
                                />
                            )}
                        </section>
                        
            </div>

            <div className="container">
                <section className="contatos">
                    <h1>Contatos</h1>

                    <section className="contact">
                        <article className="redes">
                            <p>Entre em contato com a gente:</p><br/>
                            {contatos.map((contato, indice) =>
                                <ContatoSobre 
                                    key={indice}
                                    href={contato.href}
                                    icone={contato.icone}
                                    desc={contato.desc}
                                />
                            )}
                            
                            <div className="icons">
                            {redesSociais.map((redes, indice) =>
                                <RedesSociais 
                                    key={indice}
                                    href={redes.href}
                                    icone={redes.icone}
                                    alt={redes.desc}
                                />
                            )}
                            </div>
                        </article>

                        <article className="local">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488050159!2d-46.87549321094932!3d-23.68153146695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o%20Paulo%2C%20State%20of%20S%C3%A3o%20Paulo!5e0!3m2!1sen!2sbr!4v1631658993975!5m2!1sen!2sbr" width="500" height="270" style={{border: "solid 0px"}} allowFullScreen="" loading="lazy"></iframe>
                        </article>
                    </section>
                </section>
            </div>
                 
            <Rodape />

        </div>
    )
}

export default Sobre;