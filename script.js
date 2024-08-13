
        jQuery(document).ready(function($){
    $('.slider-img').on('click',function(){
        $('.slider-img').removeClass('active');
        $(this).addClass('active')
    })
})
const nav__bar = document.getElementById('nav__bar');
window.addEventListener('scroll', function() {
    if(window.scrollY > 50) {
        nav__bar.classList.add('scrolled');
    } else {
        nav__bar.classList.remove('scrolled');
    }
});
// const svg = document.getElementById('svg');
// const svg1 = document.getElementById('svg1');
// const svg2 = document.getElementById('svg2');
// const svg3 = document.getElementById('svg3');
// const svg4 = document.getElementById('svg4');
// const answer = document.getElementById('answer');
// const close = document.getElementById('close')
// const close1 = document.getElementById('close1')
// const answer1 = document.getElementById('answer1')
// const close2 =document.getElementById('close2')
// const answer2 = document.getElementById('answer2')
// const close3 =document.getElementById('close3')
// const answer3 = document.getElementById('answer3')
// const close4 =document.getElementById('close4')
// const answer4= document.getElementById('answer4')

// svg.addEventListener('click',function(){
//     svg.style.display="none";
//     close.style.display="block";
//     answer.style.display="block"
// })
// close.addEventListener('click',function(){
//     answer.style.display="none"
//     svg.style.display="block";
//     close.style.display="none";
// })
// svg1.addEventListener('click',function(){
//     svg1.style.display="none";
//     close1.style.display="block";
//     answer1.style.display="block"
// })
// close1.addEventListener('click',function(){
//     answer1.style.display="none"
//     svg1.style.display="block";
//     close1.style.display="none";
// })
// svg2.addEventListener('click',function(){
//     svg2.style.display="none";
//     close2.style.display="block";
//     answer2.style.display="block"
// })
// close2.addEventListener('click',function(){
//     answer2.style.display="none"
//     svg2.style.display="block";
//     close2.style.display="none";
// })
// svg3.addEventListener('click',function(){
//     svg3.style.display="none";
//     close3.style.display="block";
//     answer3.style.display="block"
// })
// close3.addEventListener('click',function(){
//     answer3.style.display="none"
//     svg3.style.display="block";
//     close3.style.display="none";
// })
// svg4.addEventListener('click',function(){
//     svg4.style.display="none";
//     close4.style.display="block";
//     answer4.style.display="block"
// })
// close4.addEventListener('click',function(){
//     answer4.style.display="none"
//     svg4.style.display="block";
//     close4.style.display="none";
// })
const icMenu =document.getElementById('icMenu');
const iClose =document.getElementById('iClose');
const mobile =document.getElementById('mobile');
icMenu.onclick = function(){
    icMenu.style.display="none",
    mobile.style.display="block"
}
iClose.onclick = function(){
    mobile.style.display="none"
    icMenu.style.display="block"

}





