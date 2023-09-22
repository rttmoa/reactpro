import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";


const articlesRouter: Array<RouteObject> = [
  {
    element: <LayoutIndex />,
    meta: {
      title: "Articles"
    },
    children: [
			// 添加 list
      {	
        path: "/articles/list",
        element: lazyLoad(React.lazy(() => import("@/views/articles/List"))),
        meta: {
          requiresAuth: true,
          title: "List",
          key: "list"
        }
      },
			// 添加 ReactAdminShareBikes
			{	
        path: "/articles/bike",
        element: lazyLoad(React.lazy(() => import("@/views/articles/Bike"))),
        meta: {
          requiresAuth: true,
          title: "bike",
          key: "bike"
        }
      },
			// 添加 夕颜后台
			{	
        path: "/articles/xy",
        element: lazyLoad(React.lazy(() => import("@/views/articles/Xy"))),
        meta: {
          requiresAuth: true,
          title: "xy",
          key: "xy"
        }
      },
			// 添加 react-umi-dva-admin
			{	
				path: "/articles/UmiAdmin",
				element: lazyLoad(React.lazy(() => import("@/views/articles/UmiAdmin"))),
				meta: {
					requiresAuth: true,
					title: "UmiAdmin",
					key: "UmiAdmin"
				}
			},
			// 添加 react-admin-auth
			{	
				path: "/articles/DzAdmin",
				element: lazyLoad(React.lazy(() => import("@/views/articles/DzAdmin"))),
				meta: {
					requiresAuth: true,
					title: "DzAdmin",
					key: "DzAdmin"
				}
			},
			// 添加 WcsControl
			{	
				path: "/articles/WcsControl",
				element: lazyLoad(React.lazy(() => import("@/views/articles/WcsControl"))),
				meta: {
					requiresAuth: true,
					title: "WcsControl",
					key: "WcsControl"
				}
			},


    ]
  }
];

export default articlesRouter;
