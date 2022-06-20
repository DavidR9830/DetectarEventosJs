var teclas = {
UP: 38, //Así se define un atributo (estandar javaScript objet notation)
DOWN: 40,
LEFT: 37, // Los atributos se seraparan con comas
RIGHT: 39

}; // el punto y coma solo se pone porque es un objeto

console.log (teclas);

document.addEventListener("keyup",dibujarTeclado); // detecta cuando se oprime una tecla (keydown), cuando se suelta la tecla (keyup)

function dibujarTeclado(evento)
{

   switch (evento.keyCode) // solo funciona para comparar una algo incial, con algo final.
   {
    case teclas.UP:
        console.log ("arriba");
        break;
    case teclas.DOWN:
        console.log("abajo");
        break;

    case teclas.LEFT:
        console.log("izquierda");
        break;
     case teclas.LEFT:
        console.log("derecha");
        break;
        
        default:
            console.log ("Presionaste otra tecla");
   }
    
}