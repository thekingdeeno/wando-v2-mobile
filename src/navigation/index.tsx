import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./auth";
import WelcomeNavigation from "./welcome";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./home";
import { localstorage } from "../shared/utils/localstorage";
import { useEffect } from "react";

const Stack = createStackNavigator();

// localstorage.delete('accessToken'); 
const accessToken = localstorage.getString('accessToken'); 
// const accessToken = true




const Navigation = () => {
    useEffect(()=>{
    },[accessToken])
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName={accessToken ? 'Home' : 'Auth'}
            screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Auth" component={AuthNavigation} />
                <Stack.Screen name="Intro" component={WelcomeNavigation} />
                <Stack.Screen name="Home" component={HomeNavigation} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;