window.onload = function() {
    // Solicitar el año de nacimiento
    let nacimiento = prompt("Por favor, ingrese su año de nacimiento:");
    
    // Obtener el año actual
    let actual = new Date().getFullYear();
    
    // Calcular la edad
    let edad = actual - nacimiento;
    
    // Verificar si es mayor de 18 años
    if (edad >= 18) {
        // Solicitar el nombre
        let name = prompt("Por favor, ingrese su nombre:");
        // Mostrar el mensaje de bienvenida
        alert("Bienvenido " + name);
    } else {
        // Mostrar mensaje de ingreso bajo responsabilidad
        alert("Estás ingresando bajo tu responsabilidad.");
    }
};
