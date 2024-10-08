// 1. initialize an object
// 2. loop through string
// 3. check if the string does not exist in object, if yes set the object to 1
// 4. check if it does exist, if yes do an increment
// 5. initialize a variable to track how many times it appears
// 6. initialize a variable to track what character that appear most of a time
// 7. loop in object
// 8. check if object is greater or equal to maximum number, if yes set the maximum number equal to object, if yes set the character to variable you loop in

function maxChar (str) {
    let obj = {} //initializes an empty object, this is where the 'str' stored.
    
    for(let char of str){ // the char will iterate in every input in 'str'
      !obj[char] ? obj[char] = 1 :  obj[char] ++ // using ternary we check if the char of str does not exist in obj set obj[char] = 1. if it does, do an increment.
    }
    
    let maxNum = 0 //set to zero and track how many times it appears.
    let maxCharacter = '' //character that appear most of a time.
    
    for(let n in obj){ //the n will iterate over obj
        if(obj[n] >= maxNum){ // check if obj[char] is greater than or equal to maxNum
            maxNum = obj[n]
            maxCharacter = n
            
        }
        
    }
    
  console.log(obj) // display the 'obj'
  console.log(`${maxCharacter} appears ${maxNum} times`) // display the character that appear most of a time and display how many times it appears.
}

maxChar('hiiii') // called the function and pass some data in parameter.
