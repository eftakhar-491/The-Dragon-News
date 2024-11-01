import React, { useState } from "react";

function BlogPage() {
  // State to store the list of blog posts
  const [posts, setPosts] = useState([]);

  // State for the new blog title and content
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Function to handle adding a new blog post
  const handleAddPost = () => {
    if (title && content) {
      const newPost = { title, content, date: new Date().toLocaleDateString() };
      setPosts([newPost, ...posts]); // Add new post to the top of the list
      setTitle(""); // Reset title field
      setContent(""); // Reset content field
    } else {
      alert("Title and Content are required!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Blog Page</h1>

      {/* Form to add a new blog post */}
      <div className="border-2" style={{ marginBottom: "20px" }}>
        <input
          className="border-2"
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <textarea
          className="border-2"
          placeholder="Blog Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows="5"
          style={{ width: "100%", padding: "8px" }}
        ></textarea>
        <button
          className="border-2"
          onClick={handleAddPost}
          style={{ padding: "10px 20px", marginTop: "10px" }}
        >
          Add Post
        </button>
      </div>

      {/* Display list of blog posts */}
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
            >
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <small>Posted on: {post.date}</small>
            </div>
          ))
        ) : (
          <p>No blog posts yet!</p>
        )}
      </div>
    </div>
  );
}

export default BlogPage;
