// function convertToRomanNumber(x);
// 	Transformati un număr X întreg în echivalentul scris cu numerale romane.
'use strict'
function convertToRomanNumber(x) {
    
    let romanEquivalents = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
    let romanNumber = '';
    for (let i in romanEquivalents) {
        while ( x >= romanEquivalents[i] ) {
        romanNumber += i;
        x -= romanEquivalents[i];
        }
    }
    return romanNumber;
}

console.log(convertToRomanNumber(35));


console.log( 20e-1['toString'](2));

