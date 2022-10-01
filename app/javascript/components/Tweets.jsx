import React, { Component } from "react";
import { getLatestTweetes } from "../redux/actions/tweetes_actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import NewTweete from "../components/NewTweete";
import Navbar from "./Navbar";
import IconLabelButton from "../functions/IconLabelButton";
import IconButton from "../functions/IconButton";

class Tweets extends Component {
    constructor(props) {
        super(props);
    }

    async componentDidMount () {
        const { downloadTweetes } = this.props
        await downloadTweetes();
    }

    render() {
        const { tweetes } = this.props.tweetes;
        const allTweetes = tweetes.map((tweete) => (
            <Link to={"/tweetes/" + tweete.id} id={tweete.id}>
              <li key={tweete.id} className="tweete-container">
                <div className="tweete">
                    <div className="tweete-left-side">
                        <img className="prof-cont" src={"https://images.pexels.com/photos/354951/pexels-photo-354951.jpeg?cs=srgb&dl=pexels-pixabay-354951.jpg&fm=jpg"} />
                    </div>
                    <div className="tweete-right-side">
                        <div className="top-tweete">
                            <span>username</span>
                        </div>
                        <div className="tweete-content">
                            <span>{tweete.text}</span>
                            {tweete.media != null ? <img className="tweete_media" src={"https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/v1555285106/shape/mentalfloss/chinchilla_cat_5833713404_1.jpg?itok=vkNCc-u9"} /> : <></>}
                        </div>
                        <div className="button-tools">
                            <IconLabelButton type="primary" Text={0} className="comment" iconClass="fa fa-comment-o" />
                            <IconLabelButton type="primary" Text={0} className="retweet" iconClass="fa fa-retweet" />
                            <IconLabelButton type="primary" Text={0} className="like" iconClass="fa fa-heart-o" />
                            <IconButton buttonClass="share" iconClass="fa fa-upload" />
                        </div>
                    </div>
                </div>
            </li>
          </Link>
            
        ))

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
                    <ul className="feed-list">
                        { allTweetes }
                    </ul> 
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweetes: state.latestTweetes,
});

const mapDispatchToProps = dispatch => ({
    downloadTweetes: () => dispatch(getLatestTweetes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);