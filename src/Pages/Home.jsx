import React, { useEffect, useState } from 'react'
import Banner from '../Component/Banner'
import Card from './Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../Component/Newsletter';

const Home = () => {
  const [selectedCategory,setSelectedCategory] = useState(null);
  const [jobs,setJobs] =useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] =useState(1);
  const itemsPerPage = 6;

  useEffect(() =>{
    setIsLoading(true);
    fetch('http://localhost:5173/all-jobs').then(res => res.json()).then(data => {
      // console.log(data)
      setJobs(data);
      setIsLoading(false)
    })
  },[])
  // console.log(jobs)
  const [query,setQuery] =useState("");
  const handleInputChange = (event) => {
      setQuery(event.target.value)
  }

  //filter jobs by tutle
   const filteredItems = jobs.filter((job) =>job.jobTitle.toLowerCase().indexOf(query.toLocaleLowerCase()) != -1);

   //----- Radio filtring btn ------
   const handleChange = (event) => {
    setSelectedCategory(event.target.value)
   }

   // -- btn filtring fnx----
   const handleClick =(event) => {
    setSelectedCategory(event.target.value)
   }

   //calculate the index range
   const calculatePageRange = () => {
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex,endIndex};
   }

   //fxn for next page
   const nextPage = () => {
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage (currentPage +1);
    }
   }

   //fnx for preious page
   const prevPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
   }

   // main fxn 
    const filteredData =(jobs,selected,query) => {
      let filteredJobs =jobs;

      //filtering input items
      if(query) {
        filteredJobs = filteredItems;
      }

      //category filtring
      if(selected) {
        filteredJobs =filteredJobs.filter(({jobLocation,maxPrice,exprienceLevel,salaryType,employmentTime,postingDate}) => (
          jobLocation.toLocaleLowerCase() === selected.toLocaleLowerCase()  ||
          parseInt(maxPrice) <= parseInt(selected) ||
          postingDate >= selected ||
          salaryType.toLocaleLowerCase() === selected.toLocaleLowerCase() ||
          exprienceLevel.toLocaleLowerCase() === selected.toLocaleLowerCase() ||
          employmentTime.toLocaleLowerCase() === selected.toLocaleLowerCase()
        ));
        console.log(filteredJobs);
      }

      //slice data base on current page
      const {startIndex,endIndex} =calculatePageRange();
      filteredJobs = filteredJobs.slice(startIndex,endIndex)

      return filteredJobs.map((data, i) => <Card key={i} data={data}/>)
    }

    const result = filteredData(jobs, selectedCategory, query);

   
  return (
    <div>
      <Banner query={query} handleInputChange={handleInputChange}/>

      {/*main contain*/}
      <div className='bg-[#FAFAFA] md: grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>
        {/*left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick= {handleClick}/>
        </div>

        {/*jod cards */}
        <div className='col-span-2 bg-white p-4 rounded-sm'>
          {
            isLoading ? (<p className='font-medium'>Loading....</p>) : result.length > 0 ? (<Jobs  result ={result}/>) : <>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p> No data found!</p>
            </>
          } 

          {/*pagination here */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled= {currentPage === 1} 
                className='hover:underline' 
                >Previous</button>
                <span className='mx-2'>Page{currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled = {currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }


          </div>

        {/*rigth side */}
        <div className='bg-white p-4 rounded'><Newsletter/></div>
      </div>

    </div>
  )
}

export default Home