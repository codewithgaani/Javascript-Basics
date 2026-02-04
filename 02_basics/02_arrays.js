const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes=marvel_heroes.concat(dc_heroes)
// console.log(allheroes)

//spread operator
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes)

console.log(Array.isArray("kRISHNA"));
console.log(Array.from("krishna"));

let s1=200
let s2=300
let s3=400

console.log(Array.of(s1,s2,s3))
 

