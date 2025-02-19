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
