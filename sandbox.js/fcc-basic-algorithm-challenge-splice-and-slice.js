function frankenSplice(arr1, arr2, n) {

let arrX = arr2.slice();
for(let i = arr1.length-1; i >=0; i--){
	arrX.splice(n,0,arr1[i])
}
return arrX;
}


frankenSplice([1, 2, 3], [4, 5], 1);

