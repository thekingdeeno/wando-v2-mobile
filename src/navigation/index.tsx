import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigation from "./auth";
import WelcomeNavigation from "./welcome";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Auth" 
            screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Auth" component={AuthNavigation} />
                <Stack.Screen name="Welcome" component={WelcomeNavigation} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;