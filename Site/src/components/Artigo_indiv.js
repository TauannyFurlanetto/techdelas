export default function Art_individual () {
    return (
        <a href={artigo} target="_blank" className = {classes+" Cat"}>
        <div className="post">
            <div className="texto">
                <h3>{titulo}</h3>
                <p>{txt}</p>
            </div>
            <img src={img} alt={alt} />
        </div>
    </a>
    )
}