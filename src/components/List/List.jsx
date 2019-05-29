import { Link } from 'react-router-dom'
import moment from 'moment'

const List = (props) => {
    return (
        <li className="article mt-3">
            <h3>{props.article.title}</h3>
            <div className="content">
                <div className="row">
                    {props.article.urlToImage &&
                    <div className="col-4">
                        <img src={props.article.urlToImage} alt={props.article.title} />
                    </div>
                    }
                    <div className="col-8">
                        <p>{props.article.description}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="author">{props.article.author}</div>
                </div>
                <div className="col-6">
                    <div className="published text-right">{moment(props.article.publishedAt).format('MMM Do YY')}</div>
                </div>
            </div>
            <Link className="show-single" to={`/articles/${props.article.source.id}/${props.article.title}`} />
        </li>
    );
}

export default List