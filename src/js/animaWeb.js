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
// animaWeb(elemento, posicao-inicial-X, posicao-final-X, animacao, x inicial, x final, y inicial, y final)
// size
// position


//get the X scroll page
window.onscroll = onScroller;
var posX;

function onScroller() {
	posX = document.body.scrollTop;
	console.log(posX);
	animaWeb();
}


//animacao de temporizoacao
function anima (_elemento, _posIni, _posEnd, _animacao, _xInit, _xEnd, _yInit, _yEnd ) {
	var _e = document.getElementById(_elemento);

	//tamanho
	if(_animacao == "size")
	{	
		var _cada = (_xEnd-_xInit)/(_posEnd-_posIni);			//pega quantos pixels vai aumentar da logo por pixel animado
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
			_e.style.height = _xInit;
		}
		else if(posX > _posEnd)
		{
			//mostra versao grande
			_e.style.backgroundColor = "red";
			_e.style.height = _xEnd;			
		}
	}


	if(_animacao == "posicao")
	{	
		var _cadaX = (_xEnd-_xInit)/(_posEnd-_posIni);			//pega quantos pixels vai aumentar da logo por pixel animado
		var _cadaY = (_yEnd-_yInit)/(_posEnd-_posIni);			//pega quantos pixels vai aumentar da logo por pixel animado
		
		if(posX > _posIni && posX < _posEnd)
		{
			//faz animacao de transicao
			_e.style.top = ((posX-_posIni)*_cadaX)+"px";
			_e.style.left = ((posX-_posIni)*_cadaY)+"px";
			_e.style.backgroundColor = "gray";			
		}
		else if(posX < _posIni)
		{
			//mostra versao pequena
			_e.style.backgroundColor = "red";
			_e.style.top = _xInit;
			_e.style.left = _yInit;
		}
		else if(posX > _posEnd)
		{
			//mostra versao grande
			_e.style.backgroundColor = "red";
			_e.style.top = _xEnd;			
			_e.style.left = _yEnd;			
		}
	}


}


