// PODCAST

import Podcast from "../components/Podcast";

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
let dictVal = []
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
async function request(request){
	let answer = await request
	return answer.data.results[0]
}
let podArr = []
function formatDesc(podcast){
	// Formatacao da descricao e titulo
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
	// // Armazena os podcasts
	// arr.push(new podcast(ep.results[0].collectionName, ep.results[0].artworkUrl600, ep.results[0].artistName, ep.results[0].collectionViewUrl, ep.results[0].feedUrl));

	// // Funcao que busca a desricao
	// async function fetchDesc() {
	// 	const descRss = await fetch(ep.results[0].feedUrl);
	// 	const descTxt = await descRss.text();
	// 	let domParser = new DOMParser();
	// 	const descHtml = domParser.parseFromString(descTxt, "text/html");
	// 	arrDesc.push(new descPod(descHtml.querySelector("description").innerHTML, descHtml.querySelector("title").innerHTML));
	// 	return (arrDesc);
	// }
	// // Busca a descricao
	// fetchDesc().then(resp => {
	// 	// Formatacao da descricao e titulo
	// 	resp.map((element) => {
	// 		element["desc"] = element["desc"].replaceAll("<\!--[CDATA[", "");
	// 		element["desc"] = element["desc"].replaceAll("<p-->", "");
	// 		element["desc"] = element["desc"].replaceAll("&nbsp", "");
	// 		element["desc"] = element["desc"].replaceAll(";", "");
	// 		element["desc"] = element["desc"].replaceAll("<p></p>]]", "");
	// 		element["desc"] = element["desc"].replaceAll("]]-->", "");
	// 		element["desc"] = element["desc"].replaceAll("&g", "");
	// 		element["desc"] = element["desc"].replaceAll(".t", "");

	// 		element["title"] = element["title"].replaceAll("&lt;![CDATA[", "");
	// 		element["title"] = element["title"].replaceAll("]]&gt;", "");
	// 	});
	// 	// Seleciona os objetos no html
	// 	// const podImg = document.querySelectorAll(".podcast img");
	// 	// const podH1 = document.querySelectorAll(".podcast h1");
	// 	// const podP = document.querySelectorAll(".podcast p");
	// 	// const podcast = document.querySelectorAll("#podcasts a");
	// 	let podItem = new thisPod(arr[num].img, arr[num].url, arr[num].name, " ")
	// 	dictVal.push(podItem)
	// 	dictVal.forEach(ele=>console.log("DICT VAL: \n" + ele.h1))
	// 	// Define os valores das imagens, h1 e do a (href)
	// 	dictVal.forEach((element, index) => {
	// 		switch (element.h1) {
	// 			// Compara o titulo do podcast atual ao titulo da descricao
	// 			// Atribui o valor adequado ao paragrafo
	// 			case resp[0]["title"]:
	// 				element.p  = resp[0]["desc"];
	// 				break;
	// 			case resp[1]["title"]:
	// 				element.p  = resp[1]["desc"];
	// 				break;
	// 			case resp[2]["title"]:
	// 				element.p  = resp[2]["desc"];
	// 				break;
	// 			case resp[3]["title"]:
	// 				element.p = resp[3]["desc"];
	// 				break;
	// 			case resp[4]["title"]:
	// 				element.p = resp[4]["desc"];
	// 				break;
	// 			default:
	// 				break;
	// 		}
	// 	})
		
	// 	numSum();
	