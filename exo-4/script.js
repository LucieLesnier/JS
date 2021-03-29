// you can write js here

console.log('exo-4');

var secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first", "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];


var last = secretMessage.pop();


var add = secretMessage.push('to', 'program');
var change = secretMessage.indexOf('easily'); 
var removeIndex = secretMessage.splice(change, 1);
var addIndex = secretMessage.splice(6, 1, 'right');
var deleteFirst = secretMessage.shift();
var addFirst = secretMessage.unshift ('Programming');
var removeMany = secretMessage.splice(5, 4, 'know');


console.log(secretMessage.join());