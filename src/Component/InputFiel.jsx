import React from 'react'

const InputFiel = ({handleChange,value, title,name}) => {
  return ( 
    <label className='sidebar-Label-container'>
        <input type="radio" 
        name={name}  
        value= {value} 
        onChange={handleChange}
        />
        <span className='checkmark'></span>{title}
    </label>
     );
}

export default InputFiel;