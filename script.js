let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
let numeros = [1,3,5,7,0,9];
let hoje = '13/07/2024';
console.log(produtos);
console.log(produtos.length);
console.log(produtos.indexOf("Mouse"));

function deletarMouse() {
    produtos.splice(2,1);
    console.log(produtos);
}


function encontrarItem(itemProcurado) {
    if (produtos.includes(itemProcurado)) {
        console.log(`Item encontrado: ${itemProcurado}`);
    } else {
        console.log("Item não encontrado");
    }
}

encontrarItem("Computador");

function deletarSegundo(){
    produtos.splice(1,1);
    console.log(produtos);
}

numeros.sort((a, b) => a - b);
console.log(numeros);

function tirar1Item(){
    let item = numeros.shift();
    console.log(item);
}

numeros.sort((a, b) => a - b);
numeros.reverse();
console.log(numeros);


