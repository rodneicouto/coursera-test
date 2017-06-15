//====== #01 =========

var ul = document.getElementById("listaDescricao");
console.log("Esse e um elemento do tipo: ", ul.nodeType);
console.log("Conteudo html: ", ul.innerHTML);
console.log("Numero de filhos: ", ul.childNodes.length);

//====== #02 =========

var liArray = document.getElementsByTagName("li");

for (var i = 0; i < liArray.length; i++) {
    console.log("Conteudo do li: ", liArray[i].innerHTML);
}

//====== #03 =========

liArray[i].setAttribute("style", "text-align:right");

//====== #04 =========

var li = document.createElement("li");
li.appendChild(document.createTextNode("Novo"));
ul.appendChild(li);

//====== #05 =========

<input type="button" value="adicionar" onclick="criaLi()" id="addBtn">

//JS
function criaLi() {
    var value = document.getElementById('texto').value;
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(value));
    ul.appendChild(li);
}

//====== #06 =========

document.getElementById("addBtn").addEventListener("click", function() {
    criaLi();
}, false);


//====== #07 =========
//

function ajaxCriaLi(result) {
	var data = result.responseJSON;
	for( var i = 0; i < data.contatos.length; i++ ){
		var li = document.createElement("li");
    	li.innerHTML = data.contatos[i].displayName;
    	ul.appendChild(li);
	}
	
}

$.ajax({
  url: "contatos.js",
  method: 'GET', 
  dataType: "json",
  complete: ajaxCriaLi
});
