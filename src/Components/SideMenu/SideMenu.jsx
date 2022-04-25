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
    return (
        <div className='home-main'>
            <div className='flex-row'>
                <div style={{ marginTop: mobile ? 56 : 64 }}>
                    <Menu
                        onClick={handleClick}
                        style={{ height: `calc(100vh - 65px)` }}
                        defaultOpenKeys={[setActiveMenu(location?.pathname)]}
                        defaultSelectedKeys={[setActiveMenu(location?.pathname)]}
                        mode='inline'
                        inlineCollapsed={inlineCollapsed}
                    >
                        {drawerRoutes?.map((v, i) => {
                            if (v?.isSubMenu && v?.children?.length) {
                                return <SubMenu key={i} icon={v.icon} title={v?.title} style={{ fontSize: 18 }}>
                                    {v?.children?.map((y, j) => {
                                        return (
                                            <Menu.Item key={`${i}-${j}`} icon={y.icon}>
                                                <Link
                                                    to={y?.route}
                                                    onClick={() => { return false }}
                                                    className='side-list'
                                                >
                                                    {y.title}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })}
                                </SubMenu>
                            }
                            return (
                                <Menu.Item key={i} icon={v.icon}>
                                    <Link
                                        to={v?.route}
                                        onClick={() => { return false }}
                                        className='side-list'
                                    >
                                        {v.title}
                                    </Link>
                                </Menu.Item>
                            )
                        })}
                        {user?.userType === 'business' ? <Menu.Item key={7} icon={<QuizIcon />}>
                            <Link
                                to={allPaths.QUESTIONS}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Questions
                            </Link>
                        </Menu.Item> : null}
                        {user?.userType === 'business' && user?.subscription?.subscriptionTypes?.includes('loyalty') ? <Menu.Item key={8} icon={<AdUnitsIcon />}>
                            <Link
                                to={allPaths.ADVERTISMENT}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Advertisement
                            </Link>
                        </Menu.Item> : null}
                        {user?.userType === 'business' && user?.subscription?.subscriptionTypes?.includes('loyalty') ? <Menu.Item key={9} icon={<TokenIcon />}>
                            <Link
                                to={allPaths.COUPON}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Coupons
                            </Link>
                        </Menu.Item> : null}
                        {user?.userType === 'guest' ? <Menu.Item key={10} icon={<SavingsIcon />}>
                            <Link
                                to={allPaths.SAVINGS}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Savings
                            </Link>
                        </Menu.Item> : null}
                        {user?.userType === 'business' ? <Menu.Item key={11} icon={<NotificationsIcon />}>
                            <Link
                                to={allPaths.NOTIFICATION}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Notification
                            </Link>
                        </Menu.Item> : null}
                        {!isAdmin && user?.subscription && user?.subscription?.subscriptionTypes?.indexOf('ownCard') !== -1 ? <Menu.Item key={12} icon={<CardGiftcard />}>
                            <Link
                                to={allPaths.CARDS}
                                onClick={() => { return false }}
                                className='side-list'
                            >
                                Cards
                            </Link>
                        </Menu.Item> : null}
                    </Menu>
                </div>
            </div>
        </div >
    )
}

export default SideMenu