import {Provider} from 'react-redux'

import './index.css'

import {App} from './components/App/App'

import { store } from "./helpers/store"

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'))

module.hot.accept();