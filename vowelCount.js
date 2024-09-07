


function countVowel(str){

 let count =0;
const vowels = 'aeiou';



   for (const char of str) {
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}

return count;}
     



const str='lest count vowel'

const vowel=countVowel(str);
console.log(vowel)