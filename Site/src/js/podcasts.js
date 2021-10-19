// PODCAST

// Criar um objeto de podcast
function podcast(name, img, url, feed) {
	this.name = name;
	this.img = img;
	this.url = url;
	this.feed = feed;
}
// Cria um objeto da descricao do podcast
function descPod(desc, title) {
	this.desc = desc;
	this.title = title; //Será usado como chave de comparação
}
// Cria uma array para armazenar as decricoes
let arrDesc = [];

//Pega o resultado da requisicao do script no HTML
async function fetchDesc(podcast) {
	const descRss = await fetch(podcast.feedUrl);
	const descTxt = await descRss.text();
	let domParser = new DOMParser();
	const descHtml = domParser.parseFromString(descTxt, "text/html");
	arrDesc.push(new descPod(descHtml.querySelector("description").innerHTML, descHtml.querySelector("title").innerHTML));
	return ([arrDesc, podcast])
}
// Faz uma requisicao e limpa os resultados
async function request(request){
	let answer = await request
	return answer.data.results[0]
}
// Formata as descricoes
let podArr = []
function formatDesc(podcast){
	podArr.push(podcast[1])
	let desc = podcast[0]
	desc.map((element) => {
		element["desc"] = element["desc"].replaceAll("<\!--[CDATA[", "");
		element["desc"] = element["desc"].replaceAll("<p-->", "");
		element["desc"] = element["desc"].replaceAll("&nbsp", "");
		element["desc"] = element["desc"].replaceAll(";", "");
		element["desc"] = element["desc"].replaceAll("<p></p>]]", "");
		element["desc"] = element["desc"].replaceAll("]]-->", "");
		element["desc"] = element["desc"].replaceAll("&g", "");
		element["desc"] = element["desc"].replaceAll(".t", "");

		element["title"] = element["title"].replaceAll("&lt;![CDATA[", "");
		element["title"] = element["title"].replaceAll("]]&gt;", "");
	})
	return ([desc,podArr])
}
// Combina as decricoes com as outras informacoes
function matchDescPod(podcasts){
	let descricao = podcasts [0]
	let podcastArr = podcasts[1]
	podcastArr = podcastArr.slice(0,5)
	let podcastFormat = []
	function formatPod (array){
		array = array.map((pod)=>{
			return (new podcast(pod.collectionName, pod.artworkUrl600, pod.collectionViewUrl, " "))
		})
		return array
	}
	podcastFormat.push(formatPod(podcastArr))
	podcastFormat[0].map((pod)=>{
		descricao.map(desc=>{
			if (desc.title == pod.name){
				 pod.feed = desc.desc
			}
		})
	})
	return podcastFormat[0]
}
export {
	fetchDesc,
	request,
	formatDesc,
	matchDescPod
}
