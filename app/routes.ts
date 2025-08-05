import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/main-layout.tsx", [
    index("routes/home/home.tsx"),
    route("about", "routes/about/about.tsx"),
    route("contact", "routes/contact/contact.tsx"),
  ]),
] satisfies RouteConfig;
