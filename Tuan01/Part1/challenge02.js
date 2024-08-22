 //data1
 let marksMass = 78;
 let marksHeight = 1.69;
 let johnMass = 92;
 let johnHeight = 1.95;
 // data2
 let marksMass2 = 95;
 let marksHeight2 = 1.88;
 let johnMass2 = 85;
 let johnHeight2 = 1.76;

 const calculateBMI = (mass, height) => {
     return mass / (height * height);
 }
 const marksBMI = calculateBMI(marksMass, marksHeight);
 const johnBMI = calculateBMI(johnMass, johnHeight);

//  1. Print a nice output to the console, saying who has the higher BMI. The message 
//  is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
if (marksBMI > johnBMI) {
    console.log(`Mark's BMI is higher than John's!`);
}else if(marksBMI < johnBMI) {
    console.log(`John's BMI is higher than Mark's!`);
}else {
    console.log(`Mark's BMI is equal to John's!`);
}


//  2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
//  BMI (28.3) is higher than John's (23.9)!
if (marksBMI > johnBMI) {
    console.log(`Mark's BMI (${marksBMI}) is higher than John's!`);
}
else if(marksBMI < johnBMI) {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
}else {
    console.log(`Mark's BMI is equal to John's!`);
}
