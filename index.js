/* ----- Sales by Match ----- */
/* There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.*/
//Inputs: n=7, ar = [1,2,1,2,1,3,2]
//Output: 2
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

/* ----- Counting Valleys ----- */
/* An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly  steps, for every step it was noted if it was an uphill, , or a downhill,  step. Hikes always start and end at sea level, and each step up or down represents a  unit change in altitude. We define the following terms:
- A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
- A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Given the sequence of up and down steps during a hike, find and print the number of valleys walked through. */
//Inputs: steps = 8, path = 'DDUUUUDD'
//Output: 1
function countingValleys(steps, path) {
    let pathArray = path.split('')
    let count = 0 
    let valley = 0
    for(let i = 0; i < pathArray.length; i++) {
        if(pathArray[i] === 'U') {
            count = count + 1
        }
        if(pathArray[i] === 'D') {
            count = count - 1
        }
        if(pathArray[i] === 'U' && count === 0) {
            valley = valley + 1
        }
    }
    return valley
}
//O(n)

/* ----- Jumping on Clouds ----- */ 
/*There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.
For each game, you will get an array of clouds numbered  if they are safe or  if they must be avoided. */
//Input: c = [0 0 1 0 0 1 0]
//Output: 4
function jumpingOnClouds(c) {
    let jumps = [];
    // Keep taking 2 jumps unless you land on a 1, then step back one.
    for (let i = 0; i < c.length + 1; i += 2) {
        if (c[i] === 1) {
        i -= 1;
        }
        jumps.push(c[i]);
    }
  return jumps.length - 1;
}
//O(n)

/* ----- Repeated String ----- */
/*There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.*/
//Inputs: s='aba', n=10
//Output: 7
function repeatedString(s, n) {
    let stringLength = s.length
    //#of a's in main chunk of repeated string
    let multiplier = Math.floor(n/stringLength)
    let aCount = 0
    for(let i = 0; i < stringLength; i++) {
        if(s[i] === 'a') {
            aCount++
        }
    }
    aCount *= multiplier
    //# of a's i partial string
    let leftovers = n - stringLength * multiplier
    for(let i = 0; i < leftovers; i++) {
        if(s[i] === 'a') {
            aCount++
        }
    }
    return aCount
}
//O(n)