import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventHighlight extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                {this.props.eventData ?
                    <div className = "highlight-section">
                        <div className = "highlight-title">
                            <b>Event Highlights</b>
                        </div>
                        <div className = "highlight-scroller">
                            <div className = "highlight-btn prev-highlight"/>
                            <div className = "highlight-single">
                                <div className = "highlight-image"></div>
                                <div className = "highlight-detail">
                                    <b>{this.props.eventData[0].event_name}</b>
                                    <p><b>Time: </b>{this.props.eventData[0].event_time}</p>
                                    <p><b>Location: </b><a href = {`https://www.google.com/search?q=${this.props.eventData[0].event_location} (${this.props.eventData[0].event_location_detail})`} target = "_blank">
                                        {this.props.eventData[0].event_location} ({this.props.eventData[0].event_location_detail})
                                        </a></p>
                                </div>
                            </div>
                            <div className = "highlight-btn next-highlight"/>
                        </div>
                    </div>
                    : ""}
            </div>
        )
    }
}

export default EventHighlight;