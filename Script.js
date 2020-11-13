
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




// Ingredienser:
//      let-funktion = url.ingrediens
//      extrahera objektet


// Texterna som försvann igår: 
//      Felix löser


// Sökfunktionen:
//      länka form till fetchBeer
//      beer_ + beer (kanske med ett slash på slutet)


/* const Beer2 ="Sunk_Punk"; 
fetchBeer(Beer2); */

async function fetchBeer(){ /* to be continued */
/* let searchedBeer = document.querySelector(".gsearch"); */
    var c1 = document.getElementById('area1').value;
    console.log(c1) 
    

    removebox();

    fetch("https://api.punkapi.com/v2/beers?beer_name=" + c1 )
    .then(response => response.json())
    .then(url => {
        const beerloopcounter = url.length;
        console.log(beerloopcounter);
        console.log(url[beerloopcounter - 1])
        for (let index = 0; index < 9; index++) {
           console.log(url[index])
           createCard(url[index])
            
        }

        console.log(url)
        
/*         console.log(url[0].description)
        console.log(url[0].image_url)
        console.log(url[0].name)  */
       /* createCard(url);*/
        
    } );
}

/*ny async funktion*/
async function fetchSearchedBeer(){ 
    let input = document.querySelector('gsearch');
    console.log('input.value');
    
    
   
    }



async function createCard(url){

    let writebox = document.querySelector(".BeerCardContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    writeboxinfo.classList.add("cardcreateinfo");
    writeboxinfo.innerText = (url/* [0] */.name + "\r\n") /* Big red flag need to fix does work with search but not with random beacuse of the [0] */

    writeboxinfo.addEventListener("click", function(){


        writeBeerInfo(url);
        window.location.href("Info.html");

        console.log("XXXXXXXXXXXXX")
    })    

    
    writebox.appendChild(writeboxinfo);
    createimage(url, "cardcreateinfo")
}



async function removebox() {

    let ExistensChecker = document.getElementById("RemoveChild");
    let ExistensChecker2 = document.getElementById("Parent1");

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
    /* Description
Image
Alcohol by volume
Volume
Ingredients
Hops
Food pairing
Brewers tips */

    writebox.appendChild(writeboxinfo);
    createimage(url, writeBeerInfo)
}

async function createimage(url, location) {
    let imagelocation = document.querySelector("." + location);
    let img;    

    if (url[0].image_url != null){

        img = document.createElement("IMG");
        img.src = url/* [0] */.image_url;/* Big red flag need to fix does work with search but not with random beacuse of the [0] */

        img.height = 400;
        img.width = 200;

        console.log("If: " + img)

    } else{

        img = document.createElement("section");
        img.height = 400;
        img.width = 200;

        img.innerText = "No picture available";
    }

    console.log("Efter if/else: " + img)

    imagelocation.appendChild(img); 
    img.classList.add(location + "img");
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