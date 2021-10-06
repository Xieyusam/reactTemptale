/**
 * 目前只兼容到二级路由
 *
 *
 *
 * */

import Home from "../view/home";
import otherPage from "../view/otherPage";
import login from "../view/login";
//
import questionCreate from "../view/questionnaire/create";
import questionList from "../view/questionnaire/list";

// 带布局以及会在菜单显示的页面
const menuRoute = [
  {
    label: "首页",
    name: "home",
    path: "/home",
    layout: "admin",
    menuShow: true,
    component: Home,
  },
  {
    label: "其他页面",
    name: "otherPage",
    path: "/otherPage",
    layout: "common",
    menuShow: false,
    component: otherPage,
  },
  {
    label: "问卷管理",
    name: "questionnaire",
    path: "/questionnaire",
    menuShow: true,
    childdren: [
      {
        label: "创建问卷",
        name: "questionCreate",
        path: "/questionnaire/questionCreate",
        layout: "admin",
        menuShow: false,
        component: questionCreate,
      },{
        label: "我的问卷",
        name: "questionList",
        path: "/questionnaire/questionList",
        layout: "admin",
        menuShow: true,
        component: questionList,
      },
    ],
  },
];

// // common布局
// const commonRoute = [
//     {
//         label:'登陆',
//         name:'login',
//         path:'login',
//         component:login
//     }
// ]

// 通常页面
const normalRoute = [
  {
    label: "登陆",
    name: "login",
    path: "/login",
    component: login,
  },
];

// 拍平数组
const flatRoute = (initialRoute)=>{
    let route = []
    initialRoute.forEach(parent => {
        if(parent.childdren && parent.childdren.length > 0){
            let childdrenRoute = parent.childdren.map(child=>{
                return child
            })
            route = route.concat(childdrenRoute)
        }else{
            route.push(parent)
        }
    });
    return route
}

const layoutRoute = flatRoute(menuRoute)
export { menuRoute, normalRoute,layoutRoute };
