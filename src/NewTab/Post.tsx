import React, { ReactElement } from 'react';
import styled from 'styled-components';

function Post(props: { post: PostInfo }): ReactElement {
  const { post } = props;

  return (
    <PostWrapper>
      <PostCard>
        <Thumbnail src={post?.ogImage?.url} />
        <Content>
          <Title>{post?.ogTitle}</Title>
          <Description></Description>
        </Content>
      </PostCard>
    </PostWrapper>
  );
}

export default Post;

const PostWrapper = styled.div`
  width: 33%;
  height: 50vh;
  padding: 20px 30px;
`;

const PostCard = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 3px 3px grey;
  border: 1px solid black;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 50%;
`;

const Content = styled.div``;

const Title = styled.div``;

const Description = styled.div``;
