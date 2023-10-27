import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../components/Firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProbider = ({ children }) => {

    const [user, setuser] = useState(null);

  const [loding, setloding] = useState(true)
  const createUser = (email,name, password) => {
    return createUserWithEmailAndPassword( email, name, password);
  }

  const signeIn = (email, password) =>{
    setloding(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  useEffect(() => {
    const unSusvribe = onAuthStateChanged(auth, currenUser => {
        console.log('current valu', currenUser)
        setuser(currenUser);
        return () => {
            unSusvribe()
        }
    })
  },[])
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currenUser => {
        setuser(currenUser)
        setloding(false)
    })

    return () => {
        unSubscribe()
    }
}, [])
  const logOut = () => {
    setloding(true)
    return signOut(auth);
}


  const autInfo = {
    user,
    loding,
    logOut,
    createUser,
    signeIn
  }
  return (
    <AuthContext.Provider value={autInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider


