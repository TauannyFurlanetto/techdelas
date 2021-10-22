import logoFooter from "../icones/logo_footer.svg";
import logoLinkedin from "../icones/linkedin.svg";
import logoFacebook from "../icones/facebook.svg";
import logoYoutube from "../icones/youtube.svg";
import logoInstagram from "../icones/instagram.svg";

export default function Rodape () {
    return (
        <footer>
        <div className="container">
            <div className="conteudo">
                <div className="left">
                    <div className="logo">
                        <img src={logoFooter} alt="Logo do footer" />
                        <div className="texto">
                            <h3><span>Tech</span>delas</h3>
                            <p>O TECHdelas é uma plataforma online que dá voz para mulheres abordarem e interagirem com temas sobre ciência, tecnologia, mercado de trabalho e carreira através de publicações escritas pelas próprias leitoras.</p>
                        </div>
                    </div>
                </div>
                <div className="socialMedia">
                <h3>Redes sociais</h3>
                <p>Conecte-se com a gente pelas redes sociais.</p>
                <div className="iconesSocial">
                    <ul>
                        <li><a href="www.google.com.br"><img src={logoLinkedin} alt="Acesso ao linkedin" /></a></li>
                        <li><a href="www.google.com.br"><img src={logoFacebook} alt="Acesso ao facebook" /></a></li>
                        <li><a href="www.google.com.br"><img src={logoYoutube} alt="Acesso ao youtube" /></a></li>
                        <li><a href="www.google.com.br"><img src={logoInstagram} alt="Acesso ao instagram" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <p>Copyright de <span>Tech</span>delas</p>
        </div>
        </footer>
    )
}