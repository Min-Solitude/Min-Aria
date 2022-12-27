import { HeaderOnly } from "@/components/Layout";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";
const publicRoutes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/about",
        component: About,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: "/search",
        component: Search,
        layout: null,
    },
];
const privateRoutes = [];
export { privateRoutes, publicRoutes };
