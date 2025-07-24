import {Text, StyleSheet, View, Image, Pressable} from 'react-native';
import { useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useUser from "../../../hooks/useUser";
import { Dimensions } from 'react-native';
import { capFirstChar } from '../../../shared/utils/stringUtils';
import { colorScheme } from '../../../shared/constants/colors';
import React from 'react';

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
        // console.log('left screen');
      };
    }, [])
  );
    
    useEffect(()=>{
        fetchUser()
        updateStatus()
    }, [])
    return(
        <SafeAreaProvider style={visibility}>
                <View style={styles.screen}>
                        <View style={styles.bannerImgCont}>
                            <Image source={{uri: 'https://res.cloudinary.com/dvyobogab/image/upload/v1748704475/samples/cloudinary-group.jpg'}}
                            style={{
                                width: screen.width, 
                                height: screen.height*0.15, 
                                position:'relative', 
                                bottom:screen.height/14
                                }} />
                        </View>
                        <View style={styles.userImgCont}>
                            <Image source={{uri: 'https://res.cloudinary.com/dvyobogab/image/upload/v1748704474/samples/animals/three-dogs.jpg'}}
                            style={{
                                width: 65,
                                height:65, 
                                borderWidth:2, 
                                borderRadius: '50%',
                                marginLeft: 10
                            }} />
                        </View>
                    {currentUser &&
                    <View style={styles.infoSection}>
                            <View>
                                <View style={styles.nameArea}>
                                    
                                    <View>
                                        <Text style={{ color: colorScheme.textColor, fontSize: 30,}}>
                                            {`${currentUser.username}`}
                                        </Text>
                                        <Text style={{ color: '#bebebeff', fontSize: 15}}>
                                            {`${capFirstChar(currentUser?.firstName)} ${capFirstChar(currentUser?.lastName)}`}
                                        </Text>
                                    </View>
                                    <View>
                                        <Pressable>
                                            <Text 
                                             style={{...styles.editProfileBtn,color: colorScheme.textColor, fontSize: 8}}
                                             onPress={()=>{
                                            navigation.navigate('Home', {screen: 'EditProfile'});
                                         }}>Edit Profile</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <Text style={{ color: 'white', fontSize: 13, paddingTop: 10}}>
                                    {`${currentUser.bio || ''}`}
                                </Text>
                            </View>

                            {/* Some other user Data */}
                            <View>
                            </View>

                            {/* Numeric Data  */}
                            <View style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                flexDirection:'row',
                                paddingTop: 20,
                                paddingBottom: 20,
                                // borderBottomColor: '#3d3d3dff',
                                }}>
                                <View>
                                    <Text style={styles.profileMetricNo}>{currentUser.followers}</Text>
                                    <Text style={styles.profileMetricLabel}>{'Followers'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.profileMetricNo}>{currentUser.following}</Text>
                                    <Text style={styles.profileMetricLabel}>{'Following'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.profileMetricNo}>{currentUser.following}</Text>
                                    <Text style={styles.profileMetricLabel}>{'Likes'}</Text>
                                </View>
                            </View>

                            {/* post tabs */}
                            <View style={{
                                display: 'flex',
                                flexDirection:'row',
                                justifyContent: 'space-between',
                                paddingTop: 30,
                                paddingHorizontal: 10,
                                borderBottomColor: '#434343ff',
                                // borderWidth: 0.2,
                            }}>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='feed'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('feed')}
                                >
                                    {'Feed'}
                                </Text>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='repost'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('repost')}
                                >
                                    {'Reposts'}
                                </Text>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='writes'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('writes')}
                                >
                                    {'Writes'}
                                </Text>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='photos'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('photos')}
                                >
                                    {'Photos'}
                                </Text>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='videos'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('videos')}
                                >
                                    {'Videos'}
                                </Text>
                                <Text style={{...styles.postTabs, borderBottomColor: `${postsTab==='filter'?'red':'transparent'}`}}
                                onPress={()=>setPostsTab('filter')}
                                >
                                    {'Filter'}
                                </Text>
                            </View>
                    </View>
                    }
                        {/* <Text style={styles.username}>{currentUser?.username}</Text> */}
                </View>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colorScheme.baseBgColor,
    },
    bannerImgCont:{
        width: '100%',
        height: '10%',
    },
    userImgCont: {
        width:'100%',
        display:'flex',
        justifyContent:'center',
        // alignItems:'center'
    },
    infoSection: {
        padding: 10,
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start'
    },
    nameArea: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
    }, 
    editProfileBtn:{
        borderColor: colorScheme.defBorderColor,
        borderWidth:0.2,
        borderRadius: 3,
        paddingVertical:4,
        paddingHorizontal:10,
        marginRight: 10
    },
    profileMetricNo: { 
        color:colorScheme.textColor,
        fontSize: 20,
        textAlign: 'center',
    },
    profileMetricLabel: {
        color: '#949494ff'

    },
    postTabs: {
        color: colorScheme.textColor,
        padding: 10,
        borderBottomWidth: 1
    },

})

export default ProfilePage