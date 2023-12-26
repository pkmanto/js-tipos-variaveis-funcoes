const texto1 = "Olá, mundo!";
const texto2 = 'Olá, mundo!';
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

const citacao = 'O Leo disse: "Oi!"';
console.log(citacao);

// concatenação (+)

const perguntaNome = "Meu nome é ";
const meuNome = "Patrick";

console.log(perguntaNome + meuNome);

// template string OU template literal

`${citacao}`

// Teste de Conversão de Código para Letra/Símbolo
// O início '\u' sinaliza que são códigos Unicode, em formato formal: Caracteres de escape.

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Comparação de Strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase(); // Forçar para minúsculo

console.log(cidade === inputMinusculo); // true

// Contagem de caracteres em uma string

const senhaMinha = "minhaSenha123"
console.log(senhaMinha.length) // 13 caracteres
