
task0();
task1();
task2();

function task0() {
    const Items = document.querySelectorAll(".link");
    Items.forEach(function (currentValue) {
        return currentValue.addEventListener("click", makeActive);
    });
    function makeActive(e) {
        const currentElement = e.target;
        const currentActive = document.querySelector(".active");
        if (currentActive) {
            currentActive.classList.remove("active");
            currentElement.classList.add("active");
        }
    }
}

function task1() {
    const images = ['Lada.jpg', 'cat.jpeg', '1.jpg', 'guss.jpg'];
    const imgSet = document.getElementById("imgs");
    images.forEach(function(value) {
        imgSet.innerHTML += `<img class="img" src="../assets/` + value + `" alt="image" />`;
    });
    const img = imgSet.querySelectorAll("img");
    img.forEach(function(value, index) {
        value.addEventListener("click", function(){
            let notificationNumber = document.getElementById("notifiCounter");
            notificationNumber.innerHTML = index;
        });
    });
}

function task2() {
    const openData = document.querySelector("#openTask");
    const completeData = document.querySelector("#completedTask");
    document.querySelectorAll(".compTaskEvent").forEach(function (currentValue) {
        return currentValue.addEventListener("click", function (){
            if(confirm('Did you really complete the task?')){
                if(Number(openData.innerHTML) > 0){
                    completeData.innerHTML = Number(completeData.innerHTML) + 1;
                    openData.innerHTML = Number(openData.innerHTML) - 1;
                }
            }
        });
    });
}