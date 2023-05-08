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

    break;

    case "9":
            var entrada = parseInt(prompt("Elige la moneda: El 1 es en euros el 2 dolar el 3 libra"));
            var salida = parseInt(prompt("A que quieres convertirlo: 1 euros 2 dolar 3 libra "));                 
            //euro
            var num1;
            //dolar
            var num2;
            //libra
            var num3;
            num1 = parseInt(prompt("Dime la cantidad"));
            if (entrada = 1) {
                if (salida = 2) {
                    num2 = num1 + (num1 * 0.11);
                    document.write("En dolar son: " + num2 + "<br>"); 
                }
                else if(salida = 3){
                    num3 = num1 * 0.84; 
                    document.write("En libra son: " + num3 + "<br>");
                } 
            }
    break;
    default:
        break;
}