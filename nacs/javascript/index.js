$(document).ready(function(){
    // if($("#top-level-menu").css("display") == "none"){
    //     $("#hamburger").css("display") = "block"; 
    // }
});
const ham = document.getElementById("hamburger");
const to = document.getElementById("mobile-points");
const x = document.getElementById("mobile-x1");

function closeit(s, t, m){
    s.addEventListener("click", ()=> {
        t.style.display = "block";
    })
    m.addEventListener("click", ()=> {
        t.style.display = "none";
    })
}

closeit(ham, to, x); 