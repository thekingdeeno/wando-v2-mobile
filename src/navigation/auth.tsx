import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../modules/auth/screens/Login/LoginScreen";
import SignupScreen from "../modules/auth/screens/Signup/SignupScreen";
const AuthStack = createStackNavigator();

const AuthNavigation = () => {
    return(
        <AuthStack.Navigator 
            initialRouteName="Signup"
            screenOptions={{headerShown: false}}
        > 
            <AuthStack.Screen name="Login" component={LoginScreen} />
            <AuthStack.Screen name="Signup" component={SignupScreen} />

        </AuthStack.Navigator>
    );
};

export default AuthNavigation;