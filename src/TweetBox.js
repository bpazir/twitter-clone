import React, { useState } from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";
import db from './firebase';


let usernames = ["allmightfan","dekufan","ochacofan","nekogasuki", "twitterfan"];
const randUser = usernames[Math.floor(Math.random() * usernames.length)];

var random_boolean = Math.random() >= 0.5;

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Anonymous",
            username: randUser,
            verified: random_boolean,
            text: tweetMessage,
            image: tweetImage,
            avatar: ""
        })

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
        <form action="">
            <div className="tweetBox_input">
                <Avatar src=""></Avatar>
                <input
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage}
                placeholder="What's happening?"
                type="text"
                />
            </div>
            {/* <input
            onChange={(e) => setTweetImage(e.target.value)}
            className="tweetBox_imageInput" 
            placeholder="Optional: Enter image URL"
            type="text"
            /> */}

            <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
        </form>
        </div>
    )
}

export default TweetBox
