import { Appearance, useColorScheme } from "react-native";

export const currentTheme = Appearance.getColorScheme();

export const colorPallete = {
    basePurple: '#3d0d26',
    cardPurple: '#260416',
    iconOutline: '#707584'
}

const darkTheme = {
    // primaryPurple: '#613BF7',
    primaryPurple: '#794AFC',
    softPurple: '#c7a7fb',
    accentPink: '#FF6EC7',
    accentBlue: '#4DD0FF',
    successGreen: '#22C55E',
    textPrimaryAlt: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: '#B8B3D6',
    textTetiary: '#66638A',
    divider: '#1D1749',
    background: '#04061A',
    background2: '#090D1F',
    background3: '#0F0F29',
    button_bg1: '#633EF8',
    button_bg2: '#181243',
    button_border: '#302E49'
};


// #FCFBFD
// #FEFEFE

const lightTheme = {
    primaryPurple: '#7B5CFF',
    softPurple: '#F0EDFF',
    accentPink: '#FF6EC7',
    accentBlue: '#4DD0FF',
    successGreen: '#22C55E',
    textPrimaryAlt: '#FFFFFF',
    textPrimary: '#1F1F21',
    textSecondary: '#6B7280',
    textTetiary: '#8E8D95',
    divider: '#E5E7EB',
    background: '#FAFAFC',
    background2: '#FEFEFE',
    background3: '#F4F3FE',
    button_bg1: '#633EF8',
    button_bg2: '#EFEDFE',
    button_border: '#E9E9ED'
};

const deviceTheme = (): typeof lightTheme | typeof darkTheme => {
    if (currentTheme==='light') {
        return lightTheme
    } else if (currentTheme==='dark') {
        return darkTheme
    }
    return darkTheme
}

export const colorScheme = deviceTheme()