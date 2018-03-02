import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EventTag extends Component {
    render() {
        return (
            <div className = "tag-section">
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>Lecture</b>
                </div>
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>Network</b>
                </div>
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>Open House</b>
                </div>
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>Job Fair</b>
                </div>
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>Workshop</b>
                </div>
                <div className = "tag-single">
                    <div className = "tag-image"/>
                    <b>More</b>
                </div>
            </div>
        )
    }
}

export default EventTag;