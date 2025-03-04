import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../Layouts/LayoutHome/Layouts";
import AboutUs from "../pages/AboutUs/AboutUs";
import SignIn from "../pages/SingIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import ProfileUser from "../pages/ProfileUser/ProfileUser";
import LayoutPerfil from "../Layouts/LayoutPerfil/LayoutPerfil";
import MyMessages from "../pages/MyMessages/MyMessages";
import ProfilePhotographer from "../pages/ProfilePhotographer/ProfilePhotographer";
import MyDates from "../pages/MyDates/MyDates";
import MyGalery from "../pages/MyGalery/MyGalery";
import MyEvents from "../pages/MyEvents/MyEvents";
import EventsImages from "../pages/EventsImages/EventsImages";
import PhotosGaleryPhotographer from "../pages/MyGalery/PhotosGalery/PhotosGaleryPhotographer";
import LayoutProfileUser from "../Layouts/LayoutProfileUser/LayoutProfileUser";
import MyDatesUser from "../pages/ProfileUser/MyDatesUser/MyDatesUser";
import ShowPhotographers from "../pages/ProfileUser/ShowPhotographers/ShowPhotographers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
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
    children: [
      {
        path: "/profile-photographer",
        element: <ProfilePhotographer />,
        
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
      {
        path: '/events-boda',
        element: <EventsImages tipo="Boda" />, 
      },
      {
        path: '/events-cumpleaños',
        element: <EventsImages tipo="Cumpleaños" />, 
      },
      {
        path: '/events-bautizo',
        element: <EventsImages tipo="Bautizo" />,
      },
      {
        path: '/events-comuniones',
        element: <EventsImages tipo="Comuniones" />,
      },
      {
        path: '/events-empresa',
        element: <EventsImages tipo="Empresa" />,
      },
      {
        path: '/events-bebes',
        element: <EventsImages tipo="Bebes" />,
      },
      {
        path: "/profile-photographer/:photographerId",
        element: <ProfilePhotographer />,
      },
      {
        path: "/my-dates-user/:photographerId",
        element: <MyDatesUser />,
      },
    ],
  },
    {
      path: "/",
      element: <LayoutProfileUser />,
      children: [
        {
          path: "/profile-user",
          element: <ProfileUser />,
        },
        {
          path: "/my-dates-user",
          element: <MyDatesUser />,
        },
        {
          path: "/photographers",
          element: <ShowPhotographers />,
          
        }
       
      ]

    
  },
]);

export default router;