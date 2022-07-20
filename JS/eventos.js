//PASO 1

/*function sumar() {
 
    // declaramos variables y las cargamos con valores
  var num1 = 5;
  var num2 = 3;
  suma = num1 + num2;
   
    // mensaje emergente
  alert("La suma es: " + suma);
  } */
  

//PASO 2

/*  function sumar() {
 
    // capturamos los valores ingresados
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
   suma = num1+num2
   alert("La suma es: " + suma);
   
  }
  */



  //PASO 3

  /*  // capturamos los valores ingresados
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    
   suma = parseInt(num1)+parseInt(num2)
   alert("La suma es: " + suma);
   */



   //PASO 4

     // capturamos los valores ingresados
    function sumar() {

    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    
    suma = parseInt(num1)+parseInt(num2)
    res = document.getElementById("resultado")
    res.value = suma
}
