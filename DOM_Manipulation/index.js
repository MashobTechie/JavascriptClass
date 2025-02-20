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
// read on the diffe rences between innerHTML, Text Content, innerText
// Read on the differences between query selector and querySelectorAll





const ourP = document.getElementsByClassName('p2');

 

Array.from(ourP).forEach(el => {
    el.innerHTML = 'Our Paragraphs';
});


document.getElementById('newP').textContent = 'Hello World';



// Using innerHTML: This brings everything you passs as html.
const ourDiv = document.querySelector('#ourDiv');
ourDiv.innerHTML = '<h1>Our Div</h1>'

// Using textContent: This brings everything you passs as text.Same as textContent

const newDiv = document.querySelector('#newDiv');
newDiv.textContent = '<h1>Our Div</h1>';

newDiv.style.color = 'red';
newDiv.style.display = 'block'


// Using innerText: This brings everything you passs as text. Same as textContent


// create elements: Use the createElement method to create an element. It collects the tag as the argument.
const newElement = document.createElement('h1');
newElement.textContent = 'This is our new element 2';
// After creating the element, you can display it by appending to the body or any other element.
document.body.appendChild(newElement)

function createTask() {
    const newTask = document.createElement('div');
    newTask.innerHTML = `
    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>John Doe</td>
                                <td>25</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jane Smith</td>
                                <td>30</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mike Johnson</td>
                                <td>28</td>
                            </tr>
                        </tbody>
                    </table>
                
    
    `;
    document.body.appendChild(newTask)

}



// Deleting an element: Use the remove child method to delete an element. It collects the element as the argument.
document.body.removeChild(newElement)



// Read more on events and event handler on JS.
// Differences between append and appendChild