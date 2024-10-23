import "./Post.css";

const Post = () => {
  return (
    <div className="post-container">
      <div className="post-upper">
        <h2 className="post-heading roboto-bold">Posts</h2>
        <div className="filter-wrap  roboto-regular">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#1C1B1F"
          >
            <path d="M400-240v-80h160v80H400ZM240-440v-80h480v80H240ZM120-640v-80h720v80H120Z" />
          </svg>
          Filter
        </div>
      </div>
      <div className="post-content">
        <div className="post">
          <h3 className="post-title roboto-bold">
            How Faith Transforms Lives: A Testimony
          </h3>
          <p className="post-overview roboto-light">
            Read this powerful testimony of how faith brought hope and
            healing...
          </p>
          <button className="post-cta roboto-bold">Read more</button>
        </div>
        <div className="post">
          <h3 className="post-title roboto-bold">
            Upcoming Church Events for 2024
          </h3>
          <p className="post-overview roboto-light">
            Get the details on all our exciting events lined up for this year...
          </p>
          <button className="post-cta roboto-medium">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
