function bouncer(arr) {
 let arrX = [];
 
 delete arr[arr.findIndex(n => Number.isNaN(n))];
 for (let i in arr) {
  (arr[i] === 0) ? delete arr[i]: '';
  (arr[i] === false) ? delete arr[i]: '';
  (arr[i] === null) ? delete arr[i]: '';
  (arr[i] === '') ? delete arr[i]: '';
  (arr[i] === undefined) ? delete arr[i]: arrX.push(arr[i]);
  //console.log(arrX);

 }
 return (arrX);
}

