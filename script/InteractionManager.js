/**
 * @description Gestore dell'interazione con l'utente.
 * @author Gabriele Lombari gabriele.lombari@gmail.com
 **/
	function InteractionManager(body) {

		this.speechSynthesizer = window.speechSynthesis;
		this.speechRecognizer = new webkitSpeechRecognition();
		this.speechRecognizer.interimResult = true;
		this.lastResult = "";
		this.divManager = new DivManager();

		this.speechRecognizer.onresult = function(event){
			this.lastResult = event.results[0][0].transcript;
			console.debug("Ho capito " + event.results[0][0].transcript);
		}

		this.speechRecognizer.onnomatch = function(event){
			this.lastResult = NO_MATCH;
			console.debug("Non ho capito");
		}

		this.speechRecognizer.onerror = function(event){
			this.speak(ERROR_SPEECH_MATCHING);
		}
		
		this.speechRecognizer.onaudiostart = function(event)
		{
			
		}

		var handler = function(event)
						{
							//Se viene premuto il tasto "spazio" viene interrotta la sintetizzazione
							 if (event.keyCode == 32) {
									this.speechSynthesizer.cancel();
								}
						};

			body.addEventListener("keypress", handler);
	}

	InteractionManager.prototype.speak = function(text){
			this.speechSynthesizer.speak(new SpeechSynthesisUtterance(text));
			this.divManager.addText(text);
		}

	InteractionManager.prototype.startRecognizing = function(){
			this.speechRecognizer.start();
		}

	InteractionManager.prototype.getResult = function(){
			return this.lastResult;
		}