const forexReturns = (capital, month) => {
 for (let monthCount = 0; monthCount < month; monthCount++) {
  capital += (capital * 0.2);
 }
 return capital.toLocaleString();
}
console.log(forexReturns(20000, 12));
//output ==> 178,322.009