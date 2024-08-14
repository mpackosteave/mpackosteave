import React from 'react'
import InputFiel from '../Component/InputFiel'

const WorkExperience = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Work Experience</h4>

        <div>
            <label className='sidebar-Label-container'>
                <input type="radio" 
                name='test' 
                id='test' 
                value= "" 
                onChange={handleChange}/>
                <span className='checkmark'></span>Any experience
            </label>

            <InputFiel  
            handleChange={handleChange} 
            value="Internship" 
            title="Internship" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value="Work remotly" 
            title="Work remotly" 
            name="test"
            />

        </div>
    </div>
  )
}

export default WorkExperience