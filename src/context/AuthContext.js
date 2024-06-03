import React, {createContext, useState, useEffect} from "react";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [authStatus, setAuthStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const accessToken = localStorage.getItem('accessToken');

      if(!accessToken) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8080/api/v1/auth/user/status', {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        console.log('Auth Status Response:', response.data);
        setAuthStatus(response.data);
        return response.data;
      } catch (error) {
        console.error('Auth status check failed:', error);
        setAuthStatus(null);
      }finally {
        setLoading(false);
        }
    };
    fetchAuthStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };