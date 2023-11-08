/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../providers/UseAuth";


const PrivateRoutes = ({children}) => {
   const {user,loading} =UseAuth();
   const location = useLocation();
   console.log(location.pathname); 
   if(loading){
      return <span className="loading loading-spinner text-secondary"></span>
   }
   else if(user){
     return children
   }                          
 return <Navigate state={location.pathname} to='/login'>Login</Navigate>
};

export default PrivateRoutes