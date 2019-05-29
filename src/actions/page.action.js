import {pageConstants} from '../constants'

export const pageAction = {
    getPage
}

function getPage(link) {
    return {
        type: pageConstants.GET_PAGE_REQUEST,
        loading: true,
        link
    }
}