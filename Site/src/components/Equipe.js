function Equipe({foto, nome, escolaridade, funcao, idade}){
    return (
        <>
            <article>
                <div className="person" style={{backgroundImage: `url(${foto})`}}></div>
                <h2>{nome}</h2>
                <p>{escolaridade}<br/>
                {funcao}<br/>
                {idade}
                </p>
            </article>
        </>                 
    )
}

export default Equipe;