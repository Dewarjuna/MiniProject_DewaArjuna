import { useState, useCallback } from 'react';

export const useUsersFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async (page) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`https://reqres.in/api/users?page=${page}`, {
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }

      const data = await response.json();
      setUsers(data.data);
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, []);

  return { users, loading, error, totalPages, fetchUsers };
};