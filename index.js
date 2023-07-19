// ceci est un commentaire
// console.log("Hello");
// let x = 5;
// let y = "S";
// function faireQuelqueChose(){
// // console.log("je fais un truc !");
// console.log("trop cool");
// }
// const faireUneTache = (tache) => {
//     console.log("Je fais :" + tache);
// };
// function calc(x, y) {
    // return x + y;
// }
// let string = "je , suis une chaine";
// let number = 24;
// let boolean = true;
// let array = ("je" , "suis" , 24, false);
// let object = {
//     prenom: "audrey",
//     age: 34,
//     ville: "Bordeaux",
// };
// let arbre = null;
// console.log(arbre);
// let total = 2;
// total = 5;
// console.log(total);
// let z = 4;
// let t = 2; 
// // x == y 
// let a = 4;
// add2();
// console.log(a);
// return a + 1;
let total = 0;

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}

function division(x) {
    if (total === 0) {
        return (total = x);
    } else {
        total /= x;
    }
}
function multiplication(x) {
    if (total === 0) {
    return (total = x);   
    } else {
        total *= x;
        return total;
    }
}
function reset() {
    total = 0;
}