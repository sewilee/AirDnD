import React from 'react';
import {
  EmailAddress, Password,FirstName, LastName, SignUpLink, LogInLink,
} from './session_form_items';
import Birthday from './session_form_birthday';
import { merge } from 'lodash';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      birthday: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleBirthday = this.handleBirthday.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  } 

  componentDidMount(){
    this.props.clearErrors()
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    // const userError = validateUser(user)
    // {
    //   username: "Username is required"
    //   lasName: "Lastname is required"
    //   password: null
    //   confirmationPassword: "Must match password"
    //   error: true
    // }
    this.props.processForm(user);
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
    debugger
    this.props.demoLogin(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    const { email, password, formType, fname, lname, openModal } = this.props
    const { birthday } = this.state
    const LogIn = (
      <>
        <h3 className="login-header" >Log in to continue</h3>
        <EmailAddress email={email} update={this.update} />
        <Password password={password} update={this.update} formType={formType} />
      </>
    );

    const SignUp = (
      <>
        <p className="login-text-head" >Sign up with 
         <span onClick={this.handleDemo}>Demo</span> 
        </p>
        <p className="login-text-inline"><span>or</span></p>
        <EmailAddress email={email} update={this.update}/>
        <FirstName fname={fname} update={this.update}/>
        <LastName lname={lname} update={this.update} />
        <Password password={password} update={this.update} formType={formType}/>

        <li className="login-birthday-items">
          <label className="login-text-label">Birthday</label>
          <p className="login-text-p">To sign up, you must be Level 18 or higher.</p>
          <Birthday birthday={birthday} handleBirthday={this.handleBirthday}/>
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
          {this.renderErrors()}
            <div className="login-form">

              <ul className="login-input-container">
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
