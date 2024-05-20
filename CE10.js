// function towerBuilder(n) {
//     let result = '';

//     for (let i = 0; i < n; i++) {
//         let arr = [1, 3, 5, 7, 9, 11, 13, 15];
//         let star = '';

//         for (let j = 0; j < arr[i]; j++) {
//             star += '*';
//         }

//         if (i < (n - 1)) {
//             result += star + '\n';
//         } else {
//             result += star;
//         }
//     }

//     return result;
// }


function towerBuilder(n) {
    let result = '';

    // Loop untuk setiap baris
    for (let i = 0; i < n; i++) {
        let star = '';

        // Loop untuk menambahkan spasi di awal setiap baris
        for (let k = 0; k < n - i - 1; k++) {
            star += ' ';
        }

        // Loop untuk menambahkan bintang ke setiap baris
        for (let j = 0; j < 2 * i + 1; j++) {
            star += '*';
        }

        // Tambahkan baris ke hasil akhir
        if (i < (n - 1)) {
            result += star + '\n';
        } else {
            result += star;
        }
    }

    return result;
}

console.log(towerBuilder(6));

//      *              5
//     ***             4
//    *****            3
//   *******           2
//  *********          1
// ***********