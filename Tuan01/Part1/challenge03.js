
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)

//     Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// §  Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// §  Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
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
    const Dolphins = [96, 108, 89]
    const Koalas = [88, 91, 110]
    let averageDol = calAverage(Dolphins)
    let averageKoalas = calAverage(Koalas)
// 2. Compare the team's average scores to determine the winner of the competition, 
// and print it to the console. Don't forget that there can be a draw, so test for that 
// as well (draw means they have the same average score)
    if (averageDol > averageKoalas) {
        console.log(`Dolphins win with ${averageDol} points`)
    } else if (averageDol < averageKoalas) {
        console.log(`Koalas win with ${averageKoalas} points`)
    } else {
        console.log(`Draw`)
    }
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a 
// team only wins if it has a higher score than the other team, and the same time a 
// score of at least 100 points. Hint: Use a logical operator to test for minimum 
// score, as well as multiple else-if blocks �
    if (averageDol > averageKoalas && averageDol >= 100) {
        console.log(`Dolphins win with ${averageDol} points`)
    } else if (averageDol < averageKoalas && averageKoalas >= 100) {
        console.log(`Koalas win with ${averageKoalas} points`)
    } else if (averageDol == averageKoalas && averageDol >= 100 && averageKoalas >= 100) {
        console.log(`Draw`)
    } else {
        console.log(`No team wins`)
    }
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when 
// both teams have the same score and both have a score greater or equal 100 
// points. Otherwise, no team wins the trophy
    const Dolphins2 = [97, 112, 101]
    const Koalas2 = [109, 95, 106]
    let averageDol2 = calAverage(Dolphins2)
    let averageKoalas2 = calAverage(Koalas2)
    if (averageDol2 > averageKoalas2 && averageDol2 >= 100) {
        console.log(`Dolphins win with ${averageDol2} points`)
    } else if (averageDol2 < averageKoalas2 && averageKoalas2 >= 100) {
        console.log(`Koalas win with ${averageKoalas2} points`)
    } else if (averageDol2 == averageKoalas2 && averageDol2 >= 100 && averageKoalas2 >= 100) {
        console.log(`Draw`)
    } else {
        console.log(`No team wins`)
    }