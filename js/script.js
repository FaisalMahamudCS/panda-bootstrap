const h2=document.getElementsByTagName('h2');
//console.log(h2)
for(var i=0;i<h2.length;i++){
    console.log(h2[i].innerText)
    h2[i].style.color='lightblue'
}
const backpack=document.getElementById('backpack')
backpack.style.backgroundColor='tomato'
const card=document.querySelectorAll('.card');
//console.log(card)


for(var i=0;i<card.length;i++){
    //console.log(card[i].innerText)
    card[i].style.borderRadius='30px'
}

const button = document.querySelectorAll('.btnhide')
console.log(button)


// btn.addEventListener('click',function(event){
//  event.target.style.d isplay='none'
//  });
    for(var i=0;i<button.length;i++){
        button[i].addEventListener("click", function(event) {
            alert("Hello World!");

            event.target.style.display='none'
            // button[i].style.display='none'
            // button[i].classList='d-none'

          });
        //console.log(card[i].innerText)
       // 
    }

for(var i=0;i<card.length;i++){
    //console.log(card[i].innerText)
    card[i].style.borderRadius='30px'
}
//input
const blurr=document.getElementById('blurr');
//console.log(blurr)
butt=document.getElementById('dis')
blurr.addEventListener("keyup", function(event) {
    //alert("Hello World!");
  console.log(blurr.value)
  if(event.target.value=='email'){
butt.removeAttribute('disabled')
  }
  else{
      butt.setAttribute('disabled',true)
  }
  });

blurr.addEventListener("keydown",function(){

});
var supply=document.getElementById('supply');
 console.log(supply)
 
supply.addEventListener('click',function(event){
    event.removeAttribute('src')
    event.setAttribute('src','images/shoes/shoe-3.png')
    console.log(supply)
});

var shoeimg=document.querySelectorAll('.shoe-img');
console.log(shoeimg);
for(var i=0;i<shoeimg.length;i++){
    shoeimg[i].addEventListener('mouseover',function(event){
event.target.removeAttribute('src')
event.target.setAttribute('src','images/shoes/shoe-3.png')
    })
}


//stay in touch

var subscribe=document.getElementById('subscribe');
subscribe.addEventListener('dblclick',function(event){
   event.target.style.backgroundColor='yellow' 
})

// var img=document.querySelectorAll('.card-img-top'),result;
// console.log(img)
// for(var i=0;i<img.length;i++){
// result=img[i];
// result.addEventListener('mouseover',function(){
// result.removeAttribute('src')
//  result.setAttribute('src','images/shoes/shoe-3.png')
// console.log(result)
// })
//     console.log(card[i].innerText)
//    card[i].style.borderRadius='30px'
// img.addEventListener("mouseenter",function(event){
// console.log(img[i])
// img.src="images/banner-images/headphone.png"
// });
// }