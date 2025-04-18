import { useState } from "react"
import { SignupForm } from "../shared/types/forms";
import { LoginForm } from "../shared/types/forms";

const useAuth = () => {

    const [signupForm, setSignupForm] = useState<SignupForm>();
    const [loginForm, setLoginForm] = useState<LoginForm>()

    const handleSignupForm = () => {

    };
    
    const handleLoginForm = ()=>{

    };

    const login = ()=>{

    };

    const signup = ()=>{

    };

    return{
        signupForm,
        loginForm,
        handleSignupForm,
        handleLoginForm,
        signup,
        login,
    };
};

export default useAuth;