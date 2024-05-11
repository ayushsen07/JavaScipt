/**
 * for of loop := this is used for the looping in map and in an any array
 * for in loop := this s used for the looping in objects 
 * 
 */

// for of loop
const arr = [1,23,45,556]
for (const value of arr) { // in arr
    console.log(value)
    
}

// in maps
const map = new Map()
map.set('in' , 'india')
map.set('uk', 'united kingdom')
map.set('fr','france')
//console.log(map);

//for (const key of map) {// by key it give all thing in the form of array
for (const [key,value] of map) {   // this give both key and value
    

    console.log(key , '=', value); 
    
}



// in OBJECT
const myObject={
    name :'ayush',
    id :'sen12',
    surname:'sen'

}
//    for (const info of myObject) {   // in for of loop it give OBJECt are not iterable
//     console.log(info);
//    }


   /**
    * so or this we used for in loop
    */

   const myobject={
    name :'ayush',
    id :'sen12',
    surname:'sen'

}
for (const value in myobject) {
    console.log(myObject[value]); // this give the object in object
   
}

// can we use this for in loop in array
const nums=[2,3,4,5,6]
for (const num in nums) {
  // console.log(num);     // yes we use in array also but in passing of key it give key means iteration value
   console.log(nums[num]);
}