// challenge no2
// function expect(val){
//     return {
//         toBe: function(expected){
//             if ( val !== expected ){
//                 throw new Error("Not Equal")
//             }
//         return true
//         },

//         notToBe: function(unexpected) {
//             if ( val === unexpected){
//                 throw new Error('Equal')
//             }
//         return true
//         }


//     };
// }

// try{
//     // expect(5).toBe(5)
//     // expect(5).notToBe(5)
//     expect(5).toBe('5')
// }
// catch(error){
//     console.log(error.message);
// }



// CHALLENGE NO #4
// function createCounter(init) {
//     let count=init;
//     return {
//         increment: function(){
//             count++;
//             return count;
//         },

//         decrement: function(){
//             count--;
//             return count;

//         },

//         reset: function(){
//             count=init;
//             return count
//         }
//     }

// }

// const value=createCounter(5)

// console.log(value.increment())
// console.log(value.decrement())
// console.log(value.reset())









































