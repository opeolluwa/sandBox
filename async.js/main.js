//document.getElementById('selectBtn').addEventListener('click', function() {
 //make container
 let container = document.createElement('textarea');

 
 //set default styles
 container.style.padding = '0';
 container.style.margin = '0';
 container.style.border = '0';

 //set container controls 
 container.style.position = 'absolute';
 container.style.top = '0';
 container.style.left = '-9999px';

 //append value
 let text = container.value;
 document.body.appendChild(container);

 //focus and select the element assets

 container.focus();
 container.select();


 //execute copy command
 try {
  document.execCommand('copy');
 }

 catch (err) {

 }

 finally {
  document.body.removeChild(container);
 }
//});