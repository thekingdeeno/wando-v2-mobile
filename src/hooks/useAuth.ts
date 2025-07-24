import { useState } from "react"
import { SignupForm } from "../shared/types/forms";
import { LoginForm } from "../shared/types/forms";
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { httpClient } from "../api/http";
import { useNavigation } from "@react-navigation/native";
import { localstorage } from "../shared/utils/localstorage";

const useAuth = () => {

    const navigation = useNavigation<any>();
    
    const [signupForm, setSignupForm] = useState<SignupForm>({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        password: "",
        username: "",
    });

    const [loader, setLoader] = useState(false);
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const handleSignupForm = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string)=>{
        const value = e.nativeEvent.text;
        setSignupForm({...signupForm, [name]: value})
    };
    
    const handleLoginForm = (e: any, name: string)=>{
        const value = e.nativeEvent.text;
        setLoginForm({...loginForm, [name]: value})
    };

    const login = async ()=>{
        try {
            setLoader(true)
            const url = `authentication/login`;
            const payload = {
                email: loginForm?.email || 'wandoprim@yopmail.com',
                password: loginForm?.password || 'Password',
            }
            
            const response: any = await httpClient.post(url, payload)
            console.log(response.data.data.accessToken);
            localstorage.set('accessToken', response.data.data.accessToken)
            localstorage.set('currentUser', JSON.stringify({
                email: response.data.data.email,
                userId: response.data.data.userId
            }))
            if (response.data.status) {
                Alert.alert(response.data.message)
                navigation.popToTop();
                navigation.replace('Home', {screen: 'HomeScreen'});
            }
        } catch (error: any) {
                Alert.alert(error.message)
                console.log(error.message);
                
        } finally {
            setLoader(false)
        }
    };

    const signup = async ()=>{
        try {
            setLoader(true)
            const url = '/register/signup'
            const response: any = await httpClient.post(url, signupForm);
            if (response.data.status) {
                Alert.alert(response.data.message)
                navigation.navigate('Auth', {screen: 'EmailOTP', params: {email: signupForm.email, password: signupForm.password}})
            }
            
        } catch (error) {
            console.log(error);
        } finally {
            setLoader(false)
        }
    };

    const verifyEmailOtp = async (email: string,password: string, otp: string) => {
        try {
            setLoader(true);
            const payload = {email,password,otp}
            const url = '/authentication/otp-login'
            console.log(payload);
            const response: any = await httpClient.post(url, payload);
            console.log(response.data);
            if (response.data.status) {
                Alert.alert(response.data.message)
                navigation.replace('Intro', {screen: 'Welcome'})
            }
        } catch (error: any) {
            console.log(error);
            Alert.alert(error.message)
        } finally {
            setLoader(false);
        }
    }

    return{
        signupForm,
        loginForm,
        handleSignupForm,
        handleLoginForm,
        verifyEmailOtp,
        signup,
        login,
        loader
    };
};

export default useAuth;