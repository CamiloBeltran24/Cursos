const greeting = function (name) {
    return `Hi, ${name}`;
}

// Arrow function - explicit return

  const newGreeting = (name) => {
    return `Hi, ${name}`; // definir return hace que sea explicito
  }

  // Arrow function - implicit return

  const newGreetingImplicit = name => `Hi, ${name}`;
  const newGreetingImplicitWithTwoParameters = (name, lastName) => `Hi, I'm ${name} ${lastName}`;

  // LEXICAL BINDING
  const fictionalCharacter = {
    name: 'Uncle Ben',
    messageWithTraditionalFunction: function (message) {
      console.log(`${this.name} says: ${message}`)
    },
    // En las arrow functions no existe this y rompen el enlace lexico
    messageWithArrowFunction: (message) => {
      console.log(`${this.name} says: ${message}`)
    }
  }

  fictionalCharacter.messageWithTraditionalFunction('With great power comes great responsibility.')
  fictionalCharacter.messageWithArrowFunction('Beware of Doctor Octopus.')