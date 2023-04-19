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
        document.write(max)
        document.write(min)

    break;
    default:
        break;
}