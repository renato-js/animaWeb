/*
/ * animaWeb.js 2.5
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
	
	var sElementos = []; 			// elementos animado
	var sOffsets = []; 			// espaco em relacao ao bottom para ocorrer a animacao
	var sFuncoes = [];			//_funcao executada ao cumprir limite
	var isIE;				// true é ie
	
	//captura elemento pela ID
	var _$ = function (_elementoID) {
		return document.getElementById(_elementoID);
	}

	//construtora
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
		sElementos[sElementos.length] = _$(_elem);
		sOffsets[sOffsets.length] = _off;
		sFuncoes[sFuncoes.length] = _fun;
	}

	//verifica ao rolar a barra
	animaWeb.checaAnimacao = function () {

		//verifica cada elemento animado na tela
		for(i=0 ; i<sElementos.length ; i++)
		{
	 	 	//calcula quanto esta em relacao ao bottom
	 	 	if(isIE) {
	 	 		var posX = (document.documentElement.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);
	 	 	}
	 	 	else {
	 	 		var posX = (document.body.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);
	 	 	}

		 	//check if condition is true to do the animation
			if(posX >= sOffsets[i])
			{
				//exec function defined by developer
				sFuncoes[i]();
				sFuncoes.shift();
				sElementos.shift();
				sOffsets.shift();

				//finalizou toda a busca de elementos animados na tela
				if(sElementos.length == 0)
				{
					if(isIE)window.detachEvent("onscroll",animaWeb.checaAnimacao);	//limpa listener event
					if(!isIE)window.removeEventListener("scroll",animaWeb.checaAnimacao,false);	//limpa listener event
				}
			}

		}

	}
})(window,document);

