import { Appearance } from "react-native";



const currentTheme = Appearance.getColorScheme();
// const currentTheme = 'dark'

console.log(currentTheme);

const lightTheme = {
    home: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273083/12d5f28b-7f1b-4970-9a25-418030c9c62f.png',
    magnifyingGlass: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273673/a6059963-d030-4b90-9709-8a2ab912b1d3.png',
    uploadIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273945/ce95c35b-4667-4c9b-8506-49e4c0dabeff.png',
    chatIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752274099/b9c4b4d1-06f9-4678-ab5d-036f5c3a733f.png',
    userIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752274270/7f1d575b-0742-4358-8c0d-fca787186bbd.png' 
}

const darkTheme = {
    home: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273174/8e6ce2d9-0620-4a3a-b5a2-d150caf7412d.png',
    magnifyingGlass: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273729/33e5ff50-93c9-4c2e-b175-94da11026e05.png',
    uploadIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752273979/633400f4-6397-4468-919c-09617a3d0fbe.png',
    chatIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752274158/0d81889a-5a17-4923-9edb-eaa332a97744.png',
    userIcon: 'https://res.cloudinary.com/dvyobogab/image/upload/v1752274304/9030fd45-8f39-4a55-b05b-69e08fd44e70.png' 
}

const iconTheme = (): typeof lightTheme | typeof darkTheme => {
        if (currentTheme==='light') {
        return lightTheme
    } else if (currentTheme==='dark') {
        return darkTheme
    }
    return darkTheme
}

export const appIcons = iconTheme();