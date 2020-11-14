function titleCase(str) {
str = str.toLowerCase().split(' ');
for(var i in str){
var str1 = str[i].slice(1, str[i].length);

str[i] = str[i][0].toUpperCase()+str1;}

return str.join(' ');
}


console.log(titleCase("I'm a little tea pot"));


