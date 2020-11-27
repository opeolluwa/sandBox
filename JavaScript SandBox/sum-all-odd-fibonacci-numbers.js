function sumFibs(num) {
 const fibo = (max) => {
 //generator
 let arr = [1,1];
 const fiboGet = elemX => elemY => elemX + elemY;
 let prev = arr[arr.length - 2];
 let next = arr[arr.length - 1];
 while(next <= max){
 arr.push(fiboGet(next)(prev))
 prev = arr[arr.length - 2];
  next = arr[arr.length - 1];
 }
 return arr = (arr[arr.length-1]>max) ?
 arr.slice(0, arr.length-1):
 arr;
}
return fibo(num).filter(elem => elem % 2 ==1).reduce((a,b)=>a+b,0);
}

sumFibs(12);
