console.log('Task-1')

var a = {
    name: "Ivan",
    surname: "Ivanov",
    fatherName: "Petrovich"
}
var b = {
    name: "Alexandr",
    surname: "Romanov",
}

var persons = [
    a,
    b,
    {
        name: "Vasya",
        surname: "Vasyanov",
        fatherName: "Ivanovich"
    }
]
console.log(persons)

console.log('Task-2')

for (var i in persons){
    console.log(persons[i]);
}

console.log('Task-3')

for (var i in persons){
    console.log(`${persons[i].name}
${persons[i].surname}`);
}

console.log('Task-4')

for (var i in persons) {
    if ('fatherName' in persons[i]){
        persons[i].fullName = (persons[i].surname + ' ' + persons[i].name + ' ' + persons[i].fatherName)
    }
    console.log(persons[i])   
}

console.log('Task-5')

var jsonPersons = JSON.stringify(persons);
console.log(jsonPersons)

console.log('Task-6') 

var jsonPerson = '{"name":"Roman","surname":"Alexandrov"}';
var newPerson = JSON.parse(jsonPerson);
var addperson = persons.push(newPerson);
console.log(persons)

console.log('Task-7')

var str = "<table border='1'>"
str += `<tr><td>Имя</td><td>Фамилия</td></tr>`
for (var i in persons){
    str += `<tr><td>${persons[i].name}</td><td>${persons[i].surname}</td></tr>`
}
str += "</table>"

console.log(str)
document.write(str)

console.log('Task-8')

function avg2(d = 0, e = 0)
{
    return (d + e) / 2;
}
var result = avg2(30,20);
console.log(result);

console.log('Task-9')

function sum3(d = 0, e = 0, f = 0)
{
    return d + e + f;
}
var result = sum3(40,70,10);
console.log(result);

console.log('Task-10')

function intRandom(min, max=0) {
    if (min < 0){
        min = Math.abs(min)
    }
    if (max < 0){
        max = Math.abs(max)
    }
    var random = min + Math.random() * (max - min);
    return Math.round(random);
}

console.log(intRandom(3));

console.log('Task-11')

function sum(arguments) {
    var sumArgument = 0;
    for (var argument of Object.values(arguments)) {
        sumArgument += argument;
    }
    return sumArgument;  
}

var arguments = {
    a: 1,
    b: 3,
    c: 6,
    d: 7,
}

console.log(sum(arguments));

console.log('Task-12')

var array = [1, 2, 3, 4, 5];

function splice(array, start, amount, ...items) {
  return [
    ...array.slice(0, start),
    ...items,
    ...array.slice((start + amount), array.Length),
  ]
}

console.log(splice(array,2,0,15,10));
