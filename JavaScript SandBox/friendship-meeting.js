  //define possible meeting occasion 
  let db = [
' seen me in person',
' touched me',
' hugged me ',
' spent an hour with me',
' dined with me ',
' walked beside me ',
' see me smile',
' in love with me'

  ];
  // possible meeting data to to Upper Case
  db = db.map(db => db.toUpperCase());
  let score = 0;
  for (let count = 0; count < db.length; count++) {
   //accept user feedback
   let met = prompt(`
 	🙋Hi there \!
 	How well do you know me ❓
 	Let\'s see...🕵🏼Reply
 	\'yes\',
 	\'no\' or
 	\'maybe'\ to\n
 	${count +1}. ${db[count]}\n `, '')
   //input data to lowercase 
   met = met.toLowerCase();
   //loop thru feedback
   switch (met) {
    case 'yes':
     score += 100;
     break;
    case 'maybe':
     score += 50;
     break;
    case 'no':
     score += 0;
     break;
    default:
     met = 0;
   }
  }

  //convert scoreto percentage
  score = Math.floor(score / db.length);
  let response;
  if (score < 30) {
   response = `😩 Oops\! ${score} \% we gotta get closer\!`;
  }
  else if (score >= 80) {
   response = `Interesting! you nailed it! ${score} \%🙌🏾`;
  }
  else if (score >= 50) {
   response = `Yo buddy! 🤗 you rock ${score} \%`;
  }
  else { response = `Hurray! you score ${score} \%`; }

  alert(response);