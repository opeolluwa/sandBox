let exArr = [2,4,3,5,6,7];
//go over array
for (var x =0; x < exArr.length; x++){
	//add zeros
	//console.log(x);
	}
	let zero = '';
	let zeroArr =[];
	for(let i =1; i < x; i++){
		zero+='0';
		zeroArr.unshift(zero);
		
}
for(let v = 0; v < exArr.length -1; v++){

if(exArr[v] === NaN){
 exArr[v] = exArr[2];
}
exArr[v]+=zeroArr[v];
}
console.log(exArr);