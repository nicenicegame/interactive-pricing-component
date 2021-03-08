const input = document.querySelector('input[type="range"]')
const animateSlider = document.querySelector('.slider-animate')
const checkbox = document.querySelector('input[type="checkbox"]')
const checkboxBg = document.querySelector('.checkbox')
const priceText = document.querySelector('.price span')

let price = input.value
let originalPrice = null

checkbox.addEventListener('input', () => {
  if (checkbox.checked) {
    originalPrice = price
    price = price * 0.75
  } else {
    price = originalPrice
    originalPrice = null
  }
  priceText.innerText = `$${price}.00`
  checkboxBg.classList.toggle('active')
})

animateSlider.style.width = `${100 - ((price - 8) / 24) * 100}%`

input.addEventListener('input', () => {
  price = input.value
  animateSlider.style.width = `${100 - ((price - 8) / 24) * 100}%`
  if (checkbox.checked) {
    originalPrice = price
    price = price * 0.75
  } else {
    if (!originalPrice) {
      price = input.value
    }
  }
  priceText.innerText = `$${price}.00`
})
