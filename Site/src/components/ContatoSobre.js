function ContatoSobre ({href, icone, desc}){
    return (
        <p><a href={href}><img src={icone}/> {desc}</a></p>
    )
}

export default ContatoSobre;