import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styles from "./ChatModule.style";

const ChatModule = ()=>{

    const navigation = useNavigation<any>()

    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Chat Page</Text>
                    </View>
                </View>
                </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default ChatModule