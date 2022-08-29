import { createStore, sample } from "effector";
// import { postsRoute } from "shared/routes";
import { getPostsFx, TPosts } from "shared/api/posts";
import { routes } from "shared/routes";

export const $posts: TPosts = createStore([]).on(
  getPostsFx.doneData,
  (_, posts) => posts
);

sample({
  clock: routes.posts.route.opened,
  target: getPostsFx,
});
