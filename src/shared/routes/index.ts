import { createRoute } from "atomic-router";
import { guard, sample } from "effector";
import { HomePage } from "pages/home";
import { getPostsFx } from "shared/api/posts";
import { NotFound404Page } from "pages/404";
import { PostsPage } from "pages/Posts";

export const routes = {
  home: { view: HomePage, path: "/", route: createRoute() },
  posts: { view: PostsPage, path: "/posts", route: createRoute() },
  notfound404: { view: NotFound404Page, path: "/404", route: createRoute() },
};

guard({ filter: routes.posts.route.$isOpened, target: getPostsFx });
