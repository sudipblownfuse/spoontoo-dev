'use client';

import { createContext, useContext, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const timeoutRefs = useRef({});

  const removeNotification = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    clearTimeout(timeoutRefs.current[id]);
    delete timeoutRefs.current[id];
  };

  const addNotification = (type, message) => {
    const id = uuidv4();
    setNotifications((prev) => [...prev, { id, type, message }]);

    // Auto dismiss
    timeoutRefs.current[id] = setTimeout(() => {
      removeNotification(id);
    }, 3000);
  };

  const pauseTimer = (id) => {
    clearTimeout(timeoutRefs.current[id]);
  };

  const resumeTimer = (id) => {
    timeoutRefs.current[id] = setTimeout(() => {
      removeNotification(id);
    }, 1000); // Resume with some remaining time
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification, pauseTimer, resumeTimer }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotification must be used within NotificationProvider');
  return context;
};
