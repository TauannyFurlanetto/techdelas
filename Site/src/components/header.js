import logoHeader from "../icones/logo_header.svg";
import exitMobile from "../icones/exit.svg";
import email from "../icones/email.svg"
import password from "../icones/senha.svg";
import { Link , NavLink} from "react-router-dom";
export default function Cabecalho () {
    return (
        <>
        <header>
            <div class="container">
                <section class="logo">
                    <a href="home.html"><img src={logoHeader} alt="Logotipo_TechDelas" />
                    <p><span>Tech</span>delas</p></a>
                </section>

                <button id="menu">☰</button>

                <section class="navegacao" id="menuMobile" >
                    <nav>
                        <button id="sair"><img src={exitMobile} alt="Sair do menu" /></button>
                        <ul>
                            {/* NavLink é o usado no header pois o link aparece em todas as páginas */}
                            {/* Em outros casos deve se usar a tag <Link> */}
                            {/* a tag <a> só vai ser usada para redirecionar para fora do site ex: podcast, wikipedia, pudim.com, sei lá... */}
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/posts">Posts</NavLink></li>
                            <li><NavLink to="/podcasts">Podcasts</NavLink></li>
                            <li><NavLink to="/escreva">Escreva</NavLink></li>
                            <li><NavLink to="/sobre">Sobre</NavLink></li>
                            <li id ="login">Login</li>
                            <li id="cadastro"><button>Cadastre-se</button></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
        {/* <!-- POP-UP --> */}

        <div className="pop-up-wrapper">
            <div className="pop-up register">

                <a href=""><img src={exitMobile} alt="" /></a>

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
                        <img src={email} alt="" />
                        <input type="email" id="reg-email" name="email"/>
                    </div>

                    <div className="pop-up-labels senha">
                        <label for-id="reg-senha">Senha</label>
                        <p></p>
                    </div>
                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" id="reg-senha" name="senha"/>
                    </div>

                    <div className="pop-up-labels senha-confirm">
                        <label for-id="reg-senha-confirm">Digite novamente sua senha</label>
                        <p></p>
                    </div>
                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" id="reg-senha-confirm" name="senha"/>
                    </div>

                    <div className="button">
                        <button className="register">Cadastre-se</button>
                    </div>
                </form>

            </div>

            <div className="pop-up login">

                <a href=""><img src={exitMobile} alt="" /></a>

                <h2>Login:</h2>

                <form>

                    <div className="pop-up-labels email">
                        <label for-id="login-email">Email</label>
                        <p></p>
                    </div>
                    <div className="input">
                        <img src={email} alt="" />
                        <input type="email" id="login-email" name="email"/>
                    </div>

                    <div className="pop-up-labels senha">
                        <label for-id="login-senha">Senha</label>
                        <p></p>
                    </div>
                    <div className="input">
                        <img src={password} alt="" />
                        <input type="password" id="login-senha" name="senha"/>
                    </div>

                    <a className="esqueci" href="">Esqueci minha senha</a>

                    <div className="button">
                        <button className="login">Login</button>
                    </div>
                </form>

            </div>

        </div>
        </>
    )
}
