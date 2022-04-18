let words = ["abcdd","erfeeeee","gjre","ggeeeeeees","erteeeeeeeeeeeeeeeeeee"];
let arrWordLength=[];
let arrayLength=words.length;

function wordLengthArray(str){
    
    let wordLength=str.length;
    arrWordLength.push(wordLength);
    return arrWordLength;

};

for(let i=0;i<arrayLength;i++){
    wordLengthArray(words[i]);
   // console.log(words[i].length);
}
console.log(arrWordLength);