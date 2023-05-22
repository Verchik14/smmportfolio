let currentIndex = 0;

function showSlides() {
    const images = document.getElementsByClassName("slider")[0].getElementsByTagName("img");

    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = "0";
    }

    currentIndex++;

    if (currentIndex > images.length) {
        currentIndex = 1;
    }

    images[currentIndex - 1].style.opacity = "1";
    setTimeout(showSlides, 3000);
}

showSlides();