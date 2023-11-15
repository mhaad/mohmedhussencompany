// Loading Page
window.onload = function () {
    let loadingElement = document.querySelector(".loading");
    setTimeout(function () {
        loadingElement.style.setProperty("display", "none")
    }, 1000)
}
// Active Effects
function addActive(elemens) {
    elemens.forEach(ele => {
        ele.addEventListener("click", () => {
            addRemove(elemens)
            ele.classList.add("active")
        })
    });
}
function addRemove(elemens) {
    elemens.forEach(ele => {
        ele.classList.remove("active")
    });
}
// Nav Farst Active 
let navUlFirst = document.querySelectorAll("#first li.nav-item > a.nav-link ");
addActive(navUlFirst)
// Nav Second Active 
let navUlSecond = document.querySelectorAll("#second li  a.dropdown-item ");
addActive(navUlSecond)
// Nav Button 
function buttonEffect() {
    let navButton = document.querySelector("nav button");
    navButton.onclick = () => {
        navButton.classList.toggle("active")
        if (navButton.classList.contains("active")) document.querySelector(".collapse").style.setProperty("display", "flex", "important")
        else document.querySelector(".collapse").style.setProperty("display", "none")
    }
}
buttonEffect()

// List Colors
let openListColors = document.querySelector("#colors>div");
openListColors.onclick = () => {
    openListColors.classList.toggle("active")
}
// Chenges Colors
let colorListli = document.querySelectorAll("#list-colors li");
document.documentElement.style.setProperty('--color--', sessionStorage.getItem("color"));
colorListli.forEach((ele) => {
    ele.style.setProperty("background-color", ele.getAttribute("data-color"))
    ele.addEventListener("click", () => {
        sessionStorage.setItem("color", ele.getAttribute("data-color"));
        document.documentElement.style.setProperty('--color--', sessionStorage.getItem("color"));
    })
})
// Scrool Top And Animtion Show 
// Sceool Top
let scroolTop = document.querySelector(".scrool-top");
scroolTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// Animtion Show
let allAnimtionInPage = document.querySelectorAll(".ani");
window.onscroll = function () {
    let numScrool = window.scrollY;
    // Sceool Top
    if (numScrool > 600) {
        scroolTop.style.setProperty("display", "block")
    } else {
        scroolTop.style.setProperty("display", "none")
    }
    // Animtion Show
    allAnimtionInPage.forEach(ani => {
        let aniScrool = ani.offsetTop - 600;
        // console.log(numScrool)
        if (numScrool >= aniScrool) {
            ani.classList.add("aniShow")
        } else {
            ani.classList.remove("aniShow")
        }
    })
    // Skills Animtion
    let allAniSkills = document.querySelectorAll(".skills .ani");
    allAniSkills.forEach(skill => {
        if (skill.classList.contains("aniShow")) {
            skill.style.width = skill.getAttribute("data-width");
        } else {
            skill.style.width = "30%";
        }
    })
}

// Active For FAQ Page 
let questionBox = document.querySelectorAll(".collaps .question-box");
function addFAQActive() {
    questionBox.forEach(ele => {
        ele.addEventListener("click", () => {
            addRemove(questionBox)
            ele.classList.add("active")
            ele.addEventListener("click", () => {
                ele.classList.toggle("active")
            })
        })
    });
}

addFAQActive();

// Add Date Footer
let getDateElementFooter = document.querySelector("#copy-date");
let nowYear = new Date();
getDateElementFooter.prepend(nowYear.getFullYear())