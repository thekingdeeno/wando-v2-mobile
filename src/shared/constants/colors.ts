import { Appearance } from "react-native";
console.log(Appearance.getColorScheme());

export const currentTheme = Appearance.getColorScheme();
// const currentTheme = 'dark'

export const colorPallete = {
    basePurple: '#3d0d26',
    cardPurple: '#260416'
}

const darkTheme = {
    baseBgColor: 'black',
    defBorderColor: 'white',
    textColor: 'white',
    iconColor: 'white',
    grey: '#bebebeff',
    greyText: '#949494ff'
}

const lightTheme = {
    baseBgColor: 'white',
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