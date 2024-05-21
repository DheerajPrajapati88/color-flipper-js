const colors=["green","yellow","blue","orange","gray","pink"]
const btn=document.querySelector(".btn");
const simple=document.querySelector(".simple")
const main=document.querySelector('.main')
btn.addEventListener('click',function(){
    const random=Math.floor(Math.random()*colors.length);
  main.style.backgroundColor=colors[random]
  simple.textContent=colors[random]

})