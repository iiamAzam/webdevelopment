let icon =document.getElementsByClassName('icon')
let q1 =document.getElementsByClassName('q1')

Array.from(icon).forEach((element,idx )=> {
    element.addEventListener('click',()=>{
        if( q1[idx].classList.contains('add')){
            q1[idx].classList.remove('add')
              element.innerHTML='arrow_drop_down'
          }
          else{
                q1[idx].classList.add('add')
            element.innerHTML='close'
          }       
    })
});





// Array.from(icon).forEach((element,idx )=> {
//     element.addEventListener('click',()=>{
//             // element.style.display='none'
//            
//     })
// });
