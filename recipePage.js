var searchItem = document.getElementById("searchBox");
var button = document.getElementById('buttoni');

button.addEventListener("click", function(){
  event.preventDefault();
  console.log(searchItem.value);
var foodFind = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=butter%2C+flour%2C+" + searchItem.value + "&limitLicense=false&number=5&ranking=1",
  "method": "GET",
  "headers": {
    "x-mashape-key": "BoF3698DNWmshq8rQDe66ihjafNxp1KIlCKjsnaQPlKrkeGbjD",
    "cache-control": "no-cache",
    "postman-token": "8bfdc072-2d9a-fae9-fecb-294451dc51a3"
  }
}

$.ajax(foodFind).done(function (response) {
  console.log(response);
});
})

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/534573/information",
  "method": "GET",
  "headers": {
    "x-mashape-key": "BoF3698DNWmshq8rQDe66ihjafNxp1KIlCKjsnaQPlKrkeGbjD",
    "cache-control": "no-cache",
    "postman-token": "8bfdc072-2d9a-fae9-fecb-294451dc51a3"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
