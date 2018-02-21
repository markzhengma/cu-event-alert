import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventHighlight extends Component {
    render() {
        return (
            <div className = "highlight-section">
                <h3>Event Highlights</h3>
                <div className = "highlight-scroller">
                    <div className = "highlight-btn prev-highlight"/>
                    <div className = "highlight-single">
                        <div className = "highlight-image"/>
                        <div className = "highlight-detail">
                            <b>DevFest Columbia</b>
                            <p>Time: 02/12</p>
                            <p>Location: <a href = "https://www.google.com/search?q=Mudd 630, Columbia University" target = "_blank">Mudd 630, Columbia University</a></p>
                        </div>
                    </div>
                    <div className = "highlight-btn next-highlight"/>
                </div>
            </div>
        )
    }
}

export default EventHighlight;