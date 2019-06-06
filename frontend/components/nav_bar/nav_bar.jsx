import React from 'react';
import { Link } from 'react-router-dom';
import UserDropdown from '../dropdown/user_dropdown';
import HostDropdown from '../dropdown/host_dropdown';
import SearchContainer from '../search/search_container';
import { remove } from 'lodash';

const LeftNav = (props) => {
    const { page, path } = props;
    let search = null;
    if(page != "splash"){
        search = (
            <SearchContainer path={path}/>
        );
    }

    return (
        <nav className="nav-leftside">
            <ul>
                <li className="home-btn">
                    <Link to='/listings'><img src={window.logo_red} /></Link>   
                </li>
                {search}
            </ul>
        </nav>
    )
};

// const helpButton = (<button>Help</button>)                      //place holder

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userDropdown: false,
            hostDropdown: false,
        }
        this.handleDropdown = this.handleDropdown.bind(this);
        this.closeAllDropdown = this.closeAllDropdown.bind(this);
    }
    
    closeAllDropdown(){
        this.setState({
            userDropdown: false,
        }, () => {});
    };
    
    handleDropdown(field){
        return () => {
            let otherDropdowns = Object.keys(this.state);
            remove(otherDropdowns, (ele) => {
                return ele === field;
            })
            if(this.state[field]){
                this.setState({ [field]: false })
            } else {
                otherDropdowns.forEach( dropdown => {
                    this.setState({ [dropdown]: false })
                })
                this.setState({ [field]: true })
            }
        };
    };
    
    render(){
        let userDropdown, hostDropdown = null;
        if (this.state.userDropdown){ 
            userDropdown = <UserDropdown logout={this.props.logout} closeAllDropdown={this.closeAllDropdown}/>
        }
        if (this.state.hostDropdown){
            hostDropdown = <HostDropdown />
        }
        const becomeAHostButton = (
            <button onClick={this.handleDropdown("hostDropdown")}>
                <div className="nav-service-text">
                    Become a DM
                </div>    
            </button>
        );
        const { currentUser, openModal } = this.props;
        
        let navBarClass = "";
        if (this.props.page === "splash"){ navBarClass = " splash" }
        
        const loggedOut = (
            <header className={`nav-bar${navBarClass}`}>
                <LeftNav page={this.props.page} path={this.props.path}/>
                <nav className="nav-rightside">
                    <ul>
                        <li className="nav-btn">
                            <div className="nav-service">
                                {becomeAHostButton}
                                {hostDropdown}
                            </div>
                        </li>

                        {/* <li className="nav-btn">
                            <div>
                                {helpButton}
                            </div>
                        </li> */}

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={() => openModal("signup")}>
                                    <div className="nav-service-text">
                                        Sign up
                                    </div>    
                                </button>
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={() => openModal("login")}>
                                    <div className="nav-service-text">
                                        Log in
                                    </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
        
        const loggedIn = (
            <header className={`nav-bar${navBarClass}`}>
                <LeftNav page={this.props.page}/>
                <nav className="nav-rightside">
                    <ul>
                        <li className="nav-btn">
                            <div className="nav-service">
                                {becomeAHostButton}
                                {hostDropdown}
                            </div>
                        </li>

                        {/* <li className="nav-btn">
                            <div className="nav-service-text">
                                <button>Saved</button>   
                            </div>
                        </li>

                        <li className="nav-btn">
                            <div className="nav-service-text">
                                <button>Trips</button> 
                            </div>
                        </li> */}

                        {/* <li className="nav-btn">
                            <div className="nav-service-text">
                                {helpButton}
                            </div>
                        </li> */}

                        <li className="nav-btn">
                            <div className="nav-service">
                                <button onClick={this.handleDropdown("userDropdown")}>
                                    <div className="nav-service-text">
                                        <img src={window.user_icon_d20}/>
                                    </div>
                                </button>
                                { userDropdown }
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );

        if (currentUser){
            return loggedIn;
        } else {
            // this.closeAllDropdown();
            return loggedOut;
        }
    }
}

export default NavBar;
