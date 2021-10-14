import './icones/logo-branco.png';
import './css/global.css';
import './css/escreva.css';

import './js/script.js';
import './js/formEscreva.js';

import Cabecalho from './components/header';
import Rodape from './components/footer';


function Escreva() {
    return (
        <div>

        <Cabecalho />

        <section className="story">
            <div className="container">
                <h1>Mande sua história...</h1>
                <p>Eaí? Bora aumentar a representatividade feminina? <br />
                Tire um minutinho do seu dia para enviar sua história ou um relato inspirador no intuito de motivar mulheres incríveis e ampliar a visibilidade feminina. Aqui você pode contar sobre sua jornada, seu crescimento e evolução, tudo de maneira segura. E ah! Não quer se identificar? Tudo bem! Escolha a opção "Mandar anonimamente" que preservamos sua identidade.<br />
                E agora? Pronta para fazer revolução e empoderar mulheres? Só preencher o formulário ;)
                </p> 
            </div>
        </section>

        <section className="forms">
            <div className="container">
                <form className="formulario" action="" target="_blank" method="POST">

                    <div className="container-2">
                        <div className="nome-sobrenome">
                            <div className="name">
                                <label for="fname">Primeiro nome:</label>
                                <input type="text" id="fname" name="fname" required="required" placeholder="Digite aqui seu primeiro nome" autofocus/>
                            </div>
                
                            <div className="last-name">
                                <label for="lname">Sobrenome:</label>
                                <input type="text" id="lname" name="lname" required="required" placeholder="Digite aqui seu sobrenome"/>
                            </div>
                        </div>
            
                        <div className="email">
                            <label for="email">Email:</label>
                            <div className="input">
                                {/* <!-- <img src="icones/email.svg" alt=""/> --> */}
                                <input type="email" id="email" name="email" required="required" placeholder="seuemail@aqui.com" maxlength="50" autocomplete="on"/>
                            </div>
                        </div>

                        <div className="div-anonymous">
                            <label for="anonymous">Mandar anonimamente</label>
                            <input type="checkbox" id="anonymous" name="anonymous" value=""/>
                        </div>
            
                        <div className="your-story">
                            <label for="message">Conte sua história:</label>
                            <textarea name="message" id="message" cols="30" rows="10" required="required" placeholder="Digite aqui a sua história ou conteúdo"></textarea>
                        </div>
                        <div className="errosEscreva">
                            <ul></ul>
                        </div>
                    </div>
        
                    <div className="div-buttom">
                        <input id="buttom-forms" type="submit" value="Enviar"/>
                    </div>
                </form>
            </div>
        </section>
        
        
       <Rodape />
       
    </div>
    )
}
 
export default Escreva;

