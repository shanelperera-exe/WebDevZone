//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

// function bmiCalculator (weight, height) {
//     var bmi = weight / Math.pow(height, 2);
    
//     var interpretation = "";
    
//     if (bmi < 18.5) {
//         interpretation = "Your BMI is " + bmi + ", so you are underweight."
//     }
//     if (bmi >= 18.5 && bmi <= 24.5) {
//         interpretation = "Your BMI is " + bmi + ", so you have a normal weight."
//     }
//     if (bmi > 24.5) {
//         interpretation = "Your BMI is " + bmi + ", so you are overweight."
//     }
//     return interpretation;
// }

var bmi = bmiCalculator(68, 1.8); 
console.log("BMI: " + bmi);
