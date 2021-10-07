function pokemonTypes(pokemons) {
    let result = [];
    for (pokemon of pokemons) {
        result.push(`${pokemon.name} is a ${pokemon.type.toLowerCase()} type Pokémon.`);
    }
    return result;
}

console.log(`pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }])`,pokemonTypes([{ name: 'Bulbasaur', type: 'Grass' }, { name: 'Charmander', type: 'Fire' }, { name: 'Squirtle', type: 'Water' }]),`should return ["Bulbasaur is a grass type Pokémon.", "Charmander is a fire type Pokémon.", "Squirtle is a water type Pokémon."]`)