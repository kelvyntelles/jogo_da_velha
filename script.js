let jogador = 'um'
let jogadorUm = []
let jogadorDois = []

function teste (numero) {
    if(jogador === 'um') {
        jogadorUm.push(numero)
        document.getElementById(numero).innerHTML = 'X'
        jogador = 'dois'
    } else {
        jogadorDois.push(numero)
        document.getElementById(numero).innerHTML = 'O'
        jogador = 'um'
    }

    document.getElementById('vez').innerHTML = 'Vez do jogador ' + jogador

    if(
        jogadorUm.includes('um') && jogadorUm.includes('dois') && jogadorUm.includes('tres') ||
        jogadorUm.includes('quatro') && jogadorUm.includes('cinco') && jogadorUm.includes('seis') ||
        jogadorUm.includes('sete') && jogadorUm.includes('oito') && jogadorUm.includes('nove') ||
        jogadorUm.includes('um') && jogadorUm.includes('cinco') && jogadorUm.includes('nove') ||
        jogadorUm.includes('tres') && jogadorUm.includes('cinco') && jogadorUm.includes('sete') ||
        jogadorUm.includes('um') && jogadorUm.includes('quatro') && jogadorUm.includes('sete') ||
        jogadorUm.includes('tres') && jogadorUm.includes('seis') && jogadorUm.includes('nove') ||
        jogadorUm.includes('dois') && jogadorUm.includes('cinco') && jogadorUm.includes('oito') 
    ) {
        document.querySelector('.areaJogo').innerHTML = 
        '<div class="areaVencedor"><div class="vencedor">Vencedor: Jogador Um</div> <a href=""><button>Recomeçar Jogo</button></a></div>'
        
        document.getElementById('vez').innerHTML = ''
    }

    if(
        jogadorDois.includes('um') && jogadorDois.includes('dois') && jogadorDois.includes('tres') ||
        jogadorDois.includes('quatro') && jogadorDois.includes('cinco') && jogadorDois.includes('seis') ||
        jogadorDois.includes('sete') && jogadorDois.includes('oito') && jogadorDois.includes('nove') ||
        jogadorDois.includes('um') && jogadorDois.includes('cinco') && jogadorDois.includes('nove') ||
        jogadorDois.includes('tres') && jogadorDois.includes('cinco') && jogadorDois.includes('sete') ||
        jogadorDois.includes('um') && jogadorDois.includes('quatro') && jogadorDois.includes('sete') ||
        jogadorDois.includes('tres') && jogadorDois.includes('seis') && jogadorDois.includes('nove') ||
        jogadorDois.includes('dois') && jogadorDois.includes('cinco') && jogadorDois.includes('oito') 
    ) {
        document.querySelector('.areaJogo').innerHTML = 
        '<div class="areaVencedor"><div class="vencedor">Vencedor: Jogador Dois</div> <a href=""><button>Recomeçar Jogo</button></a></div>'
        
        document.getElementById('vez').innerHTML = ''
    }
}




