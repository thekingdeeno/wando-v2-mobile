import { useRef, useState } from "react"
import { httpClient } from "../api/http";
import { UserDataType } from "../shared/types/user.type";
import { Alert } from "react-native";

const useUser = () => {

    const [isLoading, setIsLoading] = useState<boolean>()
    const [currentUser, setCurrentUser] = useState<UserDataType>()


    const fetchUser = async (userId?: string)=>{
        try {
            setIsLoading(true)
            const url = `user/${userId?'?userId='+userId:''}`
            const response = await httpClient.get(url)
            if (response.data.status) {
                setCurrentUser(response.data.data)
            }
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
                Alert.alert(response.data.message)
            }
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
            
        }
    }

    

    return {
        fetchUser,currentUser,
        updateUserProfile,
    };
};

export default useUser;