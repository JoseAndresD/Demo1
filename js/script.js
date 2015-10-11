$(document).ready(function(){

	var value = "";
	var translate = "";
	var leer = "";
	var nn = $("#prueba").html();
	var n = nn.length;
	var i = 0;
	var audio = $("#audioh")[0];

	

	$("#sonido").mouseenter(function(){
		i = 0;		
		
		value = $("#texto1").text();
		leer = "http://translate.google.com/translate_tts?tl=es&q=";
		//leerdos = "&client=t";

//primera oración
		
		$("#audioh").attr("src", leer+value);
		audio.play();


		$("#audioh").on("timeupdate", function(event) {

	        var currentTime = Math.ceil(this.currentTime);
	        var duration = Math.ceil(this.duration);
	        var pp = $("#texto1").html();
			var p = pp.length;
	    
	     	$("#duracion").text("Duracion de audio" +" : "+ duration + " sg");
	    	$("#current").text("tiempo transcurrido" + " : " + currentTime + " sg");
	    	$("#caracteres").text("N° de Caracteres " + n);
	    	$("#oracion").text("Caracteres en la oración " + p);
	    	$("#parrafo").text("Sistema " + i);

		
	    

//segunda oración
		

			if (currentTime < duration) {
				$("#simulacro").text("PLAY");
			}else{
				$("#simulacro").text("FINALIZO");
				
				i = i + 1;			

				value = "";
				value = $("#texto2").text();
				leer = "http://translate.google.com/translate_tts?tl=es&q=";
				leerdos = "&client=t";

				audio = $("#audioh")[0];
				$("#audioh").attr("src", leer+value+leerdos);
				audio.play();

				i = i + 1;

					$("#audioh").on("timeupdate", function(event) {

					var currentTimeb = Math.ceil(this.currentTime);
			        var durationb = Math.ceil(this.duration);
			        var pp = $("#texto2").html();
					var p = pp.length;

		 			$("#duracion").text("Duracion de audio" +" : "+ durationb + " sg");
					$("#current").text("tiempo transcurrido" + " : " + currentTimeb + " sg");
					$("#caracteres").text("N° de Caracteres " + n);
					$("#oracion").text("Caracteres en la oración " + p);
					$("#parrafo").text("Sistema " + i);
					i = i + 1;

					
						if (currentTimeb < durationb) {
							$("#simulacro").text("PLAY");
						}else{

//tercera oración
							$("#simulacro").text("FINALIZO");
							
							i = i + 1;			

							value = "";
							value = $("#texto3").text();
							leer = "http://translate.google.com/translate_tts?tl=es&q=";
							leerdos = "&client=t";

							audio = $("#audioh")[0];
							$("#audioh").attr("src", leer+value+leerdos);
							audio.play();

								$("#audioh").on("timeupdate", function(event) {
								var currentTimec = Math.ceil(this.currentTime);
						        var durationc = Math.ceil(this.duration);
						        var pp = $("#texto3").html();
								var p = pp.length;

					 			$("#duracion").text("Duracion de audio" +" : "+ durationc + " sg");
								$("#current").text("tiempo transcurrido" + " : " + currentTimec + " sg");
								$("#caracteres").text("N° de Caracteres " + n);
								$("#oracion").text("Caracteres en la oración " + p);
								$("#parrafo").text("Sistema " + i);
								i = i + 1;

									if (currentTimec < durationc) {
										$("#simulacro").text("PLAY");
									}else{
										$("#simulacro").text("FINALIZO");
//Cuarta oracion
										i = i + 1;			

										value = "";
										value = $("#texto4").text();
										leer = "http://translate.google.com/translate_tts?tl=es&q=";
										leerdos = "&client=t";

										audio = $("#audioh")[0];
										$("#audioh").attr("src", leer+value+leerdos);
										audio.play();

											$("#audioh").on("timeupdate", function(event) {
											var currentTimed = Math.ceil(this.currentTime);
									        var durationd = Math.ceil(this.duration);
									        var pp = $("#texto4").html();
											var p = pp.length;

								 			$("#duracion").text("Duracion de audio" +" : "+ durationd + " sg");
											$("#current").text("tiempo transcurrido" + " : " + currentTimed + " sg");
											$("#caracteres").text("N° de Caracteres " + n);
											$("#oracion").text("Caracteres en la oración " + p);
											$("#parrafo").text("Sistema " + i);
											i = i + 1;

												if (currentTimed < durationd) {
													$("#simulacro").text("PLAY");
												}else{
													$("#simulacro").text("FINALIZO");
													i = i + 1;			
//Quinta oracion
													value = "";
													value = $("#texto5").text();
													leer = "http://translate.google.com/translate_tts?tl=es&q=";
													leerdos = "&client=p";

													audio = $("#audioh")[0];
													$("#audioh").attr("src", leer+value+leerdos);
													audio.play();

														$("#audioh").on("timeupdate", function(event) {
														var currentTimee = Math.ceil(this.currentTime);
												        var duratione = Math.ceil(this.duration);
												        var pp = $("#texto5").html();
														var p = pp.length;

											 			$("#duracion").text("Duracion de audio" +" : "+ duratione + " sg");
														$("#current").text("tiempo transcurrido" + " : " + currentTimee + " sg");
														$("#caracteres").text("N° de Caracteres " + n);
														$("#oracion").text("Caracteres en la oración " + p);
														$("#parrafo").text("Sistema " + i);
														i = i + 1;

															if (currentTimee < duratione) {
																$("#simulacro").text("PLAY");
															}else{
																$("#simulacro").text("FINALIZO");
																i = i + 1;		
//Sexta oracion
																value = "";
																value = $("#texto6").text();
																leer = "http://translate.google.com/translate_tts?tl=es&q=";
																leerdos = "&client=p";

																audio = $("#audioh")[0];
																$("#audioh").attr("src", leer+value+leerdos);
																audio.play();

																	$("#audioh").on("timeupdate", function(event) {
																	var currentTimee = Math.ceil(this.currentTime);
															        var duratione = Math.ceil(this.duration);
															        var pp = $("#texto6").html();
																	var p = pp.length;

														 			$("#duracion").text("Duracion de audio" +" : "+ duratione + " sg");
																	$("#current").text("tiempo transcurrido" + " : " + currentTimee + " sg");
																	$("#caracteres").text("N° de Caracteres " + n);
																	$("#oracion").text("Caracteres en la oración " + p);
																	$("#parrafo").text("Sistema " + i);
																	i = i + 1;

																		if (currentTimee < duratione) {
																			$("#simulacro").text("PLAY");
																		}else{
																			$("#simulacro").text("FINALIZO");
																			i = i + 1;
																			value = "";
																			value = $("#texto7").text();
																			leer = "http://translate.google.com/translate_tts?tl=es&q=";
																			leerdos = "&client=p";

																			audio = $("#audioh")[0];
																			$("#audioh").attr("src", leer+value+leerdos);
																			audio.play();

																				$("#audioh").on("timeupdate", function(event) {
																				var currentTimef = Math.ceil(this.currentTime);
																		        var durationf = Math.ceil(this.duration);
																		        var pp = $("#texto7").html();
																				var p = pp.length;

																	 			$("#duracion").text("Duracion de audio" +" : "+ durationf + " sg");
																				$("#current").text("tiempo transcurrido" + " : " + currentTimef + " sg");
																				$("#caracteres").text("N° de Caracteres " + n);
																				$("#oracion").text("Caracteres en la oración " + p);
																				$("#parrafo").text("Sistema " + i);
																				i = i + 1;
																				
																				$("#audioh").off();
																				


																			});





																		}	







																	});



															}	








														});



												}











											});

										}








							});
						}



					});

			}

		});
			

	});

});
