
function palindrome(word) {
    // you can only write your code here!
    
let message ='';
    for(let i= word.length-1;i>=0;i--){
       message = message + word[i];
    }
    if( message === word){
      return true;
    }else{
         return false;
    }
    
    
  }

console.log(palindrome("civic"))       // true
console.log(palindrome("katak"))       // true
console.log(palindrome("kasur rusak")) // true
console.log(palindrome("kupu-kupu"))   // false
console.log(palindrome("lion"))        // false
