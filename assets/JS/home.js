
// SCROLL TO TOP FUNCTION

const mybutton = document.getElementById("myBtn");
function scrollToTopFunction() {
    if (document.body.scrollTop >= 400 || document.documentElement.scrollTop > 400) {
        mybutton.classList.remove("hide");
        mybutton.classList.add("view");
    } else {
        mybutton.classList.remove("view");
        mybutton.classList.add("hide");
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
window.onscroll = function () {
    scrollToTopFunction();
};
// SELECT LANG FUNCTIONS AND DROPDOWN 
document.getElementById("selectIcon").onclick = function(){
    document.getElementById("selectDown").classList.toggle("select__lang__active")
}
function select(){
    let langs = document.getElementsByClassName("select__lang__list__item");
    for(let i = 0 ; i<langs.length;i++){
        langs[i].onclick=function() {
            for(let j = 0 ; j<langs.length;j++){
                if(langs[j].classList.contains("selected")){
                    langs[j].classList.remove("selected")
                }
            }
            this.classList.add("selected");
            document.getElementById("langSelected").src=`${this.children[0].src}`
            document.getElementById("selectDown").classList.remove("select__lang__active")
        }
    }
}
select();


// COLLAPSE NAVBAR ON CLICKING NAV LINKS AT SMALL SCREENS
function myFunction(x) {
    if (x.matches) { 
      const navLinks = document.querySelectorAll('.nav-link')
      navLinks.forEach((l) => {
          l.onclick = function(){
            new bootstrap.Collapse(document.getElementById('navbarSupportedContent')).Collapse()
          }
      })
    }
}
  
var x = window.matchMedia("(max-width: 992px)")
myFunction(x)
x.addListener(myFunction)