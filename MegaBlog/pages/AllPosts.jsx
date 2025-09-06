// import React, {useState, useEffect} from 'react'
// import { Container } from '../src/components/containers/container';
// import PostCard from "../src/components/PostCard";
// import appwriteService from "../src/appwrite/config";

// // useEffect(() => {
// //   appwriteService.getPosts([]).then((posts) => {
// //     if (posts) setPosts(posts.documents);
// //   });
// // }, []);

// function AllPosts() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {}, [])
//     appwriteService.getPosts([]).then((posts) => {
//         if (posts) {
//             setPosts(posts.documents)
//         }
//     })
//   return (
//     <div className='w-full py-8'>
//         <Container>
//             <div className='flex flex-wrap'>
//                 {posts.map((post) => (
//                     <div key={post.$id} className='p-2 w-1/4'>
//                         <PostCard {...post} />
//                     </div>
//                 ))}
//             </div>
//             </Container>
//     </div>
//   )
// }

// export default AllPosts




import React, { useState, useEffect } from "react";
import { Container } from "../src/components/containers/container";
import PostCard from "../src/components/PostCard";
import appwriteService from "../src/appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((result) => {
        if (result) {
          setPosts(result.documents);
        } else {
          setError("Failed to fetch posts");
        }
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setError("Something went wrong while fetching posts.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {loading && <p>Loading posts...</p>}

        {error && !loading && (
          <p className="text-red-500">{error}</p>
        )}

        {!loading && !error && posts.length === 0 && (
          <p>No posts found</p>
        )}

        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
