import React, {Component} from 'react'
import '../assets/Header.css'

class App extends Component {
    constructor(props) {
        super(props);
    }

    back = () => {
        this.props.goBack();
    }

    render() {
        return (
            <div className="header-wrap">
                <span className="icon" onClick={this.back}>
                    &lt;
                    {/* '<' 箭头的转义*/}
                </span>
                <h1 className="header-title">新闻公告</h1>
            </div>
        );
    }
}

export default App;