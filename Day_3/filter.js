// FILTERS IN JS
const nums=[2,3,4,5,6]

//nums.filter(  (num) => console.log(num) )    // it print the all the values of nums 
const newnums = nums.filter(    (num) =>  {return num<2} )
console.log(newnums)

// we can alos filter values in the array of objects