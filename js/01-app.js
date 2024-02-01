// las fechas son objetos se puede corroborar con console.log(typeof valor)
// En javascript hay un objeto llamado Date
const diaHoy = new Date();
let valor;

// En este momento
Date.now();


// Date es Mes, dia y año
let cumple = new Date('1-5-1987');
cumple = new Date('January 5 1987');



// .toString lo cambiaria de object a string

console.log(typeof valor)

// Convertir fecha a string

// cumple.toString();
valor = cumple;

// este nos va traer el mes actual e inicia en cero por ejemplo enero -> mes cero
valor = diaHoy.getMonth();
valor = diaHoy.getDate();
valor = diaHoy.getDay();

// este no va traer el año actual
valor = diaHoy.getFullYear();

// este no va traer el minuto actual
valor = diaHoy.getMinutes();

// este no va traer la hora  actual
valor = diaHoy.getHours();

//este no va traer el minuto actual nos trae los milisegundos
valor = diaHoy.getTime();

// este nos sirve para establecer la fecha 
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2018);

console.log(valor);