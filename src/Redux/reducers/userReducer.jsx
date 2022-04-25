import { LOGIN_USER } from '../types'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return state
        }
        default: {
            return state
        }
    }
}

export default reducer