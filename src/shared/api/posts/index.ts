import { createEffect } from "effector";

export const getPostsFx = createEffect(async () => {
  const req = await fetch("https://dummyjson.com/posts");
  return req.json();
});

export type TPosts = Awaited<ReturnType<typeof getPostsFx>>;
