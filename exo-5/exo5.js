// you can write js here

console.log('exo-5');

input = 'Hello World';


vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

resultArray = [];

for (i = 0; i < input.length; i ++ ) {
    //console.log(input[i]);
    for (j = 0; j < vowels.length; j ++ ) {
        if (input[i] == vowels[j] ) {

resultArray.push(input[i]);

console.log(resultArray.join().toUpperCase());
        }
    }
}

for (i = 0; i < input.length; i ++ ) {
    console.log(input.indexOf(vowels[i]));
    
}