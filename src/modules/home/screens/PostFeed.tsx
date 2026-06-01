import { Touchable, TouchableOpacity, View } from "react-native"
import {Text, StyleSheet, Image, Pressable} from 'react-native';
// import styles from "../HomeScreen.style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {colorPallete, colorScheme} from "../../../shared/constants/colors";
import BottomNav from "../../../components/BottomNav";
import { useEffect, useState } from "react";
import CreatePost from "../../create-post/CreatePost";
import { uiText } from "../../../shared/constants/ui-styles";
import SearchIcon from "../../../asset/svg/SearchIcon";
import NotificationIcon from "../../../asset/svg/Notification";

interface Props {
    updateStatus: ()=>void,
    visibility: any,
}

const PostFeed = ({updateStatus, visibility}:Props)=>{

    const navigation = useNavigation<any>()
    useEffect(()=>{
        updateStatus()
    }, [])

    const [activeTab, setActiveTab] = useState<string>('forYou')

    const tabs = [
            {name: 'For You', value: 'forYou'},
            {name: 'My School', value: 'mySchool'},
            {name: 'Nearby', value: 'nearby'},
            {name: 'Interests', value: 'interests'},
    ]

    return(
                <View style={styles.screenHead}>
                    <View style={styles.screenHeader_top}>
                        <View>
                            <Image 
                                source={require('../../../asset/images/wando.png')}
                                style={{height: 50, width: 100, resizeMode: 'contain'}}
                            />
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', gap: 25, paddingHorizontal: 10}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('CreatePost')}>
                                <SearchIcon color={colorScheme.textSecondary} size={20} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>navigation.navigate('CreatePost')}>
                                <NotificationIcon color={colorScheme.textSecondary} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.screenHeader_tabs}>
                       {
                        tabs.map((tab)=>{
                            const isActive = activeTab === tab.value;                 
                            const color = colorScheme[`${isActive ? 'primaryPurple' : 'textSecondary'}`]           
                            return(
                                <Pressable key={tab.value} onPress={()=>setActiveTab(tab.value)}>
                                    <View style={{padding: 10, marginBottom: 10, borderBottomWidth: 2, borderBottomColor: isActive? colorScheme.primaryPurple : 'transparent'}}>
                                        <Text style={{...uiText.Caption, color, fontSize: 12}}>{tab.name}</Text>
                                    </View>
                                </Pressable>
                            )
                        })
                       }
                    </View>
                </View>
    )
};


const styles = StyleSheet.create({
    screenHead: {
        paddingHorizontal: 20,
    },
    screenHeader_top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    screenHeader_tabs: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingTop: 10,
    }
})

export default PostFeed