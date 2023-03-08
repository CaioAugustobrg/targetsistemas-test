// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será
// a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um
// programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci
//  e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

//RESPOSTA MENOS ELEGANTE, ISTO É, ITERATIVA:
function dowdyFibonacci(n) {
  if ( n < 1) return 0;
  if (n <= 2) return 1;
  let fibMinor2 = 0;
  let fibMinor1 = 1;
  let fibN = n;
  for (let i = 2; i <= n; i++) {
    fibN = fibMinor1 + fibMinor2;
    fibMinor2 = fibMinor1;
    fibMinor1 = fibN
  } 
  return fibN;
}

// RESPOSTA MAIS ELEGANTE, ISTO É, RECURSIVA:
function Elegantfibonacci(n) {
  if (n < 1) return 0;
  if (n <= 2) return 1;
  return Elegantfibonacci(n -1) + Elegantfibonacci(n -2);
}



//IMPORTANTE:  
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 