//needs to take in input from html
// needs to check if both are 0
//needs to run on tab or clickaway
//needs to display choice in result


const result = document.querySelector ('.result')




function getValues () {
    let choice1 = document.querySelector ('.choice1').value;
    let choice2 = document.querySelector ('.choice2').value;

    if (choice1 && choice2 == 0)  {
        alert('Both numbers cannot be zero!')
    } else { calculateSGD(choice1, choice2)}
}

function calculateSGD(a, b) {
    return b === 0 ? a : calculateSGD(b, a % b);
}

