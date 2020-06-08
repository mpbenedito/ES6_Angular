/*
=============================
var, let e const
=============================
var  é o padrão do JavaScript. Fora de funções tem comportamento global, dentro tem um contexto local. 
Se declarado dentro de um bloco de código {} sofre roisting e se eleva á condição global ou local, o que for mais próximo.

let  é uma melhoria. Fora de funções tem comportamento global, dentro de funções tem escopo local e dentro de blocos de código também é local. Não sofre roisting
uma variavel declarada com let, se for declarado um var em qualquer outro escopo ABAIXO irá criar um erro de execuçãodocument.addEventListener('type', listener);

const assume o escopo de onde estiver e tem a caracterísitica principal de ser apenas leitura
*/

/*
Exemplo de roisting usando var
===================
*/
console.log('===========================')
console.log('Utilizando var')
var serie = 'Friends'
if (true) {
	/* dentro do bloco de código var irá elevar serie2 para o escopo mais próximo */
	var serie2 = 'Game of Thrones'
}
console.log(serie)
console.log(serie2)
console.log('')


console.log('===========================')
console.log('Utilizando let')
var serie = 'Friends'
if (true) {
	/* dentro do bloco de código var irá elevar serie2 para o escopo mais próximo */
	let serie = 'Game of Thrones'
	console.log(serie)
}
console.log(serie)
console.log('')


console.log('===========================')
console.log('Utilizando const')

const numeroPi = 3.14

if (true) {
	/* numeroPi = 3     este comando gera um erro pois numeroPi é uma constante e é somente leitura */
	const numeroPix2 = numeroPi *2
	console.log(numeroPix2)
}
console.log(numeroPi)
/*console.log(numeroPix2)    este comando irá gerar erro pois numeroPix2 só existe dentro do bloco de código anterior */