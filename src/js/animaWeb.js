/*
/ * animaWeb.js 2.3
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/animaWeb.git
/ * Date 09/09/2013
/ * Date 11/09/2013
/ * Date 27/09/2013
*/

// HOW TO USE
// define os parametros para o elemento selecionado
// opacidade SEMPRE
// animacoes: opacidade - toLeft - toRight - toDown - toUp


;(function (window,document,undefined) {
	
	//contrutora
	var _elemento; 			// elemento animado
	var _content; 			// conteudo que está o elemento a ser animado
	var _offset; 			// espaco em relacao ao bottom para ocorrer a animacao
	var _animacao;			// animacao que ocorrera
	var isIE;				// true é ie

	$.fn.animaWeb = function (_ani, _off) {
		
		//check if this is a 'IE'
		isIE = window.attachEvent ? isIE=true : isIE=false;

		if (isIE) {
			window.attachEvent("onscroll",$.fn.animaWeb.checaAnimacao);			
		}
		else {
		   window.addEventListener("scroll",$.fn.animaWeb.checaAnimacao, false);
		}

		//atualizando variaveis
		_elemento = this.selector;
		_content = this[0].parentElement;
		_offset = _off;
		_animacao = _ani;
	}


	//verifica ao rolar a barra
	$.fn.animaWeb.checaAnimacao = function () {

 	 	//calcula quanto esta em relacao ao bottom
 	 	if(isIE) {
 	 		var posX = (document.documentElement.scrollTop) - (_content.offsetTop) + (window.innerHeight);
 	 	}
 	 	else {
 	 		var posX = (document.body.scrollTop) - (_content.offsetTop) + (window.innerHeight);
 	 	}

		//check if condition is true to do the animation
		if(posX >= _offset)
		{
			console.log("cumprio "+_elemento);
			if(isIE)window.detachEvent("onscroll",$.fn.animaWeb.checaAnimacao);	//limpa listener event
			if(!isIE)window.removeEventListener("scroll",$.fn.animaWeb.checaAnimacao,false);	//limpa listener event

			//FAZER ANIMAÇÃO
		}
	}
})(window,document);

