// input        // result
//[1,4,6,7]       // [14,12,8,2]
//[7,4,2,1]       // [2,4,8,14]
//[5]             // [10]

function reverseAndTimes (arr){
    return arr.reverse().map(num => num*2)
}
console