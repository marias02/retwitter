import React, { Component } from "react";
import { onTweeteLike } from "../redux/actions/interaction_actions";
import { connect } from "react-redux";
import NewTweete from "../components/NewTweete";
import Navbar from "./Navbar";
import { TweetsList } from "../functions/AllTweets";

class Tweets extends Component {
    constructor(props) {
        super(props);

        this.onLike = this.onLike.bind(this);
    }

    onLike = async (id) => {
        const { tweeteLike } = this.props;
        await tweeteLike(id);
    }

    render() {

        return (
            <div className="home-division">
                <Navbar />
                <div className="feed">
                    <div className="sticky-home-container">
                        <div className="home-title-container">
                            <span className="home-title">Home</span>
                        </div>
                        <div className="moment-container">
                            <div className="moment-button">
                                <i className="fa fa-plus-square-o" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                    <div className="new-tweete-box">
                        <NewTweete />
                    </div>
                    <div className="usefulness"></div>
                    <TweetsList />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweetes: state.latestTweetes,
});

const mapDispatchToProps = dispatch => ({
    tweeteLike: (id) => dispatch(onTweeteLike(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);