// Prototypal Inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    setName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}

// const me = new Person('Andrew', 'Mead', 27, ['Teaching', 'Biking'])
// me.setName('Alexis Turner')
// console.log(me.getBio())

// const person2 = new Person('Clancey', 'Turner', 51)
// console.log(person2.getBio())

class Student extends Person {
    constructor (firstName, lastName, age, likes, grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    getBio() {
        let bio = ''
        if (this.grade >= 70) {
            bio = console.log(`${this.firstName} is passing the course.`)
        } else {
            bio = console.log(`${this.firstName} is failing the course.`)
        }
        return bio
    } 

    updateGrade(update) {
        this.grade += update
    }
}

student1 = new Student ('Paul', 'Cullen', 39, '', 80)
student1.getBio()
student1.updateGrade(-20)
student1.getBio()