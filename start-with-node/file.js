const fs = require('fs');

// Escreve/Sobrescreve o arquivo inteiro
fs.writeFile('text.txt', 'Olá Mundo', err => {
    console.log(err);
})

// Coloca um conteúdo adicional no arquivo
fs.appendFile('text.txt', 'Olá Mundo', err => {
    console.log(err);
})

// Renomeia o arquivo
fs.rename('text.txt', 'test2.txt', err => console.log(err));

// Apaga o arquivo
fs.unlink('test2.txt', err => console.log(err));

// Mostra o diretório atual
console.log(__dirname);