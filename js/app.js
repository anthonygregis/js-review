let name = "Anthony Gregis"
let age = 22
let isCool = true

let friends = ['Lauren', 'Cody', 'Jessica', 'Kyle', 'Nick']

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

// console.log(age)
// console.log(isCool)
// console.log(friends)
// console.log(neuralink)
// console.log(neuralink.ceo)
// console.log(neuralink.generalInfo())

const printFriends = (array) => {
    array.forEach(friend => {
        console.log(friend)
    })
}

// printFriends(friends)

// standard function
function addNumbers(num1, num2) {
    return num1 + num2
}

// function expression
const multiplyNumbers = function(num1, num2) {
    return num1 * num2
}

// arrow function
const subtractNumbers = (num1, num2) => {
    return num1 - num2
}

// DOM

const container = document.querySelector('.container')
console.log(container)

// Create an element

const headerTwo = document.createElement('h2')
headerTwo.textContent = "My First JS Review"

container.appendChild(headerTwo)

// add a class to headerTwo
headerTwo.classList.add('subtitle', 'header-two')
headerTwo.setAttribute('class', 'header-two')

//remove class from headerTwo
headerTwo.classList.remove('header-two')
console.log(headerTwo)

headerTwo.addEventListener('click', () => {
    headerTwo.textContent = "Anthony"
})

const headerThree = document.createElement('h2');
headerThree.textContent = "Friends"

container.appendChild(headerThree)
console.log(headerThree)

const list = document.createElement('ul')

friends.forEach(friend => {
    const listItem = document.createElement('li')

    listItem.textContent = friend

    list.appendChild(listItem)
})

headerThree.addEventListener('click', () => {
    container.appendChild(list)
})