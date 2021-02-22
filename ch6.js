// function isFloat(x)
// 	Verificați dacă parametrul transmis către funcție este un număr real (cu numere după virgula).

function isFloat(x) {
    if (x % 1 !== 0) 
        console.log('The parameter is a real number');
else 
    console.log('The parameter is an integer');

}

// function isFloat(n) {
//     return n % 1 !== 0;
//  }

isFloat(24);
isFloat(2.4);
isFloat(1.345);
