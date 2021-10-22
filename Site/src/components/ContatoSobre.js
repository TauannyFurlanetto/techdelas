function ContatoSobre ({href, icone, desc}){
    return (
        <p><a href={href}><img src={icone} alt = "Icone"/> {desc}</a></p>
    )
}

export default ContatoSobre;