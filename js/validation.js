function validarCorreo(correo) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

const correo1 = "ejemplo@dominio.com";
const correo2 = "invalido@dominio";

console.log(validarCorreo(correo1));
console.log(validarCorreo(correo2));
