function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);

console.log(validarCorreo("ejemplo@dominio.com"));
console.log(validarCorreo("invalido@dominio"));
