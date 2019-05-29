import {Link, withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Header extends React.Component {
    render() {
        const {link} = this.props.state.pages
        return (
            <header className="primary-header">
                <nav className="navbar justify-content-around navbar-expand-sm navbar-dark bg-dark">
                    <div className="col-4">
                        <Link className="navbar-brand" to="/">News Feed</Link>
                    </div>
                    <div className="col-8">
                        <div className="justify-content-end">
                            <div className="navbar-nav">
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbar" aria-controls="navbar"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon" />
                                </button>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end " id="navbar">
                            <ul className="navbar-nav">
                                <li className={`nav-item ${(link === 'home')?'current':''}`}>
                                    <Link className={`nav-link ${(link === 'home')?'current':''}`} to="/">Home</Link>
                                </li>
                                <li className={`nav-item ${(link === 'home')?'current':''}`}>
                                    <Link className={`nav-link ${(link === 'about')?'current':''}`} to="/about">About</Link>
                                </li>
                                <li className={`nav-item ${(link === 'home')?'current':''}`}>
                                    <Link className={`nav-link ${(link === 'contact-us')?'current':''}`} to="/contact-us">Contact Us</Link>
                                </li>
                                <li className={`nav-item ${(link === 'home')?'current':''}`}>
                                    <Link className={`nav-link ${(link === 'page-not-found')?'current':''}`} to="/page-not-found">404</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedHeader = withRouter(connect(mapStateToProps)(Header));
export { connectedHeader as Header };