const navbarEl=document.querySelector(".navbar");

const BottomContEl=document.querySelector(".botttom-container")

window.addEventListener("scroll",()=>{
    console.log(window.scrollY)
    
    if(window.scrollY>BottomContEl.offsetTop-navbarEl.offsetHeight-50){
       navbarEl.classList.add("active")
    }
    else{
        navbarEl.classList.remove("active")
    }
    

})

n