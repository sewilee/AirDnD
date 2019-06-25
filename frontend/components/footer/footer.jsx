import React from 'react';

const Footer = ({page}) => {

    let className = "footer-bar"
    if(page === "splash"){ className = "footer-bar-splash" }

    return(
        <footer className={className}>
            <section>
                <p>Created by Sewina Lee</p>
            </section>
            <section>
                <a href="https://github.com/sewilee/Ooze_Awakening"> GitHub </a>
                <span> | </span>
                <a href="https://www.linkedin.com/in/sewina-lee-120b7788/"> Linkedin </a>
                <span> | </span>
                <a href="https://angel.co/sewilee"> AngelList </a>
            </section>
        </footer>
    );
}

export default Footer;