import { COLLAPSED } from '../types'

const initialState = {
    isTourOpen: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case COLLAPSED: {
            return { ...state, inlineCollapsed: action.inlineCollapsed }
        }
        default: {
            return state
        }
    }
}

export default reducer