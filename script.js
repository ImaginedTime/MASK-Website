let headerAbout = document.querySelector(".header-about");

headerAbout.addEventListener("mouseover", () => {
    let headerAboutOptions = document.querySelector(".header-about-options");
    headerAboutOptions.style.display = "block";
});

headerAbout.addEventListener("mouseleave", () => {
    let headerAboutOptions = document.querySelector(".header-about-options");
    headerAboutOptions.style.display = "none";
});



let slideIndex = -1;
showSlides();
let slideShow = setInterval(showSlides, 3000); // Change image every 3 seconds

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    slideIndex--;
    clearInterval(slideShow);
    showSlides();
    slideShow = setInterval(showSlides, 3000);
}

function currentSlide(n)
{
    let dots = document.getElementsByClassName("dot");

    for(let i = 0; i < dots.length; i++)
        dots[i].classList.remove("active");
    
    dots[n].classList.add("active");
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++)
        slides[i].style.display = "none";

    slideIndex++;
    // for wrapping back to the start
    slideIndex %= slides.length;
    if(slideIndex < 0)
        slideIndex = slides.length - 1;

    slides[slideIndex].style.display = "flex";
    slides[slideIndex].style.justifyContent = "center";
    slides[slideIndex].style.alignItems = "center";

    currentSlide(slideIndex);
}