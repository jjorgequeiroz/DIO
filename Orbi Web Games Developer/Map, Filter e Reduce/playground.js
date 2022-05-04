//Utilizando Map com this 
/*const maca = {
    value: 2,
}

const laranja = {
    value: 3,
}

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maçã', mapComThis(nums, maca));
console.log('this -> laranja', mapComThis(nums, laranja));
*/




//Map sem this
/*function mapSemThis (arr) {
    return arr.map(function (item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));
*/


//Utilizando o método Filter para encontrar os números pares dentro de um array
/*function filtraPares (arr){
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [2, 34, 13, 55, 37, 80];

console.log(filtraPares(meuArray));
*/

//Utilizando o método Filter para encontrar os número ímpares dentro de um array
/*function filtraImpares (arr) {
    return arr.filter (callback);
}

function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [13, 45, 80, 26, 12, 31, 97];

console.log(filtraImpares(meuArray));
*/

//Acumulador usando o reduce
/*function somaNumeros (arr) {
    return arr.reduce(function(prev, current) {
        console.log({prev});
        console.log ({current});
        return prev + current;

    });
}

const meuArray = [1, 2];

console.log(somaNumeros(meuArray));
*/

//Lista de preços e saldo final
const lista = [
{
    nome: 'sabão em pó',
    preco: 30,
},
{
    nome: 'cereal',
    preco: 12,
},
{
    nome: 'toalha',
    preco: 30,
}
    
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce (function(prev, current, index) {
        console.log('rodada ', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
} 

console.log(calculaSaldo(saldoDisponivel, lista));




