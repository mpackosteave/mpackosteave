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
            title="KUMBA" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="buea" 
            title="BUEA" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="douala" 
            title="DOUALA" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="bonaberi" 
            title="BONABERI" 
            name="test"
            />
             <InputFiel  
            handleChange={handleChange} 
            value="akwa" 
            title="AKWA" 
            name="test"
            />

        </div>
    </div>
  )
}

export default Location