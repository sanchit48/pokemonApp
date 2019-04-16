$(function() {
    var pokeApiUrl = "http://pokeapi.co/api/v2/generation/1";
    var pokemonByName = "http://pokeapi.co/api/v2/pokemon/";

    //  Ajax calling using getJSON function
    $.getJSON(pokeApiUrl).done(function(data) {
        console.log(data);
        $.each(data.pokemon_species, function(index, pokemon) {
            var name = pokemon.name;
            // Adding HTML 
            var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
            var par = $("<p>").html("pokemon species no "+ (index+1) + " and its name is ").append(link);
        
            link.click(function(event) {
            $.getJSON(pokemonByName + pokemon.name).done(function(details) {
                console.log(details);
                var pokemonDiv = $("#pokemon-details");
                pokemonDiv.empty();
                // Same as above method of adding HTML
                pokemonDiv.append("<h2>" + name + "</h2>");
                pokemonDiv.append("<img src='" + details.sprites.front_default+"'>");
                pokemonDiv.append("<img src='" + details.sprites.back_default+"'>");
                pokemonDiv.append("<img src='" + details.sprites.front_shiny+"'>");
                pokemonDiv.append("<img src='" + details.sprites.back_shiny+"'>");
        });
        event.preventDefault();
    });
    
    par.appendTo("#pokemon");
    });
    }).fail(function() {
        console.log("Bad request");
    }).always(function() {
        console.log("Pokemon are great");
    }); 
});





