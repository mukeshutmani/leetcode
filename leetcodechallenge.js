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























