function Podcast({url, img, p, h1}){
    return(
        <>
        <a href={url} target="_blank">
                <article className="podcast">
                    <img src={img} alt="podcast1" />
                    <div className="escritaarticle">
                        <h1>
                            {h1}
                        </h1>
                        <p>
                            {p}
                        </p>
                    </div>
                </article>
        </a>
        </>
    )
}
export default Podcast;