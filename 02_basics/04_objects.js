const tinderuser=new Object()

tinderuser.id="123ab"
tinderuser.name="ram"
tinderuser.isloggedin=false

//console.log(tinderuser);
const regularuser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"KRISHNA",
            lastname:"Bhatt"
        } 
    }
}
//console.log(regularuser.fullname.userfullname);

const obj1={1:"A",2:"B"}
const obj2={3:"c",4:"d"}

//const obj3 =Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3);

//To get the keys and its return type is array
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));

const course={
    coursename: "js in hindi",
    price: "99",
    courseInstructor:"Krishna"
}
//Object destructure
const {courseInstructor:instructor}=course
console.log(instructor);

// {
//     name:"krishn",
//     coursename:"js ",
//     price:"free"
// }
 