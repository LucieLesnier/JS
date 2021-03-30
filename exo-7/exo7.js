console.log("exo-7");
console.log(jsonDatas);




    const translate = {
        videoGame: "Jeux Vidéos",
        car: "Voiture",
        house: "Villa",
        game: "Jeu",
        show: "Spectacle",

    }




function addTranslation() {
    for(let i = 0; i < jsonDatas.length; i++ ) {
        //console.log(jsonDatas[i])
jsonDatas[i].translation = translate[jsonDatas[i].type];
    }
    console.log(jsonDatas)
}
addTranslation();

function printProducts() {
    for(i = 0; i < jsonDatas.length; i++) {
   let li = document.createElement('li');
   let text = document.createTextNode("Nom :" + ' ' + jsonDatas[i].name);     
        li.appendChild(text);
        document.getElementById('myUl').appendChild(li);
    }
    
}
printProducts();