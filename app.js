const experience = document.querySelector('.experience')
const skills = document.querySelector('.skills')
const education = document.querySelector('.education')
const navbar2=document.querySelector('.navcontent-2')
const navbar1 = document.querySelector('.navcontent-1')
const navbar3=document.querySelector('.navcontent-3')
const pointer1=document.querySelector('.pointer1')
const pointer2=document.querySelector('.pointer2')
const pointer3=document.querySelector('.pointer3')
const pointer4=document.querySelector('.pointer4')

experience.addEventListener('click',()=>{
    navbar2.style.display='block'
    navbar1.style.display='none'
    navbar3.style.display='none'
    experience.classList.add('navbarclass')
    education.classList.remove('navbarclass')
    skills.classList.remove('navbarclass')

})
skills.addEventListener('click',()=>{
    navbar2.style.display='none'
    navbar1.style.display='block'
    navbar3.style.display='none'
    skills.classList.add('navbarclass')
    experience.classList.remove('navbarclass')
    education.classList.remove('navbarclass')
})
education.addEventListener('click',()=>{
    navbar2.style.display='none'
    navbar1.style.display='none'
    navbar3.style.display='block'
    education.classList.add('navbarclass')
    skills.classList.remove('navbarclass')
    experience.classList.remove('navbarclass')
})
// function scroll(){
// const scrool=window.scrollY
// console.log(scrool)
// if(scrool>360){
//   pointer2.classList.add('activepointer') 
//   pointer1.classList.remove('activepointer') 
//   pointer3.classList.remove('activepointer') 
//   pointer4.classList.remove('activepointer') 
// }
// if(scrool<360){
//     pointer1.classList.add('activepointer')
//     pointer2.classList.remove('activepointer') 
//     pointer4.classList.remove('activepointer') 
//     pointer3.classList.remove('activepointer') 

// }
// if(scrool>840){
//     pointer3.classList.add('activepointer') 
//     pointer1.classList.remove('activepointer') 
//     pointer2.classList.remove('activepointer') 
//     pointer4.classList.remove('activepointer') 
//   }
//   if(scrool>1680){
//     pointer4.classList.add('activepointer') 
//     pointer1.classList.remove('activepointer') 
//     pointer2.classList.remove('activepointer') 
//     pointer3.classList.remove('activepointer') 
//   }

// // }
// window.addEventListener('scroll',scroll)
gsap.registerPlugin(ScrollTrigger);
const tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".overall",
    start:"top 80%",
    end:"bottom 80% ",
    toggleClass:{targets:'.pointer1',className:"activepointer"},
    
  }
  
  
  })
const tl2 = gsap.timeline({
scrollTrigger:{
  trigger:".about",
  start:"top 80%",
  end:"bottom 80% ",
  toggleClass:{targets:'.pointer2',className:"activepointer"},
  
}


})
const tl3 = gsap.timeline({
  scrollTrigger:{
    trigger:".my-work",
    start:"top 80%",
    end:"bottom 80% ",
    toggleClass:{targets:'.pointer3',className:"activepointer"},
    
  }
})
  const tl4 = gsap.timeline({
    scrollTrigger:{
      trigger:".contacts",
      start:"top 80%",
      end:"bottom 80% ",
      toggleClass:{targets:'.pointer4',className:"activepointer"},
      
    }
    
    
    })
    const burgermenu = document.querySelector(".harmbugermun")
  
    const navbar=document.querySelector('.navbar')
    const building = document.querySelector('.building')
  burgermenu.addEventListener("click",()=>{
    navbar.classList.toggle('navbare')
    building.classList.toggle('buildings')
  
  })
  
