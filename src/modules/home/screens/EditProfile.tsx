import { SafeAreaView, View, Image, Dimensions, Text, StyleSheet, TextInput, Alert, TextInputChangeEventData, NativeSyntheticEvent, Pressable } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
// import styles from "./HomeScreen.style"
import { colorPallete, colorScheme } from "../../../shared/constants/colors";
import useUser from "../../../hooks/useUser";
import { Fragment, useEffect, useRef, useState } from "react";
import { UserDataType } from "../../../shared/types/user.type";
import { appIcons } from "../../../shared/constants/icons";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { localstorage } from "../../../shared/utils/localstorage";
import { selectMedia } from "../../../shared/utils/deviceApi";
import SlideUpModal from "../../../components/SlideUp.Modal";

const screen = Dimensions.get('window');


const EditProfile = ()=>{
    const [activeField, setActiveField] = useState<string|null>(null)
    const {fetchUser, currentUser, updateUserProfile, updateProfileImage, updateProfileBanner, delCurrentUser} = useUser();
    const [profileForm, setProfileForm] = useState<Partial<UserDataType>>({});
    const [uploadModal, setUploadModal] = useState(false);
    const [uploadType, setUploadType] = useState<'avatar'|'banner'>();
    type UserKeys = keyof typeof profileForm;
    const inputRef = useRef<any>(null);

    function handleChange(e: NativeSyntheticEvent<TextInputChangeEventData>, name: string){
        if (name==='username') {
            
        }
        const value = e.nativeEvent.text;
        setProfileForm({...profileForm, [name]: value})   
    };

    function handleSubmit(name: UserKeys){
        updateUserProfile({[name]: profileForm[name]}).then(()=>{fetchUser()})
    }

    function fieldPress(name: UserKeys){
        setActiveField(name)
        setProfileForm({[name]: `${currentUser&&currentUser[name]}`})
    };

    async function updateImage(){
        const selectedMedia = selectMedia();
        
        if (uploadType==='avatar') {
            updateProfileImage(selectedMedia);
        }else if (uploadType==='banner') {
            updateProfileBanner(selectMedia)
        }
    }

    async function launchCam(){
        const image = await launchCamera({mediaType: 'photo'});
    }

    const profileFields: {label: string, name: UserKeys}[] = [
        {
            label: 'Firstname',
            name: 'firstName',
        },
        {
            label: 'Lastname',
            name: 'lastName',
        },
        {
            label: 'Username',
            name: 'username',
        },
        {
            label: 'Bio',
            name: 'bio'
        },
        {
            label: 'Link',
            name: 'link'
        },
    ];


    useEffect(()=>{
        inputRef.current&& inputRef.current.focus();
    })
    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <SafeAreaProvider>
                {uploadModal && 
                    // <Pressable id="upload-modal" onPress={()=>setUploadModal(false)}  style={{height: '100%', width: '100%', position: 'absolute', backgroundColor: '#1c1c1cd3', bottom: 0, left: 0, zIndex: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    //     <View id="upload-modal-body" style={{width: '80%', height: 'auto', backgroundColor:colorScheme.baseBgColor, borderWidth: 0.5, borderColor:'grey', borderRadius: 8,}}>
                    //         <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 20,}}>
                    //             <Pressable onPress={()=>updateImage()}>
                    //                 <View style={{borderWidth: 1, borderColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 5}}>
                    //                     <Image source={{uri: appIcons.camIcon}} style={{height: 30, width: 30}} />
                    //                 </View>
                    //             </Pressable>
                    //             <Pressable onPress={()=>updateImage()}>
                    //                 <View style={{borderWidth: 1, borderColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 5}}>
                    //                     <Image source={{uri: appIcons.imageIcon}} style={{height: 30, width: 30}} />
                    //                 </View>
                    //             </Pressable>
                    //         </View>
                    //     </View>
                    // </Pressable> 
                    <SlideUpModal active={uploadModal} changeVis={()=>{setUploadModal(!uploadModal)}}>
                        <View></View>
                    </SlideUpModal>
                }
            <SafeAreaView style={{backgroundColor: colorScheme.baseBgColor}}>
                <View style={{height: '100%'}}>
                    <Pressable onPress={()=> {setUploadModal(true), setUploadType('banner')}}>
                    <View style={{height: '5%'}}>
                        <Image source={{uri: localstorage.getString('bannerUrl')}}
                        style={{
                            width: screen.width, 
                            height: screen.height*0.15, 
                            position:'relative', 
                            bottom:screen.height/14,
                            overlayColor: 'red'
                        }}/>
                        <View style={{height: screen.height*0.15, width:screen.width, position:'relative',bottom:screen.height/4.52, backgroundColor:'#393939a6', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{color: 'white', fontSize: 14, paddingTop:20}}>{'Tap to edit'}</Text>
                        {/* <Image source={require('../../asset/icons/image-white.png')} style={{height: 40, width: 40, marginTop:10}} /> */}

                        </View>
                    </View>
                    </Pressable>
                    <View
                     style={{width:'100%', display:'flex', justifyContent:'center', alignItems:'flex-start'}}
                     >  
                    <Pressable onPress={()=> {setUploadModal(true), setUploadType('avatar')}}> 
                     <Fragment>
                        <Image
                         source={{uri: localstorage.getString('avatarUrl')}}
                         style={{
                            width: 65,
                            height:65, 
                            borderWidth:2, 
                            borderRadius: '50%',
                            marginLeft: 10
                        }} 
                        />
                        <View          
                            style={{
                            width: 65,
                            height:65, 
                            borderWidth:2, 
                            borderRadius: '50%',
                            marginLeft: 10,
                            position: 'absolute',
                            backgroundColor:'#393939a6',
                            display: 'flex',
                            justifyContent:'center',
                            alignItems:'center',
                        }}>
                            <Image source={require('../../../asset/icons/camicon-white.png')} style={{height: 30, width: 30}} />
                        </View>
                     </Fragment>
                     </Pressable>
                    </View>

                    <Text style={{color:colorScheme.textColor, ...styles.userDetails}}>{'User Details'}</Text>



                    <View style={{padding: 10}}>

                        {profileFields.map((field)=>{
                            return(
                                <Fragment key={field.name}>
                                <Text style={styles.label}>{field.label}</Text>
                                {activeField === field.name?
                                    <TextInput
                                    value={`${
                                        profileForm[field.name]!=='undefined'?
                                        profileForm[field.name]:''
                                    }`}
                                    style={styles.inputField}
                                    onChange={(e)=>handleChange(e, field.name)}
                                    onSubmitEditing={()=>{handleSubmit(field.name)}}
                                    keyboardType='url'
                                    ref={inputRef}
                                    /> :
                                    <Text
                                    style={styles.textField}
                                    onPress={()=>fieldPress(field.name)}
                                    >{currentUser&&currentUser[field.name]}</Text> 
                                }
                                </Fragment>
                            )
                        })
                        }

                        <Text style={{color: 'red'}} onPress={()=>delCurrentUser()}>
                            {'Logout'}
                        </Text>


                    </View>

                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    userDetails: {
        paddingVertical:20,
        paddingLeft: 10,
        fontSize: 20
    },
    label: {
        color: colorScheme.textColor,
        paddingTop: 20,
        paddingBottom: 10
    },
    inputField:{
        padding: 10,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colorScheme.grey,
        color: colorScheme.textColor
    },
    textField: {
        padding: 10,
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#4b4b4ba1',
        color: colorScheme.textColor,
    }

})

export default EditProfile;