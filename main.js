var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var p1 = document.querySelector(".p1");
var p2 = document.querySelector(".p2");

box1.addEventListener('click', function(event){
    if(p2.classList.contains("pp")){
        p2.classList.remove("pp");
        p1.classList.remove("pp");
    }else if(p1.classList.contains("pp")){
        p1.classList.remove("pp");
    }else{
        p1.classList.add("pp");
    }

});

box2.addEventListener('click', function(event){
    if(p1.classList.contains("pp")){
        p1.classList.remove("pp");
        p2.classList.remove("pp");
    }else if(p2.classList.contains("pp")){
        p2.classList.remove("pp");
    }else{
        p2.classList.add("pp");
    }

});