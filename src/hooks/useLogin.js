import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async (email, password) => {
    setLoading(true);
    setMessage('');

    // ngecek locak dulu
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const localUser = users.find(u => u.email === email && u.password === password);

    if (localUser) {
      // kalo ada lokal, pake local
      const userData = {
        id: localUser.id,
        name: localUser.name,
        email: localUser.email,
        token: localUser.token
      };
      
      login(localUser.token, userData);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1000);
      setLoading(false);
      return { success: true };
    }

    //reqres
    try {
      const res = await axios.post(
        'https://reqres.in/api/login',
        { email, password },
        { headers: { 'x-api-key': 'reqres-free-v1' } }
      );

      // Create/update user in localStorage
      let user = users.find(u => u.email === email);

      if (!user) {
        user = {
          id: Date.now().toString(),
          token: res.data.token,
          name: email.split('@')[0],
          email: email,
          password: password,
          createdAt: new Date().toISOString(),
          orders: [],
          reservations: []
        };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }

      const userData = {
        id: user.id,
        name: user.name,
        email: user.email,
        token: res.data.token
      };

      login(res.data.token, userData);
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1000);
      return { success: true };

    } catch (error) {
      console.error(error);
      setMessage('Invalid email or password.');
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    handleLogin,
    setMessage
  };
};
