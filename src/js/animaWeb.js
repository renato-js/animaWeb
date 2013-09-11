/*
/ * animaWeb.js 2.0
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/animaWeb.git
/ * Date 09/09/2013
/ * Date 11/09/2013
*/

// HOW TO USE
// ...


;(function (window,document, undefined) {
	
	animaWeb = function (parameters) {
		//exec
		window.addEventListener("scroll",animaWeb.checaAnima, false);
		parameters = merge(parameters);
	}

	//
	animaWeb.mostraTexto = function (parameters) {
		//merge
		parameters = merge(parameters);
	}

	//
	animaWeb.checaAnima = function (parameters) {
		parameters = merge(parameters);

	 	var _eC = document.getElementById(parameters.content);
	 	var _eA = document.getElementById(parameters.elemento);
	 	var _posXEvent = parameters.inicio;

		//calculates the bottom offset
		var posX = (document.body.scrollTop) - (_eC.offsetTop) + (window.innerHeight);

		//check if condition is true to do the animation
		if(posX >= _posXEvent)
		{
			//animate - opacity
			_eA.style.webkitTransition = "opacity .3s";
			_eA.style.transition = "opacity .3s";
			_eA.style.opacity = "1";
			window.removeEventListener("scroll",animaWeb.checaAnima);	//limpa listener event
		}
	}


	//propriedades default
	animaWeb.propDefault = {
		"texto": "sem texto",
		"content": "body",
		"elemento": "body",
		"inicio": 0
	}

	//merge
	function merge (parameters) {
		return parameters = $.extend(animaWeb.propDefault, parameters);
	}

})(window,document);


