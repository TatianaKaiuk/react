import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    
    const Online = () => {
      setIsOnline(true);
    };
    const Offline = () => {
      setIsOnline(false);
    };
    
    window.addEventListener('online', Online);
    window.addEventListener('offline', Offline);
    return () => {
      window.removeEventListener('online', Online);
      window.removeEventListener('offline', Offline);
    };
  }, []);

  if (!isOnline) {
    return <div className="status status_offline">offline</div>;
  }

  return <div className="status">online</div>;
};
export default ConnectionStatus;
