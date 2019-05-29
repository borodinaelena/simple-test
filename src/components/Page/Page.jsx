import {Route, withRouter, Switch, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import About from '../PageComponents/about.page'
import ContactUs from '../PageComponents/contact.page'
import NotFound from "../PageComponents/not-found.page";
import {Articles} from "../Articles/Articles";
import {Single} from "../Single/Single";
import { pageAction } from "../../actions";

class Page extends React.Component {

    componentDidMount(){
        this.getPage(this.props.match.params.link)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.link !== prevProps.match.params.link) {
            this.getPage(this.props.match.params.link);
        }
    }

    getPage(link){
        this.props.dispatch(pageAction.getPage(link))
    }

    render() {
        return (
            <div className="page p-4">
                <Switch>
                    <Route exact path="/articles/:sources" component={Articles} />
                    <Route path="/articles/:sources/:id" component={Single} />
                    <Route path='/about' component={About} />
                    <Route path='/contact-us' component={ContactUs} />
                    <Route component={NotFound} />
                    <Redirect from="/*" to="/page-not-found" />
                </Switch>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedPage = withRouter(connect(mapStateToProps)(Page));

export {connectedPage as Page}