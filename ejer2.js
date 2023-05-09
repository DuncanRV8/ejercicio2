var ejercicio;
ejercicio = prompt("Dime el ejercicio que quieres ver")
switch (ejercicio) {

    case "1":
        var num1, num2, num3;
        num1 = prompt("Dime el primer número")
        num2 = prompt("Dime el segundo número")
        num3 = prompt("Dime el tercer número")

        if (num1 > num2 && num1 > num3) {
            document.write("El número mas grande es: " + num1)
        }
        else if (num2 > num1 && num2 > num3) {
            document.write("El número mas grande es: " + num2)
        }
        else if (num3 > num1 && num3 > num2) {
            document.write("El número mas grande es: " + num3)
        }
    break;
    case "2":
        var numero1;
        numero1 = prompt("Dime un numero")
        if ((numero1 % 2) == 0) {
            document.write("Es par")
        }
        else{
            document.write("Es impar")
        }
        if (numero1 >= 0) {
            document.write(" ")
            document.write("Es positivo")
        }
        else{
            document.write(" ")
            document.write("Es negativo")
        }
    break;

    case "3":
        var num1 = 0;
        for (let index = 1; index <= 100; index++) {
            num1 += index;
        }
        document.write(num1)
        
    break;

    case "4":
        var num1 = parseInt(prompt("Dime un numero"));
        var num2 = 0;
        for (let index = num1; index < num1 + 100; index++) {
            num2 += index;
        }
        document.write(num2)
    break;

    case "5":
        
        var num1 = parseInt(prompt("Dime un numero"));
        var num2 = parseInt(prompt("Dime un numero"));
        var num3 = parseInt(prompt("Dime un numero"));
        var numeros = [num1,num2,num3];
        max = 0;
        min = 999999999999999;
        for (index = 0; index < numeros.length; index++) {
            if (numeros[index] > max) {
                max = numeros[index];
            }
            if(numeros[index] < min){
                min = numeros[index];
            }
        }
        document.write("El número máximo es: " + max + " <br> " + "El número mínimo es: " +  min)

    break;

    case "6":
        contador = 0;
        max = 0;
        min = 999999999999999;
        var numeros = [];
        var continuar = true;

        do {
            var num1 = parseInt(prompt("Dime un numero"));
            if (num1 > 0) {
               numeros[contador] = num1;
               contador++;
            }
            else{
                continuar = false;
            }

        } while (continuar != false);
        for (let index = 0; index < numeros.length; index++) {
            if (numeros[index] > max) {
                max = numeros[index];
            }
            if (numeros[index] < min) {
                min = numeros[index];
            }
        }
        document.write("El numero maximo es: " + max + "<br>" + "El numero minimo es: " + min + "<br>");
        for (let index = 0; index < numeros.length; index++) {
            document.write(numeros[index] + " ");
        }
        
    break;

    case "7":
        var continuar = true;
        var num2;
            do {
                var num1 = parseInt(prompt("Dime los grados Farenhit"));
                if (num1 < 999) {
                    num2 = 5 / 9 * (num1  - 32);
                    document.write("El numero en Farenhit es: " + num1 + " " + "El número en Celsius " + num2 + "<br>");
                }
            } while (num1 != 999);
    break;

    case "8":
        var kilometros = parseInt(prompt("Dime cuantos kilometros/horas"));
        var segundos = parseInt(prompt("Dime cuantos segundos"));

        let metros = kilometros * 1000 / 3600;

        let distancia = metros * segundos;

        document.write("La distancia recorrida en metros/segundos es: " + distancia);

    break;

    case "9":
        var num1 = parseInt(prompt("Dime la cantidad"));
        var entrada = parseInt(prompt("Elige la moneda: El 1 es en euros el 2 dolar el 3 libra"));
        var salida = parseInt(prompt("A que quieres convertirlo: 1 euros 2 dolar 3 libra "));                 
        if (entrada == 1 && salida == 2) {
            //De euro a dolares 
            num1 = num1 + (num1 * 0.11);
            document.write("En dolares es: " + num1);
        }
        else if(entrada == 1 && salida == 3){
            //De euros a libra
            num1 = num1 -  (num1 * 0.16);
            document.write("En libra es: " + num1);
        }
        if (entrada == 2 && salida == 1) {
            //De dolares a euros
            num1 = num1 - (num1 * 0.11);
            document.write("En euros es: " + num1);
        }
        else if(entrada == 2 && salida == 3){
            //De dolar a libra
            num1 = num1 - (num1 * 0.24);
            document.write("En libra es: " + num1);
        }
        if (entrada == 3 && salida == 1) {
            //De libra a euros
            num1 = num1 + (num1 * 0.16);
            document.write("En euros es: " + num1);
        }
        else if(entrada == 3 && salida == 2){
            //De libra a dolares
            num1 = num1 + (num1 * 0.27);
            document.write("En dolares es: " + num1);
        } 
    break;
    
    case "10":
        var num1 = parseInt(prompt("Dime un numero"));
        var num2 = parseInt(prompt("Dime otro numero"));
        let result = confirm("Ascendente ACEPTAR, Descendente CANCELAR")
        if (result == true) {
          for (let index = num1; index <= num2; index++) {
            document.write(index + " ");
            
          }
        }else{
            for (let index = num2; index >= num1; index--) {
                document.write(index + " ");
            }
        }
    case "11":
        for (let index = 100; index >= 50; index--) {
            if (index % 5 == 0 || index % 5 == 5)  {
                document.write(index + " ");
            }
        }
    break;
        
    case "12":
        var multiplo = parseInt(prompt("Dime que numero quieres que sea multiplo"));
        var num1 = parseInt(prompt("Dime un numero"));
        var num2 = parseInt(prompt("Dime otro numero"));
      
        if (num1 > num2) {
            for (let index = num1; index >= num2; index--) {
                if (index % multiplo == 0) {
                    document.write(index + " ");
                }
            }
        }
        else if(num1 < num2){
            for (let index = num1; index <= num2; index++) {
                if (index % multiplo == 0) {
                    document.write(index + " ");
                }
            }
        }
        

    break;
    break;
    default:
        break;
}