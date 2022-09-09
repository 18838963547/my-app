// 路由版本 --- 6

import React, { lazy } from "react"
import { NavLink,Routes,Route,useRoutes,Navigate} from "react-router-dom"
import About from "./About"
import Home from './Home'

// const Home = lazy(()=>import('./Home'))
// const About = lazy(()=>import('./About'))

export default function (params) {
    // 注册路由表
    const element = useRoutes([
        {path:'/about',element:<About></About>},
        {path:'/home',element:<Home />},
    ])
    return (
        <div>
            <NavLink to='/about'>about</NavLink> &nbsp;&nbsp;&nbsp;
            <NavLink to='/home'>home</NavLink>

            {/* <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/" element={<Navigate to='/home' />}></Route>
            </Routes> */}
            {element}
        </div>
    )
}