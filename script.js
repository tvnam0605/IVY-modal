const imgPosition = document.querySelectorAll('.slider-container img')
const imgContainer =document.querySelector('.slider-container')
const dotItem = document.querySelectorAll('.dot')

let index = 0
let imgNumber = imgPosition.length

imgPosition.forEach(function(image, index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click", function(){
        slider(index)
    })
})
function imgSlide(){
        index++;
        if(index>=imgNumber) {index=0}
        slider(index)
}
function slider(index){
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove('active')
    dotItem[index].classList.add('active')
}
// setInterval(imgSlide, 3000)
// $(document).ready(function(){
//     $('#menu-btn').click(function(){
//         $('menu').slideToggle();
//     });
// })



let navbar = document.querySelector('.menu');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');//
}

// let searchForm= document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick =() =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-item-container');

// document.querySelector('#cart-btn').onclick =() =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }
// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');