import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home,Portfolio,Algorithm,WatchList,TradeLog, ContactUs, FundManagement } from '../Screens'
import { MenuLayout } from '../Components'
import allPaths from './paths'
import { Result, Button } from 'antd'

const Page404 = (props) => {
    const { history } = props
    return (
        <Result
            status='404'
            title='404'
            subTitle='Sorry, the page you visited does not exist.'
            extra={<Button
                type='primary'
                className='form-button'
                onClick={() => history.push('/')}
            >Back Home</Button>}
        />
    )
}

const Routes = () => {
    return (
        <Router>
            <Switch>
                <MenuLayout path={allPaths?.HOME} exact component={Home} />
                <MenuLayout path={allPaths?.ALGO} exact component={Algorithm} />
                <MenuLayout path={allPaths?.TRADE} exact component={TradeLog} />
                <MenuLayout path={allPaths?.WATCHLIST} exact component={WatchList} />
                <MenuLayout path={allPaths?.PORTFOLIO} exact component={Portfolio} />
                <MenuLayout path={allPaths?.FUNDMANAGEMENT} exact component={FundManagement} />
                <MenuLayout path={allPaths?.CONTACT} exact component={ContactUs} />
                <Route path='/:page404' exact component={Page404} />
            </Switch>
        </Router>
    )
}

export {
    Routes,
    Page404
}