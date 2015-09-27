$(document).ready(function(){
	$("#textolimpio").keyup(function(){
		var value = $("#textolimpio").val();
		$("#prueba").text(value);

	});

	var value = "";
	var translate = "";
	var leer = "";
	var audio = $("#audioh")[0];

	$("#prueba").mouseenter(function(){
		value = $("#prueba").html();

		leer = "http://translate.google.com/translate_tts?tl=es&q=";
		$("#audioh").attr("src", leer+value);
		audio.play();
	});



});