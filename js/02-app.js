// MomentJS

const diaHoy = new Date();

//esto nos trae la fecha en español
moment.locale('es');  

// con moment() puedes pasarle un formato de fecha
console.log(  moment().format('MMMM Do YYYY, h:mm:ss a', diaHoy) );




console.log ( moment().add(3, 'days').calendar() );



console.log( moment().format('LLLL', diaHoy) )