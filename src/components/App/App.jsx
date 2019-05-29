import { connect } from 'react-redux'
import { Router, Route, Switch, Link } from 'react-router-dom'

import {history} from "../../helpers"

import Home from "../PageComponents/home.page";
import {Header} from "../Header/Header";
import {Page} from "../Page/Page";

class App extends React.Component {
    render() {
        const {sources} = this.props.state.articles
        const {link} = this.props.state.pages
        return (
            <Router history={history}>
                <div className="app">
                    <Header />
                    <div className="row no-gutters">
                        <div className="col-4">
                            <aside className="aside" >
                                <ul className="nav nav-pills flex-column">
                                    <li className="nav-item">
                                        <Link to="/articles/cnn"
                                              className={`nav-link ${(sources === 'cnn' && link === 'articles')?'current':''}`}>CNN News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/articles/google-news"
                                              className={`nav-link ${(sources === 'google-news' && link === 'articles')?'current':''}`}>Google News</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/articles/fox-news"
                                              className={`nav-link ${(sources === 'fox-news' && link === 'articles')?'current':''}`}>Fox News</Link>
                                    </li>
                                </ul>
                            </aside>
                        </div>
                        <div className="col-8">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/:link" component={Page} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };