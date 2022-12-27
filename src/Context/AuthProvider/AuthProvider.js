import React, { createContext } from 'react';

import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile} from 'firebase/auth'
import { app } from '../../Firebase/Firebase.config';




const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const AuthContext = createContext()


///create user email and password///

const createUser = (email,password)=>{

    return createUserWithEmailAndPassword(auth, email, password)

}

//update profile///
const userUpdateProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  ///handle google login///

  const googleLogin = () => {
   
    return signInWithPopup(auth, provider);
  };

const info = {createUser,userUpdateProfile,googleLogin} 

const AuthProvider = ({children}) => {
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;