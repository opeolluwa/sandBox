const validateUserInfo = () => {
 //make pseudo account info
 let account = [
  {
   'username': 'alex',
   'password': '33birds'
 },
  {
   'username': 'jade',
   'password': 'iswitch'
  }, {
   'username': 'alison',
   'password': '?correct&'
   }, {
   'username': 'dave',
   'password': '$wh@+Yodo'
    }, {
   'username': 'opeolluwa',
   'password': 'yongZed$'
     }
 ]
 //get user input
 let name = document.getElementById('username').value;
 let pswd = document.querySelector("#loginForm #userpswd").value;
 var response = '';
 //run a background check
 for (let checkDb = 0; checkDb < account.length; checkDb++) {
  if (account[checkDb].username == name && account[checkDb].password == pswd) {
   response = 'all good, proceed';
  }
  if (account[checkDb].username == name && account[checkDb].password !== pswd) {
   response = 'incorrect password';
  }
  else {
   response = 'invalid username or password';
  }
 }
 //console.log(response);
 let log = document.getElementById('log');
 log.innerHTML ='fool';
}


//registration 
const newAccount = () => {

}