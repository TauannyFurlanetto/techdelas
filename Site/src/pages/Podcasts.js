import {fetchDesc, request, formatDesc, matchDescPod} from '../js/podcasts.js';
import '../css/podcast.css'
import '../css/sobre.css';
import '../css/global.css';
import Podcast from '../components/Podcast.js';
import axios from 'axios'
import Footer from "../components/footer"
import {useEffect, useState} from 'react'
function Podcasts(){
    const [podcast, setPodcast] = useState([])
    useEffect(()=>{
        let linksPod = ["https://itunes.apple.com/lookup?id=1503246918&callBack","https://itunes.apple.com/lookup?id=1498395235&callBack","https://itunes.apple.com/lookup?id=1367730836&callBack", "https://itunes.apple.com/lookup?id=1518837789&callBack", "https://itunes.apple.com/lookup?id=1470543817&callBack" ]
        linksPod.forEach(link=>{
            request(axios.get(link)).then(podcast=>fetchDesc(podcast)).then((podcast)=>formatDesc(podcast)).then(descFormat=>matchDescPod(descFormat)).then(podFormat=> setPodcast(podFormat))
        })
    }, [])
    
    return(
        <>
        <div className="container">
        <section id="intro">
            <h1>
                Recomendações de podcasts
            </h1>
            <p>
                Buscando podcasts motivacionais, que abordem temas super importantes e pouco abordados no nosso cotidiano? Pois então você está no local correto! Aqui iremos fornecer algumas recomendações que tratam diversos temas voltado ao público feminino e que acima de tudo ajudam na  quebra da estigmatização feminina.
                Queremos ajudar no empoderamento, na disseminação de conhecimento e na construção de um local, seguro, que dê voz a todas as mulheres, de todas as idades, deste país. Somos fortes, inteligentes e capazes!
            </p>
        </section>
        <section id="podcasts">
            {podcast.map((pod, index)=>(
                <Podcast key = {index} url= {pod.url} img={pod.img} p={pod.feed} h1={pod.name} />
            ))}
        </section>
        </div>
        <Footer />
        </> 
    )}
export default Podcasts;