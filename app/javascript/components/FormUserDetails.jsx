import React, { Component } from "react";
import Input from '../functions/Input';
import BirthDay from '../functions/BirthDay';
import BirthMonth from '../functions/BirthMonth';
import BirthYear from '../functions/BirthYear';
import ContainedButton from '../functions/ContainedButton';
import IconButton from "../functions/IconButton";

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();

        this.props.prevStep();
    }

    render(){
        const step = this.props.step;

        const { name, email, month, day, year, password_digest, username, 
            profile_private, biography, bio_characters, isUploaded,
            profile_picture } = 
            this.props.values;

        const { handleChange, handleClick, handleImageChange, editProfilePicture } 
        = this.props;

        switch(step){
            case 1:
                return (
                    <div className="step_form">
                        <div className="top-form">
                            <IconButton onClick={ this.back }
                                buttonClass="first"
                                iconClass="fa fa-arrow-left" />
                            <i className="fa fa-twitter"></i>
                            <ContainedButton onClick={ this.continue } 
                            type="primary" Text="Next" />
                        </div>
                        
                        <h2 className="form_title">Create your account</h2>
                        <Input labelClass="form_label" label="Name " 
                        inputClass="form_field" inputID="name" name="name" 
                        value={ name } 
                        onChange={ handleChange } 
                        type="text" required="true" />
                        <br/>
                        <Input labelClass="form_label" label="Email " 
                        inputClass="form_field"  inputID="email" name="email" 
                        value={ email } 
                        onChange={ handleChange } 
                        type="text" required="true" />
                        <h4>Date of birth</h4>
                        <p>This will not be shown publicly. Confirm your own 
                            age, even if this account is for a business, a pet, 
                            or something else.</p>
                        <div className="select-birthdate">
                            <BirthMonth optionName="month" selectName="month" 
                            selectValue={ month } 
                            selectID="months" 
                            onChange={ handleChange } />
                            <BirthDay optionName="day" selectName="day" 
                            selectValue={ day } selectID="days" 
                            onChange={ handleChange } />
                            <BirthYear optionName="year" selectName="year" 
                            selectValue={ year } 
                            selectID="years" onChange={ handleChange } />  
                        </div>
                    </div>
                )
            case 2: 
                return (
                    <div className="step_form">
                        <div className="top-form">
                            <IconButton onClick={ this.back }
                                iconClass="fa fa-arrow-left" />
                            <i className="fa fa-twitter"></i>
                            <ContainedButton onClick={ this.continue } 
                            type="primary" Text="Next" />
                        </div>
                        
                        <h2 className="form_title">You'll need a password</h2>
                        <p>Make sure it's 8 characters or more</p>
                        <Input labelClass="form_label" label="Password " 
                        inputClass="form_field" inputID="password" 
                        name="password_digest" 
                        value={ password_digest } 
                        onChange={ handleChange } type="password" 
                        required="true" />
                    </div>
                )
            case 3:
                return (
                    <div className="step_form">
                        <div className="top-form">
                            <IconButton onClick={ this.back }
                                iconClass="fa fa-arrow-left" />
                            <i className="fa fa-twitter"></i>
                            <ContainedButton onClick={ this.continue } 
                            type="primary" Text="Next" />
                        </div>
                        
                        <h2 className="form_title">Pick a username</h2>
                        <Input labelClass="form_label" label="Username " 
                        inputClass="form_field" inputID="username" type="text" 
                        name="username" value={ username } 
                        onChange={ handleChange } />
                        <h2>Account privacy</h2>
                        <input type="checkbox" name="profile_private" id="private" 
                        type="checkbox" value={ profile_private } 
                        onClick={ handleClick } />
                        <p>If you make your account private, your tweetes can 
                            only be seen by your followers, and you will have to 
                            approve their follower request.</p>
                    </div>
                )
            case 4: 
                return (
                    <div className="step_form picture">
                        <div className="top-form">
                            <IconButton onClick={ this.back }
                                iconClass="fa fa-arrow-left" />
                            <i className="fa fa-twitter"></i>
                            <ContainedButton onClick={ this.continue }
                            type="primary" Text="Next" />
                        </div>

                        <h2 className="title_form">Pick a profile picture</h2>
                        <p>Have a favourite selfie? Upload it now.</p>

                        <div>
                            {
                                !isUploaded ? (
                                    <>
                                        <label className="profile_picture_button" 
                                        htmlFor="file_input">
                                            <img id="profile_image" 
                                            src="assets/picture_profile.jpeg" 
                                            alt=""/> 
                                            <i className="fa fa-camera" 
                                            aria-hidden="true"></i>
                                        </label>
                                        <input type="file" id="file_input" 
                                        name="profile_picture" width="200" 
                                        height="200" accept="image/*"  
                                        onChange={ handleImageChange } />  
                                    </>
                                ) : (
                                    <div className="profile_picture_button">
                                        <img src={ profile_picture } 
                                    alt="uploaded_image" id="uploaded_image"/>
                                        <i className="fa fa-times uploaded" 
                                        aria-hidden="true" 
                                        onClick={ editProfilePicture }></i>
                                    </div>
                                    
                                )
                            }
                            
                        </div>
                    </div>
                )

            case 5: 
                return (
                    <div className="step_form">
                        <div className="top-form">
                            <IconButton onClick={ this.back } 
                            iconClass="fa fa-arrow-left" />
                            <i className="fa fa-twitter"></i>
                            <ContainedButton onClick={this.continue}
                            Text="Next" type="primary" />
                        </div>

                        <h2>Describe yourself</h2>
                        <p>What makes you special? Don't think too hard, 
                            just have fun with it.</p>

                        <div className="container">
                            <textarea name="biography" id="biography"
                            className="form_field bio" cols="90" rows="10"
                            value={ biography }
                            onChange={ handleChange }></textarea>
                            <span className="form_label" >Your bio </span>
                            <span className="bio_label">
                                { bio_characters }/160</span>
                        </div>
                    </div>
                    
                )
        }
    }
}

export default FormUserDetails;