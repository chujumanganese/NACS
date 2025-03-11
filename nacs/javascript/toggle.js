const ruddid = document.querySelectorAll(".faq-side");
const heiight = document.getElementById("section-page-faq");

ruddid.forEach(s => {
    s.addEventListener("click", ()=>{
        s.classList.toggle("a");
        heiight.style.height = "auto";
    })
});