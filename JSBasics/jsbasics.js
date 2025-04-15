console.log('AAA');

const myBusinessName = 'My Awesome Business';
console.log('My Business Name is front page '+myBusinessName);
console.log('My Business Name is last page '+myBusinessName);
console.log('My Business Name is contract page '+myBusinessName);


let outletAddress;
outletAddress='Blockhoues Bay';
console.log('outlet address 1'+ outletAddress);
outletAddress='Manukau';
console.log('outlet address 2'+ outletAddress);
outletAddress='City';
console.log('outlet address 2'+ outletAddress);


// if (outletAddress == 'Blockhouse Bay') {
//     console.log("Large store");
// } else if (outletAddress == 'Manukau') {
//     console.log("Head Office");
// } else if (outletAddress == 'City') {
//     console.log("Mega Store");
// }
console.log("===================================")
outletAddress='Manukau';
switch(outletAddress) {
    case 'Blockhouse Bay' :{
        console.log("Large store");
        break;
    } 
    case 'Manukau': {
        console.log("Head Office");
       break;
    } 
    case'City': {
        console.log("Mega Store");
        break;
    }
}

function functionName(functioanParameter1, functioanParameter1) {
    return functioanParameter1+functioanParameter2;
}