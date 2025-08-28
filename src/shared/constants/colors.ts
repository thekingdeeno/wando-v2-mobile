import { Appearance, useColorScheme } from "react-native";

export const currentTheme = Appearance.getColorScheme();

export const colorPallete = {
    basePurple: '#3d0d26',
    cardPurple: '#260416'
}

const darkTheme = {
    baseBgColor: 'black',
    baseFgColor: 'white', 
    defBorderColor: 'white',
    textColor: 'white',
    iconColor: 'white',
    grey: '#bebebeff',
    greyText: '#949494ff'
}

const lightTheme = {
    baseBgColor: 'white',
    baseFgColor: 'black', 
    defBorderColor: 'black',
    textColor: 'black',
    iconColor: 'black',
    grey: '#bebebeff',
    greyText: '#949494ff'

}

const deviceTheme = (): typeof lightTheme | typeof darkTheme => {
    if (currentTheme==='light') {
        return lightTheme
    } else if (currentTheme==='dark') {
        return darkTheme
    }
    return darkTheme
}

export const colorScheme = deviceTheme()