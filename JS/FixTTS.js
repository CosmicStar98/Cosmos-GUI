javascript:speak = {};var e = socket.on('talk',n=>{speechSynthesis.cancel();speechSynthesis.speak(new SpeechSynthesisUtterance(n.text))});