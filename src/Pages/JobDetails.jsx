import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobDetails = () => {
    const {id} = useParams();
    const[job, setJob] = useState([])
   useEffect(() => {
    fetch(`http://localhost:5173/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
   }, [])

   const handleApply = async() => {

   }


  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <h3>JobDetails: {id}</h3>
        <h2>{job.jobTitle}</h2>
        <button className='bg-red px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails