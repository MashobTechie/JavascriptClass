// DOM
// DOM : document object model

// It allows us to perform an action on html elements through javascript.

// Methods
// getting element by id

// document.getElementById('p1').innerHTML = 'Hello World';

 

// const ourParagraph  = document.getElementById('p1'); 
// ourParagraph.innerHTML = 'New OPOPra'
// ourParagraph.style.color = 'red'

// getting element by classname]
const p2 = document.getElementsByClassName('p2');
// p2.innerHTML = 'New paragraph'

// document.getElementsByClassName('p2') = 'new paragraph';



// getting element by tagname

document.getElementsByTagName('p').innerHTML = 'Tagname p'



// QuerySelector
// For ID
document.querySelector('#p1').innerHTML = 'Query ID';

// For Class
document.querySelector('.p2').innerHTML = 'Query Class'

// For Tag
document.querySelector('p').innerHTML = 'Query Tag'




// Assignment
// Write different with no content in them, then use JS to crete a text.
// Read more on creating, deleting elements with DOM manipulation
// read on the differences between innerHTML, Text Content, innerText
// Read on the differences between query selector and querySelectorAll
