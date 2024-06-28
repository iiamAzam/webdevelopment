let box =document.getElementById('box1')
box.addEventListener('click',()=>{
            box.classList.add('active')

})

let body=document.getElementsByTagName('body')
body[0].addEventListener('click',(e)=>{
         let child=e.target.children;
        if(!child[0].classList.contains('box'))
        {
            return  ;
        }
        else{
            box.classList.remove('active');
            return
        }
      
})