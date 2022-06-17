import React, { Component } from "react";
import { getTweeteRequest } from "../redux/actions/tweetes_actions";
import { connect } from "react-redux";
import { destroyTweete } from "../redux/actions/tweetes_actions";

class Tweete extends Component {
    constructor(props) {
        super(props);

        this.tweeteDelete = this.tweeteDelete.bind(this);
    }

    async componentDidMount() {
        const { downloadTweete } = this.props
        await downloadTweete(this.props.match.params.id);
    }

    tweeteDelete = async (id) => {
        const { tweeteDestroy } = this.props;
        await tweeteDestroy(id);
    }

    render() {
        const { tweete } = this.props.tweete;
        const tweete_container = 
            <div className="tweete">
                <div className="tweete-left-side">
                    <div className="prof-cont">
                        profpic
                    </div>
                    <div className="tweete-right-side">
                        <div className="top-tweete">
                        </div>
                        <div className="tweete-content">
                            <span>{tweete.text}</span>
                            <p>image if any</p>
                        </div>
                        <div className="button-tools">
                            <p>Here goes buttons</p>
                        </div>
                    </div>
                    <button onClick={() => this.tweeteDelete(tweete.id)}>Delete</button>
                </div>
            </div>

        { this.props.tweeteDel.tweeteDeleted ? this.props.history.push("/home") : null }
        return (
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
                </div>
                <div className="usefulness"></div>
                {tweete_container}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweete: state.tweeteShow,
    tweeteDel: state.tweeteDel
});

const mapDispatchToProps = dispatch => ({
    downloadTweete: (id) => dispatch(getTweeteRequest(id)),
    tweeteDestroy: (id) => dispatch(destroyTweete(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tweete);