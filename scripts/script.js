document.getElementById("next").addEventListener("click", direita(document.getElementById("next")), false);
document.getElementById("back").addEventListener("click", esquerda, false);

var imgDirOld;
var imgEsqOld;
//var x = getEsquerda(document.getElementById("img1"));
var x = 0;
var imagens = [];

function getEsquerda(elemento)
{
	var teste = elemento.offsetLeft;

	while((elemento = elemento.offsetParent) != null)
		teste += elemento.offsetLeft;

	return teste;
}

function direita(elemento)
{
	var valor = getEsquerda(elemento);

	/*if(imgDirOld != document.getElementById("img1").src)
		imgDirOld = document.getElementById("img1").src;*/

	/*if(x > -20)
	{
		x--;
		document.getElementById("img1").offsetLeft = x;		
	}

	if(x == -20)
	{
		document.getElementById("img1").src = "Imagens/ImagensBanner/2.jpg";
	}

	var intervalo = setTimeout(direita(), 100);*/
}

function esquerda()
{
	if(imgDEsqOld != document.getElementById("img1").src)
		imgDEsqOld = document.getElementById("img1").src;

	document.getElementById("img1").src = imgDirOld;	
}

function carregarImagens() 
{
	for (var i = 0; i < 3 ; i++) 
	{
		
	}
}