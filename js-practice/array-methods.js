const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];
// MAP
// Get an array of all names
const namesA = characters.map(character=>{
    return character.name
})
// console.log(namesA);

// Get an array of all heights
const heightsA = characters.map(character=>{
    return character.height
})
// console.log(heightsA);

// Get an array of objects with just name and height properties
const namesHeightsA = characters.map(character=>{
    return {"name" : character.name,"height":character.height}
})
// console.log(namesHeightsA);

// Get an array of all first names
const firstNamesA = characters.map(character=>{
    return character.name.split(" ")[0]
})
// console.log(firstNamesA);

// REDUCE
// Get the total mass of all characters
const totalMass = characters.reduce((previous,current)=>{
    return previous+ parseInt(current.mass)
},0)
console.log(totalMass);

// Get the total height of all characters
// Get the total number of characters in all the character names
const countOfCharacterNames = characters.reduce((total,current)=>{
    return total + current.name.length
},0)
console.log(countOfCharacterNames);

// Get the total number of characters by eye color (hint. a map of eye color to count)
const eyecolourMap = characters.reduce((answer,character)=>{
    if(answer[character.eye_color])
    {
        answer[character.eye_color]++
    }
    else{
        answer[character.eye_color]=1
    }
    return answer
},{})
console.log(eyecolourMap);

// FILTER
// Get characters with mass greater than 100
const massG100 = characters.filter(character=>{
    return character.mass > 100
})
// console.log(massG100);

// Get characters with height less than 200
const heightL200 = characters.filter(character=>{
    return character.height < 200
})
// console.log(heightL200);

// Get all male characters
const males = characters.filter(character=>{
    return character.gender === 'male'
})
// console.log(males);

// Get all female characters
const females = characters.filter(character=>{
    return character.gender === 'female'
})
// console.log(females);

// SORT
// Sort by name
const nameSort = characters.sort((character1,character2)=>{
    return character1.name < character2.name
})
// console.log(nameSort);

// Sort by mass
// Sort by height
// Sort by gender
// EVERY
// Does every character have blue eyes?
const checkEyes = characters.every(character=>{
    return character.eye_color === 'blue'
})
// console.log(`All blue eyes : ${checkEyes} `);

// Does every character have mass more than 40?
const checkMassG40 = characters.every(character => {
    return character.mass >40
})
// console.log(`All mass>40: ${checkMassG40}`);


// Is every character shorter than 200?
// Is every character male?
// SOME
// Is there at least one male character?
const checkAnyMale = characters.some(character=>{
    return character.gender === 'male'
})
// console.log(`Atleast one male: ${checkAnyMale} `);

// Is there at least one character with blue eyes?
// Is there at least one character taller than 200?
// Is there at least one character that has mass less than 50?