// function isInteger(x)
// 	Verificați dacă parametrul transmis către funcție este un număr întreg.

/*function isInteger(x) {
    return n % 1 === 0;
 } */

function isInteger(x) {
    //console.log(Number.isInteger(x));
    if (x === parseInt(x, 10))
    console.log('The parameter is an integer');
else
    console.log('The parameter is not an integer');
}

isInteger(23);
isInteger(2.3);