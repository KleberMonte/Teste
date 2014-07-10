document.getElementById("next").addEventListener("click", direita, false);
document.getElementById("back").addEventListener("click", esquerda, false);

var imgDirOld;
var imgEsqOld;
var x = getEsquerda(document.getElementById("img1"));
var imagens = [];

function getEsquerda(elemento)
{
	var teste = elemento.offsetLeft;

	while((elemento = elemento.offsetParent) != null)
		teste += elemento.offsetLeft;

	return teste;
}

function direita()
{

	alert(x);

	if(imgDirOld != document.getElementById("img1").src)
		imgDirOld = document.getElementById("img1").src;

	if(x > -200)
	{
		x--;
		document.getElementById("img1").left = x;		
	}

	if(x == -200)
		document.getElementById("img1").src = "Imagens/ImagensBanner/2.jpg";

	var intervalo = setTimeout(direita(), 100);
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