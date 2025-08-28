import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../modules/home/HomeScreen";
import CreatePost from "../modules/create-post/CreatePost";
import ChatModule from "../modules/chat/ChatModule";
import EditProfile from "../modules/home/screens/EditProfile";
import { localstorage } from "../shared/utils/localstorage";
import { useEffect } from "react";
import useUser from "../hooks/useUser";

const HomeStack = createStackNavigator();

const HomeNavigation = () => {
    const {delCurrentUser} = useUser()
    const accessToken = localstorage.getString('accessToken');
    if (!accessToken) {
        console.log(accessToken);
        
        // delCurrentUser()
    }
    useEffect(()=>{
    },[accessToken])
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