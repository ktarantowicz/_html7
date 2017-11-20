var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
var diagnostic = document.querySelector('output');

recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = 'pl';

recognition.start();
diagnostic.textContent = 'Ready to receive command.';

recognition.onresult = function(event) {
  console.log(event);
  var command = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + command;
}

recognition.onnomatch = function(event) {
  console.info('No Match: ', event);
}

recognition.onsoundend = function(event) {
  console.info('Sound end ', event);
}

recognition.onError = function(event) {
  console.warning(event);
}
