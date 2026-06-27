const searchInput = document.querySelector(".search-input");
const sidebarBtn = document.querySelectorAll(".sidebar-buttons")
let cards = document.querySelectorAll(".project-cards");

// project count

function projectCnt(){
    cards = document.querySelectorAll(".project-cards");
    let Cnt = document.querySelector(".project-cnt");
    Cnt.textContent = cards.length;
}

projectCnt()

// focus loader 

window.addEventListener("DOMContentLoaded", function(){
    const loadedFocusBtn = document.querySelector(".sidebar-buttons");
    loadedFocusBtn.classList.add("focused"); 
});

sidebarBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        sidebarBtn.forEach(i => {
            i.classList.remove('focused')
        })
        this.classList.add("focused")
    });
})

// search

searchInput.addEventListener("input", function(e){
    cards = document.querySelectorAll(".project-cards");
    cards.forEach(card => {
        let cardName = card.querySelector(".Project-name").textContent.toLowerCase();
        if (cardName.includes(searchInput.value.toLowerCase()) === true){
            card.style.display = "grid";
        }
        else card.style.display = "none";
    })
});

// delete button

let editDeleteBtn = document.querySelector(".edit-delete-btn")
let menuOpen = document.querySelector(".menu");

editDeleteBtn.addEventListener("click",function(){
    menuOpen.classList.toggle("visible");
});

document.addEventListener("click",function(e){
    if (e.target != editDeleteBtn){
        menuOpen.classList.remove("visible");
    }
})

let Delete = document.querySelector(".delete")
const mainDeleteBtn = document.querySelector(".main-delete-btn")

Delete.addEventListener("click",function(){
    cards.forEach(card => {
        card.classList.toggle("shaking");
    });
    mainDeleteBtn.classList.toggle("active");
});

mainDeleteBtn.addEventListener("click", function(){
    cards.forEach(card => {
        if (card.querySelector(".card-checkbox").checked === true){
            card.remove();
        }
        else card.classList.toggle("shaking");
    });
    mainDeleteBtn.classList.toggle("active");
    projectCnt();
}); 

// mobile 

const MobileBtns = document.querySelectorAll(".mobile-nav-btn")

MobileBtns.forEach(btn => {
    btn.addEventListener("click", function(){
        MobileBtns.forEach(i => {
            i.classList.remove("active")
        });
        this.classList.add("active");
        let current = this.textContent.trim();
        sidebarBtn.forEach(btn => {
            if (btn.textContent.trim() ===  current) {
                sidebarBtn.forEach(i => {
                    i.classList.remove('focused')
                })
                btn.classList.add("focused")
            }
        })      
    });    
});

