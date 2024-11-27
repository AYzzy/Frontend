import Layout from "../layout/layout";
import SignUp from "../auth/SignUp"
import Login from "../auth/Login"
import { Children } from "react";

const ROUTES = [

  {
    path: "/",
    element: <SignUp/>
  },
  {
    path: "/",
    element: <Login/>
   },
  {
    path: "/movie",
    element: <Layout/>,
    Children:[
      
    ]
  }
]

export default ROUTES