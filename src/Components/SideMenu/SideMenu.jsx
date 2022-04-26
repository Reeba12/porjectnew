import React, { useState, useEffect } from 'react'
import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import CardGiftcard from '@mui/icons-material/CardGiftcard'
import { setActiveMenu } from '../../utils/helpers'
import { drawerRoutes, allPaths } from '../../utils/constants'
import SavingsIcon from '@mui/icons-material/Savings'
import AdUnitsIcon from '@mui/icons-material/AdUnits'
import TokenIcon from '@mui/icons-material/Token'
import QuizIcon from '@mui/icons-material/Quiz'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Typography } from '@mui/material'

const { SubMenu } = Menu

const SideMenu = (props) => {
    const { location, inlineCollapsed, isAdmin, user } = props
    const [key, setKey] = useState(1)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', setSiderMargin)
        setSiderMargin()
    }, [])

    const setSiderMargin = () => {
        window.innerWidth < 500 ? setMobile(true) : setMobile(false)
    }

    const handleClick = (e) => {
        setKey(parseInt(e?.key))
    }
    console.log(user)
    return (
        <div className='home-main'>
            <div className='flex-row'>
                <div style={{ marginTop: mobile ? 56 : 64 }}>
                    <Menu
                        onClick={handleClick}
                        style={{ height: `calc(100vh - 65px)`, backgroundColor:"#fff", color:"#e91e63" }}
                        defaultOpenKeys={[setActiveMenu(location?.pathname)]}
                        defaultSelectedKeys={[setActiveMenu(location?.pathname)]}
                        mode='inline'
                        inlineCollapsed={inlineCollapsed}
                        >
                            <Typography variant='h4' sx={{margin:" 2em 0 1em  1em", fontWeight:"bold",color:"#e91e63"}}>
                                Welcome! < br />
                                {user.fullName}<br />
                                <Button variant='outlined' sx={{color:"#e91e63", border:"1px solid #e91e63"}}>View Profile &nbsp;</Button>
                            </Typography>
                         
                         
                        {drawerRoutes?.map((v, i) => {
                            // if (v?.isSubMenu && v?.children?.length) {
                                // return <SubMenu key={i} icon={v.icon} title={v?.title} style={{ fontSize: 18 }}>
                                //     {v?.children?.map((y, j) => {
                                        
                                //         return (
                                            
                                //             <Menu.Item key={`${i}-${j}`} icon={y.icon}>
                                //                 <Link
                                //                     to={y?.route}
                                //                     onClick={() => { return false }}
                                //                     className='side-list'
                                //                     >
                                //                         nfngjdf
                                //                     {console.log(y.title)}
                                //                 </Link>
                                //             </Menu.Item>
                                //         )
                                //     })}
                                // </SubMenu>
                            // }
                            return (
                                <>
                                
                                <Menu.Item key={i} icon={v.icon} sx={{color:"#e91e63"}}>   
                                    <Link
                                        to={v?.route}
                                        onClick={() => { return false }}
                                        className='side-list'
                                   style={{color:"#e91e63", fontSize:"1.2em"}}
                                        >
                                        {v.title}
                                        
                                    </Link>
                                </Menu.Item>
                                
                                </>
                            )
                        })}
                       
                    </Menu>
                </div>
            </div>
        </div >
    )
}

export default SideMenu