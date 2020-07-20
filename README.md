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