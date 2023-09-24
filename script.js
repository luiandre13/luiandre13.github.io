const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btncopiar = document.querySelector

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}
function btnDescencriptar(){
    const textoDesencriptado = descencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    
}
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function descencriptar(stringDesencriptado){
    let matrizdesencriptado = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    for(let i = 0; i < matrizdesencriptado.length; i++){
        if(stringDesencriptado.includes(matrizdesencriptado[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizdesencriptado[i][0], matrizdesencriptado[i][1])
        }
    }
    return stringDesencriptado
}
