<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TECHdelas - Escreva</title>
    <link rel="icon" href="icones/logo-branco.png">
    <link rel="stylesheet" href="css/global.css">
    <link rel="stylesheet" href="./css/escreva.css">
    
</head>

<body>
    <header>
        <div className="container">
            <section className="logo">
            <a href="home.html"><img src="icones/logo_header.svg" alt="Logotipo_TechDelas">
            <p><span>Tech</span>delas</p></a>
        </section>
        <button id="menu">☰</button>
        <section className="navegacao" id="menuMobile" >
            <nav>
                <button id="sair"><img src="icones/exit.svg" alt="Sair do menu"></button>
                <ul>
                    <li><a href="home.html">Home</a></li>
                    <li><a href="posts.html">Posts</a></li>
                    <li><a href="podcast.html">Podcasts</a></li>
                    <li><a href="escreva.html">Escreva</a></li>
                    <li><a href="sobre.html">Sobre</a></li>
                    {/* <!-- login e cadastro --> */}
                    <li id ="login">Login</li>
                    <li id="cadastro"><button>Cadastre-se</button></li>
                </ul>
            </nav>
        </section>
        </div>
    </header>

    <section className="story">
        <div className="container">
            <h1>Mande sua história...</h1>
            <p>Eaí? Bora aumentar a representatividade feminina?<br>
             Tire um minutinho do seu dia para enviar sua história ou um relato inspirador no intuito de motivar mulheres incríveis e ampliar a visibilidade feminina. Aqui você pode contar sobre sua jornada, seu crescimento e evolução, tudo de maneira segura. E ah! Não quer se identificar? Tudo bem! Escolha a opção "Mandar anonimamente" que preservamos sua identidade.<br>
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
                            <input type="text" id="fname" name="fname" required="required" placeholder="Digite aqui seu primeiro nome" autofocus>
                        </div>
            
                        <div className="last-name">
                            <label for="lname">Sobrenome:</label>
                            <input type="text" id="lname" name="lname" required="required" placeholder="Digite aqui seu sobrenome">
                        </div>
                    </div>
        
                    <div className="email">
                        <label for="email">Email:</label>
                        <div className="input">
                            <!-- <img src="icones/email.svg" alt=""> -->
                            <input type="email" id="email" name="email" required="required" placeholder="seuemail@aqui.com" maxlength="50" autocomplete="on">
                        </div>
                    </div>

                    <div className="div-anonymous">
                        <label for="anonymous">Mandar anonimamente</label>
                        <input type="checkbox" id="anonymous" name="anonymous" value="">
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
                    <input id="buttom-forms" type="submit" value="Enviar">
                </div>
            </form>
        </div>
    </section>
    
    
    <footer>
        <div className="container">
            <div className="conteudo">
                <div className="left">
                    <div className="logo">
                        <img src="icones/logo_footer.svg" alt="Logo do footer">
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
                        <li><a href=""><img src="icones/linkedin.svg" alt="Acesso ao linkedin"></a></li>
                        <li><a href=""><img src="icones/facebook.svg" alt="Acesso ao facebook"></a></li>
                        <li><a href=""><img src="icones/youtube.svg" alt="Acesso ao youtube"></a></li>
                        <li><a href=""><img src="icones/instagram.svg" alt="Acesso ao instagram"></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <p>Copyright de <span>Tech</span>delas</p>
        </div>
    </footer>

    {/* <!-- POP-UP --> */}

    <div className="pop-up-wrapper">
        <div className="pop-up register">

            <a href=""><img src="icones/exit.svg" alt=""></a>

            <h2>Cadastre-se:</h2>

            <form>
                <label for-id="nome">Nome</label>
                <input type="nome" id="nome" name="nome"/>

                <label for-id="email">Email</label>
                <div className="input">
                    <img src="icones/email.svg" alt="">
                    <input type="email" id="email" name="email"/>
                </div>

                <label for-id="senha">Senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="">
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <label for-id="senha">Digite novamente sua senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="">
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <div className="button">
                    <button className="register">Cadastre-se</button>
                </div>
            </form>

        </div>

        <div className="pop-up login">

            <a href=""><img src="icones/exit.svg" alt=""></a>

            <h2>Login:</h2>

            <form>

                <label for-id="email">Email</label>
                <div className="input">
                    <img src="icones/email.svg" alt="">
                    <input type="email" id="email" name="email"/>
                </div>

                <label for-id="senha">Senha</label>
                <div className="input">
                    <img src="icones/senha.svg" alt="">
                    <input type="senha" id="senha" name="senha"/>
                </div>

                <a className="esqueci" href="">Esqueci minha senha</a>

                <div className="button">
                    <button className="register">Login</button>
                </div>
            </form>

        </div>

    </div>
    <script src="js/script.js"></script>
    <script src="js/formEscreva.js"></script>
    {/* <!-- ------ --> */}
</body>
</html>