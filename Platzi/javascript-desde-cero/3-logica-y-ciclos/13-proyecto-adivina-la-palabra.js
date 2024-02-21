let palabraOculta = 'javascript';
let intentos = 3;

function verificarSuposicion( suposicion, palabraOculta ) {
  if( suposicion.toLowerCase() === palabraOculta ) {
    return true;
  }

  return false;
}

function jugarAdivinaLaPalabra() {
  alert('BIENVENIDO A JUGAR LA PALABRA OCULTA');
  alert('Tienes 3 intentos para adivinar la palabra');
  alert('-pista- la palabra oculta es un lenguaje de programacion');

  while ( intentos > 0 ) {
    let suposicionUsuario = prompt('Ingresa la palabra');
  
    if( verificarSuposicion(suposicionUsuario, palabraOculta) ) {
      alert("¡GANASTE!");
      break;
    } else {
      intentos--;
      if( intentos > 0 ) {
        alert(`Incorrecto, Te quedan ${intentos}`)
      } else {
        alert(`Ya no tienes mas intentos, la palabra oculta es ${palabraOculta}`);
      }
    }
  }
}

jugarAdivinaLaPalabra();
