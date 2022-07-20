$(document).ready(function(){
    //
    $("#sumar").click(
        function(){
           // $("#sumar").hide(1500); //sirve para desaparecer en este caso el boton Sumar
           
            var num1 = parseInt($("#num1").val());
            var num2 = parseInt($("#num2").val());
            var suma = num1+num2
            
            $("#resultado").val(suma)
        }
    );
}
);
