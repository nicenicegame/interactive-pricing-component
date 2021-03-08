const input = document.querySelector('input[type="range"]')
const animateSlider = document.querySelector('.slider-animate')
const checkbox = document.querySelector('input[type="checkbox"]')
const checkboxBg = document.querySelector('.checkbox')

checkbox.addEventListener('click', () => {
  checkboxBg.classList.toggle('active')
})

animateSlider.style.width = `${100 - ((input.value - 8) / 24) * 100}%`

input.addEventListener('input', () => {
  const scale = input.value
  console.log(scale)
  animateSlider.style.width = `${100 - ((scale - 8) / 24) * 100}%`
})
