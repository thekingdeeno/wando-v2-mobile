import { Pressable, View } from "react-native"
import { StyleSheet } from "react-native"
import { Icon } from 'react-native-elements';
import colorPallete from "../shared/constants/colors";
import { useNavigation } from "@react-navigation/native";

type props = {
    changeScreen: (screen: string) => void;
}

const BottomNav = ({changeScreen}: props)=>{

        const navigation = useNavigation<any>();

    return(
        <View style={styles.component}>
            <View style={styles.iconsContainer}>
                <Pressable style={styles.icon} onPress={()=>{
                    changeScreen('post-feed')
                }}>
                    <Icon name="home" type="foundation" color="white" />
                </Pressable>
                <Pressable style={styles.icon} onPress={()=>{
                    changeScreen('discovery-page')
                }}>
                    <Icon name="magnifying-glass" type="entypo" color="white" />
                </Pressable>
                <Pressable style={styles.icon}  onPress={()=>{
                    navigation.navigate('Home', {screen: 'CreatePost'})
                }}>
                    <Icon name="plus-square" type="feather" color="white" />
                </Pressable>
                <Pressable style={styles.icon} onPress={()=>{
                    navigation.navigate('Home', {screen: 'ChatModule'})
                }}>
                    <Icon name="chat" type="material" color="white" />
                </Pressable>
                <Pressable style={styles.icon} onPress={()=>changeScreen('user-profile')}>
                    <Icon name="person" type="Ionicons" color="white" />
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        width: "100%",
        backgroundColor: '#40164B',
        position: 'absolute',
        bottom: 0,
        padding: 10
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon: {
        padding: 10,
        borderRadius: 10,
    }
})

export default BottomNav