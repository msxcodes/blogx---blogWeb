let arr = [1,5,6,11,13,15]
// let [...test] = arr
// console.log(arr)
// console.log(test)
const obj = {...arr}
console.log(obj)

const sum = (v1,v2,v3,v4) =>{
    return v1+v2+v3+v4

}
console.log(sum(...arr))

let obj1 ={
    name:'Mohit',
    address: 'Painal'
}

console.log({...obj1 , name:'ravi'})

const obj2 = {...obj1 , name:'ravi'}

console.log(obj2)