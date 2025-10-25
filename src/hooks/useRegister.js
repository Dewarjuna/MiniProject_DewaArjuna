import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (name, email, password, confirmPassword) => {
    setLoading(true);
    setMessage('');
    if (password !== confirmPassword) {
      setMessage("Passwords don't match!");
      setLoading(false);
      return { success: false, error: "Passwords don't match!" };
    }

    if (password.length < 6) {
      setMessage('Password must be at least 6 characters.');
      setLoading(false);
      return { success: false, error: 'Password must be at least 6 characters.' };
    }

    try {
      const response = await fetch('https://reqres.in/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.error || 'Registration failed');
        setLoading(false);
        return { success: false, error: data.error || 'Registration failed' };
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ name, email, token: data.token })
      );

      setMessage('Registration successful! Redirecting...');
      setTimeout(() => navigate('/dashboard'), 1000);
      return { success: true };

    } catch (error) {
      console.error(error);
      setMessage('Registration failed. Please try again.');
      return { success: false, error: 'Registration failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    message,
    handleRegister,
    setMessage
  };
};
