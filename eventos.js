var teclas = { // este es un objeto
UP: 38, //Así se define un atributo (estandar javaScript objet notation)
DOWN: 40,
LEFT: 37, // Los atributos se seraparan con comas
RIGHT: 39

}; // el punto y coma solo se pone porque es un objeto

console.log (teclas);

document.addEventListener("keyup",dibujarTeclado); // detecta cuando se oprime una tecla (keydown), cuando se suelta la tecla (keyup)
var cuadrito = document.getElementById ("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea ("red",149,149,151,151,papel);

function dibujarLinea (color, xinicial, yinicial,xfinal,yfinal,lienzo)
{
lienzo.beginPath(); 
lienzo.strokeStyle = color; 
lienzo.lineWidth = 3;
lienzo.moveTo(xinicial,yinicial);
lienzo.lineTo(xfinal,yfinal);
lienzo.stroke(); 
lienzo.closePath()
}
function dibujarTeclado(evento)
{
    var colorcito = "blue";
    var movimiento = 10;

   switch (evento.keyCode) // solo funciona para comparar una algo incial, con algo final.
   {
    case teclas.UP:
        dibujarLinea (colorcito,x,y,x,y-movimiento, papel);
        y= y-movimiento;
        break;
    case teclas.DOWN:
        dibujarLinea (colorcito,x,y,x,y+movimiento,papel);
        y= y+movimiento;
        break;

    case teclas.LEFT:
        dibujarLinea (colorcito,x,y,x-movimiento,y,papel);
        x = x-movimiento;
        break;
     case teclas.RIGHT:
        dibujarLinea (colorcito,x,y,x + movimiento,y,papel);
        x = x + movimiento;
        break;
        
        default:
            console.log ("Presionaste otra tecla");
   }

  
}