import React from 'react';

export default function PasswordInput(props) {
  const { password, setPassword, className } = props;

  return (
    <input
      className={className}
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="Password"
    />
  );
}