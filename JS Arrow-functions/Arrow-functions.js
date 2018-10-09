const people = [{
        name: 'Paul',
        age: 39
    },{
        name: 'Max',
        age: 52
    },{
        name: 'Julia',
        age: 22
    }]

const findAge = people.find((person) => person.age === 22)
console.log(findAge.name)
