import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../modules/welcome/screens/Welcome/WelcomeScreen";


const WelcomeStack = createStackNavigator();

const WelcomeNavigation = () => {
    return(
                <WelcomeStack.Navigator 
                    initialRouteName="Welcome"
                    screenOptions={{headerShown: false}}
                >
                    <WelcomeStack.Screen name="Welcome" component={WelcomeScreen} />
                </WelcomeStack.Navigator>
    );
};

export default WelcomeNavigation;