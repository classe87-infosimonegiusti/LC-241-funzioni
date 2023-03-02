
for (let i =0; i < 10; i++) {
    console.log(generaNumeroCasuale(1,100));
}

function generaNumeroCasuale(min, max) {
    const numeroCasuale = Math.floor( Math.random() * (max - min + 1) ) + min;
    return numeroCasuale;
}