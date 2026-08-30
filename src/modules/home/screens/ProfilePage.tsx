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
import UploadIcon from '../../../asset/svg/UploadIcon';
import genStyles from '../../../shared/constants/generic.styles';
import Button from '../../../components/Button';
import { borderRad } from '../../../shared/constants/ui-sizes';
import { formatLargeNumber } from '../../../shared/utils/helper';
import UserPost from '../../../components/UserPost';

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


const samplePosts = [
    {
        username: 'olivia.codes',
        affiliation: 'University of Oxford',
        pfpUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
        imgUrl: 'https://picsum.photos/id/1025/800/600',
        date: 1765000000,
        caption: 'Built a tiny React Native utility today — shipping it to friends ✨',
        likes: 98,
        comments: 7,
        shares: 2,
        reposts: 0
    },
    {
        username: 'sam.dev',
        affiliation: 'Imperial College London',
        pfpUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
        imgUrl: 'https://picsum.photos/id/1031/800/600',
        date: 1772000000,
        caption: 'Photos from the campus hackathon — what a weekend! 🧠🔥',
        likes: 214,
        comments: 28,
        shares: 10,
        reposts: 4
    },
    {
        username: 'maya.art',
        affiliation: 'Goldsmiths, University of London',
        pfpUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
        imgUrl: 'https://picsum.photos/id/1043/800/600',
        date: 1768001234,
        caption: 'Experimenting with generative art — feedback welcome 🎨',
        likes: 64,
        comments: 12,
        shares: 1,
        reposts: 0
    },
    {
        username: 'leo.h',
        affiliation: 'Birmingham City University',
        pfpUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
        imgUrl: 'https://picsum.photos/id/1052/800/600',
        date: 1779000000,
        caption: 'Weekly roundup: projects, notes, and links I found useful this week.',
        likes: 42,
        comments: 3,
        shares: 0,
        reposts: 0
    },
    {
        username: 'nora_travels',
        affiliation: 'University of Manchester',
        pfpUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
        imgUrl: 'https://picsum.photos/id/1067/800/600',
        date: 1763004500,
        caption: 'Weekend escape to the coast — recharged and ready to code 🌊',
        likes: 131,
        comments: 9,
        shares: 4,
        reposts: 2
    },
    {
        username: 'dev_jamal',
        affiliation: 'King\'s College London',
        pfpUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
        imgUrl: 'https://picsum.photos/id/1074/800/600',
        date: 1770500000,
        caption: 'Prototype demo: simple offline-first notes app. Pull requests welcome.',
        likes: 201,
        comments: 34,
        shares: 14,
        reposts: 5
    },
    {
        username: 'emma_reads',
        affiliation: 'University of Leeds',
        pfpUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
        imgUrl: 'https://picsum.photos/id/1084/800/600',
        date: 1769500000,
        caption: 'Late night reading list: compilers, systems, and UX design.',
        likes: 55,
        comments: 6,
        shares: 1,
        reposts: 0
    },
    {
        username: 'ak47design',
        affiliation: 'Central Saint Martins',
        pfpUrl: 'https://randomuser.me/api/portraits/men/73.jpg',
        imgUrl: 'https://picsum.photos/id/1080/800/600',
        date: 1767000000,
        caption: 'New UI kit sketches — brutalist vibes this season.',
        likes: 88,
        comments: 10,
        shares: 3,
        reposts: 1
    },
    {
        username: 'sophie_codes',
        affiliation: 'University of Edinburgh',
        pfpUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
        imgUrl: 'https://picsum.photos/id/1005/800/600',
        date: 1774500000,
        caption: 'Debugging session victory: finally found that race condition 💪',
        likes: 150,
        comments: 21,
        shares: 5,
        reposts: 2
    },
    {
        username: 'mike_bball',
        affiliation: 'Campus Basketball',
        pfpUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
        imgUrl: 'https://picsum.photos/id/1003/800/600',
        date: 1762000000,
        caption: 'Open gym tonight — who\'s joining? 🏀',
        likes: 76,
        comments: 8,
        shares: 2,
        reposts: 0
    },
    {
        username: 'tina_photos',
        affiliation: 'Royal College of Art',
        pfpUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
        imgUrl: 'https://picsum.photos/id/1011/800/600',
        date: 1777000000,
        caption: 'Street photography walk — captured some great frames.',
        likes: 120,
        comments: 15,
        shares: 6,
        reposts: 2
    },
    {
        username: 'omar_startup',
        affiliation: 'Startup Builders',
        pfpUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
        imgUrl: 'https://picsum.photos/id/1020/800/600',
        date: 1766000000,
        caption: 'MVP shipped: looking for early testers and feedback.',
        likes: 320,
        comments: 58,
        shares: 22,
        reposts: 9
    },
    {
        username: 'claire_music',
        affiliation: 'Birmingham School of Music',
        pfpUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
        imgUrl: 'https://picsum.photos/id/1029/800/600',
        date: 1769005555,
        caption: 'Recording session highlights from last night 🎶',
        likes: 95,
        comments: 12,
        shares: 3,
        reposts: 1
    },
    {
        username: 'ryan_ai',
        affiliation: 'Cambridge University',
        pfpUrl: 'https://randomuser.me/api/portraits/men/66.jpg',
        imgUrl: 'https://picsum.photos/id/1035/800/600',
        date: 1773001111,
        caption: 'Playing with transformers for text summarization — neat results.',
        likes: 410,
        comments: 67,
        shares: 30,
        reposts: 12
    },
    {
        username: 'zara_fit',
        affiliation: 'Sports Club',
        pfpUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
        imgUrl: 'https://picsum.photos/id/1049/800/600',
        date: 1764009999,
        caption: 'Morning run and coffee — perfect start to the day ☕️',
        likes: 60,
        comments: 4,
        shares: 1,
        reposts: 0
    },
    {
        username: 'jonah_reads',
        affiliation: 'Lancaster University',
        pfpUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
        imgUrl: 'https://picsum.photos/id/1060/800/600',
        date: 1776003333,
        caption: 'Book recommendation: Systems Thinking for Engineers.',
        likes: 44,
        comments: 2,
        shares: 0,
        reposts: 0
    },
    {
        username: 'ivy_design',
        affiliation: 'University of the Arts',
        pfpUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
        imgUrl: 'https://picsum.photos/id/1070/800/600',
        date: 1768502222,
        caption: 'Moodboard for the next semester project — pastel palette.',
        likes: 78,
        comments: 9,
        shares: 2,
        reposts: 0
    },
    {
        username: 'eli_codes',
        affiliation: 'Sheffield Hallam University',
        pfpUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
        imgUrl: 'https://picsum.photos/id/1088/800/600',
        date: 1771007777,
        caption: 'Pair-programming session produced this tiny utility — open source!',
        likes: 187,
        comments: 26,
        shares: 8,
        reposts: 3
    },
];

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
            {contentTab === 'posts' &&
                <ScrollView style={{marginVertical: 20}}>
                    {samplePosts.map((post, i)=>{
                        return (
                            <View style={{marginVertical: 15}} key={i}>
                                <UserPost postData={post} />
                            </View>
                        )
                    })

                    }
                </ScrollView>
            }
            <View>

            </View>
            <View style={{ marginBottom: 100,}}></View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colorScheme.background,
        padding: 10
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
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