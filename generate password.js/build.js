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
 }
 //unable to copy 
 catch (err) {
  trigger.innerHTML = 'copy';
 }
 //restore all previous all selection
 selection.removeAllRanges();
 currentRange && selection.addRange(currentRange);
});