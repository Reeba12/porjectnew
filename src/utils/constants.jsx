import HomeOutlined from '@ant-design/icons/HomeOutlined'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import allPaths from '../Config/paths'

const bgColor = '#0adc00'

const drawerRoutes = [
    {
        title: 'Home',
        route: allPaths.HOME,
        icon: <HomeOutlined />
    },
    {
        title: 'Portfolio',
        route: allPaths.PORTFOLIO,
        icon: <CameraAltIcon />
    },
    {
        title: 'Trade Log',
        route: allPaths.TRADE,
        icon: <SignalCellularAltIcon />
    },
    {
        title: 'WatchList',
        route: allPaths.WATCHLIST,
        icon: <BookmarkIcon />
    },
    {
        title: 'Algorithm Mart',
        route: allPaths.ALGO,
        icon: <AccountTreeIcon />
    },
    {
        title: 'Fund Management',
        route: allPaths.FUNDMANAGEMENT,
        icon: <ShoppingBagIcon />
    },
    {
        title: 'Contact us',
        route: allPaths.CONTACT,
        icon: <PhoneEnabledIcon />
    }
]

export {
    bgColor,
    drawerRoutes,
    allPaths,
}

