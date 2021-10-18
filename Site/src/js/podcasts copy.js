// PODCAST
// Criar um objeto de podcast
function podcast(name, img, author, url, feed) {
	this.name = name;
	this.img = img;
	this.author = author;
	this.url = url;
	this.feed = feed;
}
// Cria um objeto da descricao do podcast
function descPod(desc, title) {
	this.desc = desc;
	this.title = title; //Será usado como chave de comparação
}

// Cria uma array para armazenar as requisicoes
let arr = [];
// Cria uma array para armazenar as decricoes
let arrDesc = [];
// Cria um contador
let num = 0;

let dictVal = {
	"img": "",
	"url": "",
	"h1": "",
	"p": ""
}
function numSum() {
	return num = num + 1;
}
//Pega o resultado da requisicao do script no HTML
function podFunc(ep) {
	// Armazena os podcasts
	arr.push(new podcast(ep.results[0].collectionName, ep.results[0].artworkUrl600, ep.results[0].artistName, ep.results[0].collectionViewUrl, ep.results[0].feedUrl));

	// Funcao que busca a desricao
	async function fetchDesc() {
		const descRss = await fetch(ep.results[0].feedUrl);
		const descTxt = await descRss.text();
		let domParser = new DOMParser();
		const descHtml = domParser.parseFromString(descTxt, "text/html");
		arrDesc.push(new descPod(descHtml.querySelector("description").innerHTML, descHtml.querySelector("title").innerHTML));
		return (arrDesc);
	}
	// Busca a descricao
	fetchDesc().then(resp => {
		// Formatacao da descricao e titulo
		resp.map((element) => {
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
		});
		// Seleciona os objetos no html
		const podImg = document.querySelectorAll(".podcast img");
		const podH1 = document.querySelectorAll(".podcast h1");
		const podP = document.querySelectorAll(".podcast p");
		const podcast = document.querySelectorAll("#podcasts a");


		// Define os valores das imagens, h1 e do a (href)
		dictVal["img"] = arr[num].img;
		dictVal["url"] = arr[num].url;
		dictVal["h1"] = arr[num].name;
		numSum();
		podH1.forEach((element, index) => {
			element.innerHTML = arr[index].name
			switch (element.innerHTML) {
				// Compara o titulo do podcast atual ao titulo da descricao
				// Atribui o valor adequado ao paragrafo
				case resp[0]["title"]:
					dictVal["p"]  = resp[0]["desc"];
					break;
				case resp[1]["title"]:
					dictVal["p"]  = resp[1]["desc"];
					break;
				case resp[2]["title"]:
					dictVal["p"]  = resp[2]["desc"];
					break;
				case resp[3]["title"]:
					dictVal["p"] = resp[3]["desc"];
					break;
				case resp[4]["title"]:
					dictVal["p"]  = resp[4]["desc"];
					break;
				default:
					break;
			}
		})
	
	}).catch(err => {});
	return dictVal
}
export {
	podFunc
}