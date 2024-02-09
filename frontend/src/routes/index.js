import Login from "../pages/public/Login";
import SignUp from "../pages/public/SignUp";

export const registerationPublicRoutes = [
  {
    path: "/register",
    component: SignUp,
  },
  {
    path: "/login",
    component: Login,
  },
];
