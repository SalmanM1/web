import React from 'react';

function Contact() {
    return (
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">Contact Information</div>
            </div>
            <div className="window-body">
                <p>Feel free to reach out to me through any of the following methods:</p>
                <ul>
                    <li>Email: </li>
                    <li>LinkedIn:</li>
                    <li>GitHub:</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
