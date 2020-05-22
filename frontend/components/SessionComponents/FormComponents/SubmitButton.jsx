import React from 'react';

export default function SubmitButton(props) {
  const { formType } = props;

  return (
    <input id="submit-input" type="submit" value={formType} />
  );
}