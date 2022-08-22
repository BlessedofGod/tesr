const textBox = document.querySelector(".textbox"),
option = document.querySelector(".option"),
vector = document.querySelector(".footer__select__vector");


textBox.addEventListener('click',() => {
  vector.classList.toggle('active__form');
  option.classList.toggle('active__option');
})

let selectItem = document.querySelectorAll(".option__item");

selectItem.forEach(item => {
  item.addEventListener('click', selectChoose);
})

function selectChoose(){
  let text = this.innerText,
  currentText = this.closest('.footer__select_wrapper').querySelector('.select__current');
  currentText.innerText = text;
  vector.classList.remove('active__form');
  option.classList.remove('active__option');
}
