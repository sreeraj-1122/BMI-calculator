let weightInput = document.getElementById('weight');
let heightInput = document.getElementById('height');
let bmiBtn = document.getElementById('bmi-btn');
let displayError = document.getElementById('display');



bmiBtn.addEventListener('click', () => {


    let weight = parseFloat(weightInput.value);
    let height = parseFloat(heightInput.value) / 100;

    if (weight <= '' || height <= '' || isNaN(weight) || isNaN(height)) {
        displayError.innerHTML = 'Please enter valid values.';
        displayError.style.color = '#f00';
        return;
    }

    let bmi = weight / (height * height);
    let bmiRound = bmi.toFixed(2);


    let category;
    if (bmi < 18.5) {
        category = 'Underweight';

    }
    else if (bmi < 25 && bmi >= 18.5) {
        category = 'Normal'

    }
    else if (bmi < 40 && bmi >= 25) {
        category = 'Overweight'

    }
    else {
        category = 'Obese';
    }

    displayError.innerHTML = `Your BMI is <span>${bmiRound} </span>. <br> Category: <span> ${category} </span>.`
    displayError.style.color = '#000'

    let spanResult = document.querySelectorAll('span');

    spanResult.forEach((item) => {

        if (bmi < 18.5) {
            item.style.color = 'blue'

        }
        else if (bmi < 25 && bmi >= 18.5) {
            item.style.color = '#012e01'

        }
        else if (bmi < 40 && bmi >= 25) {
            item.style.color = 'red'

        }
        else {
            item.style.color = 'red'
        }

    })

    weightInput.focus();
})