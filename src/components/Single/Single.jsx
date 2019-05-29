import moment from 'moment'
import {articleAction} from '../../actions'
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";

class Single extends React.Component {
    componentWillMount(){
        this.props.dispatch(articleAction.getArticle(this.props.match.params.sources, this.props.match.params.id))
    }

    render (){
        const {article} = this.props.state.articles
        const {error, loading} = this.props.state.articles
        return (
            loading ?
                    <div className="loading">
                        <i className="fa fa-spinner fa-spin" />
                    </div>
                    :
                    error.message ?
                        <div className="alert alert-danger">{error.message}</div>
                        :
                        <div className="article single mt-3">
                            <div className="text-center">
                                <h1>{article.title}</h1>
                            </div>
                            {article.urlToImage &&
                            <div className="text-center">
                                <img src={article.urlToImage} alt={article.title} />
                            </div>
                            }
                            <p className="pt-4 position-relative text">
                              {article.content || article.description}
                              <a className="position-absolute" href={article.url} />
                            </p>

                            <div className="row">
                                <div className="col-6">
                                    <div className="author">{article.author}</div>
                                </div>
                                <div className="col-6">
                                    <div className="published text-right">{moment(article.publishedAt).format('MMM Do YY')}</div>
                                </div>
                            </div>
                        </div>


        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedSingle = withRouter(connect(mapStateToProps)(Single));

export {connectedSingle as Single}