var listaDeCompra = ["Sal","Azúcar","Pan", "Tomate", "Café", "Té"];

//Agrego aceite de girasol a la lista
listaDeCompra.push("Aceite De Girasol");

//Imprimo por pantalla la lista, tener en cuenta que si copio y pego todo el código
//de esta tarea, este console.log se va a ver sin el aceite de girasol.
console.log(listaDeCompra);

//Elimio Aceite de Girasol de la lista, uso pop, porque ya se que está en último lugar.
listaDeCompra.pop();

//Imprimo la lista de compra, sin el aceite de girasol
console.log(listaDeCompra);

//Lista de de películas favoritas

var favoriteMovies = [
    {
        name: "Pulp Fiction",
        director: "Quentin Tarantino",
        date: new Date("1994/05/21")
    },
    {
        name: "The Sixth Sense",
        director: "Night Shyamalan",
        date: new Date("1999/08/06")
    },
    {
        name: "El Bar",
        director: "Alex de la Iglesia",
        date: new Date("2017/01/10")
    }
]

//Nueva lista con las peliculas posteriores al 1 de Enero del 2010
const post2010 = favoriteMovies.filter(obj => obj.date > new Date("2010/01/01"))

//Mostramos la nueva lista
console.log(post2010);

//Lista de Directores
const listaDirectores = [];
favoriteMovies.map((valor,indice) => {
    listaDirectores.push(valor.director);
})

//Mostramos la nueva lista
console.log(listaDirectores);

//Lista de Películas
const listaPeliculas = [];
favoriteMovies.map((valor,indice) => {
    listaPeliculas.push(valor.name);
})

//Mostramos la nueva lista
console.log(listaPeliculas);


//Lista de Directores y Títulos, usando concat
var directoresAndTitulos = listaDirectores.concat(listaPeliculas);

//Mostramos la nueva lista
console.log(directoresAndTitulos);


//Lista de Directores y Títulos, usando el facor de propagación
var listaPropagacion = [...listaDirectores,...listaPeliculas];

//Mostramos la nueva lista
console.log(listaPropagacion);




