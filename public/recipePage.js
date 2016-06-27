var searchItem1 = document.getElementById("searchBox1");
var searchItem2 = document.getElementById("searchBox2");
var searchItem3 = document.getElementById("searchBox3");
var button = document.getElementById('buttoni');

$(document).on('click', '.foodStuff', function (event) {
  $("#recipeBox").empty();
  $("#prettyPic").empty();
  $("#nutInfo").empty();
  $("#recipeButt").empty();
  $("#listamania").empty();
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
    var title = document.createElement("h1");
    title.innerHTML = response.title
    $("#recipeBox").append(title);
    console.log(response.image);
    console.log(response.sourceUrl);
    $("#prettyPic").append("<img src ='" + response.image + "'>");
    var list = document.createElement("ul");
    list.id = "listy";
    $("#listamania").append("<ul>" + "<h3>ingredients<h3>");
    console.log(response);
    for(var i = 0; i < response.extendedIngredients.length; i++){
      $("#listamania").append("<li>" + response.extendedIngredients[i].originalString + "</li>")
    }
    var button = document.createElement("button");
    button.id = "recipeButt2";
    $("#recipeButt").append(button);
    $("#recipeButt2").append("<a href='" + response.sourceUrl + "' target='_blank'>Click Here For the Full Recipe </a>");
    var nutrientTable = document.createElement("table");
    nutrientTable.id = "nutrientTable";
    $("#nutInfo").append(nutrientTable);
    for (var i = 0; i < response.nutrition.nutrients.length; i++) {
      $("#nutrientTable").append("<tr><th>" + response.nutrition.nutrients[i].title + "</th><td>" + response.nutrition.nutrients[i].amount + "</td><td>" + response.nutrition.nutrients[i].percentOfDailyNeeds + "%</td></tr>");
    }
  });
})

button.addEventListener("click", function(){
  $("#catcher").empty();
  event.preventDefault();

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
