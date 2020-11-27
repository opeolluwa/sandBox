const getRGB = (string) => {
 if (string.length > 7) {
  return 'Invalid value';
 }
 else {
  let arrX = [];
  for (let i = 1; i < string.length; i += 2) {
   arrX.push(parseInt(string.slice(i, i + 2), 16));
  }
  return arrX.join(',');
 }
}

console.log(getRGB("#ffffff"));