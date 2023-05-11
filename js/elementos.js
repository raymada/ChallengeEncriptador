

function encriptar () {
    let texto = document.getElementById("encriptador").value.toLowerCase();

    let textoCifrado = texto
    // las barras / indican que aplica a todas las e
    // i es para afectar a mayúsculas como minúsculas
    //g es para toda la línea
    //m es para que afecte a múltiples líneas
                        .replace(/e/igm, "enter")
                        .replace(/o/igm, "ober")                        
                        .replace(/i/igm, "imes")
                        .replace(/a/igm, "ai")
                        .replace(/u/igm, "ufat");
    
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("textoSinMensaje").style.display = "none";  
    document.getElementById("txtRandom").style.display = "none"; 
    document.getElementById("txtEncriptado").innerHTML = textoCifrado;
 //fala agregar este boton de copiar   
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
};

function desencriptar () {
    let texto = document.getElementById("encriptador").value.toLowerCase();

    let textoCifrado = texto
    // las barras / indican que aplica a todas las e
    // i es para afectar a mayúsculas como minúsculas
    //g es para toda la línea
    //m es para que afecte a múltiples líneas
                        .replace(/enter/igm, "e")
                        .replace(/ober/igm, "o")                        
                        .replace(/imes/igm, "i")
                        .replace(/ai/igm, "a")
                        .replace(/ufat/igm, "u");
    
    document.getElementById("sinMensaje").style.display = "none";
    document.getElementById("textoSinMensaje").style.display = "none";
    document.getElementById("txtRandom").style.display = "none";  
    document.getElementById("txtEncriptado").innerHTML = textoCifrado;
 //Boton de copiar
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
};

function copiar() {
    let contenido = document.querySelector("#txtEncriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió al portapapeles");
}