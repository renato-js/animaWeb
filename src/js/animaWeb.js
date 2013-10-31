/*
/ * animaWeb.js 3.0
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
// v3.0 - you can apply a function to many ID elements on you page. This events can be call once.
*/ 

// HOW TO USE
//


;(function (window,document,undefined) {
	
	var sElementos = [], 		// array all elements
		sOffsets = [], 			// array all offsets
		sFuncoes = [],			// array all functions
		isIE =  window.attachEvent ? isIE=true : isIE=false,					// true é ie	
		
		//it do the same as $ Jquery operator, but... very simplify
		_$ = function (_elementoID) {return document.getElementById(_elementoID);}

	//constructor
	animaWeb = function (_elem, _off, _fun) {

		if (isIE) {
			window.attachEvent("onscroll",animaWeb.checaAnimacaoIe);			
		}
		else {
			window.addEventListener("scroll",animaWeb.checaAnimacao, false);
		}

		//update vars
		sElementos[sElementos.length] = _$(_elem);
		sOffsets[sOffsets.length] = _off;
		sFuncoes[sFuncoes.length] = _fun;
	}

	//check scrolling - All Browser
	animaWeb.checaAnimacao = function () {

		for(i=0 ; i<sElementos.length ; i++)
		{
			//get document bottom offset
	 	 	var posX = (document.body.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);

		 	//check if offset is same one element
			if(posX >= sOffsets[i])
			{
				//call function defined by you and clear arrays
				sFuncoes[i]();
				sFuncoes.shift();
				sElementos.shift();
				sOffsets.shift();
				scrollStop();
			}
		}
	}


	//check scrolling - Internet Explorer
	animaWeb.checaAnimacaoIe = function () {

		for(i=0 ; i<sElementos.length ; i++)
		{
	 	 	//get document bottom offset
	 	 	var posX = (document.documentElement.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);

		 	//check if offset is same one element
			if(posX >= sOffsets[i])
			{
				//call function defined by you and clear arrays
				sFuncoes[i]();
				sFuncoes.shift();
				sElementos.shift();
				sOffsets.shift();
				scrollStop ();
			}
		}
	}

	//clear scrolling event
	function scrollStop () {
		if(sElementos.length == 0)
		{
			if(isIE)window.detachEvent("onscroll",animaWeb.checaAnimacao);	//limpa listener event
			if(!isIE)window.removeEventListener("scroll",animaWeb.checaAnimacao,false);	//limpa listener event
		}
	}

})(window,document);

