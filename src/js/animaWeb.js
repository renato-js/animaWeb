/*
/ * animaWeb.js 1.0
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/animaWeb.git
/ * Date 09/09/2013
/ *
*/

// HOW TO USE
// animaWeb(elemento, posicao-inicial-X, posicao-final-X, animacao)
// size
// position


//get the X scroll page
window.onscroll = onScroller;
var posX;

function onScroller() {
	posX = document.body.scrollTop;
	animaWeb();
}


//animacao de temporizoacao
function anima (_elemento, _posIni, _posEnd, _animacao, _tamanhoInicial, _tamanhoFinal) {
	var _e = document.getElementById(_elemento);
	var _cada = (_tamanhoFinal-_tamanhoInicial)/(_posEnd-_posIni);			//pega quantos pixels vai aumentar da logo por pixel animado

	if(_animacao == "size")
	{	
		if(posX > _posIni && posX < _posEnd)
		{
			//faz animacao de transicao
			_e.style.height = ((posX-_posIni)*_cada)+"px";
			_e.style.backgroundColor = "gray";			
		}
		else if(posX < _posIni)
		{
			//mostra versao pequena
			_e.style.backgroundColor = "red";
			_e.style.height = _tamanhoInicial;
		}
		else if(posX > _posEnd)
		{
			//mostra versao grande
			_e.style.backgroundColor = "red";
			_e.style.height = _tamanhoFinal;			
		}
	}
}


