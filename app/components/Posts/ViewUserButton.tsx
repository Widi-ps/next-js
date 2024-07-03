'use client';
import React from 'react';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({userId}) => {
  const handleButton = () => {
    alert(`User id : ${userId}`);
  };
  return (
    <>
      <button onClick={handleButton}>Lihat User</button>
    </>
  );
};

export default ViewUserButton;
