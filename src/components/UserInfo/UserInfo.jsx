import React, { memo } from 'react';

const UserInfo = memo(({ label, value }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">
        {label}
      </label>
      <p className="mt-1 text-lg font-semibold text-gray-900 break-words">
        {value}
      </p>
    </div>
  );
});

UserInfo.displayName = 'UserInfo';

export default UserInfo;