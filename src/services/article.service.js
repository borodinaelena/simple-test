import axios from 'axios'
import { apikey } from "../constants/apikey";

export const articleService = {
    get
}

function get(sources, q = null, page=1){
    return axios({
        method: 'get',
        url: apikey.apiHost,
        params: {
            language: 'en',
            q,
            sources,
            apiKey: apikey.key,
            pageSize: 10,
            page
        }
    }).then(handleResponse)
}

/**
 * handle response
 *
 * @param response
 * @returns {void|PromiseLike<T | never>|Promise<T | never>|*}
 */
function handleResponse(response) {
    const data = response.data;

    if (response.status !== 200) {
        location.replace('/404');

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}