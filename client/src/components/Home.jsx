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
            <EventHighlight eventData = {props.eventData}
                            selectEventHandler = {props.selectEventHandler}
                            />
            <EventRanking eventData = {props.eventData}/>
            {props.auth ? <EventRecommend user = {props.user}/> : ""}
        </div>
    )
}

export default Home;