import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createTweete } from "../redux/actions/tweetes_actions";

class NewTweete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            tweeteCharacters: 0
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        const { text } = this.state;
        await newTweete({ text })
    }

    render() {

        return (
            <div className="new_tweete_container">
                <p>prof_pic</p>
                <textarea name="text" 
                value={this.state.text} id="" cols="30" 
                onChange={this.onChangeInput} rows="10"></textarea>
                <button onClick={this.handleSubmit}>Tweet</button>
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