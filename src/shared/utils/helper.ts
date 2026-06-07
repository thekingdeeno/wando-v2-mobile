import { Dimensions } from "react-native";

const screen = Dimensions.get('window');

export function wpc(percent: number): number{
    return screen.width * percent / 100;
};

export function hpc(percent: number): number{
    return screen.height * percent / 100;
};

export function formatLargeNumber(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) {
    return '0';
  }

  if (Math.abs(num) < 1000) {
    return num.toString();
  }

  const suffixes: string[] = ['', 'K', 'M', 'B', 'T'];
  const i: number = Math.floor(Math.log10(Math.abs(num)) / 3);
  
  const formatted: number = num / Math.pow(10, i * 3);
  return `${parseFloat(formatted.toFixed(1))}${suffixes[i]}`;
}