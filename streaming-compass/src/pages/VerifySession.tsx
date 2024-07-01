import React, { useEffect, useState } from 'react';
import { createSession } from '../api/auth'
import { Navigate } from 'react-router-dom';
import Loading from '../components/UI/Loading';

interface VerifySessionProps {
    component: React.ComponentType<any>;
    componentProps?: any;
}

const VerifySession: React.FC<VerifySessionProps> = ({ component: Component, componentProps }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isGuest, setGuest] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
      const verify = async () => {
        const sessionId = sessionStorage.getItem('session_id');
        const guest_session_id = sessionStorage.getItem('guest_session_id');
        setIsAuthenticated(Boolean(sessionId));
        setGuest(Boolean(guest_session_id));
        setLoading(false);
      };
  
      verify();
    }, []);
  
    if (loading) {
      return <Loading />; 
    }
    return isAuthenticated || isGuest ? <Component {...componentProps} /> : <Navigate to="/" />;

}

export default VerifySession

