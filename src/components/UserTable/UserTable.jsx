import { memo, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserDelete } from '@/hooks/useUserDelete';
import UserAvatar from '@/components/UserAvatar/UserAvatar';
import UserInfo from '@/components/UserInfo/UserInfo';
import ModalHeader from '@/components/ModalHeader/ModalHeader';
import DeleteModal from '@/components/DeleteModal/DeleteModal';

const UserTable = memo(({ 
  users = [], 
  loading = false, 
  error = null
}) => {
  const navigate = useNavigate();
  const { deleteUser, deleting } = useUserDelete();
  
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Modal handlers
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedUser(null);
    document.body.style.overflow = 'unset';
  }, []);

  const openModal = useCallback((user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // User action handlers
  const handleViewUser = useCallback((user) => {
    navigate(`/dashboard/user/${user.id}`);
  }, [navigate]);

  const handleEditUser = useCallback((user) => {
    navigate(`/dashboard/user/${user.id}/edit`);
  }, [navigate]);

  const handleDeleteUser = useCallback((user) => {
    setUserToDelete(user);
    setDeleteModalOpen(true);
  }, []);

  const confirmDelete = useCallback(async () => {
    if (!userToDelete) return;
    
    const success = await deleteUser(userToDelete.id);
    if (success) {
      alert('User deleted successfully!');
      setDeleteModalOpen(false);
      setUserToDelete(null);
    } else {
      alert('Failed to delete user');
    }
  }, [userToDelete, deleteUser]);

  const cancelDelete = useCallback(() => {
    setDeleteModalOpen(false);
    setUserToDelete(null);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Avatar
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                ID
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                First Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Last Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Email
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <UserAvatar 
                      src={user.avatar} 
                      alt={`${user.first_name} ${user.last_name}`}
                      size="sm"
                    />
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.id}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.first_name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                    {user.last_name}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-4 py-4 whitespace-nowrap text-sm">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleViewUser(user)}
                        className="inline-flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        <span className="hidden sm:inline">View</span>
                      </button>
                      
                      <button
                        onClick={() => handleEditUser(user)}
                        className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-md hover:bg-green-700 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        <span className="hidden sm:inline">Edit</span>
                      </button>
                      
                      <button
                        onClick={() => handleDeleteUser(user)}
                        className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        <span className="hidden sm:inline">Delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                  No users found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* User Details Modal */}
      {isModalOpen && selectedUser && (
        <div 
          className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader title="User Details" onClose={closeModal} />
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <UserAvatar 
                  src={selectedUser.avatar}
                  alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
                  size="lg"
                  border={true}
                />
              </div>
              <div className="space-y-4">
                <UserInfo label="User ID" value={`#${selectedUser.id}`} />
                <UserInfo 
                  label="Full Name" 
                  value={`${selectedUser.first_name} ${selectedUser.last_name}`} 
                />
                <UserInfo label="First Name" value={selectedUser.first_name} />
                <UserInfo label="Last Name" value={selectedUser.last_name} />
                <UserInfo label="Email Address" value={selectedUser.email} />
              </div>
            </div>

            <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        user={userToDelete}
        loading={deleting}
      />
    </div>
  );
});

UserTable.displayName = 'UserTable';

export default UserTable;