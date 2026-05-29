import { useRef, useState } from "react"
import { httpClient } from "../api/http";
import { UserDataType } from "../shared/types/user.type";
import { Alert } from "react-native";
import { localstorage } from "../shared/utils/localstorage";
import { useNavigation } from "@react-navigation/native";
import { useToast } from "../components/Toast/ToastContext";


const useUser = () => {

    const [isLoading, setIsLoading] = useState<boolean>()
    const [currentUser, setCurrentUser] = useState<UserDataType>()

    const navigation = useNavigation<any>();

    const toast = useToast()

    const fetchUser = async (userId?: string)=>{
        try {
            setIsLoading(true)
            const url = `user/${userId?'?userId='+userId:''}`
            const response = await httpClient.get(url)
            if (response.data.status) {
                setCurrentUser(response.data.data)
            }
            return response.data.data

            
        } catch (error: any) {
            console.log(error)
        }finally{
            setIsLoading(false)
        };
    };

    const updateUserProfile = async (payload: any)=>{
        try {
            setIsLoading(true)
            const url = `user/update`
            const response = await httpClient.put(url, payload)
            if (response.data.status) {
                toast.success('',response.data.message)
                return true
            }
            return false
        } catch (error) {
            console.log(error)
            return false
        } finally {
            setIsLoading(false)
        }
    }

    const updateProfileImage = async (image: any) => {
        try {
            setIsLoading(true)
            const url = `user/update-pfp`
            console.log(image);
            
            const response: any = await httpClient.post(url,  image , {headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }})
            if (response.data.status) {
                Alert.alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

        const updateProfileBanner = async (image: any) => {
            try {
                setIsLoading(true)
                const url = `user/update-banner`
                const response: any = await httpClient.post(url,  image , {headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json',
                }})
                if (response.data.status) {
                    Alert.alert(response.data.message)
                }
                // localstorage.set('bannerUrl', response.data.data)
            } catch (error: any) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }

        const delCurrentUser = async ()=>{
        try {
            localstorage.delete('accessToken')
            localstorage.delete('currentUser')
            navigation.popToTop();
            navigation.replace('Auth', {screen: 'Login'});
        } catch (error) {
            console.log(error)
        }
    }

    

    return {
        fetchUser,currentUser,
        updateUserProfile, delCurrentUser,
        updateProfileImage, updateProfileBanner
    };
};

export default useUser;