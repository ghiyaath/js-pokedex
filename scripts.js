let base_URL = "https://pokeapi.co/api/v2/pokemon/";

// Function to fetch a list of pokemon
function getPokemonList(url) {
  fetch(url)
    // Convert data from JSON
    .then((response) => response.json())
    //Stuff to do with data
    .then((data) => {
      // Console log to make sure I am getting the data
      console.log(data);
      // Get the list of pokemon from the results
      let pokemon = data.results;
      // Get element from HTML to write buttons in
      let container = document.querySelector(".pokemon-list");
      // Clear the container
      container.innerHTML = "";
      // Loop over pokemon list and create an HTML button for each one. Add the button to the container
      pokemon.forEach((btn) => {
        container.innerHTML += `<button onclick="getPokemonInfo('${btn.url}')">${btn.name}</button>`;
      });
      // Add a next pokemon button
      container.innerHTML += `<br><br><button onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

// Get default pokemon list
getPokemonList(base_URL);

// Function to get information about a specific pokemin
function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Make sure data comes throufg
      console.log(data);
      // Write data to pokemon information container
      document.querySelector(".pokemon-info").innerHTML = `
      <div class="result">
        <p>${data.name}</p>
        <img src="${data.sprites.front_default} ">
        <div class="abilities"></div>
      </div>`;

      let abilities = document.querySelector(".abilities");
      data.abilities.forEach(ability => {
        abilities.innerHTML += `
        <p>${ability.ability.name}</p>
        `
      });
    });
}
function getPokemonAbilities(url) {
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.effect_entries);
    data.effect_entries.forEach((effect) => {
      if (effect.language.name === "en") {
        console.log(effect.effect);
        abilityDetail = effect.effect;
      }
    })
  });
}