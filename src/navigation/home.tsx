import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../modules/home/HomeScreen";
import CreatePost from "../modules/create-post/CreatePost";
import ChatModule from "../modules/chat/ChatModule";
import EditProfile from "../modules/home/screens/EditProfile";


const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    return(
        <HomeStack.Navigator
        screenOptions={{headerShown: false}}>
            <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStack.Screen name="CreatePost" component={CreatePost} />
            <HomeStack.Screen name="ChatModule" component={ChatModule} />
            <HomeStack.Screen name="EditProfile" component={EditProfile} />

        </HomeStack.Navigator>
    )
}

export default HomeNavigation;