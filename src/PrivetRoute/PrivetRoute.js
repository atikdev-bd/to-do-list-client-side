import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';



const PrivetRoute = ({children}) => {
    const location = useLocation();
  const { user,loading} = useContext(AuthContext);
  if(loading){
    return <h1>loading...</h1>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivetRoute;