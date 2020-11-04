console.log("test")

RandomNumber();

async function RandomNumber() {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    
    fetchBeer(random);
}

async function fetchBeer(number){

    fetch("https://api.punkapi.com/v2/beers/" + number)
    .then(response => response.json())
    .then(data => console.log(data));
}

