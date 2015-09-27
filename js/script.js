$(document).ready(function($){
	
	// $(".secciones").click(function () {
 //        var audio = {};
 //        audio['walk'] = new Audio();
 //        audio['walk'].src = "http://translate.google.com/translate_tts?tl=es&q=gracias+Jose"
 //        audio['walk'].addEventListener('load', function () {
 //        audio['walk'].play();
 //        });
 //    });

	// Portada
	
	$(".portada").mouseenter(function(){
		var audio = $("#portadasound")[0];
		audio.play();
	});
	// $(".portada").mouseleave(function(){
	// 	var audio = $("#portadasound")[0];
	// 	audio.pause();
	// });

	// Politica
	

	$(".politica").mouseenter(function(){
		var audio = $("#politicasound")[0];
		audio.play();
	});
	// $(".politica").mouseleave(function(){
	// 	var audio = $("#politicasound")[0];
	// 	audio.pause();
	// });

	// Lima

	$(".lima").mouseenter(function(){
		var audio = $("#limasound")[0];
		audio.play();
	});
	$(".lima").mouseleave(function(){
		var audio = $("#limasound")[0];
		audio.pause();
	});

	// Peru

	$(".peru").mouseenter(function(){
		var audio = $("#perusound")[0];
		audio.play();
	});
	// $(".peru").mouseleave(function(){
	// 	var audio = $("#perusound")[0];
	// 	audio.pause();
	// });

	// Ciencias

	$(".ciencias").mouseenter(function(){
		var audio = $("#cienciassound")[0];
		audio.play();
	});
	// $(".ciencias").mouseleave(function(){
	// 	var audio = $("#cienciassound")[0];
	// 	audio.pause();
	// });

	// Tecnologia

	$(".tecnologia").mouseenter(function(){
		var audio = $("#tecnologiasound")[0];
		audio.play();
	});
	// $(".tecnologia").mouseleave(function(){
	// 	var audio = $("#tecnologiasound")[0];
	// 	audio.pause();
	// });


});