import { useState,useCallback,useEffect,useRef} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const [char , setchar] = useState(false)
  const [number, setnumber] = useState(false)
  const [password, setpassword]=useState("")
//ref hook
const  passwordref=useRef(null);


const passwordgen=useCallback(()=>{
    let pass='';
    let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (number)str+="0123456789"
    if(char)str+="!@#$%^&*()+={}"
    for (let i=1; i<count; i++){
          let char = Math.floor(Math.random()*str.length+1)
          pass += str.charAt(char);

    }
    setpassword(pass)

  
},[count,char, number])
const copyPasswordtoClipboard=useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},setpassword)




useEffect(()=>{
  passwordgen()
},[count,char, number,passwordgen])

  return (
    <>
      <div className=' w-full max-w-md bg-gray-500 py-10 shadow-md my-8 px-4 mx-auto rounded-xl text-white' >
                  <div className='flex shadow-sm  rounded overflow-hidden mb-4' >
                    <input
                    type='text'

                  className=' outline-none , w-full text-green-800 px-5'
                  placeholder='password'
                  value={password}
                  readOnly
                  ref={passwordref}
                     >
                    
                 </input>
                 <button onClick={copyPasswordtoClipboard} className=' outline-none bg-green-200 px-3 py-0.5 shrink-0'>Copy</button>
                  </div>
                  <div className='flex text-sm gap-x-2'>
                          <div className='flex items-center gap-x-1 '>
                            <input type="range" min={6} max={100} value={count}
                            className='cursor-pointer'
                            onChange={(e)=>setCount(e.target.value)}
                            />
                            <label>Length:{count} </label>
                          </div>
                          <div className='flex items-center gap-x-1'>
                            <input type='checkbox'
                            defaultChecked={number}
                            id="numberInput"
                            onChange={()=>{
                              setnumber((prev)=>!prev)
                            }}>
                            </input>
                            <label >NumAllow?</label>

                            <input type='checkbox'
                            defaultChecked={char}
                            id="numberInput"
                            onChange={()=>{
                              setchar((prev)=>!prev)
                            }}>
                            </input>
                            <label >charAllowed?</label>
                          </div>
                  </div>

      </div>
    

    </>
  )
}

export default App
