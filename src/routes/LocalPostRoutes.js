import LocalPostList from "../containers/localPost/LocalPostList";
import LocalPostForm from "../containers/localPost/LocalPostForm";

const routes = [
  {
    path: "/localPosts",
    component: LocalPostList,
  },
  {
    path: "/localPosts_new",
    component: LocalPostForm,
  },
  {
    path: "/localPosts/:postId",
    component: LocalPostForm,
  },
];

// eslint-disable-next-line import/prefer-default-export
export { routes as localPostRoutes };
