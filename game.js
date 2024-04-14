const dino = document.getElementById("dino")
const pedra = document.getElementById("pedra")
const score = document.getElementById("score")
const botao = document.getElementById("botao")

let jogoRodando = false;
let intervalo;

function pular() {
    dino.classList.add('pular-animation');
    setTimeout( () => {
        dino.classList.remove('pular-animation');
    }, 500);
}
document.addEventListener('keypress', () => {
    if (!dino.classList.contains("pular-animation")){
        pular();
    }
    
})

function comecar(){
        if (!jogoRodando) {
            jogoRodando = true;}
        intervalo = setInterval( () => {
    score.innerHTML++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top") );
    const pedraLeft = parseInt(window.getComputedStyle(pedra).getPropertyValue("left"));
    if (pedraLeft < 0) {
        pedra.style.display = 'none';
    }else {
        pedra.style.display = '';
    }

    if(pedraLeft < 40 && pedraLeft > 0 && dinoTop > 250) {
     alert('parabéns,seu bosta');
     location.reload();
    }
        
}, 50)
}
botao.addEventListener("click", comecar);