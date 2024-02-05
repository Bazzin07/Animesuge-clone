let lang = document.querySelector(".language");
let backtotop = document.querySelector(".back-to-top");
let arrow = document.querySelector(".arrow");

let colourchange = () => {
    if(jpn.style.backgroundColor === "rgb(48, 47, 47)") {
        eng.style.backgroundColor = "rgb(48, 47, 47)";
        jpn.style.backgroundColor = "red";
    }
    else {
        eng.style.backgroundColor = "red";
        jpn.style.backgroundColor = "rgb(48, 47, 47)";
    }
};

lang.addEventListener("click",colourchange);

backtotop.addEventListener ("click",() => {
    let scrollstep = -50;
    let scrollinterval = 15;
    let scrollTarget = 0;

    var scrollIntervalId = setInterval(function() {
        if (window.scrollY > scrollTarget) {
          window.scrollBy(0, scrollstep);
        } else {
          clearInterval(scrollIntervalId);
        }
      }, scrollinterval);
    })

arrow.addEventListener("click" , () => {
    
})
