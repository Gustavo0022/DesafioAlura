function criptografarTexto(){
    let textoDescripto = document.querySelector('input');
    textoCripto = textoDescripto.value.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    let campoCripto = document.getElementById('saida');
    campoCripto.innerHTML = textoCripto;
}
function descriptografarTexto(){
    let textoCripto = document.querySelector('input');
    textoDescripto = textoCripto.value.replaceAll('ufat',' u').replaceAll('ober','o').replaceAll('ai','a').replaceAll('imes','i').replaceAll('enter','e');
    let campoDescripto = document.getElementById('saida');
    campoDescripto.innerHTML= textoDescripto;
}

