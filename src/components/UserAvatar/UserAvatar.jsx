import React, { memo } from 'react';

const UserAvatar = memo(({ 
  src, 
  alt, 
  size = 'md',
  border = false 
}) => {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12',
    lg: 'h-32 w-32'
  };

  const borderClass = border ? 'border-4 border-blue-500 shadow-lg' : '';

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizes[size]} rounded-full object-cover ${borderClass}`}
      loading="lazy"
      decoding="async"
    />
  );
});

UserAvatar.displayName = 'UserAvatar';

export default UserAvatar;