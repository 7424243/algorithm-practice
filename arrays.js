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

/* ----- New Year Chaos ----- */
/**/
function minimumBribes(queue) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < queue.length; i++) {
        //someone bribed over 2 times
        if (queue[i] - (i+1) > 2) { chaotic = true }
        for (let j = queue[i] - 2; j < i; j++) {
            if (queue[j] > queue[i]) { bribes++ }
        }
    }
    if(chaotic === true){
    console.log("Too chaotic")
    } else {
    console.log(bribes)
    }
}//O(n^2)

/* ----- Minimum Swaps ----- */
/*You are given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates. You are allowed to swap any two elements. Find the minimum number of swaps required to sort the array in ascending order.*/
//Input: [4, 3, 1, 2]
//Output: 3
function minimumSwaps(arr) {
    let swaps = 0
    for(let i = 0; i < arr.length; i++) {
        //find the value of the next index
        let right = i + 1
        if(arr[i] !== right) {
            let rightIndex = arr.indexOf(right, i)
            arr[rightIndex] = arr[i]
            arr[i] = right
            swaps++
        }
    }
    return swaps
}//O(n)

/* ----- Array Manipulation ----- */
/*Starting with a 1-indexed array of zeros and a list of operations, for each operation add a value to each the array element between two given indices, inclusive. Once all operations have been performed, return the maximum value in the array.*/
//Input:
//Output:
function arrayManipulation(n, queries) {
    const acc = {};
    for (const [a, b, k] of queries) {
        acc[a] =  (acc[a] || 0) + k;
        acc[b+1] = (acc[b+1] || 0) - k;
    }   
    let last = 0
    let m = 0
    for (let i=0; i<n+1; i++) {
        const curr = acc[i] || 0;
        last = last + curr;
        if (last > m) {
            m = last;
        }
    }
    return m
}//O(n)

/* ----- Simple Array Sum ----- */
/*Given an array of integers, find the sum of its elements.*/
//Input: [1, 2, 3]
//Output: 6
function simpleArraySum(ar) {
    let sum = 0
    for(let i = 0; i < ar.length; i++) {
        sum+=ar[i]
    }
    return sum
}//O(n)

/* ----- Compare Triplets ----- */
/*Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

The rating for Alice's challenge is the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge is the triplet b = (b[0], b[1], b[2]).

The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.*/
//Input: [5, 6, 7], [3, 6, 10]
//Output: [1, 1]
function compareTriplets(a, b) {
    let results = []
    let alicePoints = 0
    let bobPoints = 0
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            alicePoints++
        }
        if(a[i] < b[i]) {
            bobPoints++
        }
    }
    results.push(alicePoints)
    results.push(bobPoints)
    return results
}//O(n)

/* ----- A Very Big Sum ----- */
/*In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.*/
//Input: [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
//Output: 5000000015
function aVeryBigSum(ar) {
    let sum = 0
    for(let i = 0; i < ar.length; i++) {
        sum+=ar[i]
    }
    return sum
}//O(n)

/* ----- Diagonal Difference ----- */
/*Given a square matrix, calculate the absolute difference between the sums of its diagonals.*/
//Input: [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
//Output: 15
function diagonalDifference(arr) {
    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < arr.length; i++) {
        for(let k = 0; k < arr.length; k++) {
            //an element from the main diagonal
            if(i === k) {
                sum1+=arr[i][k]
            }
            //an element from the other diagonal
            if(i + k === arr.length - 1) {
                sum2+=arr[i][k]
            }
        }
    }
    return Math.abs(sum1 - sum2)
}//O(n^2)