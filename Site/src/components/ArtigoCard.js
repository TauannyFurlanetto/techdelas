import {Link} from 'react-router-dom'
function Artigo({artigo,titulo, subtitulo, img, alt, classes}){
    return(
    <Link to={'artigo/' + artigo} target="_blank" className = {classes+" Cat"}>
        <div className="post">
            <div className="texto">
                <h3>{titulo}</h3>
                <p>{subtitulo}</p>
            </div>
            <img src={img} alt={alt}/>
        </div>
    </Link>
)
}
export default Artigo
