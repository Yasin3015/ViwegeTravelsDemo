let containers = document.getElementsByClassName("box");
for(let i = 0 ; i<containers.length;i++){
    containers[i].onclick = function(){
        this.children[1].classList.toggle("show");
        this.children[0].children[1].children[0].classList.toggle("fa-plus");
        this.children[0].children[1].children[0].classList.toggle("fa-minus");
    }
} 