/** 1. Kalkulasi Poin

Buatlah fungsi kalkulasi poin

Input merupakan sebuah array of number yang di representasikan sebagai variable arr dan terdiri dari N yang merupakan panjang array yang akan diikuti element array di bawahnya
findTotal merupakan sebuah fungsi yang akan mencetak jumlah poin berdasarkan:
1. Tambah 2 poin untuk setiap bilangan genap
2. Tambah 3 poin untuk setiap bilangan ganjil, kecuali bilangan "7"
3. Tambah 6 poin untuk setiap bilangan "7" muncuk di dalam array
return boolean false jika tidak ada

Contoh 1 :
input : findTotal([1,2,3])
output: 8

Contoh 2 :
input : findTotal([4,7])
output: 8

NOTE: 
1. Untuk menampilkan output silahkan menggunakan return
2. berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting */

function findTotal(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        count += arr[i] === 7 ? 6 : (arr[i] % 2 === 0 ? 2 : 3);
    }

    return count;
}

const input1 = [1,2,3,4,5,6,7];
const input2 = [1,2,3];
const input3 = [4,7];
console.log(findTotal(input1));
console.log(findTotal(input2));
console.log(findTotal(input3));

/** 2. Pasangan Terbesar

Buatlah fungsi untuk mencari pasangan terbesar (dua angka yang berhimpitan yang nilainya paling besar)

Contoh 1 :
input : 641573
output: 73

Contoh 2 :
input : 12783456
output: 83    

NOTE: 
1. Untuk menampilkan output silahkan menggunakan return
2. berikan comment penjelasan fungsi dari kode pada baris yang menurut anda penting
 * 
 */

function pasanganTerbesar(number) {
    let strNumb = number.toString();
    let result = 0;

    for (let i = 0; i < strNumb.length - 1; i++){
        let pasang = parseInt(strNumb[i] + strNumb[i + 1]);
        result < pasang ? result = pasang : result;
    }
    
    return result;
}

const number1 = 641573;
const number2 = 12783456;
console.log(pasanganTerbesar(number1));
console.log(pasanganTerbesar(number2));