let campoEntrada = document.getElementById('entrada');
let campoSaida = document.getElementById('saida');
let placeholderSaida = document.querySelector('.body__pag__textovazio');
let campoSaidaCheio = document.querySelector('.body__pag__com__texto');

function criptografarTexto(){
    mudarConteudodaSaida();
    textoCripto = campoEntrada.value.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    campoSaida.innerHTML = textoCripto;
    
}
function descriptografarTexto(){
    mudarConteudodaSaida();
    textoDescripto = campoEntrada.value.replaceAll('ufat','u').replaceAll('ober','o').replaceAll('ai','a').replaceAll('imes','i').replaceAll('enter','e');
    campoSaida.innerHTML= textoDescripto;
}
function mudarConteudodaSaida(){
    if (campoEntrada.value == ""){
        alert('Digite alguma coisa para criptografar ou descriptografar!!!');
        exibirConteudo(placeholderSaida);
    }
    else if (campoEntrada.value != ""){
        ocultarConteudo(placeholderSaida);
        exibirConteudo(campoSaidaCheio);
    }
}
function ocultarConteudo(elemento){
    elemento.style.display = 'none';
}
function exibirConteudo(elemento){
    elemento.style.display = 'flex';
}
function copiarTexto(){
    navigator.clipboard.writeText(campoSaida.value);
}