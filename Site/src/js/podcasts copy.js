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
function thisPod(img, url, h1, p){
	this.img = img;
	this.url = url;
	this.h1 = h1;
	this.p =p
}
let dictVal = []
// Cria uma array para armazenar as requisicoes
let arr = [];
// Cria uma array para armazenar as decricoes
let arrDesc = [];
// Cria um contador
let num = 0;

function numSum() {
	return num = num + 1;
}
//Pega o resultado da requisicao do script no HTML
async function podFunc(ep) {
	ep = await ep
	let epData = await ep
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
		// const podImg = document.querySelectorAll(".podcast img");
		// const podH1 = document.querySelectorAll(".podcast h1");
		// const podP = document.querySelectorAll(".podcast p");
		// const podcast = document.querySelectorAll("#podcasts a");
		let podItem = new thisPod(arr[num].img, arr[num].url, arr[num].name, " ")
		dictVal.push(podItem)
		dictVal.forEach(ele=>console.log("DICT VAL: \n" + ele.h1))
		// Define os valores das imagens, h1 e do a (href)
		dictVal.forEach((element, index) => {
			switch (element.h1) {
				// Compara o titulo do podcast atual ao titulo da descricao
				// Atribui o valor adequado ao paragrafo
				case resp[0]["title"]:
					element.p  = resp[0]["desc"];
					break;
				case resp[1]["title"]:
					element.p  = resp[1]["desc"];
					break;
				case resp[2]["title"]:
					element.p  = resp[2]["desc"];
					break;
				case resp[3]["title"]:
					element.p = resp[3]["desc"];
					break;
				case resp[4]["title"]:
					element.p = resp[4]["desc"];
					break;
				default:
					break;
			}
		})
		
		numSum();
	
	}).catch(err => {});
	return dictVal
}
export {
	podFunc
}