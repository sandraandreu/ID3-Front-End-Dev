/*
1. Crear la Pokédex básica

*/

import pokedex from "./pokedex.json" assert { type: "json" }
console.log(pokedex)

/*
Puedes añadir solo 3–5 Pokémon, o buscar información de los 150 primeros.

2. Mostrar todos los Pokémon

Usa forEach para recorrer la pokedex e imprimir sus datos.
*/

console.log("Mostrando todos los pokemons:")
pokedex.forEach((pokemon) => {
  console.log(
    `El pokemon ${pokemon.name} es de tipo ${pokemon.type}, nivel ${pokemon.level} y el número ${pokemon.id} en la pokedex.`
  )
})

/*
3. Filtrar Pokémon por tipo

Crea una función que reciba un tipo y muestre solo los Pokémon que tengan ese tipo.
*/

const removeAccentsAndNormalize = (word) => {
  return word
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, ``)
    .toLowerCase()
}

function filterType(typePokemon) {
  pokedex.forEach(function (pokemon) {
    pokemon.type.forEach(function (pokemonType) {
      if (
        removeAccentsAndNormalize(pokemonType).includes(
          removeAccentsAndNormalize(typePokemon)
        )
      ) {
        console.log(`${pokemon.name} es de tipo ${pokemonType}`)
      }
    })
  })
}

// Mostrar pokemons de tipo dragón
console.log("Buscando pokemons de tipo dragón:")
filterType("dragón")

/*
4. Subir de nivel a todos los Pokémon
*/

function upLevelAll(pokedex) {
  pokedex.forEach(function (pokemon) {
    pokemon.level += 1
  })
  return pokedex
}

console.log("Tus pokemons han subido de nivel!")
console.log(upLevelAll(pokedex))

/** 5. Buscar Pokémon por nombre */

const getPokemonByName = (pokemonName) => {
  const foundPokemon = pokedex.find((pokemon) =>
    removeAccentsAndNormalize(pokemon.name).includes(
      removeAccentsAndNormalize(pokemonName)
    )
  )
  if (!foundPokemon) {
    console.log(
      `No se ha encontrado ningún pokemon con el nombre ${pokemonName}`
    )
    return
  }

  console.log(
    `El pokemon ${foundPokemon.name} es de tipo ${foundPokemon.type}, nivel ${foundPokemon.level} y el número ${foundPokemon.id} en la pokedex.`
  )
}

console.log("Buscando pokemon por nombre:")
getPokemonByName("Dratini")

/*
6. Obtener solo los Pokémon con nivel mayor a 10
*/

console.log("Buscando pokemons por nivel mayor a 10:")
pokedex.forEach(function (pokemon) {
  if (pokemon.level > 10) {
    console.log(
      `El pokemon ${pokemon.name} tiene nivel ${pokemon.level}, por lo que es mayor a 10.`
    )
  }
})

/*
7. Crear una función para añadir Pokémon
*/

function addPokemon({ id, name, level, type }) {
  const newPokemon = {
    id,
    name,
    level,
    type
  }

  pokedex.push(newPokemon)
  console.log(`Se ha añadido el pokemon ${name} a la pokedex.`)
}

console.log("Añadiendo nuevo pokemon a la pokedex:")
addPokemon({ id: 242, name: "Darkrai", level: 5, type: ["siniestro"] })
console.log(pokedex[pokedex.length - 1])

/*
8. Eliminar un Pokémon por id o nombre
*/

function removePokemon(pokemonNameOrId) {
  const originalLength = pokedex.length
  const newPokedex = pokedex.filter((pokemon) => {
    const matchesId = pokemon.id === pokemonNameOrId
    const matchesName = removeAccentsAndNormalize(pokemon.name).includes(
      removeAccentsAndNormalize(pokemonNameOrId)
    )
    return !(matchesId || matchesName) // Mantener el pokemon si NO coincide con id o nombre
  })

  if (newPokedex.length < originalLength) {
    console.log(`Se ha eliminado el pokemon ${pokemonNameOrId} de la pokedex.`)
  } else {
    console.log(`No se encontró el pokemon ${pokemonNameOrId} en la pokedex.`)
  }
}

console.log("Eliminando pokemon de la pokedex:")
removePokemon("Darkrai")
removePokemon("Patata")

