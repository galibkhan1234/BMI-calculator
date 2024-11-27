document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100;

    if (!weight || !heightM || heightM <= 0 || weight <= 0) {
        document.getElementById('results').textContent = 'Please enter valid weight and height.';
        return;
    }

    const bmi = (weight / (heightM * heightM)).toFixed(1);

    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Healthy';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    document.getElementById('results').textContent = `Your BMI is ${bmi}. Category: ${category}`;
});