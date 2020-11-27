//type of bin must be string 
const translateBinaryCode = (bin) => {
 let arr = bin.split(' ');
 for (let i in arr) {
  //translate every char except ' '
  arr[i] = parseInt(arr[i], 2);
  arr[i] = (arr[i] == 32) ? ' ' : String.fromCharCode(arr[i]);
 }
 return arr.join('');
}
console.log(translateBinaryCode('01011001 01101001 01110000 01110000 01111001 00100001 00100000 01001001 01110100 00100111 01110011 00100000 01110111 01100101 01100101 01101011 01100101 01101110 01100100'));
//Yippy! It's weekend.