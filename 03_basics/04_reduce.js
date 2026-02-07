const myNums=[1,2,3,4]

//with function
// const mytotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval }`);
    
//     return acc+currval;
// },0)

//with arrow function
// const mytotal=myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(mytotal);

const shoppingCart=[
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "css course",
        price: 2002,
    },
    {
        itemName: "full stack course",
        price: 4999,
    }
]

const pricetopay=shoppingCart.reduce((acc,item)=>acc + item.price,0)
console.log(pricetopay);
