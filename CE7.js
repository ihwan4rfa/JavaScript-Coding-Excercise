function sockMerchant(array) {
    let count = [];
    let pasangan = 0;

    for (let i = 0; i < array.length; i++){
        const num = array[i];
        if (count[num]){
            count[num] += 1;
        } else {
            count[num] = 1;
        }
    }

    for (let key in count){
        pasangan += Math.floor(count[key] / 2);
    }

    return pasangan;
}

const arr = [1, 1, 3, 3, 5, 5, 5, 5];
const hasil = sockMerchant(arr);
console.log("Jumlah pasangan:", hasil);