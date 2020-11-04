
function fetchBeer(number){

    fetch("https://api.punkapi.com/v2/beers/" + number)
    .then(response => response.json())
    .then(data => console.log(data));

}

fetchBeer(1);
fetchBeer(2);
fetchBeer(3);

