//Input
let input=`Ram: I bought 2 apples for 20 rupees.
Sam: I bought 4 oranges for 2 dollars.
Shabhanna: I bought 10 milk packets for 2 dinars.
Amit Sharma: buy 20 banana in 60.5 rupees.`;
let nameArr=[];
let itemQty=[];
let itemPrice=[];
let itemName=[];
let currencyName=[];
let textArr=[];
let text;
let inputLength;
let textArrLength;
//Capitalized First Letter of word 
const arr = input.split(" ");
inputLength=arr.length;
for (var i = 0; i < inputLength; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}
//Join all the elements of the array  
//using a blankspace as a separator 
text = arr.join(" ");


textArr=text.split("\n");
textArrLength=textArr.length;
for(let i=0;i<textArrLength;i++){
    let name;
    let number;
    let itemDetails;
    name = textArr[i].match(/[^:]+/);
    nameArr.push(name[0]);
    //Extract quantity and price
    number=textArr[i].match(/\d+(.[0-9]+)|\d+/gi);
    itemQty.push(number[0]);
    itemPrice.push(number[1]);
    //Extract Item name and Currency  
    itemDetails=textArr[i].match(/\d+(.[0-9]+)\s[a-z]+|\d+\s[a-z]+/gi);
    itemName.push(itemDetails[0].replace(/[0-9]+\s/g, ''));
    currencyName.push(itemDetails[1].replace(/([0-9]|.[0-9])+\s/g, ''));
}
const result=[];
for (let i=0;i<textArrLength;i++){
    const obj1={
        Name: nameArr[i],
        Items:itemName[i],
        Qty: itemQty[i],
        Price:itemPrice[i],
        Rate:itemPrice[i]/itemQty[i],
        Currency:currencyName[i]
    };
    
    result.push(obj1);
}
console.table(result);



