import React from 'react';

export default function PasswordInput(props) {
  const { password, setPassword } = props;

  return (
    <input
      type="password"
      onChange={(e) => setPassword(e.target.value)}
      value={password}
      placeholder="Password"
    />
  );
}