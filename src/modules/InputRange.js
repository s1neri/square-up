class InputRange {
  selectors = {
    root: '[data-js-range]',
    input: '[data-js-range-input]',
    output: '[data-js-range-output]',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.inputElement = this.rootElement.querySelector(this.selectors.input)
    this.outputElement = this.rootElement.querySelector(this.selectors.output)
    this.bindEvents()
  }

  handInputRange = (event) => {
    this.rootElement.style.setProperty(
      '--value',
      event.target.value
    )
    this.outputElement.value = event.target.value
  }

  bindEvents() {
    this.inputElement.addEventListener('input', this.handInputRange)
  }
}

export default InputRange