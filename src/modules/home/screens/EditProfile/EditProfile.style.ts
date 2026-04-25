import { StyleSheet } from "react-native"
import { colorScheme } from "../../../../shared/constants/colors"
import { hpc } from "../../../../shared/utils/helper"

export const editProfileStyle = StyleSheet.create({
    // MAIN PAGE
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
    },
    uploadModalBody: {
        padding: 50,
        // display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
        // height: '100%',
        borderRadius: 8,
        // backgroundColor: colorScheme.baseBgColor
    },

    uploadModalHeader:{
        fontSize: 20,
        marginBottom: 20,
        color: colorScheme.textColor,
    },

    uploadModeIcon: {
        borderWidth: 1,
        borderColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 5,
        marginHorizontal: 20
    },


    selectedImagePreview: {
        // height: hpc(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        // overflow: 'hidden',
        backgroundColor: colorScheme.baseBgColor,
        marginBottom: -1
    },
    selectedImage: {
        width: 100,
        height: 100
    },
    uplaodButtonContainer: {
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    uploadButton: {
        // color: colorScheme.textColor,
        margin: 15,
        marginBottom: 100,
        padding: 10,
        borderRadius: 8,
        backgroundColor: colorScheme.baseFgColor,
        width: "100%"
    },

})