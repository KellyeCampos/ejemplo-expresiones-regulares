// Objeto con las Expresiones Regulares
const expresiones = {
    correo: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    telefono: /^[273]\d{7}$/, // Simula formatos de números comunes en El Salvador (8 dígitos empezando en 2, 7 o 3)
    carnet: /^[A-Z]{2}\d{5}$/ // Formato típico de ejemplo: Dos letras seguidas de 5 números (ej: AB21001)
};

// Función para cambiar el texto de ayuda (placeholder) según la opción seleccionada
function actualizarPlaceholder() {
    const tipo = document.getElementById('tipoValidacion').value;
    const input = document.getElementById('inputDato');
    const resultadoDiv = document.getElementById('resultado');
    
    // Limpiar input y resultado al cambiar de opción
    input.value = '';
    resultadoDiv.className = 'hidden';

    if (tipo === 'correo') {
        input.placeholder = 'ejemplo@correo.com';
    } else if (tipo === 'telefono') {
        input.placeholder = 'Ej: 71234567';
    } else if (tipo === 'carnet') {
        input.placeholder = 'Ej: AB21001';
    }
}

// Función principal que valida usando la Regex correspondiente
function ejecutarValidacion() {
    const tipo = document.getElementById('tipoValidacion').value;
    const valor = document.getElementById('inputDato').value.trim();
    const resultadoDiv = document.getElementById('resultado');
    const mensajeSpan = document.getElementById('mensajeResultado');

    // Seleccionar la regex adecuada
    const regexSeleccionada = expresiones[tipo];

    // Validar si está vacío
    if (valor === '') {
        resultadoDiv.className = 'invalido';
        mensajeSpan.textContent = 'Por favor, introduce un valor para evaluar.';
        return;
    }

    // Comprobar con el método .test() de las expresiones regulares
    if (regexSeleccionada.test(valor)) {
        resultadoDiv.className = 'valido';
        mensajeSpan.textContent = `¡Éxito! El valor cumple perfectamente con la expresión regular de ${tipo}.`;
    } else {
        resultadoDiv.className = 'invalido';
        mensajeSpan.textContent = `Error: El formato introducido no coincide con el patrón regex de ${tipo}.`;
    }
}