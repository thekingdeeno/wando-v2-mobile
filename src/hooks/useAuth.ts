import { useState } from "react"
import { SignupForm } from "../shared/types/forms";
import { LoginForm } from "../shared/types/forms";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { httpClient } from "../api/http";
import { useNavigation } from "@react-navigation/native";

const useAuth = () => {

    const navigation = useNavigation<any>();
    
    const [signupForm, setSignupForm] = useState<SignupForm>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        // username: "",
    });

    const [loader, setLoader] = useState(false);
    const [loginForm, setLoginForm] = useState<LoginForm>()

    const handleSignupForm = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string)=>{
        const value = e.nativeEvent.text;
        setSignupForm({...signupForm, [name]: value})
    };
    
    const handleLoginForm = (e: any)=>{
        console.log(e)
    };

    const login = ()=>{

    };

    const signup = async ()=>{
        try {
            setLoader(true)
            const url = '/register/signup'
            const response: any = await httpClient.post(url, signupForm);
            if (response.data.status) {
                navigation.navigate('Auth', {screen: 'EmailOTP'})
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
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