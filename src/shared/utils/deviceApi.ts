
import { Alert, Dimensions } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export async function camera(){
    return await launchCamera({mediaType: 'photo'});

};


export async function selectDoc(type?: any){
    return await DocumentPicker.pick({
        type: [DocumentPicker.types['allFiles'] || DocumentPicker.types[type]],
    });
}

export async function selectMedia(){
    const image = await launchImageLibrary({mediaType: 'photo'});
    if (!image.assets) {
        Alert.alert('Error', 'No image selected');
        return;
    }

    const formData: any = new FormData();
    const tempPhoto = {
        uri: image?.assets[0]?.uri,
        type: image?.assets[0]?.type,
        name: image?.assets[0]?.fileName,
    }
    formData.append('logo', tempPhoto);
    
    return tempPhoto;
}