import React from 'react'
import InputFiel from '../Component/InputFiel'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of employment</h4>

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
            value="full-time" 
            title="Full-time" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="temporary" 
            title="Temporary" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="part-time" 
            title="Part-time" 
            name="test"
            />
             <InputFiel  
            handleChange={handleChange} 
            value="full-time" 
            title="Full-time" 
            name="test"
            />

        </div>
    </div>
  )
}

export default EmploymentType