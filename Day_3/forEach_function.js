players = ["sachin", "dhoni", "virat","rohit"]
players.forEach((players) => console.log(players))   // herer the foreach method for accessing the all element of array


/**
 * creation of new transformed array
 */

arr =[1,2,3,4,5,6,7]

cahr_arr = arr.map(num=>num**3)
console.log(cahr_arr)             // here the actual arrray isnot change only modify at once


/**
 * filter the array
 */

let arr1=[1,2,3,4,5,6,7,8]

let even_arr=arr1.filter((nums)=>nums%2==0)
console.log(even_arr)

/**
 * reduce
 */

const sum= [1,2,3,4,5,6,7,8,9,10].reduce((curr,next)=> curr+next)
console.log(sum)
