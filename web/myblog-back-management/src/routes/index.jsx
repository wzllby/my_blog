import { Navigate } from "react-router-dom";
import MainUi from '../MainUi'
import Login from '../Login'
import Publish from '../Publish'
import ArticleList from '../component/ArticleList'


const routes = [
    {
      path: '/main/*',
      element: <MainUi />,
       // 定义二级路由，注意不要加 /
       children: [
        {
          path: 'publish',
          element: <Publish />,
        },
        {
          path: 'artlist',
          element: <ArticleList />
        }
      ],
    },
    {
      path: '/login/*',
      element: <Login />,
    },
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
  ]

  export default routes;