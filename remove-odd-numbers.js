// remove odd numbers from an array challenge
// create a function that takes an array of numbers and returns only the even values


function evensOnly(arr){
    //   declare 'evenArray' variable and set up to an empty array
      var evenArray = []
    //    loop through 'arr' starting with the first item
      for (var i = 0; i < arr.length; i++){
    //     on each item, use modulus operator '%' in conditional to check if the item is an even number
    //     if even, push into 'evenArray'
        if (arr[i] % 2 === 0){
          evenArray.push(arr[i])
        }
      }
    //    return 'evenArray'
        return evenArray 
    }
    
    console.log(evensOnly([1,2,3,4,5,6,7,8,9,10]))
    console.log(evensOnly([21,26,28,29]))