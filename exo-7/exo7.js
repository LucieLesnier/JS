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
    for (let i = 0; i < jsonDatas.length; i++) {
        //console.log(jsonDatas[i])
        jsonDatas[i].translation = translate[jsonDatas[i].type];
    }
    console.log(jsonDatas)
}
addTranslation();

function printProducts() {


    var del = document.getElementById('myUl').innerHTML = '';
    var price = document.getElementById('price');
    //Permet de trier
    var outOfStocks = document.getElementById('outOfStocks');
    var cat = document.getElementById('cat').value;
    var nameDisplay = document.getElementById('nameDisplay');
    var display = document.getElementById('display');

    //Condition de tri de prix et de noms

    console.log(cat)
    let compare;
    if (document.getElementById('displayAsc').value === 'ascendant' && document.getElementById("display").value === 'price') {
        compare = compareByPrice;
    }
    else if (document.getElementById('displayAsc').value === 'ascendant' && document.getElementById("display").value === 'nameDisplay') {
        compare = compareByName;

    }
    else if (document.getElementById('displayAsc').value === 'descendant' && document.getElementById("display").value === 'nameDisplay') {
        compare = compareByDescName;


    }
    else if (document.getElementById('displayAsc').value === 'descendant' && document.getElementById("display").value === 'price') {
        compare = compareDescPrice;
    }
    if (compare) {
        jsonDatas = jsonDatas.sort(compare);
    }


    //Création de l'affichage des articles

    for (i = 0; i < jsonDatas.length; i++) {

        if ((cat === "" || jsonDatas[i].type === cat) && (!outOfStocks.checked || jsonDatas[i].quantity != 0)) {
            let li = document.createElement('li');
            let text = document.createTextNode(" -- Nom :" + ' ' + jsonDatas[i].name + ' || ');
            let price = document.createTextNode(" --    Prix :" + ' ' + jsonDatas[i].price + ' ');
            li.appendChild(text);
            li.appendChild(price);
            document.getElementById('myUl').appendChild(li);
        }
        //

    }
}
printProducts();

//fonction permettant de trier par tri et par noms instancier l.40
function displayByPrice() {
    jsonDatas.sort(compareByPrice);
    return jsonDatas;

}
function displayDescByPrice() {
    jsonDatas.sort(compareDescPrice);
    return jsonDatas;
}
function compareByPrice(firstPrice, lastPrice) {
    return firstPrice.price - lastPrice.price;
}

function compareByName(nameA, nameB) {
    return nameA.name.localeCompare(nameB.name);

}

function compareDescPrice(firstPrice, lastPrice) {
    return lastPrice.price - firstPrice.price;
}

function compareByDescName(nameA, nameB) {
    return nameB.name.localeCompare(nameA.name);

}
// Fonction pour ajouter un roduit à la liste
function addItem() {

    let name = document.getElementById('name').value;
    let price = document.getElementById('newPrice').value;
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;
    let quantity = document.getElementById('quantity').value;
    

    jsonDatas.push({
        name ,price, type, description, quantity
    }
    );

    console.log(jsonDatas);

    
    return printProducts();
}


