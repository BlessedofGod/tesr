const rangeInput = document.querySelectorAll(".range__input input");
numbInput = document.querySelectorAll(".range__input_wrap input");
progress = document.querySelector(".slider .progress");

let rangeGap = 10;

numbInput.forEach(input => {
input.addEventListener("input", e =>{
let minVal = parseInt(numbInput[0].value),
maxVal = parseInt(numbInput[1].value);

if ((maxVal - minVal >= rangeGap) && maxVal <= 300) {
  if(e.target.className === "input__numb input__min"){
    rangeInput[0].value = minVal;
    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
  } else{
    rangeInput[1].value = maxVal;
    progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%";
  }

}
});
});

rangeInput.forEach(input => {
  input.addEventListener("input", e =>{
  let minVal = parseInt(rangeInput[0].value),
  maxVal = parseInt(rangeInput[1].value);

  if (maxVal - minVal < rangeGap ) {
    if(e.target.className === "range__min"){
      rangeInput[0].value = maxVal - rangeGap;
    } else{
      rangeInput[1].value = minVal + rangeGap;
    }

  }
  else{
    numbInput[0].value = minVal;
    numbInput[1].value = maxVal;
    progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
    progress.style.right = 100- (maxVal / rangeInput[1].max) * 100 + "%";
  }

  });
  });

// prise

const priceInput = document.querySelectorAll(".price__input input");
numbInputPr = document.querySelectorAll(".price__wrap input");
progressPr = document.querySelector(".price__slider .price__progress");

let priceGap = 1;

numbInputPr.forEach(input => {
  input.addEventListener("input", e =>{
  let minValPr = parseInt(numbInputPr[0].value),
  maxValPr = parseInt(numbInputPr[1].value);

  if ((maxValPr - minValPr >= priceGap) && maxValPr <= 20) {
    if(e.target.className === "input__price input_pr__min"){
      priceInput[0].value = minValPr;
      progressPr.style.left = (minValPr / priceInput[0].max) * 100 + "%";
    } else{
      priceInput[1].value = maxValPr;
      progressPr.style.right = 100- (maxValPr / priceInput[1].max) * 100 + "%";
    }

  }
  });
  });

  priceInput.forEach(input => {
    input.addEventListener("input", e =>{
    let minValPr = parseInt(priceInput[0].value),
    maxValPr = parseInt(priceInput[1].value);

    if (maxValPr - minValPr < priceGap ) {
      if(e.target.className === "price__min"){
        priceInput[0].value = maxValPr - priceGap;
      } else{
        priceInput[1].value = minValPr + priceGap;
      }

    }
    else{
      numbInputPr[0].value = minValPr;
      numbInputPr[1].value = maxValPr;
      progressPr.style.left = (minValPr / priceInput[0].max) * 100 + "%";
      progressPr.style.right = 100- (maxValPr / priceInput[1].max) * 100 + "%";
    }

    });
    });


