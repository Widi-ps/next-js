'use client';
import React from 'react';

const ViewUserButton = () => {
  const handleButton = () => {
    alert('Aku di Klik euy');
  };
  return (
    <>
      <button onClick={handleButton}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
