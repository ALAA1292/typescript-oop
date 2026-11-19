let y:number=5
let x:number|string="g"
let arr: number[]=[9,8,7]
let arr2: (number|string)[]=[4,"h"]
let arr3:Array<number|string>=[4,"h"]

let matrix:number[][]=                          //array of number array
[
    [1,2,3],
    [1,2,3],
    [1,2,3],
]

let tupil:[string,number]=["s",1]            //tupil has fixed length ,with position type
tupil.push("hi")                              //but we can push with intiative types i decided from begining
tupil.push("hi")

let tupil2:readonly[string,number]=["s",1]            //readonly==tupil has fixed length ,with position type


//type alias accepts primitive and non-primitive 
type UserType={
    name:string,
    age:number,
    isAdmin?:true               //can be existed or not

}
type RoleType={
    role?:string
} 
//intersection sign(for merging two types)
type mergeType=UserType & RoleType
let user:mergeType={
    name:"alaa",
    age:33,
    isAdmin:true
}
 

////////////////
enum roleEnum{
    user="user",
    admin="admin"
}


function show<t>(val:t, times:number): t[]{
    return Array(times).fill(val
)}
console.log(show<string>("j",3))


interface box<t>{
    name:t,
    age:number
}