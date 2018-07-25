import React, {Component} from 'react';
import Header from '../components/Header';
import NewsItem from '../components/news-item';
import '../assets/news.css'

class News extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let history = this.props.history;
        return (
            <div>
                <Header goBack={history.goBack}></Header>
                <div className="newsItem-wrap">
                    <NewsItem></NewsItem>
                </div>
            </div>
        );
    }
}

export default News;