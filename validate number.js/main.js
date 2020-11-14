
function telephoneCheck(str) {
 //define return Booleanl var
 let rtnBool;
 //define RegExp conditions on string 
 if (
  //return true if this formart (1 (555) 555 5555)or (1 555 555 5555 ) or 1(555)555-5555
  (/^[1](\s\d{3}|\s\(\d{3}\)|\(\d{3}\))(\s\d{3}|\d{3})(\s|\-)\d{4}$/.test(str) == true) ||
  //return true for 555 555 5555 or 555-555-5555
  (/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true) ||
  //return true for 555555555 or (555)555-5555
  (/(^\d{10}$)|(^\(\d{3}\)\d{3}\-\d{4}$)/.test(str) == true) ||
  //return true for 1 555-555-5555
  (/^[1]\s(\d{3})(\-)\1\2\d{4}$/.test(str) == true)
 ) {
  rtnBool = true;
 }
 else { rtnBool = false; }
 return rtnBool;

}
//function call telephoneCheck("555-555-5555");

console.log(telephoneCheck("1 555-555-5555"));


//BUILD
///$\d/.test(str) == true

// (/^\d{10}$/.test(str)==true) valid for 5555555555/

/*  (/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true) ||
  (/^\d{10}$/.test(str) == true)
  
  true for 5555555555, 555-555-555 555 555 555 
  */


/* 

  (/\d{1}\s\(\d{3}\)|(\d{3})(\s)\1\2\d{4}$/.test(str) == true) ||
(/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true)
||
(/^\d{10}$/.test(str) == true)

return true for
5555555555, 
555-555-555
555 555 555 
1 (555) 555 5555
1 555 555 5555
*/



/*
function telephoneCheck(str) {
 //define return Booleanl var
 let rtnBool;
 //define RegExp conditions on string 
 if (
  //return true if this formart (1 (555) 555 5555)or (1 555 555 5555 ) or 1(555)555-5555
  (/^\d{1}(\s\d{3}|\s\(\d{3}\)|\(\d{3}\))(\s\d{3}|\d{3})(\s|\-)\d{4}$/.test(str) == true) ||
  //return true for 555 555 5555 or 555-555-5555
  (/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true) ||
  //return true for 555555555
  (/^\d{10}$/.test(str) == true)

 ) {
  rtnBool = true;
 }
 else { rtnBool = false; }
 return rtnBool;

}
//\()   (\d{3}\)|(\d{3})(\s)\1\2\d{4}$/.test(str) == true)
telephoneCheck("1(555)555-5555");


//BUILD II
function telephoneCheck(str) {
 //define return Booleanl var
 let rtnBool;
 //define RegExp conditions on string 
 if (
  //return true if this formart (1 (555) 555 5555)or (1 555 555 5555 ) or 1(555)555-5555
  (/^\d{1}(\s\d{3}|\s\(\d{3}\)|\(\d{3}\))(\s\d{3}|\d{3})(\s|\-)\d{4}$/.test(str) == true) ||
  //return true for 555 555 5555 or 555-555-5555
  (/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true) ||
  //return true for 555555555 or (555)555-5555
  (/(^\d{10}$)|(^\(\d{3}\)\d{3}\-\d{4}$)/.test(str) == true)

 ) {
  rtnBool = true;
 }
 else { rtnBool = false; }
 return rtnBool;

}
//\()   (\d{3}\)|(\d{3})(\s)\1\2\d{4}$/.test(str) == true)
console.log(telephoneCheck("(555)555-5555"));


//BUILD III
function telephoneCheck(str) {
 //define return Booleanl var
 let rtnBool;
 //define RegExp conditions on string 
 if (
  //return true if this formart (1 (555) 555 5555)or (1 555 555 5555 ) or 1(555)555-5555
  (/^[1](\s\d{3}|\s\(\d{3}\)|\(\d{3}\))(\s\d{3}|\d{3})(\s|\-)\d{4}$/.test(str) == true) ||
  //return true for 555 555 5555 or 555-555-5555
  (/^(\d{3})(\s|\-)\1\2\d{4}$/.test(str) == true) ||
  //return true for 555555555 or (555)555-5555
  (/(^\d{10}$)|(^\(\d{3}\)\d{3}\-\d{4}$)/.test(str) == true)

 ) {
  rtnBool = true;
 }
 else { rtnBool = false; }
 return rtnBool;

}
//\()   (\d{3}\)|(\d{3})(\s)\1\2\d{4}$/.test(str) == true)
telephoneCheck("555-555-5555");
*/