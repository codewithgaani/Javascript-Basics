const myarr= [0,1,2,3,4,5]
const myarr2=new Array(1,2,3,4)
//console.log(myarr[1]);

// Array Methods
// myarr.push(6)
// console.log(myarr);
// myarr.pop()

// myarr.unshift(9)
// myarr.shift()

// console.log(myarr.includes(9));
// console.log(myarr.indexOf(3));

// const newArr=myarr.join()

//slice does not manipulate original arr, splice manipulates original arr
console.log("Originalarr",myarr);

const myn1=myarr.slice(1,3)
console.log("slicedarr",myarr);
console.log(myn1);

const myn2=myarr.splice(1,3)
console.log("splicedarr",myarr);
console.log(myn2);


