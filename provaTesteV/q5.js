var nota1 = [7, 7, 5.5, 6, 6, 7, 9, 6.8, 6.5, 6]
var nota2 = [7.5, 8, 6, 6, 6.5, 6, 8, 7.2, 7.5, 8]

const valorInicial = 0;
const media = nota1.reduce(
    (accumulator, currentValue) => accumulator + currentValue, valorInicial
);

console.log(media);

const valorInicial2 = 0;
const media2 = nota2.reduce(
    (accumulator, currentValue) => accumulator + currentValue, valorInicial2
);

console.log(media2);

var mediaGeral = (media1 + media2) /2