import logoHeader from "../icones/logo_header.svg";

export default function Cabecalho () {
    return (
        <header>
            <div class="container">
                <section class="logo">
                    <a href="home.html"><img src={logoHeader} alt="Logotipo_TechDelas" />
                    <p><span>Tech</span>delas</p></a>
                </section>

                <button id="menu">☰</button>

                <section class="navegacao" id="menuMobile" >
                    <nav>
                        <button id="sair"><img src="icones/exit.svg" alt="Sair do menu" /></button>
                        <ul>
                            <li><a href="home.html">Home</a></li>
                            <li><a href="posts.html">Posts</a></li>
                            <li><a href="podcast.html">Podcasts</a></li>
                            <li><a href="escreva.html">Escreva</a></li>
                            <li><a href="sobre.html">Sobre</a></li>
                            <li id ="login">Login</li>
                            <li id="cadastro"><button>Cadastre-se</button></li>
                        </ul>
                    </nav>
                </section>
            </div>
        </header>
    )
}
