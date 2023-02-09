const button = document.querySelector('button')
const body = document.querySelector('body')
button.onclick = function () {
  body.classList.toggle('ckicked-body')
  button.classList.toggle('clicked-button')
}

const imgArr = [
  'https://img.freepik.com/free-photo/adorable-brown-and-white-basenji-dog-smiling-and-giving-a-high-five-isolated-on-white_346278-1657.jpg',
  'https://img.freepik.com/free-photo/head-of-tiger-sumatera-closeup-with-dark-blue-wall_488145-176.jpg',
  'https://img.freepik.com/free-photo/fantastic-toucan-on-a-branch_1205-220.jpg',
  'https://img.freepik.com/free-photo/closeup-shot-of-one-ginger-cat-hugging-and-licking-the-other-isolated-on-a-white-wall_181624-32893.jpg',
  'https://img.freepik.com/free-photo/front-view-of-funny-cute-dog-concept_23-2148786532.jpg',
  'https://img.freepik.com/free-photo/closeup-shot-of-two-baby-monkeys-embracing-in-a-forest_181624-59308.jpg',
]

const imageInSlider = document.querySelector('img')
let num = 0

const prevButton = document.querySelector('.prev')
prevButton.addEventListener('click', () => {
  num--
  if (num < 0) {
    num = imgArr.length - 1
  }
  imageInSlider.src = imgArr[num]
})

const nextButton = document.querySelector('.next')
nextButton.addEventListener('click', () => {
  num++
  if (num >= imgArr.length) {
    num = 0
  }
  imageInSlider.src = imgArr[num]
})
