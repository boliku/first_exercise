let firstName = "Matías";
let secondName = "Exequiel";
let lastName = "Cartisano";
let estudiante = firstName.concat(" ", secondName, " ", lastName);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numberOfLetters = estudiante.length;
console.log(numberOfLetters);

let firstLetterFirstName = firstName.charAt(0);
console.log(firstLetterFirstName);

let endLetter = lastName.length - 1;
let endLetterLastName = lastName.charAt(endLetter);
console.log(endLetterLastName);

let estudianteSinEspacios = estudiante.replace(/\s+/g, '');
console.log(estudianteSinEspacios);

let fistNameInEstudiante = estudiante.includes(firstName);
console.log(fistNameInEstudiante);