import React,{ useState } from 'react'
import './Form.css'

const Form = () => {
    const [input, setInput] = useState("");
    const handleChange = ((event) => {
    const { value } = event.target;
    setInput(value)  
    })
  return (
    <div className='form__divs'>
          <form className='form__news'>
               <div className='news__inp'>
                     <div className='input'>
                         <input placeholder='email' onChange={handleChange} value={input}/>
                     </div>
                     <button>newsletter</button>
               </div>
               <small> we are concerned about the security of your data, Read<span> Privacy Policy</span></small>        
          </form>
          
    </div>
  )
}

export default Form