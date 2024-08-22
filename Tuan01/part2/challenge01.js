// Date created: 10/07/2021
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// data1 
const dolphins = [44, 23, 71]
const koalas = [65, 54, 49]

// data2
const dolphins2 = [85, 54, 41]
const koalas2 = [23, 34, 27]

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calAverage = (arr) => {
    if (arr.length == 0) {
        return ""
    }
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let tb = sum / arr.length
    return tb
}

// 2. Use the function to calculate the average for both teams
let averageDol = calAverage(dolphins)
let averageKoalas = calAverage(koalas)

let averageDol2 = calAverage(dolphins2)
let averageKoalas2 = calAverage(koalas2)

// 3. Create a function 'checkWinner' that takes the average score of each team 
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
// to the console, together with the victory points, according to the rule above. 
function checkWinner(avgDolhins, avgKoalas) {
    if(avgDolhins >= 2 * avgKoalas){
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if(avgKoalas >= 2 * avgDolhins){
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`)
    } else {
        console.log(`No team wins...`)
    }
}

// 4. Test the 'checkWinner' function
checkWinner(averageDol, averageKoalas)
checkWinner(averageDol2, averageKoalas2)