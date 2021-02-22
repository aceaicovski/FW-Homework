// function isPalindrom(string);
// 	Verificați dacă un cuvint/fraza este palindrom (se citește invers la fel ca în original).

const strings = ['abc', 'bce', 'aba', 'bbb'];

 
    function isPalindrom(string) {
        let reversed = '';
        for (let i = string.length - 1; i >= 0; i--) {
            reversed += string[i];
        }
        if (reversed === string) {
            console.log(`${string} is palindrom`);
        } else {
            console.log(`${string} is not palindrom`);
        }
    };

isPalindrom('abc');
isPalindrom('aba');