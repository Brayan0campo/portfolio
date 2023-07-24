document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".load-page").style.visibility = "visible";
    } else {
        setTimeout(() => {
            document.querySelector("body").style.visibility = "visible";
            document.querySelector(".load-page").style.visibility = "hidden";
            document.querySelector(".load-page").style.opacity = "0";
            document.querySelector(".load-page").style.transform = "translateY(100%)";
        }, 1700);
        setTimeout(() => {
            document.querySelector(".load-page").style.display = "none";
        }, 4000);
    }
};