/*
9. Que dos pokemon combatan entre ellos (pueden ganar por nivel, tipo o ambos...)
*/

// Objeto con las ventajas de cada tipo (super efectivo contra)
const typeAdvantages = {
  fuego: ["planta", "hielo", "bicho", "acero"],
  agua: ["fuego", "tierra", "roca"],
  planta: ["agua", "tierra", "roca"],
  eléctrico: ["agua", "volador"],
  hielo: ["planta", "tierra", "volador", "dragón"],
  lucha: ["normal", "hielo", "roca", "siniestro", "acero"],
  veneno: ["planta", "hada"],
  tierra: ["fuego", "eléctrico", "veneno", "roca", "acero"],
  volador: ["bicho", "lucha", "planta"],
  psíquico: ["lucha", "veneno"],
  bicho: ["planta", "psíquico", "siniestro"],
  roca: ["fuego", "hielo", "volador", "bicho"],
  fantasma: ["psíquico", "fantasma"],
  dragón: ["dragón"],
  siniestro: ["psíquico", "fantasma"],
  acero: ["hielo", "roca", "hada"],
  hada: ["lucha", "dragón", "siniestro"],
  normal: []
}

function pokemonBattle(pokemon1Name, pokemon2Name) {
  const pokemon1 = pokedex.find((p) =>
    removeAccentsAndNormalize(p.name).includes(
      removeAccentsAndNormalize(pokemon1Name)
    )
  )
  const pokemon2 = pokedex.find((p) =>
    removeAccentsAndNormalize(p.name).includes(
      removeAccentsAndNormalize(pokemon2Name)
    )
  )

  if (!pokemon1 || !pokemon2) {
    console.log("No se pudieron encontrar ambos pokémon para el combate.")
    return
  }

  console.log(`\n🥊 ¡COMBATE POKÉMON!`)
  console.log(
    `${pokemon1.name} (Nivel ${pokemon1.level}, Tipo: ${pokemon1.type.join(
      "/"
    )}) VS ${pokemon2.name} (Nivel ${
      pokemon2.level
    }, Tipo: ${pokemon2.type.join("/")})`
  )

  const levelDifference = Math.abs(pokemon1.level - pokemon2.level)

  if (levelDifference > 10) {
    // Si la diferencia de nivel es mayor a 10, gana el de mayor nivel
    if (pokemon1.level > pokemon2.level) {
      console.log(`¡${pokemon1.name} GANA por ventaja de nivel!`)
    } else {
      console.log(`¡${pokemon2.name} GANA por ventaja de nivel!`)
    }
    return;
  }

  let pokemon1HasAdvantage = false
  let pokemon2HasAdvantage = false

  // Verificar ventajas de tipos
  pokemon1.type.forEach((type1) => {
    pokemon2.type.forEach((type2) => {
      if (typeAdvantages[type1] && typeAdvantages[type1].includes(type2)) {
        pokemon1HasAdvantage = true
        console.log(
          `${pokemon1.name} (${type1}) es super efectivo contra ${pokemon2.name} (${type2})`
        )
      }
      if (typeAdvantages[type2] && typeAdvantages[type2].includes(type1)) {
        pokemon2HasAdvantage = true
        console.log(
          `${pokemon2.name} (${type2}) es super efectivo contra ${pokemon1.name} (${type1})`
        )
      }
    })
  })

  if (pokemon1HasAdvantage && !pokemon2HasAdvantage) {
    console.log(`¡${pokemon1.name} GANA por ventaja de tipo!`)
  } else if (pokemon2HasAdvantage && !pokemon1HasAdvantage) {
    console.log(`¡${pokemon2.name} GANA por ventaja de tipo!`)
  } else if (pokemon1HasAdvantage && pokemon2HasAdvantage) {
    console.log(`¡EMPATE! Ambos tienen ventajas de tipo.`)
  } else {
    console.log(`¡EMPATE! Ninguno tiene ventaja de tipo.`)
  }
}

console.log('\n=== COMBATE POKÉMON ===')
pokemonBattle('Charizard', 'Blastoise')
pokemonBattle('Pikachu', 'Charizard')
pokemonBattle('dratini', 'dratini')
pokemonBattle('dratini', 'Dragonair')
pokemonBattle('Kabuto', 'aerodactyl')
