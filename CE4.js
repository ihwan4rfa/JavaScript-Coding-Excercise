function capitalFormater(words) {
    hasil = '';
    const wordsSplit = words.split(' ');

    for (let i = 0; i < wordsSplit.length; i++) {
        for (let j = 0; j < wordsSplit[i].length; j++) {
            if (j === 0) {
                if (i === 0) {
                    hasil += wordsSplit[i][j].toUpperCase();
                } else if (i > 0) {
                    hasil += ' ' + wordsSplit[i][j].toUpperCase();
                }
            } else if (j > 0) {
                hasil += wordsSplit[i][j].toLowerCase();
            }
        }
    }

    return hasil;
}

console.log(capitalFormater('SeLamAT PAGi semua haloo'));
console.log(capitalFormater('hARi InI adALah Hari IIBUr'));