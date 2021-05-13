import React, { Component } from "react";

class Tweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tweetes: []
        };
    }

    componentDidMount() {
        const url = '/tweetes/index';
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.setState({ tweetes: response }))
            .catch(() => this.props.history.push("/"));
    }

    render() {
        const { tweetes } = this.state;
        const allTweetes = tweetes.map((tweete, index) => (
            <li key={tweete.id} className="tweete-container">
                <div className="tweete">
                    <div className="tweete-left-side">
                        <div className="prof-cont">
                            profpic
                        </div>
                        <div className="tweete-right-side">
                            <div className="top-tweete">
                            </div>
                            <div className="tweete-content">
                                <span>{tweete.tweete}</span>
                                <p>image if any</p>
                            </div>
                            <div className="button-tools">
                                <p>Here goes buttons</p>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ));

        return (
            <div className="feed">
                <h1>Good to see you again... {this.props.location.state.cur_usr_username}</h1>
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
                <ul className="feed-list">
                    {allTweetes} 
                </ul>
            </div>
        );
    }
}

export default Tweets;