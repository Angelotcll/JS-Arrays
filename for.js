const numeros = [100, 200, 300, 400, 500, 600];
let media = 0;

for (let i = 0; i < numeros.length; i++) {
    media += numeros[i];  
}

media = media / numeros.length;
console.log(media);