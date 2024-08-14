import React from 'react'
import InputFiel from '../Component/InputFiel'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>

        <div>
            <label className='sidebar-Label-container'>
                <input type="radio" 
                name='test' 
                id='test' 
                value= "" 
                onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputFiel  
            handleChange={handleChange} 
            value="kumba" 
            title="Kumba" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="buea" 
            title="Buea" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="douala" 
            title="Douala" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="bonaberi" 
            title="Bonaberi" 
            name="test"
            />

        </div>
    </div>
  )
}

export default Location