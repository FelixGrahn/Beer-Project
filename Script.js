
/* LOUIES UPPGIFT:
 contentContainer
 Bild åt vänster
 Titel, högt upp höger om bild
 Länk, nere i högra hörnet */






async function RandomNumber() {

    let random = Math.floor(Math.random() * 10) + 1;
    fetchBeer(random);
}

async function fetchBeer(number){

    removebox();

    fetch("https://api.punkapi.com/v2/beers/" + number)
    .then(response => response.json())
    .then(url => {

/*      console.log(url)
        console.log(url[0].description)
        console.log(url[0].image_url)
        console.log(url[0].name) */
        createCard(url)
    } );
}

async function createCard(url){ // LOUIES UPPGIFT

    let writebox = document.querySelector(".BeerInfoContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    let img = document.createElement("IMG");
    writeboxinfo.innerText = (url[0].name + "\r\n")

    img.src = url[0].image_url;
    img.height = 400;
    img.width = 200;

    writeboxinfo.addEventListener("click", function(){

        removebox();
        writeBeerInfo(url);

        console.log("XXXXXXXXXXXXX")
    })    

    writeboxinfo.appendChild(img);
    writebox.appendChild(writeboxinfo);
}

// inte bilden, titeln, eventet som kallar en funktion
"skapa objektet med kort och namn"


async function removebox() {

    let ExistensChecker = document.getElementById("RemoveChild");
    let ExistensChecker2 = document.getElementById("Parent");

    if (ExistensChecker) {

        console.log("The object has been found and removed")
        ExistensChecker2.innerHTML = "";
    } 
    else {

        console.log("The object has not been found")
    }
}

async function writeBeerInfo(url) {

    let writebox = document.querySelector(".BeerInfoContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    let img = document.createElement("IMG");
    writeboxinfo.innerText = (
        url[0].name + "\r\n" +
        "\r\nAlcohol by volume: " + url[0].alcohol_by_volume + "\r\n" +
        "\r\nVolume: " + url[0].volume.value + "%\r\n" +
        "\r\nIngredients: " + url[0].ingredients + "\r\n" +
        "\r\nHops: " + url[0].hops + "\r\n" +
        "\r\nFood pairing: " + url[0].food_pairing + "\r\n" +
        "\r\nBrewers tips: " + url[0].brewers_tips + "\r\n" +
        "\r\nDescription: " + url[0].description
    )

    img.src = url[0].image_url;
    img.height = 400;
    img.width = 200;

    writeboxinfo.appendChild(img);
    writebox.appendChild(writeboxinfo);
}




 
/* const grabRandomBeer = () => {
    
    fetch("https://api.punkapi.com/v2/beers/random")
      .then(response => response.json())
      .then(beers => {  
        const beer = beers[0];
        const nameElement = document.createElement("h2");
        nameElement.textContent = beer.name;
        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = beer.description;
        const abvElement = document.createElement("p");
        abvElement.textContent = `Alcohol by volume: ${beer.abv}%`;
        const firstBrewed = document.createElement("span");
        firstBrewed.textContent = `First brewed on: ${beer.first_brewed}`;
        const beerElement = document.getElementById("beer");
        beerElement.innerHTML = "";
        beerElement.appendChild(nameElement);
        beerElement.appendChild(descriptionElement);
        beerElement.appendChild(abvElement);
        beerElement.appendChild(firstBrewed);
      })
      .catch(err => {
        console.error(err.message);
      });
  };
  
  // Grab a new beer when clicking the button
  document.getElementById("grabButton").addEventListener("click", grabRandomBeer); */