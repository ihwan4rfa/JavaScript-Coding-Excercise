function maxMin(arr) {
    let max = 0;
    let min = 0;

    // MAX
    for (let i = 0; i < arr.length; i++) {
        max = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (max < arr[j]) {
                max = arr[j]
            }
        }
    }

    //MIN
    for (let i = 0; i < arr.length; i++) {
        min = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (min > arr[j]) {
                min = arr[j]
            }
        }
    }

    return {max, min};
}   

array = [67, 9, 11, 8, 20, 9, 44];
array2 = [101, 10, 30, 55, 98, 102]
hitung = maxMin(array);
hitung2 = maxMin(array2);

console.log(hitung);
console.log(hitung2);