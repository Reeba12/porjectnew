import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router-dom'
import { loginUser, removeUser } from '../../Redux/actions/authActions'
import Header from './Header'
import SideMenu from '../SideMenu/SideMenu'
import { GET } from '../../utils/apis'
import apiUrl from '../../Config/api'
import { setCollapsed } from '../../Redux/actions/generalActions'
import { allPaths } from '../../utils/constants'
import axios from 'axios'

const MenuLayout = ({ component: Component, ...rest }) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.authReducer.user)
    const inlineCollapsed = useSelector(state => state.generalReducer.inlineCollapsed)

    useEffect(() => {
        window.addEventListener('resize', setWindowWidth)
        setWindowWidth()
    }, [])

    const setWindowWidth = () => {
        window.innerWidth < 500 ? dispatch(setCollapsed(true)) : dispatch(setCollapsed(false))
    }

    const authActions = {
        loginUser: (e) => dispatch(loginUser(e)),
        removeUser: () => dispatch(removeUser())
    }

    const userActions = {
    }

    const generalActions = {
        setCollapsed: (e) => dispatch(setCollapsed(e))
    }

    // if (!user) {
    //     return (
    //         <Redirect to={allPaths?.LOGIN} />
    //     )
    // }

    return (
        <Route
            {...rest}
            render={props => <AddMenu {...props} component={Component} user={user} authActions={authActions} inlineCollapsed={inlineCollapsed} dispatch={dispatch} generalActions={generalActions} userActions={userActions} />}
        />
    )
}

const AddMenu = ({ component: Component, ...props }) => {
    const { user, dispatch, history, location } = props

    // useEffect(() => {
    //     if (user) {
    //         getUser()
    //         let timeZone = momentTz.tz.zonesForCountry(user?.country || 'NL')
    //         momentTz.tz.setDefault(timeZone[0] || 'Europe/Amsterdam')
    //     }

    //     try {
    //         axios.post(`${apiUrl}/api/get/test`)
    //     }
    //     catch (e) {
    //     }
    // }, [props?.location?.pathname])

    // const getUser = () => {
    //     axios.get(`${GET.USER_BY_ID}/${user._id}`)
    //         .then((res) => {
    //             const { data } = res
    //             if (data.success) {
    //                 dispatch(loginUser(data.user))
    //             }
    //             else {
    //                 history?.replace(allPaths?.LOGIN)
    //                 dispatch(removeUser())
    //             }
    //         })
    //         .catch((e) => {
    //             dispatch(removeUser())
    //         })
    // }

    // if (!user) {
    //     return (
    //         <Redirect to={allPaths?.LOGIN} />
    //     )
    // }

    return (
        <div className='helper-main'>
            <div className='menu-header'>
                <Header
                    {...props}
                />
            </div>
            <div className='menu-flex'>
                <div className='side-menu1'>
                    <SideMenu {...props} />
                </div>
                <div
                    className={`helper-comp ${location?.pathname !== allPaths.HOME && 'background-layout'}`}
                    style={{
                        marginLeft: props?.inlineCollapsed ? 80 : user?.userType === 'business' && user?.subscription?.subscriptionTypes && user?.subscription?.subscriptionTypes?.indexOf('loyalty') !== -1 ? 180 : 164,
                    }}
                >
                    <div style={{ paddingLeft: 20 }}>
                        <Component
                            {...props}
                            // getUser={getUser}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuLayout