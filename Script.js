
/* LOUIES UPPGIFT:
 contentContainer
 Bild åt vänster
 Titel, högt upp höger om bild
 Länk, nere i högra hörnet */



console.log("test")

/* RandomNumber(); */

async function RandomNumber() {
    let random = Math.floor(Math.random() * 10) + 1;
    console.log(random);
    
    fetchBeer(random);
}

async function fetchBeer(number){

    let ExistensChecker = document.getElementById("RemoveChild");
    let ExistensChecker2 = document.getElementById("Parent");
    if (ExistensChecker) {
        console.log("The object has been found and removed")
        ExistensChecker2.innerHTML = "";
    } 
    else {
        console.log("The object has not been found")
    }

    fetch("https://api.punkapi.com/v2/beers/" + number)
    .then(response => response.json())
    .then(url => {
        /* console.log(url)
        console.log(url[0].description)
        console.log(url[0].image_url)
        console.log(url[0].name) */
        writeBeerInfo(url)
        
    } );
}


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
    let img = document.createElement("IMG");

    writeboxinfo.innerText = (
        url[0].name +
        url[0].description
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