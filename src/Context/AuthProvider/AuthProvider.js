import React, { createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { app } from "../../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const [task, setTask] =useState(null)
   

    const [loading , setLoading] = useState(false)

    const [user, setUser] = useState(null)


  const provider = new GoogleAuthProvider();

  ///create user email and password///

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email, password);
  };

  //update profile///
  const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  ///handle google login///

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };




  


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser)
       
      
    });
    return () => unsubscribe();
  }, []);


  const handleLogOut = ()=>{
    return signOut(auth).then(res =>{

    }).then(error=>{})
  }

 
  const info = { createUser, userUpdateProfile,setLoading, googleLogin,user ,handleLogOut,loading,setTask,task};

  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
