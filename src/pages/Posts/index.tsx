import { useStore } from "effector-react";
import { $posts } from "entity/posts/model";

export const PostsPage = () => {
  const posts: any = useStore($posts);

  return (
    <div>
      <h1>Список постов</h1>
      {Object.keys(posts).length !== 0 &&
        posts?.posts.map((post: any, index: number) => (
          <ul key={index}>
            <li>{post.title}</li>
          </ul>
        ))}
    </div>
  );
};
