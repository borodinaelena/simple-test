import {articleConstants} from '../constants'

export const articleAction = {
    getArticles,
    getArticle
}

function getArticles(sources, q, page) {
    return {
        type: articleConstants.GET_ARTICLES_REQUEST,
        loading: true,
        params:{
            sources,
            q,
            page
        }
    }
}

function getArticle (sources, q) {
    return {
        type: articleConstants.GET_ARTICLE_REQUEST,
        loading: true,
        params:{
            sources,
            q
        }
    }
}