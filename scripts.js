/// API
function getRandomCocktail(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        displayRandomCocktail(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

getRandomCocktail();

function displayRandomCocktail(cocktail){
    let drinkSelection = document.getElementById("drink-section");

    let drinkName = document.getElementById('drink-name');
    drinkName.innerHTML = cocktail.drinks[0].strDrink;
    drinkSelection.appendChild(drinkName);

    let img = document.getElementById('drink-img');
    img.src = cocktail.drinks[0].strDrinkThumb;
    drinkSelection.appendChild(img);

    let card= document.getElementById('card');
    card.innerHTML = cocktail.drinks[0].strInstructions;
    drinkSelection.appendChild(card);
}


/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
