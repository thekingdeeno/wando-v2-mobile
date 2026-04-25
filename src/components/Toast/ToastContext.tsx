import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import Toast, { ToastType } from './Toast';

interface ToastContextValue {
  showToast: (title: string, message: string, type?: ToastType, duration?: number) => void;
  hideToast: () => void;
  success: (title: string , message: string, duration?: number) => void;
  error: (title: string , message: string, duration?: number) => void;
  info: (title: string , message: string, duration?: number) => void;
  warning: (title: string ,message: string, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState<string>('')
  const [message, setMessage] = useState('');
  const [type, setType] = useState<ToastType>('info');

  const hideToast = useCallback(() => {
    setVisible(false);
  }, []);

  const showToast = useCallback((cbTitle: string, cbMsg: string, toastType: ToastType = 'info', duration = 3000) => {
    setTitle(cbTitle)
    setMessage(cbMsg);
    setType(toastType);
    setVisible(true);
    
  }, []);

  const success = useCallback((title: string , msg: string, duration?: number) => {
    showToast(title, msg, 'success', duration);
  }, [showToast]);

  const error = useCallback((title: string , msg: string, duration?: number) => {
    showToast(title, msg, 'error', duration);
  }, [showToast]);

  const info = useCallback((title: string , msg: string, duration?: number) => {
    showToast(title, msg, 'info', duration);
  }, [showToast]);

  const warning = useCallback((title: string , msg: string, duration?: number) => {
    showToast(title, msg, 'warning', duration);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{
      showToast,
      hideToast,
      success,
      error,
      info,
      warning,
    }}>
      {children}
      <Toast
        visible={visible}
        title={title}
        message={message}
        type={type}
        onHide={hideToast}
      />
    </ToastContext.Provider>
  );
};