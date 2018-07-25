import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../assets/news-item.css'

class NewsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id} = this.props;
        return (
            <Link to={"/newsDetails/" + id} className="item-wrap">
                <h2 className="title">
                    所有不好都消散，画个圈圈扔出去
                </h2>
                <div className="item-content">
                    这里是内容，内容就是所有不好的感觉都散散散，装进漂流瓶，绑上石头扔进大海，沉入海底。清澈蓝色的大海mua~   这里是内容，内容就是所有不好的感觉都散散散，装进漂流瓶，绑上石头扔进大海，沉入海底。清澈蓝色的大海mua~
                </div>
                <div className="item-data">
                    2018年x月x日
                </div>
                <div className="show-details">
                    查看详情
                </div>
            </Link>
        );
    }
}

export default NewsItem;