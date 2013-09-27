/*
/ * animaWeb.js 2.1
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/animaWeb.git
/ * Date 09/09/2013
/ * Date 11/09/2013
*/

// HOW TO USE
// define os parametros para o elemento selecionado
// opacidade SEMPRE
// animacoes: opacidade - toLeft - toRight - toDown - toUp






;(function (window,document,undefined) {
	
	//contrutora
	var _elemento = this; 	// elemento animado
	var _content; 			// conteudo que está o elemento a ser animado
	var _offset; 			// espaco em relacao ao bottom para ocorrer a animacao
	var _animacao;			// animacao que ocorrera


	$.fn.animaWeb = function (_con, _ani, _off) {
		window.addEventListener("scroll",$.fn.animaWeb.checaAnimacao, false);
		_content = _con;
		_offset = _off;
		_animacao = _ani;
	}

	//verifica ao rolar a barra
	$.fn.animaWeb.checaAnimacao = function () {
 	 	var _eC = document.getElementById(_content);
 	 	var _eA = document.getElementById(_elemento);
 	 	console.log("obj");
 	 	var _posXEvent = _offset;
		var posX = (document.body.scrollTop) - (_eC.offsetTop) + (window.innerHeight);

		//check if condition is true to do the animation
		if(posX >= _posXEvent)
		{
			//animate - opacity
			console.log("cumprio");
			//_eA.style.webkitAnimation = _animacao+" 1s";
			window.removeEventListener("scroll",$.fn.animaWeb.checaAnimacao,false);	//limpa listener event
		}
	}

})(window,document);


















// ;(function (window,document, undefined) {
	
// 	$.fn.animaWeb = function (_content, _elemento, _animacao, _offset) {
// 		//exec
// 		window.addEventListener("scroll",$.fn.animaWeb.checaAnima, false);
// 	}

// 	//
// 	$.fn.animaWeb.checaAnima = function (parameters) {

// 	 	var _eC = document.getElementById(_con);
// 	 	var _eA = document.getElementById(_elemento);

// 	 	var _posXEvent = parameters.inicio;

// 		//calculates the bottom offset
// 		var posX = (document.body.scrollTop) - (_eC.offsetTop) + (window.innerHeight);

// 		//check if condition is true to do the animation
// 		if(posX >= _posXEvent)
// 		{
// 			//animate - opacity
// 			console.log("cumprio");
// 			_eA.style.webkitAnimation = parameters.animacao+" 1s";
// 			window.removeEventListener("scroll",$.fn.animaWeb.checaAnima);	//limpa listener event
// 		}
// 	}


// })(window,document);


