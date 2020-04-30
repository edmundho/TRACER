import React from 'react';

export default function UsernameInput(props) {
  const { username, setUsername } = props;

  return (
    <input 
      type='text' 
      placeholder='Username' 
      value={username} 
      onChange={e => setUsername(e.target.value)}
    />
  );
}
