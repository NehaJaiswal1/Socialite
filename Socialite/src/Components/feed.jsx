import React, { useState, useEffect } from 'react';
import dummyData from './data/data.json';
import './feed.css'; // Add a separate CSS file for styles

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(dummyData); // Set the posts from the dummy data
  }, []);

  return (
    <div className="feed-container">
      
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="post-header">
              <img src={post.profilePic} alt={post.name} className="profile-pic" />
              <div className="post-info">
                <span className="name">{post.name}</span>
                <span className="time">{post.time}</span>
              </div>
            </div>
            <div className="post-content">
              {post.postType === 'text' ? (
                <p>{post.postContent}</p>
              ) : (
                <img src={post.postContent} alt="Post content" className="post-image" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
