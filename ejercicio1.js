let usuarioCorrecto = "admin";
let claveCorrecta = "1234";
let intentos = 0;
let accesoConcedido = false;

while (intentos < 3) {
    let usuario = prompt("Ingrese usuario:");
    let clave = prompt("Ingrese contraseña:");

    if (usuario === usuarioCorrecto && clave === claveCorrecta) {
        accesoConcedido = true;
        break;
    } else {
        alert("Credenciales incorrectas. Intento " + (intentos + 1) + " de 3");
    }
    intentos++;
}

if (!accesoConcedido) {
    alert("Acceso denegado. Fin del programa.");
} else {
    alert("Bienvenido al software académico");
    let estudiante = prompt("Ingrese el nombre del estudiante:");
    let programa = prompt("Ingrese el nombre del programa académico:");
    let materia = prompt("Ingrese el nombre de la materia:");

    alert("Ingrese las notas de los tres momentos de evaluación:");
    let nota1 = parseFloat(prompt("Nota 1 (30%):"));
    let nota2 = parseFloat(prompt("Nota 2 (30%):"));
    let nota3 = parseFloat(prompt("Nota 3 (40%):"));

    let notaFinal = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4);
    alert("Nota final: " + notaFinal);

    if (notaFinal >= 3.0) {
        alert("El estudiante " + estudiante + " ha APROBADO la materia " + materia);
    } else {
        alert("El estudiante " + estudiante + " ha REPROBADO la materia " + materia);
    }
}
