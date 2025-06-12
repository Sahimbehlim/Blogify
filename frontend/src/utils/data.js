import {
  LuLayoutTemplate,
  LuTag,
  LuLayoutDashboard,
  LuGalleryVerticalEnd,
  LuMessageSquareQuote,
} from "react-icons/lu";

export const SIDE_MENU_DATA = [
  {
    id: "01",
    label: "Dashboard",
    path: "/user/dashboard",
    icon: LuLayoutDashboard,
  },
  {
    id: "02",
    label: "Blog Posts",
    path: "/user/posts",
    icon: LuGalleryVerticalEnd,
  },
  {
    id: "03",
    label: "Comments",
    path: "/user/comments",
    icon: LuMessageSquareQuote,
  },
];

export const BLOG_NAVBAR_DATA = [
  { id: "01", label: "Home", path: "/", icon: LuLayoutTemplate },
  { id: "02", label: "React JS", path: "/tag/React", icon: LuTag },
  { id: "03", label: "Next JS", path: "/tag/Next.js", icon: LuTag },
];
