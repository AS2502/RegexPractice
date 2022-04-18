let str = `Ram: I bought 2 apples for 20 rupees.
Sam: I bought 4 oranges for 2 dollars.
Shabhanna: I bought 10 milk packets for 2 dinars.`


function stringSplit(strArray){
    let obj = {};
    const splitStringArray=strArray.split("\n");
    let arrayLength=splitStringArray.length;
    for (let i=0;i<arrayLength;i++){
        strMatch(splitStringArray[i],i,obj);
    }
    console.table(obj);
}
function strMatch(strMatch,i,obj){
    let value = [];
    let regex=/(\w+):\sI\sbought\s(\d+)\s(.*)for\s(\d+)\s(\w+)./;
    value = strMatch.match(regex);
    obj[i] = {names:value[1],quantity:value[2],items:value[3],price:value[4],currency:value[5],rate:(value[4]/value[2])};
    return obj;
}
stringSplit(str);
