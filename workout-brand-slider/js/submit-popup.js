const modalBtn = document.querySelector(".modal-btn");
const modalBg = document.querySelector(".modal-bg");
const modalClose = document.querySelector(".modal-close");

modalBtn.addEventListener("click", function(){
    modalBg.classList.add("modal-bg-active");
    setTimeout(function() {
        modalBg
    }, 4000);
});



modalClose.addEventListener("click", function(){
    modalBg.classList.remove("modal-bg-active");
})
setTimeout(click, 4000)