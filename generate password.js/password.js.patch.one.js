   //initialze
   const encrypt = (password) => {
    //get user input
    password = document.getElementById('encryptPswd').value;

    //reject space character
    let newCharacter;
    let space = ' ';
    let count;
    //initialze counter, go over each chracter prompt user to input char if char is space ' '
    for (count = 0; count < password.length; count++) {
     //replaced space ' '
     if (password[count] == space) {
      newCharacter = prompt(`
     Invalid character before ${password[count+1]}\!
     Space unallowed, input another character`, '');

      //copy characers before space
      let characersBeforeSpace = password.slice(0, password.indexOf(space));

      //copy characters after space
      let characersAfterSpace = password.slice(password.indexOf(space) + 1, password.length);

      //output equals initial characters and replaced ones, re-assign value to password
      password = characersBeforeSpace.concat(newCharacter).concat(characersAfterSpace);
     }

     //regect password less than 5 characters
     if (password.length < 5) {
      password = prompt(`password keyword \"${password}\" is too short, suggest another`, '');
     }

     //reject void password
     /* if (password == nu) {
       password = prompt('Invalid\! Password keyword cannot be  be void. Enter keyword', '');
      }*/
     //return password for next CODE BLOCK
    }
    //CODE BLOCK 2 || functions

    // put in an array, list of unicode value between start and end. Each array is a set of unicode values representing characters
    const charSet = (start, end) => {
     //declear holder
     let charArr = [];
     start = start - 1;
     while (start < end) {
      start++
      //add unicode value of characters to holder'
      charArr.push(start);
      //return array of  unicode values in decimal
     }
     return charArr;
    }

    //count length of arr, str or obj return indexes
    const countStr = (str) => {
     let count = 0;
     while (count < str.length) {
      count++;
     }
     return count;
    }
    //set of all valid password string
    let mainCharSet = [
   charSet(65, 90),
   charSet(33, 47),
   charSet(48, 57),
   charSet(97, 122),
   charSet(174, 187),
   charSet(161, 172),
   charSet(234, 255)
   ];
    //destruct|match|assign char-set name with value
    let [
  caps,
  specialChar,
  num,
  small,
  addSmall,
  addSchar,
  addCaps
  ] = mainCharSet;

    //CODE BLOCK 3
    //declear a string holder
    let strArr = [];
    //loop through password characters
    for (let i = 0; i < password.length; i++) {
     //add characters to holder 'strArr'
     strArr.push(password[i]);
    }
    //CODE BLOCK 4


    //register a loop that'll go thru the charsets
    for (let cntCharSet = 0; cntCharSet < 256; cntCharSet++) {


     //register a loop that will go over password array ('strArr') elements 
     for (let cntStrArr = 0; cntStrArr < 256; cntStrArr++) {


      //modify characers other than first and last
      if (
       (strArr[cntStrArr] != strArr[0]) && (strArr[cntStrArr] !==
        strArr[countStr(strArr)])
      ) {


       //if str[x] is a capital letter translate with this algorithm - add capital letter, special character, a character from password arr then number 
       if (strArr[cntStrArr] == String.fromCharCode(caps[cntCharSet]))
       {
        strArr[cntStrArr] = (
         String.fromCharCode(addSchar[cntStrArr]) +
         String.fromCharCode(strArr[cntStrArr][cntStrArr]) +
         String.fromCharCode(num[cntStrArr]));
       }


       //if str[x] is a small letter do this replace letter witj number, small character, make the liwer case upper
       else if (strArr[cntStrArr] == String.fromCharCode(small[cntCharSet]))
       {
        strArr[cntStrArr] = (
         String.fromCharCode(num[cntStrArr + 7]) + strArr[cntStrArr] +
         String.fromCharCode(addSmall[cntStrArr]) + strArr[cntStrArr].toUpperCase());
       }



       //if str[x] is a number do this : replace with small letter, special character, a letter from password
       else if (strArr[cntStrArr] == String.fromCharCode(num[cntCharSet])) {
        strArr[cntStrArr] = (
         String.fromCharCode(small[cntStrArr]) +
         String.fromCharCode(strArr[cntStrArr] + 5) +
         String.fromCharCode(specialChar[cntStrArr]));
       }

       //if str[x] is a character do this : translate to small letter, special character and number
       else if (strArr[cntStrArr] == String.fromCharCode(specialChar[cntCharSet])) {
        strArr[cntStrArr] =
         (String.fromCharCode(small[cntCharSet]) +
          strArr[cntStrArr] +
          String.fromCharCode(addSchar[cntStrArr]) +
          String.fromCharCode(num[cntStrArr] - 3));
       }
      }
     }
    } //pass to the next codeblock
    //CODE BLOCK 5
    let newPswd = strArr[0];
    //merge password array elements to have a string
    for (let cntStrArr = 1; cntStrArr < countStr(strArr); cntStrArr++) {
     newPswd += strArr[cntStrArr];
    }

    //re arrange characters
    let hol = newPswd;
    let str = hol.slice(hol.length * 1 / 3, hol.length * 3 / 3) +
     hol.slice(hol.length * 3 / 3) +
     hol.slice(0, hol.length * 1 / 3);
    let Newtr = str.slice(str.length * 1 / 2, str.length * 2 / 2) +
     str.slice(str.length * 2 / 2) +
     str.slice(0, str.length * 1 / 2);

    //make length 50 letter long
    while (newPswd.length < 50) {
     newPswd += newPswd;
    }
    document.getElementById('pswd').innerHTML = Newtr;

    //copy password to clipboard then reload page
    (function() {
     //prompt user to copy generated password
     document.getElementById('trigger').innerHTML = "copy";
     //ref root node and selection button
     let generatedPswd = document.getElementById('pswd');
     let trigger = document.getElementById('trigger');

     //add event listener 
     trigger.addEventListener('click', function() {
      //append selection to variable generatedPswd
      const selection = window.getSelection();

      //save current selection
      const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

      //select the generatedPswd content
      const range = document.createRange();
      range.selectNodeContents(generatedPswd);
      selection.removeAllRanges();
      selection.addRange(range);

      //copy to clipboard
      try {
       document.execCommand('copy');
       trigger.innerHTML = 'Copied';
       //reload page when password is copied
       window.location.reload();

      }
      //unable to copy 
      catch (err) {
       trigger.innerHTML = 'copy';
      }
      //restore all previous all selection
      selection.removeAllRanges();
      currentRange && selection.addRange(currentRange);
     });
     //reload page when password is copied
     // window.location.reload();
    })();

   }

   //loader fade-in DOM function
   function fadeIn() {
    document.querySelector('.loader').classList.toggle('fade-in');
   }
   //loader fade-out DOM function
   function fadeOut() {
    document.querySelector('.loader').classList.toggle('fade-out');
   }

   //set loader styles 
   function v() {
    let x = document.querySelector('.loader');
    x.style.maxHeight = '100%';
    x.style.height = 'auto';
    x.style.wordWrap = 'break-word';
    x.style.padding = '.2rem';
    x.style.textAlign = 'center ';
    x.style.fontSize = ' 1.2rem ';
    x.style.fontWeight = ' 300 ';
    x.style.border = ' none';
    x.style.borderRadius = '0';
    x.style.animation = 'none';
    x.style.opacity = '1';
   }