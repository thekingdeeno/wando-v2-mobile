import {Text, StyleSheet, View, Image, Pressable, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useUser from "../../../hooks/useUser";
import { Dimensions } from 'react-native';
import { capFirstChar } from '../../../shared/utils/stringUtils';
import { colorScheme, currentTheme } from '../../../shared/constants/colors';
import React from 'react';
import { localstorage } from '../../../shared/utils/localstorage';
import { uiText } from '../../../shared/constants/ui-styles';
import ChevronLeft from '../../../asset/svg/ChevronLeft';
import GearIcon from '../../../asset/svg/GearIcon';
import VerticalDots from '../../../asset/svg/VerticalDots';
import VerifiedShieldIcon from '../../../asset/svg/VerifiedShield';
import LocationPinIcon from '../../../asset/svg/LocationPin';
import VerifiedShieldFilled from '../../../asset/svg/VerifiedShieldFill';
import EditIcon from '../../../asset/svg/EditIcon';
import UploadIcon from '../../../asset/svg/UplaodIcon';
import genStyles from '../../../shared/constants/generic.styles';
import Button from '../../../components/Button';
import { borderRad } from '../../../shared/constants/ui-sizes';
import { formatLargeNumber } from '../../../shared/utils/helper';


interface Props {
    updateStatus: ()=>void,
    visibility: any,
}

const ProfilePage = ({updateStatus, visibility}: Props)=>{
    
    const navigation = useNavigation<any>()
    const screen = Dimensions.get('window');    
    
    const {fetchUser, currentUser} = useUser();

    const [contentTab, setContentTab] = useState<string>('posts');

    const hobbies = ['Football', 'Cooking', 'Traveling', 'Music', 'Photography', 'Gaming', 'Reading', 'Fitness']
    const bio = '3rd year Computer Science student. Looking for startup founders, hackathon teammates and people interested in Al.'
    const communities = [{
        name:'Computer Science',
        members: 24000
    },
    {
        name:'Startup Builders',
        members: 17000
    },
    {
        name:'Campus Basketball',
        members: 932
    }
]

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

            <ScrollView showsVerticalScrollIndicator={false}>
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
                    color: colorScheme.textSecondary, marginTop: 10
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

            <View style={{...genStyles.flexRow, justifyContent: 'space-evenly', paddingVertical: 20, borderTopWidth: 1, borderBottomWidth: 1, borderColor: colorScheme.divider}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{...uiText.Header}}>1K</Text>
                    <Text style={{...uiText.TextSecondary}}>Followers</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                   <Text style={{...uiText.Header}}>53</Text>
                    <Text style={{...uiText.TextSecondary}}>Friends</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                   <Text style={{...uiText.Header}}>29</Text>
                    <Text style={{...uiText.TextSecondary}}>Events</Text>
                </View>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingVertical: 20, justifyContent: 'space-between'}}>
                <View style={{width: '48%'}}>
                    <Button text='Edit Profile' color='primary' icon={EditIcon}
                    iconProps={{color: 'white', size: 15}} buttonStyles={{width: "100%"}} 
                    onPress={()=>{}}/>
                </View>
                <View style={{width: '48%'}}>
                    <Button text='Share Profile' color='secondary' icon={UploadIcon} iconProps={{
                        color: `${currentTheme === 'dark' ? colorScheme.softPurple : colorScheme.primaryPurple}`,
                         size: 15}}
                    buttonStyles={{width: '100%'}} onPress={()=>{}}/>
                </View>
            </View>


            <View style={{marginTop: 10}}>
                <View style={{...genStyles.flexRow, marginBottom: 10}}>
                    <Text style={{...uiText.Text, marginRight: 10}}>Interest</Text>
                    <Text style={{...uiText.Text, color: colorScheme.primaryPurple}}>See all</Text>
                </View>

                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: "wrap",
                    backgroundColor: colorScheme.background3,
                    padding: 5,
                    borderRadius: borderRad.small,
                    overflow: 'scroll',
                }}>
                    {hobbies.slice(0, 5).map((hobby, index)=>{
                        return(
                            <View key={index} style={{padding: 10, backgroundColor: colorScheme.background3, borderRadius: 8, margin: 5,
                            display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', borderWidth: 1, borderColor: colorScheme.primaryPurple
                            }}>
                                <VerifiedShieldIcon color={colorScheme.primaryPurple} size={15}/>
                                <Text style={{...uiText.Text, color: colorScheme.textPrimary,}}>{hobby}</Text>
                            </View>
                        )
                    })}
                    <View style={{padding: 10, backgroundColor: colorScheme.background3, borderRadius: 8, margin: 5,borderWidth: 1, borderColor: colorScheme.primaryPurple}}>
                    
                    <Text style={{...uiText.Text, color: colorScheme.textPrimary,}}>+</Text>
                    </View>
                </View>
            </View>

            <View style={{marginVertical: 10}}>
                <Text style={{...uiText.Text}}>About</Text>
                <Text style={{
                    ...uiText.TextSecondary,
                    backgroundColor: colorScheme.background3,
                    marginVertical: 20,
                    padding: 20,
                    borderRadius: borderRad.small,
                }}>{bio}</Text>
            </View>

            <View style={{marginVertical: 10, paddingTop: 10}}>
                <View style={{...genStyles.flexRow, marginBottom: 10}}>
                    <Text style={{...uiText.Text, marginRight: 10}}>Communities</Text>
                    <Text style={{...uiText.Text, color: colorScheme.primaryPurple}}>See all</Text>
                </View>
                <View>
                    {communities.slice(0,3).map((data, i)=>{
                        return(
                            <TouchableOpacity key={i} style={{display: 'flex', flexDirection:'row', alignItems:'center', gap: 10, marginVertical: 5, backgroundColor: colorScheme.background3, padding: 15, borderRadius: borderRad.small
                            }}>
                                <VerifiedShieldFilled color={colorScheme.primaryPurple} size={20}/>
                                <View>
                                    <Text style={{...uiText.Text}}>{data.name}</Text>
                                    <Text style={{...uiText.Caption}}>{formatLargeNumber(data.members)} Members</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    }
                </View>
            </View>

            <View style={{marginVertical: 20,}}>
                <View style={{...genStyles.flexRow, marginBottom: 20}}>
                    <Text style={{...uiText.Text, marginRight: 10}}>Mutual Friends</Text>
                    <Text style={{...uiText.Text, color: colorScheme.primaryPurple}}>See all</Text>
                </View>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                    {'123456'.split("").splice(0,5).map((data, i)=>{
                        return(
                            <View key={i}>
                                <View style={{borderRadius:borderRad.circle, borderWidth: 3, borderColor: colorScheme.softPurple,overflow:'hidden'}}>
                                    <Image source={require('../../../asset/images/DefaultPFP.png')}
                                        style={{height: 50, width: 50}}
                                    />
                                </View>
                                <View style={{position: 'absolute', backgroundColor: colorScheme.successGreen,
                                    padding: 5, bottom: 4, right: 2, borderRadius: borderRad.circle, borderWidth: 1,
                                    borderColor: 'white'
                                    }} />
                            </View>
                        )
                    })
                    }
                    <View>
                        <View style={{
                            borderRadius:borderRad.circle, borderWidth: 1, borderColor: colorScheme.primaryPurple,
                            overflow:'hidden', height: 50, width: 50,
                            justifyContent:'center', alignItems:'center'
                            }}>
                            <Text style={{...uiText.Text}}>+7</Text>
                        </View>
                    </View>
                </View>
                <Text style={{...uiText.Text, marginTop: 20}}>14 mutual friends</Text>
            </View>

            <View style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                {["Posts","Market","Events"].map((tab,i)=>{
                    const _tab = tab.toLowerCase()
                    return(
                        <TouchableOpacity key={i} style={{width:'33.3%', borderBottomWidth:1, borderBottomColor:`${contentTab===_tab ?colorScheme.primaryPurple:colorScheme.divider}`, padding:20 }}
                        onPress={()=>setContentTab(_tab)}
                        >
                            <Text style={{...uiText.Text, color:`${contentTab===_tab ? colorScheme.primaryPurple: colorScheme.textSecondary}`, textAlign:'center'}}>{tab}</Text>
                        </TouchableOpacity>
                    )
                })

                }
            </View>
            <View style={{ marginBottom: 100,}}></View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colorScheme.background,
        padding: 20
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 23,
    },
    headerIcons: {
        color: colorScheme.textPrimary,
        width: 20,
        height: 20,
    },
    sectionTitle: {
        ...uiText.Text,
        marginRight: 10,
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