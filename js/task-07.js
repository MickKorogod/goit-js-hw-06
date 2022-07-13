const input = document.querySelector('#font-size-control')
const textEl = document.querySelector ('#text')
input.addEventListener('input', (e) => {
    textEl.style.fontSize = `${e.currentTarget.value}px`
})