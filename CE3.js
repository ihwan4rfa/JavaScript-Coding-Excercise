let inputsSentence = 'Selamat Pagi Duniaa';
let inputVowels = ['a', 'i', 'u', 'e', 'o'];
let hitung = 0;

function countVowels(str, vowels) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < inputVowels.length; j++) {
            if (str[i] === inputVowels[j]) {
                hitung++
            }
        }
    }
}

countVowels(inputsSentence, inputVowels);
console.log(`Output: ${hitung}`);

// =====================================================================
 
function manipulateString(str) {
    let stringSpasi = "";

    for (let i = 0; i < str.length; i++) {
        if (i > 0 && str[i].toUpperCase() === str[i]){
            stringSpasi += " ";
        }

        stringSpasi += str[i];
    }

    return stringSpasi;
}

inputString = 'SelamatPagiSemua';
let stringSpasi = manipulateString(inputString);
console.log(`Output: ${stringSpasi}`);
