const input = document.querySelector("#validation-input")
const validLength = parseInt(input.getAttribute("data-length"))
 
function focusOff(e) {
    if (validLength === e.currentTarget.value.length) {
     input.classList.add("valid")   
        
    }
    else { input.classList.add('invalid')}
}
 
input.addEventListener('blur',focusOff)