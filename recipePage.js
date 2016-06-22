var searchItem1 = document.getElementById("searchBox1");
var searchItem2 = document.getElementById("searchBox2");
var searchItem3 = document.getElementById("searchBox3");
var button = document.getElementById('buttoni');

$(document).on('click', '.foodStuff', function (event) {
  var foodId = event.target.id;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/" + foodId + "/information?includeNutrition=true",
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
})

button.addEventListener("click", function(){
  $("#catcher").innerHTML = "";
  event.preventDefault();
  console.log(searchItem1.value);
  console.log(searchItem2.value);
  console.log(searchItem3.value);
var foodFind = {
  "async": true,
  "crossDomain": true,
  "url": "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + searchItem1.value + "%2C+" + searchItem2.value + "%2C+" + searchItem3.value + "&limitLicense=false&number=500&ranking=1",
  "method": "GET",
  "headers": {
    "x-mashape-key": "BoF3698DNWmshq8rQDe66ihjafNxp1KIlCKjsnaQPlKrkeGbjD",
    "cache-control": "no-cache",
    "postman-token": "8bfdc072-2d9a-fae9-fecb-294451dc51a3"
  }
}

$.ajax(foodFind).done(function (response) {
  for (var i = 0; i < response.length; i++) {
    var foodTitles = document.createElement("div");
    foodTitles.className = 'foodStuff';
    foodTitles.id = response[i].id;
    foodTitles.innerHTML = response[i].title;
    $("#catcher").append(foodTitles);
  }
});
})
