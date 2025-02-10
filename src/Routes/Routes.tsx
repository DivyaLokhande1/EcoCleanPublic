import React from "react";

export interface RouteConfig {
    path: string;
    name: string;
    component: React.LazyExoticComponent<React.FC>;
    children?:RouteConfig[]
  }
  
  const Home = React.lazy(() => import("../Pages/Home/Home"));
  const LoginAndSignup = React.lazy(() => import("../Pages/LoginAndSignUp/LoginAndSignUp"));
  const Login = React.lazy(() => import("../Pages/LoginAndSignUp/Login"));
  const Register = React.lazy(() => import("../Pages/LoginAndSignUp/Register"));
  const ForgotPassword = React.lazy(() => import("../Pages/LoginAndSignUp/ForgotPassword"));
  const NotFound = React.lazy(()=> { return import("../Pages/NotFound/NotFound")})


  
  export const routes: RouteConfig[] = [
    { path: "/", name: "Home", component: Home },
    { path: "/loginandsignup", name: "LoginAndSignup", component: LoginAndSignup,
      children:[
      { path: "/loginandsignup/login", name: "Login", component: Login },
      { path: "/loginandsignup/register", name: "Register", component: Register }
      ],
    }, 
    { path: "/loginandsignup/login/forgotpassword", name: "ForgotPassword", component: ForgotPassword },
    { path: "*", name: "NotFound", component: NotFound },
  ];
  