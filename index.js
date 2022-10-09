// asiganacion de la pantalla a una variable 
const display = document.getElementById("display");
// variables para ejecutar las fuinciones 
let num1=0, num2=0, result=0, operacion='';

// funcion obtencion, recibe el valor de la tecla pulsada y lo muestra en display
function obtencion(x) {
  display.value += x;
}
// funciones de operaciones almacenan el valor en el display en num1 y limpian la pantalla

// suma
function suma() {
    num1 = +display.value;
    operacion = '+'
    clearDisplay()
}
// resta
function resta() {
    num1 = +display.value;
    operacion = '-'
    clearDisplay()
}
// multiplicacion
function multiplicacion() {
    num1 = +display.value;
    operacion = '*'
    clearDisplay()
}
// divicion
function divicion() {
    num1 = +display.value;
    operacion = '/'
    clearDisplay()
}

// funcion clear  limpia la pantalla, operacion lo deja limpio  y  num1 y num2 los deja en 0
function clear(){
    document.getElementById('display').value = '';
    operacion = '';
    num1 = 0;
    num2 = 0;
    
}
// function resultado, obtiene num2 de display y ejecuta calcular
function resultado() {
    num2 = +display.value;
    calcular()
}

// function calcular, detecta la operacion con la variable 'operacion' y la almacena en result
function calcular(){
    result = 0
    switch (operacion) {
        case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
              break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }
    // ejecuta clear para limpiar la pantalla 
    clear()
    // muestra el resultado
    display.value = result;
}

// function clearDisplay, deja display en blanco
function clearDisplay() {
    display.value = "";
  }
  