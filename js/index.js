document.addEventListener("DOMContentLoaded", function() {
    const gifImage = document.getElementById("load-image");
    gifImage.src = gifImage.src;
});

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".load-page").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("body").style.visibility = "visible";
            document.querySelector(".load-page").style.visibility = "hidden";
            document.querySelector(".load-page").style.opacity = "0";
            document.querySelector(".load-page").style.transform = "translateY(100%)";
        }, 3600);
        setTimeout(() => {
            document.querySelector(".load-page").style.display = "none";
        }, 7000);
    }
};