import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(()=>{
      let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      let retVal = ""
      if(isNumber) charset += "0123456789"
      if(isChar) charset += ".,:;-_()=*$@"
      for (var i = 0, n = charset.length; i < length; i++) {
        retVal += charset.charAt(Math.floor(Math.random() * n))
      }
      setPassword(retVal)
  },[length, isNumber,isChar])
  
  useEffect(()=>{
    passwordGenerator()
  }
  ,[length,isNumber,isChar])

  const txtPwd = useRef(null)

  const copyToClipboard = () => {
    txtPwd.current?.select()
    navigator.clipboard.writeText(password);
  }

  return (
    <>      
      <div className='w-full max-w-md mx-auto shadow-md text-orange-600 rounded-lg px-4 py-4 bg-gray-500 mt-4'>
        <h1 className='text-3xl text-center text-white my-3'>Passowrd generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">          
          <input type="text" value={password} className='outline-none w-full py-1 px-3' 
          placeholder='Password' readOnly ref={txtPwd}/>
          <button 
            className='outline-none bg-blue-600 text-white px-3 py-0.5 shrimk-0 hover:bg-blue-800'
            onClick={copyToClipboard}>
          Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-white'>Length: {length}</label>
          </div>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={isNumber} id='numberInput' 
          onChange={()=>{
            setIsNumber((prev)=>!prev)
          }}/>
          <label className='text-white'>Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input type="checkbox" defaultChecked={isChar} id='charInput' 
           onChange={()=>{
            setIsChar((prev)=>!prev)
          }}/>
          <label className='text-white'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
