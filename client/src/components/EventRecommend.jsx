import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventRecommend extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div className = "recommend-section">
                <div className = "recommend-title">
                    <b>Hello {this.props.user.firstname}. Some events you may be interested in...</b>
                </div>
                <div className = "recommend-list">
                    <div className = "recommend-single">
                        <b>Recommend Event</b>
                        <div className = "recommend-image">
                            <div className = "recommend-detail">
                                <p>Details of the event...</p>
                            </div>
                        </div>
                    </div>
                    <div className = "recommend-single">
                        <b>Recommend Event</b>
                        <div className = "recommend-image">
                            <div className = "recommend-detail">
                                <p>Details of the event...</p>
                            </div>
                        </div>
                    </div>
                    <div className = "recommend-single">
                        <b>Recommend Event</b>
                        <div className = "recommend-image">
                            <div className = "recommend-detail">
                                <p>Details of the event...</p>
                            </div>
                        </div>
                    </div>
                    <div className = "recommend-single">
                        <b>Recommend Event</b>
                        <div className = "recommend-image">
                            <div className = "recommend-detail">
                                <p>Details of the event...</p>
                            </div>
                        </div>
                    </div>
                    <div className = "recommend-single">
                        <b>Recommend Event</b>
                        <div className = "recommend-image">
                            <div className = "recommend-detail">
                                <p>Details of the event...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EventRecommend;