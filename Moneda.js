function moneda(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`el lanzamiento fue ${moneda}`);
    return moneda;
}
console.log(`El lanzamiento fue ${lanzarmoneda()}`);
let lanzamiento=lanzarmoneda()
console.log(`El lanzamiento fue ${lanzamiento()}`);
function ganar(saldo, apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}
function perder(saldo, apuesta){
    saldo=saldo-apuesta;
    return saldo;
}

ganar(saldo, apuesta);
perder(saldo, apuesta);

let lanzar=function lanzarmoneda(){
    let moneda= Math.floor((Math.random()*2)+1)
    return moneda;
}
let ganar=function ganar(saldo,apuesta){
    saldo=saldo+(apuesta*2);
    return saldo;
}
let ganar =ganar(saldo, apuesta);

let ganar= function (saldo, apuesta){
    saldo=saldo+(apuesta *2)
    return saldo;
}
ganar(saldo, apuesta);
