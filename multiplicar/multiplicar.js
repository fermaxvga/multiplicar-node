const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {
    console.log('==========='.green);
    console.log(`tabla del ${base}`.red);
    console.log('==========='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`.yellow);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} NO es un número`);
            return;
        }
        let data = '';
        for (i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla_del_${base}_desde_1_hasta_${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla_del_${base}_desde_1_hasta_${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}