import { createBrowserRouter } from "react-router-dom";
import Mein from "../Layout/Mein";
import Home from "../payges/Home/Home/Home";
import Error from "../payges/Shayerd/Error/Error";

import Login from "../payges/Login/Login";
import Regiser from "../payges/Login/Regiser";
import Checkout from "../payges/Home/Checkout/Checkout";
import Bookings from "../payges/Home/Checkout/bokings/Bookings";
import PrivateRoute from "../payges/Shayerd/PrivateRoute/PrivateRoute";




const router = createBrowserRouter([
    {
      path: "/",
      element:<Mein></Mein>,
      errorElement:<Error></Error>,
      children:[
          {
            path:"/",
            element:<Home></Home>
          },
          {
            path:"login",
            element:<Login></Login>
           
          },
          {
            path:"register",
            element:<Regiser></Regiser>
           
          },
          {
            path:"checkout/:id",
            element:<Checkout></Checkout>,
            loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
           
          },
          {
            path:"bookings",
            element:<PrivateRoute><Bookings/></PrivateRoute>,
           
          },

      ]
    },
  ]);

  export default router