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


// changeTitle 
const titleRight = document.querySelectorAll('.section__right_title');

let index = 0

const changeTitle = n => {
  for (h1 of titleRight) {
    h1.classList.remove('active__title');
  }
  titleRight[n].classList.add('active__title');
}

const nextTitle = () => {
if (index == titleRight.length -1) {
  index = 0;
  changeTitle(index);
} else {
  index++;
  changeTitle(index);
}
}

const prevTitle = () => {
  if (index == 0) {
    index = titleRight.length -1;
    changeTitle(index);
  } else {
    index--;
    changeTitle(index);
  }
  }

next.addEventListener('click',nextTitle)
prev.addEventListener('click',prevTitle)