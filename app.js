const input = document.querySelector('input[type="range"]')
const animateSlider = document.querySelector('.slider-animate')
const checkbox = document.querySelector('input[type="checkbox"]')
const checkboxBg = document.querySelector('.checkbox')

checkbox.addEventListener('click', () => {
  checkboxBg.classList.toggle('active')
})

animateSlider.style.width = `${100 - input.value}%`

input.addEventListener('input', () => {
  const scale = input.value
  animateSlider.style.width = `${100 - scale}%`
})
