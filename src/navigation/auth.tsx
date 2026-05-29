import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../modules/auth/screens/Login/LoginScreen";
import SignupScreen from "../modules/auth/screens/Signup/SignupScreen";
import EmailOtpScreen from "../modules/auth/screens/Signup/OtpScreen";
import PasswordScreen from "../modules/auth/screens/Signup/PasswordScreen";
import UsernameScreen from "../modules/auth/screens/Signup/Username";
const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return(
        <AuthStack.Navigator 
            initialRouteName="Login"
            screenOptions={{headerShown: false}}
        > 
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Signup" component={SignupScreen} />
            <AuthStack.Screen name="OTP" component={EmailOtpScreen}/>
            <AuthStack.Screen name="Password" component={PasswordScreen}/>
            <AuthStack.Screen name="Username" component={UsernameScreen}/>

        </AuthStack.Navigator>
    );
};

export default AuthNavigation;