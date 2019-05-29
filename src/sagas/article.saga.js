import { put, takeEvery } from 'redux-saga/effects'
import { articleConstants } from '../constants/article.constants'
import {articleService} from "../services";

function* fetchArticles (action) {
    try {
        const data = yield articleService.get(
            action.params.sources,
            action.params.q,
            action.params.page
        )
        yield put({type: articleConstants.GET_ARTICLES_SUCCESS, data, loading: false, error: {}})
    } catch (error) {
        yield put({type: articleConstants.GET_ARTICLES_FAILURE, error, loading: false})
    }
}

function* fetchArticle (action) {
    try {
        const data = yield articleService.get(
            action.params.sources,
            action.params.q
        )
        yield put({type: articleConstants.GET_ARTICLE_SUCCESS, item: data.articles[0], loading: false, error: {}})
    } catch (error) {
        yield put({type: articleConstants.GET_ARTICLE_FAILURE, error, loading: false})
    }
}

function* articleSaga() {
    yield takeEvery(articleConstants.GET_ARTICLES_REQUEST, fetchArticles)
    yield takeEvery(articleConstants.GET_ARTICLE_REQUEST, fetchArticle)
}

export {articleSaga as articleSaga}

