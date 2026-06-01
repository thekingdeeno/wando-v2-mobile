import { use, useState } from "react"
import { SignupForm } from "../shared/types/forms";
import { LoginForm } from "../shared/types/forms";
import { Alert, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { httpClient } from "../api/http";
import { useNavigation } from "@react-navigation/native";
import { localstorage } from "../shared/utils/localstorage";
import { useToast } from "../components/Toast/ToastContext";
import { colorScheme } from "../shared/constants/colors";
import { color } from "react-native-elements/dist/helpers";

const useAuth = () => {

    const navigation = useNavigation<any>();
    const toast = useToast()
    
    const [signupForm, setSignupForm] = useState<SignupForm>({
        firstName: "",
        lastName: "",
        email: "",
    });

    const [otpForm, setOtpForm] = useState({
        email: "",
        otp: "",
    })

    const [passwordForm, setPasswordForm] = useState({
        password: "",
        confirmPassword: "",
        strength: 0,
        color: colorScheme.divider
    })
    
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: "",
        password: ""
    })

    const [username, setUsername] = useState<string>("");

    const [delayTimeout, setDelayTimeout] = useState<any>(null);

    const [checkingUsername, setCheckingUsername] = useState<boolean>(false);
    const [usernameAvailable, setUsernameAvailable] = useState<any>(null);

    const [loader, setLoader] = useState(false);

    const handleSignupForm = (e: NativeSyntheticEvent<TextInputChangeEventData>, name: string)=>{
        const value = e.nativeEvent.text;
        setSignupForm({...signupForm, [name]: value})
    };
    
    const handleLoginForm = (e: any, name: string)=>{
        const value = e.nativeEvent.text;
        setLoginForm({...loginForm, [name]: value})
    };

    const handlePasswordForm = (e: any, name: string)=>{
        const value = e.nativeEvent.text;

        let lengthScore = 0
        if (passwordForm.password.length > 0 && passwordForm.password.length < 6) {
            lengthScore = 10
        } else if (passwordForm.password.length > 5 && passwordForm.password.length < 11) {
            lengthScore = 30
        } else if (passwordForm.password.length > 10) {
            lengthScore = 50
        } else if (passwordForm.password.length > 15) {
            lengthScore = 75
        }

        const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
        if (regex.test(passwordForm.password)){
            lengthScore += 25
        }

        if (passwordForm.password.match(/[A-Z]/)) {
            lengthScore += 25
        }
        let color = colorScheme.divider
        if (passwordForm.password.length < 25) {
             colorScheme.divider
        }
        if ( passwordForm.strength >= 25) {
         color = colorScheme.accentPink
        }
        if ( passwordForm.strength >= 50) {
         color = colorScheme.softPurple
        }
        if ( passwordForm.strength >= 75) {
         color = colorScheme.accentBlue
        }
        if ( passwordForm.strength === 100){
         color = colorScheme.successGreen
        }
        setPasswordForm({...passwordForm, [name]: value, strength: lengthScore, color})
    }

    const handleUsername = async (e: any)=>{
        const value = e.nativeEvent.text;
        setUsername(value.toLowerCase())
        if (delayTimeout) {
            clearTimeout(delayTimeout)
            setDelayTimeout(null)
        }

        if (value === "") {
            setUsernameAvailable(null)
            return
        }
        setDelayTimeout(
            setTimeout(async () => {
                setCheckingUsername(true)
                setUsernameAvailable(null)
                const res: any = await checkExisting('username', value.toLowerCase())
                if (res && res.status === true) {
                    setUsernameAvailable(res.status)
                }
                setCheckingUsername(false)
            }, 1000)
        )   
        
    }

    const login = async ()=>{
        try {
            setLoader(true)
            const url = `/authentication/login`;
            const payload = {
                email: loginForm?.email,
                password: loginForm?.password,
            }
            
            const response: any = await httpClient.post(url, payload)

            console.log(response.data);
            

            if (response.data.status) {
                toast.success("Success",response.data.message)
                // navigation.popToTop();
                navigation.replace('Home', {screen: 'HomeScreen'});
                localstorage.set('accessToken', response.data.data.accessToken)
                localstorage.set('currentUser', JSON.stringify({
                    email: response.data.data.email,
                    userId: response.data.data.userId
                }));
            } else {
                toast.error("",response.data.message || 'Login Failed')
            }
        } catch (error: any) {
                toast.error('',error.message)
        } finally {
            setLoader(false)
        }
    };

    const saveUser = async ()=>{
        try {
            setLoader(true)
            const url = '/register/partial'

            const response: any = await httpClient.post(url, signupForm);
            console.log(response);
            
            if (response.data.status) {
                toast.success("Success",response.data.message)
                navigation.navigate('Auth', {screen: 'OTP', params: {email: signupForm.email}})
            } else { 
                toast.error("",response.data.message || 'Signup Failed')
            }
        } catch (error: any) {
            toast.error('Error',error.message)
        } finally {
            setLoader(false)
        }
    }

    const verifyEmailOtp = async (email: string, otp: string) => {
        try {
            setLoader(true);
            const payload = {email,otp}
            const url = 'register/verify-email-otp'
            const response: any = await httpClient.post(url, payload);
            console.log(response.data);
            if (response.data.status) {
                toast.success("Success",response.data.message)
                navigation.replace('Auth', {screen: 'Password', params: {email}})
            }
        } catch (error: any) {
            console.log(error);
            toast.error('',error.message)
        } finally {
            setLoader(false);
        }
    }

    const signup = async (email: string)=>{
        try {
            setLoader(true)
            if (passwordForm.password !== passwordForm.confirmPassword) {
                toast.warning('Wait a minute!!', 'Passwords do not match')
                return;
            }
            const response: any = await httpClient.post('/register/signup', {...passwordForm, email});

            console.log(response.data);
            
            if (response.data.status) {
                toast.success("Success",response.data.message)
                localstorage.set('accessToken', response.data.data.accessToken)
                localstorage.set('currentUser', JSON.stringify({
                    email: response.data.data.email,
                    userId: response.data.data.userId
                }));
                navigation.replace('Auth', {screen: 'Username'})
            } else {
                toast.error("Error",response.data.message || 'Signup Failed')
            }
            
        } catch (error: any) {
            console.log(error);
            toast.error('',error.message)
        } finally {
            setLoader(false)
        }
    };

    const checkExisting = async (fieldName: string, value: string)=>{
        try {
            setLoader(true)
            const url = `/register/check-existing?fieldName=${fieldName}&value=${value}`
            const response: any = await httpClient.get(url);
            return response.data;
        } catch (error) {
            console.log(error);

        } finally {
            setLoader(false)
        }
    }

    return{
        signupForm,
        loginForm,
        handleSignupForm,
        handleLoginForm,
        verifyEmailOtp,
        passwordForm,
        setPasswordForm,
        handlePasswordForm,
        saveUser,
        signup,
        login,
        loader,
        username,
        handleUsername,
        checkingUsername,
        usernameAvailable,
    };
};

export default useAuth;