let map = new Map()

map.set("nome", "Pedro")
map.set("idade", 20)

console.log(map.get("nome"))
console.log(map.has("idade"))

console.log(map.size) //Mostra o tamanho do map

map.forEach((valor, chave)=>{ //Lista o map
    console.log(`${chave}: ${valor}`)
})

map.delete("idade") //Remove um elemento do map

map.forEach((valor, chave)=>{ 
    console.log(`${chave}: ${valor}`)
})

map.clear() //Limpa o map
console.log(map.size)