const slickPrev = document.querySelector('.slick-prev');
const slickNext = document.querySelector('.slick-next');
const next = document.querySelector('.btn-next');
const prev = document.querySelector('.btn-prev');


function slickPrevSlide(){
  document.querySelector('.slick-prev').dispatchEvent(new Event('click'));

}
function slickNextSlide(){
  document.querySelector('.slick-next').dispatchEvent(new Event('click'));
}

prev.addEventListener('click',slickPrevSlide)
next.addEventListener('click',slickNextSlide)


// // Btn:hover - при наведении мыши

// const circleLeft = document.getElementById('id-circle-left'),
// circleRight = document.getElementById('id-circle-right');



// function hover() {
//   circleRight.classList.toggle('circle-right');
//   circleLeft.classList.toggle('circle-left');
// }

// next.addEventListener('mouseenter',hover);

// btn animation

const circleLeft = document.getElementById('id-circle-left'),
circleRight = document.getElementById('id-circle-right');

function hover() {
  circleRight.classList.add('circle-right');
  circleLeft.classList.add('circle-left');
}

function deleteHover() {
  circleRight.classList.remove('circle-right');
  circleLeft.classList.remove('circle-left');
}

setInterval(hover,2000)
setInterval(deleteHover,6500)
