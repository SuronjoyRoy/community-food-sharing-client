import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Error from "../pages/Error/Error";
import AvailableFoods from "../pages/Home/AvailableFoods/AvailableFoods";
import AddFood from "../pages/Home/AddFood/AddFood";
import ManageMyFoods from "../pages/Home/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../pages/Home/MyFoodRequest/MyFoodRequest";
import Login from "../pages/Home/Login/Login";
import Registration from "../pages/Home/Registration/Registration";
import FoodDetails from "../pages/Home/Home/HomeSection/FoodDetails";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://community-food-sharing-server-xi.vercel.app/foods')
        },
        {
          path:'/avaiablefoods',
          element:<AvailableFoods></AvailableFoods>,
          loader: () => fetch('https://community-food-sharing-server-xi.vercel.app/foods')
        },
        {
          path:'/addfood',
          element:<PrivateRoutes><AddFood></AddFood></PrivateRoutes>
        },
        {
          path:'/managemyfoods',
          element:<PrivateRoutes><ManageMyFoods></ManageMyFoods></PrivateRoutes>
        },
        {
          path:'/myfoodrequest',
          element:<PrivateRoutes><MyFoodRequest></MyFoodRequest></PrivateRoutes>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        },
        {
          path:'/avaiablefoods/:id',
          element:<FoodDetails></FoodDetails>,
          // loader:({params}) => fetch(`https://community-food-sharing-server-xi.vercel.app/foods/${params.id}`)
        }
      ]
    },
  ]);


  export default router;