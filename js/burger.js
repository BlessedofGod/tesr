// burger hander
const lineTop = document.querySelector('.line-top');
const lineBot = document.querySelector('.line-bot');
const burgerItem = document.querySelector('.header__burger');
const menu = document.querySelector ('.header__nav');



    burgerItem.addEventListener('click', () => {
    menu.classList.toggle('burg_active');
    lineTop.classList.toggle('burg_line_active');
    lineBot.classList.toggle('burg_line_active_bot');
    });
  
  document.addEventListener('click',(e) => {
    const click = e.composedPath().includes(burgerItem);
    console.log(click)
    if (!click) {
        menu.classList.remove('burg_active');
        lineTop.classList.remove('burg_line_active');
        lineBot.classList.remove('burg_line_active_bot');
    }
  })
   
  
  