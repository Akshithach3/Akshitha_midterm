document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var navlinks=document.getElementById("navlinks");
function showmanu(){
    navlinks.style.right="0";
}

function hidemanu(){
    navlinks.style.right="-200px";
}
