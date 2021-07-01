const formula = document.querySelector('.formula');
const form = document.querySelector('form');
const userInput = document.querySelector('input');

let num1 = Math.ceil(Math.random() * 9);
let num2 = Math.ceil(Math.random() * 9);
let result = num1 * num2;

formula.textContent = `${num1} X ${num2} =`

const animationOut = () => {
    userInput.classList.remove('wrongAnswer');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(result === Number(userInput.value)){
        userInput.value = '';
        num1 = Math.ceil(Math.random() * 9);
        num2 = Math.ceil(Math.random() * 9);
        result = num1 * num2;
        formula.textContent = `${num1} X ${num2} =`;
    }else{
        userInput.value = '';
        userInput.classList.add('wrongAnswer');
        setTimeout(animationOut, 500);
    }
})