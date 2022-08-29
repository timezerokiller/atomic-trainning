import { createHistoryRouter } from "atomic-router";
import { Link, Route, RouterProvider } from "atomic-router-react";
import { createBrowserHistory } from "history";
import { sample } from "effector";
import styles from "./App.module.css";
import { routes } from "shared/routes";

export const history = createBrowserHistory();

const router = createHistoryRouter({
  routes: Object.values(routes),
});

router.setHistory(history);

sample({
  clock: router.routeNotFound,
  fn: () => ({}),
  target: routes.notfound404.route.open,
});

export const App = () => {
  return (
    <RouterProvider router={router}>
      <div className={styles.menu}>
        <Link to={routes.home.route}>Главная</Link>
        <Link to={routes.posts.route}>Посты</Link>
      </div>
      {Object.values(routes).map(({ view, route }, index) => (
        <Route key={index} route={route} view={view} />
      ))}
    </RouterProvider>
  );
};
