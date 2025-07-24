import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "../HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {colorPallete, colorScheme} from "../../../shared/constants/colors";
import BottomNav from "../../../components/BottomNav";
import { useEffect, useState } from "react";
import CreatePost from "../../create-post/CreatePost";

interface Props {
    updateStatus: ()=>void,
    visibility: any,
}

const PostFeed = ({updateStatus, visibility}:Props)=>{

    const navigation = useNavigation<any>()
    useEffect(()=>{
        updateStatus()
    }, [])

    return(
        <SafeAreaProvider style={visibility}>
            <SafeAreaView style={{backgroundColor: colorScheme.baseBgColor}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Post Feed</Text>
                    </View>
                </View>
                </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default PostFeed