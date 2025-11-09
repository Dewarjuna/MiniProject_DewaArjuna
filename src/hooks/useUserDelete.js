import { useState, useCallback } from 'react';

export const useUserDelete = () => {
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const deleteUser = useCallback(async (userId) => {
    setDeleting(true);
    setDeleteError(null);
    
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`, {
        method: 'DELETE',
        headers: {
          'x-api-key': 'reqres-free-v1'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      return true;
    } catch (err) {
      setDeleteError(err.message);
      return false;
    } finally {
      setDeleting(false);
    }
  }, []);

  return { deleteUser, deleting, deleteError };
};