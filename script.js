function somar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('resultado').innerText = `Resultado: ${numero1 + numero2}`
    
}
function subtrair(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('resultado').innerText = `Resultado: ${numero1 - numero2}`
    
}
function mutiplicar(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('resultado').innerText = `Resultado: ${numero1 * numero2}`
    
}

function dividir(){
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    document.getElementById('resultado').innerText = `Resultado: ${numero1 / numero2}`
    
}
