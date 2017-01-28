var pokemons = [];

var makeRequest = function (url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send();
}



var populatelist = function (pokemon){
  console.log(pokemon)
  var select = document.querySelector("#pokemon-list");
  pokemons.forEach(function (pokemon){
    var option = document.createElement("option");
    option.innerText = pokemon.name;
    option.value = pokemon.name;
    select.appendChild(option);
  });
}


var pokemonDisplay = function(){
  pokemon.forEach( function(pokemon){

    if (pokemon.name === selecetedId) {
      var ul = document.querySelector("#pokemon-list");
      ul.innerText = null;
    }
    var nameLi = document.createElement("li");
    nameLi.innerText = pokemon.name;
    ul.appendChild(nameLi);
  });
}



var requestComplete = function (){
  if (this.status != 200) return;
  var jsonString = this.responseText;
  var pokemon = JSON.parse(jsonString);
  populatelist(pokemon);
}

var getNextPokemon = function (){
  if (this.status != 200) return;
  var jsonString = this.responseText;
  var pokemon = JSON.parse(jsonString);
  console.log(pokemon);
  pokemons.push(pokemon);
  if (pokemons.length === 10){
    console.log(pokemons);
    populatelist(pokemon);

  }

}
// var handleButtonClick = function (){
//   var url = "https://api.spotify.com/v1/search?q=christmas&type=album";
//   makeRequest(url, requestComplete);
// }

var app = function(){
  // var url = "http://pokeapi.co/api/v2/pokemon/1";
  var url2 = "http://pokeapi.co/api/v2/pokemon/" + id;

  // var id;
  for (var id = 1; id <= 10; id++){
    var url2 = "http://pokeapi.co/api/v2/pokemon/" + id;
    makeRequest(url2, getNextPokemon);
  }


  

//   var div = document.querySelector("div");
//   div.onclick = handleButtonClick;
// makeRequest(url, requestComplete);
// makeRequest(url2, getNextPokemon);

}

window.onload = app;




// Homework

// Practise what we've done this week using JavaScript in the browser:

// Fetch information from an API. Display/Analyse the information in the browser - using DOM manipulation/Charts/Maps/Canvas etc. Be creative! If you want to focus on Maps / Canvas without getting outside data from an API that's fine, but you should revise the HTTP requests lesson to make sure you're confident with them.

// Pokemon API: http://pokeapi.co/





