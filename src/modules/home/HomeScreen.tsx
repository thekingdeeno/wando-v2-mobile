import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "./HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {colorPallete, colorScheme, currentTheme} from "../../shared/constants/colors";
import BottomNav from "../../components/BottomNav";
import React, { Fragment, useEffect, useState } from "react";
// import CreatePost from "../create-post/CreatePost";
import PostFeed from "./screens/PostFeed";
import ProfilePage from "./screens/ProfilePage";
import DiscoveryPage from "./screens/DiscoveryPage";
import useUser from "../../hooks/useUser";
import { localstorage } from "../../shared/utils/localstorage";

const HomeScreen = ()=>{

    const [currentScreen, setCurrentScreen] = useState<string>('user-profile')

    const switchScreen = (screen: string) => setCurrentScreen(screen);
    
    const [renderedScreens, setRenderedScreens] = useState<any[]>([])

    const updateRenderedScreens = (screen: string)=>{
        if (renderedScreens.includes(screen)) return
        else 
        setRenderedScreens([...renderedScreens, screen])
    };

    const {fetchUser, delCurrentUser, currentUser} = useUser()

    useEffect(()=>{
        fetchUser().then((data)=>{
        if (!data) {
            delCurrentUser();
        };

        data?.avatar && Image.prefetch(data.avatar)
        .then(success => {
            if (success) {
                localstorage.set('avatarUrl', data.avatar)
            console.log('Image prefetched successfully!');
            } else {
            console.log('Image prefetch failed.');
            }
        })

        data.banner && Image.prefetch(data.banner) 
        .then(success => {
        if (success) {
            localstorage.set('bannerUrl', data.banner)
          console.log('Image prefetched successfully!');
        } else {
          console.log('Image prefetch failed.');
        }
      })
      .catch(error => console.error('Error prefetching image:', error));
    })
        
    },[])

    const screensData = [
        {
            id: 'post-feed',
            elemName: PostFeed,
            condition: currentScreen === 'post-feed'
        },
        {
            id: 'user-profile',
            elemName: ProfilePage,
            condition: currentScreen==='user-profile'
        },
        {
            id: 'discovery-page',
            elemName: DiscoveryPage,
            condition: currentScreen==='discovery-page'
        }
    ]

    return(
        <SafeAreaView style={styles.screen}>
            <View style={styles.screenBody}>
                {screensData.map((screen)=>{
                    return(
                        <Fragment key={screen.id}>
                        {(screen.condition||renderedScreens.includes(screen.id))&&
                        React.createElement(
                            
                            screen.elemName,
                            {
                                visibility: screen.condition?{}:{display:'none'},
                                updateStatus: ()=>updateRenderedScreens(screen.id),
                                key: screen.id
                            })
                        }
                        </Fragment>                                
                    )
                })}
            </View>
            <BottomNav changeScreen={(screen)=>switchScreen(screen)} activeScreen={currentScreen} />
        </SafeAreaView>
    )
};

export default HomeScreen