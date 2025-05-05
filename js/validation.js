function validarCorreo(correo) {
  if (!email.includes("@")) return false;

  const partes = email.split("@");
  if (partes.length !== 2) return false;

  const usuario = partes[0];
  const dominio = partes[1];

  if (usuario.length === 0 || dominio.length === 0) return false;
  if (!dominio.includes(".")) return false;
  if (email.includes(" ")) return false;
  if (
    email.startsWith(".") ||
    email.endsWith(".") ||
    email.startsWith("@") ||
    email.endsWith("@")
  )
    return false;

  return true;
}

const correo1 = "ejemplo@dominio.com";
const correo2 = "invalido@dominio";

console.log(validarCorreo(correo1));
console.log(validarCorreo(correo2));
