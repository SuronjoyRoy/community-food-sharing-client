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



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/avaiablefoods',
          element:<AvailableFoods></AvailableFoods>
        },
        {
          path:'/addfood',
          element:<AddFood></AddFood>
        },
        {
          path:'/managemyfoods',
          element:<ManageMyFoods></ManageMyFoods>
        },
        {
          path:'/myfoodrequest',
          element:<MyFoodRequest></MyFoodRequest>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/registration',
          element:<Registration></Registration>
        }
      ]
    },
  ]);


  export default router;