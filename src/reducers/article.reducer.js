import { articleConstants } from '../constants'

const initState = {
    loading: false,
    error: {},
    params: {},
    data: {
        articles: []
    },
    article: {}
}

const articles = (state = initState, action) => {
    switch(action.type){
        case articleConstants.GET_ARTICLES_REQUEST:
            return {
                ...state,
                loading: action.loading
            }
        case articleConstants.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                data: action.data
            }
        case articleConstants.GET_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }

        case articleConstants.GET_ARTICLE_REQUEST:
            return {
                ...state,
                loading: action.loading
            }
        case articleConstants.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                loading: action.loading,
                article: action.item
            }
        case articleConstants.GET_ARTICLE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: action.loading
            }

        default:
            return state
    }
}
export default articles