import React from 'react';

import SearchBox from './SearchBox';
import EventTag from "./EventTag";
import EventHighlight from "./EventHighlight";
import EventRanking from "./EventRanking";
import EventRecommend from "./EventRecommend";

const Home = (props) => {
    return (
         <div className = 'home-content'>
            <SearchBox/>
            <EventTag/>
            <EventHighlight/>
            <EventRanking/>
            {props.auth ? <EventRecommend user = {props.user}/> : ""}
        </div>
    )
}

export default Home;