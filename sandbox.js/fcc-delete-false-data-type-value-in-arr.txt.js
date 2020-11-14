function bouncer(arr) {
  let arrX  = [];
for (let i of arr){
  if (i){
arrX.push(i)
  }
}
return arrX;
}

bouncer([7, "ate", "", false, 9]);
