import { pageConstants } from '../constants'

const initState = {
    loading: true,
    errors: false,
    link: '',
    sources: ''
}

const pages = (state = initState, action) => {
    switch(action.type){
        case pageConstants.GET_PAGE_REQUEST:
            return {
                ...state,
                link: action.link,
            }
        case pageConstants.GET_PAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                page: action.page
            }
        case pageConstants.GET_PAGE_FAILURE:
            return state
        default:
            return state
    }
}
export default pages