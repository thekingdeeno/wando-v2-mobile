import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "../HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import colorPallete from "../../../shared/constants/colors";
import BottomNav from "../../../components/BottomNav";
import { useState } from "react";
import CreatePost from "../../create-post/CreatePost";

const PostFeed = ()=>{

    const navigation = useNavigation<any>()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
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