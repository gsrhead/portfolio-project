import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Navbar from "./Navbar";
import Home from "./Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter,
RouterProvider}
 from 'react-router-dom'
 import Aboutme from "./Aboutme";
 import Projects from "./Projects";
// this is react code and this will enable routing.
// child elements of root paths for HOME<NAVBAR< ECT. this user will go to each path because it is connected .
const router= createBrowserRouter([
  {
  path:"/",
  element: <Navbar/>,
  children: [
     {
      path:'/',
      element: <Home/>
    },
    {
      path:'about',
      element: <Aboutme/>
    },
    {
      path:'projects',
      element: <Projects/>
    },
  ]
}])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();


    