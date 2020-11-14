//initialize
function rot13(str) {
 //CODE BLOCK 1
 //make holder
 let strArr = [];
 //go over input
 for (let cntCipher = 0; cntCipher < str.length; cntCipher++) {
  //add each cipher to holder
  strArr.push(str[cntCipher]);
  //get char code, of each character, add to holder
  strArr[cntCipher] = strArr[cntCipher].codePointAt(strArr[cntCipher]);
 }
 //CODE BLOCK 2
 //go over each holder element, translate cipher
 for (let cntCipher = 0; cntCipher < strArr.length; cntCipher++) {
  //translate N- z
  if (strArr[cntCipher] >= 78 && strArr[cntCipher] <= 90) {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher] - 13);
  }
  //translate A - N
  else if (strArr[cntCipher] >= 65 && strArr[cntCipher] < 78) {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher] + 13);
  }
  //translate other char
  else {
   strArr[cntCipher] = String.fromCharCode(strArr[cntCipher]);
  }
 } 
 //CODE BLOCK 3 
 let strArx = strArr[0];//initializer
 //merge array to get string
 for (let cntCipher = 1; cntCipher < strArr.length; cntCipher++){
 strArx += strArr[cntCipher];
 }
 //CODE BLOCK 4 | return
 str = strArx;
 return(str);
}

rot13("SERR PBQR PNZC");