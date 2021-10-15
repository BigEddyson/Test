var Items = document.querySelectorAll(".link");
Items.forEach(function (currentValue) {
    return currentValue.addEventListener("click", makeActive);
});
function makeActive(e) {
    var currentElement = e.target;
    var currentActive = document.querySelector(".active");
    if (currentActive) {
        currentActive.classList.remove("active");
        currentElement.classList.add("active");
    }
}
