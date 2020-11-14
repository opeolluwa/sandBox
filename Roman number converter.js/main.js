function convertToRoman(num) {
 //CODE BLOCK I
 let numArr = [];
 //parse input as string, add to holder 'numArr'
 num = num.toString();
 //add values to array
 for (let cntNum = 0; cntNum < num.length; cntNum++) {
  numArr.push(num[cntNum]);
 }
 //CODE BLOCK II | get array elements place value
 let cntNumArr;
 for (cntNumArr = 0; cntNumArr < numArr.length; cntNumArr++) {}
 //add zeros to make corresponding value place values
 let zero = '';
 let zeroArr = [];
 for (let addZero = 1; addZero < cntNumArr; addZero++) {
  zero += '0';
  //add zeros corresponding to cntNumArr values, the addZero is initialized with one to get rid  of array zero indexing. Add corresponding result to holder;
  zeroArr.unshift(zero);
 }
 //merge num array elements and corresponding zeros
 for (let merge = 0; merge < numArr.length - 1; merge++) {
  numArr[merge] += zeroArr[merge];
  //return elements to number
  Number(numArr[merge]);
 
 }
 //CODE BLM III  | convertToRoman
 var romanObj = {
  '1': 'I',
  '2': 'II',
  '3': 'III',
  '4': 'IV',
  '5': 'V',
  '6': 'VI',
  '7': 'VII',
  '8': 'VIII',
  '9': 'IX',
  '10': 'X',
  '20': 'XX',
  '30': 'XXX',
  '40': 'XL',
  '50': 'L',
  '60': 'LX',
  '70': 'LXX',
  '80': 'LXXX',
  '90': 'XC',
  '100': 'C',
  '200': 'CC',
  '300': 'CCC',
  '400': 'CD',
  '500': 'D',
  '600': 'DC',
  '700': 'DCC',
  '800': 'DCCC',
  '900': 'CM',
  '1000': 'M',
  '2000': 'MM',
  '3000': 'MMM'
 };
 //convertToRoman
for(let cntObj =0; cntObj < numArr.length; cntObj++){
 //ignore zeros
 if(numArr[cntObj] ==0 && cntObj !=numArr.length){
  numArr[cntObj] ='';
 }
 else{
 numArr[cntObj] = romanObj[numArr[cntObj]];
 }
}
 //merge string
 num ='';
 for (let merge = 0; merge  < numArr.length; merge++){
  num +=numArr[merge];
 }
 return(num);
}

convertToRoman(36);