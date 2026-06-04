import {Text, StyleSheet, View, Image, Pressable, ScrollView} from 'react-native';
import { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useUser from "../../../hooks/useUser";
import { Dimensions } from 'react-native';
import { capFirstChar } from '../../../shared/utils/stringUtils';
import { colorScheme } from '../../../shared/constants/colors';
import React from 'react';
import { localstorage } from '../../../shared/utils/localstorage';
import { uiText } from '../../../shared/constants/ui-styles';
import ChevronLeft from '../../../asset/svg/ChevronLeft';
import GearIcon from '../../../asset/svg/GearIcon';
import VerticalDots from '../../../asset/svg/VerticalDots';
import VerifiedShieldIcon from '../../../asset/svg/VerifiedShield';
import LocationPinIcon from '../../../asset/svg/LocationPin';
import VerifiedShieldFilled from '../../../asset/svg/VerifiedShieldFill';


interface Props {
    updateStatus: ()=>void,
    visibility: any,
}

const ProfilePage = ({updateStatus, visibility}: Props)=>{
    
    const navigation = useNavigation<any>()
    const screen = Dimensions.get('window');    
    
    const {fetchUser, currentUser} = useUser();

    const [postsTab, setPostsTab] = useState<string>('feed')

    useFocusEffect(
    React.useCallback(() => {
        fetchUser()
      return () => {
        
      };
    }, [])
  );
    
    useEffect(()=>{
        fetchUser()
        updateStatus()
    }, []) 
    return(
        <View style={{...styles.screen, ...visibility}}>
            <View style={{...styles.header, alignItems: 'center', justifyContent: 'flex-start'}}>
                <Pressable
                    style={{width: '33.3%'}}
                >
                    <ChevronLeft color={colorScheme.textPrimary} size={10} />
                </Pressable>

                <View style={{width: '33.3%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{...uiText.Text, fontSize: 15}}>@{currentUser?.username}</Text>
                </View>

                <View style={{width: '33.3%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', gap: 23, alignItems: 'center'}}>
                    <Pressable style={{}}>
                        <GearIcon color={colorScheme.textPrimary} size={23}/>
                    </Pressable>
                    <Pressable style={{}}>
                        <VerticalDots color={colorScheme.textPrimary} size={3} />
                    </Pressable>
                </View>
            </View>

            <ScrollView>
            <View style={styles.showCaseContainer}>
                <View>
                    <View style={styles.pfpContainer}>
                        <Image source={require('../../../asset/images/DefaultPFP.png')}
                            style={{height: '111%', width: '100%',}}
                        />
                    </View>
                    <VerifiedShieldFilled color={colorScheme.primaryPurple} size={20} style={{position: 'absolute', bottom: 20, right: 20}} />
                </View>
                <Text style={{...uiText.Header}}>{capFirstChar(currentUser?.firstName || '')} {capFirstChar(currentUser?.lastName || '')}</Text>
                <Text style={{...uiText.Text, color: colorScheme.textSecondary, margin: 10}}>Birminhgam City University</Text>
                <Text style={{
                    ...uiText.Text, paddingHorizontal: 13, paddingVertical: 3, borderRadius: 20, 
                    backgroundColor: colorScheme.button_border, fontSize: 12,
                    color: colorScheme.softPurple, marginTop: 10
                    }}>Computer Science • 2nd Year</Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30 ,margin: 20}}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                        <VerifiedShieldIcon color={colorScheme.primaryPurple} size={12}/>
                        <Text style={{...uiText.Caption, color: colorScheme.textPrimary, fontSize: 12}}>Verified Student</Text>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 8}}>
                        <LocationPinIcon color={colorScheme.primaryPurple} size={12}/>
                        <Text style={{...uiText.Caption, color: colorScheme.textPrimary, fontSize: 12}}>Birmingham, UK</Text>
                    </View>
                </View>
            </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colorScheme.background,
        paddingTop: 20,
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 23,
    },
    headerIcons: {
        color: colorScheme.textPrimary,
        width: 20,
        height: 20,
    },

    showCaseContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    pfpContainer: {
        width: '23%',
        aspectRatio: 1,
        borderRadius: '50%',
        overflow: 'hidden',
        margin: 15,
    }

})

export default ProfilePage