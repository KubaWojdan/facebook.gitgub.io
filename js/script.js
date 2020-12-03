
var div = document.getElementById('close_this_div');
var cross = document.getElementById('cross');
var add = document.getElementById('add-account');

div.addEventListener("mouseover", function(){
    cross.style.transform = 'scale(1.5) translate(-2px, -2px)';
    cross.style.transition = "all .1s";
    cross.style.opacity = ('100%');

})

div.addEventListener("mouseout", function(){
    cross.style.transform = 'scale(1)';
    cross.style.opacity = ('50%');
})


cross.addEventListener("click", function(){
    div.style.display = 'none';

})


add.addEventListener("click", function(){
    div.style.display = 'block ';
})