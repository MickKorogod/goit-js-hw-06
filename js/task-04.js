let counterValue = 0;
const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action = "decrement"]')
const valueRef = document.querySelector('#value')
btnIncrement.addEventListener('click', e => {
     counterValue += 1;
      valueRef.textContent = counterValue;
})
btnDecrement.addEventListener('click', e => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
})