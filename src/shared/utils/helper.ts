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

export function formatTimeSince(timestamp: string | number | Date): string {
    if (typeof timestamp === 'number' && timestamp.toString().length === 10) {
        timestamp = timestamp * 1000;
    }
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) return 'unknown time';

  const now = new Date();
  const secondsPast = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (secondsPast < 1) {
    return 'just now';
  }

  const intervals: { label: string; seconds: number }[] = [
    { label: 'yr', seconds: 31536000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hr', seconds: 3600 },
    { label: 'min', seconds: 60 },
    { label: 's', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(secondsPast / interval.seconds);
    if (count >= 1) {
      const isPlural = count > 1 && !['s', 'min', 'hr', 'yr'].includes(interval.label);
      return `${count} ${interval.label}${isPlural ? 's' : ''} ago`;
    }
  }

  return 'just now';
}