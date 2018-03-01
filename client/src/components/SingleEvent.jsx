import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class SingleEvent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className = "single-page">
                <h1>{this.props.selectedEvent.event_name}</h1>
                <p>{this.props.selectedEvent.likes} Likes</p>
                <p><b>Event Type: </b>{this.props.selectedEvent.event_type}</p>
                <p><b>Start Time: </b>{this.props.selectedEvent.event_time}</p>
                <p><b>Location: </b>{this.props.selectedEvent.event_location} ({this.props.selectedEvent.event_location_detail})</p>
                <p><b>Description: </b>{this.props.selectedEvent.event_desc}</p>
            </div>
        )
    }
}

export default SingleEvent;