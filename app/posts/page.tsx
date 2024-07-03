import React from 'react';
import styles from './postPage.module.css';
import CardList from '../components/Posts/CardList';
import ViewUserButton from '../components/Posts/ViewUserButton';

const base_url = 'https://jsonplaceholder.typicode.com/posts';

interface Iposts {
  key: number,
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async () => {
  const response = await fetch(base_url);
  const posts: Iposts[] = await response.json();
  return (
    <>
      <h1 className={styles.bgRed}>POSTINGAN PAGE</h1>
      {posts.map((post) => {
        return (
          <CardList key={post.id}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <ViewUserButton userId={post.userId}/>
          </CardList>
        );
      })}
      <p>{posts[0].body}</p>
    </>
  );
};

export default Posts;
