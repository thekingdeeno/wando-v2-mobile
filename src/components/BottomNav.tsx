import { Pressable, View, StyleSheet, Image } from "react-native"
import { Icon } from 'react-native-elements';
import {colorPallete, colorScheme} from "../shared/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "../shared/constants/icons";
import HomeIcon from "../asset/svg/home-icon.svg"
import SvgComponent from "../asset/icons/svg";

type props = {
    changeScreen: (screen: string) => void;
}

const navData = [
    {
        name: 'home',
        action: 'change-screen',
        navTo: 'post-feed',
        iconUri: appIcons.home,
        // icon: HomeIcon
    },
    {
        name: 'discover',
        action: 'change-screem',
        navTo: 'discovery-page',
        iconUri: appIcons.magnifyingGlass
    },
    {
        name: 'upload',
        action: 'navigation',
        navTo: 'CreatePost',
        iconUri: appIcons.uploadIcon
    },
    {
        name: 'chat',
        action: 'navigation',
        navTo: 'ChatModule',
        iconUri: appIcons.chatIcon
    },
    {
        name: 'profile',
        action: 'change-screen',
        navTo: 'user-profile',
        iconUri: appIcons.userIcon
    }
]

const BottomNav = ({changeScreen}: props)=>{

    const navigation = useNavigation<any>();

    return(
        <View style={styles.component}>
            <View>

            </View>

            <View style={styles.iconsContainer}>
                {navData.map((nav)=>{
                return(
                <Pressable style={styles.icon} key={nav.name} onPress={() => {
                    nav.action==='change-screen'?
                    changeScreen(nav.navTo):
                    navigation.navigate('Home', {screen: nav.navTo})
                }}>
                    <Image source={{uri: nav.iconUri}} height={20} width={20} />
                    {/* <SvgComponent /> */}
                </Pressable>
                )})

                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    component: {
        width: "100%",
        position: 'absolute',
        bottom: 0,
        padding: 10
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        padding: 5,
        borderRadius: 10,
    }
})

export default BottomNav