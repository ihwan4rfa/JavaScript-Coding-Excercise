/* 
Cek apakah terdapat 'o' dan 'x' dengan jumlah yang sama dalam string.

Method harus mengembalikan nilai boolean program tidak case sensitive. 

(huruf kapital tidak berpengaruh)

String dapat mengandung semua char (tidak hanya 'x' atau 'o')


Contoh:

Input 1:
oooxx
Output 2:
false

Input 2:
xooxx
Output 2:
false

Input 3:
ooxXm 
Output 3:
true

Input 4:
zpzpzpp
Output 4:
true // apabila tidak ada 'x' dan 'o' di dalam string maka program akan mengembalikan nilai true
*/

function XO(str) {
    let countX = 0;
    let countO = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "o" || str[i] === "O") {
            countO += 1;
        } else if (str[i] === "x" || str[i] === "X") {
            countX += 1;
        }
    }

    return countX === countO;
}

let input1 = "oooxx";
let input2 = "xooxx";
let input3 = "ooxXm";
let input4 = "zpzpzpp";

console.log(XO(input1));
console.log(XO(input2));
console.log(XO(input3));
console.log(XO(input4));