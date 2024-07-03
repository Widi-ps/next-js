import React from 'react';
import styles from './postPage.module.css';
import CardList from '../components/Posts/CardList';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

const Posts = async () => {
  const response = await fetch(base_url);
  const posts = await response.json();
  return (
    <>
      <h1 className={styles.bgRed}>POSTINGAN PAGE</h1>
      <p>{posts[0].body}</p>
      <CardList>
        <p>Hello</p>
        <i>HI !!</i>
      </CardList>
    </>
  );
};

export default Posts;
