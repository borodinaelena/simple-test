import {articleAction} from "../../actions";
import List from "../List/List";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import ReactPaginate from 'react-paginate';
import queryString from 'query-string'

class Articles extends React.Component {
    constructor(props){
        super(props);
        this.handlePageClick = this.handlePageClick.bind(this)
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        this.getArticles(this.props.match.params.sources, values.q, values.page)
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.sources !== prevProps.match.params.sources) {
            const values = queryString.parse(this.props.location.search)
            this.getArticles(this.props.match.params.sources, values.q, values.page);
        }
    }

    getArticles(sources, q, page){
        this.props.dispatch(articleAction.getArticles(sources, q, page))
    }

    handlePageClick(e){
        const values = queryString.parse(this.props.location.search)
        this.getArticles(this.props.match.params.sources, values.q, e.selected*1+1);
    }

    render() {
        const {articles} = this.props.state.articles.data
        const {totalResults} = this.props.state.articles.data
        const {error, loading} = this.props.state.articles

        return (
            <div id="articles" className="p-2">
                <h1 className="text-capitalize">{this.props.match.params.sources}</h1>

                {loading &&
                <li className="loading">
                    <i className="fa fa-spinner fa-spin" />
                </li>
                }
                <ul className="list" style={{opacity: (articles && articles.loading) ? 0 : 1}}>
                    {error.message && <span className="text-danger">ERROR: {articles.error}</span>}

                    {!articles.length ? '' : articles.map(article => (<List article={article} key={article.title} />))}
                </ul>
                {totalResults > 10 &&
                <ReactPaginate previousLabel={"<"}
                                nextLabel={">"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={100}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={3}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination mt-3"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {state};
}

const connectedArticles = withRouter(connect(mapStateToProps)(Articles));

export {connectedArticles as Articles}