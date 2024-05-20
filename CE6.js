function charCount(word) {
    let hitungChar = {};
    
    for (let i = 0; i < word.length; i++){
        let char = word[i].toLowerCase();

        if (hitungChar[char]){
            hitungChar[char]++
        } else {
            hitungChar[char] = 1;
        }
    }

    return hitungChar;
}

console.log(charCount('Dibimbing di'));
console.log(charCount('Software')); 
console.log(charCount('Frontend')); 