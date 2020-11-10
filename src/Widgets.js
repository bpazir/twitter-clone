import React from 'react';
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
           <div className="widgets_input">
               <SearchIcon className="widgets_searchIcon" />
               <input placeholder="Search Twitter" type="text"/>
           </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1321337698607489024"} />
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="myheroacademia"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://www.youtube.com/results?search_query=reactjs"}
                options={{ text: "#reactjs is awesome", via: "" }}
                />
            </div>
        </div>
    )
}

export default Widgets
