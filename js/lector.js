$(document).ready(function(){
	var textdata = [];



	var valueA = "";
	var valueB = "";
	var audiotitulo = $("#audiotitulo")[0];
	var audiocontenido = $("#audiocontenido")[0];
	var a = 0;
	var b = 0;

	// titulo
	$("body").mouseenter(function(){
		textdata[0]= getdatatext();
	});

	$("#titulo").mouseenter(function(){

		translate = "http://translate.google.com/translate_tts?ie=UTF-8&tl=es&q=";
		valueA = $("#titulo").html();
		contarA = valueA.length;

		// if (contarA < 99) {
			$("#audiotitulo").attr("src", translate+valueA);
			$("p").text(contarA);
		// }else{
		// 	for (i = 1; i*100 < contarA; i++) {
		// 		b=a+99;
		// 		var cadena = $(valueA).substr(a,b);
		// 		a=100 + a;
		// 		var translate = "http://translate.google.com/translate_tts?tl=es&q=";
		// 		$("#audiotitulo").attr("src", translate+cadena);
		// 		audiotitulo.play();

		// 	};
			
		// }; 

		audiotitulo.play();
	});
	
	// contenido

	// $("#contenido").mouseenter(function(){
	// 	translate = "http://translate.google.com/translate_tts?tl=es&q=";
	// 	valueB = $("#contenido").html();
	// 	contarB = valueB.length;
	// 	$("#audiocontenido").attr("src", translate+valueB);
	// 	$("p").text(contarB);
	// 	audiocontenido.play();
	// });

	

	


});