import { View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
import styles from "../home/HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {colorPallete} from "../../shared/constants/colors";
import BottomNav from "../../components/BottomNav";

const CreatePost = ()=>{

    const navigation = useNavigation<any>()



    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: 'black'}}>
                <View style={styles.screen}>
                    <View style={styles.screenHeader}>
                        <Text style={styles.logoText}>Create Post</Text>
                    </View>
                </View>
                </SafeAreaView>
        </SafeAreaProvider>
    )
};

export default CreatePost