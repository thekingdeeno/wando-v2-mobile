import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "../HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = ()=>{

    const navigation = useNavigation<any>()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Profile Page</Text>
                    </View>
                </View>
                </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default ProfilePage