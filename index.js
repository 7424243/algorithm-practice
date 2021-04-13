/* ----- Sales by Match ----- */
/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.*/
//Inputs: n=7, ar = [1,2,1,2,1,3,2]
function sockMerchant(n, ar) {
    if(n > 100 || n < 1) {
        return 'n must be a whole number between 1 and 100'
    }
    let pairs = {}
    let count = 0
    for(let i = 0; i < ar.length; i++) {
        let int = ar[i]
        if(int > 100 || int < 1) {
            return 'each integer in the array must be a whole number 1 and 100'
        }
        pairs[int] = pairs[int] + 1 || 1
        if(pairs[int] % 2 === 0) {
            count += 1
        }
    }
    return count
}
//O(n)