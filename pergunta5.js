// 5) Escreva um programa que inverta os caracteres de um string. 
// IMPORTANTE: 
// 	a) Essa string pode ser informada através de qualquer entrada
//de sua preferência ou pode ser previamente definida no código; 
// 	b) Evite usar funções prontas, como, por exemplo, reverse; 

let word = "boi" // você pode fazer o teste trocando a string
let len = word.length

let inverse = word.charAt(len - 1).toUpperCase()

for (let i = len - 2; i >= 0; i--) {
  inverse += word.charAt(i).toLowerCase()
  
}
console.log(`Word: ${word}\nInverse: ${inverse}`)
