import {podFunc} from '../js/podcasts.js';
import '../css/podcast.css'
import '../css/sobre.css';
import '../css/global.css';
import Podcast from '../components/Podcast.js';
import axios from 'axios'
import Footer from "../components/footer"
import {useEffect} from 'react'
function Podcasts(){
    useEffect(()=>{
        let linksPod = ["https://itunes.apple.com/lookup?id=1503246918&callBack","https://itunes.apple.com/lookup?id=1498395235&callBack","https://itunes.apple.com/lookup?id=1367730836&callBack", "https://itunes.apple.com/lookup?id=1518837789&callBack", "https://itunes.apple.com/lookup?id=1470543817&callBack" ]
        linksPod.forEach(link=>{
            axios.get(link).then(response=>response.data).then(val=>podFunc(val))
        })
    },[ ])
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
            <Podcast />
            <Podcast />
            <Podcast />
            <Podcast />
            <Podcast />
        </section>
        </div>
        <Footer />
        </> 
    )}
export default Podcasts;
