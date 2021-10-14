import {podFunc} from './js/podcasts.js';
import './css/sobre.css';
import './css/global.css';
import Podcast from './components/Podcast.js';
import {useState} from 'react';
function Podcasts(){
    const {req, setReq} = useState("")
   
    return(
        <>
        <div className="container">
        <section id="intro">
            <h1>
                Recomendações de podcasts
            </h1>
            <p>
                Buscando podcasts motivacionais, que abordem temas super importantes e pouco abordados no nosso cotidiano? Pois então você está no local correto! Aqui iremos fornecer algumas recomendações que tratam diversos temas voltado ao público feminino e que acima de tudo ajudam na  quebra da estigmatização feminina.
                Queremos ajudar no empoderamento, na disseminação de conhecimento e na construção de um local, seguro, que dê voz a todas as mulheres, de todas as idades, deste país. Somos fortes, inteligentes e capazes!
            </p>
        </section>
        <section id="podcasts">
        <a href="">
                <article className="podcast">
                    <img src="img/images.jpeg" alt="podcast1" />
                    <div className="escritaarticle">
                        <h1>
                            MULHERES DE 50
                        </h1>
                        <p>
                            T8:01 - Dúvidas com tecnologia? Chama um anjo
                            Está sofrendo para fazer cadastro no aplicativo do INSS? Não sabe como organizar as fotos no celular? Precisa fazer back-up dos arquivos na nuvem?  A gente se desespera o tempo todo com questões tecnológicas, não é mesmo?
                            Pois a Viviane Palladino Donnamaria, 42 anos, ajudou a fundar uma empresa que conecta pessoas mais velhas a jovens interessados em ensinar tecnologia.
                        </p>
                    </div>
                </article>
        </a>
            <Podcast />
            <Podcast />
            <Podcast />
            <Podcast />
            <Podcast />
        </section>
        </div>
        {/* <script src={`https://itunes.apple.com/lookup?id=1503246918&callback=${podFunc()}`}></script> */}
        <script src={`https://itunes.apple.com/lookup?id=1498395235&callback=${()=>podFunc()}`}></script>
        <script src={"https://itunes.apple.com/lookup?id=1367730836&callback=podFunc"}></script>
        <script src={"https://itunes.apple.com/lookup?id=1518837789&callback=podFunc"}></script>
        <script src={"https://itunes.apple.com/lookup?id=1470543817&callback=podFunc"}></script>
        </>
    )
}
export default Podcasts;
/*
<a href="">
                <article class="podcast">
                    <img src="img/images.jpeg" alt="podcast1" />
                    <div class="escritaarticle">
                        <h1>
                            MULHERES DE 50
                        </h1>
                        <p>
                            T8:01 - Dúvidas com tecnologia? Chama um anjo
                            Está sofrendo para fazer cadastro no aplicativo do INSS? Não sabe como organizar as fotos no celular? Precisa fazer back-up dos arquivos na nuvem?  A gente se desespera o tempo todo com questões tecnológicas, não é mesmo?
                            Pois a Viviane Palladino Donnamaria, 42 anos, ajudou a fundar uma empresa que conecta pessoas mais velhas a jovens interessados em ensinar tecnologia.
                        </p>
                    </div>
                </article>
            </a>
            <a href="">
                <article class="podcast">
                    <img src="img/images.pd2.jpeg" alt="podcast2" />
                    <div class="escritaarticle">
                        <h1>
                            DBServer - Mulheres Na Tecnologia
                        </h1>
                        <p>
                            EP 3 - Mulheres na Tecnologia sobre Comunidades com Isadora Giongo, Sabrina Santos, Michele Citolin e Diuly Guimarães.
                            Convidamos algumas colaboradoras para conversar sobre a importância de comunidades femininas de TI.
                        </p>
                    </div>
                </article>
            </a>
            <a href="">
                <article class="podcast">
                    <img src="img/images.pd3.png" alt="podcast3" />
                    <div class="escritaarticle">
                        <h1>
                            #4 Mulheres no TI e Comunidades Digitais
                        </h1>
                        <p>
                            É com muito prazer que trouxemos duas grandes guerreiras para falar sobre seus trabalhos, comunidades, influências e empoderamento feminino na área de tecnologia e como continua crescendo cada vez mais. 
                            Estamos hoje com, Vanessa Tonini e Carine Ross organizadoras do MariaLab.
                        </p>
                    </div>
                </article>
            </a>
            <a href="">
                <article class="podcast">
                    <img src="img/images.pd4.jpeg" alt="podcast4" />
                    <div class="escritaarticle">
                        <h1>
                            Vozes Femininas
                        </h1>
                        <p>
                            AFROFUTURISMO: TECNOLOGIA, INCLUSÃO E ANCESTRALIDADE.<br/>
                            “É preciso disseminar e desmitificar a entrada de pessoas negras na área de tecnologia”- Nina Silva.
                            No episódio desta semana do nosso podcast, você vai escutar a poderosa Voz Feminina de Nina Silva @ninasilvaperfil.
                        </p>
                    </div>
                </article>
            </a>
            <a href="">
                <article class="podcast">
                    <img src="img/images.pd5.png" alt="podcast5" />
                    <div class="escritaarticle">
                        <h1>
                            StartSe Podcasts
                        </h1>
                        <p>
                            Agora em 10 #5 - Mulheres na liderança: o que ainda deve mudar?
                            Quantas empresas você conhece que são lideradas por mulheres? Elas ainda são minoria nos cargos de liderança — seja em startups ou em grandes corporações. 
                            No quinto episódio do Agora em 10, nós discutimos a presença do sexo feminino no setor de tecnologia e nas empresas em geral e reforçamos o que ainda precisa mudar.
                        </p>
                    </div>
                </article>
            </a>
*/