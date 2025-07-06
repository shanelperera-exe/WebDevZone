//Create your function below this line.
//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

var bmi = bmiCalculator(68, 1.8); 
console.log("BMI: " + bmi);
