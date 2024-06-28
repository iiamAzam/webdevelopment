let email=document.getElementById('email')
let pass=document.getElementById('password')
let sub=document.getElementById('sub')
let inp='';
let pss='';
let btn=document.getElementById('btn')
let  child=document.createElement('p')
child.textContent='The email is valid';
child.style.margin='10px'
child.style.color='green'


let  child1=document.createElement('p')
child1.textContent='The email is not valid';
child1.style.margin='10px'
child1.style.color='red'

let  psschild=document.createElement('p')
psschild.textContent='The password is valid';
psschild.style.margin='10px'
psschild.style.color='green'

let  psschild1=document.createElement('p')
psschild1.textContent='The password is not valid';
psschild1.style.margin='10px'
psschild1.style.color='red'


pass.addEventListener('change',(e)=>{
        pss=e.target.value
})
email.addEventListener('change',(e)=>{
         inp=e.target.value
     
})
    btn.addEventListener('click',(e)=>{
        let c=  add(inp)
        if(c){
  
          if(sub.contains(child1)){
              sub.removeChild(child1)
          }
          sub.appendChild(child)
        }
        else {
            
            if(sub.contains(child)){
          sub.removeChild(child)
      }
         
          sub.appendChild(child1)
          
        }

        let d=checkpss(pss)

        if(d){
                if(sub.contains(psschild1)){
                    sub.removeChild(psschild1)
                }
                sub.appendChild(psschild)

        }else {

            if(sub.contains(psschild)){
                sub.removeChild(psschild)
            }
            sub.appendChild(psschild1)

        }
      
    })





function add(inp){
        let atsymbol=inp.indexOf('@')
        let dotsymbol=inp.indexOf('.')

        if(atsymbol<1||atsymbol===inp.length-1){
            return false
        }
        if(dotsymbol<=atsymbol+1||dotsymbol===inp.length-1){
            return false
        }
        if (inp.indexOf("@", atsymbol + 1) !== -1) {
            return false;
        }
        if (inp.includes(" ")) {
            return false;
        }
        return true;
}


function checkpss(pss){
    let i=0;
    let i_end=pss.length;
    let letter=false;
    let symbol=false;
    let letterz="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let char="@#$%&"
    while(i<i_end){
          if(letterz.includes(pss[i])){
                letter=true;
                break
          }  
          i++;
    }
    while(i<i_end){
        if(char.includes(pss[i])){
            symbol=true;
            break;
        }
        i++;
    }
    if(letter&&symbol){
        return true
    }
    return  false
}