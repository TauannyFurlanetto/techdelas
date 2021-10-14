import '../css/home.css';
import '../css/global.css';

import Cabecalho from '../components/header';
import Rodape from '../components/footer';
import Art_individual from '../components/Artigo_indiv';
import '../js/script.js';


export default function Artigo(){
return (
<div>
    
    <Cabecalho />

    <section className="content">
        
        <article className="artigo">

            <div className="titulo">
                <h1>Mulheres revolucionárias na Engenharia Química</h1>
                <h2>Inspirações femininas na área, desafios e motivações</h2>
    
                <h3>Maria Lima</h3>
                <p>10/07/2021</p>
            </div>

            <figure>
                <img src="img/artigo2.jpg" alt=""/>
                <figcaption>Imagem retirada de pexels</figcaption>
            </figure>

            <p>Com o passar dos anos, as mulheres vem conquistando cada vez mais seu espaço no mercado de trabalho, tanto em pequenos cargos, como em cargos de liderança, abandonando o estilo “dona de casa” e embarcando para o ramo das finanças, da administração, da medicina e das engenharias.</p>
            <p>A engenharia, por exemplo, vem passando por mudanças, uma delas é o aumento da participação feminina no setor. A cada ano, mais mulheres ingressam nos cursos de Engenharia.</p>
            <p>Cada vez mais mulheres escolhem a Engenharia como profissão e conquistam aos poucos seu espaço, trabalhando em parceria com os profissionais do sexo masculino.</p>
            <p>No entanto, essas conquistas ainda vêm acompanhadas de muitos desafios, como a condução com sucesso e responsabilidade de uma dupla jornada, já que muitas dessas engenheiras são esposas e mães, além de atuarem em cargos de liderança.</p>
            <p>Entretanto, essas responsabilidades e desafios não nos impedem de seguirmos adiante e darmos nosso melhor.</p>
            <p>Baseando nisso tudo, selecionei 1 (uma) mulher que fez sucesso na  engenharia, para nos inspirar nos momentos difíceis e para nos mantermos sempre avançando.</p>
            <h3>Edith Clarke</h3>
            <p>Edith Clarke inicialmente se graduou em matemática e astronomia (1908), onde lecionou matemática por 3 anos. Mas sua paixão pelas exatas fez com que em 1911, se matriculasse em <strong>engenharia mecânica</strong>  na Universidade de Wisconsin em Nova York.</p>
            <p>Mais tarde, deixou Nova York para entrar no Instituto de Tecnologia de Massachusetts (MIT), onde obteve seu mestrado em engenharia elétrica em 1918, tornando-se a <strong>primeira mulher</strong> a ganhar um diploma nessa área no MIT.</p>
            <p>Após sua formação, Clarke trabalhou como engenheira da General Electric, onde desenvolveu uma <strong>“calculadora gráfica”</strong>. Este dispositivo foi usado para resolver problemas da linha de transmissão de energia elétrica.</p>
            <p>Após sua aposentadoria da General Electric em 1947, tornou-se professora de <strong>engenharia elétrica</strong> na Universidade do Texas, Austin. Ela se tornou a primeira mulher a ensinar no departamento de engenharia da Universidade do Texas.</p>
            <p>E em 1954, as realizações de Edith foram reconhecidas pela <em>“Society of Women Engineers Achievements Award”</em>, em funções das suas muitas contribuições originais para a teoria de estabilidade e análise de circuitos.</p>
            <p>Mesmo diante de todas as adversidades, Edith Clarke nunca deixou de lutar por aquilo que amava. Pois afinal, em pleno século XXI, as mulheres ainda sofrem <strong>preconceito</strong>  em sua área de formação, imaginem então em 1918, onde o ramo da engenharia era governado pelos homens.</p>
            <p>No entanto, isso não fez Clarke desistir, muito pelo contrário, suas invenções fizeram a diferença no mundo da engenharia elétrica e para as mulheres e homens em todo o mundo.</p>
            <p><strong>Referências: </strong> <a href="http://2engenheiros.com/2018/02/20/mulheres-na-engenharia/">2 Engenheiros: 5 Mulheres que Revolucionaram a Engenharia.</a></p>

        

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