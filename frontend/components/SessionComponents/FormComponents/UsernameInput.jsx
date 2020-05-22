import React from 'react';

export default function UsernameInput(props) {
  const { username, setUsername, className } = props;

  return (
    <input 
      className={className}
      type='text' 
      placeholder='Username' 
      value={username} 
      onChange={e => setUsername(e.target.value)}
    />
  );
}
