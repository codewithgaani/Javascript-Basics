const user={
    username:"krishna",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);  
        console.log(this);
              
    }

}

// user.welcomeMessage() 
// user.username="sam"
// user.welcomeMessage()

// console.log(this) //this gives window global object in browser .

// function chai(){
//     let username="krish"
//     console.log(this.username)
// }
// chai()

const chai =()=>{
     let username="krish"
    console.log(this.username)
  }
//chai()

//SYNTAX : () => {}
    // const addtwo=(num1,num2)=>{
    //     return num1+num2
    // }

    //implicit return
    // const addtwo=(num1,num2) => (num1+num2)

    const addtwo=(num1,num2) => ({username:"gaani"})

    console.log(addtwo(3,4));
    