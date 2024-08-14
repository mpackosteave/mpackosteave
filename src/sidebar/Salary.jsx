import React from 'react'
import Button from '../Component/Button'
import InputFiel from '../Component/InputFiel'

const Salary = ({handleChange,handleClick}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        
        <div className='mb-4'>
            <Button onClickHandler={handleClick} value='' title= "Hourly"/>
            <Button onClickHandler={handleClick} value='monthly' title= "Monthly"/>
            <Button onClickHandler={handleClick} value='Yearly' title= "Yearly"/>
        </div>


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
            value={20} 
            title="< 20000k" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value={40} 
            title="< 40000k" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value={60} 
            title="< 60000k" 
            name="test"
            />
              <InputFiel  
            handleChange={handleChange} 
            value={80} 
            title="< 80000k" 
            name="test"
            />

        </div>

    </div>
  )
}

export default Salary