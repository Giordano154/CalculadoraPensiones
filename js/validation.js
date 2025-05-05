function validarCorreo(correo) {

    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);

  if (!email.includes("@")) return false;

  
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


console.log(validarCorreo("ejemplo@dominio.com"));
console.log(validarCorreo("invalido@dominio"));
