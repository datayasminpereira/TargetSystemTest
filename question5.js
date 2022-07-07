const word = 'Yasmin'

const trimWord = word.split("")
var reverseWord = []
for(i=trimWord.length-1;i>=0;i--){
    reverseWord.push(trimWord[i])
}
console.log(reverseWord.join(""))