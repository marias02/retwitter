import React, { Component } from "react";
import Input from '../functions/Input';
import BirthDay from '../functions/BirthDay';
import BirthMonth from '../functions/BirthMonth';
import BirthYear from '../functions/BirthYear';

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
        switch(step){
            case 1:
                return (
                    <div className="first_step_form">
                        <div className="top-form first-step">
                            <i className="fa fa-twitter"></i>
                            <button onClick={ this.continue }>Next</button> 
                        </div>
                        
                        <h2 className="form_title">Create your account</h2>
                        <Input labelClass="form_label" label="Name " 
                        inputClass="form_field" inputID="name" name="name" 
                        value={ this.props.values.name } 
                        onChange={ this.props.handleChange } 
                        type="text" required="true" />
                        <br/>
                        <Input labelClass="form_label" label="Email " 
                        inputClass="form_field"  inputID="email" name="email" 
                        value={ this.props.values.email } 
                        onChange={ this.props.handleChange } 
                        type="text" required="true"/>
                        <h4>Date of birth</h4>
                        <p>This will not be shown publicly. Confirm your own 
                            age, even if this account is for a business, a pet, 
                            or something else.</p>
                        <div className="select-birthdate">
                            <BirthMonth optionName="month" selectName="month" 
                            selectValue={ this.props.values.month } 
                            selectID="months" 
                            onChange={ this.props.handleChange } />
                            <BirthDay optionName="day" selectName="day" 
                            selectValue={ this.props.values.day } selectID="days" 
                            onChange={ this.props.handleChange } />
                            <BirthYear optionName="year" selectName="year" 
                            selectValue={ this.props.values.year } 
                            selectID="years" onChange={ this.props.handleChange } />  
                        </div>
                    </div>
                )
            case 2: 
                return (
                    <div className="second_step_form">
                        <div className="top-form">
                            <button onClick={ this.back } 
                            className="back_landing_page"><i 
                            className="fa fa-arrow-left" aria-hidden="true"></i>
                            </button>
                            <i className="fa fa-twitter"></i>
                            <button onClick={ this.continue }>Next</button>
                        </div>
                        
                        <h2 className="form_title">You'll need a password</h2>
                        <p>Make sure it's 8 characters or more</p>
                        <Input labelClass="form_label" label="Password " 
                        inputClass="form_field" inputID="password" 
                        name="password_digest" 
                        value={this.props.values.password_digest} 
                        onChange={ this.props.handleChange } type="password" 
                        required="true" />
                    </div>
                )
            case 3:
                return (
                    <div className="third_step_form">
                        <div className="top-form">
                            <button onClick={ this.back } 
                            className="back_landing_page"><i 
                            className="fa fa-arrow-left" aria-hidden="true"></i>
                            </button>
                            <i className="fa fa-twitter"></i>
                            <button onClick={ this.continue }>Next</button> 
                        </div>
                        
                        <h2 className="form_title">Pick a username</h2>
                        <Input labelClass="form_label" label="Username " 
                        inputClass="form_field" inputID="username" type="text" 
                        name="username" required="false"
                        value={ this.props.values.username } 
                        onChange={ this.props.handleChange }
                         />
                        <h2>Account privacy</h2>
                        <input type="checkbox" name="profile_private" id="private" 
                        type="checkbox" value={this.props.values.profile_private} 
                        onClick={ this.props.handleClick } />
                        <p>If you make your account private, your tweetes can 
                            only be seen by your followers, and you will have to 
                            approve their follower request.</p>
                    </div>
                )
            case 4: 
                return (
                    <div className="third_step_form picture">
                        <div className="top-form">
                            <button onClick={ this.back } 
                            className="back_landing_page"><i 
                            className="fa fa-arrow-left" aria-hidden="true"></i>
                            </button>
                            <i className="fa fa-twitter"></i>
                            <button onClick={ this.continue }>Next</button>
                        </div>

                        <h2 className="title_form">Pick a profile picture</h2>
                        <p>Have a favourite selfie? Upload it now.</p>

                        <div>
                            {
                                !this.props.values.isUploaded ? (
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
                                        onChange={ this.props.handleImageChange } />  
                                    </>
                                ) : (
                                    <div className="profile_picture_button">
                                        <img src={ this.props.values.profile_picture } 
                                    alt="uploaded_image" id="uploaded_image"/>
                                        <i className="fa fa-times uploaded" 
                                        aria-hidden="true" 
                                        onClick={ this.props.editProfilePicture }></i>
                                    </div>
                                    
                                )
                            }
                            
                        </div>
                    </div>
                )

            case 5: 
                return (
                    <div className="first_step_form">
                        <div className="top-form">
                            <button onClick={ this.back }
                                className="back_landing_page"><i
                                className="fa fa-arrow-left" aria-hidden="true"></i>
                            </button>
                            <i className="fa fa-twitter"></i>
                            <button onClick={ this.continue }>Next</button>
                        </div>

                        <h2>Describe yourself</h2>
                        <p>What makes you special? Don't think too hard, 
                            just have fun with it.</p>

                        <div className="container">
                            <textarea name="biography" id="biography"
                            className="form_field bio" cols="90" rows="10"
                            value={ this.props.values.biography }
                            onChange={ this.props.handleChange }></textarea>
                            <span className="form_label" >Your bio </span>
                            <span className="bio_label">
                                { this.props.values.bio_characters }/160</span>
                        </div>
                    </div>
                    
                )

            case 6: 
                return (
                    <div className="first_step_form">
                        <div className="top-form">
                            <button onClick={this.back}
                                className="back_landing_page"><i
                                className="fa fa-arrow-left" 
                                aria-hidden="true"></i>
                            </button>
                            <i className="fa fa-twitter"></i>
                            <button onClick={this.continue} 
                            id="next_confirm_button">Next</button>
                        </div>

                        <h2>Create your account</h2>
                        <div className="container">
                            <input type="text" id="name" className="form_field" 
                            name="name" value={ this.props.values.name } readOnly />
                            <span className="form_label confirm">Name</span>
                        </div>

                        {
                            this.props.values.phone === '' && this.props.values.email !== '' ? (
                                <div className="container">
                                    <input type="text" id="email" 
                                    className="form_field" name="email" 
                                    value={ this.props.values.email } readOnly />
                                    <span className="form_label confirm">Email</span>
                                </div>  
                            ) : (
                                <div className="container">
                                    <input type="text" id="phone" 
                                    className="form_field" name="phone" 
                                    value={ this.props.values.phone } readOnly />
                                    <span className="form_label confirm">Phone</span>
                                </div> 
                            )
                        }

                        <div className="container">
                            <input type="text" id="birthdate" 
                            className="form_field" name="birthdate" 
                            value={ `${ this.props.values.day } 
                            ${ this.props.values.month } 
                            ${ this.props.values.year }` } readOnly />
                            <span className="form_label confirm">Birth date</span>
                        </div>
                        
                        <p id="confirm_p">By signing up you agree our 
                        cookies use. Others will be able to find you by email 
                        or phone number when 
                        provided.</p>

                        <button id="confirm_button" onClick={ this.props.handleSubmit }>Sign Up</button>
                    </div>
                )
        }
    }
}

export default FormUserDetails;