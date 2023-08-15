
document.addEventListener("scroll", function () {
    const box2 = document.querySelector(".box2");
    const box2Position = box2.getBoundingClientRect().bottom;
    if (box2Position >= window.innerHeight+500) {
        box2.classList.add("scrolled");
    } else {
        box2.classList.remove("scrolled");
    }
    const box3 = document.querySelector(".box3");
    const box3Position = box3.getBoundingClientRect().bottom;
    
    if (box3Position >= window.innerHeight+700) {
        box3.classList.add("scrolled");
    } else {
        box3.classList.remove("scrolled");
    }

    const box4 = document.querySelector(".box4");
    const box4Position = box4.getBoundingClientRect().bottom;
    console.log(window.innerHeight);
    console.log(box4Position);
    if (box4Position <= window.innerHeight+350) {
        box4.classList.add("scrolled");
    } else {
        box4.classList.remove("scrolled");
    }

    const box6 = document.querySelector(".box6");
    const box6Position = box6.getBoundingClientRect().bottom;
    if (box6Position <= window.innerHeight+200) {
        box6.classList.add("scrolled");
    } else {
        box6.classList.remove("scrolled");
    }
});
function f1(){
    var x=document.querySelector('.right .dropdown-content');
    if (x.style.display === 'none') {
        x.style.display='block';
    }
    else{
        x.style.display="none";
    }
}
function f(){
    var x=document.querySelector('.left .dropdown-content');
    if (x.style.display === 'none') {
        x.style.display='block';
    }
    else{
        x.style.display="none";
    }
}
