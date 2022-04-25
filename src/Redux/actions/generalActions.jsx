import { COLLAPSED } from '../types'

const setCollapsed = (inlineCollapsed) => {
    return {
        type: COLLAPSED,
        inlineCollapsed
    }
}

export {
    setCollapsed
}