/*
1. Crear la Pokédex básica

{
  id: 1,
  name: "Bulbasaur",
  level: 5,
  type: "planta"
}

Puedes añadir solo 3–5 Pokémon, o buscar información de los 150 primeros. */

const pokedex = [
{
    id: 1,
    name: "Bulbasaur",
    level: 5,
    type: "planta"
},
{
    id: 4,
    name: "Charmander",
    level: 5,
    type: "fuego"
},
{
    id: 7,
    name: "Squirtle",
    level: 5,
    type: "agua"
},
{
    id: 25,
    name: "Pikachu",
    level: 5,
    type: "eléctrico"
},
{
    id: 39,
    name: "Jigglypuff",
    level: 5,
    type: "normal/hada",
},
{
    id: 52,
    name: "Meowth",
    level: 5,
    type: "normal"
},
{
    id: 66,
    name: "Machop",
    level: 5,
    type: "lucha"
},
{
    id: 92,
    name: "Gastly",
    level: 5,
    type: "fantasma/veneno"
},
{
    id: 133,
    name: "Eevee",
    level: 5,
    type: "normal"
},
{
    id: 147,
    name: "Dratini",
    level: 5,
    type: "dragón"
}]

/*2. Mostrar todos los Pokémon

Usa forEach para recorrer la pokedex e imprimir sus datos.*/

pokedex.forEach(function (pokemon,index) {
    console.log(pokemon)
    console.log('El nombre del pokemon es ' + pokemon.name)
})



/*3. Filtrar Pokémon por tipo

Crea una función que reciba un tipo y muestre solo los Pokémon que tengan ese tipo.*/


function filterType (typePokemon) {
    pokedex.forEach(function(pokemon){
        if (pokemon.type === typePokemon) {
        console.log(pokemon.name + ' es de tipo ' + typePokemon)
        }
        else console.log('No hay ningún pokemon con ese tipo')
    });
}

filterType ('dragón')


/*4. Subir de nivel a todos los Pokémon*/

pokedex.forEach(function(level, index) {
	pokedex.level = pokedex.level + 1;
    return pokedex.level
});

console.log (pokedex.level)


/*5. Buscar Pokémon por nombre*/

function filterName (namePokemon) {
    pokedex.forEach(function(pokemon){
        if (pokemon.name === namePokemon) {
        console.log(pokemon)
        }
    }); 
}

filterName('Dratini')

/*6. Obtener solo los Pokémon con nivel mayor a 10*/

    pokedex.filter(function(pokemon2){
        const pokemonsLevelMoreTen = (pokedex = (pokedex.level>10))
        console.log("Pokémon con nivel mayor a 10:" + pokemonsLevelMoreTen)
        })
    
const levelBiggerThan10 = () => {

    const strongers = pokedex.filter(p => p.level > 10);

    console.log("Pokémon con nivel mayor a 10:", strongers);

    return strongers;

}

7. Crear una función para añadir Pokémon

8. Eliminar un Pokémon por id o nombre

9. Que dos pokemon combatan entre ellos (pueden ganar por nivel, tipo o ambos...)
*/