import { Dimensions } from "react-native";

const screen = Dimensions.get('window');

export function wpc(percent: number): number{
    return screen.width * percent / 100;
};

export function hpc(percent: number): number{
    return screen.height * percent / 100;
};