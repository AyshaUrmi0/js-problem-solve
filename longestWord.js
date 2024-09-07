function findLongestWord(str) {
    
    const words = str.split(' ');
    
   
    let longestWord = '';

   
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


const input = 'I am learning Programming to become a programmer';
const longestWord = findLongestWord(input);
console.log(longestWord);  