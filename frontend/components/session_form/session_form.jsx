import React from 'react';
import {
  EmailAddress,
  Password,
  FirstName,
  LastName,
  SignUpLink,
  LogInLink,
} from './session_form_items';
import Birthday from './session_form_birthday';

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
    const user = Object.assign({}, this.state);
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
        <h3>Log in to continue</h3>
        <EmailAddress email={email} update={this.update} />
        <Password password={password} update={this.update} formType={formType} />
      </>
    );

    const SignUp = (
      <>
        <p>Sign Up with Demo</p>
        <p>or</p>
        <EmailAddress email={email} update={this.update}/>
        <FirstName fname={fname} update={this.update}/>
        <LastName lname={lname} update={this.update} />
        <Password password={password} update={this.update} formType={formType}
        />

        <li>
          <label className="login-birthday">Birthday</label>
          <p className="login-text">To sign up, you must be 18 or older. Other people won't see your birthday.</p>
          <Birthday birthday={birthday} handleBirthday={this.handleBirthday}/>
        </li>

        <li className="login-items">
          <p className="login-text">
            Something Something Something...Marketing
          </p>
        </li>
      </>
    );

    let modal = null;
    if (formType === "Log in"){ modal = LogIn }
    if (formType === "Sign up"){ modal = SignUp }

    let otherLink = null;
    
    if (formType === "Log in") { otherLink = <SignUpLink openModal={openModal}/> }
    if (formType === "Sign up") { otherLink = <LogInLink openModal={openModal}/> }

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
        {otherLink}
      </div>
    )
  }
}

export default SessionForm;
