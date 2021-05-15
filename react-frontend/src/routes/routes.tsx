import AllOutIcon from "@material-ui/icons/AllOut";
import DashboardIcon from "@material-ui/icons/Dashboard";
import React from "react";
import Album from "../component/Album";
import Checkout from "../component/checkout/Checkout";
import Dashboard from "../component/Dashboard";
import Deposits from "../component/Deposits";
import { Orders } from "../component/Order";
import Pricing from "../component/pricing";
import { SignIn } from "../component/SignIn";
import { SignUp } from "../component/SignUp";
import { UserList } from "../component/UserList";

export const dashboardRoutes = [
  {
    path: "/signin",
    name: "Sign In",
    icon: <DashboardIcon></DashboardIcon>,
    component: <SignIn></SignIn>,
    layout: "/signin",
  },
  {
    path: "/SignUp",
    name: "SignUp",
    icon: <DashboardIcon></DashboardIcon>,
    component: <SignUp></SignUp>,
    layout: "/signup",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <DashboardIcon></DashboardIcon>,
    component: <Dashboard></Dashboard>,
    layout: "/dashboard",
  },
  {
    path: "/admin",
    name: "admin",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Dashboard></Dashboard>,
    layout: "/admin",
  },
  {
    path: "/dashboard/checkout",
    name: "/dashboard/checkout",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Checkout></Checkout>,
    layout: "/admin",
  },
  {
    path: "/",
    name: "Sign In",
    icon: <DashboardIcon></DashboardIcon>,
    component: <SignIn></SignIn>,
    layout: "/",
  },
];
export const secondaryRoutes = [
  {
    path: "/dashboard/checkout",
    name: "/dashboard/checkout",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Checkout></Checkout>,
    layout: "/dashboard/checkout",
  },
  {
    path: "/dashboard/pricing",
    name: "/dashboard/pricing",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Pricing></Pricing>,
    layout: "/dashboard/pricing",
  },
  {
    path: "/dashboard/orders",
    name: "/dashboard/order",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Orders></Orders>,
    layout: "/dashboard/orders",
  },
  {
    path: "/dashboard/album",
    name: "/dashboard/album",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Album></Album>,
    layout: "/dashboard/album",
  },
  {
    path: "/dashboard/deposits",
    name: "/dashboard/deposits",
    icon: <AllOutIcon></AllOutIcon>,
    component: <Deposits></Deposits>,
    layout: "/dashboard/deposits",
  },
  {
    path: "/dashboard/userlist",
    name: "/dashboard/userlist",
    icon: <AllOutIcon></AllOutIcon>,
    component: <UserList></UserList>,
    layout: "/dashboard/userlist",
  },
];
