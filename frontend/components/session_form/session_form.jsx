import React from 'react';
import {
  EmailAddress, Password,FirstName, LastName, SignUpLink, LogInLink,
} from './session_form_items';
import Birthday from './session_form_birthday';
import { merge } from 'lodash';
import { validateUser } from './error_user_validation';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthday: "",
      userError: null,
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  } 

  componentDidMount(){
    // e.stopPropagation();
    this.props.clearErrors();
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.clearErrors();
    this.setState({ userError: null }, () => {});

    let user = merge({}, this.state);
    const newErrors = validateUser(user, this.props.formType)
    if (newErrors) {  
      this.setState({ userError: newErrors }, () => {
      })
    } else {  
      this.props.processForm(user);
    }
  }

  handleBirthday(field) {
    const { birthday } = this.state
    
    return (e) => {
      let birthArr = birthday.split('-');
      const birthObj = {year: 0, month: 1, day: 2};

      birthArr[birthObj[field]] = e.currentTarget.value;
      this.setState({
        birthday: birthArr.join('-'),
      })
    }
  }

  handleDemo(){
    const user = {
        email: "demouser@demo.com",
        password: "password",
    }
    this.props.demoLogin(user);
  }

  renderErrors() {
    return(
      <ul className="login-items errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-text">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const { formType, openModal } = this.props;
    const { fname, lname, email, password, birthday, userError } = this.state;
    const LogIn = (
      <>
        <h3 className="login-header" >Log in to continue</h3>
        <EmailAddress email={email} update={this.update} userError={userError}/>
        {this.renderErrors()}
        <Password password={password} update={this.update} formType={formType} userError={userError}/>
      </>
    );
    
    const SignUp = (
      <>
        <p className="login-text-head" >Sign up with 
         <span onClick={this.handleDemo}>Demo</span> 
        </p>
        <p className="login-text-inline"><span>or</span></p>
        <EmailAddress email={email} update={this.update} userError={userError}/>
        {this.renderErrors()}
        <FirstName fname={fname} update={this.update} userError={userError}/>
        <LastName lname={lname} update={this.update} userError={userError}/>
        <Password password={password} update={this.update} formType={formType} userError={userError}/>

        <li className="login-birthday-items">
          <label className="login-text-label">Birthday</label>
          <p className="login-text-p">To sign up, you must be Level 18 or higher.</p>
          <Birthday birthday={birthday} handleBirthday={this.handleBirthday} userError={userError}/>
        </li>

        <li className="login-items">
          <p className="login-text-p">
            I have an intelligence of six. I know what I’m doing.
          </p>
        </li>
      </>
    );
    
    let modal, otherLink, demo = null;
    if (formType === "Log in"){ 
      modal = LogIn;
      otherLink = <SignUpLink openModal={openModal}/>;
      demo = (
        <>
          <p className="login-text-inline-behind" ><span>or continue with</span></p>
          <button className="session-demo" onClick={this.handleDemo}>Demo</button>
        </>
      );
    }
    if (formType === "Sign up"){ 
      modal = SignUp; 
      otherLink = <LogInLink openModal={openModal}/>;
    }
    
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">

              <ul className="login-input-container">
                {/* {this.renderErrors()} */}
                {modal}
              </ul>

              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
        </form>
        {demo}
        {otherLink}
      </div>
    )
  }
}

export default SessionForm;
