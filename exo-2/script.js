// you can write js here
console.log('exo-2');

var dateWeek = 'Pas encore le weekend :(';
var dateWeekend = 'On est en weekend !';


const myDate = new Date();
var dateActual = myDate.getDay();
var hourActual = myDate.getHours();
var isTesting = false;

if (isTesting) {
    dateActual = parseInt(prompt('quelle jour sommes nous ?'));
    hourActual = parseInt(prompt('quelle heure est il ?'));
}

console.log(dateActual);
if ((dateActual ===0) || (dateActual ===6) || (dateActual === 5 && hourActual>=17) || (dateActual === 1 && hourActual < 9)) {

    console.log(dateWeekend);

}
else {
    console.log(dateWeek);
}
console.log(hourActual);


