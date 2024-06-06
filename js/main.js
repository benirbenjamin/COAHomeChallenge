document.addEventListener('DOMContentLoaded', function(){

//Selecting all images containers and save them in an array
const moretxt=document.querySelectorAll('.more')
const images=document.querySelectorAll(".picture");
//Looping through selected images array
images.forEach(item=>{
    item.addEventListener('mouseenter', function(){
        const img= this.querySelector('img')
        console.log(img)
        const overlay=this.querySelector('.text-overlay')
        img.classList.add('hover-effect') 
        moretxt.forEach(item=>{
            item.classList.add('slide')
            console.log('more added')
        })
        console.log('added effect')
        overlay.classList.add('text-hover') 
        //console.log('mouse in')
        

    })
    item.addEventListener('mouseleave', function(){

        const img= this.querySelector('img')
        const overlay=this.querySelector('.text-overlay')
        img.classList.remove('hover-effect') 
        moretxt.forEach(item=>{
            item.classList.remove('slide')
        })
        overlay.classList.remove('text-hover')
               
        console.log('mouseout')
    })

})
})
