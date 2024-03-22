// define array

arr=[1,2,3,3]  ///here is how the array is define

// another way of define the array
arrr=new Array()

console.log(arr)
console.log(arrr)

// accesing array elememnt by the index in the arrya

console.log(arr[2])

/// want to acces the the index which is not present in the array
console.log(arr[7])    // it gives undifined



// array are mutable we can change any value of array by the index

arr[2]=100
console.log(arr)

// insert the value in array by the push function 

num = [4,5,6,7,4,5,6,7]
num.push(500)
console.log(num)
                               // with the help of this push method we can add many elemnen tin array
                               // push push and ad the element in the last of the array
num.push(50,60,70,80,90)
console.log(num)



// unshift  method is used to add the value in the array 

num.unshift(90)
console.log(num) // it used in the add ement int he bigginig of then array


// concat
// it combime the two aray in single array

let a1=[1,2,3]
let a2 = [5,6]
let r= a1.concat(a2)
console.log(r)

// size   used .length
console.log(r.length)


// convert array into string

char=['a','y','u','s','h','', 's','e','n']

// join 
console.log(char.join())
console.log(char.join(" "))
console.log(char.join('&'))

console.log(typeof char)
// slicing the values
nums=[1,3,4,5,6,7,8,9,7,6,5,4,]
console.log(nums.slice(2,5))
console.log(nums.slice(4,-8))
console.log(nums.slice(2,4))


// check the value present ornot

console.log(nums.indexOf(9)) // reutrn the index o0f the artray
console.log(nums.indexOf(54))   // if the value is not poresent teha array so it give -1



// sort the arrray 
let my_arr=[50,48,1,13,2,14]
my_arr.sort((a,b) => b-a)
console.log(my_arr)