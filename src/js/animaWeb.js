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
// anima("caixaContentDoElemento","elementoAnimado","distanciaBottomParaAnimacaoComecar");


//init
// window.onscroll = function () {
// 	animaWeb();
// };

// //animacao de temporizoacao
// function anima (_elContent, _elAnimation ,_posXEvent) {

// 	var _eC = document.getElementById(_elContent);
// 	var _eA = document.getElementById(_elAnimation);

// 	//calculate the bottom offset
// 	var posX = (document.body.scrollTop) - (_eC.offsetTop) + (window.innerHeight);

// 	//check if condition is true to do the animation
// 	if(posX >= _posXEvent)
// 	{
// 		//animate - opacity
// 		_eA.style.webkitTransition = "opacity .3s";
// 		_eA.style.transition = "opacity .3s";
// 		_eA.style.opacity = "1";
// 	}
// }



anima = function (parameters) {
	
	//merge
	//parameters = merge(parameters);

	//exec
	window.onscroll = anima.mostraTexto;
}

//
anima.mostraTexto = function (parameters) {
	//merge
	parameters = merge(parameters);

	//exec
	console.log(parameters.texto);
}



//propriedades default
anima.propDefault = {
	"texto": "sem texto"
}


//
function merge (parameters) {
	return parameters = $.extend(anima.propDefault, parameters);
}



