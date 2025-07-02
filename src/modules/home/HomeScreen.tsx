import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "./HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colorPallete from "../../shared/constants/colors";
import BottomNav from "../../components/BottomNav";
import { useState } from "react";
import CreatePost from "../create-post/CreatePost";
import PostFeed from "./screens/PostFeed";
import ProfilePage from "./screens/ProfilePage";
import DiscoveryPage from "./screens/DiscoveryPage";

const HomeScreen = ()=>{

    const navigation = useNavigation<any>()

    const LoginScreen = () => {
        navigation.navigate('Auth', {screen: 'Login'})
    }

    const SignupScreen = () => {
        navigation.navigate('Auth', {screen: 'Signup'})
    }

    const [currentScreen, setCurrentScreen] = useState<string|null>('post-feed')

    const switchScreen = (screen: string) => {setCurrentScreen(screen);
        
    }

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Wando</Text>
                    </View>
                    <View style={styles.screenBody}>

                        {currentScreen === 'post-feed' &&
                            <PostFeed />
                        }
                        {currentScreen === 'user-profile' &&
                            <ProfilePage />
                        }
                        {currentScreen === 'discovery-page' &&
                            <DiscoveryPage />
                        }
                    </View>
                    <BottomNav changeScreen={(screen)=>switchScreen(screen)} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default HomeScreen