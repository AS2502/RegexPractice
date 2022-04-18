//Input
let input=`Ram: I bought 2 apples for 20 rupees.
Sam: I bought 4 oranges for 2 dollars.
Shabhanna: I bought 10 milk packets for 2 dinars.
Amit Sharma: buy 20 banana in 60.5 rupees.`;
//Capitalized First Letter of word 
function stringFirstLetterCap(input){
    const arr = input.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    //Join all the elements of the array  
    //using a blankspace as a separator 
    const text = arr.join(" ");
    stringSplit(text);
}
function stringSplit(text){
    let textArr=[];
    const result=[];
    textArr=text.split("\n");
    let length=textArr.length;
    for(let i=0;i<textArr.length;i++){
        stringMatch(textArr[i],result);
    }
    console.table(result);   //Print Table
}
function stringMatch(textArr,result){
    let nameArr=[];
    let itemQty=[];
    let itemPrice=[];
    let itemName=[];
    let currencyName=[];
    let name;
    let number;
    let itemDetails;
    name = textArr.match(/[^:]+/);
    nameArr.push(name[0]);
//Extract quantity and price
    number=textArr.match(/\d+(.[0-9]+)|\d+/gi);
    itemQty.push(number[0]);
    itemPrice.push(number[1]);
//Extract Item name and Currency  
    itemDetails=textArr.match(/\d+(.[0-9]+)\s[a-z]+|\d+\s[a-z]+/gi);
    itemName.push(itemDetails[0].replace(/[0-9]+\s/g, ''));
    currencyName.push(itemDetails[1].replace(/([0-9]|.[0-9])+\s/g, ''));

    const obj1={
        Name: nameArr[0],
        Items:itemName[0],
        Qty: itemQty[0],
        Price:itemPrice[0],
        Rate:itemPrice[0]/itemQty[0],
        Currency:currencyName[0]
        };
        result.push(obj1);
    return result;
}
stringFirstLetterCap(input)