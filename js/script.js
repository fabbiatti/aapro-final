// Preguntar al usuario su año de nacimiento
let nacimiento = prompt("Por favor, ingresa tu año de nacimiento:");
let fecha = parseInt(nacimiento);

// Verificar si el año de nacimiento es un número válido
if (isNaN(fecha)) {
    alert("Por favor, ingresa un año de nacimiento válido.");
} else {
    // Calcular la edad del usuario
    let year = 2024;
    let edad = year - fecha;

    // Verificar si el usuario es mayor de 18 años
    if (edad >= 18) {
        alert("Bienvenido al sitio.");
    } else {
        alert("Entra bajo tu responsabilidad.");
    }
}

