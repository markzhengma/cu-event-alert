import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class SingleEvent extends Component {
    constructor() {
        super();
        this.state = {
            eventData: null,
        }
    }

    render() {
        return (
            <div className = "single-page">
                <h1>This is the single page!</h1>
            </div>
        )
    }
}

export default SingleEvent;