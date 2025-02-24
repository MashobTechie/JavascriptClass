// append 
const body = document.body.append('Hello World', ' Good Bye', 'DOM '); // use string to append
// const appendDiv = document.body.append('div'


document.title = 'DOM Manipulation'; // change the title of the page



// appendChild
const newDiv = document.createElement('div')
// const newDiv = document.appendChild('div')

//innerHTMl
newDiv.innerHTML = `<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate et expedita cum optio atque, placeat quo vitae! Nesciunt nisi facere culpa voluptates distinctio eligendi quis laborum, rem reprehenderit assumenda deleniti!</h1>`

document.body.appendChild(newDiv)

// textContent

const myP = document.createElement('p')
myP.textContent = `<h1>     Lorem ipsum dolor sit amet consectetur adipisicing elit.

Cupiditate et expedita cum optio atque, placeat quo vitae! Nesciunt nisi facere culpa voluptates distinctio eligendi quis laborum, rem reprehenderit assumenda deleniti!</h1>`
document.body.appendChild(myP)
console.log(myP.textContent)


// innerText 
const innerP = document.createElement('p')
innerP.innerText = '        Hello            World  bye'
document.body.appendChild(innerP)
console.log(innerP.innerText)




// Adding text/content into an element
// 1. innerHTML
// 2. textContent
// 3. innerText



// creating element
const myH1 = document.createElement('h1');
myH1.textContent = 'Hello World';
document.body.appendChild(myH1)

// delete element
document.body.removeChild(myH1);