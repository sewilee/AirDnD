import React from 'react';

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
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    if (!this.props.errors.length){
      this.props.closeModal();
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

  render() {
    let signUp, birthday = null;
    let password = "Password"
    if (this.props.formType === "signup"){
      password = "Create a Password";
      signUp = (
        <>
          <input type="text" 
            className="login-input"
            value={this.state.fname} 
            onChange={this.update("fname")} 
            placeholder="First name"
          />
          <input type="text" 
            className="login-input"
            value={this.state.lname} 
            onChange={this.update("lname")} 
            placeholder="Last name"
          />
        </>
      );
      birthday = (
        <>
          <label className="login-birthday">Birthday</label>
          <p className="login-birthday-text">To sign up, you must be 18 or older. Other people won't see your birthday.</p>
          <input type="date" 
            className="login-input"
            value={this.state.birthday} 
            onChange={this.update("birthday")} 
          />
        </>
      );
    }

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.renderErrors()}
          <div className="login-form">

            <input type="text"
              className="login-input"
              value={this.state.email}
              onChange={this.update('email')}
              placeholder="Email address"
            />

            {signUp}

            <input type="password"
              className="login-input"
              value={this.state.password}
              onChange={this.update('password')}
              placeholder={password}
            />

            {birthday}

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
