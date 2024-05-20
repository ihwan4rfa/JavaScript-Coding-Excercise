const evenNumber = (num) => {
    let hasil = '';
    for (let i = 2; i <= num; i += 2) {
        hasil += i + '\n';
    }
    return hasil;
};

console.log(evenNumber(100));



const removeNegative = (array) => {
    const result = array.filter(number => number >= 0);
    return result;
};

console.log(removeNegative([1, 2, 3, 4, 5]));
console.log(removeNegative([-90, -33, -44, 1]));
console.log(removeNegative([-1, -2, 0, 90, 34]));



const trimPhonenumber = (phone) => {
    let hasil = '';

    for (let i = 0; i < phone.length; i++) {
        const char = phone[i];

        if (!isNaN(Number(char))) {
            hasil += char;
        }
    }

    return hasil;
}

console.log(trimPhonenumber('0932-32323-32323'));
console.log(trimPhonenumber('0815-14033-108889'));
console.log(trimPhonenumber('743274832748234-843928492-392019309213'));


const lengthConverter = (value, measurement) => {
    let hasil;
    switch (measurement) {
        case 'meter':
            hasil = value * 1000;
            break;
        case 'inches':
            hasil = value * 39370;
            break;
        case 'cm':
            hasil = value * 100000;
            break;
        default:
            return `Measurement not available, value is ${value} km`
    }

    return hasil;
}

console.log(lengthConverter(10, 'meter'));
console.log(lengthConverter(50, 'cm'));
console.log(lengthConverter(150, 'inches'));



const sameArray = (arr1, arr2) => {
    let hasil = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                hasil.push(arr1[i]);
            }
        }
    }
    return hasil;
}

arr1 = [1, 2, 3, 5, 5, 5, 7]
arr2 = [1, 4, 5, 9, 77]

console.log(sameArray(arr1, arr2));


const diffArray = (arr1, arr2) => {
    let hasil = [];

    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i]) && !hasil.includes(arr1[i])) {
            hasil.push(arr1[i]);
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!arr1.includes(arr2[j]) && !hasil.includes(arr2[j])) {
            hasil.push(arr2[j]);
        }
    }

    return hasil;
}

console.log(diffArray(arr1, arr2));