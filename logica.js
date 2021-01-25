let tempo = 10

let cronometro = setInterval(function(){
	tempo -= 1

	if (tempo<0) {
		clearInterval(cronometro)
		window.location.href = 'explodiu.html'

		else{
			document.getElementById('cronometro').innerHTML = tempo
		}
	}
},1000)