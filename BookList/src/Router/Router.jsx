 import Login from "../auth/Login"
 import SignUp from "../auth/SignUp"
import BooklistPage from "../components/BookListPage"

 const router =[
  {
    path: "/Login",
    element: <Login/>
  },

  {
    path: "/SignUp",
    element: <SignUp/>
  },

  {
    path : "booklist",
    element: <BooklistPage/>
  }

 ]

 export default router