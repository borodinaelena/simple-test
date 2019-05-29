import { combineReducers } from 'redux';
import articles from './article.reducer';
import pages from './page.reducer';

const rootReducer = combineReducers({
    articles,
    pages
});

export default rootReducer;

