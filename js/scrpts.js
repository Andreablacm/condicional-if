function nameAge(name, age) {
  if (age < 18) {
    console.log('Hola' + name + ',' + 'eres menor de edad.');
  } else {
    console.log('Hola ' + name + ',' + ' eres mayor de edad.');
  }
}

nameAge('Andrea', 24);

function biggerNumber(numberA, numberB) {
  if (numberA < numberB) {
    console.log(numberB);
  } else {
    console.log(numberA);
  }
}

biggerNumber(10, 5);

function number(num) {
  if (num === 0) {
    console.log('0');
  } else if (num < 0) {
    console.log(num);
  } else if (num > 0) {
    console.log(num);
  }
}
number(0);

function result(numberA, numberB, numberC) {
  if ((numberA + numberB + numberC) / 3 <= 5) {
    console.log('Suspenso');
  } else if ((numberB + numberB + numberC) / 3 > 5 && (numberB + numberB + numberC) / 3 < 8) {
    console.log('Aprobado');
  } else if ((numberB + numberB + numberC) / 3 > 8) {
    console.log('Matricula de Honor');
  }
}
result(9, 9, 9);

function biggerNum(numA, numB, numC) {
  if (numA > numB && numA > numC) {
    console.log(numA);
  } else if (numB > numA && numB > numC) {
    console.log(numB);
  } else if (numC > numA && numC > numB) {
    console.log(numC);
  }
}
biggerNum(5, 7, 9);

function division(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('Es divisible por ambos');
  } else if (num % 3 === 0) {
    console.log('Es divisible por 3');
  } else if (num % 5 === 0) {
    console.log('Es divisible por 5');
  } else {
    console.log(num);
  }
}
division(15);

function parImpar(num) {
  if (num % 2 === 0) {
    console.log('Es un número par');
  } else {
    console.log('Es un número impar');
  }
}

parImpar(2);

function añoBi(año) {
  if (año % 4 === 0 || (año % 400 === 0 && año % 100 !== 0)) {
    console.log('Es bisiesto');
  } else {
    console.log('No es bisiesto');
  }
}

añoBi(2015);
