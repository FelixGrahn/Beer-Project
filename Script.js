async function RandomNumber() {
    fetch("https://api.punkapi.com/v2/beers/random")
        .then(response => response.json())
        .then(url => {
            removebox();
            writeBeerInfo(url)
            createCard(url[0]);

        });
}

var please = + 1;

function AddToList() {
    please++;
    fetchBeer(please);
}
function SubtractToList() {
    please--;
    if (please < 0) {
        please = 1;
    }
    fetchBeer(please);
}

async function fetchBeer(pagecount) {

    let c1 = document.getElementById('area1').value;
    console.log(c1)
    document.getElementById("FooterListCurrentPage").innerHTML = pagecount;
    let currentpage = 0;
    if (pagecount > 1) {
        currentpage = pagecount;
    }

    removebox();
    fetch("https://api.punkapi.com/v2/beers?beer_name=" + c1)
        .then(response => response.json())
        .then(url => {
            const beerloopcountermax = url.length;
            const beerloopcountermin = 0;
            console.log(beerloopcountermax);
            console.log(url[beerloopcountermax])
            console.log("TITTA HÄR 3: " + url)

            for (let index = currentpage; index < currentpage + 9; index++) {
                console.log(url[index])
                createCard(url[index], index)
            }
        });
}


async function createCard(url, loopCount) {
    let writebox = document.querySelector(".BeerCardContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    writeboxinfo.classList.add("cardcreateinfo" + loopCount);
    writeboxinfo.classList.add("cardcreateinfo");
    writeboxinfo.innerText = (url.name + "\r\n")
    writeboxinfo.addEventListener("click", function () {
        localStorage.setItem("currentBeer", JSON.stringify(url));
        window.location.pathname = "/Info.html";
    })
    writebox.appendChild(writeboxinfo);
    createimage(url, "cardcreateinfo", "cardcreateinfo" + loopCount)
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


async function writeBeerInfo() {
    let url = JSON.parse(localStorage.getItem("currentBeer"));

    let hopsString = "";
    let hopsMalt = "";
    let hops = url.ingredients.hops;
    let malt = url.ingredients.malt;

    for (let i = 0; i < hops.length; i++) {
        const currentHops = hops[i];

        console.log(currentHops.name)

        hopsString += "\r\nHops ingredients " + i + " " + currentHops.name;
    }
    for (let i = 0; i < malt.length; i++) {
        const currentmalt = malt[i];

        console.log(currentmalt.name)

        hopsMalt += "\r\nMalt ingredients " + i + " " + currentmalt.name;
    }

    let writebox = document.querySelector(".BeerInfoContainer");
    let writeboxinfo = document.createElement("section");
    writeboxinfo.setAttribute("id", "RemoveChild");
    writeboxinfo.classList.add("writeBeerInfo");

    writeboxinfo.innerText = (
        url.name + "\r\n" +
        "\r\nAlcohol by volume: " + url.abv + "\r\n" +
        "\r\nVolume: " + url.volume.value + "%\r\n" +
        "\r\nIngredients: " + "\r\n" +
        hopsString + "\r\n" + hopsMalt + "\r\n" +
        "\r\nFood pairing: " + url.food_pairing + "\r\n" +
        "\r\nBrewers tips: " + url.brewers_tips + "\r\n" +
        "\r\nDescription: " + url.description
    )
    writebox.appendChild(writeboxinfo);
}

async function createimage(url, className, location) {
    let imagelocation = document.querySelector("." + location);
    let img;

    if (url.image_url != null) {
        img = document.createElement("IMG");
        img.src = url.image_url;
        img.height = 400;
        img.width = 200;
        console.log("If: " + img)

    } else {

        img = document.createElement("section");
        img.height = 400;
        img.width = 200;
        img.innerText = "No picture available";
    }

    console.log("Efter if/else: " + img)
    imagelocation.appendChild(img);
    img.classList.add(className + "img");
}