// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length)
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
joeInfo.bathrooms = 1;
console.log(joeInfo.bathrooms)
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
joeInfo.garage = true;
console.log(joeInfo.garage);

let team = {
    players : [ 
        {
    firstName : 'Pablo',
    lastName:'Sanchez',
    age : 11
    }
],
    games : [ {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }]
};
function addPlayer(firstName, lastName, age) {

    team.players.push(
        {

        firstName : firstName,
        lastName : lastName,
        age : age
    } 
    )
    
}
addPlayer('Cedric', 'Leo', 14);
addPlayer('Diego', 'Louis', 15);
addPlayer('Allan', 'Lucas', 12);
addPlayer('Benjamin', 'Louis', 13);

console.log(team);
function addGames(opponent, teamPoints, opponentPoints) {
    team.games.push(
        {
            opponent : opponent,
            teamPoints : teamPoints, 
            opponentPoints : opponentPoints
        }
    )
}
addGames('Toronto', 70, 45);
addGames('Takoma', 120, 20); 
addGames('Omaha', 95, 35); 
addGames('Nebraska', 25, 140);  
//console.log(team);
//console.log(team.irstName) {
   let totalPoint = 0;
    for (i = 0; i < team.games.length; i++) {
totalPoint += team.games[i].teamPoints;
console.log(team.games[i].teamPoints);
    } 
    console.log(totalPoint);
 

console.log(team.games.length)


function averagePointsOtherStaff() {
    let totalPointOtherStaff = 0;
     for (i = 0; i < team.games.length; i++) {
 totalPointOtherStaff += team.games[i].opponentPoints;
 console.log(team.games[i].opponentPoints);
     } 
     console.log(totalPointOtherStaff);

     console.log(totalPointOtherStaff/team.games.length)
 } 
 
 console.log(team.games.length)
 console.log(averagePointsOtherStaff());

 function olderPlayer() {
     let olderPlayerFromTeam = team.players[0];
     for (i = 0; i < team.players.length; i++) {
         if (olderPlayerFromTeam.age < team.players[i].age) {
          olderPlayerFromTeam = team.players[i];
    }
 }
 console.log(olderPlayerFromTeam.firstName);
 }
olderPlayer();
function sortBy() {
        //team.players.sort(a - b) = team.players.firstName;
        team.players.sort(orderFirstName);
        console.log(team.players);
}
function orderFirstName(a, b) {
    return a.firstName.localeCompare(b.firstName);
}

console.log(team.players);
sortBy() 