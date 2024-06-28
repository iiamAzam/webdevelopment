let letterz="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let char="@#$%&"
let password ="aZam@"

function check(password,letterz,char){
        let letter=false
        let splchar=false
       let i=0;
       let i_end=password.length;
       while(i<i_end){
                if(letterz.includes(password[i])){  
                        letter=true;
                        break;
                }
                i++;        
       }
       while(i<i_end){
        if(char.includes(password[i])){  
            splchar=true;
            break;
        } i++;    }

      if(letter&&splchar){
                return true
      }
return false;
}
console.log(check(password,letterz,char))
// console.log(letterz.includes(password[1]))