
import React, { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const PasswordInput = () => {
  const [visible, setVisible] = useState(false);
  const inputRef = useRef();

  const toggleVisibility = () => {
    setVisible(!visible);
    inputRef.current.type = visible ? 'password' : 'text';
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input 
        ref={inputRef} 
        type="password" 
        placeholder="Enter your password" 
        style={{ marginRight: '10px' }}
      />
      <button onClick={toggleVisibility} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        {visible ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  );
};

export default PasswordInput;