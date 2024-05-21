const colors=[0,1,2,3,4,5,6,7,8,9,"A","B",'C','D','E','F'];
const btn=document.querySelector(".btn");
const hex=document.querySelector(".hex");
const  main=document.querySelector('.main');


btn.addEventListener('click',function(){
    let hexColor="#";
    
    for(let i=0;i<6;i++){
           hexColor=hexColor+colors[displayColor()];
    }
    main.style.backgroundColor=hexColor
    hex.textContent=hexColor
})

function displayColor(){

    return Math.floor(Math.random()*colors.length);
}

