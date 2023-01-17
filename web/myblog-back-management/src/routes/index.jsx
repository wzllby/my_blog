import { Navigate } from "react-router-dom";
import MainUi from '../MainUi'
import Login from '../Login'
import Publish from '../Publish'
import ArticleList from '../component/ArticleList'
import Label from '../component/Label'
import LabelList from '../component/BabelList'
import ClassList from '../component/ClassList'



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
        },
        {
          path: 'label',
          element: <Label />
        },
        {
          path: 'labelList',
          element: <LabelList />
        },
        {
          path: 'classList',
          element: <ClassList />
        }
      ],
    },
    {
      path: '/login/*',
      element: <Login />,
    },
    {
      path: '/main',
      element: <Navigate to="/main/label" />,
    },
    {
      path: '/',
      element: <Navigate to="/login/logi" />,
    },
  ]

  export default routes;