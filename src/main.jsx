import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs';
import AuthProbider from './payges/Shayerd/AuthProbider/AuthProbider';



ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <AuthProbider>
        <RouterProvider router={router} />
      </AuthProbider>
    </React.StrictMode>
  </div>

);