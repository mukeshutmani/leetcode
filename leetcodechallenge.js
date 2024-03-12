// HEY DEVELOPERS THIS IS MY LEETCODE REPPO IN THIS REPOSITORY I UPLOAD MY ALL CODE OF 30 DAYS OF JAVASCRIPT 

//   CHALLENGE #NO2
function expect(val){
    return {
        toBe: function(expected){
            if ( val !== expected ){
                throw new Error("Not Equal")
            }
        return true
        },

        notToBe: function(unexpected) {
            if ( val === unexpected){
                throw new Error('Equal')
            }
        return true
        }


    };
}

try{
    // expect(5).toBe(5)
    // expect(5).notToBe(5)
    expect(5).toBe('5')
}
catch(error){
    console.log(error.message);
}

⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭⏭

 

// CHALLENGE NO #4  👩‍💻🙌👍
function createCounter(init) {
    let count=init;
    return {
        increment: function(){
            count++;
            return count;
        },

        decrement: function(){
            count--;
            return count;

        },

        reset: function(){
            count=init;
            return count
        }
    }

}

const value=createCounter(5)

console.log(value.increment())
console.log(value.decrement())
console.log(value.reset())

            ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭








CHALLENGE NO #5 👩‍💻🙌👍

const map = function( arr, fn ) {
    const tranformArr = [];

    for( let i=0; i<arr.length;i++){
        tranformArr[i]=fn(arr[i] , i)
    }

    return tranformArr;

}

const array=[1,2,3]
const oneplus = function OnePlus(n, i){  return 42; } 
const result =map(array, oneplus) 
console.log(result)

             ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭





// CHALLENGE NO #6 👩‍💻🙌👍
// ---->
function filter(arr,fn){
    const filterarr=[];
    for (let i=0; i<arr.length; i++){
        if(fn(arr[i], i)){
            filterarr.push(arr[i]);
        }
    }
    return filterarr;
}
const array=[1,2,3]
const filterarray = function filterFunction(n,i){ return i===0}
const result = filter( array, filterarray)
console.log(result);

                     ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭



// CHALLENGE NO #7 👩‍💻🙌👍
function reduce(arr, fn ,init ){
    let total_result = init;
    for (let i=0; i<arr.length; i++){
         total_result = fn( total_result, arr[i] )
    }

    return total_result;

}

const array=[1,2,3,4,5]
const reducer_fn=function (sum_value, array_elements){
    return sum_value + array_elements*array_elements;
} 
const init =25;
const result = reduce(array , reducer_fn , init)
console.log(result)

                   ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭




// CHALLENGE NO #8 👩‍💻🙌👍
function composeFunctions(functions) {
    // If the array is empty, return the identity function
    if (functions.length === 0) {
        return function(x) { return x; };
    }
    
    return function(x) {
        // Iterate through the array of functions in reverse order
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            // Apply each function to the result of the previous function
            result = functions[i](result);
        }
        return result;
    };
}

// Example usage:
const f = x => x + 1;
const g = x => x * 2;
const h = x => x - 3;

const composedFunction = composeFunctions([f,g,h]);

// Test the composed function
console.log(composedFunction(5)); 

                         ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭




          // CHALLENGE NO #9 👩‍💻🙌👍
function argumentlength(args){
    return args.length

}
const argumment = argumentlength(1,2,3,4,87,987)
console.log(argumment)

                 ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭




             // CHALLENGE NO #10 👩‍💻🙌👍
function once(fn){
    let hasbeenCalled = true ;
    let result ;
    return function(...args){
         if ( hasbeenCalled){
             result = fn(...args);
             hasbeenCalled = false;
             return result
         }
         else {
             return undefined;
         }
    }

}

function add(a,b){
    return a+b;
}

const result = once(add)
console.log(result(2,5))
console.log(result(2,9))

         ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭


 // CHALLENGE NO #11 👩‍💻🙌👍
function memoize(fn){
    const cache = {}
    return function (...args) {
        // '[4,5]'
           const key = JSON.stringify(args)
           if (cache[key] == undefined ){
               cache[key] = fn(...args)
           }
           return cache[key]


    }
}

function sum(a,b){
    return a+b
}

const memoizedSum = memoize(sum)
console.log(memoizedSum(4,5))

               ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭


 // CHALLENGE NO #12 👩‍💻🙌👍

function addTwoPromises(promise1,promise2){
    return new Promise((resolve, reject)=>{
        Promise.all([promise1,promise2])
       .then(([value1,value2])=>{
           resolve(value1+value2)
       })
       .catch(error=>{
           reject(error)
       })
       
    });
}


const promise1 = new Promise(resolve=> resolve(2))
const promise2 = new Promise(resolve=> resolve(20))


addTwoPromises(promise1, promise2)
.then((sum)=>{
    console.log('sum of two Promises:',sum)
})
.catch(error=>{
    console.log(error)
})

⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭




 // CHALLENGE NO #13 👩‍💻🙌👍

function sleep(millis){
    return new Promise(resolve =>{
        setTimeout(resolve, millis)
    })
}

const milli= 100;
console.log('start')
sleep(milli)
.then(()=>{
    console.log('sleeping of code :',milli,'mili second')
})


 ⏭⏭⏭⏭⏭ MR GOOGLE CODER ⏭⏭⏭⏭⏭




    
       // CHALLENGE NO #14 👩‍💻🙌👍

function cancellable(fn, args, t){

   function cancelFn(){
    clearTimeout(timer)
   }
  const timer = setTimeout(()=>{
    fn(...args)
  }, t);
   return cancelFn;
}

function fn(x){
    console.log(x*x);
}
const cancelFn = cancellable(fn,2,5000)
cancelFn();






















