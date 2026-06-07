import { Pressable, View, StyleSheet, Image, Text, TouchableOpacity } from "react-native"
import { Icon } from 'react-native-elements';
import {colorPallete, colorScheme} from "../shared/constants/colors";
import { useNavigation } from "@react-navigation/native";
import { appIcons } from "../shared/constants/icons";
import { uiText } from "../shared/constants/ui-styles";
import HomeIcon from "../asset/svg/Home";
import ChatIcon from "../asset/svg/ChatIcon";
import RocketLaunch from "../asset/svg/RocketLaunch";
import SearchIcon from "../asset/svg/SearchIcon";
import UserIcon from "../asset/svg/User";
import MessageIcon from "../asset/svg/ChatIcon";
import ShoppingBagIcon from "../asset/svg/ShoppingBag";

type props = {
    changeScreen: (screen: string) => void;
    activeScreen: string;
}

const navData = [
    {
        name: 'home',
        action: 'change-screen',
        navTo: 'post-feed',
        icon: HomeIcon
    },
    {
        name: 'marketplace',
        action: 'change-screen',
        navTo: 'marketplace',
        icon: ShoppingBagIcon
    },
    {
        name: 'upload',
        action: 'navigation',
        navTo: 'CreatePost',
        icon: RocketLaunch
    },
    {
        name: 'chat',
        action: 'navigation',
        navTo: 'ChatModule',
        icon: MessageIcon
    },
    {
        name: 'profile',
        action: 'change-screen',
        navTo: 'user-profile',
        icon: UserIcon
    }
]

const BottomNav = ({changeScreen, activeScreen}: props)=>{

    const navigation = useNavigation<any>();

    return(
        <View style={styles.component}>
            <View>

            </View>

            <View style={styles.iconsContainer}>
                {navData.map((nav)=>{
                    const NavIcon = nav.icon
                    const isActive = activeScreen === nav.navTo;
                    const color = colorScheme[`${isActive ? 'primaryPurple' : 'textSecondary'}`]
                return(
                <TouchableOpacity style={styles.icon} key={nav.name} onPress={() => {
                    nav.action==='change-screen'?
                    changeScreen(nav.navTo):
                    navigation.navigate('Home', {screen: nav.navTo})
                }}>
                    <NavIcon color={color} size={18} />
                    <Text style={{...uiText.Caption, fontSize: 9, color, paddingVertical: 8}}>{(nav.name)[0].toUpperCase() + (nav.name).slice(1)}</Text>
                </TouchableOpacity>
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
        padding: 10,
        backgroundColor: colorScheme.background
    },
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    icon: {
        width: '15%',
        marginHorizontal: 10,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center'
    }
})

export default BottomNav