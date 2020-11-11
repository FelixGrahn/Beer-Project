

async function RandomNumber() {
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(url => {
        removebox();
        console.log(url)
        /* console.log(log[0].ingredients[0].hops[0]) */
        /* writeBeerInfo(url) */
        createCard(url);
        
    } );
}

async function fetchBeer(number){ /* to be continued */

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

async function createCard(url){

    let writebox = document.querySelector(".BeerInfoContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    writeboxinfo.classList.add("cardcreateinfo");
    writeboxinfo.innerText = (url[0].name + "\r\n");

    writeboxinfo.addEventListener("click", function(){

        writeBeerInfo(url);
    })    

  
    writebox.appendChild(writeboxinfo);
    createimage(url, "cardcreateinfo")
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
    removebox();

    let writebox = document.querySelector(".BeerInfoContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    writeboxinfo.classList.add("writeBeerInfo");
    
    /* ingredients(url) */
    writeboxinfo.innerText = (
        url[0].name + "\r\n" +
        "\r\nAlcohol by volume: " + url[0].alcohol_by_volume + "\r\n" +
        "\r\nVolume: " + url[0].volume.value + "%\r\n" +
        "\r\nIngredients: " /* + ingredients(url) */ + "\r\n" +
        "\r\nHops: " + url[0].hops + "\r\n" +
        "\r\nFood pairing: " + url[0].food_pairing + "\r\n" +
        "\r\nBrewers tips: " + url[0].brewers_tips + "\r\n" +
        "\r\nDescription: " + url[0].description
    )

    writebox.appendChild(writeboxinfo);
    createimage(url, writeBeerInfo)
}

async function createimage(url, location) {

    let imagelocation = document.querySelector("." + location);
    let img = document.createElement("IMG");
    img.classList.add(location + "img");
    imagelocation.appendChild(img);
    img.height = 400;
    img.width = 200;

    if (url[0].image_url == null){

        imagelocation.innerText = "Ölen ville tyvärr inte vara med på bild. Tack för visad förståelse.";

    } else {

        img.src = url[0].image_url;
    }
}

async function ingredients(url) {
    for (let Index = 0; Index < 1/* url[0].ingredients.length */; Index++) {
        if (/* Index < 1 */ url[0].ingredients[Index] == url[0].ingredients[Index].malt) {
            for (let index = 0; index < url[0].ingredients[Index].hops[index].length; index++) {
                console.log("hops item " + index)
            }
            /* console.log(index) */
        }
        if (/* Index > 0 */ url[0].ingredients[Index].malt == true) {
            for (let index = 0; index < url[0].ingredients[Index].malt[index].length; index++) {
                console.log("malt item " + index)
            }
            console.log(index)
        }
        else {
            console.log("something has gone wrong in the ingredients loop")
        }
        
    }
    console.log("what?")
    
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