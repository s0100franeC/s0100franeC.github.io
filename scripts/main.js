/*
Calculate triangle area
*/

/* Activate function on button click */
document.querySelector('.triangle .calculate').addEventListener('click', function() {
    /* get input value and parse it to int */
    let a = parseInt(document.querySelector('.triangle .base').value);
    let b = parseInt(document.querySelector('.triangle .height').value);

    /* calculate result if input was not empty */
    if (!Number.isNaN(a) && !Number.isNaN(b)) {
        result = (1 / 2) * a * b;

        /* display result to the browser */
        document.querySelector('.triangle .result').innerHTML = result;
    } else {
        /* display warning that input was left empty */
        document.querySelector('.triangle .result').innerHTML = 'You have to enter data!';
    }
});

/*
Find prime numbers in the range
*/

/* activate function on button click */
document.querySelector('.prime .calculate').addEventListener('click', function() {
    /* get input value and parse it to int */
    let a = parseInt(document.querySelector('.prime .minimum').value);
    let b = parseInt(document.querySelector('.prime .maximum').value);

    /* inform user that there is no range */
    if (a == b) {
        document.querySelector('.prime .result').innerHTML = 'Please type different numbers!';
        return;
    }

    /* enable function to work if minimum and maximum are mistaken */
    if (a > b) {
        let x = b;
        b = a;
        a = x;
    }

    /* check if values are provided */
    if (!Number.isNaN(a) && !Number.isNaN(b)) {
        /* creating arrays for primes */
        let primeArray_a = [];
        let primeArray_b = [];

        /* fulfill array A with primes */
        for (let i = 2; i <= a; i++) {
            if (checkPrime(i)) {
                primeArray_a.push(i);
            }
        }

        /* fulfill array B with primes */
        for (let i = 2; i <= b; i++) {
            if (checkPrime(i)) {
                primeArray_b.push(i);
            }
        }

        /* difference of two arrays */
        primeArray_b = primeArray_b.filter(function(val) {
            return primeArray_a.indexOf(val) == -1;
        });

        /* printing final array to the browser */
        document.querySelector('.prime .result').innerHTML = primeArray_b.join(' ');

    } else {
        /* warning to the user that input was left with no data */
        document.querySelector('.prime .result').innerHTML = 'You have to enter full data!';
    }
});

/* function to return true if a number is prime */
function checkPrime(num) {
    if (num <= 1) {
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}

/*
Sort words from user input string
*/

/* Activate function on button click */
document.querySelector('.sort .calculate').addEventListener('click', function() {
    /* get user input */
    let a = document.querySelector('.sort .userText').value;

    /* check if user input is not null or empty */
    if (a == '' || a == null) {
        document.querySelector('.sort .result').innerHTML = 'Please enter data!';
    } else {
        /* split user input string to an array */
        let wordsArray = a.split(' ');
        /* delete empty string elements from the array */
        let clearedWordsArray = wordsArray.filter(function(e) {
            return e != '';
        });
        /* sorting array elements alphabetically */
        clearedWordsArray.sort();
        /* display result to the browser */
        document.querySelector('.sort .result').innerHTML = clearedWordsArray.join(' ');
    }
});