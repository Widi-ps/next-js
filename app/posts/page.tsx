import React from 'react';
import styles from './postPage.module.css';
import ViewUserButton from '../components/ViewUserButton';

const Posts = () => {
  return (
    <>
      <h1 className={styles.bgRed}>POSTINGAN PAGE</h1>
      <ViewUserButton />
    </>
  );
};

export default Posts;
