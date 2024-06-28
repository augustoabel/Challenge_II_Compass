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
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const verify = async () => {
        let teste = await createSession();
        console.log("teste", teste)
        const sessionId = sessionStorage.getItem('session_id');
        console.log('sessionId',sessionId);
        setIsAuthenticated(Boolean(sessionId));
        setLoading(false);
      };
  
      verify();
    }, []);
  
    if (loading) {
      return <Loading />; 
    }
    console.log("isAuthenticated", isAuthenticated);
    return isAuthenticated ? <Component {...componentProps} /> : <Navigate to="/" />;

}

export default VerifySession

