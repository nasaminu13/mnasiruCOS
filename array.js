const students = ['kendara', 'vincent', 'onyinye']

const second = ['clinton', 'tayy', 'brain']

students.push("amira")
students.push(...second)

students[5] = 'tayyib'

const last = ['timi', 'tochukwu', 'donald', 'juwon']

students.unshift(...last)

students.pop()
students.shift()

students.splice(students.indexOf('vincent'), 0, 'eseosa')
students.splice(students.indexOf('amira'), 1)

//const people = students.slice()
const people = [...students]

const numbers = [13,43,6,79,87,5]

students.pop()
people.unshift('tomba')
people.sort().reverse()

const firstT = people.find(person => person[0] == 't')
const allT = people.filter(person => person[0] == 't')
const odd = numbers.filter(number => number % 2 !== 0)
const lessThanFiveCharacters = students.filter(student => student.length <= 5)

console.log(students)
console.log(people)
console.log(students.length)
console.log([1] == [1])
console.log([students] == [people])
console.log(numbers.sort())
console.log(numbers.sort((x,y)=>x-y))
console.log(firstT)
console.log(allT)
console.log(odd)
console.log(lessThanFiveCharacters)