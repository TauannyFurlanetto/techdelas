
/** 
    * @summary retorna uma imagem formatada com legenda para uso nos artigos
    * @param {string}   imgsrc      caminho da imagem
    * @param {string}   caption     legenda exibida embaixo da imagem
    * @param {string}   alt         descrição da imagem, opcional, caso vazio é usado a caption
    */
export default function Figure({imgsrc, caption, alt=""}){
    
    if(alt == ""){
        alt = caption
    }
    return(
        <figure>
            <img src={imgsrc} alt={alt}></img>
            <figcaption>{caption}</figcaption>
        </figure>
    )
    
}

//componente de imagem pronta para ser usada em artigos com normas de SEO