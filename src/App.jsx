import { useCallback, useState, useRef } from 'react'
import './App.css'

function App() {
  const passwordRef = useRef(null)
  const [Length, setLength] = useState(8)
  
  const [NewPassword, setNewPassword] = useState("");
  const [Number, setNumber] = useState(false);
  const [Char, setChar] = useState(false);
  const passwordgenerator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Number){
      str += "0123456789";
    }
    if(Char){
      str += ")(*&^%$#@!{}[]/?>.<,|`~+_-=";
    }

    for (let i = 1; i <= Length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(index);      
    }
    setNewPassword(password)

  }, [Number,Char,Length,setNewPassword])
  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(NewPassword);
    alert("Password Copied");
  }

  return (
    <>
      
      <div className='container1'>
        <div className="small-container">
          <div className='passwordgenerator1'>
          <h1 className='passwordgenerator'>Password Generator</h1>
          </div>
          <div className="text-container">
           <h2 className='texth2' ref={passwordRef}>{NewPassword}</h2>
            <button className="copy"  onClick={copyToClipboard}>COPY</button>
          </div>
          <div className="otherdetails">
            <div className="length">
              <input 
              type="range"
              min={3}
              max={12}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length ({Length})</label>
            </div>
            <div className="numbers">
              <input 
              type="checkbox"
              defaultChecked={Number}
              onChange={() => {
                setNumber((prev) => !prev);
              }}
              />
              <label>Numbers</label>
            </div>
            <div className="characters">
              <input 
              type="checkbox" 
              defaultChecked={Char}
              onChange={() => {
                setChar((prev1) => !prev1);
              }}
              />
              <p>Characters</p>
            </div>
            <div className="generate">
              <button className='generator' onClick={passwordgenerator}>Generate</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container2'></div>
    </>
  )
}

export default App

