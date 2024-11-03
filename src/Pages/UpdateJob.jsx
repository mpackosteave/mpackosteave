import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData, useParams } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';


const UpdateJob = () => {
    const {id} = useParams()
    // console.log(id)
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,positingDate,
        experienceLevel,CompanyLogo,employmentType,description,postedBy,skill
    } = useLoaderData()

    const [selectedOption, setSelectedOption] =useState(null);
    const {
        register,
        handleSubmit, reset,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => {
        data.skills = selectedOption;
         console.log(data);

         fetch(`http://localhost:5173/update-job/${id}`), {
            method:'PATCH',
            header: {'Content-Type' : "appliction/json"},
            body:JSON.stringify(data)
         }
         .then(res => res.json()).then((result) => {
            console.log(result)
         })

        .then(res => res.json())
        .then((result) => {
            console.log(result)
            if (result.acknowledged === true) {
                alert('Job Updated Successfully!!!')
            }
            reset()
        })
       
    };
    
    const options = [
        {value: "JavaScript",label:"JavaScript"},
        {value: "C++",label:"C++"},
        {value: "HTML",label:"HTML"},
        {value: "CSS",label:"CSS"},
        {value: "TypeScript",label:"TypeScript"},
        {value: "React.js",label:"React.js"},
        {value: "Python",label:"Python"},
        {value: "Djongo",label:"Djongo"}
    ]
  return (
    <div className='max-w-srcreen-2xl container mx-auto xl:px-24 px-4'>
    {/* form */}
    <div className='bg-[#FAFAFA] py-10px px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* 1st row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Title</label>
                    <input type="text" defaultValue={jobTitle} 
                    {...register("JobTitle")} className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"/>
                </div>
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Company Name</label>
                    <input type="text" placeholder="Ex:Mack book"
                    {...register("CompanyName")} defaultValue={companyName} className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"/>
                </div>
            </div>

             {/* 2nd row */}
             <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Mininum Salary</label>
                    <input type="text" placeholder="$20k"
                    {...register("minPrice")}  defaultValue={minPrice} className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"/>
                </div>
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Maximun Salary</label>
                    <input type="text" placeholder="$120k"
                    {...register("maxPrice")}  defaultValue={maxPrice} className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"/>
                </div>
            </div>


            {/* 3rd row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Salary Type</label>
                    <select {...register("salaryType", { required: true })}>
                        <option value={salaryType}>{salaryType}</option>
                        <option value="Hourly">Hourly</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                    </select>
                </div>
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Location</label>
                    <input type="text"
                     placeholder="Ex: Buea"
                    {...register("jobLocation")} defaultValue={jobLocation}
                    className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"/>
                </div>
            </div>

            {/*4th row*/}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Job Posting Date</label>
                    <input type="date"
                     placeholder="Ex: 2024-09-18"
                    {...register("postingDate")} defaultValue={positingDate}
                    className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Experience Level</label>
                    <select {...register("experiencelevel", { required: true })}>
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value="NoExperience">Hourly</option>
                        <option value="Internship">Internship</option>
                        <option value="Work remotly">Work remotly</option>
                    </select>
                </div>
            </div>

            {/* 5th row */}
            <div>
                <label className="block mb-2 text-lg">Required Skill Sets:</label>
                <CreatableSelect className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6 py-4" defaultValue={skill}
                onChange={setSelectedOption}
                options={options}
                isMulti
                />
            </div>

            {/* 6th row */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Company Logo</label>
                    <input type="url"
                     placeholder="Place your company logo URL:https://weshare.com/img1"
                    {...register("companylogo")} defaultValue={CompanyLogo}
                    className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"
                    />
                </div>
                <div className="lg-w-1/2 w-full">
                    <label className="block mb-2 text-lg">Employment Time</label>
                    <select {...register("employmentTime", { required: true })}>
                        <option value={employmentType}>{employmentType}</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Temporally">Temporally</option>
                    </select>
                </div>
            </div>

            {/*7th row */}
            <div className="w-full">
              <label className="block mb-2 text-lg">Job Descriptions</label>
              <textarea   className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={5}
              defaultValue={description}
              placeholder="Job Description"
              {...register("description")} />
            </div>

            {/* last row */}
            <div className="w-full">
             <label className="block mb-2 text-lg">Job Posted By</label>
             <input type="email"
                     placeholder="Your email"
                    {...register("posted by")} defaultValue={postedBy}
                    className="block w-full flex-1 borded-1 bg-white py-1.5 pl-3 
                    text-gray-900 placeholder:text-gray-300 focus:outline-none sm:text-sm sm:leading-6"
                    />
            </div>


        <input type="submit"className="block mt-12 bg-red text-white font-semibold px-5 py-3 rounded-sm cursor-pointer" />
        </form>
    </div>
</div>
  )
}

export default UpdateJob