const carrito = []
const fruta = prompt('🍒 Feria Market 🍉 ¿qué fruta desea comprar?')

carrito.push(fruta)

while (confirm('¿Desea agregar otro elemento al 🛒?')) {
    const fruta = prompt('¿qué fruta desea comprar?')
    carrito.push(fruta)
}

console.log('Ustede compró: ')
carrito.forEach((fruta, index) => (
    console.log(`${index + 1}: ${fruta}`)
))