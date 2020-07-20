# Javascript Review
This is my review of week 1 in JavaScript.

## Examples of Data Types

##### String
```javascript
let name = "Anthony Gregis"
```

##### Integer
```javascript
let age = 22
```

##### Boolean
```javascript
let isCool = true
```

##### Array
```javascript
let friends = ['Lauren', 'Cody', 'Jessica', 'Kyle', 'Nick']
```

##### Object

When putting a function in an object using arrow functions will result in `this` being unusable as it doesn't bind to the parent object / function

```javascript
let neuralink = {
    industry: "Neurotechnology",
    ceo: "Jared Birchall",
    yearFounded: "2016",
    founder: "Elon Musk",
    projectStatus: "Active Development",
    staffCount: 90,
    generalInfo: function() {
        return "Neuralink was founded in " + this.yearFounded + " and the current CEO is " + this.ceo + ". They are currently in " + this.projectStatus + " of the Neuralink device that will be embedded in people's brains."
    }
}
```

## Examples of Functions

##### Standard Function
```javascript
function addNumbers(num1, num2) {
    return num1 + num2
}
```

##### Function Expression
```javascript
const multiplyNumbers = function(num1, num2) {
    return num1 * num2
}
```

##### Arrow Function
```javascript
const subtractNumbers = (num1, num2) => {
    return num1 - num2
}
```

## DOM

##### Select a DOM Element
```javascript
const container = document.querySelector('.container')
```

##### Create a DOM Element
```javascript
const headerTwo = document.createElement('h2')
headerTwo.textContent = "My First JS Review"
```

##### Append DOM Element to another
```javascript
container.appendChild(headerTwo)
```

##### Set a class in DOM Element
```javascript
headerTwo.classList.add('subtitle', 'header-two')
headerTwo.setAttribute('class', 'header-two')
```

##### Remove a class in DOM Element
```javascript
headerTwo.classList.remove('header-two')
```

### DOM Event Listeners

##### DOM Event Listener (On clicking the DOM element)
```javascript
headerTwo.addEventListener('click', () => {
    headerTwo.textContent = "Anthony"
})
```

### Complex DOM Event

Loops through an array to create multiple DOM elements (list items) and adds them to an unordered list that gets appended to the div container on clicking the third header

```javascript
const list = document.createElement('ul')

friends.forEach(friend => {
    const listItem = document.createElement('li')

    listItem.textContent = friend

    list.appendChild(listItem)
})

headerThree.addEventListener('click', () => {
    container.appendChild(list)
})
```

