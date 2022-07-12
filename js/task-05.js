const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

  function onInput  (event) {
    output.textContent = event.currentTarget.value;
      if (!output.textContent) {
        output.textContent === "Anonymous"
    }
}
input.addEventListener( "input", onInput)
