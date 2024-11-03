import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import MyJobs from "../Pages/MyJobs";
import SalaryEstimat from "../Pages/SalaryEstimat";
import UpdateJob from "../Pages/UpdateJob";
import Login from "../Component/Login";
import JobDetails from "../Pages/JobDetails";
import SignUp from "../Component/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {  path: "/", element: <Home />} ,
        {
          path:"/post-job",
          element : <PostJob />
        },

        {
          path:"/my-job",
          element : <MyJobs />
        },
        {
          path:"/salary",
          element : <SalaryEstimat />
        },
        {
          path:"/edit-job/:id",
          element : <UpdateJob />,
          loader: ({param}) => fetch(`http://localhost:5173/all-jobs/${param}`)
        },
        {
          path:"/job/:id",
          element : <JobDetails />
        }
        
      ],
    },
    {
      path:"/login",
      element: <Login/>
    },
    {
      path:"/sign-up",
      element: <SignUp/>
    }
  ]);
  

  export default router;