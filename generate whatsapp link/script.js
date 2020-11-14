 //ref variables 
 let link = document.getElementById('output');
 document.querySelectorAll('.container .output-controls button')[1].addEventListener('click', () => {
  //define variables
  let message = document.getElementById('getText').value;
  let number = document.getElementById('getNumber').value;
  //proceed to.copy

  //ERROR HANDLING 

  if (!number) {
   swal({
    title: "Oops\!",
    text: "number feed cannot be Empty, please provide a valid number",
    icon: "info",

   });
  }
  else if (number.length < 11) {
   swal({
     title: 'Input error',
     text: `The number "${number}" has fewer characters than expected.
     
     Add up to 11 digits.`,
     icon: 'info'
    })
    .then((resetFeed) => {
     if (resetFeed) {
      document.getElementById('getNumber').value = '';
      link.innerHTML = '';
     }
    });
  }
  for (let elem in number) {
   if (/\d/.test(number[elem]) === false) {
    swal({
      title: "Oops\!",
      text: `Invalid number \"${number}\".`,
      icon: "error",
      dangerMode: true,
      buttons: 'Clear feed',
     })
     .then((resetFeed) => {
      if (resetFeed) {
       document.getElementById('getNumber').value = '';
       link.innerHTML = '';
      }
      swal({
       title: 'Feed cleared.',
       icon: 'success'
      });
     })
     .then(() => {
      swal({
       text: 'Provide a valid number.',
       icon: 'info',
       button: 'Proceed'
      });
     });
   }
  }
  // else {
  number = number.replace(number[0], '234');

  link.innerHTML = encodeURI('https:\/\/wa.me/' + number + '\?text=' + message);
  // }
 });
 //ref root node and selection button
 //let link
 let trigger = document.querySelectorAll('.container .output-controls button')[2];

 //add event listener 
 trigger.addEventListener('click', function() {
  //append selection to variable link
  if (document.getElementById('getText').value == '' || (
    document.getElementById('getNumber').value == '' && document.getElementById('getText').value == '')) {
   swal({
    title: 'Oops\!',
    text: 'Empty feeds, there\'s nothing to copy.',
    icon: 'info'
   });
  }
  else {
   const selection = window.getSelection();

   //save current selection
   const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

   //select the link content
   const range = document.createRange();
   range.selectNodeContents(link);
   selection.removeAllRanges();
   selection.addRange(range);

   //copy to clipboard
   try {
    document.execCommand('copy');
    trigger.innerHTML = 'Copied to clipboard';
    swal({
      title: 'Link copied to clipboard',
      icon: 'success',
      buttons: ['exit', 'reset feed'],
      dangerMode: true
     })
     .then((resetFeed) => {
      if (resetFeed) {
       document.getElementById('getText').value = '';
       document.getElementById('getNumber').value = '';
       link.innerHTML = '';
       document.querySelectorAll('.container .output-controls button')[2].innerHTML = 'Copy link';
      }
     })
   }
   //unable to copy 
   catch (err) {
    trigger.innerHTML = 'copy';
   }
   //restore all previous all selection
   selection.removeAllRanges();
   currentRange && selection.addRange(currentRange);
  }
 });
 document.querySelectorAll('.container .output-controls button')[0].addEventListener('click', () => {
  //reset f8eilds
  document.getElementById('getText').value = '';
  document.getElementById('getNumber').value = '';
  link.innerHTML = '';
  document.querySelectorAll('.container .output-controls button')[2].innerHTML = 'Copy link';
 });