import React from 'react'
import { Container, PostForm as PostFormComponent } from '../components';

function AddPost() {
  return (
    <div py-8>
      <Container>
        <PostFormComponent/>
      </Container>
      </div>
  )
}

export default AddPost;