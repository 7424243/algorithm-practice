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