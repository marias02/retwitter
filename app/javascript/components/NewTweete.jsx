import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createTweete } from "../redux/actions/tweetes_actions";
import IconButton from "../functions/IconButton"

class NewTweete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            tweeteCharacters: 0,
            media: null
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange(e){
        this.setState({ media: e.target.files[0]})
    }

    onChangeInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (value.length <= 280) {
            this.setState({
                [name]: value,
                tweeteCharacters: value.length
            })
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { newTweete, tweeteText } = this.props;
        const { text, media } = this.state;
        await newTweete({text, media})
    }

    render() {

        return (
            <div className="new_tweete_container">
                <div className="new_tweete_container top">
                    <p>prof_pic</p>
                    <textarea id="new_tweet_textarea" name="text"
                    placeholder="What's happening?" 
                    value={this.state.text} cols="30" 
                    onChange={this.onChangeInput} rows="5"></textarea>
                </div>
                <div className="new_tweete_container bottom">
                    <div className="buttons_container">
                        <IconButton onChange={this.onImageChange} buttonType="image" buttonClass="new_tweete_icons" iconClass="fa fa-image" />
                        <IconButton buttonClass="new_tweete_icons" iconClass="fa fa-image" />
                        <IconButton buttonClass="new_tweete_icons" iconClass="fa fa-upload" />
                        <IconButton buttonClass="new_tweete_icons" iconClass="fa fa-smile-o" />
                        <IconButton buttonClass="new_tweete_icons" iconClass="fa fa-calendar" />
                        <IconButton buttonClass="new_tweete_icons" iconClass="fa fa-map-marker" />  
                    </div>
                    <button onClick={this.handleSubmit}>Tweet</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tweeteText: state.newTweeteForm,
});

const mapDispatchToProps = dispatch => ({
    newTweete: (estate) => dispatch(createTweete(estate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTweete);