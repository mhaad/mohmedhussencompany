// Remove
function removeElement(elemens) {
    elemens.forEach(ele => {
        ele.classList.remove("active")
    });
}

// Slide Effects
function slideEffects(one, two) {
    for (let i = 0; i < one.length; i++) {
        one[i].onclick = function () {
            removeElement(one)
            removeElement(two)
            one[i].classList.add("active")
            two[i].classList.add("active")
        }
    }
}

function nextAndPrevClick(num, one, two) {
    removeElement(one)
    removeElement(two)
    one[num].classList.add("active")
    two[num].classList.add("active")
}

function moveSmooth(elments, idslede, one, two) {
    setInterval(function () {
        let numbersSlide = document.querySelector(`#${idslede} button.active`);
        let num = numbersSlide.getAttribute("aria-label")[numbersSlide.getAttribute("aria-label").length - 1];
        if (+num < elments - 1) {
            nextAndPrevClick(++num, one, two)
        } else {
            num = 0;
            nextAndPrevClick(num, one, two)
        }
    }, 2500)
}

function nextAndPrev(one, two) {
    nextElement.onclick = function () {
        let numbersSlide = document.querySelector("#buttonSlide button.active");
        if (+numbersSlide.getAttribute("aria-label")[6] < imgElements.length - 1) {
            let num = numbersSlide.getAttribute("aria-label")[6];
            nextAndPrevClick(++num, one, two)
        }
    }
    prevElement.onclick = function () {
        let numbersSlide = document.querySelector("#buttonSlide button.active");
        if (+numbersSlide.getAttribute("aria-label")[6] > 0) {
            let num = numbersSlide.getAttribute("aria-label")[6];
            nextAndPrevClick(--num, one, two)
        }
    }
}
// image Slide 
let imgElements = document.querySelectorAll(".slide .carousel-inner .carousel-item");
let buttonSlede = document.querySelectorAll("#buttonSlide button");
let prevElement = document.querySelector(".prev");
let nextElement = document.querySelector(".next");

slideEffects(buttonSlede, imgElements);
moveSmooth(buttonSlede.length, "buttonSlide", buttonSlede, imgElements);
nextAndPrev(buttonSlede, imgElements);

// Text Slide 
let textElmentsSeder = document.querySelectorAll(".testimonials .carousel-inner .carousel-item");
let textButtonSlede = document.querySelectorAll("#textSlide button");
slideEffects(textButtonSlede, textElmentsSeder);
moveSmooth(textButtonSlede.length, "textSlide", textButtonSlede, textElmentsSeder);

