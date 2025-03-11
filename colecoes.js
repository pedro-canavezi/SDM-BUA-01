let numeros = [10, 20, 30, 40, 50]
//console.log(numeros[2])

let frutas = ["Maçã", "Banana", "Laranja"]

frutas.forEach((fruta, index) =>{ //Lista as frutas com numeração
    console.log(`${index}: ${fruta}`);
});

//Adicionando elementos

frutas.push("Uva") //Adiciona o elemento no array
frutas.unshift("Pera") //Adiciona no inicio do array

console.log(frutas)

//Removendo elementos

frutas.pop(); //Remove o ultimo elemento
frutas.shift(); //Remove o primeiro

let mapa = new Map()
mapa.set("nome", "Pedro")
mapa.set("idade", "20")

//Acesar os valores

console.log(mapa.get("nome"))
console.log(mapa.get("idade"))