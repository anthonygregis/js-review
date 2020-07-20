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

console.log(age)
console.log(isCool)
console.log(friends)
// console.log(neuralink)
console.log(neuralink.ceo)
console.log(neuralink.generalInfo())

const printFriends = (array) => {
    array.forEach(friend => {
        console.log(friend)
    })
}

// printFriends(friends)

