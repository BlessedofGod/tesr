const houseArray = document.querySelectorAll('.section__center_item'),
wrapper = document.querySelector('.section__center_img_wrapper'),
img = document.querySelector('.section__center_img'),
title = document.querySelector('.section__center_title'),
smallText =  document.querySelector('.section__center_smalltext'),
shadow = document.querySelector('.video__wrapper'),
imgArray = [
   {img:'./assets/img/1.jpg',
    text:'1.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/2.jpeg',
  text:'2.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
},
{img:'./assets/img/3.jpeg',
    text:'3.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/4.jpeg',
    text:'4.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/5.jpeg',
    text:'5.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/6.jpeg',
    text:'6.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/7.jpeg',
    text:'7.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/8.jpeg',
    text:'8.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  {img:'./assets/img/9.jpeg',
    text:'9.Жилой комплекс небывалого масштаба с развитой инфраструктурой',
  },
  ]

// function changeImg() {


// }

function changeImg (i){
 img.src = imgArray[i].img;
 title.textContent = houseArray[i].innerText;
 smallText.textContent =imgArray[i].text;
}


function allChange(i) {
  houseArray[i].onmouseover = () => {
    wrapper.classList.add('active_img');
    changeImg (i)
    shadow.style.opacity = '0.5';
    shadow.style.transition = '0.5 ease'
  }
  houseArray[i].onmouseout = () => {
    wrapper.classList.remove('active_img');
    shadow.style.opacity = '1';
    shadow.style.transition = '0'

  }
}

allChange(0)
allChange(1)
allChange(2)
allChange(3)
allChange(4)
allChange(5)
allChange(6)
allChange(7)
allChange(8)

  console.log(houseArray)

// надо будет создать класс и прописать условия. через ковычки ` менять цифры и т д по принципу как в моментуме. innerText
