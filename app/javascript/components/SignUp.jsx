import React, { Component } from "react";
import { signUpUser } from "../functions/ApiUtils";
import FormUserDetails from './FormUserDetails'
import Confirm from './Confirm'

class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = {
            step: 1,
            name: '',
            phone: '',
            email: '',
            day: '',
            month: '',
            year: '',
            password_digest: '',
            username: '',
            private: false,
            profile_picture: '',
            isUploaded: false,
            biography: '',
            bio_characters: 0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBirthdateOption = this.onChangeBirthdateOption.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.nextStep = this.nextStep.bind(this);
        this.prevStep = this.prevStep.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.editProfilePicture = this.editProfilePicture.bind(this);
        this.onChangeBioInput = this.onChangeBioInput.bind(this);
    }

    

    onChangeInput(e){
        const name = e.target.name;
        const value = e.target.value;

        this.setState({[name]: value});
    }

    toggle(){
        this.setState({private: !this.state.private});
    }

    onChangeBirthdateOption(e) {
        e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
    }

    async handleSubmit(e){
        e.preventDefault();

        await signUpUser({
            name: this.state.name, phone: this.state.phone,
            email: this.state.email,
            birthdate: `${this.state.month} ${this.state.day} ${this.state.year}`,
            password_digest: this.state.password_digest,
            username: this.state.username, private: this.state.private,
            profile_picture: this.state.profile_picture,
            biography: this.state.biography
        })
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleImageChange(e) {

        if(e.target.files && e.target.files[0]){
            let reader = new FileReader();

            reader.onload = (e) => {
                this.setState({
                    profile_picture: e.target.result,
                    isUploaded: true
                });
            }

            
            reader.readAsDataURL(e.target.files[0])
        }
        
    }

    editProfilePicture() {
        this.setState({
            profile_picture: '',
            isUploaded: false
        })
    }

    onChangeBioInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        if (value.length <= 160){
            this.setState({
                [name]: value,
                bio_characters: value.length
            })  
        }
        
    }

    render() {
        const { step } = this.state;
        const profile_private = this.state.private;
        const { name, phone, email, day, month, year, password_digest, username, 
            profile_picture, isUploaded, biography, bio_characters } = this.state
        const values_one = {
            name, phone, email, day, month, year 
        }

        const values_two = {
            password_digest 
        }

        const values_three = {
            username, profile_private
        }

        const values_four = {
            profile_picture, isUploaded
        }

        const values_five = {
            biography, bio_characters
        }

        switch(step) {
            case 1: 
                return (
                    <div className="form">
                        <FormUserDetails 
                            step={this.state.step}
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeInput }
                            values={ values_one }
                        />  
                    </div>
                )
            case 2: 
                return (
                    <div className="form">
                        <FormUserDetails 
                            step={this.state.step}
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeInput }
                            values={ values_two }
                        /> 
                    </div>
                )
            case 3:
                return (
                    <div className="form">
                        <FormUserDetails
                            step={this.state.step} 
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeInput }
                            handleClick={ this.toggle }
                            values={ values_three }
                        /> 
                    </div>
                )
            case 4:
                return (
                    <div className="form">
                        <FormUserDetails 
                            step={this.state.step}
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeInput }
                            handleImageChange={ this.handleImageChange }
                            values={ values_four }
                            editProfilePictue={ this.editProfilePicture }
                        /> 
                    </div>
                )
            case 5: 
                return (
                    <div className="form">
                        <FormUserDetails 
                            step={ this.state.step }
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeBioInput }
                            values={ values_five }
                        />
                    </div>
                )
            case 6:
                return (
                    <div className="form">
                        <Confirm
                            nextStep={ this.nextStep }
                            prevStep={ this.prevStep }
                            handleChange={ this.onChangeInput }
                            values={ values_one }
                            handleSubmit={ this.handleSubmit }
                        />
                    </div>
                )
        }
    }
}

export default SignUp;