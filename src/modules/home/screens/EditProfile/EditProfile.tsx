import { SafeAreaView, View, Image, Dimensions, Text, StyleSheet, TextInput, Alert, TextInputChangeEventData, NativeSyntheticEvent, Pressable, Platform } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { colorPallete, colorScheme } from "../../../../shared/constants/colors";
import useUser from "../../../../hooks/useUser";
import { Fragment, useEffect, useRef, useState } from "react";
import { UserDataType } from "../../../../shared/types/user.type";
import { appIcons } from "../../../../shared/constants/icons";
import { ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";
import { localstorage } from "../../../../shared/utils/localstorage";
import { hpc, wpc } from "../../../../shared/utils/helper";
import { editProfileStyle as styles } from "./EditProfile.style";
import SlideUpModal from "../../../../components/SlideUp.Modal";

const screen = Dimensions.get('window');


const EditProfile = ()=>{
    const [activeField, setActiveField] = useState<string|null>(null)
    const {fetchUser, currentUser, updateUserProfile, updateProfileImage, updateProfileBanner, delCurrentUser} = useUser();
    const [profileForm, setProfileForm] = useState<Partial<UserDataType>>({});
    const [uploadModal, setUploadModal] = useState(false);
    const [uploadType, setUploadType] = useState<'avatar'|'banner'>();
    const [selectedImage, setSelectedImage] = useState<ImagePickerResponse>();
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

    const handleChoosePhoto = ()=>{
        launchImageLibrary({mediaType: 'photo'},(data)=>{
            if (data) {
                setSelectedImage(data)
            }
        })
        return
    }

    const createFormData = (photo: any, body?: any) => {
        const data: any = new FormData();

        const upload = photo[0]
        

        data.append('photo', {
            name: upload.fileName,
            type: upload.type,
            uri: Platform.OS === 'ios' ? upload.uri.replace('file://', '') : upload.uri,
        });

        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        console.log(uploadType);
        
        switch (uploadType) {
            case 'avatar':
                updateProfileImage(data)
                break;
            case 'banner':
                updateProfileBanner(data)
                break;
        
            default:
                break;
        }
    };



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

        // setInterval(()=>{
        // console.log(actionSheetRef.current?.isOpen());

        // }, 5000)



    useEffect(()=>{
        inputRef.current&& inputRef.current.focus();
        
    })
    useEffect(()=>{
        fetchUser();
    },[])


    return(
        <SafeAreaProvider>
            <SafeAreaView style={{backgroundColor: colorScheme.baseBgColor}}>
                <View style={{height: '100%'}}>
                    {
                        uploadModal&&
                    <SlideUpModal
                    hideModal={()=>{setUploadModal(false); setSelectedImage({})}}
                    >
                        {selectedImage?.assets
                            ?
                            <View id="selected-image-preview" style={styles.selectedImagePreview}>
                                <Image src={`${selectedImage.assets[0].uri}`} style={styles.selectedImage} />
                                <View id="upload-button-container" style={styles.uplaodButtonContainer}>
                                <Pressable onPress={()=>{createFormData(selectedImage.assets, {})}}>
                                    <Text style={styles.uploadButton}>Upload</Text>
                                </Pressable>
                                </View>
                            </View> 
                                : 
                            <View style={styles.uploadModalBody}>
                                <View>
                                <Text style={styles.uploadModalHeader}>{`${uploadType === 'avatar' ? 'Upload Avatar': 'Upload Banner'}`}</Text>
                                </View>
                                <View style={{display: 'flex', flexDirection: 'row'}}>
                                <Pressable onPress={()=>handleChoosePhoto()}>
                                    <View style={styles.uploadModeIcon}>
                                        <Image source={{uri: appIcons.camIcon}} style={{height: 30, width: 30}} />
                                    </View>
                                </Pressable>
                                <Pressable onPress={()=>handleChoosePhoto()}>
                                    <View style={styles.uploadModeIcon}>
                                        <Image source={{uri: appIcons.imageIcon}} style={{height: 30, width: 30}} />
                                    </View>
                                </Pressable>
                                </View>
                            </View>
                        }
                    </SlideUpModal>
                    }
                    <Pressable onPress={()=> {
                        setUploadModal(true)
                        setUploadType('banner')
                        
                        }}>
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
                    <Pressable onPress={()=> {setUploadType('avatar'); setUploadModal(true)}}> 
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
                            <Image source={require('../../../../asset/icons/camicon-white.png')} style={{height: 30, width: 30}} />
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


export default EditProfile;