import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventRecommend extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className = "recommend-section">
                <h3>Hello, {this.props.user.firstname}. These are events you may be interested in...</h3>
            </div>
        )
    }
}

export default EventRecommend;