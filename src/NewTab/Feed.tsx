import axios from 'axios';
import React, { ReactElement, useEffect, useState } from 'react';
import { readAllPosts } from '../domain/posts/storage';
import styled from 'styled-components';
import Post from './Post';

export default function (): ReactElement {
  const [data, setData] = useState<Array<LocalPostInfoData>>([]);

  useEffect(() => {
    (async () => {
      const posts = readAllPosts();
      setData(posts);
    })();
  }, []);

  return (
    <Posts>
      {data?.length > 0 ? (
        data.map((post) => <Post post={post} />)
      ) : (
        <>저장된 포스트가 없습니다.</>
      )}
    </Posts>
  );
}

const Posts = styled.div`
  flex: 4;
  display: flex;
  flex-wrap: wrap;
  padding: 2% 5%;
`;
