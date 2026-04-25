import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Text,
  StyleSheet,
  Platform,
  View,
  Easing,
} from 'react-native';
import { uiText } from '../../shared/constants/ui-styles';
import { borderRad } from '../../shared/constants/ui-sizes';
import { colorScheme, currentTheme } from '../../shared/constants/colors';
import CheckCircleIcon from '../../asset/svg/CheckCircle';
import ErrorIcon from '../../asset/svg/ErrorTriangle';
import WarningIcon from '../../asset/svg/Warn';
import InfoIcon from '../../asset/svg/InfoCircle';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  visible: boolean;
  message: string;
  title: string;
  type?: ToastType;
  duration?: number;
  onHide?: () => void;
  position?: 'top' | 'bottom';
}

const Toast = ({
  visible,
  message,
  title,
  type = 'info',
  duration = 3000,
  onHide,
  position = 'top',
}: ToastProps) => {
  const translateY = useRef(new Animated.Value(position === 'top' ? -100 : 100)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(0.8)).current;
  const [shouldRender, setShouldRender] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);
  const isHidingRef = useRef(false);

  useEffect(() => {
    if (visible && !shouldRender) {
      setShouldRender(true);
      isHidingRef.current = false;
      
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.back(1.2)),
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.spring(scale, {
          toValue: 1,
          friction: 6,
          tension: 50,
          useNativeDriver: true,
        }),
      ]).start();

      timeoutRef.current = setTimeout(() => {
        if (!isHidingRef.current) {
          startHideAnimation();
        }
      }, duration);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [visible]);

  const startHideAnimation = () => {
    if (isHidingRef.current) return;
    isHidingRef.current = true;

    Animated.parallel([
      Animated.timing(translateY, {
        toValue: position === 'top' ? -80 : 80,
        duration: 300,
        easing: Easing.in(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 0.7,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setShouldRender(false);
      if (onHide) onHide();
    });
  };

  const iconColor = (): {icon: string, bg: string}  => {
    switch (type) {
      case 'success':
       return {
          icon: '#4CAF50',
          bg: '#D0F0DD'
        }
      case 'error':
        return {
          icon: '#F44336',
          bg: '#FFE6DC'
        }
      case 'warning':
        return {
          icon:'#FF9800',
          bg: '#FDF6D1'
        }
      default:
        return {
          icon: '#2196F3',
          bg: '#deeeff'
        }
    }
  };

  const Icon = (props: {color: string, size: number}) => {
     const { color, size } = props;
    switch (type) {
      case 'success':
        return <CheckCircleIcon color={color} size={size} />;
      case 'error':
        return <ErrorIcon color={color} size={size}/>;
      case 'warning':
        return <WarningIcon color={color} size={size}/>;
      default:
        return <InfoIcon color={color}  size={size}/>;
    }
  };

  if (!shouldRender) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          [position]: 20,
          transform: [{ translateY }, { scale }],
          opacity,
          backgroundColor: colorScheme.textPrimaryAlt,
        },
      ]}
    >
      <View style={styles.content}>
        <View style={[styles.iconContainer, { backgroundColor: currentTheme === 'light' ? iconColor().bg : '#131313'}]}>
          <Text style={styles.icon}><Icon color={iconColor().icon} size={15} /></Text>
        </View>
        <View style={styles.textContainer}>
        {title!==''&& <Text style={{...uiText.Text, ...styles.title}}>{title}</Text>}
        {message!==''&& <Text style={{...uiText.TextSecondary,...styles.message}}>{message}</Text>}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 20,
    right: 20,
    backgroundColor: '#333',
    borderRadius: borderRad.mid,
    borderWidth: 1,
    borderColor: colorScheme.divider,
    paddingHorizontal: 16,
    paddingVertical: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
      },
      android: {
        elevation: 6,
      },
    }),
    zIndex: 9999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 28,
    height: 28,
    borderRadius: borderRad.tiny,
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer:{
    display: 'flex',
    flexDirection: 'column'
  },
  title:{    
    color: colorScheme.textPrimary,
    fontWeight: 'bold',
  },
  message: {
    color: colorScheme.textPrimary,
    flex: 1,
    // lineHeight: 20,
  },
});

export default Toast;