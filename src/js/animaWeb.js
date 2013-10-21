/*
/ * animaWeb.js 2.4
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/animaWeb.git
/ * Date 09/09/2013
/ * Date 11/09/2013
/ * Date 27/09/2013
/ * Date 21/10/2013
/ / v2.4 - it not more Jquery plugin, add this in all your project without Jquery library!
// BUG: its only works if you apply to one DIV.
*/ 

// HOW TO USE
//

;(function (window,document,undefined) {
	
	//contrutora
	var _elemento; 			// elemento animado
	var _offset; 			// espaco em relacao ao bottom para ocorrer a animacao
	var isIE;				// true é ie
	var _funcao;			//_funcao executada ao cumprir limite

	//captura elemento pela ID
	var _$ = function (_elementoID) {
		return document.getElementById(_elementoID);
	}

	animaWeb = function (_elem, _off, _fun) {
		
		//check if this is a 'IE'
		isIE = window.attachEvent ? isIE=true : isIE=false;

		if (isIE) {
			window.attachEvent("onscroll",animaWeb.checaAnimacao);			
		}
		else {
		   window.addEventListener("scroll",animaWeb.checaAnimacao, false);
		}

		//atualizando variaveis
		_elemento = _$(_elem);
		_offset = _off;
		_funcao = _fun;
	}


	//verifica ao rolar a barra
	animaWeb.checaAnimacao = function () {

 	 	//calcula quanto esta em relacao ao bottom
 	 	if(isIE) {
 	 		var posX = (document.documentElement.scrollTop) - (_elemento.offsetTop) + (window.innerHeight);
 	 	}
 	 	else {
 	 		var posX = (document.body.scrollTop) - (_elemento.offsetTop) + (window.innerHeight);
 	 	}

		//check if condition is true to do the animation
		if(posX >= _offset)
		{
			if(isIE)window.detachEvent("onscroll",animaWeb.checaAnimacao);	//limpa listener event
			if(!isIE)window.removeEventListener("scroll",animaWeb.checaAnimacao,false);	//limpa listener event

			//exec function defined by developer
			_funcao();
		}
	}
})(window,document);

