/* ----- 2D Array - DS ----- */
/*There are 16  hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6x6.*/
//Input: -9 -9 -9  1 1 1 
//        0 -9  0  4 3 2
//       -9 -9 -9  1 2 3
//        0  0  8  6 6 0
//        0  0  0 -2 0 0
//        0  0  1  2 4 0
//Output: 28
function hourglassSum(arr) {
    //min value posible for any index is -9
    let max = -63
    //16 hourglasses = 4 rows x 4 columns
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let sum = 0
            sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] +                arr[i+2][j+1] + arr[i+2][j+2])
            max = max < sum ? sum : max
        }
    }
    return max
}
//O(n^2)

/* ----- Arrays: Left Rotation ----- */
/*A left rotation operation on an array shifts each of the array's elements 1 unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5], then the array would become [3,4,5,1,2]. Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
Given an array a of n integers and a number, d, perform d left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.*/
//Inputs: a=[1,2,3,4,5], d=4
//Output: [5,1,2,3,4]
function rotLeft(a, d) {
    d -= a.length * Math.floor(d / a.length)
    a.push.apply(a, a.splice(0, d))
    return a
}
//O(n)

/* ----- Equalize the Array ----- */
/*Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.*/
//Input: [1,2,2,3]
//Output: 2
function equalizeArray(arr) {
    let arrObj = {};
    let maxCount = 0;
    //for each number, create a key: value pair
    for (let num of arr) {
        //if key exists, add 1. Otherwise, set to 1
        arrObj[num] = arrObj[num] + 1 || 1;
    }
    //for each value in the object, if value is higher than maxCount,   set the max count to the value
    for (let value in arrObj) {
        if (arrObj[value] > maxCount) {
            maxCount = arrObj[value];
        }
    }
    return (arr.length - maxCount);
}
//O(n)