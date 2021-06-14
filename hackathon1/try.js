

var btn1 = document.querySelector('.btn1');
var modalbg = document.querySelector('.modal-bg');
var modalClose = document.querySelector('.modal-close');
var submitbtn = document.querySelector('.submitDetail');

console.log(btn1);
btn1.addEventListener('click', function(){
modalbg.classList.add('bg-active');
console.log("hi");
});
modalClose.addEventListener('click', function(){
    modalbg.classList.remove('bg-active');
})

