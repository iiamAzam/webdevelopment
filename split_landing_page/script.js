let img1 =document.getElementsByClassName('img1')
let img2 =document.getElementsByClassName('img2')
let container =document.getElementsByClassName('container')

img1[0].addEventListener('mouseenter',()=>{
    if(container[0].classList.contains('add1')){
        container[0].classList.remove('add1') 
    }
            container[0].classList.add('add')
})
img2[0].addEventListener('mouseenter',()=>{
            if(container[0].classList.contains('add')){
                container[0].classList.remove('add') 
            }
            container[0].classList.add('add1')
})