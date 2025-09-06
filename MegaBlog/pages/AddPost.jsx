import React from 'react'
import Container from "../src/components/containers/container";
import PostForm from "../src/post-from/PostForm";
import { Editor } from '@tinymce/tinymce-react';
// import { PostForm } from '../src/post-from/PostForm';
// // import PostForm from "../post-from/PostForm";



function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost