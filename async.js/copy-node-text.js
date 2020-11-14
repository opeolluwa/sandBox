//ref root node and selection button
let text = document.getElementById('cct');
let selectButton = document.getElementById('selectBtn');

//add event listener 
selectButton.addEventListener('click', function() {
 //append selection to variable text
 const selection = window.getSelection();

 //save current selection
 const currentRange = selection.rangeCount === 0 ? null : selection.getRangeAt(0);

 //select the text content
 const range = document.createRange();
 range.selectNodeContents(text);
 selection.removeAllRanges();
 selection.addRange(range);

 //copy to clipboard
 try {
  document.execCommand('copy');
  selectButton.innerHTML = 'Copied';
 }
 //unable to copy 
 catch (err) {
  selectButton.innerHTML = 'copy';
 }
 //restore all previous all selection
 selection.removeAllRanges();
 currentRange && selection.addRange(currentRange);
});