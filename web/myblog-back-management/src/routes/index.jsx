import { Navigate } from "react-router-dom";
import MainUi from '../MainUi'
import Login from '../Login'
import Publish from '../Publish'


const routes = [
    {
      path: '/main',
      element: <MainUi />,
    },
    {
      path: '/login',
      element: <Login />,
      // 定义二级路由，注意不要加 /
      children: [
        {
          path: 'publish',
          element: <Publish />,
        },
      ],
    },
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
  ]

  export default routes;