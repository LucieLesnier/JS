// you can write js here
console.log('hello from file');
var kelvins=prompt("Quelle est la température en Kelvins aujourd'hui ?");
//var kelvins=294;
var celsius= kelvins - 273; //Conversion de kelvins en celsius
console.log(celsius);

var fahrenheits = celsius * (9/5) + 32; // Nous reprenons la variable celsius et nous calculons sa conversion en fahrenheits
console.log(fahrenheits);

console.log(Math.floor(fahrenheits))

