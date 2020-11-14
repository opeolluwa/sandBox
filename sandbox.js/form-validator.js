const formValidation = () => {
 //get all form-input nodes
 //=>textarea
 let fText = document.getElementById('txt-msg').value;
 //=> sender name
 let fName = document.getElementById('txt-name').value;
 //sender email==>
 let fSubject = document.getElementById('txt-subject').value;
 //refrence error feedback holder
 let error = document.getElementById('error-feedback');

 //give error if textarea content is less than 25 characters or no content else do nothing
 let errorInText = (fText == '') ? 'Message  cannot be empty' :
  (fText.length < 25) ? 'Message too short add more details' :
  '';
 //console.log(errorInText);
 //log error report if name is less than 2 character length , name contain non-word character or name feed is empty
 for (let cnt in fName) {
  var errorInName =
   ((/[\W]/gi).test(fName[cnt]) && fName.length <= 2) ? `Name too short, invalid characters \(${fName.split('').join(', ')}\) in name` :
   (/[\W]/gi).test(fName[cnt]) ? ` invalid characters \(${fName.split('').join(', ')}\) in name` :
   (fName == '') ? 'Name feed cannot be empty' :
   (fName.length <= 2) ? ` \"${fName}\" Name too short` : '';
 }
 //log error console if subject non word chracters, has length less than 12 and feed is empty
 for (let cnt in fSubject) {
 var errorInSubject =
  ((/[\W]/gi).test(fSubject[cnt]) && fSubject.length <= 12) ? `subject too short, invalid characters \(${fSubject.split('').join(', ')}\) in subject` :
  (/[\W]/gi).test(fSubject[cnt]) ? ` invalid characters \(${fSubject.split('').join(', ')}\) in subject` :
  (fSubject == '') ? 'subject feed cannot be empty' :
  (fSubject.length <= 2) ? ` \"${fSubject}\" subject too short` : '';
} 
 
 
 
 
 
 
 error = `${errorInName} ${errorInText} ${errorInSubject}`;
 console.log(error);
 //error in email address
}
