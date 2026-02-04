//singleton
//Object.create

//Object Literals
const jsuser={
    name :"Krishna",
    "full name" :"Krishna bhatt",
    age: 18,
    location: "Uttrakhand",
    email:"krishna@google.com",
    isLoggedin:false
}
//accessing
//console.log(jsuser.email)
//console.log(jsuser["email"])
//console.log(jsuser["full name"]);

jsuser.email="krishna@chatgpt.com"
//Object.freeze(jsuser)
//jsuser.email="krishna@microsoft.com"
// console.log(jsuser );

jsuser.greeting=function(){
    console.log("hello js user");
}

jsuser.greeting2=function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greeting2());



