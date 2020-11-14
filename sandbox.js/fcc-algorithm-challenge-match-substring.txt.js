function mutation(arr) {
 var regVal;
 let reg = arr[1].split('');
 for (let i of reg) {
  if (RegExp(i, 'i').test(arr[0]) === false) {
   regVal = false;
   break;
  }
  else regVal = true;
 }
 return regVal;
}


/**
 * function mutation(arr) {
 let reg = arr[1].split('');
 for (let i in reg) {
  var regVal = (RegExp(reg[i], 'i').test(arr[0]) == false) ? false: true;
 }
 return regVal;
}

 *
 */