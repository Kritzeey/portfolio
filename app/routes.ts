import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout.tsx", [
    index("pages/home/home.tsx"),
    route("about", "pages/about/about.tsx"),
  ]),
] satisfies RouteConfig;
