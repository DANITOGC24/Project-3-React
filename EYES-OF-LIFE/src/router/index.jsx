import { createBrowserRouter, redirect } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/LayoutHome/Layouts";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignIn from "../pages/SingIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

import LayoutPerfil from "../Layouts/LayoutPerfil/LayoutPerfil";
import MyMessages from "../pages/MyMessages/MyMessages";
import ProfilePhotographer from "../pages/ProfilePhotographer/ProfilePhotographer";
import MyDates from "../pages/MyDates/MyDates";
import MyGalery from "../pages/MyGalery/MyGalery";
import MyEvents from "../pages/MyEvents/MyEvents";
import PhotosGaleryPhotographer from "../pages/MyGalery/PhotosGalery/PhotosGaleryPhotographer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/"); 
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/about-us",
        element: <AboutUs />,
      },

      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },

  {
    path: "/",
    element: <LayoutPerfil />,
    loader: () => {
      if (!localStorage.getItem("token")) {
        return redirect("/"); 
      } else {
        return null;
      }
    },
    children: [
      {
        path: "/profile-photographer",
        element: <ProfilePhotographer />,
        loader: () => {
          if (localStorage.getItem('role') === 'client') {
            return redirect('/')
          } else {
            return null
          }
        }
      },
      {
        path: "/my-messages",
        element: <MyMessages />,
      },
      {
        path: "/my-dates",
        element: <MyDates />,
      },
      {
        path: "/my-galery",
        element: <MyGalery />,
    
      },
      {
        path: "/my-galery/:photoId",
        element: <PhotosGaleryPhotographer />,
      },
      {
        path: "/my-events",
        element: <MyEvents />,
      },
    ], 
    
    

    
  },
]);

export default router;