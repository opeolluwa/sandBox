// initialize
function quoteEngine(nodeId) {
 //ref start and end point of quote engine object 
 let max = quoteEngine.length + 1;
 let min = 1;
 //avoid DRY: commit a value to a holder index such that the quote and quoter index in the root array matches
 let index = Math.round((max - min) * Math.random() + min);
 //return quote and quoter
 let quoteArr = [quoteEngine[index].quote, quoteEngine[index].quoter];
 //ref wrapper
 let container = document.getElementById(`${nodeId}`);
 //dynamically create quote node 
 let quoteContainer = document.createElement('div');
 //dynamically create quoter node
 let quoterContainer = document.createElement('small');
 //dynamically create quote node content
 let quote = document.createTextNode(quoteArr[0]);
 //dynamically create quoter node content
 let quoter = document.createTextNode(quoteArr[1]);
 //append text node to wrapper{quote and quoter}
 quoteContainer.appendChild(quote);
 quoterContainer.appendChild(quoter);
 //append quoteContainer and quoterContainer to wrapper
 container.appendChild(quoterContainer);
 quoterContainer.insertBefore(quoteContainer);
}